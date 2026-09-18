"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

const DEFAULT_STEP_MS = 70;
const MAX_STEPS = 5;

type RevealChildrenProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  step?: number;
  delay?: number;
};

export function RevealChildren({
  children,
  as: Wrapper = "div",
  className = "",
  step = DEFAULT_STEP_MS,
  delay = 0,
}: RevealChildrenProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(el.children) as HTMLElement[];
    items.forEach((item, index) => {
      item.style.transitionDelay = `${delay + Math.min(index, MAX_STEPS) * step}ms`;
      item.classList.add("reveal-init");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          const alreadyPassed =
            entry.boundingClientRect.bottom < window.innerHeight;
          if (!entry.isIntersecting && !alreadyPassed) continue;
          target.classList.add("reveal-in");
          io.unobserve(target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    for (const item of items) io.observe(item);
    return () => io.disconnect();
  }, [delay, step]);

  return (
    <Wrapper ref={ref} className={className}>
      {children}
    </Wrapper>
  );
}
