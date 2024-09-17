import React from "react";
import Logo from "@/icons/Logo";
import ExitIcon from "./ExitIcon";
import useHasMounted from "./useHasMounted";
import Link from "next/link";
import ThemeBtn from "@/icons/ThemeBtn";

const HamburgerMenu = ({ isOpen, setIsOpen, toggle, theme }) => {
  let hasMounted = useHasMounted();
  return (
    <div
      className={`bg-gray-900 bg-opacity-70 fixed top-0 left-0 w-screen h-screen z-20`}
    >
      <div
        className={`h-screen bg-white dark:bg-gray-950 z-30 fixed right-0 ${
          isOpen ? "w-[80%]" : "w-0 overflow-hidden"
        } flex flex-col gap-0`}
      >
        <div className="p-4 border-b-[1px] border-gray-100 dark:border-gray-800 flex justify-between items-center">
          {hasMounted && <Logo theme={theme} />}
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {hasMounted && <ExitIcon theme={theme} />}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 border-b-[1px] border-gray-100 dark:border-gray-800">
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="font-medium dark:text-gray-300"
            href={"#about"}
          >
            About
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="font-medium dark:text-gray-300"
            href={"#work"}
          >
            Work
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="font-medium dark:text-gray-300"
            href={"/"}
          >
            Testimonials
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="font-medium dark:text-gray-300"
            href={"#contact"}
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-between">
            <p>Switch Theme</p>
            <div className="cursor-pointer" onClick={toggle}>
              {hasMounted && <ThemeBtn theme={theme} />}
            </div>
          </div>
          <div>
            <button
              className="px-4 py-1.5 rounded-xl bg-gray-900 dark:bg-gray-50
                          font-medium text-gray-50 dark:text-gray-900 w-full"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

//Sidebar.js

// const Sidebar = () => {
//   State to manage the open/close state of the sidebar
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex">
//       Sidebar
//       <div
//         Conditional class based on isOpen
//         state to control width and visibility
//         className={`bg-gray-800 text-white
//                     fixed h-screen transition-all
//                     duration-300 z-10
//                     ${isOpen ? 'w-64' : 'w-0 overflow-hidden'
//           }`}>
//         Sidebar content
//         <div className="flex flex-col items-center">
//           <div className="mt-4">
//             <a href="#"
//               className="text-white
//                           hover:text-gray-300">
//               Home
//             </a>
//           </div>
//           <div className="mt-4">
//             <a href="#"
//               className="text-white
//                           hover:text-gray-300">
//               About
//             </a>
//           </div>
//           Add more sidebar items here
//         </div>
//       </div>
//       Main content
//       <div className={`flex-1 p-4
//                         ${isOpen ? 'ml-64' : 'ml-0'}`}>
//         Button to toggle sidebar
//         <div className="ml-auto">
//           <button
//             className="bg-blue-500 hover:bg-blue-700
//                        text-white font-bold py-2 px-4 rounded"
//             onClick={() => setIsOpen(!isOpen)}>
//             Toggle icon based on isOpen state
//             {isOpen ? (
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
