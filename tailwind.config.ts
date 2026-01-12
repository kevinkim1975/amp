import type { Config } from "tailwindcss";

/**
 * Tailwind 설정
 * Design Guide (docs/design-guide.md) 기반 - Single Source of Truth
 */

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
        // Design Guide 3. 색상 & 그라데이션
        primary: {
          DEFAULT: "#004B8D", // 깊은 의료용 블루
          light: "#0066CC",
          dark: "#003366",
        },
        secondary: {
          DEFAULT: "#48A9C5", // 밝은 메디컬 블루
          light: "#6BC4DC",
          dark: "#2D8BA8",
        },
        accent: {
          DEFAULT: "#10B981", // 성공/긍정 그린
          light: "#34D399",
          dark: "#059669",
        },
        // Design Guide 정확한 값
        surface: "#F6F8FA", // 연한 그레이 배경
        background: "#FFFFFF", // 순수한 화이트
        text: {
          primary: "#1F2937", // 진한 그레이
          secondary: "#6B7280", // 중간 그레이
        },
        // 경계선
        border: "#E5E7EB",
      },
      fontFamily: {
        // Design Guide 4. 타이포그래피
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        // Design Guide 4. 타이포그래피 정확한 값
        "heading-1": ["3rem", { lineHeight: "1.2", fontWeight: "600" }],       // 48px
        "heading-2": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],    // 36px
        "heading-3": ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],     // 24px
        "body-large": ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }],   // 20px
        "body": ["1.125rem", { lineHeight: "1.5", fontWeight: "400" }],        // 18px
        "body-small": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],      // 16px
        "caption": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],     // 14px
      },
      spacing: {
        // Design Guide 5. 레이아웃 - 4px 단위 시스템
        "header": "64px",
        "footer": "80px",
      },
      maxWidth: {
        // Design Guide 5. 최대 콘텐츠 너비
        "content": "1280px",
      },
      borderRadius: {
        // Design Guide 5. 모서리 반경
        "DEFAULT": "6px",
      },
      boxShadow: {
        // Design Guide 6. 그림자
        "card": "0 1px 3px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
