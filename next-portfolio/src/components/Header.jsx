import HamburgerMenuIcon from "@/icons/HamburgerMenuIcon";
import Logo from "@/icons/Logo";
import ThemeBtn from "@/icons/ThemeBtn";
import Link from "next/link";

function Header({toggle, theme}) {
  return (
    <div className="header-container">
      <header className="my-0 mx-auto py-4 px-4 xl:px-20">
        <div className="xl:px-8 flex justify-between items-center">
          <div className="logo">
            <Logo theme={theme}/>
          </div>
          <nav className={"text-gray-600 dark:text-gray-300 xl:flex gap-6 items-center text-base font-medium hidden"}>
            <Link className="no-underline" href={"#work"}>Work</Link>
            <Link className="no-underline" href={"/"}>Testimonials</Link>
            <Link className="no-underline" href={"#about"}>About</Link>
            <Link className="no-underline" href={"#contact"}>Contact</Link>
            <div className="divider"></div>
            {/* <div className="actions"> */}
              <button className="toggle-theme" onClick={toggle}>
                <ThemeBtn theme={theme}/>
              </button>
              <button className="text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 rounded-xl py-1.5 px-4">Download CV</button>
            {/* </div> */}
          </nav>
          <div className="cursor-pointer xl:hidden">
            <HamburgerMenuIcon theme={theme}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;