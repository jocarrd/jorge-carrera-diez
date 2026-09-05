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
    <footer className="section-band border-t border-[var(--line)]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-5 px-6 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[13px] font-medium text-[var(--foreground)]">
            {site.domain}
          </p>
          <p className="mt-1.5 text-[13px] leading-[1.6] text-[var(--muted)]">
            {site.name} - {copy.footer.tagline}
          </p>
        </div>
        <nav className="-mx-2 flex flex-wrap items-center gap-x-1 gap-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-[13px] text-[var(--muted)] transition-colors hover:text-[var(--accent-text)]"
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
