import { IconBrandX, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="hidden gap-6 sm:flex">
      <Link
        href="https://twitter.com/modularui"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-gray-100 transition hover:text-gray-100/75"
      >
        <IconBrandX size={20} />
      </Link>
      <Link
        href="https://github.com/opxica"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-gray-100 transition hover:text-gray-100/75"
      >
        <IconBrandGithub size={20} />
      </Link>
    </div>
  );
};

export default SocialMedia;
