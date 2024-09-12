import Logo from "@/icons/Logo";
import ThemeBtn from "@/icons/ThemeBtn";
import Link from "next/link";

function MobileHeader({toggle, theme}) {
  return (
    <div className="header-container">
      <header className="my-0 mx-auto py-4 px-20">
        <div className="px-8 flex justify-between items-center">
          <div className="logo">
            <Logo theme={theme}/>
          </div>
          <nav className={"text-gray-600 dark:text-gray-300 flex gap-6 items-center text-base font-medium "}>
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
        </div>
      </header>
    </div>
  );
}

export default MobileHeader;