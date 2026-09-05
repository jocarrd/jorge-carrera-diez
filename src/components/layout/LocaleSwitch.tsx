"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { translatePath } from "@/i18n/routes";

type LocaleSwitchProps = {
  locale: Locale;
  onNavigate?: () => void;
};

export function LocaleSwitch({ locale, onNavigate }: LocaleSwitchProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0.5">
      {locales.map((option) => {
        const isActive = option === locale;

        return (
          <Link
            key={option}
            href={translatePath(pathname, option)}
            hrefLang={option}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2.5 text-xs uppercase transition ${
              isActive
                ? "font-semibold text-[var(--foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {option}
          </Link>
        );
      })}
    </div>
  );
}
