import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      BG100Dark: "#18191A",
      BG100Light: "#F0F0F0",
      BG300Dark: "#212223",
      BG300Light: "#FFFFFF",
      BG500Dark: "#2D2E2F",
      BG500Light: "#F5F5F5",
      TXT100Dark: "#FFFFFF",
      TXT100Light: "#18191A",
      TXT300Dark: "#AAAAAA",
      TXT300Light: "#777777",
      Primary: "#00BC91",
      transparent: "transparent",
    },
    screens: {
      sm: { min: "320px", max: "743px" },
      md: { min: "744px", max: "1279px" },
      lg: { min: "1280px" },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
