
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4B63E",
        secondary: "#1B2430",
        accent: "#E63946"
      }
    }
  },
  plugins: []
};
export default config;
