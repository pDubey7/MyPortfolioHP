import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  Cinzel,
  IM_Fell_English,
  JetBrains_Mono
} from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import EasterEggsController from "@/components/EasterEggsController";

const StarCanvas = dynamic(() => import("@/components/StarCanvas"), { ssr: false });
const FloatingCandles = dynamic(() => import("@/components/FloatingCandles"), { ssr: false });

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative"
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel"
});
const imFellEnglish = IM_Fell_English({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-im-fell-english",
  adjustFontFallback: false
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Pushpraj Dubey — The Marauder's Portfolio",
  description: "Backend Developer, DevOps Engineer & Solana Blockchain Developer. IIIT Una CSE 2027.",
  openGraph: {
    title: "Pushpraj Dubey — The Marauder's Portfolio",
    description: "Backend Developer, DevOps Engineer & Solana Blockchain Developer. IIIT Una CSE 2027.",
    images: [{ url: "/og-image.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushpraj Dubey — The Marauder's Portfolio",
    description: "Backend Developer, DevOps Engineer & Solana Blockchain Developer. IIIT Una CSE 2027."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzelDecorative.variable} ${cinzel.variable} ${imFellEnglish.variable} ${jetbrainsMono.variable} font-imFellEnglish antialiased selection:bg-gold selection:text-ink relative min-h-screen`}>
        <StarCanvas />
        <FloatingCandles />
        <EasterEggsController />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
