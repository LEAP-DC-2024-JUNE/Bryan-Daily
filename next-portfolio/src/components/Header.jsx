import HamburgerMenuIcon from "@/icons/HamburgerMenuIcon";
import Logo from "@/icons/Logo";
import ThemeBtn from "@/icons/ThemeBtn";
import Link from "next/link";
import useHasMounted from "./useHasMounted";
import HamburgerMenu from "./HamburgerMenu";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Header({ toggle, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  let hasMounted = useHasMounted();
  return (
    <div className="header-container">
      <header className="my-0 mx-auto py-4 px-4 xl:px-20">
        <div className="xl:px-8 flex justify-between items-center">
          <div className="logo">{hasMounted && <Logo theme={theme} />}</div>
          <nav
            className={
              "text-gray-600 dark:text-gray-300 xl:flex gap-6 items-center text-base font-medium hidden"
            }
          >
            <Link className="no-underline" href={"#work"}>
              Work
            </Link>
            <Link className="no-underline" href={"/"}>
              Testimonials
            </Link>
            <Link className="no-underline" href={"#about"}>
              About
            </Link>
            <Link className="no-underline" href={"#contact"}>
              Contact
            </Link>
            <div className="divider"></div>
            <div className="toggle-theme cursor-pointer" onClick={toggle}>
              {hasMounted && <ThemeBtn theme={theme} />}
            </div>
            <button className="text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 rounded-xl py-1.5 px-4">
              Download CV
            </button>
          </nav>
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {hasMounted && <HamburgerMenuIcon theme={theme} />}
          </div>
        </div>
      </header>
      <HamburgerMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggle={toggle}
        theme={theme}
      />
    </div>
  );
}

export default Header;
