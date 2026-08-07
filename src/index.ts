type AssetFetcher = { fetch(request: Request): Promise<Response> };
type EmailMessage = { to?: string; from: string; subject: string; text?: string; html?: string; replyTo?: string };
type EmailBinding = { send(message: EmailMessage): Promise<unknown> };

interface Env { ASSETS: AssetFetcher; CONTACT_EMAIL: EmailBinding }

type ContactPayload = {
  name?: string; company?: string; role?: string; email?: string; phone?: string;
  interest?: string; investment?: string; message?: string; website?: string;
  language?: "pt" | "en";
};

const destination = "thevelvetmargin@hotmail.com";
const sender = "contato@thevelvetmargin.com.br";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

function json(data: unknown, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== "/api/contact") return env.ASSETS.fetch(request);
    if (request.method !== "POST") return json({ success: false, error: "method_not_allowed" }, 405);

    let payload: ContactPayload;
    try { payload = (await request.json()) as ContactPayload; }
    catch { return json({ success: false, error: "invalid_json" }, 400); }

    const name = String(payload.name || "").trim().slice(0, 100);
    const company = String(payload.company || "").trim().slice(0, 120);
    const role = String(payload.role || "").trim().slice(0, 120);
    const email = String(payload.email || "").trim().slice(0, 160);
    const phone = String(payload.phone || "").trim().slice(0, 40);
    const interest = String(payload.interest || "").trim().slice(0, 100);
    const investment = String(payload.investment || "").trim().slice(0, 100);
    const message = String(payload.message || "").trim().slice(0, 4000);
    const honeypot = String(payload.website || "").trim();

    if (honeypot) return json({ success: true });
    if (!name || !company || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) return json({ success: false, error: "invalid_fields" }, 400);

    const subject = `Contato empresarial — ${company}`;
    const details = [
      `Nome: ${name}`, `Empresa: ${company}`, `Cargo: ${role || "Não informado"}`,
      `E-mail: ${email}`, `Telefone: ${phone || "Não informado"}`,
      `Interesse: ${interest || "Não informado"}`, `Faixa de aporte: ${investment || "Não informada"}`,
      "", message,
    ];

    const html = `<h1>Novo contato empresarial pelo site</h1>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
      <p><strong>Cargo:</strong> ${escapeHtml(role || "Não informado")}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(phone || "Não informado")}</p>
      <p><strong>Interesse:</strong> ${escapeHtml(interest || "Não informado")}</p>
      <p><strong>Faixa de aporte:</strong> ${escapeHtml(investment || "Não informada")}</p>
      <hr><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

    try {
      await env.CONTACT_EMAIL.send({ to: destination, from: sender, replyTo: email, subject, text: details.join("\n"), html });
      return json({ success: true });
    } catch (error) {
      console.error("Contact email failed", error);
      return json({ success: false, error: "email_failed" }, 500);
    }
  },
};
