type ContactPayload = {
  name?: unknown;
  company?: unknown;
  role?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  investment?: unknown;
  message?: unknown;
  website?: unknown;
  consent?: unknown;
  language?: unknown;
};

const destination = "thevelvetmargin@hotmail.com";
const sender = "contato@thevelvetmargin.com.br";
const canonicalHost = "thevelvetmargin.com.br";
const maximumBodyBytes = 12 * 1024;

const securityHeaders = {
  "Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: blob:; media-src 'self'; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; upgrade-insecure-requests",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
} as const;

function asText(value: unknown, maximumLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function responseWithHeaders(response: Response, url: URL, requestId?: string) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(securityHeaders)) headers.set(name, value);
  if (url.protocol === "https:") headers.set("Strict-Transport-Security", "max-age=86400");
  if (url.hostname.endsWith(".workers.dev")) headers.set("X-Robots-Tag", "noindex, nofollow");
  if (requestId) headers.set("X-Request-ID", requestId);

  if (url.pathname.startsWith("/_next/static/")) headers.set("Cache-Control", "public, max-age=31536000, immutable");
  else if (/^\/(members|images|audio)\//.test(url.pathname)) headers.set("Cache-Control", "public, max-age=604800");
  else if (/^\/(imprensa|documentos)\//.test(url.pathname)) headers.set("Cache-Control", "public, max-age=86400");

  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function json(data: unknown, url: URL, status = 200, requestId?: string) {
  const response = Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
  return responseWithHeaders(response, url, requestId);
}

async function readJsonBody(request: Request): Promise<ContactPayload> {
  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (declaredLength > maximumBodyBytes) throw new Error("payload_too_large");
  if (!request.body) throw new Error("invalid_json");

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maximumBodyBytes) {
      await reader.cancel("payload_too_large");
      throw new Error("payload_too_large");
    }
    chunks.push(value);
  }

  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }

  const parsed: unknown = JSON.parse(new TextDecoder().decode(body));
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid_json");
  return parsed as ContactPayload;
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if ((url.hostname === canonicalHost || url.hostname === `www.${canonicalHost}`) && url.protocol === "http:") {
      url.protocol = "https:";
      url.hostname = canonicalHost;
      return Response.redirect(url.toString(), 301);
    }
    if (url.hostname === `www.${canonicalHost}`) {
      url.hostname = canonicalHost;
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/musicas" || url.pathname === "/musicas/") {
      return Response.redirect(new URL("/album/#previews", url.origin).toString(), 301);
    }
    if (url.pathname === "/en/musicas" || url.pathname === "/en/musicas/") {
      return Response.redirect(new URL("/en/album/#previews", url.origin).toString(), 301);
    }

    if (url.pathname !== "/api/contact") {
      return responseWithHeaders(await env.ASSETS.fetch(request), url);
    }

    const requestId = crypto.randomUUID();
    if (request.method !== "POST") return json({ success: false, error: "method_not_allowed" }, url, 405, requestId);

    const origin = request.headers.get("origin");
    if (origin && origin !== `https://${canonicalHost}` && origin !== `https://www.${canonicalHost}`) {
      return json({ success: false, error: "origin_not_allowed" }, url, 403, requestId);
    }
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return json({ success: false, error: "unsupported_media_type" }, url, 415, requestId);
    }

    const rateLimit = await env.CONTACT_RATE_LIMITER.limit({ key: "contact-form" });
    if (!rateLimit.success) return json({ success: false, error: "rate_limited" }, url, 429, requestId);

    let payload: ContactPayload;
    try {
      payload = await readJsonBody(request);
    } catch (error) {
      const code = error instanceof Error && error.message === "payload_too_large" ? "payload_too_large" : "invalid_json";
      return json({ success: false, error: code }, url, code === "payload_too_large" ? 413 : 400, requestId);
    }

    const name = asText(payload.name, 100);
    const company = asText(payload.company, 120);
    const role = asText(payload.role, 120);
    const email = asText(payload.email, 160).toLowerCase();
    const phone = asText(payload.phone, 40);
    const interest = asText(payload.interest, 100);
    const investment = asText(payload.investment, 100);
    const message = asText(payload.message, 4000);
    const honeypot = asText(payload.website, 200);

    if (honeypot) return json({ success: true }, url, 200, requestId);
    if (payload.consent !== true || !name || !company || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, error: "invalid_fields" }, url, 400, requestId);
    }

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
      return json({ success: true }, url, 200, requestId);
    } catch (error) {
      console.error(JSON.stringify({ event: "contact_email_failed", requestId, error: error instanceof Error ? error.name : "unknown" }));
      return json({ success: false, error: "email_failed" }, url, 500, requestId);
    }
  },
} satisfies ExportedHandler<Env>;
