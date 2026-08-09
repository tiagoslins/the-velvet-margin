"use client";

import Link from "next/link";
import { SiteShell, useSiteLanguage } from "./components/SiteShell";

const commercialDeck = "/documentos/apresentacao-comercial-the-velvet-margin";

export default function Home() { return <SiteShell><HomeContent /></SiteShell>; }

function HomeContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";

  return <main>
    <section className="home-hero">
      <div className="hero-album-art" aria-hidden="true"><img src="/the-velvet-margin-hero.webp" alt="" /></div>
      <div className="hero-shade" />
      <div className="hero-copy-wrap">
        <h1 className="visually-hidden">The Velvet Margin</h1>
        <p className="kicker">SOUL • BLUES</p>
        <p className="hero-statement">{pt ? "Onde a memória encontra voz." : "Where memory finds its voice."}</p>
        <p className="hero-body">{pt ? "Música, memória e resistência em busca de liberdade." : "Music, memory and resistance in pursuit of freedom."}</p>
        <div className="actions">
          <Link className="button button-gold" href="/patrocinio">ProAC ICMS</Link>
          <Link className="button button-outline" href="/album#previews">{pt ? "Ouça as prévias" : "Hear the previews"}</Link>
        </div>
      </div>
      <span className="photo-credit">THE VELVET MARGIN — 2026</span>
    </section>

    <section className="project-numbers section-light" aria-labelledby="project-numbers-title">
      <div className="project-numbers-heading">
        <p className="kicker dark">{pt ? "PROJETO EM NÚMEROS" : "PROJECT AT A GLANCE"}</p>
        <h2 id="project-numbers-title">{pt ? "Uma realização cultural pronta para captação." : "A cultural initiative ready for sponsorship."}</h2>
      </div>
      <div className="project-numbers-grid">
        <article><strong>R$ 100 mil</strong><span>{pt ? "valor aprovado" : "approved amount"}</span></article>
        <article><strong>{pt ? "Até 10" : "Up to 10"}</strong><span>{pt ? "faixas autorais" : "original tracks"}</span></article>
        <article><strong>1</strong><span>{pt ? "apresentação gratuita" : "free public performance"}</span></article>
        <article><strong>1</strong><span>{pt ? "oficina gratuita" : "free workshop"}</span></article>
        <article><strong>1</strong><span>{pt ? "registro audiovisual" : "audiovisual record"}</span></article>
        <article><strong>2026–2027</strong><span>{pt ? "execução prevista" : "planned delivery"}</span></article>
      </div>
    </section>

    <section className="home-intro section-light">
      <p className="section-index">01</p>
      <div><p className="kicker dark">{pt ? "ARTISTAS & EQUIPE" : "ARTISTS & TEAM"}</p><h2>{pt ? "Música, imagem e produção construídas coletivamente." : "Music, image and production built collectively."}</h2></div>
      <div className="intro-copy"><p>{pt ? "Conheça os artistas, músicos e profissionais responsáveis pela criação, produção, identidade visual e organização de The Velvet Margin." : "Meet the artists, musicians and professionals responsible for the creation, production, visual identity and organization of The Velvet Margin."}</p><Link className="text-link" href="/banda">{pt ? "Conhecer artistas e equipe" : "Meet the artists and team"} <span>→</span></Link></div>
    </section>

    <section className="album-feature">
      <div className="album-cover-wrap"><img src="/the-velvet-margin-album.webp" alt={pt ? "Capa do primeiro álbum The Velvet Margin" : "The Velvet Margin debut album cover"} /></div>
      <div className="album-feature-copy"><p className="kicker">{pt ? "ÁLBUM E MÚSICAS" : "ALBUM AND MUSIC"}</p><h2>The Velvet Margin</h2><p>{pt ? "Dez faixas transformam memória, trabalho e resistência em uma travessia musical. Conheça o conceito, a lista de faixas e as prévias disponíveis." : "Ten tracks transform memory, labor and resistance into a musical journey. Explore the concept, track list and available previews."}</p><div className="actions"><Link className="button button-gold" href="/album">{pt ? "Explorar o álbum" : "Explore the album"}</Link><Link className="button button-outline" href="/album#previews">{pt ? "Ouvir prévias" : "Hear previews"}</Link></div></div>
    </section>

    <section className="home-sponsor-cta">
      <p className="kicker">{pt ? "OPORTUNIDADE PARA EMPRESAS" : "OPPORTUNITY FOR COMPANIES"}</p>
      <h2>{pt ? "Associe sua marca a uma obra autoral com impacto cultural e entregas públicas." : "Connect your brand with an original work offering cultural impact and public outcomes."}</h2>
      <p>{pt ? "O projeto reúne álbum, apresentação gratuita, oficina, distribuição digital e registro audiovisual, com reconhecimento institucional planejado para empresas patrocinadoras." : "The project combines an album, free public performance, workshop, digital release and audiovisual documentation, with planned institutional recognition for sponsors."}</p>
      <div className="actions">
        <a className="button button-gold" href={commercialDeck} target="_blank" rel="noreferrer">{pt ? "Baixar apresentação comercial" : "Download sponsorship deck"}</a>
        <Link className="button button-outline" href="/patrocinio">{pt ? "Conhecer a oportunidade" : "Explore the opportunity"}</Link>
        <Link className="button button-outline" href="/contato">{pt ? "Falar com a equipe" : "Talk to the team"}</Link>
      </div>
    </section>
  </main>;
}
