import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

/**
 * La trayectoria como lo que es: duración real sobre un eje.
 *
 * Una lista ordenada esconde el dato que más dice de cómo trabaja: el trabajo
 * para la fundación suiza corre a la vez que el puesto de Tech Lead. En una
 * lista son dos entradas seguidas; aquí se ve que se solapan.
 *
 * En escritorio es un eje horizontal compartido. En móvil no: a 390px las
 * barras quedan en cuarenta píxeles y el gráfico deja de contar nada, así que
 * ahí se lee como una lista con la duración a escala.
 */
function toDate(value: string) {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

export function CareerTimeline({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const items = content.experience;
  const now = new Date();

  const starts = items.map((item) => toDate(item.start).getTime());
  const ends = items.map((item) => (item.end ? toDate(item.end).getTime() : now.getTime()));
  const min = Math.min(...starts);
  const max = Math.max(...ends);
  const span = max - min;
  const longest = Math.max(...items.map((_, i) => ends[i] - starts[i]));

  const firstYear = new Date(min).getFullYear();
  const lastYear = new Date(max).getFullYear();
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);
  const pct = (value: number) => ((value - min) / span) * 100;

  return (
    <div className="lvl-1 rounded-2xl border p-5 sm:p-7">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        <span aria-hidden className="h-px w-6 bg-[var(--accent)]/50" />
        {content.cvTimeline.label}
      </p>

      {/* --- Móvil: lista, con la barra a escala de la más larga --- */}
      <ol className="mt-6 flex flex-col gap-4 sm:hidden">
        {items.map((item, index) => {
          const current = item.end === null;
          const share = ((ends[index] - starts[index]) / longest) * 100;

          return (
            <li key={`${item.company}-${item.role}`}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-medium text-[var(--foreground)]">{item.company}</span>
                <span className="shrink-0 font-mono text-[11px] text-[var(--muted)]">{item.period}</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={`h-full rounded-full ${current ? "bg-[var(--accent)]" : "bg-white/25"}`}
                  style={{ width: `${Math.max(share, 6)}%` }}
                />
              </div>
            </li>
          );
        })}
      </ol>

      {/* --- Escritorio: eje compartido, donde el solape se ve --- */}
      <div className="relative mt-6 hidden sm:block">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex">
          {years.map((year) => (
            <div key={year} className="flex-1 border-l border-white/[0.07] first:border-l-0" />
          ))}
        </div>

        <ol className="relative flex flex-col gap-2">
          {items.map((item, index) => {
            const MIN_WIDTH = 9;
            const width = Math.max(pct(ends[index]) - pct(starts[index]), MIN_WIDTH);
            const left = Math.min(pct(starts[index]), 100 - width);
            const current = item.end === null;

            return (
              <li key={`${item.company}-${item.role}`} className="group relative h-11">
                <div
                  className={`absolute top-1/2 flex h-9 -translate-y-1/2 items-center overflow-hidden rounded-md px-3 transition-colors ${
                    current
                      ? "bg-[var(--accent)]/25 ring-1 ring-inset ring-[var(--line-strong)] group-hover:bg-[var(--accent)]/35"
                      : "bg-white/[0.07] ring-1 ring-inset ring-[var(--line)] group-hover:bg-white/[0.11]"
                  }`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                >
                  <span className="truncate text-sm font-medium text-[var(--foreground)]">{item.company}</span>
                </div>
              </li>
            );
          })}
        </ol>

        <div aria-hidden className="mt-3 flex border-t border-[var(--line)] pt-2">
          {years.map((year) => (
            <span key={year} className="flex-1 font-mono text-[11px] text-[var(--muted)]">
              {year}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-[var(--muted)]">{content.cvTimeline.note}</p>
    </div>
  );
}
