import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // height: 自定义高度扩展;
      height: {
        "100": "400px",
        "120": "480px",
        "140": "560px",
      },
    },
  },
  plugins: [],
};
export default config;
