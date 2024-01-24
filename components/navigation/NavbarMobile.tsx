import Link from "next/link";
import { motion } from "framer-motion";

const NavLinks = [
  { title: "Docs", path: "/" },
  { title: "Components", path: "/" },
  { title: "FAQs", path: "/" },
];

const NavbarMobile = () => {
  return (
    <div className="mt-2 flow-root rounded-3xl bg-neutral-900/75 p-2 shadow-inner shadow-neutral-900 backdrop-blur sm:hidden">
      <ul className="-my-2 divide-y divide-neutral-800/50">
        <li className="py-2">
          <ul className="space-y-4">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className="relative rounded-full px-5 py-2.5 font-sf-pro-rounded-regular text-neutral-100 transition hover:text-neutral-100/85"
                  href="/"
                >
                  <span className="relative z-10">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="py-2">
          <motion.div
            className="flex items-center gap-4"
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="w-full rounded-full border border-neutral-800 bg-neutral-800/50 px-5 py-2.5 text-center font-sf-pro-rounded-regular  text-xs text-neutral-100 transition hover:border-neutral-500/10  hover:text-neutral-100/85 sm:block"
              href="/"
            >
              Get started
            </Link>
          </motion.div>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
