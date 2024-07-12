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
        errie: "#191716",
        name: "#546a7b",
        intro: "#393d3f",
        text: "#011627",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        walter: ["Walter Turncoat", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        front:
          "url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop)",
      },
    },
  },
  plugins: [],
};
export default config;
