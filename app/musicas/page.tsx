"use client";

import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const platforms = [
  { name: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_mRDjAPjVRRPtaU5zkH0en4uXhLhHGPcVA" },
  { name: "Spotify", href: "https://open.spotify.com/artist/4ZvGkVJryH92tSpCbEgJyJ" },
  { name: "Apple Music", href: "https://music.apple.com/br/album/the-velvet-margin/6790796580" },
];

const previews = ["Ink on the Shore", "Strange Magnolia", "The Shared Spectrum"];

export default function MusicPage() {
  return <SiteShell><MusicContent /></SiteShell>;
}

function MusicContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";

  return <main className="inner-page">
    <section className="music-photo-hero">
      <img src="/members/diego-aquino.webp" alt={pt ? "Diego Aquino tocando contrabaixo" : "Diego Aquino playing bass"} />
      <div><p className="kicker">{pt ? "MÚSICAS" : "MUSIC"}</p><h1>{pt ? "As primeiras margens sonoras." : "The first sonic margins."}</h1></div>
    </section>

    <section className="music-preview-section section-light">
      <div className="section-lead dark-copy">
        <p className="kicker dark">{pt ? "PRÉVIAS DO PROJETO" : "PROJECT PREVIEWS"}</p>
        <h2>{pt ? "Ouça a identidade musical de The Velvet Margin." : "Hear the musical identity of The Velvet Margin."}</h2>
        <p>{pt
          ? "As gravações disponíveis são referências preliminares do repertório. As versões definitivas serão produzidas durante a execução do projeto aprovado no ProAC ICMS."
          : "The available recordings are preliminary references for the repertoire. Final versions will be produced during the execution of the approved ProAC ICMS project."}</p>
      </div>
      <div className="preview-track-list">
        {previews.map((track, index) => <article key={track}><span>0{index + 1}</span><h3>{track}</h3><p>{pt ? "Prévia musical disponível nas plataformas oficiais." : "Music preview available on official platforms."}</p></article>)}
      </div>
      <div className="platform-actions">
        {platforms.map(platform => <a key={platform.name} className="button button-dark" href={platform.href} target="_blank" rel="noreferrer">{pt ? "Ouvir no" : "Listen on"} {platform.name} ↗</a>)}
      </div>
    </section>
  </main>;
}
