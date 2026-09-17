import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { NotFoundContent } from "@/components/layout/NotFoundContent";
import { Mark } from "@/components/brand/Mark";
import { site } from "@/content";
import { fontClass } from "@/lib/fonts";

export const metadata: Metadata = {
  title: `404 · ${site.name}`,
  robots: { index: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

// Sirve a toda la web, currículum incluido: la salida principal es la home y el
// resto son las secciones del currículum.
export default function GlobalNotFound() {
  return (
    <html lang="es" className={`h-full antialiased ${fontClass}`}>
      <body className="min-h-full not-found-page">
        <Link href="/" className="not-found-brand" aria-label={site.name}>
          <Mark />
          <span>{site.name}</span>
        </Link>
        <NotFoundContent />
      </body>
    </html>
  );
}
