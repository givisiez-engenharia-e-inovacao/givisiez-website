'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Icon from '@/components/ui/Icon';

export default function ContactClient() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    company: '',
    roleTitle: '',
    needType: 'desenvolvimento_projeto',
    budgetScope: '',
    technicalChallenge: '',
    ndaRequest: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const handleReset = () => {
    setFormState({
      fullName: '',
      email: '',
      company: '',
      roleTitle: '',
      needType: 'desenvolvimento_projeto',
      budgetScope: '',
      technicalChallenge: '',
      ndaRequest: true,
    });
    setStatus('idle');
  };

  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col relative overflow-x-hidden origami-mesh">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary-container/15 blur-[140px] pointer-events-none -z-10" />

      {/* Main Global Navigation */}
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/20 border border-primary/30 text-primary text-label-mono font-label-mono mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>
              DISPONIBILIDADE PARA NOVOS PROJETOS • ENGENHARIA &amp; PRODUTO
            </span>
          </div>

          <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero text-on-surface tracking-tight mb-6">
            Vamos Construir o Futuro do seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-[#c4e7ff]">
              Projeto de Tecnologia
            </span>
          </h1>

          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Converse diretamente com nossos especialistas de engenharia de
            software e produto. Diagnósticos técnicos objetivos,
            confidencialidade garantida e foco em resultados de negócio.
          </p>

          {/* Architecture Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-outline-variant/20 text-left">
            <div className="flex items-center gap-3">
              <Icon
                name="verified_user"
                className="w-6 h-6 text-primary shrink-0"
              />
              <div>
                <div className="text-label-mono font-label-mono text-on-surface text-xs font-semibold">
                  NDA PRÉVIO
                </div>
                <div className="text-body-sm font-body-sm text-outline">
                  Sigilo bilateral estrito
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="speed" className="w-6 h-6 text-primary shrink-0" />
              <div>
                <div className="text-label-mono font-label-mono text-on-surface text-xs font-semibold">
                  24H RESPOSTA
                </div>
                <div className="text-body-sm font-body-sm text-outline">
                  Sem intermediários
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="hub" className="w-6 h-6 text-primary shrink-0" />
              <div>
                <div className="text-label-mono font-label-mono text-on-surface text-xs font-semibold">
                  ENGENHARIA &amp; PRODUTO
                </div>
                <div className="text-body-sm font-body-sm text-outline">
                  Atendimento com a liderança
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="security" className="w-6 h-6 text-primary shrink-0" />
              <div>
                <div className="text-label-mono font-label-mono text-on-surface text-xs font-semibold">
                  LGPD COMPLIANT
                </div>
                <div className="text-body-sm font-body-sm text-outline">
                  Governança &amp; privacidade
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN TWO-COLUMN SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Canais Diretos, Protocolo e FAQ (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Card: Canais de Atendimento */}
            <div className="glass-panel rounded-xl p-6 lg:p-8 relative overflow-hidden border border-outline-variant/40">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-label-mono font-label-mono text-primary text-xs uppercase mb-4 tracking-wider">
                <Icon name="hub" className="w-4 h-4 text-primary" />
                <span>Atendimento Direto</span>
              </div>

              <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-6">
                Contato com a Liderança
              </h2>

              <div className="space-y-6">
                {/* Canal Email Oficial */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center shrink-0 text-primary">
                    <Icon name="mail" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-label-mono font-label-mono text-outline text-xs uppercase">
                      E-mail Oficial de Contato
                    </div>
                    <a
                      className="text-body-md font-body-md text-on-surface font-semibold hover:text-primary transition-colors block mt-0.5"
                      href="mailto:contato@givisiez.com.br"
                    >
                      contato@givisiez.com.br
                    </a>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Canal único para novos projetos de software, consultoria
                      técnica, mentoria de carreira e parcerias.
                    </p>
                  </div>
                </div>

                {/* Canal 100% Remoto */}
                <div className="flex items-start gap-4 pt-4 border-t border-outline-variant/20">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center shrink-0 text-tertiary">
                    <Icon name="public" className="w-5 h-5 text-tertiary" />
                  </div>
                  <div>
                    <div className="text-label-mono font-label-mono text-outline text-xs uppercase">
                      Atuação 100% Remota e Global
                    </div>
                    <div className="text-body-md font-body-md text-on-surface font-semibold mt-0.5">
                      Atendimento Digital Sem Fronteiras
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Atendemos empresas e profissionais em todo o Brasil e no
                      exterior com comunicação ágil, reuniões online e
                      documentação técnica transparente.
                    </p>
                  </div>
                </div>

                {/* Canal Liderança Técnica */}
                <div className="flex items-start gap-4 pt-4 border-t border-outline-variant/20">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center shrink-0 text-secondary">
                    <Icon name="person" className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-label-mono font-label-mono text-outline text-xs uppercase">
                      Corpo Diretivo
                    </div>
                    <div className="text-body-md font-body-md text-on-surface font-semibold mt-0.5">
                      Rafaela Marcolino &amp; Estêvão Marcolino
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Liderança sênior em engenharia de software e produto
                      avaliando pessoalmente cada oportunidade.
                    </p>
                  </div>
                </div>

                {/* Redes & Código Aberto da Empresa */}
                <div className="flex items-start gap-4 pt-4 border-t border-outline-variant/20">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center shrink-0 text-primary">
                    <Icon name="share" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-label-mono font-label-mono text-outline text-xs uppercase">
                      Redes &amp; Repositórios Oficiais
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 mt-2">
                      <a
                        href="https://www.linkedin.com/company/givisiez-engenharia-e-inovacao/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface hover:text-primary text-label-ui font-label-ui transition-colors group"
                      >
                        <Icon
                          name="linkedin"
                          className="w-4 h-4 text-primary"
                        />
                        <span>LinkedIn</span>
                        <Icon
                          name="north_east"
                          className="w-3 h-3 text-outline group-hover:text-primary transition-colors"
                        />
                      </a>
                      <a
                        href="https://github.com/givisiez-engenharia-e-inovacao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface hover:text-secondary text-label-ui font-label-ui transition-colors group"
                      >
                        <Icon name="code" className="w-4 h-4 text-secondary" />
                        <span>GitHub</span>
                        <Icon
                          name="north_east"
                          className="w-3 h-3 text-outline group-hover:text-secondary transition-colors"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Garantias & SLA Técnico */}
            <div className="glass-panel rounded-xl p-6 lg:p-8 border border-secondary-container/40">
              <div className="flex items-center gap-2 text-label-mono font-label-mono text-tertiary text-xs uppercase mb-3">
                <Icon name="verified" className="w-4 h-4 text-tertiary" />
                <span>Protocolo Institucional de Entrada</span>
              </div>

              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-3">
                Compromisso de Resposta em até 24h Úteis
              </h3>

              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Cada solicitação recebida é analisada com rigor técnico pela
                liderança da Givisiez. Não utilizamos filtros automáticos de
                vendas rasos.
              </p>

              <div className="bg-surface-container-lowest/90 rounded-lg p-4 border border-outline-variant/30 space-y-3">
                <div className="flex items-center gap-3">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-primary shrink-0"
                  />
                  <span className="text-body-sm font-body-sm text-on-surface font-medium">
                    Acordo de Confidencialidade (NDA) imediato
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-primary shrink-0"
                  />
                  <span className="text-body-sm font-body-sm text-on-surface font-medium">
                    Análise preliminar de viabilidade e arquitetura
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="check_circle"
                    className="w-4 h-4 text-primary shrink-0"
                  />
                  <span className="text-body-sm font-body-sm text-on-surface font-medium">
                    Sessão executiva técnica de alinhamento pré-agendada
                  </span>
                </div>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div className="glass-panel rounded-xl p-6 lg:p-8 border border-outline-variant/40">
              <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-2">
                <Icon name="insights" className="w-5 h-5 text-primary" />
                <span>Perguntas Frequentes</span>
              </h3>

              <div className="space-y-4 text-left">
                <details
                  className="group border-b border-outline-variant/20 pb-3"
                  open
                >
                  <summary className="flex justify-between items-center cursor-pointer text-body-md font-body-md font-semibold text-on-surface list-none">
                    <span>Como funciona o desenvolvimento de projetos?</span>
                    <Icon
                      name="expand_more"
                      className="w-4 h-4 text-outline group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Atuamos em todo o ciclo de produto: da concepção e UX/UI à
                    engenharia de software (Web e Mobile), testes automatizados
                    e deploy contínuo, garantindo autonomia completa para o
                    cliente.
                  </p>
                </details>

                <details className="group border-b border-outline-variant/20 pb-3">
                  <summary className="flex justify-between items-center cursor-pointer text-body-md font-body-md font-semibold text-on-surface list-none">
                    <span>Como é estruturada a consultoria em engenharia?</span>
                    <Icon
                      name="expand_more"
                      className="w-4 h-4 text-outline group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Realizamos auditorias de código e arquitetura,
                    reestruturação de esteiras de CI/CD, otimização de
                    performance e suporte a decisões críticas para CTOs e
                    gestores de tecnologia (como no trabalho com a Edvisor).
                  </p>
                </details>

                <details className="group border-b border-outline-variant/20 pb-3">
                  <summary className="flex justify-between items-center cursor-pointer text-body-md font-body-md font-semibold text-on-surface list-none">
                    <span>Qual o prazo padrão para início após o contato?</span>
                    <Icon
                      name="expand_more"
                      className="w-4 h-4 text-outline group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Retornamos seu contato em até 24h úteis para agendar a
                    primeira sessão técnica. O alinhamento de escopo e início
                    das entregas ocorre tipicamente em 3 a 5 dias úteis.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-body-md font-body-md font-semibold text-on-surface list-none">
                    <span>Como funciona a Mentoria de Carreira Tech?</span>
                    <Icon
                      name="expand_more"
                      className="w-4 h-4 text-outline group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Oferecemos direcionamento prático para profissionais em
                    transição ou crescimento na área de tecnologia, com roadmaps
                    personalizados, simulação de entrevistas e vivência em
                    projetos reais (iniciativa Mentoria JDM).
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Formulário Consultivo Especializado (7 cols) */}
          <div className="lg:col-span-7" id="diagnostico-form">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-primary/25 relative shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-outline-variant/25 gap-4">
                <div>
                  <span className="text-label-mono font-label-mono text-primary text-xs uppercase tracking-wider block mb-1">
                    Engenharia Consultiva &amp; Projetos
                  </span>
                  <h2 className="text-headline-md font-headline-md text-on-surface font-bold">
                    Formulário de Diagnóstico Técnico
                  </h2>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto bg-surface-container-highest px-3 py-1.5 rounded-lg border border-outline-variant/40">
                  <Icon name="security" className="w-4 h-4 text-[#10B981]" />
                  <span className="text-label-mono font-label-mono text-xs text-on-surface">
                    Canal Seguro
                  </span>
                </div>
              </div>

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Icon
                      name="check_circle"
                      className="w-8 h-8 text-emerald-400"
                    />
                  </div>
                  <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant max-w-md leading-relaxed">
                    Obrigado pelo contato,{' '}
                    <strong className="text-on-surface">
                      {formState.fullName}
                    </strong>
                    . Nossa liderança técnica analisará seu cenário com cuidado
                    e responderá pelo e-mail{' '}
                    <strong className="text-primary">{formState.email}</strong>{' '}
                    em até 24 horas úteis.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-primary text-label-ui font-label-ui transition-colors cursor-pointer"
                    >
                      Enviar nova mensagem
                    </button>
                    <Link
                      href="/projetos"
                      className="px-6 py-2.5 rounded-lg bg-primary-container hover:bg-secondary-container text-white text-label-ui font-label-ui transition-colors"
                    >
                      Explorar Projetos
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Linha 1: Nome Completo & Email Corporativo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-label-ui font-label-ui text-on-surface mb-2 font-medium"
                        htmlFor="fullName"
                      >
                        Nome Completo <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Icon
                          name="person"
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none"
                        />
                        <input
                          className="w-full bg-[#12111A]/90 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-[#6B7280] text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                          id="fullName"
                          name="fullName"
                          placeholder="Ex: Rafael Albuquerque"
                          required
                          type="text"
                          value={formState.fullName}
                          onChange={e =>
                            setFormState({
                              ...formState,
                              fullName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-label-ui font-label-ui text-on-surface mb-2 font-medium"
                        htmlFor="email"
                      >
                        E-mail de Contato{' '}
                        <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Icon
                          name="alternate_email"
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none"
                        />
                        <input
                          className="w-full bg-[#12111A]/90 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-[#6B7280] text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                          id="email"
                          name="email"
                          placeholder="seuemail@empresa.com.br"
                          required
                          type="email"
                          value={formState.email}
                          onChange={e =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Linha 2: Empresa & Cargo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-label-ui font-label-ui text-on-surface mb-2 font-medium"
                        htmlFor="company"
                      >
                        Empresa / Organização{' '}
                        <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Icon
                          name="hub"
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none"
                        />
                        <input
                          className="w-full bg-[#12111A]/90 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-[#6B7280] text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                          id="company"
                          name="company"
                          placeholder="Nome da empresa ou projeto"
                          required
                          type="text"
                          value={formState.company}
                          onChange={e =>
                            setFormState({
                              ...formState,
                              company: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-label-ui font-label-ui text-on-surface mb-2 font-medium"
                        htmlFor="roleTitle"
                      >
                        Cargo / Função <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Icon
                          name="token"
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none"
                        />
                        <input
                          className="w-full bg-[#12111A]/90 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-[#6B7280] text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                          id="roleTitle"
                          name="roleTitle"
                          placeholder="Ex: CTO, Fundador, Líder Técnico"
                          required
                          type="text"
                          value={formState.roleTitle}
                          onChange={e =>
                            setFormState({
                              ...formState,
                              roleTitle: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Linha 3: Tipo de Necessidade Estratégica */}
                  <div>
                    <label className="block text-label-ui font-label-ui text-on-surface mb-2.5 font-medium">
                      Tipo de Necessidade Estratégica{' '}
                      <span className="text-primary">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 hover:border-primary/50 cursor-pointer transition-all">
                        <input
                          checked={
                            formState.needType === 'consultoria_engenharia'
                          }
                          className="text-primary focus:ring-primary bg-surface-container border-outline"
                          name="needType"
                          type="radio"
                          value="consultoria_engenharia"
                          onChange={e =>
                            setFormState({
                              ...formState,
                              needType: e.target.value,
                            })
                          }
                        />
                        <span className="text-body-sm font-body-sm text-on-surface font-medium">
                          Consultoria em Engenharia de Software
                        </span>
                      </label>

                      <label className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 hover:border-primary/50 cursor-pointer transition-all">
                        <input
                          checked={
                            formState.needType === 'desenvolvimento_projeto'
                          }
                          className="text-primary focus:ring-primary bg-surface-container border-outline"
                          name="needType"
                          type="radio"
                          value="desenvolvimento_projeto"
                          onChange={e =>
                            setFormState({
                              ...formState,
                              needType: e.target.value,
                            })
                          }
                        />
                        <span className="text-body-sm font-body-sm text-on-surface font-medium">
                          Desenvolvimento de Projetos (Web &amp; Mobile)
                        </span>
                      </label>

                      <label className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 hover:border-primary/50 cursor-pointer transition-all">
                        <input
                          checked={
                            formState.needType === 'auditoria_performance'
                          }
                          className="text-primary focus:ring-primary bg-surface-container border-outline"
                          name="needType"
                          type="radio"
                          value="auditoria_performance"
                          onChange={e =>
                            setFormState({
                              ...formState,
                              needType: e.target.value,
                            })
                          }
                        />
                        <span className="text-body-sm font-body-sm text-on-surface font-medium">
                          Auditoria, Testes &amp; Performance
                        </span>
                      </label>

                      <label className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 hover:border-primary/50 cursor-pointer transition-all">
                        <input
                          checked={formState.needType === 'mentoria_carreira'}
                          className="text-primary focus:ring-primary bg-surface-container border-outline"
                          name="needType"
                          type="radio"
                          value="mentoria_carreira"
                          onChange={e =>
                            setFormState({
                              ...formState,
                              needType: e.target.value,
                            })
                          }
                        />
                        <span className="text-body-sm font-body-sm text-on-surface font-medium">
                          Mentoria de Carreira em Tecnologia
                        </span>
                      </label>

                      <label className="sm:col-span-2 flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 hover:border-primary/50 cursor-pointer transition-all">
                        <input
                          checked={formState.needType === 'parceria_produto'}
                          className="text-primary focus:ring-primary bg-surface-container border-outline"
                          name="needType"
                          type="radio"
                          value="parceria_produto"
                          onChange={e =>
                            setFormState({
                              ...formState,
                              needType: e.target.value,
                            })
                          }
                        />
                        <span className="text-body-sm font-body-sm text-on-surface font-medium">
                          Parceria Estratégica de Produto &amp; Squad Dedicado
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Linha 4: Faixa Orçamentária / Escopo Previsto */}
                  <div>
                    <label
                      className="block text-label-ui font-label-ui text-on-surface mb-2 font-medium"
                      htmlFor="budgetScope"
                    >
                      Faixa Orçamentária ou Escopo Previsto
                    </label>
                    <div className="relative">
                      <Icon
                        name="payments"
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none"
                      />
                      <select
                        className="w-full bg-[#12111A]/90 border border-white/10 rounded-lg pl-11 pr-10 py-3 text-white placeholder-[#6B7280] text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer"
                        id="budgetScope"
                        name="budgetScope"
                        value={formState.budgetScope}
                        onChange={e =>
                          setFormState({
                            ...formState,
                            budgetScope: e.target.value,
                          })
                        }
                      >
                        <option className="bg-[#1b1b1f]" value="">
                          Selecione a estimativa de escopo anual/projeto
                        </option>
                        <option className="bg-[#1b1b1f]" value="diagnostico">
                          Consultoria Pontual / Diagnóstico Técnico Inicial
                        </option>
                        <option className="bg-[#1b1b1f]" value="mvp">
                          Desenvolvimento de MVP / Produto Web &amp; Mobile
                        </option>
                        <option className="bg-[#1b1b1f]" value="estruturante">
                          Projeto Estruturante / Modernização de Plataforma
                        </option>
                        <option className="bg-[#1b1b1f]" value="mentoria">
                          Programa de Mentoria de Carreira Tech
                        </option>
                        <option className="bg-[#1b1b1f]" value="indefinido">
                          A definir em sessão técnica de discovery
                        </option>
                      </select>
                      <Icon
                        name="expand_more"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Linha 5: Descrição do Desafio */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label
                        className="text-label-ui font-label-ui text-on-surface font-medium"
                        htmlFor="technicalChallenge"
                      >
                        Descrição do Desafio ou Contexto Atual{' '}
                        <span className="text-primary">*</span>
                      </label>
                      <span className="text-label-mono font-label-mono text-outline text-xs">
                        Mínimo 20 caracteres
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-[#12111A]/90 border border-white/10 rounded-lg p-3.5 text-white placeholder-[#6B7280] text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                      id="technicalChallenge"
                      name="technicalChallenge"
                      placeholder="Conte sobre seu projeto, requisitos técnicos, stack pretendida (ex: React, Next.js, React Native, Node.js, AWS), metas de prazo ou desafio de carreira..."
                      required
                      minLength={20}
                      rows={4}
                      value={formState.technicalChallenge}
                      onChange={e =>
                        setFormState({
                          ...formState,
                          technicalChallenge: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Checkbox NDA & Privacidade */}
                  <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3">
                    <input
                      checked={formState.ndaRequest}
                      className="mt-1 text-primary focus:ring-primary bg-surface-container border-outline rounded cursor-pointer"
                      id="ndaRequest"
                      name="ndaRequest"
                      type="checkbox"
                      onChange={e =>
                        setFormState({
                          ...formState,
                          ndaRequest: e.target.checked,
                        })
                      }
                    />
                    <label
                      className="text-body-sm font-body-sm text-on-surface-variant cursor-pointer"
                      htmlFor="ndaRequest"
                    >
                      Solicito o envio prévio de minuta de{' '}
                      <strong className="text-on-surface font-semibold">
                        NDA (Non-Disclosure Agreement)
                      </strong>{' '}
                      bilateral antes de qualquer compartilhamento de
                      repositórios ou arquitetura interna.
                    </label>
                  </div>

                  {/* Botão de Envio Proeminente */}
                  <div>
                    <button
                      className="w-full primary-btn-glow text-white py-4 px-8 rounded-lg font-headline-sm text-headline-sm font-semibold tracking-wide border border-primary/40 flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                      type="submit"
                      disabled={status === 'loading'}
                    >
                      <span>
                        {status === 'loading'
                          ? 'Enviando Solicitação...'
                          : 'Solicitar Diagnóstico Técnico'}
                      </span>
                      <Icon
                        name="arrow_forward"
                        className="w-5 h-5 text-white"
                      />
                    </button>
                  </div>

                  {/* Badges de Segurança LGPD */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left text-outline text-label-mono font-label-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <Icon name="lock" className="w-4 h-4 text-[#10B981]" />
                      <span>Criptografia TLS 1.3</span>
                    </div>
                    <span className="hidden sm:inline text-outline-variant">
                      •
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Icon
                        name="verified_user"
                        className="w-4 h-4 text-primary"
                      />
                      <span>100% LGPD Compliant</span>
                    </div>
                    <span className="hidden sm:inline text-outline-variant">
                      •
                    </span>
                    <div>Sem compartilhamento com terceiros</div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SECTION: METODOLOGIA DE DIAGNÓSTICO */}
        <section className="mt-20 pt-16 border-t border-outline-variant/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-label-mono font-label-mono text-primary text-xs uppercase tracking-wider">
              Rigor e Método
            </span>
            <h3 className="text-headline-lg font-headline-lg text-on-surface mt-1">
              Como estruturamos seu diagnóstico
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl relative border border-outline-variant/30">
              <div className="text-display-hero text-primary/10 font-bold absolute right-4 top-2 select-none pointer-events-none">
                01
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-4">
                <Icon name="hub" className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Mapeamento &amp; Discovery
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Entendimento profundo das metas de negócio, escopo de produto,
                topologia técnica atual e requisitos de escalabilidade.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl relative border border-outline-variant/30">
              <div className="text-display-hero text-primary/10 font-bold absolute right-4 top-2 select-none pointer-events-none">
                02
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-secondary mb-4">
                <Icon name="insights" className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Relatório Técnico &amp; Arquitetural
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Desenho de arquitetura sugerida, seleção de tecnologias
                recomendadas, estimativas de prazo e roadmap priorizado por
                valor.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl relative border border-outline-variant/30">
              <div className="text-display-hero text-primary/10 font-bold absolute right-4 top-2 select-none pointer-events-none">
                03
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-tertiary mb-4">
                <Icon name="rocket_launch" className="w-5 h-5 text-tertiary" />
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Proposta de Execução &amp; Parceria
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Definição do modelo de trabalho customizado: Consultoria
                Estratégica, Desenvolvimento Full-Cycle de Produto ou Mentoria
                de Carreira.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Main Global Footer */}
      <Footer />
    </div>
  );
}
