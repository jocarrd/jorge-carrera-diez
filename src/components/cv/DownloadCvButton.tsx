import type { Locale } from "@/i18n/config";

const files: Record<Locale, string> = {
  es: "/cv.pdf",
  en: "/cv-en.pdf",
};

export function DownloadCvButton({
  locale,
  label,
  hint,
}: {
  locale: Locale;
  label: string;
  hint: string;
}) {
  return (
    <div className="print:hidden">
      <a
        href={files[locale]}
        download="Jorge-Carrera-Diez-CV.pdf"
        className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--panel)]"
      >
        {label}
      </a>
      <p className="mt-3 text-[14px] leading-[1.5] text-[var(--muted)]">
        {hint}
      </p>
    </div>
  );
}
