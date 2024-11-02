import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1600px",
      },
    },
    screens: {
      xsm: "420px",
      sm: "640px",
      md: "768px",
      xlg: "860px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
    },

    extend: {
      colors: {
        primary: "#120A44",
        default: "#F9FAFB",
        footer: "#072134",
        icon: "#154060",
        Clr007E: "#007E27",
        Clr0C97: "#0C9737",
        translateBtnActive: "rgba(0, 126, 39, 0.60)",
        translateBtnInActive: "rgba(0, 126, 39, 0.10)",
        translateBtnBox: "rgba(0, 126, 39, 0.10)",
        "pink-badge": "#F64459",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#120A44",
              foreground: "#FFFF",
            },
            danger: {
              DEFAULT: "#dc2626",
              foreground: "#FFFF",
            },
            default: {
              DEFAULT: "#F9FAFB",
              foreground: "#000",
            },
          },
        },
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
};
