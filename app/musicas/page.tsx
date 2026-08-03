"use client";

import Link from "next/link";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

export default function MusicPage() { return <SiteShell><MusicContent /></SiteShell>; }
function MusicContent() { const { language } = useSiteLanguage(); const pt = language === "pt"; return <main className="inner-page">
  <section className="music-photo-hero"><img src="/members/diego-aquino.webp" alt="Diego Aquino tocando contrabaixo" /><div><p className="kicker">{pt ? "MÚSICAS" : "MUSIC"}</p><h1>{pt ? "As primeiras margens sonoras." : "The first sonic margins."}</h1></div></section>
  <section className="music-coming section-light"><p className="section-index">01</p><div><h2>{pt ? "O álbum está tomando forma." : "The album is taking shape."}</h2></div><div><p>{pt ? "As prévias autorizadas serão apresentadas aqui durante a produção. Esta página reunirá versões preliminares, registros de estúdio e, após o lançamento, os links oficiais para ouvir o álbum." : "Authorized previews will appear here throughout production. This page will bring together early versions, studio records and, after release, official links to hear the album."}</p><div className="status-line"><span />{pt ? "PRÉVIAS EM BREVE" : "PREVIEWS COMING SOON"}</div><Link className="text-link" href="/contato">{pt ? "Receba informações" : "Get updates"} <span>→</span></Link></div></section>
</main>; }
