interface Env {
  ASSETS: Fetcher;
  CONTACT_EMAIL: {
    send(message: {
      to?: string;
      from: string;
      subject: string;
      text: string;
      html: string;
      replyTo?: string;
    }): Promise<{ messageId: string }>;
  };
}

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  website?: string;
  language?: "pt" | "en";
};

const destination = "thevelvetmargin@hotmail.com";
const sender = "contato@thevelvetmargin.com.br";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] || character);
}

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/api/contact") {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== "POST") {
      return json({ success: false, error: "method_not_allowed" }, 405);
    }

    let payload: ContactPayload;
    try {
      payload = await request.json<ContactPayload>();
    } catch {
      return json({ success: false, error: "invalid_json" }, 400);
    }

    const name = String(payload.name || "").trim().slice(0, 100);
    const company = String(payload.company || "").trim().slice(0, 120);
    const email = String(payload.email || "").trim().slice(0, 160);
    const message = String(payload.message || "").trim().slice(0, 4000);
    const honeypot = String(payload.website || "").trim();

    if (honeypot) return json({ success: true });
    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return json({ success: false, error: "invalid_fields" }, 400);
    }

    const subject = `Contato pelo site — ${company || name}`;
    const text = [
      `Nome: ${name}`,
      `Empresa: ${company || "Não informada"}`,
      `E-mail: ${email}`,
      "",
      message,
    ].join("\n");

    const html = `
      <h1>Novo contato pelo site</h1>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company || "Não informada")}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <hr>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    try {
      await env.CONTACT_EMAIL.send({
        to: destination,
        from: sender,
        replyTo: email,
        subject,
        text,
        html,
      });
      return json({ success: true });
    } catch (error) {
      console.error("Contact email failed", error);
      return json({ success: false, error: "email_failed" }, 500);
    }
  },
};
