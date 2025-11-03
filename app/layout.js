import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutClientWrapper from "../components/LayoutClientWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Export Genius - Global Trade Intelligence Platform",
  description: "Discover global buyers and suppliers, profitable markets, and competitive advantage, and empower your business with intelligence, compliance, and visibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Wrap everything inside LayoutClientWrapper */}
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
