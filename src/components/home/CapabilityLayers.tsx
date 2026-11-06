"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type Capability = {
  layer: string;
  title: string;
  text: string;
  stack: string[];
};

export function CapabilityLayers({
  heading,
  items,
}: {
  heading: ReactNode;
  items: Capability[];
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [scrolled, setScrolled] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? scrolled;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = grid.getBoundingClientRect();
      const vh = window.innerHeight;
      const spread = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
      grid.style.setProperty("--spread", spread.toFixed(3));

      const focus = vh * 0.5;
      let best = 0;
      let bestDistance = Infinity;
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const box = row.getBoundingClientRect();
        const distance = Math.abs(box.top + box.height / 2 - focus);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      setScrolled(rect.top > vh * 0.35 ? 0 : best);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={gridRef} className="caps-grid" data-active={active}>
      <div className="caps-aside">
        {heading}
        <div
          className="caps-stack"
          aria-hidden
          onMouseLeave={() => setHovered(null)}
        >
          {items.map((item, index) => (
            <div
              key={item.layer}
              className="caps-plate"
              data-on={index === active || undefined}
              style={{ "--i": index } as CSSProperties}
              onMouseEnter={() => setHovered(index)}
            >
              <span className="caps-plate-label">{item.layer}</span>
              <span className="caps-plate-stack">
                {item.stack.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ul className="caps-list" onMouseLeave={() => setHovered(null)}>
        {items.map((item, index) => (
          <li
            key={item.title}
            ref={(node) => {
              rowRefs.current[index] = node;
            }}
            className="caps-row"
            data-on={index === active || undefined}
            onMouseEnter={() => setHovered(index)}
          >
            <span aria-hidden className="caps-dot" />
            <div className="caps-row-head">
              <h3 className="caps-title">{item.title}</h3>
              <p className="caps-text">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
