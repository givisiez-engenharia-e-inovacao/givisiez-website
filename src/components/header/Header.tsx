import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-4 py-2 shadow-md top-0 sticky z-50 bg-white">
      <Image
        src="/images/Logo-horizontal.png"
        alt="Logo"
        width={100}
        height={100}
      />
      <nav className="flex space-x-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link
          href="/projetos"
          className="hover:text-blue-600 transition-colors"
        >
          Projetos
        </Link>
        <Link href="/contato" className="hover:text-blue-600 transition-colors">
          Contato
        </Link>
      </nav>
    </header>
  );
}
