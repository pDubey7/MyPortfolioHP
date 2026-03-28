import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "var(--gold)",
          light: "var(--gold-light)",
          dark: "var(--gold-dark)",
        },
        crimson: {
          DEFAULT: "var(--crimson)",
          light: "var(--crimson-light)",
        },
        parchment: {
          DEFAULT: "var(--parchment)",
          dark: "var(--parchment-dark)",
        },
        smoke: "var(--smoke)",
        ink: "var(--ink)",
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
      },
      fontFamily: {
        cinzelDecorative: ["var(--font-cinzel-decorative)", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        imFellEnglish: ["var(--font-im-fell-english)", "serif"],
        jetbrainsMono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      cursor: {
        custom: "url('/cursor.svg') 16 16, auto",
      }
    },
  },
  plugins: [],
};

export default config;
