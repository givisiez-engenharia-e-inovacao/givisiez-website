'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Icon from '@/components/ui/Icon';

export default function MentoriaClient() {
  const testimonials = [
    {
      name: 'Thaís Santos',
      role: 'Transição de Carreira para Tech',
      rating: 5,
      highlight: 'Conquistou oportunidade em 5 meses de mentoria',
      comment:
        'Tive a oportunidade de adquirir experiência numa área totalmente nova para mim. Conhecer pessoas incríveis, com histórias incríveis. Para mim foi uma grande oportunidade porque foi onde novas portas da área tech se abriram para mim. Hoje, posso dizer que consegui migrar de carreira e sem dúvida aconteceu tudo a partir da mentoria JDM. Minha oportunidade na área tech veio em 5 meses de mentoria!',
      subComment:
        'No período eu fui mentorada pela Rafa, e foi demais! Porque não recebi somente apoio técnico, mas também emocional, comportamental. Foi um pacote completo de apoio mesmo.',
    },
    {
      name: 'Anderson Bauermann',
      role: 'Desenvolvedor de Software',
      rating: 5,
      highlight: 'Diferencial no ingresso na área',
      comment:
        'A mentoria foi extremamente importante e inclusive foi um diferencial no meu ingresso na área de desenvolvimento. Uma troca de experiência que me proporcionou muito aprendizado prático e visão de mercado.',
      subComment:
        'Troca direta com quem já atua em sistemas reais, esclarecendo dúvidas sobre arquitetura e código.',
    },
    {
      name: 'Will Santiago',
      role: 'Desenvolvedor de Software',
      rating: 5,
      highlight: 'Primeiro emprego conquistado',
      comment:
        'Projeto que abriu portas e agregou demais na minha transição de carreira até finalmente conseguir meu primeiro emprego na área. Ótima experiência com mentores altamente capacitados!',
      subComment:
        'Metodologia prática que reduz impedimentos e ensina a pensar como engenheiro de software.',
    },
    {
      name: 'Ranievly',
      role: 'Desenvolvedora de Software',
      rating: 5,
      highlight: 'Evolução técnica e autonomia',
      comment:
        'Foi excelente, me abriu muitas oportunidades após iniciar na empresa, aprendi a evoluir mais sozinha, e também tive uma excelente mentora na minha época que foi a Rafaela. Valeu muito a pena pra mim.',
      subComment:
        'Mentoria próxima e acolhedora com a Rafaela Marcolino, focada em segurança e boas práticas.',
    },
    {
      name: 'Ludmilar Pinheiro',
      role: 'Desenvolvedora de Software',
      rating: 5,
      highlight: 'Metodologia ágil aplicada na prática',
      comment:
        'Gostei bastante da mentoria, consegui colocar em prática a metodologia ágil que as vezes é mais complicado de entender só nos estudos. A Rafa me ajudava sempre que eu precisava.',
      subComment:
        'Sprints, dailies e entregas contínuas que destravam o entendimento do fluxo de trabalho real.',
    },
    {
      name: 'Dri Latorre',
      role: 'Desenvolvedora / Tech',
      rating: 5,
      highlight: 'Da teoria ao mercado de trabalho',
      comment:
        'Foi muito importante para que eu entendesse melhor como aplicar tudo o que eu estava estudando no mercado de trabalho, além de experimentar na prática os métodos de organização de equipes e programas relacionados.',
      subComment:
        'Visão sistêmica de colaboração entre diferentes stacks e papéis em um time de produto.',
    },
    {
      name: 'Victor Almeida',
      role: 'Desenvolvedor de Software',
      rating: 5,
      highlight: 'Soft skills & deploy em produção',
      comment:
        'Aprendi muito trabalhando em equipe e aperfeiçoando minhas soft-skills para poder passar um feedback construtivo do que fiz durante as sprints. Tive a oportunidade de aprender mais sobre áreas que tinha dificuldade, como o deploy da aplicação.',
      subComment:
        'Evolução completa: de esteiras de entrega contínua até postura profissional em equipe.',
    },
    {
      name: 'Diogo',
      role: 'Engenharia & Desenvolvimento',
      rating: 5,
      highlight: 'Dia a dia real de um time de engenharia',
      comment:
        'Foi muito bom, porque me ajudou a aplicar os conhecimentos teóricos na prática, como também ter uma ideia real do dia a dia de um desenvolvedor.',
      subComment:
        'Conselhos técnicos e parceria que transformam estudos isolados em bagagem profissional.',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col relative overflow-x-hidden origami-mesh">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary-container/15 blur-[140px] pointer-events-none -z-10" />

      {/* Main Global Navigation */}
      <Header />

      <main className="flex-grow">
        {/* SECTION 1: HERO */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-6 lg:px-12 max-w-7xl mx-auto custom-mesh-grid">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge de Trilha */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 border border-primary/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-label-mono font-label-mono text-primary uppercase tracking-wider text-xs">
                Capacitação Prática &amp; Aceleração de Carreiras
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-headline-xl-mobile md:text-display-hero font-display-hero text-on-surface mb-8 tracking-tight">
              Mentoria em Tecnologia:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-[#c4e7ff]">
                Da Transição à Liderança
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed">
              Orientação técnica e comportamental individualizada para acelerar
              sua maturidade profissional. Aprenda com quem atua nas trincheiras
              da engenharia de software e da estratégia de produto, construindo
              sistemas reais e liderando equipes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/contato"
                className="primary-btn-glow px-8 py-4 rounded-xl text-white font-label-ui text-body-md font-semibold flex items-center justify-center gap-3 transition-transform active:scale-95 w-full sm:w-auto"
              >
                <span>Quero Participar da Mentoria</span>
                <Icon name="arrow_forward" className="w-5 h-5 text-white" />
              </Link>
              <a
                href="#frentes"
                className="px-6 py-4 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-ui text-body-md font-semibold flex items-center justify-center gap-2 transition-all hover:border-primary/50 w-full sm:w-auto"
              >
                <span>Conhecer as 3 Frentes</span>
                <Icon name="expand_more" className="w-4 h-4" />
              </a>
            </div>

            {/* Trajectory Metrics Bento Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left">
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-tertiary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="star" filled className="w-4 h-4 text-amber-400" />
                  <span>AVALIAÇÃO</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  5.0 / 5.0
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  satisfação máxima dos mentorados
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-primary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="person" className="w-4 h-4 text-primary" />
                  <span>LEGADO JDM</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  Dezenas
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  de talentos acelerados para o mercado
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-tertiary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="hub" className="w-4 h-4 text-tertiary" />
                  <span>TRILHAS</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  3 Frentes
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  início, crescimento e liderança
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-secondary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="verified" className="w-4 h-4 text-secondary" />
                  <span>MÉTODO</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  100% Prático
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  projetos reais, code review e sem teoria rasa
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: O APRENDIZADO E O LEGADO DA JDM */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary text-xs uppercase tracking-wider">
                <Icon name="timeline" className="w-4 h-4 text-primary" />
                <span>Nossa Origem em Mentoria</span>
              </div>

              <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface tracking-tight">
                A Experiência e o Legado do Projeto JDM
              </h2>

              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                A <strong>Junior Dev Mentorship (JDM)</strong> nasceu de uma
                iniciativa voluntária e pioneira liderada pela nossa fundadora,{' '}
                <strong>Rafaela Marcolino</strong>. Tendo vivenciado na pele os
                desafios e as barreiras de uma transição de carreira para a
                tecnologia, a Rafa sentiu a necessidade urgente de criar um
                espaço onde pessoas pudessem aprender com empatia, errar com
                segurança e ganhar experiência real de mercado.
              </p>

              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                A JDM funcionou na prática como uma autêntica empresa júnior:
                utilizamos metodologia ágil (SCRUM com dailies e sprints),
                desenvolvimento de aplicações completas para clientes
                voluntários, simulações de processos seletivos e suporte tanto
                técnico quanto comportamental.
              </p>

              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                O projeto JDM cumpriu com maestria o seu ciclo e encerrou suas
                atividades, mas o seu legado permanece vivo: dezenas de
                profissionais conquistaram suas primeiras oportunidades no
                mercado de TI. Todo esse aprendizado acumulado, os feedbacks
                recebidos e a metodologia foram consolidados e evoluídos nos
                programas de mentoria da Givisiez.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <Icon name="rocket_launch" className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Metodologia Ágil Real
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Vivência com rituais ágeis de mercado, dailies, estimativas de
                  sprint, gestão de impedimentos e colaboração entre equipes.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-secondary mb-4">
                  <Icon name="person" className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Apoio Integral
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Acompanhamento que vai além do código: suporte comportamental,
                  gestão da ansiedade e preparação para processos seletivos.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-tertiary mb-4">
                  <Icon name="code" className="w-5 h-5 text-tertiary" />
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Projetos de Verdade
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Construção de aplicações completas com banco de dados, deploy
                  e regras de negócio para compor portfólios incontestáveis.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-[#10B981] mb-4">
                  <Icon
                    name="check_circle"
                    className="w-5 h-5 text-[#10B981]"
                  />
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 font-bold">
                  Resultados Comprovados
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Avaliação 5/5 e relatos de mentorados contratados em empresas
                  de tecnologia após poucos meses de acompanhamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: AS 3 FRENTES DE MENTORIA */}
        <section
          className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20 bg-surface-container-lowest/40 rounded-3xl my-8"
          id="frentes"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary mb-3">
              <Icon name="hub" className="w-4 h-4 text-primary" />
              <span>TRILHAS ESTRUTURADAS</span>
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface">
              Três Frentes Focadas no Seu Momento de Carreira
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed">
              Não existe fórmula genérica. Nossos programas de mentoria atuam
              com precisão cirúrgica na fase em que você se encontra hoje:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frente 1: Início ou Transição de Carreira */}
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="text-label-mono font-label-mono text-primary text-xs uppercase mb-3 flex items-center justify-between">
                  <span>FRENTE 01 // ENTRY &amp; TRANSIÇÃO</span>
                  <Icon name="rocket_launch" className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-headline-md font-headline-md font-bold text-on-surface mb-4">
                  Início ou Transição de Carreira
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Para quem está ingressando do zero ou migrando de área para a
                  tecnologia. Cortamos o ruído e o excesso de informações para
                  focar no que realmente gera contratação.
                </p>

                <ul className="space-y-3 text-body-sm font-body-sm text-on-surface mb-6">
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    />
                    <span>
                      Roadmap de estudos direto ao ponto, sem perda de tempo com
                      conteúdo obsoleto
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    />
                    <span>
                      Construção de portfólio prático com projetos reais e
                      código no padrão do mercado
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    />
                    <span>
                      Otimização de currículo e perfil estratégico no LinkedIn
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    />
                    <span>
                      Simulação de entrevistas técnicas e comportamentais com
                      feedback em tempo real
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    />
                    <span>
                      Apoio emocional para superar a insegurança e a síndrome do
                      impostor
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-tertiary text-xs">
                Transição de Carreira • Portfólio Real • First Job
              </div>
            </div>

            {/* Frente 2: Desenvolvimento Profissional */}
            <div className="glass-panel-elevated p-8 rounded-2xl border-2 border-primary/50 flex flex-col justify-between transition-all bg-surface-container-high/40 relative">
              <div className="absolute -top-3.5 right-6 bg-primary text-on-primary px-3 py-1 rounded-full text-label-mono font-label-mono text-[10px] font-bold uppercase tracking-wider">
                ALTA PROCURA
              </div>
              <div>
                <div className="text-label-mono font-label-mono text-secondary text-xs uppercase mb-3 flex items-center justify-between">
                  <span>FRENTE 02 // MID &amp; SENIOR ACCELERATION</span>
                  <Icon name="code" className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-headline-md font-headline-md font-bold text-on-surface mb-4">
                  Desenvolvimento Profissional
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Para desenvolvedores que já estão no mercado (júnior e pleno)
                  e querem subir de nível, destravar promoções e dominar padrões
                  avançados de engenharia de software.
                </p>

                <ul className="space-y-3 text-body-sm font-body-sm text-on-surface mb-6">
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-secondary shrink-0 mt-0.5"
                    />
                    <span>
                      Clean Code, princípios SOLID e padrões arquiteturais
                      aplicados
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-secondary shrink-0 mt-0.5"
                    />
                    <span>
                      Testes automatizados (Unitários e de Integração) com alta
                      cobertura
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-secondary shrink-0 mt-0.5"
                    />
                    <span>
                      Pipelines de CI/CD, esteiras automatizadas e deploy em
                      nuvem
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-secondary shrink-0 mt-0.5"
                    />
                    <span>
                      Otimização de performance, resolução de gargalos e code
                      reviews rigorosos
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-secondary shrink-0 mt-0.5"
                    />
                    <span>
                      Comunicação técnica assertiva e postura profissional para
                      avançar de cargo
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-secondary text-xs">
                Clean Architecture • CI/CD • Testes • Senioridade
              </div>
            </div>

            {/* Frente 3: Liderança Técnica & de Produto */}
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="text-label-mono font-label-mono text-tertiary text-xs uppercase mb-3 flex items-center justify-between">
                  <span>FRENTE 03 // LEADERSHIP &amp; PRODUCT</span>
                  <Icon name="hub" className="w-5 h-5 text-tertiary" />
                </div>
                <h3 className="text-headline-md font-headline-md font-bold text-on-surface mb-4">
                  Liderança Técnica &amp; de Produto
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Para desenvolvedores seniores que querem migrar para Tech Lead
                  / Engenharia ou profissionais que desejam liderar a área de
                  Produto (Product Owner / PM).
                </p>

                <ul className="space-y-3 text-body-sm font-body-sm text-on-surface mb-6">
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-tertiary shrink-0 mt-0.5"
                    />
                    <span>
                      Tomada de decisão arquitetural, escalabilidade e análise
                      Buy vs Build
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-tertiary shrink-0 mt-0.5"
                    />
                    <span>
                      Metodologias de Product Discovery e alinhamento de negócio
                      com tecnologia
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-tertiary shrink-0 mt-0.5"
                    />
                    <span>
                      Facilitação de cerimônias ágeis e gestão de dívida técnica
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-tertiary shrink-0 mt-0.5"
                    />
                    <span>
                      Gestão de times de engenharia, mentoria de pares e
                      feedback estruturado
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      name="check_circle"
                      className="w-4 h-4 text-tertiary shrink-0 mt-0.5"
                    />
                    <span>
                      Governança de código e comunicação executiva com diretoria
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-primary text-xs">
                Tech Lead • Product Discovery • Gestão • Estratégia
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMO FUNCIONA NA PRÁTICA */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label-mono font-label-mono text-primary text-xs uppercase tracking-wider">
              Passo a Passo
            </span>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface mt-2">
              Como Funciona a Mentoria na Prática
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 relative">
              <div className="text-display-hero text-primary/15 font-bold absolute right-4 top-2 select-none pointer-events-none">
                01
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-4">
                <Icon name="target" className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                Diagnóstico Inicial
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Mapeamento individual do seu momento de carreira, competências
                técnicas, pontos de melhoria e metas de curto/médio prazo.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 relative">
              <div className="text-display-hero text-secondary/15 font-bold absolute right-4 top-2 select-none pointer-events-none">
                02
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-secondary/30 flex items-center justify-center text-secondary mb-4">
                <Icon name="timeline" className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                Roadmap Customizado
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Construção de um plano de ação prático e sob medida com metas
                semanais, projetos para portfólio e recomendações de estudo.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 relative">
              <div className="text-display-hero text-tertiary/15 font-bold absolute right-4 top-2 select-none pointer-events-none">
                03
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-tertiary/30 flex items-center justify-center text-tertiary mb-4">
                <Icon name="code" className="w-5 h-5 text-tertiary" />
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                Sessões 1:1 Hands-on
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Encontros individuais dedicados a code reviews, simulação de
                entrevistas, desafios arquiteturais e destrave de dúvidas.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 relative">
              <div className="text-display-hero text-[#10B981]/15 font-bold absolute right-4 top-2 select-none pointer-events-none">
                04
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4">
                <Icon name="rocket_launch" className="w-5 h-5 text-[#10B981]" />
              </div>
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                Acompanhamento Contínuo
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Canal direto com o mentor para suporte assíncrono, feedback de
                candidaturas e direcionamento em decisões de carreira.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: DEPOIMENTOS REAIS DA AVALIAÇÃO JDM */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary mb-3">
              <Icon name="star" filled className="w-4 h-4 text-amber-400" />
              <span>AVALIAÇÕES REAIS (NOTA MÉDIA 5.0)</span>
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface">
              Histórias e Avaliações de Quem Viveu Essa Experiência
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed">
              Depoimentos reais e autênticos registrados na pesquisa de
              avaliação da mentoria JDM:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="star"
                          filled
                          className="w-4 h-4 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-label-mono font-label-mono text-xs px-2.5 py-0.5 rounded bg-primary-container/20 border border-primary/30 text-primary">
                      Avaliação 5/5
                    </span>
                  </div>

                  <p className="text-body-md font-body-md text-on-surface leading-relaxed mb-4 italic">
                    &ldquo;{t.comment}&rdquo;
                  </p>

                  {t.subComment && (
                    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-6 pt-3 border-t border-outline-variant/20">
                      {t.subComment}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                  <div>
                    <h4 className="text-body-md font-label-ui font-semibold text-on-surface">
                      {t.name}
                    </h4>
                    <p className="text-label-mono font-label-mono text-xs text-outline">
                      {t.role}
                    </p>
                  </div>
                  <span className="text-label-mono font-label-mono text-xs text-secondary font-medium">
                    {t.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: CONHEÇA OS MENTORES */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary mb-3">
              <Icon name="person" className="w-4 h-4 text-primary" />
              <span>QUEM VAI TE MENTORAR</span>
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface">
              Mentores com Vivência Real em Engenharia e Produto
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed">
              Você será orientado diretamente pelos fundadores e líderes da
              Givisiez:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Rafaela Marcolino */}
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-container/30 border border-primary/40 flex items-center justify-center text-primary">
                    <Icon name="code" className="w-7 h-7 text-primary" />
                  </div>
                  <div className="bg-surface-container-lowest/90 px-3 py-1 rounded text-label-mono font-label-mono text-xs text-primary border border-primary/20">
                    LÍDER DE ENGENHARIA
                  </div>
                </div>

                <h3 className="text-headline-md font-headline-md font-bold text-on-surface mb-1">
                  Rafaela Marcolino
                </h3>
                <div className="text-label-mono font-label-mono text-tertiary text-xs mb-4">
                  Fundadora da Givisiez &amp; Idealizadora da Mentoria JDM
                </div>

                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Fez transição de carreira para a tecnologia e fundou a
                  Givisiez em 2019. Com vasta experiência em desenvolvimento
                  full stack, mobile, CI/CD e arquitetura de sistemas, mentorou
                  dezenas de profissionais que hoje atuam em grandes companhias.
                  Foco em Clean Code, transição de carreira e autonomia técnica.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Transição de Carreira
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Software Engineering
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Clean Code &amp; CI/CD
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/rafaela-marcolino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary text-label-ui font-label-ui transition-colors"
                >
                  <Icon name="linkedin" className="w-4 h-4 text-primary" />
                  <span>Perfil de Rafaela no LinkedIn</span>
                  <Icon name="north_east" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Estêvão Marcolino */}
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary-container/30 border border-secondary/40 flex items-center justify-center text-secondary">
                    <Icon name="insights" className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="bg-surface-container-lowest/90 px-3 py-1 rounded text-label-mono font-label-mono text-xs text-secondary border border-secondary/20">
                    LÍDER DE PRODUTO
                  </div>
                </div>

                <h3 className="text-headline-md font-headline-md font-bold text-on-surface mb-1">
                  Estêvão Marcolino
                </h3>
                <div className="text-label-mono font-label-mono text-tertiary text-xs mb-4">
                  Líder de Produto (Head of Product) na Givisiez
                </div>

                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Especialista em product discovery, arquitetura da informação,
                  UX/UI e conexão entre valor de negócio e execução de
                  tecnologia. Mentora desenvolvedores e gestores em tomada de
                  decisão, liderança de produto e pensamento estratégico.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Product Discovery
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    UX / UI Strategy
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Liderança &amp; Gestão
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/estevaotimoteomarcolino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary text-label-ui font-label-ui transition-colors"
                >
                  <Icon name="linkedin" className="w-4 h-4 text-secondary" />
                  <span>Perfil de Estêvão no LinkedIn</span>
                  <Icon name="north_east" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CTA BANNER */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="contato">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 border border-primary/30 bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/30 blur-[90px] rounded-full pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-tertiary/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-container/20 border border-primary/30 mb-6 text-label-mono font-label-mono text-primary uppercase text-xs">
                <Icon
                  name="rocket_launch"
                  className="w-3.5 h-3.5 text-primary"
                />
                <span>Próximo Passo</span>
              </div>

              <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface mb-6">
                Pronto para acelerar sua trajetória em tecnologia?
              </h2>

              <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Converse diretamente conosco para entender como podemos
                estruturar sua mentoria ou acelerar os resultados da sua equipe.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contato"
                  className="primary-btn-glow px-8 py-4 rounded-xl text-white font-label-ui text-body-md font-semibold flex items-center justify-center gap-3 transition-transform active:scale-95"
                >
                  <span>Falar sobre Mentoria</span>
                  <Icon name="arrow_forward" className="w-5 h-5 text-white" />
                </Link>

                <a
                  href="mailto:contato@givisiez.com.br"
                  className="px-6 py-4 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-ui text-body-md font-semibold flex items-center justify-center gap-2 transition-all hover:border-primary/50"
                >
                  <Icon name="mail" className="w-4 h-4 text-primary" />
                  <span>contato@givisiez.com.br</span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-label-mono font-label-mono text-xs text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" className="w-4 h-4 text-tertiary" />
                  Atendimento com a Liderança
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" className="w-4 h-4 text-tertiary" />
                  100% Remoto &amp; Individual
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" className="w-4 h-4 text-tertiary" />
                  Avaliação Média 5.0
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Main Global Footer */}
      <Footer />
    </div>
  );
}
