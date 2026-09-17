"use client";

import { useState } from "react";

/**
 * Compartir un enlace: en el móvil abre el menú nativo; en escritorio lo copia.
 * Copiar el enlace es de lo que más pesa en X al repartir alcance.
 */
export function ShareButton({
  url,
  title,
  label,
  copiedLabel,
  className = "",
  iconOnly = false,
}: {
  url: string;
  title: string;
  label: string;
  copiedLabel: string;
  className?: string;
  iconOnly?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={iconOnly ? (copied ? copiedLabel : label) : undefined}
      title={iconOnly ? label : undefined}
      className={`share-button ${iconOnly ? "share-button--icon" : ""} ${copied ? "is-copied" : ""} ${className}`}
      onClick={async () => {
        const absolute = new URL(url, window.location.origin).toString();
        if (navigator.share && window.matchMedia("(hover: none)").matches) {
          try {
            await navigator.share({ title, url: absolute });
            return;
          } catch {
            // Cancelado o no disponible: se copia en su lugar.
          }
        }
        try {
          await navigator.clipboard.writeText(absolute);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1800);
        } catch {
          // Sin portapapeles no hay nada más que hacer: la URL está en la barra.
        }
      }}
    >
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3.2-3.2a4.5 4.5 0 0 0-6.4-6.4l-1.1 1.1M14 10a4.5 4.5 0 0 0-6.4 0l-3.2 3.2a4.5 4.5 0 0 0 6.4 6.4l1.1-1.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {iconOnly ? (
        <span className="share-button-toast" aria-live="polite">
          {copied ? copiedLabel : ""}
        </span>
      ) : (
        <span aria-live="polite">{copied ? copiedLabel : label}</span>
      )}
    </button>
  );
}
