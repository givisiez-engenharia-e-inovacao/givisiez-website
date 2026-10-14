import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Icon from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Givisiez - Engenharia e Inovação',
  description:
    'Política de Privacidade e Proteção de Dados da Givisiez - Engenharia e Inovação. Transparência e conformidade rigorosa com a LGPD (Lei nº 13.709/2018).',
  openGraph: {
    title: 'Política de Privacidade | Givisiez - Engenharia e Inovação',
    description:
      'Transparência, segurança e conformidade com a Lei Geral de Proteção de Dados (LGPD).',
    url: 'https://givisiez.com.br/privacidade',
    siteName: 'Givisiez - Engenharia e Inovação',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function PrivacidadePage() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col relative overflow-x-hidden origami-mesh">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary-container/15 blur-[140px] pointer-events-none -z-10" />

      {/* Main Global Navigation */}
      <Header />

      <main className="flex-grow w-full max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        {/* Header da Política */}
        <div className="mb-12 border-b border-outline-variant/30 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/20 border border-primary/30 text-primary text-label-mono font-label-mono mb-4 text-xs">
            <Icon name="security" className="w-4 h-4 text-primary" />
            <span>GOVERNANÇA &amp; PROTEÇÃO DE DADOS</span>
          </div>

          <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface tracking-tight mb-4">
            Política de Privacidade
          </h1>

          <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
            A <strong>Givisiez - Engenharia e Inovação</strong> preza pela
            privacidade, transparência e segurança de todos os clientes,
            parceiros, mentorados e visitantes de nossa plataforma digital. Esta
            política descreve como tratamos e protegemos seus dados pessoais em
            estrita conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei
            nº 13.709/2018).
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-label-mono font-label-mono text-xs text-outline">
            <span>Última atualização: Março de 2026</span>
            <span>•</span>
            <span>Canal do Encarregado (DPO): contato@givisiez.com.br</span>
          </div>
        </div>

        {/* Conteúdo Institucional da Política */}
        <div className="space-y-12">
          {/* Seção 1 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                01.
              </span>
              <span>Identificação do Controlador de Dados</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                O controlador dos dados pessoais coletados por meio deste
                website e dos canais oficiais da empresa é a{' '}
                <strong className="text-on-surface">
                  Givisiez - Engenharia e Inovação
                </strong>
                , consultoria especializada em desenvolvimento de projetos de
                software e mentoria de carreira em tecnologia.
              </p>
              <p>
                Para quaisquer solicitações, dúvidas ou exercício de direitos
                relacionados aos seus dados pessoais, você pode entrar em
                contato diretamente pelo canal oficial:{' '}
                <a
                  href="mailto:contato@givisiez.com.br"
                  className="text-primary hover:text-secondary underline transition-colors"
                >
                  contato@givisiez.com.br
                </a>
                .
              </p>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                02.
              </span>
              <span>Dados Pessoais Coletados e Finalidades</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-4">
              <p>
                Coletamos apenas os dados estritamente necessários para
                viabilizar nossos serviços, atendimentos e relacionamento:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/30">
                  <h3 className="text-body-md font-bold text-on-surface mb-2">
                    Dados Fornecidos Voluntariamente
                  </h3>
                  <p className="text-body-sm text-on-surface-variant">
                    Nome completo, endereço de e-mail, empresa/organização,
                    cargo e detalhes do desafio técnico enviados via formulários
                    ou mensagens de contato para elaboração de diagnósticos,
                    orçamentos ou programas de mentoria.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/30">
                  <h3 className="text-body-md font-bold text-on-surface mb-2">
                    Dados Técnicos de Navegação
                  </h3>
                  <p className="text-body-sm text-on-surface-variant">
                    Informações técnicas como endereço IP anonimizado, tipo de
                    navegador, páginas visitadas e tempos de resposta,
                    utilizados exclusivamente para monitoramento de segurança,
                    prevenção contra ataques e otimização de performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                03.
              </span>
              <span>Bases Legais para Tratamento (Art. 7º da LGPD)</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Todo e qualquer tratamento de dados pessoais realizado pela
                Givisiez é respaldado por hipóteses legais autorizadoras, em
                especial:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-on-surface">
                    Procedimentos preliminares a pedido do titular:
                  </strong>{' '}
                  para analisar solicitações de projetos, propostas técnicas e
                  entrevistas de mentoria.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Execução de contrato:
                  </strong>{' '}
                  para cumprimento das obrigações assumidas na prestação de
                  serviços de desenvolvimento, consultoria ou mentoria.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Legítimo interesse do controlador:
                  </strong>{' '}
                  para suporte ao cliente, melhorias contínuas e segurança das
                  aplicações.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Cumprimento de obrigação legal ou regulatória:
                  </strong>{' '}
                  quando determinado pela legislação brasileira aplicável.
                </li>
              </ul>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                04.
              </span>
              <span>Compartilhamento e Não Comercialização</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                <strong className="text-on-surface">
                  A Givisiez não comercializa, não aluga e não repassa dados
                  pessoais
                </strong>{' '}
                a terceiros para fins publicitários ou de monetização.
              </p>
              <p>
                O compartilhamento ocorre unicamente com provedores de
                infraestrutura de tecnologia indispensáveis à operação (como
                servidores de hospedagem em nuvem e ferramentas de comunicação),
                os quais mantêm padrões rigorosos de segurança e criptografia de
                nível corporativo.
              </p>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                05.
              </span>
              <span>Segurança da Informação &amp; Sigilo (NDA)</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger dados pessoais contra acessos não autorizados,
                destruição, perda ou alteração ilícita.
              </p>
              <p>
                Toda a comunicação no site é criptografada via protocolo{' '}
                <strong className="text-on-surface">TLS 1.3 (HTTPS)</strong>. Em
                projetos de consultoria e engenharia, disponibilizamos
                rotineiramente minutas de{' '}
                <strong className="text-on-surface">
                  Acordo de Confidencialidade (NDA)
                </strong>{' '}
                bilateral antes da troca de quaisquer detalhes arquiteturais ou
                códigos proprietários.
              </p>
            </div>
          </section>

          {/* Seção 6 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                06.
              </span>
              <span>Direitos dos Titulares de Dados (Art. 18 da LGPD)</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Você, na condição de titular de dados pessoais, tem o direito de
                requisitar a qualquer momento:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Confirmação da existência de tratamento de seus dados;</li>
                <li>Acesso facilitado aos dados tratados;</li>
                <li>
                  Correção de dados incompletos, inexatos ou desatualizados;
                </li>
                <li>
                  Anonimização, bloqueio ou eliminação de dados desnecessários
                  ou excessivos;
                </li>
                <li>Revogação do consentimento previamente concedido;</li>
                <li>
                  Eliminação dos dados pessoais tratados mediante consentimento.
                </li>
              </ul>
              <p className="pt-2">
                Para exercer qualquer um desses direitos, basta enviar uma
                mensagem simples para:{' '}
                <a
                  href="mailto:contato@givisiez.com.br"
                  className="text-primary hover:text-secondary underline transition-colors"
                >
                  contato@givisiez.com.br
                </a>
                .
              </p>
            </div>
          </section>

          {/* Seção 7 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                07.
              </span>
              <span>Retenção e Descarte Seguro</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Os dados pessoais coletados serão mantidos pelo tempo
                estritamente necessário para cumprir as finalidades descritas
                nesta política, ou enquanto houver relação contratual ativa
                entre as partes.
              </p>
              <p>
                Após o encerramento da finalidade, os dados serão eliminados ou
                anonimizados, ressalvadas as hipóteses de guarda obrigatória por
                prazo legal fixado em lei.
              </p>
            </div>
          </section>

          {/* Seção 8 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                08.
              </span>
              <span>Alterações nesta Política de Privacidade</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente
                para refletir aprimoramentos técnicos ou mudanças regulatórias.
                A versão mais recente sempre estará publicada nesta página com a
                respectiva data de revisão.
              </p>
            </div>
          </section>
        </div>

        {/* CTA Voltar / Contato */}
        <div className="mt-16 text-center border-t border-outline-variant/20 pt-10">
          <p className="text-body-md text-on-surface-variant mb-6">
            Dúvidas ou solicitações sobre o tratamento dos seus dados pessoais?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contato"
              className="primary-btn-glow px-6 py-3 rounded-xl text-white font-label-ui text-body-md font-semibold inline-flex items-center gap-2"
            >
              <span>Falar com Nossos Especialistas</span>
              <Icon name="arrow_forward" className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-ui text-body-md font-semibold hover:border-primary/50 transition-colors"
            >
              Voltar para o Início
            </Link>
          </div>
        </div>
      </main>

      {/* Main Global Footer */}
      <Footer />
    </div>
  );
}
