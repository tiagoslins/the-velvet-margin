"use client";

import { useEffect, useState } from "react";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

type Member = {
  name: string;
  rolePt: string;
  roleEn: string;
  image: string | null;
  className: string;
  initials?: string;
  bioPt?: string[];
  bioEn?: string[];
};

const members: Member[] = [
  {
    name: "Arthur Krena",
    rolePt: "Voz principal",
    roleEn: "Lead vocals",
    image: null,
    initials: "AK",
    className: "portrait-placeholder",
  },
  {
    name: "Diego Aquino",
    rolePt: "Contrabaixo",
    roleEn: "Bass",
    image: "/members/diego-aquino.webp",
    className: "portrait-vertical",
  },
  {
    name: "Yves Remont",
    rolePt: "Guitarra",
    roleEn: "Guitar",
    image: "/members/yves-remont.webp",
    className: "portrait-vertical",
  },
  {
    name: "Rubens de Oliveira",
    rolePt: "Bateria e percussão",
    roleEn: "Drums and percussion",
    image: "/members/rubens-de-oliveira.webp",
    className: "portrait-wide",
    bioPt: [
      "Rubens de Oliveira possui ampla formação em música de concerto e música popular. Estudou em instituições como a Escola de Música do Estado de São Paulo (EMESP), a Escola Municipal de Música de São Paulo, a Universidade de São Paulo (USP) e a Universidade Federal de Minas Gerais (UFMG), especializando-se em percussão e bateria.",
      "É timpanista e chefe do naipe de percussão da Orquestra do Theatro São Pedro. Também atua como compositor e arranjador na companhia Circo Enxame e no grupo de música instrumental Ôctôctô.",
      "Ao longo de sua trajetória, apresentou-se em diversos países, tanto em concertos quanto em projetos de música popular. Participou de importantes gravações, incluindo álbuns da Orquestra Jovem Tom Jobim e da pianista Karin Fernandes com a Orquestra do Theatro São Pedro, além dos discos Pé com Pé, do grupo Palavra Cantada, e Vira Lata na Via Láctea, do cantor e compositor Tom Zé.",
    ],
    bioEn: [
      "Rubens de Oliveira has an extensive background in classical and popular music. He studied at institutions including the São Paulo State Music School (EMESP), the São Paulo Municipal School of Music, the University of São Paulo (USP), and the Federal University of Minas Gerais (UFMG), specializing in percussion and drums.",
      "He is principal timpanist and head of the percussion section at the Theatro São Pedro Orchestra. He also works as a composer and arranger with the Circo Enxame company and the instrumental music group Ôctôctô.",
      "Throughout his career, he has performed in several countries in both classical concerts and popular music projects. His recording credits include albums by the Tom Jobim Youth Orchestra and pianist Karin Fernandes with the Theatro São Pedro Orchestra, as well as Pé com Pé by Palavra Cantada and Vira Lata na Via Láctea by singer-songwriter Tom Zé.",
    ],
  },
  {
    name: "Tiago Lins",
    rolePt: "Composição, produção musical e engenharia de áudio",
    roleEn: "Songwriting, music production and audio engineering",
    image: "/members/tiago-lins-bio.webp",
    className: "portrait-vertical",
    bioPt: [
      "Tiago Lins é compositor, produtor musical e engenheiro de áudio formado em Audio Recording and Production pelo Institute of Audio Research, em Nova York, Estados Unidos. Também é cientista social pela Universidade Federal de São Carlos (UFSCar).",
      "Sua trajetória reúne composição, gravação, produção musical, edição, mixagem e masterização, além de trabalhos em audiovisual, podcasts e conteúdo digital. Sua experiência técnica também abrange produção de áudio para cinema e videogames, sound design e implementação de áudio interativo na Unreal Engine.",
      "Idealizador de The Velvet Margin, Tiago conduz a criação das canções e a identidade sonora do projeto, no qual atua como responsável artístico, produtor musical e coordenador executivo.",
    ],
    bioEn: [
      "Tiago Lins is a songwriter, music producer, and audio engineer trained in Audio Recording and Production at the Institute of Audio Research in New York City, United States. He also holds a degree in Social Sciences from the Federal University of São Carlos (UFSCar).",
      "His career spans songwriting, recording, music production, editing, mixing, and mastering, as well as work in audiovisual media, podcasts, and digital content. His technical experience also includes audio production for film and video games, sound design, and interactive audio implementation in Unreal Engine.",
      "As the creator of The Velvet Margin, Tiago leads the songwriting and sonic identity of the project, serving as its artistic director, music producer, and executive coordinator.",
    ],
  },
];

