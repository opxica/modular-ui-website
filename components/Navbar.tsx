import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const NavLinks = [
  { title: "Docs", path: "/" },
  { title: "Components", path: "/" },
  { title: "FAQs", path: "/" },
];

export const Navbar = () => {
  const [activeNavLinks, setActiveNavLinks] = useState(NavLinks[0].title);
  return (
    <div>
      <nav aria-label="Global" className="hidden sm:block">
        <div className="flex items-center gap-4 text-xs">
          {NavLinks.map((link) => (
            <Link
              key={link.title}
              onClick={() => setActiveNavLinks(link.title)}
              className="relative rounded-full px-4 py-2 font-sf-pro-rounded-regular text-neutral-100 transition hover:text-neutral-100/75"
              href="/"
            >
              {activeNavLinks === link.title && (
                <motion.div
                  layoutId="active-pil"
                  className="absolute inset-0 bg-neutral-900/75"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                ></motion.div>
              )}
              <span className="relative z-10">{link.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
