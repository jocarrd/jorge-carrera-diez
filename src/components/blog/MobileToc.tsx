"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/lib/blog/posts";

export function MobileToc({
  entries,
  label,
  closeLabel,
  startId,
}: {
  entries: TocEntry[];
  label: string;
  closeLabel: string;
  startId: string;
}) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const start = document.getElementById(startId);
    if (!start) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(start);
    return () => observer.disconnect();
  }, [startId]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={`mobile-toc ${visible || open ? "is-visible" : ""}`}>
      {open ? (
        <nav className="mobile-toc-panel" aria-label={label}>
          <ol>
            {entries.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} onClick={() => setOpen(false)}>
                  {entry.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <button
        type="button"
        className="mobile-toc-button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? closeLabel : label}
      </button>
    </div>
  );
}
