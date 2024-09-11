import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from '@/components/Hero';
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    theme=='dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <div className={inter.className + " text-gray-600 dark:text-gray-300 dark:bg-gray-950"}>
      <Header toggle={toggleTheme} theme={theme}/>
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Work theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default Home;
