import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import Hero from "@/components/Home/Hero/Hero";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "@/components/Helper/ScroolToTop";
const font = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "HADORAM CONSTRUCTIONS",
  description: "Hadoram Construction Services Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <Analytics />
        <ResponsiveNav />
        <Hero />
        {children}
        <Footer />
        <ScrollToTop/>
      </body>
    </html>
  );
}