export default function BandPage() {
  return <SiteShell><BandContent /></SiteShell>;
}

function BandContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  useEffect(() => {
    if (!selectedMember) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMember(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return <main className="inner-page">
    <section className="page-hero band-page-hero">
      <div className="page-hero-image"><img src="/members/rubens-de-oliveira.webp" alt={pt ? "Rubens de Oliveira em apresentação ao vivo" : "Rubens de Oliveira performing live"} /></div>
      <div className="page-title"><p className="kicker">{pt ? "A BANDA" : "THE BAND"}</p><h1>{pt ? "Músicos de diferentes trajetórias. Uma mesma margem." : "Musicians from different paths. One shared margin."}</h1></div>
    </section>

    <section className="band-manifesto section-light">
      <p className="section-index">01</p>
      <div><h2>{pt ? "Intensidade, escuta e presença." : "Intensity, listening and presence."}</h2></div>
      <div><p>{pt
        ? "The Velvet Margin é um encontro entre soul e blues, construído por músicos que tratam cada canção como um espaço vivo. O repertório atravessa memória, espiritualidade, ruptura e reconstrução sem perder a força de uma banda tocando em conjunto."
        : "The Velvet Margin brings soul and blues together through musicians who treat every song as a living space. The repertoire moves through memory, spirituality, rupture and reconstruction without losing the power of a band playing together."}</p></div>
    </section>

    <section className="members-section" aria-labelledby="members-heading">
      <div className="members-heading">
        <p className="kicker">{pt ? "INTEGRANTES" : "MEMBERS"}</p>
        <h2 id="members-heading">{pt ? "Conheça os artistas" : "Meet the artists"}</h2>
        <p>{pt ? "Selecione um artista para conhecer sua trajetória." : "Select an artist to learn about their journey."}</p>
      </div>

      <div className="members-page-grid">
        {members.map((member, index) => {
          const hasBio = Boolean(member.bioPt?.length && member.bioEn?.length);
          const content = <>
            <div className={`portrait-image ${member.className}`}>
              {member.image
                ? <img src={member.image} alt={`${member.name} — ${pt ? member.rolePt : member.roleEn}`} />
                : <div><span>{member.initials}</span><p>{pt ? "FOTO EM BREVE" : "PHOTO COMING SOON"}</p></div>}
              <span className="portrait-number">{String(index + 1).padStart(2, "0")}</span>
              {hasBio && <span className="portrait-action" aria-hidden="true">{pt ? "VER BIOGRAFIA" : "VIEW BIOGRAPHY"} <b>↗</b></span>}
            </div>
            <h3>{member.name}</h3>
            <p>{pt ? member.rolePt : member.roleEn}</p>
          </>;

          return hasBio
            ? <button className="member-portrait member-card-button" type="button" key={member.name} onClick={() => setSelectedMember(member)} aria-label={`${pt ? "Abrir biografia de" : "Open biography for"} ${member.name}`}>{content}</button>
            : <article className="member-portrait" key={member.name}>{content}</article>;
        })}
      </div>
    </section>

    {selectedMember && <div className="bio-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.currentTarget === event.target) setSelectedMember(null);
    }}>
      <section className="bio-modal" role="dialog" aria-modal="true" aria-labelledby="bio-modal-title">
        <button className="bio-modal-close" type="button" onClick={() => setSelectedMember(null)} aria-label={pt ? "Fechar biografia" : "Close biography"}>×</button>
        <div className="bio-modal-portrait">
          {selectedMember.image && <img src={selectedMember.image} alt="" />}
        </div>
        <div className="bio-modal-copy">
          <p className="kicker">{pt ? "TRAJETÓRIA" : "BIOGRAPHY"}</p>
          <h2 id="bio-modal-title">{selectedMember.name}</h2>
          <p className="bio-modal-role">{pt ? selectedMember.rolePt : selectedMember.roleEn}</p>
          <div className="bio-modal-text">
            {(pt ? selectedMember.bioPt : selectedMember.bioEn)?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
    </div>}
  </main>;
}

