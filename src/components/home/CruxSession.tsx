"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Step = { command: string; output: string; metric: string };
type Concept = { title: string; caption: string; metric: string };

const TYPE_MS = 26;

export function CruxSession({
  steps,
  concepts,
  label,
}: {
  steps: Step[];
  concepts: Concept[];
  label: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(1);
  const [typing, setTyping] = useState({ step: 1, chars: 0 });
  const reduced = useReducedMotion();
  const chars = typing.step === revealed ? typing.chars : 0;

  useEffect(() => {
    if (reduced) return;
    const node = rootRef.current;
    if (!node) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const header = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-h",
        ),
      );
      const travel = rect.height - window.innerHeight;
      const progress =
        travel > 0 ? (header + 16 - rect.top) / travel : rect.top < 0 ? 1 : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      setRevealed(
        Math.min(steps.length, Math.floor(clamped * steps.length) + 1),
      );
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
  }, [reduced, steps.length]);

  const current = steps[revealed - 1];
  const typed = reduced || chars >= current.command.length;

  useEffect(() => {
    if (reduced || chars >= current.command.length) return;
    const timer = setTimeout(
      () => setTyping({ step: revealed, chars: chars + 1 }),
      TYPE_MS,
    );
    return () => clearTimeout(timer);
  }, [reduced, chars, revealed, current.command.length]);

  const shownSteps = reduced ? steps : steps.slice(0, revealed);
  const done = reduced ? steps : steps.slice(0, typed ? revealed : revealed - 1);
  const lit = new Set(done.map((s) => s.metric));
  const active = reduced ? null : current.metric;
  const activeConcept = concepts.find((c) => c.metric === active);

  return (
    <div
      ref={rootRef}
      className={reduced ? "crux-scroll is-static" : "crux-scroll"}
      style={{ "--n": steps.length } as CSSProperties}
    >
      <div className="crux-session">
        <div className="crux-term" aria-label={label} role="img">
          <div className="crux-term-bar">
            <span aria-hidden className="crux-term-dots">
              <i />
              <i />
              <i />
            </span>
            <span>{label}</span>
            <span className="crux-progress" aria-hidden>
              {revealed}/{steps.length}
            </span>
          </div>
          <ol className="crux-term-body">
            {shownSteps.map((s, index) => {
              const isLast = !reduced && index === revealed - 1;
              const text =
                isLast && !typed ? s.command.slice(0, chars) : s.command;
              return (
                <li key={s.command} className="crux-step">
                  <p className="crux-cmd">
                    <span aria-hidden className="crux-prompt">
                      $
                    </span>{" "}
                    {text}
                    {isLast && !typed ? (
                      <span aria-hidden className="crux-caret" />
                    ) : null}
                  </p>
                  {!isLast || typed ? (
                    <p className="crux-out">
                      <span className="crux-ok">ok</span> {s.output}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>

        {activeConcept ? (
          <p key={activeConcept.metric} className="crux-now">
            <strong>{activeConcept.title}.</strong> {activeConcept.caption}
          </p>
        ) : null}

        <ul className="crux-concepts">
          {concepts.map((c) => (
            <li
              key={c.metric}
              className="crux-concept"
              data-state={
                active === c.metric
                  ? "active"
                  : lit.has(c.metric)
                    ? "on"
                    : "off"
              }
            >
              <span aria-hidden className="crux-led" />
              <div>
                <p className="crux-concept-title">{c.title}</p>
                <p className="crux-concept-text">{c.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
