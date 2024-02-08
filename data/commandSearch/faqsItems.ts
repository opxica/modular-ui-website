import { FaQuestion } from "react-icons/fa6";
import { JsonStructureItem } from "react-cmdk";

export const getFaqsItems = () => {
    const faqsItems: { heading?: string; id: string; items: JsonStructureItem[] }[] = [
        {
            heading: "FAQs",
            id: "faqs",
            items: [
                {
                    id: "faq-1",
                    children: "How to use Modular UI?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "#",
                },
                {
                    id: "faq-2",
                    children: "How to contribute?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "#",
                },
                {
                    id: "faq-3",
                    children: "What is Modular UI?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "#",
                },
                {
                    id: "how-to-customize-appearance",
                    children:
                        "How can I customize the appearance of Modular UI in my Flutter project?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "main-features-of-modular-ui",
                    children: "What are the main features of Modular UI?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "using-modular-ui-with-other-libraries",
                    children:
                        "Can I use Modular UI with other Flutter component libraries?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "managing-dependencies",
                    children:
                        "How do I manage dependencies for Modular UI in my Flutter project?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "best-practices-for-state-management",
                    children:
                        "What are the best practices for state management in an application using Modular UI?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "reporting-bugs-or-suggesting-improvements",
                    children:
                        "How can I report a bug or suggest an improvement for Modular UI?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "implementation-examples",
                    children:
                        "Are there examples of Modular UI implementation in real projects?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "flutter-version-compatibility",
                    children:
                        "Which versions of Flutter are supported by the latest version of Modular UI?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "dark-theme-support",
                    children: "Does Modular UI support dark theme?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
                {
                    id: "contributing-to-modular-ui",
                    children: "Can I contribute to the development of Modular UI?",
                    icon: FaQuestion,
                    target: "_blank",
                    href: "",
                },
            ],
        },
    ];
    return faqsItems;
};
