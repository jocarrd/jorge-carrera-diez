"use client";

import { useEffect } from "react";

export function PostEnhancer({
  targetId,
  copyLabel,
  copiedLabel,
}: {
  targetId: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;

    for (const button of root.querySelectorAll<HTMLButtonElement>(
      ".post-code-copy",
    )) {
      button.textContent = copyLabel;
    }

    const onClick = async (event: MouseEvent) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
        ".post-code-copy",
      );
      if (!button) return;
      const code = button.closest(".post-code")?.querySelector("code");
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.textContent ?? "");
        button.textContent = copiedLabel;
        button.dataset.done = "";
        window.setTimeout(() => {
          button.textContent = copyLabel;
          delete button.dataset.done;
        }, 1800);
      } catch {
        button.textContent = copyLabel;
      }
    };
    root.addEventListener("click", onClick);

    const quotes = root.querySelectorAll<HTMLElement>(".post-body blockquote");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.lit = "";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -35% 0px" },
    );
    for (const quote of quotes) observer.observe(quote);

    return () => {
      root.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, [targetId, copyLabel, copiedLabel]);

  return null;
}
