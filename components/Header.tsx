"use client";
import Image from "next/image";
import { Navbar } from "./Navbar";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { IconMenu } from "@tabler/icons-react";
import ThemeSwitch from "./theme-switch";

const Header = () => {
  return (
    <header className="sticky top-4 mx-4 mt-4">
      <div className="mx-auto flex max-w-screen-lg items-center gap-6 rounded-full bg-gray-50 p-2.5 py-2 backdrop-blur-md dark:bg-neutral-900/60 dark:shadow-inner dark:shadow-neutral-900">
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
              <ThemeSwitch />
            </div>
            <div className="items-center justify-center sm:flex sm:gap-2">
              <span
                aria-hidden="true"
                className="mx-2 hidden h-6 w-px rounded-full bg-gray-200 dark:bg-neutral-800 sm:block"
              ></span>
              <SearchBar />
              <Link
                className="text-nuetral-900 hidden rounded-full bg-gray-100 px-5 py-2.5 font-sf-pro-rounded-regular text-xs transition-shadow hover:text-neutral-900/75 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-xl dark:hover:border-neutral-500/10 dark:hover:text-neutral-100/75 dark:hover:shadow-neutral-700/10 sm:block"
                href="/"
              >
                Get started
              </Link>
            </div>
            <button className="block rounded-full bg-gray-100 p-2.5 text-neutral-900 transition hover:text-neutral-900/75 dark:bg-neutral-900 dark:text-gray-100 dark:hover:text-neutral-100/75 sm:hidden">
              <IconMenu size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
