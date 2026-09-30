import type { Metadata } from "next";
import { Barlow, Saira } from "next/font/google";
import "./globals.css";

const display = Saira({ variable: "--font-display", subsets: ["latin"], axes: ["wdth"] });
const body = Barlow({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "BARK9 Training — Puppy, Obedience, Protection & Behavior Training",
  description: "Puppy training, obedience, protection dog training and behavior modification built on communication, structure and trust.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-mode="husky" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
