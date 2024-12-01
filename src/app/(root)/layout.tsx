import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <Header />
      <main className="min-h-screen py-[100px]">{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
