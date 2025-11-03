"use client";

import { usePathname } from "next/navigation";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import FooterPrivacy from "./shared/FooterPrivacy";
import FloatingButton from "./EmailForm/FloatingContactButton";

export default function LayoutClientWrapper({ children }) {
  const pathname = usePathname();

  // Debug
  console.log("pathname ===>", pathname);

  const hideHeaderFooter = pathname.startsWith("/thankyou");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
      {!hideHeaderFooter && <FooterPrivacy />}
      {!hideHeaderFooter && <FloatingButton /> }
    </>
  );
}
