"use client";

import { useEffect, useState } from "react";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

type Person = {
  name: string;
  rolePt: string;
  roleEn: string;
  image: string | null;
  className: string;
  initials?: string;
  bioPt?: string[];
  bioEn?: string[];
  photoCreditPt?: string;
  photoCreditEn?: string;
};

const artists: Person[] = [
  { name: "Arthur Krena", rolePt: "Voz principal", roleEn: "Lead vocals", image: null, initials: "AK", className: "portrait-placeholder" },
  {
    name: "Diego Aquino", rolePt: "Contrabaixo", roleEn: "Bass", image: "/members/diego-aquino-nova2.webp.jpeg", className: "portrait-vertical",
    bioPt: ["Diego Aquino é baixista e produtor musical com mais de duas décadas de atuação na cena independente de São Paulo. Formado no Curso Técnico de Baixo Elétrico do Conservatório Souza Lima, desenvolveu uma linguagem marcada pela precisão rítmica e pelas influências da Black Music, do soul e do R&B dos anos 1970.", "Cofundador das bandas Oyster Movement e Acajá, participou da gravação do EP Allow Me Inside, produzido por André Christovam nos Mosh Studios e incluído na lista de consideração para o 55º Grammy Awards. Também atua como sideman e produtor ao lado de diversos artistas da música independente paulistana.", "No The Velvet Margin, contribui como baixista, trazendo experiência de palco, sensibilidade musical e profundo domínio das linguagens do soul, do R&B e da música negra contemporânea."],
    bioEn: ["Diego Aquino is a bassist and music producer with more than two decades of experience in São Paulo's independent music scene. Trained in Electric Bass at Conservatório Souza Lima, he developed a style shaped by rhythmic precision and the influence of 1970s Black Music, soul and R&B.", "A co-founder of Oyster Movement and Acajá, he performed on the EP Allow Me Inside, produced by André Christovam at Mosh Studios and submitted for consideration for the 55th Grammy Awards. He also works as a sideman and producer with a wide range of artists from São Paulo's independent scene.", "For The Velvet Margin, he contributes as bassist, bringing extensive stage experience, musical sensitivity and a deep command of soul, R&B and contemporary Black music."],
  },
  { name: "Yves Remont", rolePt: "Guitarra", roleEn: "Guitar", image: "/members/yves-remont.webp", className: "portrait-vertical" },
  {
    name: "Rubens de Oliveira", rolePt: "Bateria e percussão", roleEn: "Drums and percussion", image: "/members/rubens-de-oliveira.webp", className: "portrait-wide",
    photoCreditPt: "Foto: Lucas Bonetti",
    photoCreditEn: "Photo: Lucas Bonetti",
    bioPt: ["Rubens de Oliveira possui ampla formação em música de concerto e música popular. Estudou na EMESP, na Escola Municipal de Música de São Paulo, na Universidade de São Paulo e na Universidade Federal de Minas Gerais, com especialização em percussão e bateria.", "É timpanista e chefe do naipe de percussão da Orquestra do Theatro São Pedro. Também atua como compositor e arranjador na companhia Circo Enxame e no grupo instrumental Ôctôctô.", "Sua trajetória inclui apresentações em diferentes países e gravações com a Orquestra Jovem Tom Jobim, Karin Fernandes, Palavra Cantada e Tom Zé."],
    bioEn: ["Rubens de Oliveira has an extensive background in classical and popular music. He studied at EMESP, the São Paulo Municipal School of Music, the University of São Paulo and the Federal University of Minas Gerais, specializing in percussion and drums.", "He is principal timpanist and head of the percussion section at the Theatro São Pedro Orchestra. He also works as a composer and arranger with Circo Enxame and the instrumental group Ôctôctô.", "His career includes international performances and recordings with the Tom Jobim Youth Orchestra, Karin Fernandes, Palavra Cantada and Tom Zé."],
  },
];

