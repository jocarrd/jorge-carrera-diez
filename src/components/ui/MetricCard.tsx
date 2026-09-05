import type { Metric } from "@/types/content";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl lvl-2 border p-4 sm:p-5">
      <div className="absolute inset-x-0 top-0 h-px scanline" />
      <p className="font-mono text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
        {metric.value}
      </p>
      <p className="mt-2 text-sm font-medium text-[var(--accent-text)]">{metric.label}</p>
      {metric.detail ? (
        <p className="mt-2 text-xs leading-5 text-[var(--muted)] sm:mt-3">{metric.detail}</p>
      ) : null}
    </div>
  );
}
