"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

const COPY = {
  es: {
    eyebrow: "Error 404",
    title: "Esta página no existe",
    text: "Puede que el enlace esté mal escrito o que la página se haya movido. Desde aquí puedes volver a lo principal.",
    home: "Ir al inicio",
    links: [
      { key: "experience", label: "Experiencia" },
      { key: "projects", label: "Proyectos" },
      { key: "grokBotCourse", label: "Curso de Grok Bot" },
      { key: "contact", label: "Contacto" },
    ],
  },
  en: {
    eyebrow: "Error 404",
    title: "This page doesn't exist",
    text: "The link may be mistyped or the page may have moved. From here you can get back to the main sections.",
    home: "Go to the home page",
    links: [
      { key: "experience", label: "Experience" },
      { key: "projects", label: "Projects" },
      { key: "grokBotCourse", label: "Grok Bot course" },
      { key: "contact", label: "Contact" },
    ],
  },
} as const;

/** La 404 no recibe la ruta: el idioma se deduce en el navegador por el prefijo /en. */
export function NotFoundContent() {
  const [locale, setLocale] = useState<Locale>("es");
  useEffect(() => {
    // Tras el primer pintado: el servidor no conoce la ruta que ha fallado.
    const frame = requestAnimationFrame(() => {
      if (window.location.pathname === "/en" || window.location.pathname.startsWith("/en/")) setLocale("en");
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  const copy = COPY[locale];

  return (
    <main className="not-found">
      <p className="t-eyebrow">{copy.eyebrow}</p>
      <h1 className="not-found-title">{copy.title}</h1>
      <p className="not-found-text">{copy.text}</p>
      <Link href={routePath(locale, "home")} className="course-start-button">
        {copy.home} <span aria-hidden="true">→</span>
      </Link>
      <ul className="not-found-links">
        {copy.links.map((link) => (
          <li key={link.key}>
            <Link href={routePath(locale, link.key)}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
