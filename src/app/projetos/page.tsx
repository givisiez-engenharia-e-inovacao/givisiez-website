import ProjectList from '@/components/project/project-list';
import { projectsContent } from '../../components/project/projects.data';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Projects() {
  return (
    <>
      <Header />
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold py-4">Projetos</h1>
        <ProjectList projects={projectsContent} />
      </div>
      <Footer />
    </>
  );
}
