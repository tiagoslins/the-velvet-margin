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
        <p className="creative-role">{pt ? "Compositor • Produtor musical • Engenheiro de áudio" : "Songwriter • Music producer • Audio engineer"}</p>
        <div className="creative-bio">
          <p>{pt
            ? "Tiago Lins é compositor, produtor musical e engenheiro de áudio. Idealizador de The Velvet Margin, conduz a criação das canções e a identidade sonora do projeto, unindo sensibilidade artística, domínio técnico e uma abordagem narrativa da produção musical."
            : "Tiago Lins is a songwriter, music producer and audio engineer. As the creator of The Velvet Margin, he leads the songwriting and sonic identity of the project, bringing together artistic sensitivity, technical craft and a narrative approach to music production."}</p>
          <p>{pt
            ? "Sua trajetória também abrange produção de áudio para cinema, videogames e experiências interativas. Como proponente do projeto cultural The Velvet Margin, aprovado pelo ProAC ICMS, atua ainda na coordenação executiva da produção do primeiro álbum da banda."
            : "His work also spans audio production for film, video games and interactive experiences. As the lead applicant for The Velvet Margin cultural project, approved by ProAC ICMS, he also serves as executive coordinator for the production of the band's debut album."}</p>
        </div>
      </div>
    </section>
  </main>;
}
