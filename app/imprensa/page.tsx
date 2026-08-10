"use client";

import Link from "next/link";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

export default function PressPage() {
  return <SiteShell><PressContent /></SiteShell>;
}

function PressContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const contactPath = `${pt ? "" : "/en"}/contato`;
  const items = [
    { title: pt ? "Release oficial" : "Official release", description: pt ? "Texto institucional e apresentação editorial do projeto." : "Institutional and editorial introduction to the project.", href: pt ? "/imprensa/release-oficial-the-velvet-margin.txt" : "/imprensa/official-release-the-velvet-margin.txt" },
    { title: pt ? "Fotografias em alta resolução" : "High-resolution photographs", description: pt ? "Retratos oficiais para imprensa e divulgação autorizada." : "Official portraits for authorized press and promotion.", href: "/imprensa/fotos/yves-remont.png", photos: [
      ["Arthur Krena", "/imprensa/fotos/arthur-krena.png"], ["Diego Aquino", "/imprensa/fotos/diego-aquino.jpg"],
      ["Yves Remont", "/imprensa/fotos/yves-remont.png"], ["Rubens de Oliveira", "/imprensa/fotos/rubens-de-oliveira.jpg"],
      ["Anderson Kafé", "/imprensa/fotos/anderson-kafe.jpg"], ["Tiago Lins", "/imprensa/fotos/tiago-lins.jpg"],
      ["Txai Zerbeto", "/imprensa/fotos/txai-zerbeto.jpg"], ["Dayanne Silva", "/imprensa/fotos/dayanne-silva.jpg"],
    ] },
    { title: pt ? "Capa do álbum" : "Album artwork", description: pt ? "Arte oficial de The Velvet Margin em alta resolução." : "High-resolution official The Velvet Margin artwork.", href: "/imprensa/capa/the-velvet-margin-album.jpg" },
    { title: pt ? "Identidade visual" : "Visual identity", description: pt ? "Solicite os arquivos de marca e as orientações para aplicações autorizadas." : "Request brand assets and guidance for authorized use.", href: contactPath, request: true },
    { title: pt ? "Biografias" : "Biographies", description: pt ? "Apresentação do proponente, músicos e equipe criativa." : "Profiles of the project lead, musicians and creative team.", href: pt ? "/imprensa/biografias-the-velvet-margin.txt" : "/imprensa/biographies-the-velvet-margin.txt" },
    { title: pt ? "Ficha técnica" : "Credits", description: pt ? "Funções, equipe artística e informações de produção." : "Roles, artistic team and production information.", href: pt ? "/imprensa/ficha-tecnica-the-velvet-margin.txt" : "/imprensa/credits-the-velvet-margin.txt" },
    { title: pt ? "Apresentação comercial" : "Sponsorship deck", description: pt ? "Proposta institucional para empresas interessadas em patrocínio." : "Institutional proposal for companies interested in sponsorship.", href: "/documentos/apresentacao-comercial-the-velvet-margin.pdf" },
    { title: pt ? "Contatos" : "Contacts", description: pt ? "Canal direto para imprensa, parcerias e patrocínio." : "Direct channel for press, partnerships and sponsorship.", href: pt ? "/imprensa/contatos-the-velvet-margin.txt" : "/imprensa/contacts-the-velvet-margin.txt" },
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
      {items.map((item, index) => <article className="press-card" key={item.title}>
        <div><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.description}</p></div>
        <div className="press-card-actions">
          {item.photos
            ? item.photos.map(([name, href]) => <a href={href} download key={href}>{pt ? "Baixar" : "Download"} {name} ↓</a>)
            : item.request
              ? <Link href={item.href}>{pt ? "Solicitar material" : "Request material"} →</Link>
              : <a href={item.href} download>{pt ? "Baixar arquivo" : "Download file"} ↓</a>}
        </div>
      </article>)}
    </section>
  </main>;
}
