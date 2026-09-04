import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  const links = [
    { label: "LinkedIn", href: site.linkedin, external: true },
    { label: "GitHub", href: site.github, external: true },
    { label: "Snowy", href: site.snowy, external: true },
    { label: copy.footer.contact, href: `mailto:${site.email}`, external: false },
  ];

  return (
    <footer className="border-t border-white/10 lvl-1">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300/70">
            {site.domain}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            {site.name} - {copy.footer.tagline}
          </p>
        </div>
        <nav className="-mx-2 flex flex-wrap items-center gap-x-1 gap-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              href={link.href}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
