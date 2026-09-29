"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Step = { command: string; output: string; metric: string };
type Concept = { title: string; caption: string; metric: string };

const TYPE_MS = 24;

function SessionStep({
  step,
  concept,
  instant,
  onDone,
}: {
  step: Step;
  concept?: Concept;
  instant: boolean;
  onDone: () => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [started, setStarted] = useState(false);
  const [chars, setChars] = useState(0);
  const shown = instant ? step.command.length : chars;
  const typed = shown >= step.command.length;

  useEffect(() => {
    if (instant) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [instant]);

  useEffect(() => {
    if (instant || !started) return;
    if (chars >= step.command.length) {
      onDone();
      return;
    }
    const timer = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
    return () => clearTimeout(timer);
  }, [instant, started, chars, step.command.length, onDone]);

  return (
    <li
      ref={ref}
      className="crux-step"
      data-state={typed && (instant || started) ? "done" : started ? "typing" : "idle"}
    >
      <p className="crux-cmd">
        <span aria-hidden className="crux-prompt">
          $
        </span>{" "}
        {step.command.slice(0, shown)}
        {started && !typed ? <span aria-hidden className="crux-caret" /> : null}
      </p>
      <div className="crux-result">
        <p className="crux-out">
          <span className="crux-ok">ok</span> {step.output}
        </p>
        {concept ? (
          <p className="crux-tag">
            <span aria-hidden className="crux-led" />
            <strong>{concept.title}</strong>
            <span>{concept.caption}</span>
          </p>
        ) : null}
      </div>
    </li>
  );
}

export function CruxSession({
  steps,
  concepts,
  label,
}: {
  steps: Step[];
  concepts: Concept[];
  label: string;
}) {
  const reduced = useReducedMotion();
  const [done, setDone] = useState<Set<number>>(() => new Set());

  return (
    <div className="crux-session">
      <div className="crux-term">
        <div className="crux-term-bar">
          <span aria-hidden className="crux-term-dots">
            <i />
            <i />
            <i />
          </span>
          <span>{label}</span>
          <span className="crux-progress" aria-hidden>
            {reduced ? steps.length : done.size}/{steps.length}
          </span>
        </div>
        <ol className="crux-term-body">
          {steps.map((step, index) => (
            <SessionStep
              key={step.command}
              step={step}
              concept={concepts.find((c) => c.metric === step.metric)}
              instant={reduced}
              onDone={() =>
                setDone((prev) =>
                  prev.has(index) ? prev : new Set(prev).add(index),
                )
              }
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
