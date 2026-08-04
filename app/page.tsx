"use client";

import Link from "next/link";
import { SiteShell, useSiteLanguage } from "./components/SiteShell";

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
        <p className="kicker">SOUL • BLUES • {pt ? "CANÇÃO AUTORAL" : "ORIGINAL SONGS"}</p>
        <p className="hero-statement">{pt ? "Entre a margem e a liberdade." : "Between the margin and freedom."}</p>
        <p className="hero-body">{pt ? "Um álbum autoral sobre memória, trabalho, resistência e liberdade negra. Projeto aprovado no ProAC ICMS nº 56889, com captação autorizada de R$ 100.000,00." : "An original album about Black memory, labor, resistance and freedom. Approved under ProAC ICMS project no. 56889, authorized to raise BRL 100,000."}</p>
        <div className="actions">
          <Link className="button button-gold" href="/patrocinio">{pt ? "Apresente à sua empresa" : "Present it to your company"}</Link>
          <Link className="button button-outline" href="/album#previews">{pt ? "Ouça as prévias" : "Hear the previews"}</Link>
          <Link className="button button-outline" href="/album">{pt ? "Conheça o álbum" : "Discover the album"}</Link>
        </div>
      </div>
      <span className="photo-credit">THE VELVET MARGIN — 2026</span>
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
      <p className="kicker">{pt ? "PARA EMPRESAS" : "FOR COMPANIES"}</p>
      <h2>{pt ? "Transforme incentivo fiscal em cultura, impacto público e valor de marca." : "Turn tax incentives into culture, public impact and brand value."}</h2>
      <p>{pt ? "The Velvet Margin é um projeto aprovado no ProAC ICMS, com álbum autoral, apresentação gratuita, oficina formativa e registro audiovisual. Sua empresa pode participar como patrocinadora e viabilizadora desta realização." : "The Velvet Margin is a ProAC ICMS-approved project featuring an original album, free public performance, educational workshop and audiovisual record. Your company can participate as a sponsor and enabler of this initiative."}</p>
      <div className="actions">
        <Link className="button button-gold" href="/patrocinio">{pt ? "Conhecer a oportunidade" : "Explore the opportunity"}</Link>
        <a className="button button-outline" href="https://wa.me/5511958608379?text=Olá%2C%20gostaria%20de%20apresentar%20o%20projeto%20The%20Velvet%20Margin%20à%20minha%20empresa." target="_blank" rel="noreferrer">{pt ? "Falar sobre patrocínio" : "Discuss sponsorship"}</a>
      </div>
    </section>
  </main>;
}
