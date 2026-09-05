"use client";

export function PrintButton({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--panel)]"
      >
        {label}
      </button>
      <p className="mt-2 text-xs text-[var(--muted)]">{hint}</p>
    </div>
  );
}
