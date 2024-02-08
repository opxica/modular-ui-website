import { FaArrowLeftLong, FaCube } from "react-icons/fa6";
import { JsonStructureItem } from "react-cmdk";

export const getComponentsItems = (setPage: React.Dispatch<React.SetStateAction<"root" | "components" | "faqs">>) => {
    const componentsItems: { heading?: string; id: string; items: JsonStructureItem[] }[] = [
        {
            heading: "Components",
            id: "components",
            items: [
                {
                    id: "back",
                    children: "Back",
                    icon: FaArrowLeftLong,
                    closeOnSelect: false,
                    onClick: () => {
                        setPage("root");
                    },
                },
                {
                    id: "button",
                    children: "Button",
                    icon: FaCube,
                    target: "_blank",
                    href: "/components/button",
                },
                {
                    id: "card",
                    children: "Card",
                    icon: FaCube,
                    target: "_blank",
                },
                {
                    id: "checkbox",
                    children: "Checkbox",
                    icon: FaCube,
                    target: "_blank",
                    href: "/components/checkbox",
                },
                {
                    id: "input",
                    children: "Input",
                    icon: FaCube,
                    target: "_blank",
                },
                {
                    id: "radio",
                    children: "Radio",
                    icon: FaCube,
                    target: "_blank",
                },
                {
                    id: "select",
                    children: "Select",
                    icon: FaCube,
                    target: "_blank",
                    href: "/components/select",
                },
                {
                    id: "switch",
                    children: "Switch",
                    icon: FaCube,
                    target: "_blank",
                    href: "/components/switch",
                },
                {
                    id: "textarea",
                    children: "Textarea",
                    icon: FaCube,
                    target: "_blank",
                    href: "/components/textarea",
                },
            ],
        },
    ];
    return componentsItems;
};
