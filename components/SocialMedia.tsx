import { IconBrandX, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="hidden gap-6 sm:flex">
      <Link
        href="https://twitter.com/modularui"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-neutral-100 transition hover:text-neutral-100/85"
      >
        <IconBrandX size={16} />
      </Link>
      <Link
        href="https://github.com/opxica"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-neutral-100 transition hover:text-neutral-100/85"
      >
        <IconBrandGithub size={16} />
      </Link>
    </div>
  );
};

export default SocialMedia;
