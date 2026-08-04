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
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.035] p-0.5">
      {locales.map((option) => {
        const isActive = option === locale;

        return (
          <Link
            key={option}
            href={translatePath(pathname, option)}
            hrefLang={option}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-2.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition ${
              isActive
                ? "bg-cyan-300/15 text-cyan-100"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {option}
          </Link>
        );
      })}
    </div>
  );
}
