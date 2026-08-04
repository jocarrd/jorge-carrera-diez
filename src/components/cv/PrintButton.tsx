"use client";

export function PrintButton({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
      >
        {label}
      </button>
      <p className="mt-2 text-xs text-slate-500">{hint}</p>
    </div>
  );
}
