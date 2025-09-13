import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Link href="/projects">Go to Project Page</Link>
    </>
  );
}
