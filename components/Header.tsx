import Image from "next/image";
import { Navbar } from "./Navbar";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-4 mx-4">
      <div className="mx-auto flex h-12 max-w-screen-lg items-center gap-6 rounded-xl bg-[#171717]/60 px-1 shadow-inner shadow-zinc-900 backdrop-blur">
        <Link className="block" href="/">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <Navbar />
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-6">
              <SocialMedia />
              <Link
                className="block rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-gray-100 transition hover:text-gray-100/75"
                href="/"
              >
                Get started
              </Link>
            </div>
            <button className="block rounded-xl bg-zinc-900 p-2.5 text-gray-100 transition hover:text-gray-100/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
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
