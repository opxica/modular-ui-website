import {
  IconBrandX,
  IconBrandGithub,
  IconBrandDiscord,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.a
        href="https://twitter.com/modularui"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-neutral-100 transition hover:text-neutral-100/85"
        whileTap={{ scale: 0.9 }}
      >
        <IconBrandX size={18} />
      </motion.a>
      <motion.a
        href="https://github.com/opxica"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-neutral-100 transition hover:text-neutral-100/85"
        whileTap={{ scale: 0.9 }}
      >
        <IconBrandGithub size={18} />
      </motion.a>
      <motion.a
        href="https://discord.gg/jEPKuWYt"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-neutral-100 transition hover:text-neutral-100/85"
        whileTap={{ scale: 0.9 }}
      >
        <IconBrandDiscord size={18} />
      </motion.a>
    </div>
  );
};

export default SocialMedia;
