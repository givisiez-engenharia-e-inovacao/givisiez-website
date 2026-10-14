import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contato & Diagnóstico Técnico | Givisiez - Engenharia e Inovação',
  description:
    'Entre em contato com os especialistas de engenharia de software e produto da Givisiez. Diagnóstico técnico objetivo, confidencialidade garantida via contato@givisiez.com.br.',
  openGraph: {
    title: 'Contato & Diagnóstico Técnico | Givisiez - Engenharia e Inovação',
    description:
      'Converse diretamente com nossos especialistas de engenharia e produto para projetos de tecnologia, consultoria técnica e mentoria de carreira.',
    url: 'https://givisiez.com.br/contato',
    siteName: 'Givisiez - Engenharia e Inovação',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function ContatoPage() {
  return <ContactClient />;
}
