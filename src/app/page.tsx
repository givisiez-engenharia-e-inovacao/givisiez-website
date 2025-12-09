import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ProjectList } from '@/components/project/project-list/ProjectList';
import { projectsContent } from '@/components/project/projects.data';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto">
        <section className="w-full max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-center pt-8">
            Engenharia e Inovação para o seu negócio
          </h1>
          <p className="text-center py-4 text-gray-500 text-lg">
            Transforme sua ideia em realidade com a nossa equipe de engenheiros
            e inovadores
          </p>
        </section>
        <section className="bg-gray-100 p-4 items-center justify-center flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Projetos em destaque</h2>
          <ProjectList projects={projectsContent.slice(0, 3)} />
          <Link href="/projetos">
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Ver todos os projetos
            </button>
          </Link>
        </section>
        <section className="p-4 items-center justify-center flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Nossos clientes</h2>
          <p className="text-gray-500">
            Nossos clientes são empresas que confiam em nossa equipe para
            desenvolver seus projetos.
          </p>
          <div className="flex flex-row gap-4">
            <Image
              src="/images/clients/edvisor-newlogo.svg"
              alt="Cliente Edvisor"
              width={100}
              height={100}
            />
            <Image
              src="/images/clients/sensakids-logo.jpeg"
              alt="Cliente SensaKids"
              width={100}
              height={100}
            />
            <Image
              src="/images/clients/buy-energy-logo.png"
              alt="Cliente Buy Energy"
              width={100}
              height={100}
            />
            <Image
              src="/images/clients/personal-and-training-logo.png"
              alt="Cliente Personal and Training"
              className="w-[80px] h-[40px] my-8"
              width={80}
              height={40}
            />
            <Image
              src="/images/clients/eliane-turra-logo.png"
              className="w-[80px] h-[40px] my-8"
              alt="Cliente Eliane Turra"
              width={80}
              height={40}
            />
            <Image
              src="/images/clients/penna-vargas-logo.png"
              className="w-[100px] h-[20px] my-10"
              alt="Cliente Penna e Vargas"
              width={100}
              height={20}
            />
          </div>
        </section>
        <section className="bg-gray-100 p-4">
          <div className="w-full max-w-7xl mx-auto flex flex-row gap-4 items-center justify-center">
            <Image
              src="/images/jdm.jpeg"
              alt="Mentoria JDM: Jornada do Mentor"
              width={500}
              height={500}
            />
            <div>
              <h2 className="text-2xl font-bold">
                Mentoria JDM: Jornada do Mentor
              </h2>
              <p>
                Um projeto voluntário para capacitar e conectar profissionais de
                tecnologoa, impulsionando carreiras e fomentando o conhecimento
                na comunidade. Junte-se a nós e faça parte dessa transformação.
              </p>
              <Link href="/mentoria-jdm">
                <button className="bg-blue-500 text-white p-2 rounded-md">
                  Saiba mais sobre a iniciativa
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
