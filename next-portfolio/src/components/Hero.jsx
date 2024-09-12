import Image from "next/image";
import Location from "@/icons/Location";
import Hire from "@/icons/Hire";
import Link from "next/link";
import GithubLogo from "@/icons/GithubLogo";
import TwitterLogo from "@/icons/TwitterLogo";
import FigmaLogo from "@/icons/FigmaLogo";

const Hero = ({theme}) => {
  return (
    <div className="px-4 py-16
                    xl:px-20 xl:py-24">
        <div className="flex flex-col-reverse gap-16
                        xl:gap-12 xl:flex-row">
          <div className="flex flex-col gap-12
                          xl:w-[600px] xl:flex-none">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-4xl text-gray-900
                              dark:text-gray-50
                                xl:font-bold xl:text-6xl">Hi, I'm Bryan 👋</h1>
              <p className="dark:text-gray-300">I specialize in full stack development, particularly with React.js and Node.js.
              My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.</p>
            </div>
            <div className="flex flex-col gap-2"> 
              <span className="flex gap-2">
                <span className="w-6 h-6 flex justify-center items-center"><Location theme={theme} /></span>
                Ulaanbaatar, Mongolia
              </span>
              <span className="flex gap-2">
                <span className="w-6 h-6 flex justify-center items-center"><Hire /></span>
                Available for new projects
              </span>
            </div>
            <div>
              <ul className="flex gap-4">
                <Link href={"/"}><GithubLogo theme={theme}/></Link>
                <Link href={"/"}><TwitterLogo theme={theme}/></Link>
                <Link href={"/"}><FigmaLogo theme={theme}/></Link>
              </ul>
            </div>
          </div>
          <div className="w-full relative">
            <Image 
            className="mx-auto relative z-10 border-8 border-white
                      dark:border-gray-950 dark:shadow-gray-700
                        xl:mr-0 xl:shadow-[40px_40px] xl:shadow-gray-200"
              src="/hero-image.png"
              width={240}
              height={280}
              alt="image of person"
            />
            <div className="w-[280px] h-[280px] absolute top-5 left-1/2 translate-x-[-50%] z-0
                          bg-gray-200 border-8 border-white
                            dark:bg-gray-700 dark:border-gray-950
                              xl:hidden"></div>
          </div>
        </div>
      </div>
  );
}

export default Hero;