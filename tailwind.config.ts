import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral: {
          white: "#FCF8F5",
          black: "#010101",
        },
        primary: {
          default: "#5BCF51",
          light: "#D4EECC",
          medium: "#367A30",
          dark: "#1A3B17",
        },
        secondary: {
          red: "#EE4266",
          blue: "#33658A",
        },
        gray: {
          dark: "#303030",
          medium: "#91908F",
          light: "#F1F0EE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
