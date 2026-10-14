import Header from '@/components/header';
import Footer from '@/components/footer';
import CaseStudyDetails from '@/components/project/project-details/CaseStudyDetails';
import { getCaseStudyBySlug, caseStudiesList } from '@/data/caseStudies';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Estudo de Caso | Givisiez - Engenharia e Inovação',
    };
  }

  return {
    title: `Estudo de Caso | ${caseStudy.breadcrumbTitle} - Givisiez`,
    description: caseStudy.subtitle,
    openGraph: {
      title: `${caseStudy.title} | Givisiez`,
      description: caseStudy.subtitle,
    },
  };
}

export function generateStaticParams() {
  return caseStudiesList.flatMap(c => [
    { slug: c.slug },
    ...(c.aliasSlugs ? c.aliasSlugs.map(s => ({ slug: s })) : []),
  ]);
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug) || caseStudiesList[0];

  return (
    <>
      <Header />
      <CaseStudyDetails caseStudy={caseStudy} />
      <Footer />
    </>
  );
}
