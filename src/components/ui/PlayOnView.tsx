"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

export function PlayOnView({
  children,
  className = "",
  as: Wrapper = "div",
  style,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  role?: string;
  "aria-label"?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("is-armed");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const passed = entry.boundingClientRect.bottom < window.innerHeight;
          if (!entry.isIntersecting && !passed) continue;
          el.classList.remove("is-armed");
          el.classList.add("is-running");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} className={`play ${className}`} style={style} {...rest}>
      {children}
    </Wrapper>
  );
}
