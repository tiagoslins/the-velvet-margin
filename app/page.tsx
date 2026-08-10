"use client";

import Link from "next/link";
import { SiteShell, useSiteLanguage } from "./components/SiteShell";

const commercialDeck = "/documentos/apresentacao-comercial-the-velvet-margin.pdf";

export default function Home() { return <SiteShell><HomeContent /></SiteShell>; }

function HomeContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const route = (path: string) => `${pt ? "" : "/en"}${path}`;

  return <main>
    <section className="home-hero">
      <div className="hero-album-art" aria-hidden="true"><img src="/the-velvet-margin-hero.webp" alt="" width="1456" height="816" decoding="async" fetchPriority="high" /></div>
      <div className="hero-shade" />
      <div className="hero-copy-wrap">
        <h1 className="visually-hidden">The Velvet Margin</h1>
        <p className="kicker">SOUL • BLUES</p>
        <p className="hero-statement">{pt ? "Entre a margem e a liberdade." : "Between the margin and freedom."}</p>
        <p className="hero-body">{pt ? "Música, memória e resistência em busca de liberdade." : "Music, memory and resistance in pursuit of freedom."}</p>
        <div className="actions">
          <Link className="button button-gold" href={route("/patrocinio")}>{pt ? "Patrocine o projeto" : "Sponsor the project"}</Link>
          <Link className="button button-outline" href={route("/album#previews")}>{pt ? "Ouça as prévias" : "Hear the previews"}</Link>
        </div>
      </div>
      <span className="photo-credit">THE VELVET MARGIN — 2026</span>
    </section>

    <section className="home-intro section-light">
      <p className="section-index">01</p>
      <div><p className="kicker dark">{pt ? "ARTISTAS & EQUIPE" : "ARTISTS & TEAM"}</p><h2>{pt ? "Música, imagem e produção construídas coletivamente." : "Music, image and production built collectively."}</h2></div>
      <div className="intro-copy"><p>{pt ? "Conheça os artistas, músicos e profissionais responsáveis pela criação, produção, identidade visual e organização de The Velvet Margin." : "Meet the artists, musicians and professionals responsible for the creation, production, visual identity and organization of The Velvet Margin."}</p><Link className="text-link" href={route("/banda")}>{pt ? "Conhecer artistas e equipe" : "Meet the artists and team"} <span>→</span></Link></div>
    </section>

    <section className="album-feature">
      <div className="album-cover-wrap"><img src="/the-velvet-margin-album.webp" alt={pt ? "Capa do primeiro álbum The Velvet Margin" : "The Velvet Margin debut album cover"} width="1254" height="1254" loading="lazy" decoding="async" /></div>
      <div className="album-feature-copy"><p className="kicker">{pt ? "ÁLBUM E MÚSICAS" : "ALBUM AND MUSIC"}</p><h2>The Velvet Margin</h2><p>{pt ? "Dez faixas transformam memória, trabalho e resistência em uma travessia musical. Conheça o conceito, a lista de faixas e as prévias disponíveis." : "Ten tracks transform memory, labor and resistance into a musical journey. Explore the concept, track list and available previews."}</p><div className="actions"><Link className="button button-gold" href={route("/album")}>{pt ? "Explorar o álbum" : "Explore the album"}</Link><Link className="button button-outline" href={route("/album#previews")}>{pt ? "Ouvir prévias" : "Hear previews"}</Link></div></div>
    </section>

    <section className="home-sponsor-cta">
      <p className="kicker">{pt ? "OPORTUNIDADE PARA EMPRESAS" : "OPPORTUNITY FOR COMPANIES"}</p>
      <h2>{pt ? "Associe sua marca a uma obra autoral com impacto cultural e entregas públicas." : "Connect your brand with an original work offering cultural impact and public outcomes."}</h2>
      <p>{pt ? "O projeto reúne álbum, apresentação gratuita, oficina, distribuição digital e registro audiovisual, com reconhecimento institucional planejado para empresas patrocinadoras." : "The project combines an album, free public performance, workshop, digital release and audiovisual documentation, with planned institutional recognition for sponsors."}</p>
      <div className="actions">
        <a className="button button-gold" href={commercialDeck} target="_blank" rel="noreferrer">{pt ? "Baixar apresentação comercial" : "Download sponsorship deck"}</a>
        <Link className="button button-outline" href={route("/patrocinio")}>{pt ? "Conhecer a oportunidade" : "Explore the opportunity"}</Link>
        <Link className="button button-outline" href={route("/contato")}>{pt ? "Falar com a equipe" : "Talk to the team"}</Link>
      </div>
    </section>
  </main>;
}
