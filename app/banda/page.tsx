"use client";

import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const members = [
  { name: "Arthur Krena", rolePt: "Voz principal", roleEn: "Lead vocals", image: null, className: "portrait-placeholder" },
  { name: "Diego Aquino", rolePt: "Contrabaixo", roleEn: "Bass", image: "/members/diego-aquino.webp", className: "portrait-vertical" },
  { name: "Yves Remont", rolePt: "Guitarra", roleEn: "Guitar", image: "/members/yves-remont.webp", className: "portrait-vertical" },
  { name: "Rubens de Oliveira", rolePt: "Bateria e percussão", roleEn: "Drums and percussion", image: "/members/rubens-de-oliveira.webp", className: "portrait-wide" },
];

export default function BandPage() { return <SiteShell><BandContent /></SiteShell>; }

function BandContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  return <main className="inner-page">
    <section className="page-hero band-page-hero">
      <div className="page-hero-image"><img src="/members/rubens-de-oliveira.webp" alt="Rubens de Oliveira em apresentação ao vivo" /></div>
      <div className="page-title"><p className="kicker">{pt ? "A BANDA" : "THE BAND"}</p><h1>{pt ? "Quatro músicos. Uma mesma margem." : "Four musicians. One shared margin."}</h1></div>
    </section>
    <section className="band-manifesto section-light">
      <p className="section-index">01</p>
      <div><h2>{pt ? "Intensidade, escuta e presença." : "Intensity, listening and presence."}</h2></div>
      <div><p>{pt
        ? "The Velvet Margin é um encontro entre soul e blues, construído por músicos que tratam cada canção como um espaço vivo. O repertório atravessa memória, espiritualidade, ruptura e reconstrução sem perder a força de uma banda tocando em conjunto."
        : "The Velvet Margin brings soul and blues together through musicians who treat every song as a living space. The repertoire moves through memory, spirituality, rupture and reconstruction without losing the power of a band playing together."}</p></div>
    </section>
    <section className="members-page-grid">
      {members.map((member, index) => <article className="member-portrait" key={member.name}>
        <div className={`portrait-image ${member.className}`}>
          {member.image ? <img src={member.image} alt={`${member.name} — ${pt ? member.rolePt : member.roleEn}`} /> : <div><span>AK</span><p>{pt ? "FOTO EM BREVE" : "PHOTO COMING SOON"}</p></div>}
          <span className="portrait-number">0{index + 1}</span>
        </div>
        <h2>{member.name}</h2><p>{pt ? member.rolePt : member.roleEn}</p>
      </article>)}
    </section>
    <section className="creative-credit">
      <div className="creative-portrait"><img src="/members/tiago-lins.webp" alt={pt ? "Tiago Lins, compositor e produtor musical" : "Tiago Lins, songwriter and music producer"} /></div>
      <div className="creative-copy">
        <p className="kicker">{pt ? "CRIAÇÃO E PRODUÇÃO" : "CREATION AND PRODUCTION"}</p>
        <h2>Tiago Lins</h2>
        <p className="creative-role">{pt ? "Compositor • Produtor musical • Engenheiro de áudio • Cientista social" : "Songwriter • Music producer • Audio engineer • Social scientist"}</p>
        <div className="creative-bio">
          <p>{pt
            ? "Tiago Lins é compositor, produtor musical e engenheiro de áudio formado em Audio Recording and Production pelo Institute of Audio Research, em Nova York, Estados Unidos. Também é cientista social pela Universidade Federal de São Carlos (UFSCar)."
            : "Tiago Lins is a songwriter, music producer and audio engineer with a degree in Audio Recording and Production from the Institute of Audio Research in New York City, United States. He also holds a degree in Social Sciences from the Federal University of São Carlos (UFSCar)."}</p>
          <p>{pt
            ? "Sua trajetória reúne composição, gravação, produção musical, edição, mixagem e masterização, além de trabalhos em audiovisual, podcasts e conteúdo digital. Sua experiência técnica também abrange produção de áudio para cinema e videogames, sound design e implementação de áudio interativo na Unreal Engine."
            : "His career spans songwriting, recording, music production, editing, mixing and mastering, as well as work in audiovisual media, podcasts and digital content. His technical experience also includes audio production for film and video games, sound design and interactive audio implementation in Unreal Engine."}</p>
          <p>{pt
            ? "Idealizador de The Velvet Margin, Tiago conduz a criação das canções e a identidade sonora do projeto. É proponente, responsável artístico, produtor musical e coordenador executivo do projeto cultural aprovado integralmente no ProAC ICMS nº 56889, dedicado à produção e ao lançamento do primeiro álbum da banda."
            : "As the creator of The Velvet Margin, Tiago leads the songwriting and sonic identity of the project. He is the lead applicant, artistic director, music producer and executive coordinator of the cultural project fully approved under ProAC ICMS No. 56889, dedicated to producing and releasing the band's debut album."}</p>
        </div>
      </div>
    </section>
  </main>;
}
