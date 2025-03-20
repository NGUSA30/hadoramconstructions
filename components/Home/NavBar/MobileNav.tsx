import navLinks from "../../../constants/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* {OVERLAY} */}
      <div
        className={`${navOpen} fixed transform transition-all inset-0 duration-500 delay-100 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* {NAV LINKS} */}
      <div
        className={`${navOpen} flex text-black font-semibold fixed justify-center flex-col h-full transform transition-all duration-500  delay-200 w-[80%] sm:w-[60%] bg-poseyBlueColor space-y-6 z-[1050]`}
      > 
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id} className="text-black w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]">
              <p >
                {link.label}
              </p>
            </Link>
          );
        })}
         <a
            href="#_"
            className=" px-3.5 py-2 mt-12 w-fit text-[20px] ml-12 lg:flex overflow-hidden relative group cursor-pointer border-2 font-medium border-black  text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-300 group-hover:text-poseyBlueColor ease">
              Contact Us
            </span>
          </a>
        {/* {CLOSING ICON} */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.5rem] right-[1.4rem] sm:w-8 sm:h-8 h-6 w-6"
        />

      </div>
      
    </div>
  );
};

export default MobileNav;
