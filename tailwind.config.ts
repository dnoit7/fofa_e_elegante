
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f58634",
      },
      borderRadius: {
        "2xl": "1rem",
      }
    },
  },
  plugins: [],
};
export default config;
