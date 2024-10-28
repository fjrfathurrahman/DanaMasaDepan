import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "3rem",
          xl: "1rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1024px",
        },
      },
      fontFamily: {
        display: 'Oswald, ui-serif',
      },
      colors: {
        primary: '#3da9fc',
        headline: '#094067',
        paragraph: '#5f6c7b',
        paragraphDark: '#94a1b2',
      },
      backgroundColor: {
        light: '#fffffe',
        lightSecondary: '#FAF8F6',
        dark: '#16161a',
        darkSecondary: '#242629',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      colors: {
        colors: {
          primary: '#3da9fc',
        },
      }
    },
  })],
};
export default config;
