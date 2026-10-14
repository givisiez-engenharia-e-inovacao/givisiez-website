import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSection from '@/components/home/ContactSection';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Ambient Background Grid and Radial Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 custom-mesh-grid" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none purple-radial-bloom z-0" />

      <Header />

      <main className="relative z-10 flex flex-col gap-24 md:gap-32 pt-8 pb-20">
        {/* Section 1: Hero Section */}
        <section
          className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 md:pt-20"
          id="home"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/60 mb-8 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-label-mono font-label-mono tracking-wider font-semibold">
                ENGENHARIA DE SOFTWARE &amp; TRANSFORMAÇÃO DIGITAL
              </span>
            </div>

            {/* Main Title */}
            <h1 className="hidden md:block text-display-hero font-display-hero text-on-surface tracking-tight leading-tight mb-8">
              Construindo arquiteturas digitais robustas que escalam seu futuro.
            </h1>
            <h1 className="block md:hidden text-display-hero-mobile font-display-hero-mobile text-on-surface tracking-tight leading-tight mb-6">
              Construindo arquiteturas digitais robustas que escalam seu futuro.
            </h1>

            {/* Subtitle */}
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Transformamos desafios complexos de computação em nuvem e
              engenharia de software em soluções de alta disponibilidade,
              ultra-resilientes e estrategicamente desenhadas para operações de
              grande escala.
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-secondary-container text-white px-8 py-3.5 rounded-lg text-label-ui font-label-ui border border-primary/40 shadow-[0_0_24px_rgba(106,13,173,0.4)] hover:shadow-[0_0_32px_rgba(106,13,173,0.6)] active:scale-95 transition-all duration-200 cursor-pointer"
                href="#projetos"
              >
                <span>Explorar Projetos</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Bento Panel */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-outline-variant/30">
              <div className="p-6 rounded-xl bg-surface-container-low/70 border border-outline-variant/40 backdrop-blur-md flex flex-col items-center">
                <div className="text-headline-xl font-headline-xl text-primary font-bold mb-1 tracking-tight">
                  +30k
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  Usuários impactados diretamente
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-container-low/70 border border-outline-variant/40 backdrop-blur-md flex flex-col items-center">
                <div className="text-headline-xl font-headline-xl text-tertiary font-bold mb-1 tracking-tight">
                  99.9%
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  SLA e disponibilidade em produção
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-container-low/70 border border-outline-variant/40 backdrop-blur-md flex flex-col items-center">
                <div className="text-headline-xl font-headline-xl text-primary font-bold mb-1 tracking-tight">
                  4.9 ★
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  Avaliação nas lojas de aplicativos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Projetos em Destaque */}
        <section
          className="max-w-7xl mx-auto px-6 md:px-12 w-full"
          id="projetos"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-label-mono font-label-mono text-primary uppercase tracking-wider block mb-2">
                Portfólio de Engenharia
              </span>
              <h2 className="text-headline-xl font-headline-xl text-on-surface font-bold tracking-tight">
                Projetos em Destaque
              </h2>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
              Sistemas concebidos com rigor de classe mundial, tolerância a
              falhas e arquiteturas orientadas a eventos.
            </p>
          </div>

          {/* Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Project Card 1: Consultoria em Engenharia de Software */}
            <div className="group rounded-xl bg-surface-container-low/80 border border-outline-variant/50 p-8 flex flex-col justify-between transition-all duration-300 purple-glow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none transition-all group-hover:bg-primary/20" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary">
                    <Icon name="code_blocks" className="w-6 h-6" />
                  </div>
                  <span className="text-label-mono font-label-mono text-tertiary bg-tertiary-container/30 px-3 py-1 rounded-full border border-tertiary/20">
                    Aceleração com IA
                  </span>
                </div>
                <div className="text-label-mono font-label-mono text-xs text-primary mb-1">
                  Givisiez &bull; Parceria Edvisor
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold mb-3 group-hover:text-primary transition-colors">
                  Consultoria em Engenharia de Software
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Engenharia e consultoria sênior para plataforma de gestão
                  escolar global, construindo módulos reativos com React,
                  TypeScript estrito e automação inteligente por Claude AI.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    React
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    TypeScript
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    Claude AI
                  </span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-primary text-label-ui font-label-ui font-semibold group-hover:translate-x-1 transition-transform cursor-pointer"
                href="/projetos/consultoria-em-engenharia-de-software"
              >
                <span>Ver estudo de caso</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
            </div>

            {/* Project Card 2: ConectaKids App */}
            <div className="group rounded-xl bg-surface-container-low/80 border border-outline-variant/50 p-8 flex flex-col justify-between transition-all duration-300 purple-glow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none transition-all group-hover:bg-primary/20" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary">
                    <Icon name="neurology" className="w-6 h-6" />
                  </div>
                  <span className="text-label-mono font-label-mono text-tertiary bg-tertiary-container/30 px-3 py-1 rounded-full border border-tertiary/20">
                    Healthtech &bull; Web &amp; App
                  </span>
                </div>
                <div className="text-label-mono font-label-mono text-xs text-primary mb-1">
                  Givisiez &bull; Parceria SensaKids
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold mb-3 group-hover:text-primary transition-colors">
                  ConectaKids App
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Plataforma multiplataforma conectando profissionais
                  multidisciplinares de saúde e famílias de crianças com
                  desenvolvimento atípico, com prontuário clínico e histórico
                  unificado.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    Next.js
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    React
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    Supabase
                  </span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-primary text-label-ui font-label-ui font-semibold group-hover:translate-x-1 transition-transform cursor-pointer"
                href="/projetos/conectakids-app"
              >
                <span>Ver estudo de caso</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
            </div>

            {/* Project Card 3: Presente Certo App */}
            <div className="group rounded-xl bg-surface-container-low/80 border border-outline-variant/50 p-8 flex flex-col justify-between transition-all duration-300 purple-glow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none transition-all group-hover:bg-primary/20" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary">
                    <Icon name="rocket_launch" className="w-6 h-6" />
                  </div>
                  <span className="text-label-mono font-label-mono text-tertiary bg-tertiary-container/30 px-3 py-1 rounded-full border border-tertiary/20">
                    4.9 ★ Lojas de Apps
                  </span>
                </div>
                <div className="text-label-mono font-label-mono text-xs text-primary mb-1">
                  Givisiez &bull; Mobile Nativo
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold mb-3 group-hover:text-primary transition-colors">
                  Presente Certo App
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Aplicativo mobile completo para organização de eventos, listas
                  de presentes colaborativas e amigo secreto com sorteio em
                  tempo real, sincronizado via Firebase Cloud Firestore.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    React Native
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    Expo
                  </span>
                  <span className="text-label-mono font-label-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface border border-outline-variant/40">
                    Firebase
                  </span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-primary text-label-ui font-label-ui font-semibold group-hover:translate-x-1 transition-transform cursor-pointer"
                href="/projetos/presente-certo-app"
              >
                <span>Ver estudo de caso</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface text-label-ui font-label-ui transition-all duration-200 hover:border-primary/50"
              href="/projetos"
            >
              <span>Ver todos os projetos</span>
              <Icon name="north_east" className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 3: Clientes & Depoimentos */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Partner Brands Strip */}
          <div className="py-10 border-y border-outline-variant/30 mb-16">
            <p className="text-center text-label-mono font-label-mono text-on-surface-variant text-xs uppercase tracking-widest mb-8">
              Clientes e ecossistemas corporativos impactados
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
              {/* Edvisor */}
              <div className="flex items-center justify-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 h-20 group hover:bg-surface-container-high/40">
                <Image
                  src="/images/clients/edvisor-logo-white.svg"
                  alt="Edvisor"
                  width={140}
                  height={32}
                  className="max-h-7 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* SensaKids */}
              <div className="flex items-center justify-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 h-20 group hover:bg-surface-container-high/40">
                <Image
                  src="/images/clients/sensakids-logo.jpeg"
                  alt="SensaKids"
                  width={100}
                  height={40}
                  className="max-h-9 w-auto object-contain rounded opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Buy Energy */}
              <div className="flex items-center justify-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 h-20 group hover:bg-surface-container-high/40">
                <Image
                  src="/images/clients/buy-energy-logo.png"
                  alt="Buy Energy"
                  width={110}
                  height={36}
                  className="max-h-9 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Personal & Training */}
              <div className="flex items-center justify-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 h-20 group hover:bg-surface-container-high/40">
                <Image
                  src="/images/clients/personal-and-training-logo.png"
                  alt="Personal & Training"
                  width={130}
                  height={36}
                  className="max-h-8 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Penna & Vargas */}
              <div className="flex items-center justify-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 h-20 group hover:bg-surface-container-high/40">
                <Image
                  src="/images/clients/penna-vargas-logo.png"
                  alt="Penna e Vargas Advocacia"
                  width={140}
                  height={30}
                  className="max-h-6 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Eliane Turra */}
              <div className="flex items-center justify-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 h-20 group hover:bg-surface-container-high/40">
                <Image
                  src="/images/clients/eliane-turra-logo.png"
                  alt="Eliane Turra"
                  width={120}
                  height={32}
                  className="max-h-7 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-label-mono font-label-mono text-primary uppercase tracking-wider block mb-2">
              Autoridade Técnica &amp; Resultados Reais
            </span>
            <h2 className="text-headline-xl font-headline-xl text-on-surface font-bold tracking-tight">
              O que dizem os parceiros e clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between purple-glow-card transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="w-4 h-4 text-primary fill-primary"
                      filled
                    />
                  ))}
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant italic leading-relaxed">
                  &ldquo;A Givisiez entrou na nossa equipe de engenharia com
                  autonomia imediata. Conseguiram absorver as particularidades
                  do nosso produto rapidamente, entregando features com alto
                  padrão de qualidade em React e TypeScript. O uso de IA nas
                  esteiras de desenvolvimento trouxe um ganho real de
                  velocidade.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary text-xs">
                  ED
                </div>
                <div>
                  <div className="text-label-ui font-label-ui text-on-surface font-semibold">
                    Liderança de Engenharia de Software
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant text-xs">
                    Edvisor | Gestão Escolar Global
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between purple-glow-card transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="w-4 h-4 text-primary fill-primary"
                      filled
                    />
                  ))}
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant italic leading-relaxed">
                  &ldquo;O ConectaKids trouxe a ponte digital que faltava entre
                  o consultório e a casa das crianças. Nossos terapeutas
                  acompanham cada avanço sensorial em tempo real e os pais se
                  sentem verdadeiramente amparados. A engenharia da Givisiez foi
                  fundamental para transformar essa visão em um produto seguro e
                  intuitivo.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary text-xs">
                  SK
                </div>
                <div>
                  <div className="text-label-ui font-label-ui text-on-surface font-semibold">
                    Equipe de Saúde &amp; Gestão
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant text-xs">
                    SensaKids &amp; Clínicas Multidisciplinares
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between purple-glow-card transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="w-4 h-4 text-primary fill-primary"
                      filled
                    />
                  ))}
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant italic leading-relaxed">
                  &ldquo;A plataforma desenvolvida pela Givisiez transformou o
                  pós-venda da Buy Energy. Nossos clientes finalmente entenderam
                  seus extratos de compensação solar com total clareza, e o
                  volume de chamados de suporte caiu pela metade. Foi um salto
                  de maturidade digital fundamental.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary text-xs">
                  BE
                </div>
                <div>
                  <div className="text-label-ui font-label-ui text-on-surface font-semibold">
                    Diretoria de Operações &amp; Clientes
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant text-xs">
                    Buy Energy | Energia Solar &amp; Mercado Livre
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Formulário de Contato Consultivo */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
