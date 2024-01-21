"use client";
import Image from "next/image";
import { Navbar } from "./Navbar";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { IconMenu } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="sticky top-4 mx-4 mt-4">
      <div className="mx-auto flex max-w-screen-lg items-center gap-6 rounded-full bg-neutral-900/60 p-2.5 py-2 shadow-inner shadow-neutral-900 backdrop-blur-md">
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
            <div className="items-center justify-center sm:flex sm:gap-2">
              <SocialMedia />
              <span
                aria-hidden="true"
                className="mx-2 hidden h-6 w-px rounded-full bg-neutral-800 sm:block"
              ></span>
              <SearchBar />
              <Link
                className="hidden rounded-full border border-neutral-800 bg-neutral-900 px-5 py-2.5 font-sf-pro-rounded-regular text-xs text-neutral-100 shadow-xl transition-all hover:border-neutral-500/10 hover:text-neutral-100/75 hover:shadow-neutral-700/10 sm:block"
                href="/"
              >
                Get started
              </Link>
            </div>
            <button className="block rounded-full bg-neutral-900 p-2.5 text-gray-100 transition hover:text-neutral-100/75 sm:hidden">
              <IconMenu size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
