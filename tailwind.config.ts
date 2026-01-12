import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004B8D",
          light: "#0066CC",
          dark: "#003366",
        },
        secondary: {
          DEFAULT: "#48A9C5",
          light: "#6BC4DC",
          dark: "#2D8BA8",
        },
        accent: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "Pretendard", "sans-serif"],
      },
      spacing: {
        "header": "64px",
        "footer": "80px",
      },
      maxWidth: {
        "content": "1280px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
