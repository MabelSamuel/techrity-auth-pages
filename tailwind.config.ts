import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primary100: "var(--color-primary-100)",
        secondary: "var(--color-secondary)",
        secondary50: "var(--color-secondary-50)",
        secondary100: "var(--color-secondary-100)",
        secondary200: "var(--color-secondary-200)",
        secondary300: "var(--color-secondary-300)",
        neutral: "var(--color-neutral)",
        neutral100: "var(--color-neutral-100)",
        neutral200: "var(--color-neutral-200)",
      },
      fontFamily: {
        adamina: "var(--font-adamina)",
        raleway: "var(--font-raleway)",
        nowAlt: ["NowAlt", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
