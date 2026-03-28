import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  Cinzel,
  IM_Fell_English,
  JetBrains_Mono
} from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/StarCanvas";
import FloatingCandles from "@/components/FloatingCandles";
import EasterEggsController from "@/components/EasterEggsController";

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
  title: "Pushpraj Dubey | Portfolio",
  description: "Backend Developer, DevOps Engineer & Solana Blockchain Developer",
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
