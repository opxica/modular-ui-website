import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";
import {
  IconArrowLeft,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconCube,
  IconFolderCode,
  IconGitPullRequest,
  IconQuestionMark,
  IconStar,
} from "@tabler/icons-react";

type CommandSearchProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommandSearch = ({ open, setOpen }: CommandSearchProps) => {
  const [page, setPage] = useState<"root" | "components" | "faqs">("root");
  const [search, setSearch] = useState("");

  const filteredItems = filterItems(
    [
      {
        heading: "Useful links",
        id: "useful-links",
        items: [
          {
            id: "docs",
            children: "Docs",
            icon: IconFolderCode,
            href: "#",
          },
          {
            id: "components ",
            children: "Components",
            icon: IconCube,
            closeOnSelect: false,
            onClick: () => {
              setPage("components");
            },
          },
          {
            id: "faqs",
            children: "FAQs",
            icon: IconQuestionMark,
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
            icon: IconBrandX,
            href: "https://twitter.com/modularui",
            closeOnSelect: false,
            target: "_blank",
          },
          {
            id: "github",
            children: "GitHub",
            icon: IconBrandGithub,
            href: "https://github.com/opxica",
            closeOnSelect: false,
            target: "_blank",
          },
          {
            id: "discord",
            children: "Discord",
            icon: IconBrandDiscord,
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
            icon: IconStar,
            href: "https://github.com/opxica/modular-ui",
            target: "_blank",
          },
          {
            id: "contribute",
            children: "Contribute",
            icon: IconGitPullRequest,
            href: "/contribute",
          },
        ],
      },
    ],
    search,
  );

  const componentsItems = filterItems(
    [
      {
        heading: "Components",
        id: "components",
        items: [
          {
            id: "button",
            children: "Button",
            icon: IconCube,
            target: "_blank",
            href: "/components/button",
          },
          {
            id: "card",
            children: "Card",
            icon: IconCube,

            target: "_blank",
          },
          {
            id: "checkbox",
            children: "Checkbox",
            icon: IconCube,
            target: "_blank",
            href: "/components/checkbox",
          },
          {
            id: "input",
            children: "Input",
            icon: IconCube,

            target: "_blank",
          },
          {
            id: "radio",
            children: "Radio",
            icon: IconCube,

            target: "_blank",
          },
          {
            id: "select",
            children: "Select",
            icon: IconCube,
            target: "_blank",
            href: "/components/select",
          },
          {
            id: "switch",
            children: "Switch",
            icon: IconCube,
            target: "_blank",
            href: "/components/switch",
          },
          {
            id: "textarea",
            children: "Textarea",
            icon: IconCube,
            target: "_blank",
            href: "/components/textarea",
          },
        ],
      },
    ],
    search,
  );

  const faqsItems = filterItems(
    [
      {
        heading: "FAQs",
        id: "faqs",
        items: [
          {
            id: "faq-1",
            children: "How to use Modular UI?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "#",
          },
          {
            id: "faq-2",
            children: "How to contribute?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "#",
          },
          {
            id: "faq-3",
            children: "What is Modular UI?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "#",
          },
          {
            id: "how-to-customize-appearance",
            children:
              "How can I customize the appearance of Modular UI in my Flutter project?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "main-features-of-modular-ui",
            children: "What are the main features of Modular UI?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "using-modular-ui-with-other-libraries",
            children:
              "Can I use Modular UI with other Flutter component libraries?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "managing-dependencies",
            children:
              "How do I manage dependencies for Modular UI in my Flutter project?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "best-practices-for-state-management",
            children:
              "What are the best practices for state management in an application using Modular UI?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "reporting-bugs-or-suggesting-improvements",
            children:
              "How can I report a bug or suggest an improvement for Modular UI?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "implementation-examples",
            children:
              "Are there examples of Modular UI implementation in real projects?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "flutter-version-compatibility",
            children:
              "Which versions of Flutter are supported by the latest version of Modular UI?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "dark-theme-support",
            children: "Does Modular UI support dark theme?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
          {
            id: "contributing-to-modular-ui",
            children: "Can I contribute to the development of Modular UI?",
            icon: IconQuestionMark,
            target: "_blank",
            href: "",
          },
        ],
      },
    ],
    search,
  );

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      <CommandPalette.Page id="components">
        <CommandPalette.ListItem
          index={0}
          icon={IconArrowLeft}
          closeOnSelect={false}
          onClick={() => {
            setPage("root");
          }}
          children="Back"
        />
        <CommandPalette.List heading="Components">
          {componentsItems
            .find((list) => list.id === "components")
            ?.items.slice(0, 3)
            .map(({ id, ...rest }) => (
              <CommandPalette.ListItem
                key={id}
                index={getItemIndex(componentsItems, id)}
                {...rest}
              />
            ))}
        </CommandPalette.List>
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default CommandSearch;
