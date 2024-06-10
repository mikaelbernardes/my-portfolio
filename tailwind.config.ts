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
  },
  plugins: [],
};
export default config;
