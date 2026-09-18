"use client";

import { useEffect, useRef } from "react";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

const FIRST_DELAY_S = 0.25;
const STEP_DELAY_S = 0.42;

export function DeliveryCycle({ locale }: { locale: Locale }) {
  const cycle = getCopy(locale).hero.cycle;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.remove("is-done");
    el.classList.add("is-armed");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
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
    <div ref={ref} className="cycle is-done" aria-hidden>
      <div className="cycle-in">
        <div className="cycle-head">
          <p className="cycle-label">{cycle.label}</p>
          <p className="cycle-state">
            <span className="cycle-led" />
            {cycle.state}
          </p>
        </div>

        <ol className="cycle-steps">
          {cycle.steps.map((step, index) => (
            <li
              key={step.title}
              style={{
                ["--d" as string]: `${FIRST_DELAY_S + index * STEP_DELAY_S}s`,
              }}
            >
              <span className="cycle-dot">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6.2l2.3 2.3 4.7-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="cycle-text">
                <b>{step.title}</b>
                <em>{step.caption}</em>
              </span>
              <span className="cycle-tag">{step.tag}</span>
            </li>
          ))}
        </ol>

        <div className="cycle-foot">
          <p className="cycle-domains">{cycle.foot}</p>
          <p className="cycle-badge">{cycle.badge}</p>
        </div>
      </div>
    </div>
  );
}
