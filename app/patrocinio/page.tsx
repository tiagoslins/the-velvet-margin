"use client";

import { SiteShell, useSiteLanguage } from "../components/SiteShell";

const email = "thevelvetmargin@hotmail.com";

export default function SponsorshipPage() {
  return <SiteShell><SponsorshipContent /></SiteShell>;
}

function SponsorshipContent() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";

  return <main className="inner-page sponsorship-page">
    <section className="sponsor-hero sponsor-hero-corporate">
      <div className="sponsor-hero-copy">
        <p className="kicker">{pt ? "PATROCÍNIO CULTURAL • PROAC ICMS" : "CULTURAL SPONSORSHIP • PROAC ICMS"}</p>
        <h1>{pt ? "Cultura que gera valor. Uma história que sua marca ajuda a tornar pública." : "Culture that creates value. A story your brand can help bring to the public."}</h1>
        <p>{pt
          ? "The Velvet Margin transforma memória, trabalho, resistência e liberdade negra em música autoral, formação e acesso cultural. Uma oportunidade de associar sua marca a uma obra relevante, com entregas públicas e presença institucional planejada."
          : "The Velvet Margin transforms Black memory, labor, resistance and freedom into original music, learning and cultural access. An opportunity to connect your brand with a relevant work, public outcomes and carefully planned institutional visibility."}</p>
        <div className="actions">
          <a className="button button-gold" href={`mailto:${email}?subject=Patrocínio — The Velvet Margin`}>{pt ? "Solicitar apresentação comercial" : "Request the sponsorship deck"}</a>
          <a className="button button-outline" href="#propostas">{pt ? "Conhecer as propostas" : "View sponsorship options"}</a>
        </div>
        <div className="approval-proof">
          <strong>{pt ? "Projeto aprovado e habilitado para captação" : "Approved and authorized for fundraising"}</strong>
          <span>ProAC ICMS nº 56889 • {pt ? "Valor aprovado: R$ 100.000,00" : "Approved amount: BRL 100,000"}</span>
        </div>
      </div>
      <div className="sponsor-art-panel">
        <img src="/the-velvet-margin-album.webp" alt={pt ? "Capa do álbum The Velvet Margin" : "The Velvet Margin album artwork"} />
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
      <div className="opportunity-grid">
        <article><span>01</span><h3>{pt ? "Narrativa autêntica" : "Authentic narrative"}</h3><p>{pt ? "Associação a uma obra autoral com posicionamento claro, profundidade histórica e relevância contemporânea." : "Connection with an original work offering a clear point of view, historical depth and contemporary relevance."}</p></article>
        <article><span>02</span><h3>{pt ? "Impacto cultural" : "Cultural impact"}</h3><p>{pt ? "Acesso gratuito, formação e circulação digital ampliam o alcance do investimento para além do lançamento musical." : "Free access, learning and digital distribution extend the investment beyond the music release."}</p></article>
        <article><span>03</span><h3>{pt ? "Ecossistema de conteúdo" : "Content ecosystem"}</h3><p>{pt ? "Álbum, registro audiovisual, bastidores e comunicação formam uma narrativa com diferentes pontos de contato." : "Album, audiovisual record, behind-the-scenes material and communications create multiple audience touchpoints."}</p></article>
        <article><span>04</span><h3>{pt ? "Valor institucional" : "Institutional value"}</h3><p>{pt ? "Reconhecimento da empresa como agente que fortalece a cultura independente, a diversidade e a formação de público." : "Recognition of the company as an enabler of independent culture, diversity and audience development."}</p></article>
      </div>
    </section>

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
      <div className="section-lead"><p className="kicker">{pt ? "PROPOSTAS INICIAIS" : "INITIAL SPONSORSHIP OPTIONS"}</p><h2>{pt ? "Duas formas de liderar esta realização." : "Two ways to lead this cultural initiative."}</h2><p>{pt ? "As entregas finais são detalhadas em proposta personalizada e dimensionadas conforme o aporte, o plano aprovado e as normas vigentes." : "Final benefits are detailed in a tailored proposal and scaled to the contribution, approved plan and applicable rules."}</p></div>
      <div className="sponsorship-card-grid">
        <article className="sponsorship-card master-card">
          <p className="card-label">{pt ? "PATROCINADORA MASTER" : "MASTER SPONSOR"}</p><h3>R$ 100.000</h3>
          <p className="card-summary">{pt ? "Patrocínio integral do valor aprovado, com o mais alto nível de reconhecimento institucional do projeto." : "Full sponsorship of the approved amount, with the project’s highest level of institutional recognition."}</p>
          <ul><li>{pt ? "Crédito como Patrocinadora Master" : "Master Sponsor credit"}</li><li>{pt ? "Maior hierarquia de marca nos materiais previstos" : "Highest brand hierarchy across planned materials"}</li><li>{pt ? "Presença institucional no álbum, no audiovisual e nas ações públicas, conforme aplicável" : "Institutional presence across the album, audiovisual content and public activities, where applicable"}</li><li>{pt ? "Plano de comunicação e aplicação de marca personalizado" : "Tailored communications and brand application plan"}</li><li>{pt ? "Relatório consolidado de entregas e registros" : "Consolidated delivery and documentation report"}</li></ul>
          <a href={`mailto:${email}?subject=Patrocinadora Master — The Velvet Margin`}>{pt ? "Conversar sobre a cota Master" : "Discuss Master sponsorship"}<span>→</span></a>
        </article>
        <article className="sponsorship-card principal-card">
          <p className="card-label">{pt ? "PATROCINADORA PRINCIPAL" : "PRINCIPAL SPONSOR"}</p><h3>R$ 50.000</h3>
          <p className="card-summary">{pt ? "Aporte principal para empresas que desejam protagonismo de marca em uma composição de patrocinadores." : "A principal contribution for companies seeking prominent recognition within a group of sponsors."}</p>
          <ul><li>{pt ? "Crédito como Patrocinadora Principal" : "Principal Sponsor credit"}</li><li>{pt ? "Destaque de marca proporcional ao aporte" : "Brand prominence proportional to the contribution"}</li><li>{pt ? "Presença nos materiais e conteúdos previstos para a cota" : "Presence across materials and content planned for the tier"}</li><li>{pt ? "Associação institucional às entregas culturais" : "Institutional association with cultural outcomes"}</li><li>{pt ? "Relatório de entregas e registros da parceria" : "Partnership delivery and documentation report"}</li></ul>
          <a href={`mailto:${email}?subject=Patrocinadora Principal — The Velvet Margin`}>{pt ? "Conversar sobre a cota Principal" : "Discuss Principal sponsorship"}<span>→</span></a>
        </article>
      </div>
      <p className="sponsorship-disclaimer">{pt ? "A participação da marca terá natureza de patrocínio cultural. Não implica cessão de direitos patrimoniais, propriedade sobre a obra ou naming rights. Toda aplicação será previamente validada e seguirá o plano aprovado, o Manual de Identidade Visual e as regras do ProAC ICMS." : "Brand participation is recognized as cultural sponsorship. It does not grant ownership, economic rights over the work or naming rights. Every brand application is subject to prior validation and must comply with the approved plan, visual identity manual and ProAC ICMS rules."}</p>
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
      <p>{pt ? "Solicite a apresentação comercial completa ou uma versão personalizada para os objetivos da sua empresa." : "Request the full sponsorship deck or a version tailored to your company’s priorities."}</p>
      <a className="button button-gold" href={`mailto:${email}?subject=Parceria cultural — The Velvet Margin`}>{pt ? "Falar com Tiago Lins" : "Contact Tiago Lins"}</a><a className="sponsor-email" href={`mailto:${email}`}>{email}</a>
    </section>
  </main>;
}
