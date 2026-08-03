"use client";

import Link from "next/link";
import { SiteShell, useSiteLanguage } from "./components/SiteShell";

export default function Home() {
  return <SiteShell><HomeContent /></SiteShell>;
}

function HomeContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";

  return (
    <main>
      <section className="home-hero">
        <div className="hero-album-art" aria-hidden="true">
          <img src="/the-velvet-margin-hero.png" alt="" />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy-wrap">
          <h1 className="visually-hidden">The Velvet Margin</h1>
          <p className="kicker">SOUL • BLUES • {pt ? "CANÇÃO AUTORAL" : "ORIGINAL SONGS"}</p>
          <p className="hero-statement">{pt ? "Entre a margem e a liberdade." : "Between the margin and freedom."}</p>
          <div className="actions">
            <Link className="button button-gold" href="/album">{pt ? "Conheça o álbum" : "Discover the album"}</Link>
            <Link className="button button-outline" href="/banda">{pt ? "Conheça a banda" : "Meet the band"}</Link>
          </div>
        </div>
        <span className="photo-credit">THE VELVET MARGIN — 2026</span>
      </section>

      <section className="home-intro section-light">
        <p className="section-index">01</p>
        <div>
          <p className="kicker dark">{pt ? "A BANDA" : "THE BAND"}</p>
          <h2>{pt ? "Música que nasce onde a luz encontra a sombra." : "Music born where light meets shadow."}</h2>
        </div>
        <div className="intro-copy">
          <p>{pt
            ? "The Velvet Margin reúne músicos de diferentes trajetórias em torno de canções autorais, arranjos orgânicos e uma presença de palco intensa."
            : "The Velvet Margin brings musicians from different paths together through original songs, organic arrangements and a powerful stage presence."}</p>
          <Link className="text-link" href="/banda">{pt ? "Ver integrantes" : "Meet the members"} <span>→</span></Link>
        </div>
      </section>

      <section className="album-feature">
        <div className="album-cover-wrap"><img src="/the-velvet-margin-album.jpg" alt={pt ? "Capa do primeiro álbum The Velvet Margin" : "The Velvet Margin debut album cover"} /></div>
        <div className="album-feature-copy">
          <p className="kicker">{pt ? "PRIMEIRO ÁLBUM" : "DEBUT ALBUM"}</p>
          <h2>The Velvet Margin</h2>
          <p>{pt
            ? "Dez faixas transformam memória, trabalho e resistência em uma travessia musical. The Velvet Margin confronta as marcas deixadas pela escravização e a permanência de estruturas que ainda limitam a liberdade e as possibilidades do povo negro."
            : "Ten tracks transform memory, labor and resistance into a musical journey. The Velvet Margin confronts the legacy of enslavement and the structures that still restrict Black freedom and possibility."}</p>
          <Link className="button button-gold" href="/album">{pt ? "Explorar o álbum" : "Explore the album"}</Link>
        </div>
      </section>
    </main>
  );
}
