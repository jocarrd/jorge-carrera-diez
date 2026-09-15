import Link from "next/link";
import { Rail, Reveal, Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function CurrentRoleSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const role = copy.currentRole;

  return (
    <Section id="rol-actual" className="section-band">
      <Reveal>
        <SectionHeader title={role.homeTitle} text={role.homeText} />
      </Reveal>

      {/* En escritorio caben las tres de un vistazo y la rejilla gana. Por
          debajo de md se apilaban y costaban tres pantallas de scroll: ahí el
          carril las pone en fila y se recorren con el dedo. */}
      <Reveal delay={80} className="mt-14 hidden gap-5 md:grid md:grid-cols-3">
        {role.fronts.map((front) => (
          <FrontCard key={front.label} front={front} />
        ))}
      </Reveal>

      <Reveal delay={80} className="mt-14 md:hidden">
        <Rail label={role.homeTitle}>
          {role.fronts.map((front) => (
            <div key={front.label} className="rail-item w-[85vw] max-w-[22rem]">
              <FrontCard front={front} className="h-full" />
            </div>
          ))}
        </Rail>
      </Reveal>

      {/* Snowy y EQx estaban aquí como dos tarjetas más, al mismo nivel que el
          trabajo principal. Puestos así parecían tres empleos a la vez; en una
          línea de respaldo dicen lo que de verdad aportan, que es que las
          decisiones de punta a punta también son suyas. */}
      <Reveal delay={120}>
        <div className="mt-5 grid gap-4 rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-[var(--background)] px-6 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--muted-strong)]">
            {role.homeAside.label}
          </p>
          <p className="text-[15px] leading-[1.55] text-[var(--muted)]">{role.homeAside.text}</p>
          <div className="flex gap-2">
            {role.homeAside.links.map((link) => (
              <Link
                key={link.route}
                href={routePath(locale, link.route)}
                className="rounded-[var(--radius-inner)] border border-[var(--line)] px-3 py-1.5 text-[13px] text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)]"
              >
                {link.label} ↗
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function FrontCard({
  front,
  className = "",
}: {
  front: { label: string; title: string; text: string };
  className?: string;
}) {
  return (
    <article
      className={`rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-white p-8 sm:p-9 ${className}`}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--muted-strong)]">
        {front.label}
      </p>
      <h3 className="t-card mt-4">{front.title}</h3>
      <p className="mt-3.5 text-[17px] leading-[1.55] text-[var(--muted)]">{front.text}</p>
    </article>
  );
}