const team: Person[] = [
  {
    name: "Tiago dos Santos Lins", rolePt: "Proponente, compositor, produtor musical e coordenação executiva", roleEn: "Project lead, songwriter, music producer and executive coordinator", image: "/members/tiago-lins-bio.webp", className: "portrait-vertical",
    bioPt: ["Tiago Lins é compositor, produtor musical e engenheiro de áudio formado em Audio Recording and Production pelo Institute of Audio Research, em Nova York. Também é cientista social pela Universidade Federal de São Carlos.", "Sua trajetória reúne composição, gravação, produção musical, edição, mixagem e masterização, além de trabalhos em audiovisual, podcasts, cinema, videogames, sound design e áudio interativo na Unreal Engine.", "Idealizador de The Velvet Margin, conduz a criação das canções, a identidade sonora, a produção musical e a coordenação executiva do projeto."],
    bioEn: ["Tiago Lins is a songwriter, music producer and audio engineer trained in Audio Recording and Production at the Institute of Audio Research in New York. He also holds a degree in Social Sciences from the Federal University of São Carlos.", "His work spans songwriting, recording, music production, editing, mixing and mastering, as well as audiovisual media, podcasts, film, video games, sound design and interactive audio in Unreal Engine.", "As the creator of The Velvet Margin, he leads the songwriting, sonic identity, music production and executive coordination of the project."],
  },
  {
    name: "Txai Zerbeto Suares Souza", rolePt: "Direção de arte e design", roleEn: "Art direction and design", image: "https://raw.githubusercontent.com/tiagoslins/the-velvet-margin/main/public/members/Imagem%20do%20WhatsApp%20de%202025-03-04%20%C3%A0(s)%2011.17.14_3691b99e.jpg", className: "portrait-vertical",
    bioPt: ["Txai Zerbeto Suares Souza atua como diretor de arte, designer, redator e ilustrador, com experiência na criação de identidades visuais, campanhas publicitárias, projetos editoriais e peças gráficas para diferentes formatos de comunicação.", "Sua trajetória inclui campanhas para Max Titanium e projetos institucionais para o Istituto Europeo di Design, nos quais trabalhou com conceito visual, composição, paleta de cores, tipografia e integração entre texto e linguagem gráfica. Também desenvolve capas, cartazes, folders, banners, publicações e ilustração independente.", "Em The Velvet Margin, é responsável por traduzir o conceito musical em linguagem visual, conduzindo a identidade do álbum, a capa, as peças digitais, os materiais de divulgação e a direção estética do projeto."],
    bioEn: ["Txai Zerbeto Suares Souza works as an art director, designer, copywriter and illustrator, with experience in visual identities, advertising campaigns, editorial projects and graphic materials across multiple formats.", "His career includes campaigns for Max Titanium and institutional projects for Istituto Europeo di Design, working with visual concepts, composition, color palettes, typography and the integration of text and graphic language. He also develops covers, posters, folders, banners, publications and independent illustration.", "For The Velvet Margin, he translates the musical concept into a coherent visual language, leading the album identity, cover artwork, digital assets, promotional materials and overall art direction."],
  },
  {
    name: "Dayanne Silva", rolePt: "Coordenação administrativa e direitos autorais", roleEn: "Administrative coordination and copyright", image: "/members/Dayanne%20Silva.jpeg", className: "portrait-vertical",
    bioPt: ["Dayanne Silva é profissional com experiência na produção de eventos culturais, shows e projetos audiovisuais, atuando no planejamento, na organização e na execução de diferentes etapas de produção.", "Possui vivência em coordenação de equipes, logística, atendimento a artistas, contratação e relacionamento com fornecedores, contribuindo para a realização de projetos com eficiência, qualidade e impacto cultural.", "Em The Velvet Margin, é responsável pela coordenação administrativa e pelos direitos autorais, colaborando com a organização documental, o acompanhamento dos processos internos e o suporte à execução das atividades previstas."],
    bioEn: ["Dayanne Silva is a professional with experience in the production of cultural events, concerts and audiovisual projects, working across planning, organization and execution.", "Her background includes team coordination, logistics, artist support, contracting and supplier relations, contributing to projects delivered with efficiency, quality and cultural impact.", "For The Velvet Margin, she is responsible for administrative coordination and copyright matters, supporting documentation, internal processes and the delivery of the project’s planned activities."],
  },
];

export default function BandPage() { return <SiteShell><PeopleContent /></SiteShell>; }

function PeopleContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const [selected, setSelected] = useState<Person | null>(null);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", close); };
  }, [selected]);

  const renderPeople = (people: Person[]) => <div className="members-page-grid">{people.map((person, index) => {
    const hasBio = Boolean(person.bioPt?.length && person.bioEn?.length);
    const credit = pt ? person.photoCreditPt : person.photoCreditEn;
    const content = <><div className={`portrait-image ${person.className}`}>{person.image ? <img src={person.image} alt={`${person.name} — ${pt ? person.rolePt : person.roleEn}`} /> : <div><span>{person.initials}</span><p>{pt ? "FOTO EM BREVE" : "PHOTO COMING SOON"}</p></div>}<span className="portrait-number">{String(index + 1).padStart(2, "0")}</span>{hasBio && <span className="portrait-action" aria-hidden="true">{pt ? "VER BIOGRAFIA" : "VIEW BIOGRAPHY"} <b>↗</b></span>}</div><h3>{person.name}</h3><p>{pt ? person.rolePt : person.roleEn}</p>{credit && <small className="photo-credit">{credit}</small>}</>;
    return hasBio ? <button className="member-portrait member-card-button" type="button" key={person.name} onClick={() => setSelected(person)}>{content}</button> : <article className="member-portrait" key={person.name}>{content}</article>;
  })}</div>;

  return <main className="inner-page">
    <section className="page-hero band-page-hero"><div className="page-hero-image"><img src="/members/rubens-de-oliveira.webp" alt="" /></div><div className="page-title"><p className="kicker">{pt ? "ARTISTAS & EQUIPE" : "ARTISTS & TEAM"}</p><h1>{pt ? "As pessoas que dão forma, som e direção ao projeto." : "The people shaping the project’s sound, image and direction."}</h1></div></section>
    <section className="band-manifesto section-light"><p className="section-index">01</p><div><h2>{pt ? "Uma obra coletiva, conduzida por diferentes trajetórias." : "A collective work shaped by different paths."}</h2></div><div><p>{pt ? "The Velvet Margin reúne intérpretes, músicos, produção, direção de arte e gestão cultural em torno de uma mesma proposta: transformar memória, trabalho, resistência e liberdade em música, imagem e acesso público." : "The Velvet Margin brings together performers, musicians, production, art direction and cultural management around one purpose: transforming memory, labor, resistance and freedom into music, image and public access."}</p></div></section>
    <section className="members-section"><div className="members-heading"><p className="kicker">{pt ? "NÚCLEO ARTÍSTICO" : "ARTISTIC CORE"}</p><h2>{pt ? "Conheça os artistas" : "Meet the artists"}</h2><p>{pt ? "As biografias e fotografias serão ampliadas conforme a equipe for confirmada." : "Biographies and photographs will be expanded as the team is confirmed."}</p></div>{renderPeople(artists)}</section>
    <section className="members-section team-section section-light"><div className="members-heading"><p className="kicker dark">{pt ? "DIREÇÃO, PRODUÇÃO E GESTÃO" : "DIRECTION, PRODUCTION AND MANAGEMENT"}</p><h2>{pt ? "Quem estrutura a realização" : "The team behind the production"}</h2><p>{pt ? "Profissionais responsáveis pela criação, produção, identidade visual e organização do projeto." : "Professionals responsible for creation, production, visual identity and project organization."}</p></div>{renderPeople(team)}</section>
    {selected && <div className="bio-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelected(null); }}><section className="bio-modal" role="dialog" aria-modal="true" aria-labelledby="bio-title"><button className="bio-modal-close" type="button" onClick={() => setSelected(null)}>×</button><div className={`bio-modal-portrait ${selected.image ? "" : "portrait-placeholder"}`}>{selected.image ? <img src={selected.image} alt="" /> : <div><span>{selected.initials}</span></div>}{(pt ? selected.photoCreditPt : selected.photoCreditEn) && <small className="photo-credit">{pt ? selected.photoCreditPt : selected.photoCreditEn}</small>}</div><div className="bio-modal-copy"><p className="kicker">{pt ? "TRAJETÓRIA" : "BIOGRAPHY"}</p><h2 id="bio-title">{selected.name}</h2><p className="bio-modal-role">{pt ? selected.rolePt : selected.roleEn}</p><div className="bio-modal-text">{(pt ? selected.bioPt : selected.bioEn)?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section></div>}
  </main>;
}
