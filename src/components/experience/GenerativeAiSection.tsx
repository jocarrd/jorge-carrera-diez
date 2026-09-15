import { Section } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

// El diagrama se dibuja con CSS y toma los textos del copy: la web es bilingue
// y un SVG con el texto dentro obliga a mantener dos ficheros, no lo indexa
// Google y no lo lee un lector de pantalla.
function Columna({
  label,
  children,
  destacada = false,
}: {
  label: string;
  children: React.ReactNode;
  destacada?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">
        {label}
      </p>
      <div
        className={`mt-3 h-full rounded-[var(--radius-inner)] p-5 ${
          destacada
            ? "bg-[var(--panel-strong)]"
            : "border border-[var(--line)] bg-[var(--background)]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Lista({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-[1.5] text-[var(--foreground)]"
        >
          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function GenerativeAiSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).ai;
  const d = copy.diagram;

  return (
    <Section id="sistema-de-trabajo" className="border-t border-[var(--line)]">
      <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <div className="max-w-xl">
          <h2 className="t-section">{copy.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:mt-6 sm:leading-7">
            {copy.lead}
          </p>
          <p className="mt-5 text-base leading-[1.6] text-[var(--muted)]">
            {copy.detail}
          </p>
          <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] bg-[var(--panel)]">
            {copy.rows.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-[var(--line)] px-5 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr]"
              >
                <p className="font-mono text-xs text-[var(--muted)]">{label}</p>
                <p className="text-base leading-[1.6] text-[var(--muted)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[var(--radius-card)] bg-[var(--panel)] p-6 shadow-[var(--sombra-3)] sm:p-7">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent-text)]">
              {d.eyebrow}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-[0.8fr_1.1fr_1fr] md:items-stretch">
              <Columna label={d.inLabel}>
                <p className="text-base font-semibold text-[var(--foreground)]">
                  {d.inTitle}
                </p>
                <p className="mt-2 text-sm leading-[1.5] text-[var(--muted)]">
                  {d.inCaption}
                </p>
                <div className="mt-5 space-y-1.5">
                  {d.projects.map((p) => (
                    <p
                      key={p}
                      className="text-xs leading-[1.5] text-[var(--muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Columna>

              <Columna label={d.systemLabel} destacada>
                <Lista items={d.system} />
              </Columna>

              <Columna label={d.outLabel}>
                <Lista items={d.output} />
              </Columna>
            </div>

            <p className="mt-7 border-t border-[var(--line-strong)] pt-6 text-sm leading-[1.6] text-[var(--muted)]">
              {d.note}
            </p>
          </div>

          <div className="rounded-[var(--radius-card)] bg-[var(--panel)] p-7 sm:p-8">
            <h3 className="t-card">{copy.principlesTitle}</h3>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {copy.principles.map((item) => (
                <div key={item.title}>
                  <h4 className="text-sm font-semibold text-[var(--accent-text)]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
