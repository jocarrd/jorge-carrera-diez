import { Geist, Geist_Mono } from "next/font/google";

export const sans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans-geist",
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-geist",
});

export const fontClass = `${sans.variable} ${mono.variable}`;
