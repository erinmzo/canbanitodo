import ModalProvider from "@/context/ModalContext";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  style: ["normal"],
});
export const metadata: Metadata = {
  title: "CANBANITODO",
  description: "칸반 형태의 심플한 투두 리스트 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${montserrat.className} antialiased relative`}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
