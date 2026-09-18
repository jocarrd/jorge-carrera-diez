import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { htmlLang } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import { fontClass } from "@/lib/fonts";

const locale = "en" as const;

export const metadata: Metadata = createMetadata({ locale, route: "home" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={htmlLang[locale]}
      className={`h-full antialiased ${fontClass}`}
      data-scroll-behavior="smooth"

      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full">
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
