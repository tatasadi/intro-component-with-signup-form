import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 74%)",
          green: "hsl(154, 59%, 51%)",
        },
        accent: {
          blue: "hsl(248, 32%, 49%)",
        },
        neutral: {
          darkblue: "hsl(249, 10%, 26%)",
          grayishblue: "hsl(246, 25%, 77%)",
          gray: "hsl(0, 0%, 87%)",
        },
      },
    },
  },
  plugins: [],
}
export default config
