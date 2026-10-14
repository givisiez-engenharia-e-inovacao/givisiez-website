'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    empresa: '',
    tipoProjeto: 'consultoria',
    mensagem: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormState({
      nome: '',
      email: '',
      empresa: '',
      tipoProjeto: 'consultoria',
      mensagem: '',
    });
    setStatus('idle');
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 w-full" id="contato">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5">
          <span className="text-label-mono font-label-mono text-primary uppercase tracking-wider block mb-2">
            Engenharia Sob Medida
          </span>
          <h2 className="text-headline-xl font-headline-xl text-on-surface font-bold tracking-tight mb-6">
            Vamos desenhar a solução ideal para sua empresa
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-8">
            Compartilhe o desafio do seu ecossistema técnico. Nossos
            especialistas e arquitetos principais analisarão seus requisitos com
            total confidencialidade e rigor técnico.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
                <Icon name="schedule" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-label-ui font-label-ui text-on-surface font-semibold">
                  Resposta em até 24h úteis
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Contato direto com um arquiteto sênior responsável.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
                <Icon name="lock" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-label-ui font-label-ui text-on-surface font-semibold">
                  NDA &amp; Proteção de Dados
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Assinatura de acordo de confidencialidade antes do discovery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
                <Icon name="mail" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-label-ui font-label-ui text-on-surface font-semibold">
                  Canal Direto
                </h4>
                <a
                  href="mailto:contato@givisiez.com.br"
                  className="text-body-sm font-body-sm text-on-surface-variant hover:text-primary transition-colors block"
                >
                  contato@givisiez.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-secondary shrink-0">
                <Icon name="share" className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="text-label-ui font-label-ui text-on-surface font-semibold">
                  Redes &amp; Repositórios
                </h4>
                <div className="flex items-center gap-3 mt-1 text-body-sm font-body-sm">
                  <a
                    href="https://www.linkedin.com/company/givisiez-engenharia-e-inovacao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <Icon name="linkedin" className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-outline-variant">•</span>
                  <a
                    href="https://github.com/givisiez-engenharia-e-inovacao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-secondary transition-colors inline-flex items-center gap-1"
                  >
                    <Icon name="code" className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-2xl border border-outline-variant/60 p-8 md:p-10 shadow-2xl relative">
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
              <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
                Obrigado pelo contato,{' '}
                <strong className="text-on-surface">{formState.nome}</strong>.
                Nossa equipe de engenharia analisará o cenário da{' '}
                <strong className="text-on-surface">{formState.empresa}</strong>{' '}
                e retornará em até 24 horas úteis.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-primary text-label-ui font-label-ui transition-colors cursor-pointer"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome Completo */}
                <div>
                  <label
                    className="block text-label-ui font-label-ui text-on-surface mb-2"
                    htmlFor="nome"
                  >
                    Nome Completo *
                  </label>
                  <input
                    className="w-full bg-surface-container-highest/50 border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    id="nome"
                    placeholder="Ex: Carlos Eduardo"
                    required
                    type="text"
                    value={formState.nome}
                    onChange={e =>
                      setFormState({ ...formState, nome: e.target.value })
                    }
                  />
                </div>

                {/* E-mail Corporativo */}
                <div>
                  <label
                    className="block text-label-ui font-label-ui text-on-surface mb-2"
                    htmlFor="email"
                  >
                    E-mail Corporativo *
                  </label>
                  <input
                    className="w-full bg-surface-container-highest/50 border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    id="email"
                    placeholder="carlos@empresa.com.br"
                    required
                    type="email"
                    value={formState.email}
                    onChange={e =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Empresa */}
                <div>
                  <label
                    className="block text-label-ui font-label-ui text-on-surface mb-2"
                    htmlFor="empresa"
                  >
                    Empresa *
                  </label>
                  <input
                    className="w-full bg-surface-container-highest/50 border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    id="empresa"
                    placeholder="Nome da sua organização"
                    required
                    type="text"
                    value={formState.empresa}
                    onChange={e =>
                      setFormState({ ...formState, empresa: e.target.value })
                    }
                  />
                </div>

                {/* Tipo de Projeto */}
                <div>
                  <label
                    className="block text-label-ui font-label-ui text-on-surface mb-2"
                    htmlFor="tipo_projeto"
                  >
                    Tipo de Projeto *
                  </label>
                  <select
                    className="w-full bg-surface-container-highest/50 border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    id="tipo_projeto"
                    value={formState.tipoProjeto}
                    onChange={e =>
                      setFormState({
                        ...formState,
                        tipoProjeto: e.target.value,
                      })
                    }
                  >
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="consultoria"
                    >
                      Consultoria em Engenharia de Software
                    </option>
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="mobile"
                    >
                      Desenvolvimento de Aplicativos Mobile (iOS &amp; Android)
                    </option>
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="web"
                    >
                      Desenvolvimento de Plataformas Web &amp; Fullstack
                    </option>
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="health"
                    >
                      Soluções de Tecnologia para Saúde (Healthtech)
                    </option>
                    <option
                      className="bg-surface-container-high text-on-surface"
                      value="outros"
                    >
                      Outro Desafio de Engenharia de Software
                    </option>
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  className="block text-label-ui font-label-ui text-on-surface mb-2"
                  htmlFor="mensagem"
                >
                  Mensagem / Desafio Técnico *
                </label>
                <textarea
                  className="w-full bg-surface-container-highest/50 border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                  id="mensagem"
                  placeholder="Descreva brevemente o contexto da aplicação, volume de dados e objetivos..."
                  required
                  rows={4}
                  value={formState.mensagem}
                  onChange={e =>
                    setFormState({ ...formState, mensagem: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Botão de Envio Proeminente #6A0DAD */}
              <button
                className="w-full py-4 rounded-lg bg-primary-container hover:bg-secondary-container text-white font-label-ui text-label-ui font-bold border border-primary/40 shadow-[0_0_25px_rgba(106,13,173,0.5)] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                type="submit"
                disabled={status === 'loading'}
              >
                <span>
                  {status === 'loading'
                    ? 'Enviando...'
                    : 'Enviar Solicitação de Diagnóstico'}
                </span>
                <Icon name="send" className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant font-label-mono">
                <Icon
                  name="verified_user"
                  className="w-3.5 h-3.5 text-tertiary"
                />
                <span>
                  Seus dados são confidenciais e protegidos sob a LGPD.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
