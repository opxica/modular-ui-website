"use client";
import Image from "next/image";
import { Navbar } from "./Navbar";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { IconMenu } from "@tabler/icons-react";
import Headroom from "react-headroom";

const Header = () => {
  return (
    <Headroom className="absolute mx-auto w-full">
      <header className="z-50 mt-6 w-full px-4">
        <div className="mx-auto flex max-w-screen-md items-center gap-6 rounded-full bg-neutral-900/75 p-2 py-1.5 shadow-inner shadow-neutral-900 backdrop-blur">
          <Link className="block" href="/">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={35}
              height={35}
              className="rounded-full"
            />
          </Link>
          <div className="flex flex-1 items-center justify-end sm:justify-between">
            <Navbar />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-6">
                <SocialMedia />
              </div>
              <div className="items-center justify-center sm:flex sm:gap-2">
                <span
                  aria-hidden="true"
                  className="mx-2 hidden h-4 w-px rounded-full bg-neutral-800/50 sm:block"
                ></span>
                <SearchBar />
                <Link
                  className="hidden rounded-full border border-neutral-800 bg-neutral-800/50 px-5 py-2 font-sf-pro-rounded-regular text-xs text-neutral-100  transition hover:border-neutral-500/10   hover:text-neutral-100/85 sm:block"
                  href="/"
                >
                  Get started
                </Link>
              </div>
              <button className="block rounded-full bg-neutral-800/50 p-2  text-neutral-100 transition hover:text-neutral-100/85 sm:hidden">
                <IconMenu size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
