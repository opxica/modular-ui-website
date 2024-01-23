"use client";
import Image from "next/image";
import { Navbar } from "./Navbar";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { IconMenu } from "@tabler/icons-react";
import Headroom from "react-headroom";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <Headroom className="absolute mx-auto w-full">
      <header className="z-50 mt-6 w-full px-4">
        <div className="mx-auto flex h-14 max-w-screen-lg items-center gap-4 rounded-full bg-neutral-900/75 p-2 shadow-inner shadow-neutral-900 backdrop-blur">
          <Link className="block" href="/">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
          </Link>
          <div className="flex flex-1 items-center justify-end sm:justify-between">
            <Navbar />
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex">
                <SocialMedia />
              </div>
              <div className="items-center justify-center sm:flex sm:gap-2">
                <span
                  aria-hidden="true"
                  className="mx-2 hidden h-4 w-px rounded-full bg-neutral-700/50 sm:block"
                ></span>
                <SearchBar />
                <motion.a
                  className="hidden rounded-full border border-neutral-800 bg-neutral-800/50 px-5 py-2.5 font-sf-pro-rounded-regular text-xs text-neutral-100 transition hover:border-neutral-500/10 hover:text-neutral-100/85 sm:block"
                  href="/"
                  whileTap={{ scale: 0.9 }}
                >
                  Get started
                </motion.a>
              </div>
              <motion.button
                className="block rounded-full bg-neutral-800/50 p-2.5 text-neutral-100 transition hover:text-neutral-100/85 sm:hidden"
                onClick={toggleMobileNav}
                whileTap={{ scale: 0.9 }}
              >
                <IconMenu size={16} />
              </motion.button>
            </div>
          </div>
        </div>
        {isMobileNavOpen && <NavbarMobile />}
      </header>
    </Headroom>
  );
};

export default Header;
