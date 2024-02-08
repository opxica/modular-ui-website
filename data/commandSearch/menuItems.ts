import { FaQuestion, FaStar, FaCodePullRequest, FaFolder, FaCube, FaXTwitter, FaGithub,FaDiscord,  } from "react-icons/fa6";
import { JsonStructureItem } from "react-cmdk";

export const getMenuItems = (setPage: React.Dispatch<React.SetStateAction<"root" | "components" | "faqs">>) => {
  const menuItems: { heading?: string; id: string; items: JsonStructureItem[] }[] = [
    {
      heading: "Home",
      id: "home",
      items: [
        {
          id: "docs",
          children: "Docs",
          icon: FaFolder,
          href: "https://yashs-organization-7.gitbook.io/modular-ui-documentation/",
          target: "_blank",
          closeOnSelect: false,
        },
        {
          id: "components ",
          children: "Components",
          icon: FaCube,
          closeOnSelect: false,
          onClick: () => {
            setPage("components");
          },
        },
        {
          id: "faqs",
          children: "FAQs",
          icon: FaQuestion,
          href: "#faqs",
        },
      ],
    },
    {
      heading: "Socials",
      id: "socials",
      items: [
        {
          id: "twitter",
          children: "Twitter",
          icon: FaXTwitter,
          href: "https://twitter.com/modularui",
          closeOnSelect: false,
          target: "_blank",
        },
        {
          id: "github",
          children: "GitHub",
          icon: FaGithub,
          href: "https://github.com/opxica",
          closeOnSelect: false,
          target: "_blank",
        },
        {
          id: "discord",
          children: "Discord",
          icon: FaDiscord,
          href: "https://discord.gg/jEPKuWYt",
          closeOnSelect: false,
          target: "_blank",
        },
      ],
    },
    {
      heading: "Other",
      id: "other",
      items: [
        {
          id: "github-star",
          children: "GitHub star",
          icon: FaStar,
          href: "https://github.com/opxica/modular-ui",
          target: "_blank",
        },
        {
          id: "contribute",
          children: "Contribute",
          icon: FaCodePullRequest ,
          href: "/contribute",
        },
      ],
    },
  ];
  return menuItems;
};
