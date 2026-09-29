"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Shot = {
  imageMobile: string;
  title: string;
  caption: string;
  alt: string;
};

export function SnowyScroll({ shots }: { shots: Shot[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = travel > 0 ? -rect.top / travel : 0;
      const clamped = Math.min(0.999, Math.max(0, progress));
      setActive(Math.floor(clamped * shots.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [reduced, shots.length]);

  if (reduced) {
    return (
      <ul className="sn-static">
        {shots.map((shot) => (
          <li key={shot.imageMobile}>
            <div className="sn-phone">
              <Image
                src={shot.imageMobile}
                alt={shot.alt}
                width={780}
                height={1688}
                sizes="260px"
              />
            </div>
            <p className="sn-title">{shot.title}</p>
            <p className="sn-caption">{shot.caption}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      ref={ref}
      className="sn-scroll"
      style={{ "--n": shots.length } as CSSProperties}
    >
      <div className="sn-stage">
        <ol className="sn-steps">
          {shots.map((shot, index) => (
            <li
              key={shot.imageMobile}
              className="sn-step"
              data-state={
                index === active ? "on" : index < active ? "past" : "next"
              }
            >
              <p className="sn-title">{shot.title}</p>
              <p className="sn-caption">{shot.caption}</p>
            </li>
          ))}
        </ol>

        <div className="sn-phone" aria-live="polite">
          {shots.map((shot, index) => (
            <Image
              key={shot.imageMobile}
              src={shot.imageMobile}
              alt={index === active ? shot.alt : ""}
              width={780}
              height={1688}
              sizes="280px"
              data-on={index === active || undefined}
            />
          ))}
          <span aria-hidden className="sn-island" />
        </div>

        <ol className="sn-dots" aria-hidden>
          {shots.map((shot, index) => (
            <li key={shot.imageMobile} data-on={index === active || undefined} />
          ))}
        </ol>
      </div>
    </div>
  );
}
