'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon, { IconName } from '@/components/ui/Icon';
import { CaseStudyData } from '@/data/caseStudies';

interface CaseStudyDetailsProps {
  caseStudy: CaseStudyData;
}

export default function CaseStudyDetails({ caseStudy }: CaseStudyDetailsProps) {
  const {
    breadcrumbTitle,
    categoryBadge,
    clientBadge,
    periodBadge,
    title,
    subtitle,
    coverImage,
    externalLink,
    privacyPolicyUrl,
    metrics,
    challenge,
    solution,
    results,
    testimonial,
    techStack,
    cta,
  } = caseStudy;

  return (
    <div className="relative min-h-screen bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white">
      {/* Atmospheric Glow Mesh Background */}
      <div className="fixed inset-0 pointer-events-none radial-glow-primary z-0" />
      <div className="fixed top-1/4 right-0 w-[600px] h-[600px] pointer-events-none radial-glow-accent z-0" />
      <div className="fixed inset-0 pointer-events-none grid-lines z-0" />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-24">
        {/* 1. Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 mb-8 text-label-mono font-label-mono text-outline"
        >
          <Link
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Icon
              name="home"
              className="w-4 h-4 text-outline group-hover:text-primary"
            />
            <span>Home</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <Link
            href="/projetos"
            className="hover:text-primary transition-colors"
          >
            Projetos
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-secondary font-medium truncate max-w-xs md:max-w-none">
            {breadcrumbTitle}
          </span>
        </nav>

        {/* 2. Hero do Case */}
        <section className="mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-primary-container/20 border border-primary/30 text-primary">
              {categoryBadge}
            </span>
            <span className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-surface-container-high border border-outline-variant/40 text-on-surface-variant flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>{clientBadge}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-surface-container-high border border-outline-variant/40 text-on-surface-variant">
              {periodBadge}
            </span>
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-primary-container/30 hover:bg-primary-container/50 border border-primary/50 text-white flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(106,13,173,0.3)]"
              >
                <span>Acessar Projeto</span>
                <Icon name="north_east" className="w-3.5 h-3.5" />
              </a>
            )}
            {privacyPolicyUrl && (
              <Link
                href={privacyPolicyUrl}
                className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-outline hover:text-on-surface flex items-center gap-1.5 transition-all"
              >
                <span>Política de Privacidade</span>
              </Link>
            )}
          </div>

          <h1 className="text-headline-xl font-headline-xl text-on-surface tracking-tight mb-6 max-w-5xl">
            {title}
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* Optional Project Screenshot / Cover Preview */}
          {coverImage && (
            <div className="mb-12 rounded-2xl overflow-hidden border border-outline-variant/30 glass-panel p-3 md:p-5 max-w-4xl shadow-xl">
              <div className="relative w-full h-64 md:h-[380px] rounded-xl overflow-hidden bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20">
                <Image
                  src={coverImage}
                  alt={title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>
            </div>
          )}

          {/* Key Metrics Showcase Grid (4 Bento Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const colorClass =
                metric.color === 'secondary'
                  ? 'text-secondary'
                  : metric.color === 'tertiary'
                    ? 'text-tertiary'
                    : metric.color === 'primary-fixed'
                      ? 'text-primary-fixed'
                      : 'text-primary';

              const glowBg =
                metric.color === 'secondary'
                  ? 'bg-secondary/10 group-hover:bg-secondary/20'
                  : metric.color === 'tertiary'
                    ? 'bg-tertiary/10 group-hover:bg-tertiary/20'
                    : metric.color === 'primary-fixed'
                      ? 'bg-primary-fixed/10 group-hover:bg-primary-fixed/20'
                      : 'bg-primary/10 group-hover:bg-primary/20';

              return (
                <div
                  key={index}
                  className="glass-card-interactive p-6 rounded-xl relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-label-mono font-label-mono text-outline">
                      {metric.label}
                    </span>
                    <Icon
                      name={metric.icon}
                      className={`w-5 h-5 ${colorClass}`}
                    />
                  </div>
                  <div className="text-display-hero-mobile font-display-hero-mobile text-on-surface tracking-tight mb-2">
                    {metric.value}
                    <span
                      className={`${colorClass} text-headline-sm font-headline-sm ml-1`}
                    >
                      {metric.unit}
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {metric.description}
                  </p>
                  <div
                    className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-xl transition-all ${glowBg}`}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. O Desafio Técnico */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded bg-error" />
                <span className="text-label-mono font-label-mono text-error">
                  {challenge.badge}
                </span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-4">
                {challenge.title}
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                {challenge.description}
              </p>
              <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/30 flex items-start gap-3">
                <Icon
                  name="warning"
                  className="w-6 h-6 text-error shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-label-ui font-label-ui text-on-surface mb-1">
                    {challenge.impactBox.title}
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {challenge.impactBox.description}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenge.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-xl border-l-4 border-l-error"
                >
                  <div className="flex items-center gap-2 mb-2 text-on-surface font-headline-sm text-headline-sm">
                    <Icon
                      name={card.icon}
                      className="w-5 h-5 text-error shrink-0"
                    />
                    <span>{card.title}</span>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. A Solução Arquitetural Implementada pela Givisiez */}
        <section className="mb-20" id="solucao">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-label-mono font-label-mono bg-primary-container/20 border border-primary/30 text-primary mb-3">
              {solution.badge}
            </div>
            <h2 className="text-headline-xl font-headline-xl text-on-surface tracking-tight mb-4">
              {solution.title}
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Arquitetura Pilares (4 Grid Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {solution.pillars.map((pillar, idx) => {
              const colorClass =
                pillar.color === 'secondary'
                  ? 'text-secondary'
                  : pillar.color === 'tertiary'
                    ? 'text-tertiary'
                    : pillar.color === 'primary-fixed'
                      ? 'text-primary-fixed'
                      : 'text-primary';

              return (
                <div
                  key={idx}
                  className="glass-card-interactive p-6 rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center ${colorClass} mb-4`}
                    >
                      <Icon name={pillar.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div
                    className={`mt-6 pt-4 border-t border-outline-variant/20 text-label-mono font-label-mono text-xs ${colorClass}`}
                  >
                    {pillar.tag}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagrama Arquitetural Esquemático Visual */}
          <div className="glass-panel p-6 lg:p-8 rounded-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b border-outline-variant/30">
              <div>
                <div className="text-label-mono font-label-mono text-primary text-xs uppercase tracking-wider mb-1">
                  Topology Blueprint
                </div>
                <div className="text-headline-md font-headline-md text-on-surface">
                  {solution.topology.title}
                </div>
              </div>
              <div className="flex items-center gap-3 text-label-mono font-label-mono text-xs">
                {solution.topology.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-on-surface-variant"
                  >
                    <span className={`w-2 h-2 rounded-full ${tag.color}`} />
                    <span>{tag.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Schema Block Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative items-stretch">
              {solution.topology.nodes.map((node, nodeIdx) => (
                <React.Fragment key={nodeIdx}>
                  <div
                    className={`bg-surface-container p-4 rounded-xl flex flex-col justify-between ${
                      node.highlight
                        ? 'border border-primary/40 shadow-[0_0_15px_rgba(106,13,173,0.2)]'
                        : 'border border-outline-variant/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-label-mono font-label-mono text-[11px] ${node.badgeColor}`}
                        >
                          {node.badge}
                        </span>
                        <Icon
                          name={node.icon}
                          className={`w-4 h-4 ${node.badgeColor}`}
                        />
                      </div>
                      <div className="text-headline-sm font-headline-sm text-on-surface text-base mb-1">
                        {node.title}
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant text-xs leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                    <div
                      className={`mt-4 pt-2 border-t border-outline-variant/20 text-label-mono font-label-mono text-[11px] ${
                        node.statColor || 'text-[#10B981]'
                      }`}
                    >
                      {node.stat}
                    </div>
                  </div>

                  {/* Inter-node connector arrow (hidden on mobile, shown between items) */}
                  {nodeIdx < solution.topology.nodes.length - 1 && (
                    <div className="hidden md:flex items-center justify-center -mx-2 text-primary">
                      <Icon name="arrow_forward" className="w-6 h-6" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Lower Stream Row: Workers & Persistência */}
            <div className="mt-6 pt-6 border-t border-outline-variant/20 grid grid-cols-1 md:grid-cols-3 gap-4">
              {solution.topology.lowerNodes.map((lower, lowerIdx) => (
                <div
                  key={lowerIdx}
                  className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3"
                >
                  <Icon
                    name={lower.icon}
                    className={`w-5 h-5 shrink-0 ${lower.color}`}
                  />
                  <div>
                    <div className="text-label-mono font-label-mono text-xs text-on-surface font-semibold">
                      {lower.title}
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant text-xs leading-relaxed">
                      {lower.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Resultados Mensuráveis e Impacto de Negócio */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-label-mono font-label-mono text-primary text-xs uppercase tracking-wider">
                {results.badge}
              </span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mt-1">
                {results.title}
              </h2>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md leading-relaxed">
              {results.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.cards.map((resCard, idx) => {
              const colorClass =
                resCard.color === 'secondary'
                  ? 'text-secondary'
                  : resCard.color === 'tertiary'
                    ? 'text-tertiary'
                    : 'text-primary';

              return (
                <div
                  key={idx}
                  className="glass-panel p-8 rounded-xl border border-outline-variant/40 relative overflow-hidden"
                >
                  <div
                    className={`text-headline-xl font-headline-xl ${colorClass} font-bold mb-2`}
                  >
                    {resCard.metric}
                  </div>
                  <div className="text-headline-sm font-headline-sm text-on-surface mb-3">
                    {resCard.title}
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                    {resCard.description}
                  </p>
                  <div
                    className={`mt-6 flex items-center gap-2 text-label-mono font-label-mono text-xs ${colorClass}`}
                  >
                    <Icon name={resCard.icon} className="w-4 h-4 shrink-0" />
                    <span>{resCard.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Depoimento do CTO do Cliente */}
        <section className="mb-20">
          <div className="glass-panel p-8 lg:p-12 rounded-2xl relative overflow-hidden border border-primary/30 shadow-[0_12px_36px_-8px_rgba(106,13,173,0.25)]">
            <div className="flex items-center gap-1 text-primary mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  filled
                  className="w-6 h-6 text-primary fill-current"
                />
              ))}
            </div>
            <blockquote className="text-headline-md lg:text-headline-lg font-headline-lg text-on-surface tracking-tight mb-8 leading-snug">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-container-high border-2 border-primary flex items-center justify-center text-on-surface font-headline-sm">
                <Icon name="person" className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-headline-sm font-headline-sm text-on-surface">
                  {testimonial.author}
                </div>
                <div className="text-label-mono font-label-mono text-outline text-xs">
                  {testimonial.company}
                </div>
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </section>

        {/* 7. Stack Tecnológica Detalhada */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-label-mono font-label-mono text-primary text-xs uppercase tracking-wider">
              TECNOLOGIAS HOMOLOGADAS
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mt-1">
              Stack de Alta Concorrência Empregada
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="glass-panel p-4 rounded-xl text-center flex flex-col items-center justify-center group hover:border-primary/50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center ${tech.color} mb-2 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={tech.icon} className="w-5 h-5" />
                </div>
                <div className="text-label-ui font-label-ui text-on-surface font-semibold">
                  {tech.name}
                </div>
                <div className="text-label-mono font-label-mono text-[10px] text-outline mt-1">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CTA Inferior para Diagnóstico Arquitetural */}
        <section
          className="relative rounded-2xl overflow-hidden glass-panel border border-primary/40 p-8 lg:p-14 text-center"
          id="contato-cta"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-primary-container/30 border border-primary/50 text-secondary mb-4 inline-block">
              {cta.badge}
            </span>
            <h2 className="text-headline-xl font-headline-xl text-on-surface tracking-tight mb-4">
              {cta.title}
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projetos#contato-consultoria"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-label-ui font-label-ui text-white bg-gradient-to-r from-primary-container to-[#8114D1] border border-primary/50 shadow-[0_0_24px_rgba(106,13,173,0.5)] hover:shadow-[0_0_35px_rgba(106,13,173,0.7)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{cta.primaryButtonText}</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
              <Link
                href="/projetos"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-label-ui font-label-ui text-on-surface bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-200"
              >
                {cta.secondaryButtonText}
              </Link>
            </div>
          </div>
          {/* Ambient Glow Behind CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-secondary-container/10 pointer-events-none" />
        </section>
      </main>
    </div>
  );
}
