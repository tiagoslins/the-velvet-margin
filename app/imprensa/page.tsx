"use client";

import Link from "next/link";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

export default function PressPage() {
  return <SiteShell><PressContent /></SiteShell>;
}

function PressContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const items = [
    [pt ? "Release oficial" : "Official release", pt ? "Texto institucional e apresentação editorial do projeto." : "Institutional and editorial introduction to the project."],
    [pt ? "Fotografias em alta resolução" : "High-resolution photographs", pt ? "Imagens para imprensa, divulgação e comunicação institucional." : "Images for press, promotion and institutional communications."],
    [pt ? "Capa do álbum" : "Album artwork", pt ? "Arte oficial de The Velvet Margin." : "Official artwork for The Velvet Margin."],
    [pt ? "Logotipo" : "Logo", pt ? "Arquivos de identidade visual para aplicações autorizadas." : "Visual identity files for authorized use."],
    [pt ? "Biografias" : "Biographies", pt ? "Apresentação do proponente, músicos e equipe criativa." : "Profiles of the project lead, musicians and creative team."],
    [pt ? "Ficha técnica" : "Credits", pt ? "Funções, equipe artística e informações de produção." : "Roles, artistic team and production information."],
    [pt ? "Apresentação comercial" : "Sponsorship deck", pt ? "Proposta institucional para empresas interessadas em patrocínio." : "Institutional proposal for companies interested in sponsorship."],
    [pt ? "Contatos" : "Contacts", pt ? "Canal direto para imprensa, parcerias e patrocínio." : "Direct channel for press, partnerships and sponsorship."],
  ];

  return <main className="inner-page press-page">
    <header className="press-page-header">
      <p className="kicker">{pt ? "KIT DE IMPRENSA" : "PRESS KIT"}</p>
      <h1>{pt ? "Materiais oficiais do projeto." : "Official project materials."}</h1>
      <p>{pt
        ? "Esta área centraliza os materiais de divulgação de The Velvet Margin. Enquanto os arquivos finais são organizados para download, as solicitações podem ser enviadas pelo formulário do próprio site."
        : "This area brings together The Velvet Margin promotional materials. While final downloadable files are being organized, requests can be sent through the website contact form."}</p>
    </header>
    <section className="press-grid">
      {items.map(([title, description], index) => <article className="press-card" key={title}>
        <div><span>0{index + 1}</span><h2>{title}</h2><p>{description}</p></div>
        <Link href="/contato">{pt ? "Solicitar material" : "Request material"} →</Link>
      </article>)}
    </section>
  </main>;
}
