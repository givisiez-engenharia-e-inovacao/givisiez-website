import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title:
    'Projetos de Engenharia de Software | Givisiez - Engenharia e Inovação',
  description:
    'Conheça o portfólio de projetos, aplicativos mobile, plataformas web e consultorias técnicas em engenharia de software desenvolvidos pela Givisiez para clientes reais.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
