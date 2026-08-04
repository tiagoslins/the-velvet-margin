"use client";

import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const tracks = [
  ["Ink on the Shore", "Migração, apagamento do nome e um sistema que acolhe a força de trabalho, mas rejeita a identidade.", "Migration, the erasure of a name and a system that welcomes labor while rejecting identity."],
  ["The Iron Cradle", "Herança industrial, corpos consumidos pela máquina e futuros trocados pelo lucro.", "An industrial inheritance, bodies consumed by the machine and futures traded for profit."],
  ["Strange Magnolia", "Raízes, memória e beleza negra resistindo à poda, à vigilância e à violência.", "Roots, memory and Black beauty resisting confinement, surveillance and violence."],
  ["The 5 AM Communion", "A liturgia diária de quem desperta antes da cidade e entrega mais do que recebe.", "The daily ritual of those who rise before the city and give more than they receive."],
  ["The Glass Canopy", "A distância entre quem vive acima do vidro e quem sustenta, no chão, toda a estrutura.", "The distance between those above the glass and those on the ground holding up the entire structure."],
  ["The Ledger of Souls", "A redução da vida a números, ativos e mão de obra descartável.", "The reduction of human life to numbers, assets and disposable labor."],
  ["Static on the Wire", "O ruído que encobre o racismo estrutural, a violência e uma justiça que nunca chega.", "The noise that conceals structural racism, violence and a justice that never arrives."],
  ["Neon Pastures", "Consumo, dívida e a promessa de pertencimento a um mundo construído por outros.", "Consumption, debt and the promise of belonging to a world built by others."],
  ["The Broken Compass", "Um canto coletivo contra mapas manipulados, colheitas apropriadas e destinos impostos.", "A collective anthem against manipulated maps, stolen harvests and imposed destinies."],
  ["The Shared Spectrum", "A resposta final: pertencimento, empatia e solidariedade como caminho de libertação coletiva.", "The final answer: belonging, empathy and solidarity as a path toward collective liberation."],
];

const platforms = [
  { name: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_mRDjAPjVRRPtaU5zkH0en4uXhLhHGPcVA" },
  { name: "Spotify", href: "https://open.spotify.com/artist/4ZvGkVJryH92tSpCbEgJyJ" },
  { name: "Apple Music", href: "https://music.apple.com/br/album/the-velvet-margin/6790796580" },
];

const previews = ["Ink on the Shore", "Strange Magnolia", "The Shared Spectrum"];

export default function AlbumPage() { return <SiteShell><AlbumContent /></SiteShell>; }

function AlbumContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";

  return <main className="inner-page album-page">
    <section className="album-page-hero">
      <div className="album-page-cover"><img src="/the-velvet-margin-album.webp" alt={pt ? "Capa de The Velvet Margin" : "The Velvet Margin album cover"} /></div>
      <div className="album-page-copy"><p className="kicker">{pt ? "ÁLBUM E MÚSICAS" : "ALBUM AND MUSIC"}</p><h1>The Velvet<br />Margin</h1><p>{pt ? "Um álbum autoral em dez movimentos sobre trabalho, memória, resistência e a busca do povo negro por liberdade plena." : "An original album in ten movements about labor, memory, resistance and the Black struggle for full freedom."}</p><span>{pt ? "EM PRODUÇÃO • LANÇAMENTO PREVISTO PARA 2027" : "IN PRODUCTION • EXPECTED IN 2027"}</span></div>
    </section>

    <section className="album-manifesto section-light">
      <p className="section-index">01</p>
      <div className="album-manifesto-title"><p className="kicker dark">{pt ? "NA RAIZ DO ÁLBUM" : "AT THE ALBUM'S ROOT"}</p><h2>{pt ? "Quando o trabalho deixa de ser escolha, a liberdade permanece incompleta." : "When labor is no longer a choice, freedom remains incomplete."}</h2></div>
      <div className="album-manifesto-copy">
        <p>{pt ? "The Velvet Margin nasce do confronto com uma ferida que atravessa a história e alcança o presente. Durante séculos, a escravização transformou pessoas negras em força de trabalho, negando-lhes autonomia, dignidade e o direito de decidir sobre o próprio corpo, o próprio tempo e o próprio futuro." : "The Velvet Margin was born from confronting a wound that runs through history and reaches into the present. For centuries, enslavement reduced Black people to a labor force, denying them autonomy, dignity and the right to determine their own bodies, time and future."}</p>
        <p>{pt ? "As canções percorrem os novos rostos dessa mesma lógica: o nome apagado na fronteira, o corpo preso às engrenagens, o trabalhador que desperta antes da cidade, a vida convertida em número e a riqueza observada do alto de torres de vidro." : "The songs trace the new faces of that same logic: a name erased at the border, a body bound to the gears, a worker rising before the city, a life converted into a number and wealth viewed from high above glass towers."}</p>
        <p>{pt ? "Mas o disco não termina na denúncia. Da margem nasce uma voz coletiva, e da resistência surge a possibilidade de liberdade. As dez faixas fazem da música um espaço de memória, protesto e afirmação." : "But the album does not end with protest. A collective voice rises from the margins, and resistance opens the possibility of freedom. These ten tracks turn music into a space for memory, protest and affirmation."}</p>
      </div>
    </section>

    <section className="track-page"><div><p className="kicker">{pt ? "LISTA DE FAIXAS" : "TRACK LIST"}</p><h2>{pt ? "Dez capítulos de uma mesma travessia." : "Ten chapters of a single crossing."}</h2></div><ol>{tracks.map((track, i) => <li key={track[0]}><span>{String(i + 1).padStart(2, "0")}</span><div><strong>{track[0]}</strong><p>{pt ? track[1] : track[2]}</p></div></li>)}</ol></section>

    <section className="music-preview-section section-light" id="previews">
      <div className="section-lead dark-copy"><p className="kicker dark">{pt ? "PRÉVIAS DO PROJETO" : "PROJECT PREVIEWS"}</p><h2>{pt ? "Ouça a identidade musical de The Velvet Margin." : "Hear the musical identity of The Velvet Margin."}</h2><p>{pt ? "As gravações disponíveis são referências preliminares do repertório. As versões definitivas serão produzidas durante a execução do projeto aprovado no ProAC ICMS." : "The available recordings are preliminary references for the repertoire. Final versions will be produced during the execution of the approved ProAC ICMS project."}</p></div>
      <div className="preview-track-list">{previews.map((track, index) => <article key={track}><span>0{index + 1}</span><h3>{track}</h3><p>{pt ? "Prévia musical disponível nas plataformas oficiais." : "Music preview available on official platforms."}</p></article>)}</div>
      <div className="platform-actions">{platforms.map(platform => <a key={platform.name} className="button button-dark" href={platform.href} target="_blank" rel="noreferrer">{pt ? "Ouvir no" : "Listen on"} {platform.name} ↗</a>)}</div>
    </section>
  </main>;
}
