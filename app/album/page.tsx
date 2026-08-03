"use client";

import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const tracks = [
  {
    title: "Ink on the Shore",
    pt: "Migração, apagamento do nome e um sistema que acolhe a força de trabalho, mas rejeita a identidade.",
    en: "Migration, the erasure of a name and a system that welcomes labor while rejecting identity.",
  },
  {
    title: "The Iron Cradle",
    pt: "Herança industrial, corpos consumidos pela máquina e futuros trocados pelo lucro.",
    en: "An industrial inheritance, bodies consumed by the machine and futures traded for profit.",
  },
  {
    title: "Strange Magnolia",
    pt: "Raízes, memória e beleza negra resistindo à poda, à vigilância e à violência.",
    en: "Roots, memory and Black beauty resisting confinement, surveillance and violence.",
  },
  {
    title: "The 5 AM Communion",
    pt: "A liturgia diária de quem desperta antes da cidade e entrega mais do que recebe.",
    en: "The daily ritual of those who rise before the city and give more than they receive.",
  },
  {
    title: "The Glass Canopy",
    pt: "A distância entre quem vive acima do vidro e quem sustenta, no chão, toda a estrutura.",
    en: "The distance between those above the glass and those on the ground holding up the entire structure.",
  },
  {
    title: "The Ledger of Souls",
    pt: "A redução da vida a números, ativos e mão de obra descartável.",
    en: "The reduction of human life to numbers, assets and disposable labor.",
  },
  {
    title: "Static on the Wire",
    pt: "O ruído que encobre o racismo estrutural, a violência e uma justiça que nunca chega.",
    en: "The noise that conceals structural racism, violence and a justice that never arrives.",
  },
  {
    title: "Neon Pastures",
    pt: "Consumo, dívida e a promessa de pertencimento a um mundo construído por outros.",
    en: "Consumption, debt and the promise of belonging to a world built by others.",
  },
  {
    title: "The Broken Compass",
    pt: "Um canto coletivo contra mapas manipulados, colheitas apropriadas e destinos impostos.",
    en: "A collective anthem against manipulated maps, stolen harvests and imposed destinies.",
  },
  {
    title: "The Shared Spectrum",
    pt: "A resposta final: pertencimento, empatia e solidariedade como caminho de libertação coletiva.",
    en: "The final answer: belonging, empathy and solidarity as a path toward collective liberation.",
  },
];

export default function AlbumPage() { return <SiteShell><AlbumContent /></SiteShell>; }
function AlbumContent() {
  const { language } = useSiteLanguage(); const pt = language === "pt";
  return <main className="inner-page album-page">
    <section className="album-page-hero">
      <div className="album-page-cover"><img src="/the-velvet-margin-album.webp" alt={pt ? "Capa de The Velvet Margin" : "The Velvet Margin album cover"} /></div>
      <div className="album-page-copy"><p className="kicker">{pt ? "PRIMEIRO ÁLBUM" : "DEBUT ALBUM"}</p><h1>The Velvet<br />Margin</h1><p>{pt
        ? "Um álbum autoral em dez movimentos sobre trabalho, memória, resistência e a busca do povo negro por liberdade plena."
        : "An original album in ten movements about labor, memory, resistance and the Black struggle for full freedom."}</p><span>{pt ? "EM PRODUÇÃO • LANÇAMENTO PREVISTO PARA 2027" : "IN PRODUCTION • EXPECTED IN 2027"}</span></div>
    </section>
    <section className="album-manifesto section-light">
      <p className="section-index">01</p>
      <div className="album-manifesto-title">
        <p className="kicker dark">{pt ? "NA RAIZ DO ÁLBUM" : "AT THE ALBUM'S ROOT"}</p>
        <h2>{pt
          ? "Quando o trabalho deixa de ser escolha, a liberdade permanece incompleta."
          : "When labor is no longer a choice, freedom remains incomplete."}</h2>
      </div>
      <div className="album-manifesto-copy">
        <p>{pt
          ? "The Velvet Margin nasce do confronto com uma ferida que atravessa a história e alcança o presente. Durante séculos, a escravização transformou pessoas negras em força de trabalho, negando-lhes autonomia, dignidade e o direito de decidir sobre o próprio corpo, o próprio tempo e o próprio futuro."
          : "The Velvet Margin was born from confronting a wound that runs through history and reaches into the present. For centuries, enslavement reduced Black people to a labor force, denying them autonomy, dignity and the right to determine their own bodies, time and future."}</p>
        <p>{pt
          ? "As canções percorrem os novos rostos dessa mesma lógica: o nome apagado na fronteira, o corpo preso às engrenagens, o trabalhador que desperta antes da cidade, a vida convertida em número e a riqueza observada do alto de torres de vidro. O fim legal da escravidão não encerrou suas consequências; elas permanecem nas desigualdades e nas estruturas que ainda condicionam quem pode descansar, criar, pertencer e escolher o próprio destino."
          : "The songs trace the new faces of that same logic: a name erased at the border, a body bound to the gears, a worker rising before the city, a life converted into a number and wealth viewed from high above glass towers. The legal end of slavery did not end its consequences; they remain in inequalities and structures that still determine who gets to rest, create, belong and choose their own destiny."}</p>
        <p>{pt
          ? "Mas o disco não termina na denúncia. Da margem nasce uma voz coletiva, e da resistência surge a possibilidade de liberdade. As dez faixas fazem da música um espaço de memória, protesto e afirmação — um porta-voz dessa questão histórica, criado não apenas para recordar o que foi tomado, mas para reivindicar aquilo que nunca deveria ter sido negado."
          : "But the album does not end with protest. A collective voice rises from the margins, and resistance opens the possibility of freedom. These ten tracks turn music into a space for memory, protest and affirmation—giving voice to this historical struggle not only to remember what was taken, but to reclaim what should never have been denied."}</p>
      </div>
    </section>
    <section className="track-page"><div><p className="kicker">{pt ? "LISTA DE FAIXAS" : "TRACK LIST"}</p><h2>{pt ? "Dez capítulos de uma mesma travessia." : "Ten chapters of a single crossing."}</h2></div><ol>{tracks.map((track, i) => <li key={track.title}><span>{String(i + 1).padStart(2, "0")}</span><div><strong>{track.title}</strong><p>{pt ? track.pt : track.en}</p></div></li>)}</ol></section>
  </main>;
}
