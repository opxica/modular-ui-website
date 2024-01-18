import Image from "next/image";
import { Navbar } from "./Navbar";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky top-4 mx-4">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center gap-6 rounded-xl bg-zinc-900/60 px-1.5 shadow-inner shadow-zinc-900 backdrop-blur-md">
        <Link className="block" href="/">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={43}
            height={43}
            className="rounded-xl"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <Navbar />
          <div className="flex items-center gap-6">
            <div className="items-center justify-center sm:flex sm:gap-6">
              <SocialMedia />
              <SearchBar />
              <Link
                className="font-sf-pro-rounded-regular hidden rounded-xl bg-zinc-900 px-5 py-2.5 text-sm text-gray-100 transition hover:text-gray-100/75 sm:block"
                href="/"
              >
                Get started
              </Link>
            </div>
            <button className="block rounded-xl bg-zinc-900 p-2.5 text-gray-100 transition hover:text-gray-100/75 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
