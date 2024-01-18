import { IconBrandX, IconBrandGithub } from "@tabler/icons-react";

const SocialMedia = () => {
  return (
      <div className="hidden gap-6 sm:flex">
        <button className="block text-gray-100 transition hover:text-gray-100/75">
          <IconBrandX size={20} />
        </button>
        <button className="block text-gray-100 transition hover:text-gray-100/75">
          <IconBrandGithub size={20} />
        </button>
      </div>
  );
};

export default SocialMedia;
