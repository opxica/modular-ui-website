import { IconBrandX, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="hidden gap-6 sm:flex">
      <Link
        href="https://twitter.com/modularui"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-neutral-900 transition hover:text-neutral-900/75 dark:text-neutral-100 dark:hover:text-neutral-100/75"
      >
        <IconBrandX size={18} />
      </Link>
      <Link
        href="https://github.com/opxica"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-neutral-900 transition hover:text-neutral-900/75 dark:text-neutral-100 dark:hover:text-neutral-100/75"
      >
        <IconBrandGithub size={18} />
      </Link>
    </div>
  );
};

export default SocialMedia;
