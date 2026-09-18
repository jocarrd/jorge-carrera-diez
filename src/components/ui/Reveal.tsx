"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Wrapper = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;

  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transitionDelay = `${delay}ms`;
    el.classList.add("reveal-init");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const yaPasado = entry.boundingClientRect.bottom < window.innerHeight;
          if (!entry.isIntersecting && !yaPasado) continue;
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },

      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Wrapper ref={ref} className={className}>
      {children}
    </Wrapper>
  );
}
