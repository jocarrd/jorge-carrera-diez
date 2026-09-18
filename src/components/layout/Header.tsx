"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "@/components/brand/Mark";
import { LocaleSwitch } from "@/components/layout/LocaleSwitch";
import { ThemeSwitch } from "@/components/layout/ThemeSwitch";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath, sectionPath } from "@/i18n/routes";

const REVEAL_ZONE = 96;
const SCROLL_THRESHOLD = 6;

export function Header({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).nav;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;

      setIsScrolled(y > 8);

      if (y < REVEAL_ZONE) {
        setIsHidden(false);
        lastY = y;
      } else if (delta > SCROLL_THRESHOLD) {
        setIsHidden(true);
        lastY = y;
      } else if (delta < -SCROLL_THRESHOLD) {
        setIsHidden(false);
        lastY = y;
      }
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { body, documentElement } = document;
    const gap = window.innerWidth - documentElement.clientWidth;
    const previous = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

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
      data-hidden={isHidden && !isOpen}
      data-menu-open={isOpen}
      className="site-header sticky top-0 z-50"
    >
      <div className="header-bar contenedor mx-auto w-full max-w-[1120px] px-[22px] sm:px-8">
        <Link
          href={routePath(locale, "home")}
          className="flex min-h-11 items-center gap-3"
          aria-label={copy.homeAriaLabel}
          onClick={closeMenu}
        >
          <Mark className="h-7 w-7 shrink-0" />
          <span className="text-sm font-semibold tracking-[-0.01em] text-[var(--foreground)]">
            Jorge Carrera Diez
          </span>
        </Link>
        <nav
          aria-label={copy.mainNavLabel}
          className="hidden items-center md:flex"
        >
          {copy.items
            .filter((item) => item.key !== "contact")
            .map((item) => {
              const href = routePath(locale, item.key);
              return (
                <Link
                  key={item.key}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className="header-link"
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <ThemeSwitch locale={locale} />
            <div className="hidden md:block">
              <LocaleSwitch locale={locale} onNavigate={closeMenu} />
            </div>
          </div>
          <span
            aria-hidden
            className="hidden h-5 w-px bg-[var(--line)] md:block"
          />
          <a
            href={`mailto:${site.email}`}
            className="hidden min-h-9 items-center rounded-full bg-[var(--cta-bg)] px-4 text-xs font-medium text-[var(--cta-text)] transition hover:brightness-110 md:inline-flex"
          >
            {copy.contact}
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? copy.closeMenu : copy.openMenu}
            onClick={() => setIsOpen((current) => !current)}
            className="header-menu-button md:hidden"
          >
            <span aria-hidden>
              {isOpen ? copy.closeButton : copy.menuButton}
            </span>
            <span aria-hidden className="header-menu-dot" />
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
              <li
                key={item.key}
                className="nav-sheet-item"
                style={{ "--i": index } as React.CSSProperties}
              >
                <Link
                  href={routePath(locale, item.key)}
                  onClick={closeMenu}
                  className="nav-sheet-link"
                >
                  <span>{item.label}</span>
                  <svg
                    viewBox="0 0 8 14"
                    aria-hidden
                    className="nav-sheet-chevron"
                  >
                    <path
                      d="M1 1l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                  <Link
                    href={sectionPath(locale, item.anchor)}
                    onClick={closeMenu}
                    className="nav-sheet-sublink"
                  >
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
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[var(--cta-bg)] px-5 text-[15px] font-medium text-[var(--cta-text)] transition active:brightness-110"
            >
              {copy.writeToMe}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
