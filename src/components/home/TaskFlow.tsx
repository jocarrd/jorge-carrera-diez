"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Step = {
  kicker: string;
  title: string;
  text: string;
  command: string;
  output: string;
};

export function TaskFlow({
  steps,
  label,
  commandsLabel,
}: {
  steps: Step[];
  label: string;
  commandsLabel: string;
}) {
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const [lit, setLit] = useState(-1);
  const shown = reduced ? steps.length - 1 : lit;

  useEffect(() => {
    if (reduced) return;
    const items =
      listRef.current?.querySelectorAll<HTMLLIElement>("[data-step]");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.step);
          setLit((prev) => Math.max(prev, index));
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -30% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [reduced]);

  const fill = steps.length > 1 ? Math.max(0, shown) / (steps.length - 1) : 1;

  return (
    <div>
      <ol
        ref={listRef}
        aria-label={label}
        className="task-flow"
        style={{ "--fill": fill } as React.CSSProperties}
      >
        <span aria-hidden className="task-flow-rail" />
        <span aria-hidden className="task-flow-fill" />
        {steps.map((step, index) => (
          <li
            key={step.title}
            data-step={index}
            data-on={index <= shown || undefined}
            className="task-step"
          >
            <div>
              <p className="task-step-kicker">{step.kicker}</p>
              <h3 className="task-step-title">{step.title}</h3>
              <p className="task-step-text">{step.text}</p>
            </div>
            <span aria-hidden className="task-step-check">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M4.5 10.5l3.5 3.5 7.5-8"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </li>
        ))}
      </ol>
      <details className="task-cmds">
        <summary>{commandsLabel}</summary>
        <ol>
          {steps.map((step) => (
            <li key={step.command}>
              <span className="crux-prompt" aria-hidden>
                ${" "}
              </span>
              {step.command}
              <span>{step.output}</span>
            </li>
          ))}
        </ol>
      </details>
    </div>
  );
}
