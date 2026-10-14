import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest full-width border-t border-outline-variant/30 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline-variant/20">
          {/* Footer Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center p-1.5">
                <Image
                  src="/images/logo-icon.png"
                  alt="Givisiez Origami Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-headline-md font-headline-md font-bold text-on-surface">
                Givisiez - Engenharia e Inovação
              </div>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              Consultoria de software avançado, arquitetura em nuvem e
              engenharia de precisão para desafios corporativos de alta demanda.
            </p>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <a
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors duration-150 p-2 bg-surface-container-low rounded-lg border border-outline-variant/30 hover:border-primary/50 flex items-center justify-center"
                href="https://www.linkedin.com/company/givisiez-engenharia-e-inovacao/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="linkedin" className="w-4 h-4" />
              </a>
              <a
                aria-label="GitHub"
                className="hover:text-primary transition-colors duration-150 p-2 bg-surface-container-low rounded-lg border border-outline-variant/30 hover:border-primary/50 flex items-center justify-center"
                href="https://github.com/givisiez-engenharia-e-inovacao"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="code" className="w-4 h-4" />
              </a>
              <a
                aria-label="E-mail"
                className="hover:text-primary transition-colors duration-150 p-2 bg-surface-container-low rounded-lg border border-outline-variant/30 hover:border-primary/50 flex items-center justify-center"
                href="mailto:contato@givisiez.com.br"
              >
                <Icon name="alternate_email" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-label-mono font-label-mono text-primary text-xs uppercase mb-4 tracking-wider">
                Serviços
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-on-surface-variant hover:text-primary text-body-sm font-body-sm transition-colors duration-150"
                    href="/projetos"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-on-surface-variant hover:text-primary text-body-sm font-body-sm transition-colors duration-150"
                    href="/mentoria"
                  >
                    Mentoria
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-label-mono font-label-mono text-primary text-xs uppercase mb-4 tracking-wider">
                Institucional
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-on-surface-variant hover:text-primary text-body-sm font-body-sm transition-colors duration-150"
                    href="/sobre-nos"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-on-surface-variant hover:text-primary text-body-sm font-body-sm transition-colors duration-150"
                    href="/contato"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-label-mono font-label-mono text-primary text-xs uppercase mb-4 tracking-wider">
                Governança
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-on-surface-variant hover:text-primary text-body-sm font-body-sm transition-colors duration-150"
                    href="/termos-de-uso"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-on-surface-variant hover:text-primary text-body-sm font-body-sm transition-colors duration-150"
                    href="/privacidade"
                  >
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-body-sm font-body-sm text-on-surface-variant">
            © 2026 Givisiez - Engenharia e Inovação. Todos os direitos
            reservados.
          </div>
          <div className="text-label-mono font-label-mono text-xs text-on-surface-variant">
            Operação 100% Remota • Atendimento Nacional e Internacional
          </div>
        </div>
      </div>
    </footer>
  );
}
