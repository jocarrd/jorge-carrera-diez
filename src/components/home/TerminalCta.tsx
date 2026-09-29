"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function TerminalCta({
  email,
  command,
  hint,
}: {
  email: string;
  command: string;
  hint: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [typedChars, setChars] = useState(0);
  const [started, setStarted] = useState(false);
  const reduced = useReducedMotion();
  const chars = reduced ? command.length : typedChars;

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!started || chars >= command.length) return;
    const timer = setTimeout(() => setChars((c) => c + 1), 55);
    return () => clearTimeout(timer);
  }, [started, chars, command.length]);

  const typed = chars >= command.length;

  return (
    <a ref={ref} href={`mailto:${email}`} className="term-cta">
      <span className="term-cta-bar" aria-hidden>
        <i />
        <i />
        <i />
        <span>jorge@logroño</span>
      </span>
      <span className="term-cta-body">
        <span className="term-cta-line">
          <span aria-hidden className="crux-prompt">
            $
          </span>{" "}
          {command.slice(0, chars)}
          {!typed ? <span aria-hidden className="crux-caret" /> : null}
        </span>
        <span className="term-cta-mail" data-shown={typed || undefined}>
          <span aria-hidden className="term-cta-arrow">
            →
          </span>{" "}
          {email}
          {typed ? <span aria-hidden className="crux-caret" /> : null}
        </span>
        <span className="term-cta-hint">
          <kbd>Enter</kbd> {hint}
        </span>
      </span>
    </a>
  );
}
