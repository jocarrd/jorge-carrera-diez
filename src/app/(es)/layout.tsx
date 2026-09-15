import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { htmlLang } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import { fontClass } from "@/lib/fonts";

const locale = "es" as const;

export const metadata: Metadata = createMetadata({ locale, route: "home" });

/* La barra del navegador en móvil se pinta de este color: sin declararlo se
   queda blanca sobre una web negra y parece que la página empieza dos
   centímetros más abajo. */
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang[locale]} className={`h-full antialiased ${fontClass}`} data-scroll-behavior="smooth">
      <body className="min-h-full">
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
