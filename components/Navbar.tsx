import React from "react";
import { BsSearch } from "react-icons/bs";

import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full h-10 lg:h-12 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent backdrop-blur-md bg-opacity-20">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-1xl uppercase font-bold">Home</h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navbarLi">Integrations</li>
          <li className="navbarLi">Pricing</li>
          <li className="navbarLi">Docs</li>
       
          <li className="navbarLi">Changelog</li>
          <li className="navbarLi">Login</li>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <BsSearch className="text-xl hover:text-hoverColor" />
        
          <button className="w-44 h-10 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
            Get in Touch
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
