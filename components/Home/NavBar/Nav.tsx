"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoBlack from "./../../../public/images/logo-black.png";
import navLinks from "../../../constants/constants";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
type Props = {
  openNav: () => void;
};


const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
      
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={` ${
        navBg ? "bg-poseyBlueColor  shadow-md" : "fixed "
      } transition-all  duration-200 h-[10vh] z-[100]  w-full fixed`}
    >
      <div className="flex h-full justify-between w-[90%] xl:w-[80%] mx-auto items-center">
        {/* {LOGO} */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="flex items-center gap-2 justify-center flex-row"
          >
            <div className="w-10 h-10 ">
              <Image alt="brand-logo" src={logoBlack} />
            </div>
            <h1 className="hidden sm:block md:text-2xl text-black hover:text-tostadaColor font-bold">
              HADORAM
            </h1>
          </Link>
        </div>
        {/* {NAV LINKS} */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => 
          (
              <Link
                href={link.url}
                key={link.id}
                className={`${
                  navBg ? "text-black" : "text-white"
                } hover:text-polarDriftColor font-semibold transition-all duration-200`}
              >
                <p>{link.label}</p>
              </Link>
            )
          )}
        </div>
        
        <div className="flex items-center  space-x-4">
          <Link
            href={'/contact-us'}
            className=" px-3.5 py-2 m-1 lg:flex hidden overflow-hidden relative group cursor-pointer border-2 font-medium border-black  text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-300 group-hover:text-poseyBlueColor ease">
              Contact Us
            </span>
          </Link>
          {/* {BURGER MENU ICON} */}
          <HiBars3BottomRight
            onClick={openNav}
            className="h-8 w-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
