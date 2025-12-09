'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { projectsContent } from '@/components/project/projects.data';
import ProjectDetails from '@/components/project/project-details';
import { useParams } from 'next/navigation';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsContent.find(project => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <ProjectDetails {...project} />
      <Footer />
    </>
  );
}
