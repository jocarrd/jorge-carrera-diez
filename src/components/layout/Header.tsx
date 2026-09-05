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
        <nav
          aria-label={copy.mainNavLabel}
          className="hidden items-center gap-1 md:flex"
        >
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
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--accent)] px-4 text-[13px] font-medium text-white transition hover:brightness-110 sm:min-h-9 sm:text-xs"
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
        <div className="mx-6 mb-4 overflow-hidden rounded-[var(--radius-card-lg)] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12),0_0_0_1px_var(--line)] sm:mx-8">
          <div className="border-b border-[var(--line)] p-4">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-[var(--muted)]">{copy.sectionsLabel}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {copy.sections.map((item) => (
                <Link
                  key={item.anchor}
                  href={sectionPath(locale, item.anchor)}
                  onClick={closeMenu}
                  className="rounded-xl bg-[var(--panel)] px-3 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--panel-strong)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-[var(--muted)]">{copy.localeLabel}</p>
            <LocaleSwitch locale={locale} onNavigate={closeMenu} />
          </div>
          <div className="p-4">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-[var(--muted)]">{copy.pagesLabel}</p>
            <div className="mt-3 grid gap-2">
              {copy.items.map((item) => (
                <Link
                  key={item.key}
                  href={routePath(locale, item.key)}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--panel)]"
                >
                  <span>{item.label}</span>
                  <span className="text-[var(--muted)]">&rsaquo;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
