'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Icon from '@/components/ui/Icon';

export default function AboutClient() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary-container/15 blur-[140px] pointer-events-none -z-10" />

      {/* Main Global Navigation */}
      <Header />

      <main className="flex-grow">
        {/* SECTION 1: HERO INSTITUCIONAL */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-6 lg:px-12 max-w-7xl mx-auto origami-mesh custom-mesh-grid">
          <div className="max-w-4xl mx-auto text-center">
            {/* Technical Precision Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 border border-primary/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="text-label-mono font-label-mono text-primary uppercase tracking-wider text-xs">
                Engenharia de Software &amp; Estratégia de Produto
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-headline-xl-mobile md:text-display-hero font-display-hero text-on-surface mb-8 tracking-tight">
              Construindo Soluções Tecnológicas que Impulsionam Negócios e
              Carreiras
            </h1>

            {/* Positioning Subtitle */}
            <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-14 leading-relaxed">
              A Givisiez nasceu em fevereiro de 2019 como uma fábrica de
              software focada em websites e interfaces digitais. Com o
              amadurecimento técnico e a chegada da liderança de produto em
              dezembro de 2021, evoluímos para uma consultoria especializada no
              desenvolvimento de projetos de tecnologia de ponta e na mentoria
              de carreira em tecnologia.
            </p>

            {/* Trajectory Metrics Bento Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left">
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-tertiary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="timeline" className="w-4 h-4 text-tertiary" />
                  <span>HISTÓRICO</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  Fev / 2019
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  fundação com mais de 7 anos de atuação sólida
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-primary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="deployed_code" className="w-4 h-4 text-primary" />
                  <span>PORTFÓLIO</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  9+ Projetos
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  entregas reais em produção da web ao mobile
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-tertiary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="hub" className="w-4 h-4 text-tertiary" />
                  <span>DUALIDADE</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  2 Frentes
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  projetos de tecnologia e mentoria de carreira
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="text-secondary text-label-mono font-label-mono mb-2 flex items-center gap-1.5">
                  <Icon name="verified" className="w-4 h-4 text-secondary" />
                  <span>QUALIDADE</span>
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight mb-1">
                  100%
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  código limpo, boas práticas e autonomia
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: MISSÃO, VISÃO E FILOSOFIA DE ENGENHARIA */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary mb-3">
                <Icon name="token" className="w-4 h-4 text-primary" />
                <span>PROPÓSITO &amp; DIRETRIZ</span>
              </div>
              <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface mb-6">
                Nossa Missão &amp; Visão Estratégica
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Não acreditamos em soluções descartáveis nem em tecnologia que
                não gere valor mensurável. Unimos a precisão técnica da
                engenharia de software à visão estratégica de produto e ao
                desenvolvimento humano, entregando valor duradouro para empresas
                e profissionais.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card Missão */}
              <div className="glass-panel p-8 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-6 border border-outline-variant/40">
                  <Icon name="target" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3">
                  Nossa Missão
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Desenvolver soluções tecnológicas robustas e centradas nas
                  necessidades reais do negócio, enquanto mentoramos e formamos
                  profissionais capacitados para transformar o mercado de
                  tecnologia.
                </p>
                <div className="mt-6 flex items-center gap-2 text-label-mono font-label-mono text-tertiary">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <span>DETERMINISMO TÉCNICO &amp; PESSOAS</span>
                </div>
              </div>

              {/* Card Visão */}
              <div className="glass-panel p-8 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-6 border border-outline-variant/40">
                  <Icon name="visibility" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3">
                  Nossa Visão
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Ser a consultoria de tecnologia e produto de referência pela
                  excelência técnica das nossas entregas e pelo impacto positivo
                  na aceleração e formação de carreiras em tecnologia.
                </p>
                <div className="mt-6 flex items-center gap-2 text-label-mono font-label-mono text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>ENGENHARIA, PRODUTO &amp; CARREIRA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pilares de Valor / Princípios Não-Negociáveis */}
          <div>
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-label-mono font-label-mono text-primary uppercase">
                Pilares de Engenharia e Cultura
              </span>
              <h3 className="text-headline-lg font-headline-lg text-on-surface mt-2">
                Princípios Não-Negociáveis
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pilar 1 */}
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container/60 transition-all">
                <div>
                  <div className="text-primary text-label-mono font-label-mono mb-4 flex items-center justify-between">
                    <span>01 // NÚCLEO</span>
                    <Icon name="terminal" className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-headline-sm font-headline-sm text-on-surface mb-3">
                    Rigor Técnico e Clean Code
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Engenharia guiada por tipagem estrita, testes automatizados,
                    padrões de arquitetura sustentáveis e foco obsessivo em
                    manutenibilidade e performance.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-tertiary text-xs">
                  TypeScript • Clean Architecture • Testes
                </div>
              </div>

              {/* Pilar 2 */}
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container/60 transition-all">
                <div>
                  <div className="text-primary text-label-mono font-label-mono mb-4 flex items-center justify-between">
                    <span>02 // EXECUÇÃO</span>
                    <Icon name="insights" className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-headline-sm font-headline-sm text-on-surface mb-3">
                    Visão de Produto Hands-on
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Tecnologia a serviço de objetivos reais. Priorizamos
                    discovery, entendimento do usuário final, usabilidade e
                    agilidade no time-to-market.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-secondary text-xs">
                  Product Discovery • UX/UI • Time-to-Market
                </div>
              </div>

              {/* Pilar 3 */}
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container/60 transition-all">
                <div>
                  <div className="text-primary text-label-mono font-label-mono mb-4 flex items-center justify-between">
                    <span>03 // RESGUARDO</span>
                    <Icon name="security" className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-headline-sm font-headline-sm text-on-surface mb-3">
                    Autonomia para o Cliente
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Sem caixas-pretas ou lock-in desnecessário. Construímos
                    arquiteturas limpas e fornecemos documentação completa para
                    que os clientes operem com independência.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-tertiary text-xs">
                  Zero Lock-in • Documentação • Governança
                </div>
              </div>

              {/* Pilar 4 */}
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container/60 transition-all">
                <div>
                  <div className="text-primary text-label-mono font-label-mono mb-4 flex items-center justify-between">
                    <span>04 // FORMAÇÃO</span>
                    <Icon name="person" className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-headline-sm font-headline-sm text-on-surface mb-3">
                    Mentoria &amp; Cultura Humana
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Acreditamos que a tecnologia evolui com as pessoas. Nossos
                    líderes mentoram e formam ativamente talentos da área com
                    práticas reais do mercado de trabalho.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-primary text-xs">
                  Mentoria JDM • Capacitação • Comunidade
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: NOSSA TRAJETÓRIA / LINHA DO TEMPO REAL */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary mb-3">
              <Icon name="timeline" className="w-4 h-4 text-primary" />
              <span>EVOLUÇÃO CONTÍNUA</span>
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface">
              Nossa Trajetória de Inovação &amp; Impacto
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4">
              Desde a fundação em 2019, cada etapa construiu nossa identidade:
              rigor técnico, empatia com o usuário e compromisso com o
              desenvolvimento de pessoas.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Spine Line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary-container to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {/* Event 1: Fev / 2019 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="w-full md:w-5/12 text-left md:text-right order-2 md:order-1">
                  <span className="text-headline-lg font-headline-lg font-bold text-primary">
                    Fev / 2019
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">
                    Fundação da Givisiez por Rafaela Marcolino
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    A fundadora Rafaela Marcolino inicia a Givisiez como uma
                    pequena fábrica de software focada no desenvolvimento de
                    websites, landing pages de alta conversão e interfaces
                    digitais personalizadas para os primeiros clientes.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary flex items-center justify-center z-10 shrink-0 shadow-[0_0_14px_rgba(106,13,173,0.8)] order-1 md:order-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="w-full md:w-5/12 order-3">
                  <div className="glass-panel p-4 rounded-lg text-label-mono font-label-mono text-xs text-on-surface-variant border border-outline-variant/30">
                    // Origem: Fábrica de software &amp; Web development
                  </div>
                </div>
              </div>

              {/* Event 2: 2020 - 2021 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="w-full md:w-5/12 order-2 md:order-1">
                  <div className="glass-panel p-4 rounded-lg text-label-mono font-label-mono text-xs text-on-surface-variant border border-outline-variant/30 text-left md:text-right">
                    // Projetos: Buy Energy, Penna &amp; Vargas, Eliane Turra
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary flex items-center justify-center z-10 shrink-0 shadow-[0_0_14px_rgba(106,13,173,0.8)] order-1 md:order-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="w-full md:w-5/12 text-left order-3">
                  <span className="text-headline-lg font-headline-lg font-bold text-tertiary">
                    2020 - 2021
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">
                    Expansão de Plataformas &amp; Clientes Corporativos
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Desenvolvimento de plataformas web e portais institucionais
                    de alta disponibilidade, incluindo a plataforma de sucesso
                    do cliente da Buy Energy (redução de 40% no TTR, picos de 5k
                    req/s e 99,95% de uptime), além de projetos para escritórios
                    de advocacia e clínicas.
                  </p>
                </div>
              </div>

              {/* Event 3: Dez / 2021 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="w-full md:w-5/12 text-left md:text-right order-2 md:order-1">
                  <span className="text-headline-lg font-headline-lg font-bold text-primary">
                    Dez / 2021
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">
                    Estêvão Marcolino Junta-se para Liderar Produto
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Estêvão Marcolino passa a integrar a liderança da empresa
                    para conduzir a área de Produto. A Givisiez expande sua
                    atuação para além da engenharia pura, incorporando discovery
                    estruturado, design de experiência e alinhamento de negócio.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary flex items-center justify-center z-10 shrink-0 shadow-[0_0_14px_rgba(106,13,173,0.8)] order-1 md:order-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="w-full md:w-5/12 order-3">
                  <div className="glass-panel p-4 rounded-lg text-label-mono font-label-mono text-xs text-on-surface-variant border border-outline-variant/30">
                    // Liderança: Head of Product &amp; Estratégia de Negócio
                  </div>
                </div>
              </div>

              {/* Event 4: 2023 - 2024 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="w-full md:w-5/12 order-2 md:order-1">
                  <div className="glass-panel p-4 rounded-lg text-label-mono font-label-mono text-xs text-on-surface-variant border border-outline-variant/30 text-left md:text-right">
                    // Mobile: React Native, CI/CD automatizado &amp; Testes 85%
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary flex items-center justify-center z-10 shrink-0 shadow-[0_0_14px_rgba(106,13,173,0.8)] order-1 md:order-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="w-full md:w-5/12 text-left order-3">
                  <span className="text-headline-lg font-headline-lg font-bold text-tertiary">
                    2023 - 2024
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">
                    Aplicações Mobile &amp; Saúde Digital
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Construção do aplicativo móvel AllergyTrack com pipeline de
                    CI/CD automatizado acelerando lançamentos em 35%, 85% de
                    cobertura de testes e tempo médio de registro diário menor
                    que 30 segundos. Consolidação de desenvolvimento mobile de
                    alta robustez.
                  </p>
                </div>
              </div>

              {/* Event 5: 2025 - 2026 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="w-full md:w-5/12 text-left md:text-right order-2 md:order-1">
                  <span className="text-headline-lg font-headline-lg font-bold text-secondary">
                    2025 - 2026
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">
                    Consultoria Tecnológica &amp; Mentoria de Carreira
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    Consolidação no mercado como consultoria focada em
                    desenvolvimento de projetos de tecnologia (como a
                    consultoria para a Edvisor e parcerias com ConectaKids,
                    Sensakids e Presente Certo) e na mentoria contínua de
                    carreiras em tecnologia, capacitando e formando
                    profissionais.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-container border-2 border-primary flex items-center justify-center z-10 shrink-0 shadow-[0_0_20px_rgba(192,132,252,0.9)] order-1 md:order-2">
                  <Icon name="rocket_launch" className="w-5 h-5 text-white" />
                </div>
                <div className="w-full md:w-5/12 order-3">
                  <div className="glass-panel p-4 rounded-lg text-label-mono font-label-mono text-xs text-primary border border-primary/30">
                    // Presente: Consultoria em Engenharia &amp; Mentoria Tech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: LIDERANÇA TÉCNICA E DE PRODUTO */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary mb-3">
              <Icon name="person" className="w-4 h-4 text-primary" />
              <span>CORPO DIRETIVO</span>
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface">
              Liderança Técnica &amp; de Produto
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4">
              Profissionais experientes que lideram ativamente a arquitetura dos
              projetos, a estratégia de produto e a mentoria de novos talentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Líder 1: Rafaela Marcolino */}
            <div className="glass-panel rounded-2xl p-8 border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary-container/30 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_16px_rgba(106,13,173,0.3)]">
                    <Icon name="code" className="w-8 h-8 text-primary" />
                  </div>
                  <div className="bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded text-label-mono font-label-mono text-xs text-primary border border-primary/20">
                    FOUNDER &amp; TECH LEAD
                  </div>
                </div>

                <h3 className="text-headline-md font-headline-md font-bold text-on-surface mb-1">
                  Rafaela Marcolino
                </h3>
                <div className="text-label-mono font-label-mono text-tertiary text-xs mb-4">
                  Fundadora &amp; Líder de Engenharia de Software
                </div>

                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Fundadora da Givisiez em fevereiro de 2019. Com sólida
                  trajetória no desenvolvimento full stack de aplicações web e
                  mobile, arquitetura de sistemas escaláveis e APIs em nuvem,
                  lidera as decisões arquiteturais da consultoria, a escolha de
                  tecnologias e a garantia de qualidade e manutenibilidade do
                  código. É também idealizadora de iniciativas de mentoria de
                  carreira para impulsionar novos talentos em tecnologia.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Software Engineering
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Full Stack &amp; Mobile
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Cloud &amp; CI/CD
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/rafaela-marcolino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary text-label-ui font-label-ui transition-colors group/link"
                >
                  <Icon
                    name="linkedin"
                    className="w-4 h-4 text-primary group-hover/link:text-secondary"
                  />
                  <span>Conectar no LinkedIn</span>
                  <Icon name="north_east" className="w-3.5 h-3.5" />
                </a>
                <span className="text-label-mono font-label-mono text-xs text-on-surface-variant">
                  Desde 2019
                </span>
              </div>
            </div>

            {/* Líder 2: Estêvão Marcolino */}
            <div className="glass-panel rounded-2xl p-8 border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary-container/30 border border-secondary/40 flex items-center justify-center text-secondary shadow-[0_0_16px_rgba(221,184,255,0.2)]">
                    <Icon name="insights" className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded text-label-mono font-label-mono text-xs text-secondary border border-secondary/20">
                    HEAD OF PRODUCT
                  </div>
                </div>

                <h3 className="text-headline-md font-headline-md font-bold text-on-surface mb-1">
                  Estêvão Marcolino
                </h3>
                <div className="text-label-mono font-label-mono text-tertiary text-xs mb-4">
                  Líder de Produto &amp; Estratégia de Negócio
                </div>

                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Integrado à liderança da Givisiez em dezembro de 2021 para
                  conduzir a frente de Produto. Especialista em product
                  discovery, validação de hipóteses, arquitetura de fluxos e
                  alinhamento estratégico entre viabilidade técnica e impacto de
                  negócio. Atua para garantir que cada software entregue resolva
                  dores genuínas dos usuários e maximize o retorno para os
                  clientes.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Product Discovery
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    UX / UI Strategy
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">
                    Go-to-Market
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/estevaotimoteomarcolino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary text-label-ui font-label-ui transition-colors group/link"
                >
                  <Icon
                    name="linkedin"
                    className="w-4 h-4 text-secondary group-hover/link:text-primary"
                  />
                  <span>Conectar no LinkedIn</span>
                  <Icon name="north_east" className="w-3.5 h-3.5" />
                </a>
                <span className="text-label-mono font-label-mono text-xs text-on-surface-variant">
                  Desde 2021
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: MODELOS DE ATUAÇÃO SOB MEDIDA */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20 bg-surface-container-lowest/40 rounded-3xl my-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-label-mono font-label-mono text-primary mb-3">
              <Icon name="hub" className="w-4 h-4 text-primary" />
              <span>COMO ATUAMOS</span>
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface">
              Modelos de Engajamento Sob Medida
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4">
              Formatos desenhados para agir na velocidade que sua empresa ou sua
              carreira necessitam, com total transparência e assertividade.
            </p>
          </div>

          {/* 3 Modos de Atuação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Modo 01 */}
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant/40 relative group hover:border-primary/50 transition-all">
              <div className="text-label-mono font-label-mono text-primary mb-3">
                MODO 01
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
                Consultoria em Engenharia de Software
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                Imersão técnica para diagnóstico arquitetural, refatoração de
                sistemas, auditoria de performance, automação de testes e
                sustentação em nuvem para produtos em escala.
              </p>
              <ul className="space-y-2.5 text-body-sm font-body-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-primary shrink-0"
                  />
                  <span>Diagnóstico de arquitetura e código-fonte</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-primary shrink-0"
                  />
                  <span>Pipelines de CI/CD e esteiras automatizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-primary shrink-0"
                  />
                  <span>Orientação técnica sênior para tomadas de decisão</span>
                </li>
              </ul>
            </div>

            {/* Modo 02 - Destaque */}
            <div className="glass-panel-elevated p-8 rounded-2xl relative group border-2 border-primary/50 transition-all bg-surface-container-high/40">
              <div className="absolute -top-3.5 right-6 bg-primary text-on-primary px-3 py-1 rounded-full text-label-mono font-label-mono text-[10px] font-bold uppercase tracking-wider">
                ALTA PROCURA
              </div>
              <div className="text-label-mono font-label-mono text-secondary mb-3">
                MODO 02
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
                Desenvolvimento de Projetos Ponta a Ponta
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                Construção completa de produtos digitais (web e mobile), desde o
                discovery de produto e UX/UI até a engenharia, deploy e
                transferência de know-how para a sua equipe.
              </p>
              <ul className="space-y-2.5 text-body-sm font-body-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-secondary shrink-0"
                  />
                  <span>Discovery, prototipação e arquitetura moderna</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-secondary shrink-0"
                  />
                  <span>Desenvolvimento ágil com entregas contínuas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-secondary shrink-0"
                  />
                  <span>Autonomia total com código documentado e limpo</span>
                </li>
              </ul>
            </div>

            {/* Modo 03 */}
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant/40 relative group hover:border-primary/50 transition-all">
              <div className="text-label-mono font-label-mono text-tertiary mb-3">
                MODO 03
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
                Mentoria de Carreira em Tecnologia
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                Orientação prática para desenvolvedores e profissionais que
                buscam acelerar seu crescimento profissional, transicionar de
                área ou dominar padrões de mercado através de projetos reais.
              </p>
              <ul className="space-y-2.5 text-body-sm font-body-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-tertiary shrink-0"
                  />
                  <span>Roadmaps de estudos e desenvolvimento prático</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-tertiary shrink-0"
                  />
                  <span>Simulações de entrevistas e revisão de perfil</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-tertiary shrink-0"
                  />
                  <span>Vivência com projetos reais e dinâmica ágil (JDM)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tecnologias Dominadas */}
          <div className="border-t border-outline-variant/30 pt-12">
            <div className="text-center text-label-mono font-label-mono text-on-surface-variant uppercase mb-8">
              TECNOLOGIAS E ECOSSISTEMA DOMINADO EM PRODUÇÃO
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
              <div className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center gap-2 hover:border-primary/40 transition-colors">
                <Icon name="code" className="w-4 h-4 text-primary" />
                <span className="text-body-sm font-label-ui font-semibold text-on-surface">
                  React &amp; Next.js
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center gap-2 hover:border-primary/40 transition-colors">
                <Icon name="deployed_code" className="w-4 h-4 text-tertiary" />
                <span className="text-body-sm font-label-ui font-semibold text-on-surface">
                  React Native Mobile
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center gap-2 hover:border-primary/40 transition-colors">
                <Icon name="terminal" className="w-4 h-4 text-secondary" />
                <span className="text-body-sm font-label-ui font-semibold text-on-surface">
                  TypeScript &amp; Node.js
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center gap-2 hover:border-primary/40 transition-colors">
                <Icon name="cloud" className="w-4 h-4 text-primary" />
                <span className="text-body-sm font-label-ui font-semibold text-on-surface">
                  AWS &amp; Firebase
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center gap-2 hover:border-primary/40 transition-colors">
                <Icon name="bolt" className="w-4 h-4 text-tertiary" />
                <span className="text-body-sm font-label-ui font-semibold text-on-surface">
                  CI/CD &amp; Testes Automatizados
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center gap-2 hover:border-primary/40 transition-colors">
                <Icon name="public" className="w-4 h-4 text-secondary" />
                <span className="text-body-sm font-label-ui font-semibold text-on-surface">
                  WordPress &amp; Elementor
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CALL TO ACTION BANNER */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="contato">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 border border-primary/30 bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low">
            {/* Background Lighting Bloom */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/30 blur-[90px] rounded-full pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-tertiary/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-container/20 border border-primary/30 mb-6 text-label-mono font-label-mono text-primary uppercase text-xs">
                <Icon name="lock" className="w-3.5 h-3.5 text-primary" />
                <span>Sessão Técnica e Estratégica</span>
              </div>

              <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface mb-6">
                Pronto para transformar sua ideia em software de excelência?
              </h2>

              <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Converse diretamente com nossos especialistas para entender como
                podemos acelerar seu projeto de tecnologia ou sua trajetória
                profissional.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contato"
                  className="primary-btn-glow px-8 py-4 rounded-xl text-white font-label-ui text-body-md font-semibold flex items-center justify-center gap-3 transition-transform active:scale-95"
                >
                  <span>Falar com Nossos Especialistas</span>
                  <Icon name="calendar_month" className="w-5 h-5 text-white" />
                </Link>

                <Link
                  href="/projetos"
                  className="px-6 py-4 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-ui text-body-md font-semibold flex items-center justify-center gap-2 transition-all hover:border-primary/50"
                >
                  <span>Ver Nossos Projetos</span>
                  <Icon name="north_east" className="w-4 h-4" />
                </Link>

                <Link
                  href="/mentoria"
                  className="px-6 py-4 rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high border border-outline-variant/30 text-secondary font-label-ui text-body-md font-semibold flex items-center justify-center gap-2 transition-all hover:border-secondary/50"
                >
                  <span>Conhecer a Mentoria Tech</span>
                  <Icon name="arrow_forward" className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-label-mono font-label-mono text-xs text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" className="w-4 h-4 text-tertiary" />
                  Atendimento Direto com a Liderança
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" className="w-4 h-4 text-tertiary" />
                  Sem Intermediários Comerciais
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" className="w-4 h-4 text-tertiary" />
                  Autonomia e Código Limpo
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
