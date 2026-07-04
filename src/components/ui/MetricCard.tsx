import type { Metric } from "@/types/content";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <div className="absolute inset-x-0 top-0 h-px scanline" />
      <p className="font-mono text-3xl font-semibold tracking-tight text-white">
        {metric.value}
      </p>
      <p className="mt-2 text-sm font-medium text-cyan-200">{metric.label}</p>
      {metric.detail ? (
        <p className="mt-3 text-xs leading-5 text-slate-500">{metric.detail}</p>
      ) : null}
    </div>
  );
}
