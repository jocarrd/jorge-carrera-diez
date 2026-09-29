"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export function LightOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = Array.from(ref.current?.children ?? []) as HTMLElement[];
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const item = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            item.dataset.lit = "";
            item.dataset.seen = "";
          } else {
            delete item.dataset.lit;
            if (entry.boundingClientRect.top > 0) delete item.dataset.seen;
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    for (const item of items) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={ref} className={className}>
      {children}
    </ol>
  );
}
