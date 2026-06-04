import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerificationGate from "@/components/VerificationGate";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carbon Labs — Precision Research Peptides, Certified",
    template: "%s | Carbon Labs",
  },
  description:
    "Research-grade peptides with Certificate of Analysis on every batch. 99%+ identity purity, third-party tested, USA sourced. BPC-157, TB-500, Ipamorelin and more.",
  keywords: [
    "research peptides",
    "buy peptides",
    "BPC-157",
    "TB-500",
    "Ipamorelin",
    "CJC-1295",
    "99% purity peptides",
    "certificate of analysis",
    "Carbon Labs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <VerificationGate />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
