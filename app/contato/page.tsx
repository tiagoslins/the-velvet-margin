"use client";

import { SiteShell, useSiteLanguage } from "../components/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactContent />
    </SiteShell>
  );
}

function ContactContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";

  return (
    <main className="inner-page contact-page">
      <section>
        <p className="kicker">{pt ? "CONTATO" : "CONTACT"}</p>
        <h1>{pt ? "Vamos conversar." : "Let’s talk."}</h1>
        <p>
          {pt
            ? "Para imprensa, apresentações, parcerias e informações sobre o projeto."
            : "For press, performances, partnerships and project information."}
        </p>
        <a href="mailto:thevelvetmargin@hotmail.com">
          thevelvetmargin@hotmail.com <span>↗</span>
        </a>
      </section>
      <div className="contact-photo">
        <img
          src="/contact-band.webp"
          alt={
            pt
              ? "Silhueta de cinco músicos durante uma apresentação ao pôr do sol"
              : "Silhouette of five musicians performing at sunset"
          }
          style={{
            objectFit: "contain",
            objectPosition: "center",
            filter: "none",
            background: "#000",
          }}
        />
      </div>
    </main>
  );
}
