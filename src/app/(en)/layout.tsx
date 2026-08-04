import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { htmlLang } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata: Metadata = createMetadata({ locale, route: "home" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang[locale]} className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full">
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
