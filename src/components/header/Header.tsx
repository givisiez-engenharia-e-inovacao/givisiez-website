'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/Icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isProjetos = pathname.startsWith('/projetos');
  const isMentoria = pathname.startsWith('/mentoria');
  const isSobre = pathname.startsWith('/sobre-nos');
  const isContato = pathname.startsWith('/contato');

  return (
    <header className="bg-surface/80 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm border-b border-outline-variant/40">
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo / Product Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center transition-all duration-200 group-hover:border-primary group-hover:shadow-[0_0_12px_rgba(106,13,173,0.3)] overflow-hidden p-1.5">
            <Image
              src="/images/logo-icon.png"
              alt="Givisiez Origami Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-headline-sm font-headline-sm font-bold tracking-tight text-on-surface">
            Givisiez - Engenharia e Inovação
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-label-ui font-label-ui transition-colors pb-1 ${
              isHome
                ? 'text-primary font-semibold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Home
          </Link>
          <Link
            href="/projetos"
            className={`text-label-ui font-label-ui transition-colors pb-1 ${
              isProjetos
                ? 'text-primary font-semibold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Projetos
          </Link>
          <Link
            href="/mentoria"
            className={`text-label-ui font-label-ui transition-colors pb-1 ${
              isMentoria
                ? 'text-primary font-semibold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Mentoria
          </Link>
          <Link
            href="/sobre-nos"
            className={`text-label-ui font-label-ui transition-colors pb-1 ${
              isSobre
                ? 'text-primary font-semibold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Sobre Nós
          </Link>
          <Link
            href="/contato"
            className={`text-label-ui font-label-ui transition-colors pb-1 ${
              isContato
                ? 'text-primary font-semibold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* Trailing Primary Action */}
        <div className="flex items-center gap-4">
          <Link
            href="/contato"
            className="hidden sm:inline-flex items-center justify-center bg-primary-container hover:bg-secondary-container text-white px-5 py-2.5 rounded-lg text-label-ui font-label-ui border border-primary/40 shadow-sm hover:shadow-[0_0_16px_rgba(106,13,173,0.4)] active:scale-95 transition-all duration-150"
          >
            Iniciar Projeto
          </Link>

          {/* Mobile Nav Trigger */}
          <button
            aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
            className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-2 cursor-pointer"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon
              name={mobileMenuOpen ? 'close' : 'menu'}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-b border-outline-variant/40 px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-label-ui font-label-ui border-b border-outline-variant/20 ${
                isHome
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Home
            </Link>
            <Link
              href="/projetos"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-label-ui font-label-ui border-b border-outline-variant/20 transition-colors ${
                isProjetos
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Projetos
            </Link>
            <Link
              href="/mentoria"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-label-ui font-label-ui border-b border-outline-variant/20 transition-colors ${
                isMentoria
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Mentoria
            </Link>
            <Link
              href="/sobre-nos"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-label-ui font-label-ui border-b border-outline-variant/20 transition-colors ${
                isSobre
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Sobre Nós
            </Link>
            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-label-ui font-label-ui border-b border-outline-variant/20 transition-colors ${
                isContato
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Contato
            </Link>
            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center bg-primary-container hover:bg-secondary-container text-white px-5 py-3 rounded-lg text-label-ui font-label-ui border border-primary/40 shadow-sm mt-2 text-center"
            >
              Iniciar Projeto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
