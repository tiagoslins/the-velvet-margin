"use client";

import { useEffect, useRef, useState } from "react";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const email = "contato@thevelvetmargin.com.br";
const commercialDeck = "/documentos/apresentacao-comercial-the-velvet-margin.pdf";

export default function SponsorshipPage() {
  return <SiteShell><SponsorshipContent /></SiteShell>;
}

function SponsorshipContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const [activeOpportunity, setActiveOpportunity] = useState<number | null>(null);
  const modalRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const opportunities = [
    {
      number: "01",
      title: pt ? "Narrativa autêntica" : "Authentic narrative",
      image: "/images/patrocinio/narrativa-autentica.webp",
      alt: pt ? "Paisagem urbana afro-brasileira representando memória, identidade e continuidade histórica" : "Afro-Brazilian urban landscape representing memory, identity and historical continuity",
      summary: pt
        ? "Uma obra autoral que transforma memória negra, trabalho, resistência e liberdade em linguagem musical contemporânea."
        : "An original work transforming Black memory, labor, resistance and freedom into a contemporary musical language.",
      detail: pt
        ? "The Velvet Margin nasce de uma pesquisa artística e social claramente posicionada. Suas canções relacionam experiências históricas da população negra às tensões do presente, sem tratar esses temas como recurso publicitário. Para a empresa patrocinadora, essa associação representa proximidade com uma obra coerente, independente e culturalmente relevante, cuja identidade permanece íntegra em todas as etapas do projeto."
        : "The Velvet Margin emerges from a clearly positioned artistic and social inquiry. Its songs connect Black historical experience with present-day tensions without turning these themes into advertising devices. For the sponsoring company, this means association with a coherent, independent and culturally relevant work whose identity remains intact throughout the project.",
      points: pt
        ? ["Autoria e identidade artística preservadas", "Conexão entre memória histórica e questões atuais", "Posicionamento cultural consistente em todos os conteúdos"]
        : ["Preserved authorship and artistic identity", "Connection between historical memory and current issues", "Consistent cultural positioning across all content"]
    },
    {
      number: "02",
      title: pt ? "Impacto cultural" : "Cultural impact",
      image: "/images/patrocinio/impacto-cultural.webp",
      alt: pt ? "Público reunido em uma manifestação cultural coletiva" : "Audience gathered in a collective cultural event",
      summary: pt
        ? "O investimento ultrapassa o lançamento do álbum e se converte em acesso gratuito, formação, encontro e circulação cultural."
        : "The investment goes beyond the album release and becomes free access, learning, gathering and cultural circulation.",
      detail: pt
        ? "O projeto combina produção fonográfica com uma apresentação pública gratuita, uma oficina de produção musical independente, distribuição digital e registro audiovisual. Dessa forma, o recurso destinado pela empresa alcança públicos em diferentes contextos: na experiência presencial, na atividade formativa e na circulação online. O resultado é um investimento cultural com entregas concretas, documentadas e capazes de continuar gerando acesso depois do encerramento da execução."
        : "The project combines record production with a free public performance, an independent music production workshop, digital distribution and audiovisual documentation. The sponsor's contribution therefore reaches audiences through live experience, education and online circulation, creating documented cultural outcomes that continue generating access after the production period.",
      points: pt
        ? ["Apresentação pública gratuita", "Oficina formativa e compartilhamento de conhecimento", "Distribuição digital e continuidade de acesso"]
        : ["Free public performance", "Educational workshop and knowledge sharing", "Digital distribution and continued access"]
    },
    {
      number: "03",
      title: pt ? "Ecossistema de conteúdo" : "Content ecosystem",
      image: "/images/patrocinio/ecossistema-conteudo.webp",
      alt: pt ? "Estúdio de produção musical e audiovisual com câmeras, instrumentos e equipamentos" : "Music and audiovisual production studio with cameras, instruments and equipment",
      summary: pt
        ? "Álbum, Live Session, bastidores, registros do processo e comunicação formam uma narrativa integrada."
        : "Album, Live Session, behind-the-scenes material, process documentation and communications form an integrated narrative.",
      detail: pt
        ? "A presença do projeto não se concentra em uma única publicação. A produção do álbum gera etapas, histórias e materiais que podem ser comunicados ao longo de toda a jornada: ensaios, gravações, depoimentos, bastidores, registros audiovisuais, lançamento e apresentação pública. Cada ponto de contato amplia a compreensão sobre a obra e cria oportunidades planejadas de reconhecimento institucional para a patrocinadora, sempre de forma proporcional à cota e compatível com as regras do ProAC ICMS."
        : "The project's presence is not limited to a single publication. Album production generates stages, stories and materials that can be communicated throughout the journey: rehearsals, recording sessions, testimonials, behind-the-scenes content, audiovisual records, release and public performance. Each touchpoint deepens understanding of the work and creates planned institutional recognition for the sponsor, proportional to the selected tier and compliant with ProAC ICMS rules.",
      points: pt
        ? ["Conteúdo distribuído ao longo da execução", "Presença em formatos musicais, audiovisuais e editoriais", "Diferentes momentos de contato com públicos e comunidades"]
        : ["Content distributed throughout production", "Presence across musical, audiovisual and editorial formats", "Multiple moments of contact with audiences and communities"]
    },
    {
      number: "04",
      title: pt ? "Valor institucional" : "Institutional value",
      image: "/images/patrocinio/valor-institucional.webp",
      alt: pt ? "Apresentação musical com público e forte atmosfera coletiva" : "Live music performance with an audience and a strong collective atmosphere",
      summary: pt
        ? "A marca é reconhecida como agente que viabiliza cultura independente, diversidade, formação e acesso público."
        : "The brand is recognized as an enabler of independent culture, diversity, education and public access.",
      detail: pt
        ? "Ao apoiar The Velvet Margin, a empresa não compra a obra nem interfere em seu conteúdo: ela assume publicamente o papel de patrocinadora cultural. Esse posicionamento fortalece compromissos institucionais relacionados à diversidade, à economia criativa, à democratização do acesso e ao desenvolvimento de artistas independentes. A parceria é acompanhada por aplicação de marca planejada, registros das entregas e relatório final de comprovação."
        : "By supporting The Velvet Margin, the company does not purchase the work or interfere with its content; it publicly assumes the role of cultural sponsor. This position reinforces institutional commitments to diversity, the creative economy, democratized access and independent artist development. The partnership includes planned brand application, delivery records and a final documentation report.",
      points: pt
        ? ["Reconhecimento como patrocinadora cultural", "Associação a diversidade, acesso e economia criativa", "Entregas documentadas e aplicação responsável da marca"]
        : ["Recognition as a cultural sponsor", "Association with diversity, access and the creative economy", "Documented outcomes and responsible brand application"]
    }
  ];

  const selectedOpportunity = activeOpportunity === null ? null : opportunities[activeOpportunity];

  useEffect(() => {
    if (!selectedOpportunity) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveOpportunity(null);
      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [activeOpportunity, language]);

  return <main className="inner-page sponsorship-page">
    <section className="sponsor-hero sponsor-hero-corporate">
      <div className="sponsor-hero-copy">
        <p className="kicker">{pt ? "PATROCÍNIO CULTURAL • PROAC ICMS" : "CULTURAL SPONSORSHIP • PROAC ICMS"}</p>
        <h1>{pt ? "Cultura que gera valor. Uma história que sua marca ajuda a tornar pública." : "Culture that creates value. A story your brand can help bring to the public."}</h1>
        <p>{pt
          ? "The Velvet Margin transforma memória, trabalho, resistência e liberdade negra em música autoral, formação e acesso cultural. Uma oportunidade de associar sua marca a uma obra relevante, com entregas públicas e presença institucional planejada."
          : "The Velvet Margin transforms Black memory, labor, resistance and freedom into original music, learning and cultural access. An opportunity to connect your brand with a relevant work, public outcomes and carefully planned institutional visibility."}</p>
        <div className="actions">
          <a className="button button-gold" href={commercialDeck} target="_blank" rel="noreferrer">{pt ? "Baixar apresentação comercial" : "Download sponsorship deck"}</a>
          <a className="button button-outline" href="#propostas">{pt ? "Conhecer as propostas" : "View sponsorship options"}</a>
        </div>
        <div className="approval-proof">
          <strong>{pt ? "Projeto aprovado e habilitado para captação" : "Approved and authorized for fundraising"}</strong>
          <span>ProAC ICMS nº 56889 • {pt ? "Valor aprovado: R$ 100.000,00" : "Approved amount: BRL 100,000"}</span>
        </div>
      </div>
      <div className="sponsor-art-panel">
        <img src="/the-velvet-margin-album.webp" alt={pt ? "Capa do álbum The Velvet Margin" : "The Velvet Margin album artwork"} width="1800" height="1800" loading="lazy" decoding="async" />
        <div className="sponsor-art-caption"><span>THE VELVET MARGIN</span><span>2026—2027</span></div>
      </div>
    </section>

    <section className="sponsor-metrics" aria-label={pt ? "Números do projeto" : "Project figures"}>
      <article><strong>R$ 100 mil</strong><span>{pt ? "valor aprovado" : "approved amount"}</span></article>
      <article><strong>{pt ? "Até 10" : "Up to 10"}</strong><span>{pt ? "faixas autorais" : "original tracks"}</span></article>
      <article><strong>4</strong><span>{pt ? "entregas públicas centrais" : "core public outcomes"}</span></article>
      <article><strong>8 {pt ? "meses" : "months"}</strong><span>{pt ? "de execução prevista" : "planned execution"}</span></article>
    </section>

    <section className="sponsor-story section-light">
      <div><p className="kicker dark">{pt ? "O PROJETO" : "THE PROJECT"}</p><h2>{pt ? "Entre a margem e a liberdade." : "Between the margin and freedom."}</h2></div>
      <div className="sponsor-story-copy">
        <p>{pt
          ? "The Velvet Margin: Produção, Gravação e Lançamento de Álbum Autoral é um projeto musical que investiga como a escravização e a exploração do trabalho atravessaram a história e continuam limitando oportunidades, identidades e futuros do povo negro."
          : "The Velvet Margin: Production, Recording and Release of an Original Album is a music project exploring how enslavement and labor exploitation have shaped history and continue to restrict Black opportunity, identity and futures."}</p>
        <p>{pt
          ? "Ao longo de dez canções, a obra percorre apagamento, desigualdade, resistência, pertencimento e liberdade coletiva. O álbum funciona como porta-voz dessa memória e convida o público a transformar escuta em reflexão."
          : "Across ten songs, the work moves through erasure, inequality, resistance, belonging and collective freedom. The album gives voice to this memory and invites audiences to turn listening into reflection."}</p>
        <p className="sponsor-quote">{pt ? "Não se trata apenas de lançar um álbum. Trata-se de ampliar uma conversa que ainda precisa ser ouvida." : "This is not only about releasing an album. It is about expanding a conversation that still needs to be heard."}</p>
      </div>
    </section>

    <section className="brand-opportunity">
      <div className="section-lead">
        <p className="kicker">{pt ? "A OPORTUNIDADE PARA A MARCA" : "THE BRAND OPPORTUNITY"}</p>
        <h2>{pt ? "Relevância cultural com presença de marca responsável." : "Cultural relevance with responsible brand presence."}</h2>
        <p>{pt ? "O patrocínio conecta investimento cultural, impacto público e reputação. A marca participa como viabilizadora da obra, com reconhecimento institucional integrado à jornada do projeto." : "Sponsorship connects cultural investment, public impact and reputation. The brand is recognized as an enabler of the work, with institutional visibility integrated throughout the project journey."}</p>
      </div>
      <div className="opportunity-invitation">
        <span>{pt ? "EXPLORE A PROPOSTA" : "EXPLORE THE PROPOSAL"}</span>
        <strong>{pt ? "Clique em cada imagem para compreender como o projeto pode gerar valor cultural, público e institucional para a sua empresa." : "Select each image to understand how the project can create cultural, public and institutional value for your company."}</strong>
        <small>{pt ? "Os quatro pilares abaixo apresentam diferentes dimensões da parceria." : "The four pillars below present different dimensions of the partnership."}</small>
      </div>
      <div className="opportunity-grid opportunity-image-grid">
        {opportunities.map((item, index) => <button
          className="opportunity-card"
          type="button"
          key={item.number}
          onClick={(event) => { lastTriggerRef.current = event.currentTarget; setActiveOpportunity(index); }}
          aria-label={`${pt ? "Abrir detalhes sobre" : "Open details about"} ${item.title}`}
        >
          <div className="opportunity-card-image"><img src={item.image} alt={item.alt} width="900" height="900" loading="lazy" decoding="async" /></div>
          <div className="opportunity-card-copy">
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <strong>{pt ? "Compreender este pilar" : "Explore this pillar"}<b>→</b></strong>
          </div>
        </button>)}
      </div>
    </section>

    {selectedOpportunity && <div className="opportunity-modal-backdrop" role="presentation" onClick={() => setActiveOpportunity(null)}>
      <section ref={modalRef} className="opportunity-modal" role="dialog" aria-modal="true" aria-labelledby="opportunity-modal-title" onClick={(event) => event.stopPropagation()}>
        <button ref={closeButtonRef} className="opportunity-modal-close" type="button" onClick={() => setActiveOpportunity(null)} aria-label={pt ? "Fechar janela" : "Close dialog"}>×</button>
        <div className="opportunity-modal-image"><img src={selectedOpportunity.image} alt={selectedOpportunity.alt} width="900" height="900" decoding="async" /></div>
        <div className="opportunity-modal-copy">
          <span>{selectedOpportunity.number} • {pt ? "PILAR DA PARCERIA" : "PARTNERSHIP PILLAR"}</span>
          <h2 id="opportunity-modal-title">{selectedOpportunity.title}</h2>
          <p>{selectedOpportunity.detail}</p>
          <ul>{selectedOpportunity.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <a href="#propostas" onClick={() => setActiveOpportunity(null)}>{pt ? "Conhecer as cotas de patrocínio" : "View sponsorship tiers"}<b>→</b></a>
        </div>
      </section>
    </div>}

    <section className="public-deliveries section-light">
      <div className="section-lead dark-copy"><p className="kicker dark">{pt ? "ENTREGAS PÚBLICAS" : "PUBLIC OUTCOMES"}</p><h2>{pt ? "Um investimento que chega ao público em diferentes formatos." : "An investment that reaches audiences in different formats."}</h2></div>
      <div className="delivery-list">
        <article><span>01</span><div><h3>{pt ? "Álbum autoral" : "Original album"}</h3><p>{pt ? "Produção, gravação e lançamento digital de até dez faixas." : "Production, recording and digital release of up to ten tracks."}</p></div></article>
        <article><span>02</span><div><h3>{pt ? "Apresentação gratuita" : "Free public performance"}</h3><p>{pt ? "Encontro presencial aberto ao público, com realização prevista em São Paulo." : "An in-person event open to the public, planned for São Paulo."}</p></div></article>
        <article><span>03</span><div><h3>{pt ? "Oficina formativa" : "Educational workshop"}</h3><p>{pt ? "Atividade gratuita sobre produção musical independente e caminhos de realização." : "A free workshop on independent music production and paths to creation."}</p></div></article>
        <article><span>04</span><div><h3>{pt ? "Registro audiovisual" : "Audiovisual record"}</h3><p>{pt ? "Conteúdo que documenta e amplia a circulação do processo artístico." : "Content documenting the artistic process and extending its reach."}</p></div></article>
      </div>
      <p className="location-note">{pt ? "Local previsto para a apresentação e a oficina: CCJ Ruth Cardoso, sujeito à confirmação de pauta e às autorizações necessárias." : "Planned venue for the performance and workshop: CCJ Ruth Cardoso, subject to scheduling confirmation and required authorizations."}</p>
    </section>

    <section className="sponsorship-options" id="propostas">
      <div className="section-lead"><p className="kicker">{pt ? "COTAS DE PATROCÍNIO" : "SPONSORSHIP TIERS"}</p><h2>{pt ? "Três formas de participar desta realização." : "Three ways to take part in this cultural initiative."}</h2><p>{pt ? "As contrapartidas são proporcionais ao aporte e detalhadas em uma proposta personalizada, respeitando o plano aprovado e as normas do ProAC ICMS." : "Benefits are proportional to the contribution and detailed in a tailored proposal, in accordance with the approved plan and ProAC ICMS rules."}</p></div>
      <div className="sponsorship-card-grid sponsorship-card-grid-three">
        <article className="sponsorship-card master-card"><p className="card-label">{pt ? "COTA MASTER" : "MASTER TIER"}</p><h3>R$ 100.000</h3><p className="card-summary">{pt ? "Patrocínio integral do valor aprovado, com o mais alto nível de reconhecimento institucional e protagonismo de marca." : "Full sponsorship of the approved amount, with the highest level of institutional recognition and brand prominence."}</p><ul><li>{pt ? "Crédito como Patrocinadora Master" : "Master Sponsor credit"}</li><li>{pt ? "Maior hierarquia de marca nos materiais previstos" : "Highest brand hierarchy across planned materials"}</li><li className="live-session-highlight">{pt ? "Presença de maior destaque nos créditos da Live Session e nos materiais digitais selecionados" : "Highest-visibility presence in Live Session credits and selected digital materials"}</li><li>{pt ? "Presença institucional no álbum, no audiovisual e nas ações públicas, conforme aplicável" : "Institutional presence across the album, audiovisual content and public activities, where applicable"}</li><li>{pt ? "Plano de comunicação e aplicação de marca personalizado" : "Tailored communications and brand application plan"}</li><li>{pt ? "Relatório consolidado de entregas e registros" : "Consolidated delivery and documentation report"}</li></ul><a href={`mailto:${email}?subject=Cota Master — The Velvet Margin`}>{pt ? "Conversar sobre a cota Master" : "Discuss the Master tier"}<span>→</span></a></article>
        <article className="sponsorship-card principal-card"><p className="card-label">{pt ? "COTA DESTAQUE" : "FEATURED TIER"}</p><h3>R$ 50.000</h3><p className="card-summary">{pt ? "Aporte de destaque para empresas que desejam forte presença institucional em uma composição de patrocinadores." : "A featured contribution for companies seeking strong institutional visibility within a group of sponsors."}</p><ul><li>{pt ? "Crédito como Patrocinadora Destaque" : "Featured Sponsor credit"}</li><li>{pt ? "Destaque de marca proporcional ao aporte" : "Brand prominence proportional to the contribution"}</li><li className="live-session-highlight">{pt ? "Presença destacada nos créditos da Live Session e nos materiais digitais selecionados" : "Featured presence in Live Session credits and selected digital materials"}</li><li>{pt ? "Presença nos materiais e conteúdos previstos para a cota" : "Presence across materials and content planned for the tier"}</li><li>{pt ? "Associação institucional às entregas culturais" : "Institutional association with cultural outcomes"}</li><li>{pt ? "Relatório de entregas e registros da parceria" : "Partnership delivery and documentation report"}</li></ul><a href={`mailto:${email}?subject=Cota Destaque — The Velvet Margin`}>{pt ? "Conversar sobre a cota Destaque" : "Discuss the Featured tier"}<span>→</span></a></article>
        <article className="sponsorship-card impulso-card"><p className="card-label">{pt ? "COTA IMPULSO" : "IMPACT TIER"}</p><h3>R$ 25.000</h3><p className="card-summary">{pt ? "Uma modalidade acessível para empresas que desejam apoiar uma etapa relevante da produção e integrar a rede de patrocinadores do projeto." : "An accessible tier for companies that want to support a meaningful production stage and join the project’s sponsor network."}</p><ul><li>{pt ? "Crédito como Patrocinadora Impulso" : "Impact Sponsor credit"}</li><li>{pt ? "Marca na página de patrocinadores e nos créditos digitais" : "Brand presence on the sponsor page and in digital credits"}</li><li>{pt ? "Menções em publicações selecionadas nas redes sociais" : "Mentions in selected social media posts"}</li><li>{pt ? "Presença nos créditos da Live Session e em materiais digitais selecionados" : "Presence in Live Session credits and selected digital materials"}</li><li>{pt ? "Relatório final com registros e comprovação das entregas" : "Final report with documentation of delivered benefits"}</li></ul><a href={`mailto:${email}?subject=Cota Impulso — The Velvet Margin`}>{pt ? "Conversar sobre a cota Impulso" : "Discuss the Impact tier"}<span>→</span></a></article>
      </div>
      <div className="actions"><a className="button button-gold" href={commercialDeck} target="_blank" rel="noreferrer">{pt ? "Baixar proposta comercial completa" : "Download full sponsorship proposal"}</a></div>
      <p className="sponsorship-disclaimer">{pt ? "As cotas estão sujeitas à disponibilidade e à composição final de patrocinadores. A participação da marca terá natureza de patrocínio cultural e não implica cessão de direitos patrimoniais, propriedade sobre a obra, controle editorial ou naming rights. Toda aplicação será previamente validada e seguirá o plano aprovado, o Manual de Identidade Visual e as regras do ProAC ICMS." : "Tiers are subject to availability and the final sponsor composition. Brand participation is recognized as cultural sponsorship and does not grant ownership, economic rights over the work, editorial control or naming rights. Every brand application is subject to prior validation and must comply with the approved plan, visual identity manual and ProAC ICMS rules."}</p>
    </section>

    <section className="incentive-explainer section-light">
      <div className="section-lead dark-copy"><p className="kicker dark">{pt ? "COMO FUNCIONA O INCENTIVO" : "HOW THE INCENTIVE WORKS"}</p><h2>{pt ? "Um processo fiscal estruturado, conduzido com a área responsável da empresa." : "A structured tax process coordinated with the company’s responsible team."}</h2></div>
      <ol className="incentive-steps">
        <li><span>01</span><div><strong>{pt ? "Credenciamento" : "Registration"}</strong><p>{pt ? "A empresa contribuinte de ICMS no Estado de São Paulo verifica sua habilitação no sistema PAC/PIE da Secretaria da Fazenda e Planejamento." : "A company paying ICMS in São Paulo verifies its eligibility in the Finance and Planning Department’s PAC/PIE system."}</p></div></li>
        <li><span>02</span><div><strong>{pt ? "Destinação" : "Allocation"}</strong><p>{pt ? "Com limite mensal autorizado, a empresa seleciona o projeto nº 56889 e emite o boleto de patrocínio pelo sistema oficial." : "Within its authorized monthly limit, the company selects project no. 56889 and issues the official sponsorship payment slip."}</p></div></li>
        <li><span>03</span><div><strong>{pt ? "Pagamento" : "Payment"}</strong><p>{pt ? "O boleto deve ser pago dentro do prazo do mês de emissão, conforme as orientações fiscais vigentes." : "The payment slip must be paid within its month of issue, following current tax guidance."}</p></div></li>
        <li><span>04</span><div><strong>{pt ? "Crédito de ICMS" : "ICMS tax credit"}</strong><p>{pt ? "O valor pago pode ser escriturado como crédito de ICMS, limitado ao boleto e ao teto autorizado para a empresa naquele mês." : "The amount paid may be recorded as an ICMS tax credit, limited by both the payment and the company’s authorized monthly ceiling."}</p></div></li>
      </ol>
      <p className="tax-note">{pt ? "A confirmação do enquadramento, do limite mensal e da escrituração deve ser feita pelo departamento fiscal da empresa no sistema da SEFAZ-SP." : "Eligibility, monthly limits and tax recording must be confirmed by the company’s tax department through the SEFAZ-SP system."}</p>
    </section>

    <section className="sponsor-close">
      <p className="kicker">{pt ? "PRÓXIMO PASSO" : "NEXT STEP"}</p><h2>{pt ? "Vamos construir uma parceria com significado, presença e legado." : "Let’s build a partnership with meaning, visibility and legacy."}</h2>
      <p>{pt ? "Baixe a apresentação comercial completa ou solicite uma versão personalizada para os objetivos da sua empresa." : "Download the full sponsorship deck or request a version tailored to your company’s priorities."}</p>
      <div className="actions"><a className="button button-gold" href={commercialDeck} target="_blank" rel="noreferrer">{pt ? "Baixar apresentação comercial" : "Download sponsorship deck"}</a><a className="button button-outline" href={`mailto:${email}?subject=Parceria cultural — The Velvet Margin`}>{pt ? "Falar com Tiago Lins" : "Contact Tiago Lins"}</a></div>
      <a className="sponsor-email" href={`mailto:${email}`}>{email}</a>
    </section>
  </main>;
}
