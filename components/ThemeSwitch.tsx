import { useCallback, useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaMoon , FaSun } from "react-icons/fa6";

type Theme = "dark" | "light" | "system" | null;

const ThemeList = [
  { title: "Light", icon: <FaSun size={18} />, value: "light" },
  { title: "Dark", icon: <FaMoon size={18} />, value: "dark" },
];

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>(null);

  const applyTheme = (selectedTheme: Theme) => {
    document.documentElement.classList.toggle("dark", selectedTheme === "dark");
  };

  const applySystemTheme = useCallback(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    applyTheme(prefersDarkMode ? "dark" : "light");
  }, [applyTheme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      setTheme("system");
      applySystemTheme();
    }
  }, [applySystemTheme]);

  const toggleDarkMode = (selectedTheme: Theme) => {
    if (selectedTheme === "system") {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const newTheme = prefersDarkMode ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    } else {
      setTheme(selectedTheme);
      if (selectedTheme === "dark" || selectedTheme === "light") {
        localStorage.setItem("theme", selectedTheme);
        applyTheme(selectedTheme);
      } else {
        localStorage.removeItem("theme");
        applySystemTheme();
      }
    }
  };

  return (
    <Popover className="relative">
      <Popover.Button
        type="button"
        className="hidden text-neutral-900 transition hover:text-neutral-900/75 dark:text-neutral-100 dark:hover:text-neutral-100/75 sm:block"
      >
        {theme === "dark" ? <FaMoon size={18} /> : <FaSun size={18} />}
      </Popover.Button>

      <Popover.Panel className="absolute z-10 mt-5 w-28 rounded-md border border-gray-200 bg-gray-50 p-1 font-sf-pro-rounded-regular text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
        <div className="space-y-1">
          {ThemeList.map((item) => (
            <button
              key={item.title}
              type="button"
              className={
                "relative flex w-full items-center rounded-md px-2 py-1 text-xs transition "
              }
              onClick={() => toggleDarkMode(item.value as Theme)}
            >
              {theme === item.value && (
                <motion.div
                  layoutId="active-pil-theme"
                  className="absolute inset-0 rounded-md bg-gray-100 dark:bg-neutral-800"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ></motion.div>
              )}
              {theme === item.value ? (
                <span className="border-1 z-10 h-1 w-1 rounded-full bg-green-400 dark:bg-green-500"></span>
              ) : (
                <span className="border-1 z-10 h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-800"></span>
              )}
              <span className="relative z-10 ml-2">{item.title}</span>
            </button>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default ThemeSwitch;
