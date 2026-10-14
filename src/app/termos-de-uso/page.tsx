import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Icon from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'Termos de Uso | Givisiez - Engenharia e Inovação',
  description:
    'Termos e Condições Gerais de Uso do website institucional e contratação de serviços da Givisiez - Engenharia e Inovação.',
  openGraph: {
    title: 'Termos de Uso | Givisiez - Engenharia e Inovação',
    description:
      'Termos e Condições Gerais de Uso para projetos de tecnologia, consultoria e mentoria.',
    url: 'https://givisiez.com.br/termos-de-uso',
    siteName: 'Givisiez - Engenharia e Inovação',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function TermosDeUsoPage() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col relative overflow-x-hidden origami-mesh">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary-container/15 blur-[140px] pointer-events-none -z-10" />

      {/* Main Global Navigation */}
      <Header />

      <main className="flex-grow w-full max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        {/* Header dos Termos */}
        <div className="mb-12 border-b border-outline-variant/30 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/20 border border-primary/30 text-primary text-label-mono font-label-mono mb-4 text-xs">
            <Icon name="token" className="w-4 h-4 text-primary" />
            <span>CONDIÇÕES GERAIS DE USO</span>
          </div>

          <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl font-bold text-on-surface tracking-tight mb-4">
            Termos de Uso
          </h1>

          <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
            Bem-vindo ao website da{' '}
            <strong className="text-on-surface">
              Givisiez - Engenharia e Inovação
            </strong>
            . Estes Termos de Uso regulam o acesso e a utilização dos nossos
            canais institucionais, solicitação de diagnósticos técnicos e
            diretrizes gerais de relacionamento.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-label-mono font-label-mono text-xs text-outline">
            <span>Última atualização: Março de 2026</span>
            <span>•</span>
            <span>Contato Jurídico: contato@givisiez.com.br</span>
          </div>
        </div>

        {/* Conteúdo Institucional dos Termos */}
        <div className="space-y-12">
          {/* Cláusula 1 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                01.
              </span>
              <span>Aceite dos Termos</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Ao navegar, utilizar ou enviar informações por meio deste
                website, você declara ter lido, compreendido e aceito
                integralmente estes Termos de Uso e nossa{' '}
                <Link
                  href="/privacidade"
                  className="text-primary hover:text-secondary underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
              <p>
                Caso discorde de qualquer disposição contida nestes documentos,
                recomendamos que cesse imediatamente a navegação no website.
              </p>
            </div>
          </section>

          {/* Cláusula 2 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                02.
              </span>
              <span>Objeto e Escopo dos Serviços</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-4">
              <p>
                A Givisiez atua como consultoria e boutique técnica com foco nas
                seguintes frentes:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-on-surface">
                    Consultoria em Engenharia de Software:
                  </strong>{' '}
                  diagnóstico arquitetural, auditoria de código, infraestrutura
                  em nuvem e automação de esteiras de CI/CD.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Desenvolvimento de Projetos Digitais:
                  </strong>{' '}
                  construção completa de aplicações web e aplicativos mobile sob
                  medida.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Mentoria de Carreira em Tecnologia:
                  </strong>{' '}
                  programas de aceleração técnica, capacitação prática e
                  orientação profissional individualizada.
                </li>
              </ul>
            </div>
          </section>

          {/* Cláusula 3 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                03.
              </span>
              <span>Propriedade Intelectual e Direitos Autorais</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Todos os elementos visuais, código-fonte, marcas registradas,
                logotipos, arquitetura gráfica, textos e componentes contidos
                neste website são de titularidade exclusiva da{' '}
                <strong className="text-on-surface">
                  Givisiez - Engenharia e Inovação
                </strong>{' '}
                ou devidamente licenciados por parceiros.
              </p>
              <p>
                É expressamente proibida a cópia, reprodução, engenharia
                reversa, modificação ou redistribuição, total ou parcial, de
                qualquer conteúdo sem autorização formal prévia por escrito.
              </p>
            </div>
          </section>

          {/* Cláusula 4 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                04.
              </span>
              <span>Solicitação de Diagnóstico e Contratações</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                O preenchimento e envio de formulários através do site
                constituem apenas uma solicitação inicial de diagnóstico técnico
                e alinhamento de escopo,{' '}
                <strong className="text-on-surface">
                  não configurando contratação automática de serviços
                </strong>
                .
              </p>
              <p>
                A efetiva prestação de serviços de consultoria, desenvolvimento
                ou mentoria será formalizada por meio de propostas comerciais
                detalhadas, contratos específicos de prestação de serviços e,
                quando cabível, Acordo de Confidencialidade (NDA) mútuo.
              </p>
            </div>
          </section>

          {/* Cláusula 5 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                05.
              </span>
              <span>Uso Adequado e Responsabilidade do Usuário</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                O usuário concorda em utilizar a plataforma de forma ética,
                comprometendo-se a:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Fornecer informações verdadeiras e atualizadas nos canais de
                  contato;
                </li>
                <li>
                  Não tentar burlar mecanismos de segurança ou autenticação do
                  sistema;
                </li>
                <li>
                  Não disseminar vírus, scripts maliciosos ou práticas de ataque
                  (DDoS, injection, etc.);
                </li>
                <li>
                  Não utilizar nossos canais para o envio de comunicações em
                  massa não autorizadas (SPAM).
                </li>
              </ul>
            </div>
          </section>

          {/* Cláusula 6 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                06.
              </span>
              <span>Limitação de Responsabilidade</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                A Givisiez emprega os mais elevados padrões de engenharia para
                garantir a estabilidade e a precisão das informações
                disponibilizadas. No entanto, não nos responsabilizamos por
                interrupções momentâneas decorrentes de instabilidades de
                provedores de telecomunicações, ataques cibernéticos em massa ou
                motivos de força maior.
              </p>
            </div>
          </section>

          {/* Cláusula 7 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                07.
              </span>
              <span>Links para Serviços e Plataformas Externas</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Nosso website pode conter links para serviços externos (como
                perfis no LinkedIn, repositórios no GitHub ou lojas de
                aplicativos como Google Play e App Store). A Givisiez não possui
                ingerência sobre as políticas e práticas de privacidade dessas
                plataformas terceiras.
              </p>
            </div>
          </section>

          {/* Cláusula 8 */}
          <section className="glass-panel p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-3">
              <span className="text-primary text-label-mono font-label-mono text-sm">
                08.
              </span>
              <span>Legislação Aplicável e Foro</span>
            </h2>
            <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Estes Termos de Uso são regidos e interpretados de acordo com as
                leis da República Federativa do Brasil, em especial o Marco
                Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção
                de Dados (Lei nº 13.709/2018).
              </p>
              <p>
                Para dirimir eventuais litígios decorrentes destes termos, fica
                eleito o foro da comarca da sede administrativa da empresa no
                Brasil, com renúncia expressa a qualquer outro, por mais
                privilegiado que seja.
              </p>
            </div>
          </section>
        </div>

        {/* CTA Voltar / Contato */}
        <div className="mt-16 text-center border-t border-outline-variant/20 pt-10">
          <p className="text-body-md text-on-surface-variant mb-6">
            Tem dúvidas sobre nossos termos ou deseja iniciar uma parceria
            técnica?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contato"
              className="primary-btn-glow px-6 py-3 rounded-xl text-white font-label-ui text-body-md font-semibold inline-flex items-center gap-2"
            >
              <span>Falar com Especialistas</span>
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
