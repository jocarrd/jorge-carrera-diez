import { Section } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

const toolSignals = ["RAG", "MCP", "AI SDK", "evals", "logs", "fallback"] as const;

export function GenerativeAiSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).ai;

  return (
    <Section id="ia-generativa" className="border-t border-[var(--line)]">
      <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:mt-6 sm:leading-7">
            {copy.lead}
          </p>
          <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{copy.detail}</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)]">
            {copy.rows.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-[var(--line)] px-5 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr]"
              >
                <p className="font-mono text-xs text-[var(--muted)]">{label}</p>
                <p className="text-sm leading-6 text-[var(--muted)]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[0_24px_100px_rgba(0,0,0,0.32)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(103,232,249,0.18),transparent_16rem),radial-gradient(circle_at_82%_34%,rgba(94,234,212,0.1),transparent_18rem)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-60" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[var(--line-strong)] ai-orbit" />
            <div className="pointer-events-none absolute -right-10 top-12 h-32 w-32 rounded-full border border-[var(--line)] ai-orbit" />

            <div className="relative rounded-xl border border-[var(--line)] bg-black/20 p-3">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                </div>
                <p className="font-mono text-xs text-[var(--muted)]">agent-runtime</p>
              </div>

              <div className="relative mt-4 sm:mt-5">
                <div className="absolute left-6 right-6 top-9 hidden h-px ai-pipeline-line lg:block" />
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
                  {copy.flow.map((item, index) => (
                    <div
                      key={item.title}
                      className={`group relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3 ai-node-glow sm:p-4 ${
                        index === copy.flow.length - 1 ? "col-span-2 lg:col-span-1" : ""
                      }`}
                      style={{ animationDelay: `${index * 260}ms` }}
                    >
                      <div
                        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[var(--line)] to-transparent ai-signal"
                        style={{ animationDelay: `${index * 420}ms` }}
                      />
                      <div className="relative flex items-center justify-between gap-3">
                        <p className="font-mono text-xs text-[var(--muted)]">0{index + 1}</p>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--panel)]">
                          <div className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                        </div>
                      </div>
                      <p className="relative mt-5 text-sm font-semibold text-[var(--foreground)] sm:mt-7">
                        {item.title}
                      </p>
                      <p className="relative mt-2 hidden min-h-10 text-xs leading-5 text-[var(--muted)] sm:block">
                        {item.caption}
                      </p>
                      <p className="relative mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:mt-4">
                        {item.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:mt-4 lg:grid-cols-[1fr_0.78fr]">
                <div className="hidden rounded-xl border border-[var(--line)] bg-black/25 p-4 md:block">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs text-[var(--muted)]">execution trace</p>
                    <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-2.5 py-1 font-mono text-[0.68rem] text-[var(--accent-text)]">
                      controlled
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {copy.consoleLines.map(([label, value], index) => (
                      <div
                        key={label}
                        className="grid gap-2 font-mono text-xs sm:grid-cols-[5.5rem_1fr] ai-console-line"
                        style={{ animationDelay: `${index * 480}ms` }}
                      >
                        <span className="text-[var(--muted)]">{label}</span>
                        <span className="text-[var(--muted)]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl lvl-2 border p-3 sm:p-4">
                  <p className="font-mono text-xs text-[var(--muted)]">tool surface</p>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                    {toolSignals.map((item) => (
                      <span
                        key={item}
                        className="rounded-full lvl-3 border px-2.5 py-1.5 font-mono text-[0.68rem] text-[var(--muted)] sm:px-3 sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5">
                    {[
                      ["lat", "<1s"],
                      ["cost", "cap"],
                      ["eval", "on"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-lg border border-[var(--line)] bg-black/20 p-2.5 sm:p-3">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                          {label}
                        </p>
                        <p className="mt-2 font-mono text-sm text-[var(--foreground)]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl lvl-2 border p-6">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">{copy.principlesTitle}</h3>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {copy.principles.map((item) => (
                <div key={item.title}>
                  <h4 className="text-sm font-semibold text-[var(--accent-text)]">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
