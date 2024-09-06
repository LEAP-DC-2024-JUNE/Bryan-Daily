import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from '@/components/Hero';
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className={inter.className + " text-gray-600"}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
