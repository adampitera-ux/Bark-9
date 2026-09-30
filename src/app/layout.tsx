import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700", "800", "900"], style: ["normal", "italic"] });
const body = Barlow({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Bark9 — Dog Training Built for Sport",
  description: "Obedience, agility, recall and behaviour training for huskies, shepherds and every good dog in between.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-mode="husky" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
