import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0D3B8E",
        brandRed: "#C9132A",
        brandDark: "#0E1116",
        brandGray: "#1F2937",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
