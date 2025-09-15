import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function MentoriaJDM() {
  return (
    <>
      <Header />
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold py-4">Junior Dev Mentorship (JDM)</h1>
        <p>
          A área de tecnologia é incrível, mas como é muito concorrida, é muito
          difícil ingressar na área sem ajuda. Muitos falam da dificuldade de
          conseguir a primeira experiência, ter espaço para experimentar e
          oportunidade para errar. A Rafa Marcolino, idealizadora do projeto,
          fez transição de carreira e passou por todas essas dificuldades, e foi
          por isso que criou esse projeto de mentoria. Nas palavras dela, “eu
          tive muita dificuldade para entrar na área de tecnologia e percebi
          que, se eu tivesse um direcionamento, teria sido bem mais fácil. Eu
          queria poder ajudar pessoas do jeito que eu não fui ajudada, uma forma
          de desenvolver uma comunidade mais empática e acolhedora”. <br />A
          mentoria é 100% voluntária e gratuita, todos os que participam como
          mentores estão aqui com o intuito de ajudar mesmo o pessoal sem pensar
          em lucro. Queremos criar oportunidades a todos sem visar lucro,
          pensando que o sucesso de todos é a nossa satisfação!
        </p>
        <h2 className="text-2xl font-bold py-4">Para quem é essa mentoria</h2>
        <p>
          O foco da mentoria é quem não tem experiência na área (sendo primeiro
          emprego ou transição de carreira), mas abrimos exceção quando a pessoa
          tem pouca experiência (menos de 1 ano) e ficou desempregada. Damos a
          mentoria até a pessoa conseguir emprego na área, então se já estiver
          empregada na área, não é o foco da mentoria.
        </p>
        <div className="flex justify-center items-center flex-row">
          <div>
            <h2 className="text-2xl font-bold py-4">
              Como funciona a mentoria
            </h2>
            <p>
              Por mais que não seja um emprego, a mentoria é uma chance de
              ganhar experiência com um time composto de mentores e mentorados,
              onde fazemos projetos com clientes reais. A mentoria é composta
              por uma parte de soft skills e uma de hard skills. <br /> Soft
              skills: <br />– Análise e melhoria de currículo / linkedin; <br />
              – Simulação de entrevista; <br />– Desenvolvimento de soft skills
              (trabalho em equipe, comunicação, proatividade, etc.). <br /> Hard
              skills: <br />– Projetos reais de clientes voluntários com toda a
              equipe (empresa júnior); <br />– Roadmaps de estudos e projetos
              para compor portfólio; – Auxilio em dúvidas técnicas e outras
              questões <br />A dedicação média é de 10h por semana, incluindo
              reuniões, dedicação aos projetos e estudos. Fazemos um contrato de
              voluntariado com todos os mentores e mentorados, de forma a poder
              comprovar a experiência aqui conosco. Usamos SCRUM para orientar a
              dinâmica da equipe, por isso, fazemos reuniões diárias para ver o
              andamento de todos e reuniões esporádicas de alinhamento
              (planning, review, retro, etc.).
            </p>
          </div>
          <Image
            src="/images/jdm.jpeg"
            alt="Como funciona a mentoria"
            width={500}
            height={500}
          />
        </div>
        <h2 className="text-2xl font-bold py-4">Dinâmica da mentoria</h2>
        <p>
          Dinâmica <br />A mentoria em si é bem autônoma, onde acompanhamos o
          processo de estudos e projeto dos mentorados sem muita interferência.
          Claro que damos apoio em o que estudar, ideias de projetos e
          tira-dúvidas, mas é algo que vocês têm que correr atrás. <br /> Cursos
          e projetos <br />
          Todo mês os mentorandos têm que fazer pelo menos um curso ou projeto
          para mostrar o que fizeram, e algumas vezes eu peço projetos em
          conjunto entre equipes. <br /> Reunião <br />
          Temos uma reunião diária onde falamos o que fizemos, o que vamos fazer
          e se estamos com algum impedimento, ela ocorre de segunda a sexta à
          noite. Também fazemos reuniões esporádicas com ritos do SCRUM
          (planning, review, retro, etc.)
        </p>
        <h2 className="text-2xl font-bold py-4">Depoimentos</h2>
        <div className="flex flex-col gap-4"></div>
        <h2 className="text-2xl font-bold py-4">Como entrar na mentoria</h2>
        <p>
          Para entrar na mentoria, basta preencher o formulário abaixo e
          aguardar a aprovação do nosso time.
        </p>
        <form className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Nome"
            className="p-2 rounded-md border-2 border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md border-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Linkedin"
            className="p-2 rounded-md border-2 border-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md"
          >
            Enviar formulário
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
