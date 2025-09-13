import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Givisiez - Engenharia e Inovação',
  description: 'Engenharia que transforma, inovação que evolui',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
