import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Sobre Nós | Givisiez - Engenharia e Inovação',
  description:
    'Conheça a história da Givisiez, fundada em fevereiro de 2019 por Rafaela Marcolino, com liderança de produto por Estêvão Marcolino. Consultoria focada em desenvolvimento de projetos de tecnologia e mentoria de carreira.',
  openGraph: {
    title: 'Sobre Nós | Givisiez - Engenharia e Inovação',
    description:
      'Fundada em 2019 por Rafaela Marcolino, com liderança de produto por Estêvão Marcolino. Consultoria focada em desenvolvimento de projetos de tecnologia e mentoria de carreira em tecnologia.',
    url: 'https://givisiez.com.br/sobre-nos',
    siteName: 'Givisiez - Engenharia e Inovação',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function SobreNosPage() {
  return <AboutClient />;
}
