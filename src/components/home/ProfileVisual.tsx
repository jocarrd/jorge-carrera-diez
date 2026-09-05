import Image from "next/image";
import { Surface } from "@/components/ui";
import { ArchitectureField } from "@/components/visual/ArchitectureField";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function ProfileVisual({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <div className="relative">
      <div className="hidden lg:block">
        <div className="hidden sm:contents">
          <ArchitectureField />
        </div>
      </div>
      <Surface className="space-border relative overflow-hidden bg-[var(--panel)] p-3 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-black">
          <Image
            src="/images/jorge-carrera-diez.webp"
            alt={`${site.name} - ${copy.meta.jobTitle}`}
            width={1168}
            height={1408}
            priority
            className="aspect-[4/5] h-auto w-full object-cover object-[50%_34%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(2,4,10,0.72)_100%)]" />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[var(--line)] bg-black/45 p-4 backdrop-blur-md">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
              {site.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy.profile.positioning}</p>
          </div>
        </div>

        <div className="mt-3 hidden grid-cols-2 gap-3 sm:grid">
          {copy.profile.visualStats.map(([label, value]) => (
            <div key={label} className="rounded-xl lvl-3 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
              <p className="mt-2 font-mono text-sm text-[var(--foreground)]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 hidden gap-3 lg:grid">
          {copy.profile.focus.slice(0, 3).map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[var(--line)] bg-black/20 p-4 text-sm leading-6 text-[var(--foreground)]"
            >
              {item}
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
