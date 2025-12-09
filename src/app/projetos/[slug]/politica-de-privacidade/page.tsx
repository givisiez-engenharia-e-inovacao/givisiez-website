'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { projectsContent } from '@/components/project/projects.data';
import { privacyPolicyData } from '@/components/project/privacy-policy/privacyPolicy.data';
import { PrivacyPolicy } from '@/components/project/privacy-policy/PrivacyPolicy';
import { useParams } from 'next/navigation';

export default function ProjectPrivacyPolicy() {
  const { slug } = useParams();
  const project = projectsContent.find(project => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const privacyPolicy = privacyPolicyData.find(
    policy => policy.title === project.title
  );

  if (!privacyPolicy) {
    return (
      <>
        <Header />
        <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto p-4">
          <h1 className="text-4xl font-bold py-4">Política de Privacidade</h1>
          <p>Este projeto não possui uma política de privacidade específica.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <PrivacyPolicy
        title={privacyPolicy.title}
        content={privacyPolicy.content}
      />
      <Footer />
    </>
  );
}
