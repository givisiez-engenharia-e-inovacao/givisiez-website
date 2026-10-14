'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import { projectsContent } from '@/components/project/projects.data';

type CategoryFilter = 'all' | 'mobile' | 'web' | 'health' | 'consultoria';

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    desafio: 'consultoria',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>(
    'idle'
  );

  const filteredProjects = projectsContent.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'consultoria') {
      return (
        project.slug === 'consultoria-em-engenharia-de-software' ||
        project.type.includes('product management')
      );
    }
    if (activeFilter === 'health') {
      return (
        project.slug === 'conectakids-app' ||
        project.slug === 'sensakids-website' ||
        project.slug === 'allergy-track-app' ||
        project.slug === 'personal-training-app'
      );
    }
    return project.type.includes(activeFilter);
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 800);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col origami-mesh selection:bg-primary-container selection:text-white">
      {/* Ambient mesh grid & glows */}
      <div className="fixed inset-0 pointer-events-none z-0 custom-mesh-grid" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none purple-radial-bloom z-0" />

      <Header />

      <main className="flex-grow relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
          {/* Ambient volumetric orb decoration */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/20 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-mono text-label-mono text-primary uppercase font-semibold">
                Portfólio de Engenharia &amp; Software
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display-hero font-display-hero text-on-surface tracking-tight mb-6">
              Projetos e Aplicações Desenvolvidos em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                Produção
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed mb-10">
              Conheça as soluções de software, aplicativos web e mobile, e
              consultorias técnicas desenvolvidos pela Givisiez. Engenharia
              moderna construída com rigor, boas práticas e impacto real para
              parceiros como Edvisor, SensaKids, Buy Energy e clientes
              corporativos.
            </p>

            {/* Dynamic Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-12 py-4 px-6 rounded-xl hairline-card border border-outline-variant/30 text-left">
              <div>
                <div className="text-headline-md font-headline-md font-bold text-primary">
                  {projectsContent.length} Projetos
                </div>
                <div className="text-label-mono font-label-mono text-outline">
                  Entregues em Produção
                </div>
              </div>
              <div>
                <div className="text-headline-md font-headline-md font-bold text-tertiary">
                  Mobile &amp; Web
                </div>
                <div className="text-label-mono font-label-mono text-outline">
                  Ecossistemas Completos
                </div>
              </div>
              <div>
                <div className="text-headline-md font-headline-md font-bold text-on-surface">
                  TypeScript &amp; IA
                </div>
                <div className="text-label-mono font-label-mono text-outline">
                  Stack Moderna &amp; Limpa
                </div>
              </div>
              <div>
                <div className="text-headline-md font-headline-md font-bold text-secondary">
                  Desde 2019
                </div>
                <div className="text-label-mono font-label-mono text-outline">
                  Histórico de Entregas
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="w-full flex items-center justify-center flex-wrap gap-2.5">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg text-label-ui font-label-ui transition-all duration-200 cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-primary-container text-white border border-primary/40 shadow-sm'
                    : 'bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/20'
                }`}
              >
                Todos os Projetos ({projectsContent.length})
              </button>
              <button
                onClick={() => setActiveFilter('mobile')}
                className={`px-4 py-2 rounded-lg text-label-ui font-label-ui transition-all duration-200 cursor-pointer ${
                  activeFilter === 'mobile'
                    ? 'bg-primary-container text-white border border-primary/40 shadow-sm'
                    : 'bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/20'
                }`}
              >
                Mobile Apps (iOS &amp; Android)
              </button>
              <button
                onClick={() => setActiveFilter('web')}
                className={`px-4 py-2 rounded-lg text-label-ui font-label-ui transition-all duration-200 cursor-pointer ${
                  activeFilter === 'web'
                    ? 'bg-primary-container text-white border border-primary/40 shadow-sm'
                    : 'bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/20'
                }`}
              >
                Plataformas Web &amp; Fullstack
              </button>
              <button
                onClick={() => setActiveFilter('health')}
                className={`px-4 py-2 rounded-lg text-label-ui font-label-ui transition-all duration-200 cursor-pointer ${
                  activeFilter === 'health'
                    ? 'bg-primary-container text-white border border-primary/40 shadow-sm'
                    : 'bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/20'
                }`}
              >
                Saúde &amp; Healthtech
              </button>
              <button
                onClick={() => setActiveFilter('consultoria')}
                className={`px-4 py-2 rounded-lg text-label-ui font-label-ui transition-all duration-200 cursor-pointer ${
                  activeFilter === 'consultoria'
                    ? 'bg-primary-container text-white border border-primary/40 shadow-sm'
                    : 'bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/20'
                }`}
              >
                Consultoria em Engenharia
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: GRID DE CASES E PROJETOS */}
        <section
          className="py-12 px-6 lg:px-12 max-w-7xl mx-auto"
          id="cases-grid"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-outline-variant/20 gap-4">
            <div>
              <span className="text-label-mono font-label-mono text-tertiary">
                PORTFÓLIO OFICIAL GIVISIEZ
              </span>
              <h2 className="text-headline-xl font-headline-xl text-on-surface tracking-tight mt-1">
                Projetos Reais em Produção
              </h2>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md">
              Aplicações web, aplicativos mobile nativos e consultorias técnicas
              construídas com as melhores práticas de mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => {
              const isConsulting =
                project.slug === 'consultoria-em-engenharia-de-software';
              const isHealth =
                project.slug === 'conectakids-app' ||
                project.slug === 'allergy-track-app' ||
                project.slug === 'personal-training-app';
              const isMobileOnly =
                project.type.includes('mobile') &&
                !project.type.includes('web');
              const isWebAndMobile =
                project.type.includes('mobile') && project.type.includes('web');

              return (
                <article
                  key={project.slug}
                  className="hairline-card rounded-xl p-6 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Header Card */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-2.5 py-1 rounded font-label-mono text-label-mono border ${
                          isConsulting
                            ? 'bg-primary-container/30 border-primary/30 text-primary'
                            : isHealth
                              ? 'bg-tertiary-container/30 border-tertiary/30 text-tertiary'
                              : isMobileOnly
                                ? 'bg-secondary-container/40 border-secondary/30 text-secondary'
                                : 'bg-primary-container/30 border-primary/30 text-primary'
                        }`}
                      >
                        {isConsulting
                          ? 'Consultoria & IA'
                          : isWebAndMobile
                            ? 'Web & Mobile'
                            : isMobileOnly
                              ? 'Mobile App'
                              : 'Plataforma Web'}
                      </span>
                      <span className="font-label-mono text-label-mono text-outline bg-surface-container-high px-2 py-0.5 rounded border border-outline-variant/30">
                        {project.year}
                      </span>
                    </div>

                    {/* Image preview */}
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-5 border border-outline-variant/30 bg-surface-container-high/40 flex items-center justify-center">
                      {project.cover?.src ? (
                        <Image
                          src={project.cover.src}
                          alt={project.cover.alt || project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={`transition-transform duration-500 group-hover:scale-105 ${
                            isConsulting || project.slug === 'conectakids-app'
                              ? 'object-contain p-6'
                              : 'object-cover'
                          }`}
                        />
                      ) : (
                        <div className="text-center p-4">
                          <Icon
                            name="code_blocks"
                            className="w-10 h-10 text-primary mx-auto mb-2 opacity-60"
                          />
                          <span className="text-label-mono text-on-surface-variant text-xs">
                            {project.company}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 font-label-mono text-label-mono text-on-surface text-xs bg-surface-container-lowest/85 px-2.5 py-1 rounded-md border border-outline-variant/40 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{project.company}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary transition-colors mb-2.5">
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-3">
                      {project.subtitle || project.generalDescription}
                    </p>

                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono text-xs border border-outline-variant/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact & CTAs */}
                  <div className="pt-4 border-t border-outline-variant/20 mt-auto space-y-3">
                    <div className="flex items-center justify-between text-xs font-label-mono text-outline">
                      <span>Categorias:</span>
                      <span className="text-on-surface-variant truncate max-w-[200px] text-right">
                        {project.type.slice(0, 3).join(', ')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="flex-1 py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-white font-label-ui text-label-ui flex items-center justify-center gap-2 border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 cursor-pointer text-xs"
                      >
                        <span>Ver Estudo Completo</span>
                        <Icon name="arrow_forward" className="w-3.5 h-3.5" />
                      </Link>

                      {project.link && (
                        <a
                          href={project.link.split(' ')[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container-highest text-tertiary font-label-ui text-label-ui flex items-center justify-center gap-1.5 border border-outline-variant/30 hover:border-tertiary/40 transition-all text-xs cursor-pointer"
                          title="Acessar projeto ao vivo"
                        >
                          <span>Acessar</span>
                          <Icon name="north_east" className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION: CAPACIDADES E METODOLOGIA DE ENGENHARIA */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-outline-variant/20 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-label-mono font-label-mono text-primary uppercase">
              Excelência Técnica
            </span>
            <h2 className="text-headline-xl font-headline-xl text-on-surface tracking-tight mt-2">
              Pilares de Engenharia Givisiez
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-3">
              Processos estruturados e tecnologias modernas aplicados para
              entregar produtos seguros, performáticos e escaláveis.
            </p>
          </div>

          {/* Bento Grid 4 Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pilar 1 */}
            <div className="hairline-card rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/40 flex items-center justify-center mb-6 text-primary">
                  <Icon name="code_blocks" className="w-6 h-6" />
                </div>
                <span className="text-label-mono font-label-mono text-outline">
                  PILAR 01
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">
                  Frontend &amp; Next.js
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Aplicações web modernas com Next.js, React e Tailwind CSS,
                  focadas em usabilidade de alto nível, SEO técnico e
                  performance de carregamento.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 font-label-mono text-label-mono text-primary flex items-center gap-1.5">
                <Icon name="check_circle" className="w-4 h-4 text-primary" />
                <span>React &amp; Next.js Moderno</span>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="hairline-card rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 border border-tertiary/40 flex items-center justify-center mb-6 text-tertiary">
                  <Icon name="speed" className="w-6 h-6" />
                </div>
                <span className="text-label-mono font-label-mono text-outline">
                  PILAR 02
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">
                  Mobile Nativo (iOS &amp; Android)
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Desenvolvimento multiplataforma com React Native e Expo,
                  garantindo experiência fluida de aplicativo nativo e
                  publicação direta nas lojas App Store e Google Play.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 font-label-mono text-label-mono text-tertiary flex items-center gap-1.5">
                <Icon name="check_circle" className="w-4 h-4 text-tertiary" />
                <span>App Store &amp; Play Store</span>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="hairline-card rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary-container/20 border border-secondary/40 flex items-center justify-center mb-6 text-secondary">
                  <Icon name="database" className="w-6 h-6" />
                </div>
                <span className="text-label-mono font-label-mono text-outline">
                  PILAR 03
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">
                  Backend &amp; Nuvem Segura
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Arquitetura de dados resiliente utilizando Supabase, Firebase
                  Cloud Firestore, PostgreSQL e MongoDB, com autenticação segura
                  e regras de acesso rígidas.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 font-label-mono text-label-mono text-secondary flex items-center gap-1.5">
                <Icon name="check_circle" className="w-4 h-4 text-secondary" />
                <span>Dados Confiáveis &amp; Seguros</span>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="hairline-card rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/40 flex items-center justify-center mb-6 text-primary">
                  <Icon name="neurology" className="w-6 h-6" />
                </div>
                <span className="text-label-mono font-label-mono text-outline">
                  PILAR 04
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">
                  Consultoria &amp; Aceleração com IA
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Pareamento com equipes de engenharia, mentoria de arquitetura
                  de software e integração de IA generativa (Claude AI) para
                  ganho de velocidade no ciclo de entrega.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 font-label-mono text-label-mono text-primary flex items-center gap-1.5">
                <Icon name="check_circle" className="w-4 h-4 text-primary" />
                <span>Engenharia Aumentada</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CTA CONVERSÃO / CONTATO COM ESPECIALISTA */}
        <section
          className="py-20 px-6 lg:px-12 max-w-7xl mx-auto"
          id="contato-consultoria"
        >
          <div className="relative rounded-2xl hairline-card p-8 md:p-14 overflow-hidden border border-primary/40 bg-gradient-to-br from-surface-container-lowest via-surface-container to-surface-container-high">
            {/* Glow radial accent */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary-container/30 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 border border-primary/30 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-label-mono text-label-mono text-primary">
                    Pronto para Desenvolver seu Novo Projeto?
                  </span>
                </div>
                <h2 className="text-headline-xl font-headline-xl text-on-surface tracking-tight mb-4">
                  Vamos transformar sua ideia em um produto de software real
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed mb-6">
                  Nossa equipe de engenharia analisa os requisitos do seu
                  sistema, indicando as tecnologias mais adequadas para garantir
                  entrega ágil, estabilidade e longevidade de código.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="verified" className="w-4 h-4 text-primary" />
                    <span>Avaliação Técnica Inicial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="schedule" className="w-4 h-4 text-primary" />
                    <span>Retorno em até 24 horas</span>
                  </div>
                </div>
              </div>

              {/* Form / Direct Booking */}
              <div className="lg:col-span-5 bg-surface-container-lowest/90 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-outline-variant/30">
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                  Falar sobre um Projeto
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                  Compartilhe seu desafio técnico com nossos engenheiros.
                </p>

                {formStatus === 'success' ? (
                  <div className="py-8 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Icon name="check_circle" className="w-6 h-6" />
                    </div>
                    <h4 className="text-headline-sm font-bold text-on-surface">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-body-sm text-on-surface-variant">
                      Obrigado,{' '}
                      <strong className="text-on-surface">
                        {formState.nome}
                      </strong>
                      . Nossa equipe entrará em contato em breve.
                    </p>
                    <button
                      onClick={() => {
                        setFormState({
                          nome: '',
                          email: '',
                          desafio: 'consultoria',
                        });
                        setFormStatus('idle');
                      }}
                      className="mt-3 px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant text-primary text-label-ui font-label-ui hover:bg-surface-container-highest cursor-pointer"
                    >
                      Nova Solicitação
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                      <label className="block text-label-ui font-label-ui text-on-surface mb-1">
                        Nome Completo
                      </label>
                      <input
                        className="glass-input w-full px-4 py-2.5 rounded-lg text-body-sm font-body-sm text-white placeholder-outline focus:outline-none"
                        placeholder="Ex: Carlos Silva"
                        required
                        type="text"
                        value={formState.nome}
                        onChange={e =>
                          setFormState({ ...formState, nome: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-label-ui font-label-ui text-on-surface mb-1">
                        E-mail
                      </label>
                      <input
                        className="glass-input w-full px-4 py-2.5 rounded-lg text-body-sm font-body-sm text-white placeholder-outline focus:outline-none"
                        placeholder="carlos@empresa.com.br"
                        required
                        type="email"
                        value={formState.email}
                        onChange={e =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-label-ui font-label-ui text-on-surface mb-1">
                        Tipo de Projeto
                      </label>
                      <select
                        className="glass-input w-full px-4 py-2.5 rounded-lg text-body-sm font-body-sm text-white focus:outline-none"
                        value={formState.desafio}
                        onChange={e =>
                          setFormState({
                            ...formState,
                            desafio: e.target.value,
                          })
                        }
                      >
                        <option
                          className="bg-surface-container-lowest"
                          value="consultoria"
                        >
                          Consultoria em Engenharia de Software
                        </option>
                        <option
                          className="bg-surface-container-lowest"
                          value="mobile"
                        >
                          Desenvolvimento de Aplicativo Mobile (iOS &amp;
                          Android)
                        </option>
                        <option
                          className="bg-surface-container-lowest"
                          value="web"
                        >
                          Plataforma Web &amp; Fullstack Sob Medida
                        </option>
                        <option
                          className="bg-surface-container-lowest"
                          value="health"
                        >
                          Soluções para Saúde (Healthtech)
                        </option>
                        <option
                          className="bg-surface-container-lowest"
                          value="outros"
                        >
                          Outro Desafio de Software
                        </option>
                      </select>
                    </div>
                    <button
                      className="w-full primary-btn-glow py-3 px-6 rounded-lg text-label-ui font-label-ui text-white font-semibold flex items-center justify-center gap-2 transition-transform duration-150 active:scale-95 mt-2 cursor-pointer disabled:opacity-60"
                      type="submit"
                      disabled={formStatus === 'loading'}
                    >
                      <span>
                        {formStatus === 'loading'
                          ? 'Enviando...'
                          : 'Enviar Solicitação'}
                      </span>
                      <Icon name="send" className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
