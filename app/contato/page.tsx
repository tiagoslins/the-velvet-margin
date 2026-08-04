"use client";

import { FormEvent, useState } from "react";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const whatsapp = "https://wa.me/5511958608379";
const commercialDeck = "/documentos/apresentacao-comercial-the-velvet-margin";

export default function ContactPage() { return <SiteShell><ContactContent /></SiteShell>; }

function ContactContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setSending(true);
    setStatus(pt ? "Enviando mensagem..." : "Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") || ""),
          company: String(form.get("company") || ""),
          role: String(form.get("role") || ""),
          email: String(form.get("email") || ""),
          phone: String(form.get("phone") || ""),
          interest: String(form.get("interest") || ""),
          investment: String(form.get("investment") || ""),
          message: String(form.get("message") || ""),
          website: String(form.get("website") || ""),
          language,
        }),
      });

      if (!response.ok) throw new Error("send_failed");
      formElement.reset();
      setStatus(pt ? "Mensagem enviada com sucesso. A equipe responderá em breve." : "Message sent successfully. The team will reply soon.");
    } catch {
      setStatus(pt ? "Não foi possível enviar agora. Tente novamente ou use o WhatsApp." : "The message could not be sent. Please try again or use WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  return <main className="inner-page contact-page contact-page-expanded">
    <section className="contact-copy">
      <p className="kicker">{pt ? "CONTATO PARA EMPRESAS" : "BUSINESS CONTACT"}</p>
      <h1>{pt ? "Vamos construir uma parceria." : "Let’s build a partnership."}</h1>
      <p>{pt ? "Fale com a equipe para acessar a apresentação comercial, esclarecer o processo de incentivo ou solicitar uma proposta personalizada." : "Contact the team to access the sponsorship deck, understand the incentive process or request a tailored proposal."}</p>
      <div className="contact-direct-links">
        <span>contato@thevelvetmargin.com.br</span>
        <a href={commercialDeck} target="_blank" rel="noreferrer">{pt ? "Baixar apresentação comercial" : "Download sponsorship deck"} <span>↗</span></a>
        <a href={`${whatsapp}?text=Olá%2C%20gostaria%20de%20apresentar%20o%20projeto%20The%20Velvet%20Margin%20à%20minha%20empresa.`} target="_blank" rel="noreferrer">{pt ? "WhatsApp: (11) 95860-8379" : "WhatsApp: +55 11 95860-8379"} <span>↗</span></a>
      </div>

      <form className="contact-form corporate-contact-form" onSubmit={handleSubmit}>
        <label>{pt ? "Nome" : "Name"}<input name="name" maxLength={100} required /></label>
        <label>{pt ? "Empresa" : "Company"}<input name="company" maxLength={120} required /></label>
        <label>{pt ? "Cargo" : "Role"}<input name="role" maxLength={120} /></label>
        <label>E-mail {pt ? "corporativo" : "business"}<input name="email" type="email" maxLength={160} required /></label>
        <label>{pt ? "Telefone" : "Phone"}<input name="phone" maxLength={40} /></label>
        <label>{pt ? "Interesse" : "Interest"}<select name="interest" defaultValue="patrocinio"><option value="patrocinio">{pt ? "Patrocínio via ProAC ICMS" : "ProAC ICMS sponsorship"}</option><option value="apresentacao">{pt ? "Receber apresentação comercial" : "Receive sponsorship deck"}</option><option value="proposta">{pt ? "Solicitar proposta personalizada" : "Request tailored proposal"}</option><option value="parceria">{pt ? "Outra parceria institucional" : "Other institutional partnership"}</option></select></label>
        <label className="full-field">{pt ? "Faixa de aporte considerada" : "Contribution range"}<select name="investment" defaultValue=""><option value="">{pt ? "Prefiro conversar primeiro" : "I prefer to discuss first"}</option><option value="ate-25">{pt ? "Até R$ 25.000" : "Up to BRL 25,000"}</option><option value="25-50">R$ 25.000 – R$ 50.000</option><option value="50-100">R$ 50.000 – R$ 100.000</option><option value="integral">{pt ? "Patrocínio integral — R$ 100.000" : "Full sponsorship — BRL 100,000"}</option></select></label>
        <label className="full-field">{pt ? "Mensagem" : "Message"}<textarea name="message" rows={6} maxLength={4000} required /></label>
        <label className="visually-hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <button className="button button-gold" type="submit" disabled={sending}>{sending ? (pt ? "Enviando..." : "Sending...") : (pt ? "Enviar solicitação" : "Send request")}</button>
        {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
      </form>
    </section>
    <div className="contact-photo"><img src="/contact-band.webp" alt={pt ? "Silhueta de músicos durante uma apresentação" : "Silhouette of musicians performing"} style={{ objectFit: "contain", objectPosition: "center", filter: "none", background: "#000" }} /></div>
  </main>;
}
