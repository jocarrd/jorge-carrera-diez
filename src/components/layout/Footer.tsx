import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          {site.name} - {copy.footer.tagline}
        </p>
        <div className="flex gap-4">
          <a className="hover:text-white" href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="hover:text-white" href={site.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a className="hover:text-white" href={site.snowy} rel="noreferrer" target="_blank">
            Snowy
          </a>
          <a className="hover:text-white" href={`mailto:${site.email}`}>
            {copy.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
