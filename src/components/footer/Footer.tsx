import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full p-8 shadow-md bottom-0 bg-white text-gray-500">
      <div className="flex flex-row gap-4 justify-between w-full max-w-3xl">
        <Link
          className="hover:text-blue-600 transition-colors"
          href="/servicos"
        >
          Serviços
        </Link>
        <Link
          className="hover:text-blue-600 transition-colors"
          href="/projetos"
        >
          Projetos
        </Link>
        <Link
          className="hover:text-blue-600 transition-colors"
          href="/sobre-nos"
        >
          Sobre nós
        </Link>
        <Link className="hover:text-blue-600 transition-colors" href="/contato">
          Contato
        </Link>
      </div>
      <p className="mt-4">
        @2025 Givisiez - Engenharia e Inovação. Todos os direitos reservados.
      </p>
    </footer>
  );
}
