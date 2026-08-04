"use client";

import { FormEvent, useState } from "react";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const email = "thevelvetmargin@hotmail.com";
const whatsapp = "https://wa.me/5511958608379";

export default function ContactPage() {
  return <SiteShell><ContactContent /></SiteShell>;
}

function ContactContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const senderEmail = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`${pt ? "Contato pelo site" : "Website contact"} — ${company || name}`);
    const body = encodeURIComponent(`${pt ? "Nome" : "Name"}: ${name}\n${pt ? "Empresa" : "Company"}: ${company}\nE-mail: ${senderEmail}\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus(pt ? "Seu aplicativo de e-mail foi aberto com a mensagem preenchida." : "Your email app was opened with the message completed.");
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
          <a href={`mailto:${email}`}>{email} <span>↗</span></a>
          <a href={`${whatsapp}?text=Olá%2C%20gostaria%20de%20conhecer%20o%20projeto%20The%20Velvet%20Margin.`} target="_blank" rel="noreferrer">{pt ? "WhatsApp: (11) 95860-8379" : "WhatsApp: +55 11 95860-8379"} <span>↗</span></a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>{pt ? "Nome" : "Name"}<input name="name" required /></label>
          <label>{pt ? "Empresa" : "Company"}<input name="company" /></label>
          <label>E-mail<input name="email" type="email" required /></label>
          <label className="full-field">{pt ? "Mensagem" : "Message"}<textarea name="message" rows={6} required /></label>
          <button className="button button-gold" type="submit">{pt ? "Preparar mensagem" : "Prepare message"}</button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </section>
      <div className="contact-photo">
        <img src="/contact-band.webp" alt={pt ? "Silhueta de cinco músicos durante uma apresentação ao pôr do sol" : "Silhouette of five musicians performing at sunset"} style={{ objectFit: "contain", objectPosition: "center", filter: "none", background: "#000" }} />
      </div>
    </main>
  );
}
