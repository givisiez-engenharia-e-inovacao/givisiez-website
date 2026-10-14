import type { Metadata } from 'next';
import MentoriaClient from './MentoriaClient';

export const metadata: Metadata = {
  title: 'Mentoria em Tecnologia | Givisiez - Engenharia e Inovação',
  description:
    'Acelere sua carreira tech nas três frentes: início ou transição de carreira, desenvolvimento profissional e liderança. Metodologia prática, histórico de sucesso da JDM e mentoria com quem constrói software de alta complexidade.',
  openGraph: {
    title: 'Mentoria em Tecnologia | Givisiez - Engenharia e Inovação',
    description:
      'Mentoria individualizada focada em início/transição de carreira, aceleração técnica e liderança de engenharia e produto.',
    url: 'https://givisiez.com.br/mentoria',
    siteName: 'Givisiez - Engenharia e Inovação',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function MentoriaPage() {
  return <MentoriaClient />;
}
