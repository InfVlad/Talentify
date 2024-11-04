import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey: {
          0: "#ffffff",
          50: "#f3f3f3",
          100: "#dbdbdb",
          200: "#c9c9c9",
          300: "#b1b1b1",
          400: "#a1a1a1",
          500: "#8a8a8a",
          600: "#7e7e7e",
          700: "#626262",
          800: "#4c4c4c",
          900: "#3a3a3a",
          darkFont: "#212121",
        },
        violet: {
          50: "#f1eefd",
          100: "#d3cbf8",
          200: "#bdb2f4",
          300: "#9f8ff0",
          400: "#8d79ed",
          500: "#7058e8",
          600: "#6650d3",
          700: "#503ea5",
          800: "#3e3080",
          900: "#2f2561",
        },
        green: {
          50: "#faffec",
          100: "#effec4",
          200: "#e7fea8",
          300: "#dcfe80",
          400: "#d5fd68",
          500: "#cbfd42",
          600: "#b9e63c",
          700: "#90b42f",
          800: "#708b24",
          900: "#556a1c",
          success: "#49a419",
        },
        red: {
          alert: "#da0000",
        },
      },
      fontFamily: {
        onest: ["var(--font-onest)"],
      },
      maxWidth: {
        "7xl": "78.125rem",
        "8xl": "90rem",
      },
      screens: {
        xs: "25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
