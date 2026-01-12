import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "서일메디컬 마케팅 제안서",
  description: "AutoMed Proposal - 서일메디컬 경쟁 분석 제안서",
};

type RootLayoutProps = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
