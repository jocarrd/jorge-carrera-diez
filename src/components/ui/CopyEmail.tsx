"use client";

import { useState } from "react";

// Un `mailto:` en un móvil o en un escritorio sin cliente de correo no hace
// nada al pulsarlo, y ahí se pierde el contacto. El correo se enseña escrito y
// se puede copiar de un toque; el enlace queda como atajo, no como única vía.
export function CopyEmail({ email, label }: { email: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label}: ${email}`}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 text-[15px] text-[var(--foreground)] transition-colors hover:bg-[var(--panel)]"
    >
      <span>{copied ? label : email}</span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="shrink-0 text-[var(--muted)]"
      >
        {copied ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <rect x="9" y="9" width="12" height="12" rx="2.5" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </>
        )}
      </svg>
    </button>
  );
}
