import SocialLink from "./ui/SocialLink";
import { FaXTwitter, FaGithub,FaDiscord  } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800/50 bg-transparent text-neutral-100">
      <div className="mx-auto max-w-screen-lg px-4 py-10 font-sf-pro-rounded-regular sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral-100">
              &copy; 2024. Opxica. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <SocialLink
              href="https://twitter.com/modularui"
              icon={<FaXTwitter size={18} />}
              label="Twitter"
            />
            <SocialLink
              href="https://github.com/opxica"
              icon={<FaGithub size={18} />}
              label="GitHub"
            />
            <SocialLink
              href="https://discord.gg/jEPKuWYt"
              icon={<FaDiscord size={18} />}
              label="Discord"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
