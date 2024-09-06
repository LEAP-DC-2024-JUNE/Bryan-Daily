import Logo from "@/icons/Logo";
import ThemeBtn from "@/icons/ThemeBtn";
import Link from "next/link";

function Header() {
  return (
    <div className="header-container">
      <header className="my-0 mx-auto py-4 px-20">
        <div className="px-8 flex justify-between items-center">
          <div className="logo">
            <Logo />
          </div>
          <nav className={"flex gap-6 items-center text-base font-medium "}>
            <Link className=" text-gray-600 no-underline" href={"#about"}>About</Link>
            <Link className=" text-gray-600 no-underline" href={"#work"}>Work</Link>
            <Link className=" text-gray-600 no-underline" href={"/"}>Testimonials</Link>
            <Link className=" text-gray-600 no-underline" href={"#contact"}>Contact</Link>
            <div className="divider"></div>
            {/* <div className="actions"> */}
              <button className="toggle-theme">
                <ThemeBtn />
              </button>
              <button className="text-gray-50 bg-gray-900 rounded-xl py-1.5 px-4">Download CV</button>
            {/* </div> */}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;