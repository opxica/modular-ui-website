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
      backgroundImage: {
        "banner-pattern": "url('/public/banner-pattern.svg')",
      },
      fontFamily: {
        "sf-pro-rounded-regular": ["SFProRoundedRegular", "sans-serif"],
        "sf-pro-rounded-medium": ["SFProRoundedMedium", "sans-serif"],
        "sf-pro-display-regular": ["SFProDisplayRegular", "sans-serif"],
        "sf-pro-display-medium": ["SFProDisplayMedium", "sans-serif"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
