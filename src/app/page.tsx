import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Link href="/projects">Go to Project Page</Link>
      <Footer />
    </>
  );
}
