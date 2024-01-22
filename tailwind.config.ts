import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-rounded-regular": ["SFProRoundedRegular", "sans-serif"],
        "sf-pro-rounded-medium": ["SFProRoundedMedium", "sans-serif"],
        "sf-pro-display-regular": ["SFProDisplayRegular", "sans-serif"],
        "sf-pro-display-medium": ["SFProDisplayMedium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
