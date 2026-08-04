"use client";

import { FormEvent, useState } from "react";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const whatsapp = "https://wa.me/5511958608379";

export default function ContactPage() {
  return <SiteShell><ContactContent /></SiteShell>;
}

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
          email: String(form.get("email") || ""),
          message: String(form.get("message") || ""),
          website: String(form.get("website") || ""),
          language,
        }),
      });

      if (!response.ok) throw new Error("send_failed");
      formElement.reset();
      setStatus(pt
        ? "Mensagem enviada com sucesso. A equipe do The Velvet Margin responderá em breve."
        : "Message sent successfully. The Velvet Margin team will reply soon.");
    } catch {
      setStatus(pt
        ? "Não foi possível enviar agora. Tente novamente ou use o WhatsApp."
        : "The message could not be sent. Please try again or use WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="inner-page contact-page contact-page-expanded">
      <section className="contact-copy">
        <p className="kicker">{pt ? "CONTATO" : "CONTACT"}</p>
        <h1>{pt ? "Vamos conversar." : "Let’s talk."}</h1>
        <p>{pt
          ? "Para patrocínio, imprensa, apresentações, parcerias e informações sobre o projeto."
          : "For sponsorship, press, performances, partnerships and project information."}</p>
        <div className="contact-direct-links">
          <span>thevelvetmargin@hotmail.com</span>
          <a href={`${whatsapp}?text=Olá%2C%20gostaria%20de%20conhecer%20o%20projeto%20The%20Velvet%20Margin.`} target="_blank" rel="noreferrer">{pt ? "WhatsApp: (11) 95860-8379" : "WhatsApp: +55 11 95860-8379"} <span>↗</span></a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>{pt ? "Nome" : "Name"}<input name="name" maxLength={100} required /></label>
          <label>{pt ? "Empresa" : "Company"}<input name="company" maxLength={120} /></label>
          <label>E-mail<input name="email" type="email" maxLength={160} required /></label>
          <label className="full-field">{pt ? "Mensagem" : "Message"}<textarea name="message" rows={6} maxLength={4000} required /></label>
          <label className="visually-hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <button className="button button-gold" type="submit" disabled={sending}>{sending ? (pt ? "Enviando..." : "Sending...") : (pt ? "Enviar mensagem" : "Send message")}</button>
          {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
        </form>
      </section>
      <div className="contact-photo">
        <img src="/contact-band.webp" alt={pt ? "Silhueta de cinco músicos durante uma apresentação ao pôr do sol" : "Silhouette of five musicians performing at sunset"} style={{ objectFit: "contain", objectPosition: "center", filter: "none", background: "#000" }} />
      </div>
    </main>
  );
}
