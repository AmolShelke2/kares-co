import Image from "next/image";
import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const navbarHandler = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <>
      {/* desktop navbar */}
      <div className="hidden lg:flex w-full justify-between items-center h-[108px] px-8">
        <nav className="flex gap-10 items-center">
          <header>
            <Image
              src={"/assets/image-1.png"}
              height={100}
              width={100}
              alt="header-logo"
            />
          </header>

          <ul className="flex gap-8">
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Home
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Services
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Testimonials
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Industries
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              About
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Faqs
            </li>
          </ul>
        </nav>

        <button className="bg-[#000000] text-white py-3 px-8 rounded-[100px] font-semibold">
          Contact
        </button>
      </div>

      {/* mobile navbar */}
      <div className="flex lg:hidden flex-col justify-start w-full items-start py-4 relative">
        <header className="mb-4">
          <Image
            src={"/assets/image-1.png"}
            height={44}
            width={140}
            alt="header-logo"
          />
        </header>
        <nav
          className={`${
            !navbarActive ? "hidden" : "flex"
          } flex-col gap-10 items-start w-full bg-gray-100 px-4 py-2 
          rounded-xl shadow-md z-1 fixed top-20 left-0`}>
          <ul className="flex flex-col gap-8">
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Home
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Services
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Testimonials
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Industries
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              About
            </li>
            <li className="font-normal text-sm leading-5 cursor-pointer">
              Faqs
            </li>
          </ul>
          <button className="bg-[#000000] text-white py-3 px-8 rounded-[100px] font-semibold">
            Contact
          </button>
        </nav>
        <div className="absolute right-2 top-4">
          {navbarActive ? (
            <AiOutlineClose size={20} onClick={navbarHandler} />
          ) : (
            <AiOutlineMenu size={20} onClick={navbarHandler} />
          )}
        </div>
      </div>
    </>
  );
};
