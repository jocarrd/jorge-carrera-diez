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

  const closeMenu = () => setIsOpen(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      data-scrolled={isScrolled}
      className="site-header sticky top-0 z-50 border-b border-white/[0.07] bg-[#02040a]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href={routePath(locale, "home")}
          className="group flex min-h-11 min-w-11 items-center gap-3 py-1"
          aria-label={copy.homeAriaLabel}
          onClick={closeMenu}
        >
          <Mark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">Jorge Carrera</span>
            <span className="block text-xs text-slate-500">{copy.brandRole}</span>
          </span>
        </Link>
        <nav
          aria-label={copy.mainNavLabel}
          className="hidden items-center rounded-full lvl-2 border p-1 md:flex"
        >
          {copy.items.map((item) => (
            <Link
              key={item.key}
              href={routePath(locale, item.key)}
              className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
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
            className="hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/15 sm:block"
          >
            {copy.contact}
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? copy.closeMenu : copy.openMenu}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full lvl-2 border text-white transition hover:border-cyan-300/40 md:hidden"
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-4 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label={copy.mobileNavLabel}
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="mx-5 mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#050814]/95 shadow-2xl sm:mx-6">
          <div className="border-b border-white/10 p-4">
            <p className="font-mono text-xs text-slate-500">{copy.sectionsLabel}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {copy.sections.map((item) => (
                <Link
                  key={item.anchor}
                  href={sectionPath(locale, item.anchor)}
                  onClick={closeMenu}
                  className="rounded-xl lvl-2 border px-3 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 lvl-hover"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="font-mono text-xs text-slate-500">{copy.localeLabel}</p>
            <LocaleSwitch locale={locale} onNavigate={closeMenu} />
          </div>
          <div className="p-4">
            <p className="font-mono text-xs text-slate-500">{copy.pagesLabel}</p>
            <div className="mt-3 grid gap-2">
              {copy.items.map((item) => (
                <Link
                  key={item.key}
                  href={routePath(locale, item.key)}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-300 transition lvl-hover hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-600">/</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
