"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaGithub,FaDiscord, FaBars, FaMagnifyingGlass  } from "react-icons/fa6";
import Headroom from "react-headroom";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";
import { motion } from "framer-motion";
import ButtonIcon from "../ui/ButtonIcon";
import SocialLink from "../ui/SocialLink";
import CommandSearch from "../CommandSearch";
import NavLinks from "@/data/navigation/navLinks";

export const Navbar = () => {
  const [activeNavLinks, setActiveNavLinks] = useState<String | null>(
    NavLinks[0].title,
  );
  const [isOpenNavMobile, setOpenNavMobile] = useState(false);

  const [isOpenCommandSearch, setIsOpenCommandSearch] = useState(false);

  const toggleMobileNav = () => {
    setOpenNavMobile(!isOpenNavMobile);
  };

  const handleCommandSearch = () => {
    setIsOpenCommandSearch((prevOpen) => !prevOpen);
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
            <nav aria-label="Global" className="hidden sm:block">
              <div className="flex items-center gap-2 text-xs">
                {NavLinks.map((link) => (
                  <Link
                    key={link.title}
                    className="relative rounded-full px-5 py-3 font-sf-pro-rounded-regular text-neutral-100 transition hover:text-neutral-100/85"
                    href="/"
                    onMouseEnter={() => setActiveNavLinks(link.title)}
                  >
                    {activeNavLinks === link.title && (
                      <motion.div
                        layoutId="active-pil"
                        className="absolute inset-0 bg-neutral-800/50"
                        style={{ borderRadius: 9999 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                          enter: { opacity: 1 },
                          exit: { opacity: 0 },
                        }}
                      ></motion.div>
                    )}
                    <span className="relative z-10">{link.title}</span>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="flex items-center gap-2">
              <div className="hidden space-x-4 sm:flex">
                <SocialLink
                  href="https://twitter.com/modularui"
                  icon={<FaXTwitter size={18} />}
                  label="Twitter"
                />
                <SocialLink
                  href="https://github.com/opxica"
                  icon={<FaGithub  size={18} />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://discord.gg/jEPKuWYt"
                  icon={<FaDiscord  size={18} />}
                  label="Discord"
                />
              </div>
              <div className="items-center justify-center sm:flex sm:gap-2">
                <span
                  aria-hidden="true"
                  className="mx-2 hidden h-6 w-px rounded-full bg-neutral-800/50 sm:block"
                ></span>
                <ButtonIcon
                  onClick={handleCommandSearch}
                  icon={<FaMagnifyingGlass />}
                  label="search-button"
                  className="p-3"
                />
                <Link
                  className="hidden rounded-full border border-neutral-800 bg-neutral-800/50 px-5 py-3 font-sf-pro-rounded-regular text-xs text-neutral-100 transition hover:border-neutral-500/10 hover:text-neutral-100/85 sm:block"
                  href="/getting-started"
                >
                  Get started
                </Link>
              </div>
              <ButtonIcon
                onClick={toggleMobileNav}
                icon={<FaBars  />}
                label="menu-button"
                className="p-3 sm:hidden"
              />
            </div>
          </div>
        </div>
        {isOpenNavMobile && <NavbarMobile />}
        <CommandSearch
          open={isOpenCommandSearch}
          setOpen={setIsOpenCommandSearch}
        />
      </header>
    </Headroom>
  );
};
