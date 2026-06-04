import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VerificationGate from "@/components/VerificationGate";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carbon Lab — Research Peptides | 99%+ Identity Purity",
    template: "%s | Carbon Lab",
  },
  description:
    "Carbon Lab offers research peptides with 99%+ identity purity. BPC-157, TB-500, Ipamorelin and more. Third-party identity tested, Certificate of Analysis included. For laboratory research use only.",
  keywords: [
    "research peptides",
    "buy peptides",
    "BPC-157",
    "TB-500",
    "Ipamorelin",
    "99% purity peptides",
    "certificate of analysis",
    "Carbon Lab",
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
      className={`${inter.variable} ${space.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <VerificationGate />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
