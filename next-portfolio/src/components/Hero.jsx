import Image from "next/image";
import Location from "@/icons/Location";
import Hire from "@/icons/Hire";
import Link from "next/link";
import GithubLogo from "@/icons/GithubLogo";
import TwitterLogo from "@/icons/TwitterLogo";
import FigmaLogo from "@/icons/FigmaLogo";

const Hero = ({theme}) => {
  return (
    <div className={" max-w-[1440px] mx-auto py-24 px-20 "}>
        <div className="flex justify-between px-8">
          <div className="flex flex-col gap-12 w-1/2">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-900 dark:text-gray-50 font-bold text-6xl">Hi, I'm Bryan 👋</h1>
              <p className="text-base">I specialize in full stack development, particularly with React.js and Node.js.
              My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.</p>
            </div>
            <div className="flex flex-col gap-2"> 
              <span className="flex gap-2"><span className=" w-6 h-6"><Location theme={theme} /></span> Ulaanbaatar, Mongolia</span>
              <span className="flex gap-2"><span className=" w-6 h-6 flex justify-center items-center"><Hire /></span> Available for new projects</span>
            </div>
            <div>
              <ul className="flex justify-start gap-4">
                <Link href={"/"}><GithubLogo theme={theme}/></Link>
                <Link href={"/"}><TwitterLogo theme={theme}/></Link>
                <Link href={"/"}><FigmaLogo theme={theme}/></Link>
              </ul>
            </div>
          </div>
          <div>
            <Image 
            className="border-8 border-white dark:border-gray-950 shadow-[40px_40px] shadow-gray-200 dark:shadow-gray-700"
              src="/hero-image.png"
              width={280}
              height={320}
              alt="image of person"
            />
          </div>
        </div>
      </div>
  );
}

export default Hero;