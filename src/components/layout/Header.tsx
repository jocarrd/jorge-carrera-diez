"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mark } from "@/components/brand/Mark";
import { LocaleSwitch } from "@/components/layout/LocaleSwitch";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath, sectionPath } from "@/i18n/routes";

export function Header({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).nav;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* La hoja tapa la página entera: si el documento sigue desplazándose detrás,
     al cerrarla se vuelve a otro sitio. Se compensa el ancho de la barra para
     que el contenido no dé un salto lateral al bloquearla. */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { body, documentElement } = document;
    const gap = window.innerWidth - documentElement.clientWidth;
    const previous = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };

    body.style.overflow = "hidden";
    if (gap > 0) {
      body.style.paddingRight = `${gap}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previous.overflow;
      body.style.paddingRight = previous.paddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      data-scrolled={isScrolled}
      data-menu-open={isOpen}
      className="site-header sticky top-0 z-50"
    >
      <div className="mx-auto flex min-h-14 w-full max-w-[1120px] items-center justify-between gap-4 px-[22px] sm:min-h-12 sm:px-8">
        <Link
          href={routePath(locale, "home")}
          className="group flex min-h-11 min-w-11 items-center gap-3 py-1"
          aria-label={copy.homeAriaLabel}
          onClick={closeMenu}
        >
          <Mark className="h-7 w-7 shrink-0" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-[var(--foreground)]">Jorge Carrera Diez</span>
          </span>
        </Link>
        <nav aria-label={copy.mainNavLabel} className="hidden items-center gap-1 md:flex">
          {copy.items.map((item) => (
            <Link
              key={item.key}
              href={routePath(locale, item.key)}
              className="rounded-full px-3.5 py-2 text-xs text-[var(--foreground)] transition hover:text-[var(--muted)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LocaleSwitch locale={locale} onNavigate={closeMenu} />
          </div>
          <a
            href={`mailto:${site.email}`}
            className="hidden min-h-11 items-center rounded-full bg-[var(--accent)] px-4 text-[13px] font-medium text-white transition hover:brightness-110 sm:inline-flex sm:min-h-9 sm:text-xs"
          >
            {copy.contact}
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? copy.closeMenu : copy.openMenu}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center text-[var(--foreground)] md:hidden"
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "top-[7px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "bottom-[6px] -rotate-45" : "bottom-0"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={copy.mobileNavLabel}
        className="nav-sheet md:hidden"
        data-open={isOpen}
        inert={!isOpen}
      >
        <div className="nav-sheet-inner">
          <ul className="flex flex-col">
            {copy.items.map((item, index) => (
              <li key={item.key} className="nav-sheet-item" style={{ "--i": index } as React.CSSProperties}>
                <Link href={routePath(locale, item.key)} onClick={closeMenu} className="nav-sheet-link">
                  <span>{item.label}</span>
                  <svg viewBox="0 0 8 14" aria-hidden className="nav-sheet-chevron">
                    <path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="nav-sheet-item mt-10 border-t border-[var(--line)] pt-7"
            style={{ "--i": copy.items.length } as React.CSSProperties}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
              {copy.sectionsLabel}
            </p>
            <ul className="mt-4 flex flex-col gap-1">
              {copy.sections.map((item) => (
                <li key={item.anchor}>
                  <Link href={sectionPath(locale, item.anchor)} onClick={closeMenu} className="nav-sheet-sublink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="nav-sheet-item mt-auto flex items-center justify-between gap-4 pt-10"
            style={{ "--i": copy.items.length + 1 } as React.CSSProperties}
          >
            <LocaleSwitch locale={locale} onNavigate={closeMenu} />
            <a
              href={`mailto:${site.email}`}
              onClick={closeMenu}
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-[15px] font-medium text-white transition active:brightness-110"
            >
              {copy.writeToMe}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
