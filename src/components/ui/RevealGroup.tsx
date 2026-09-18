import { Children } from "react";
import type { ElementType, ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

const DEFAULT_STEP_MS = 70;

const MAX_STEPS = 6;

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;

  as?: ElementType;
  itemAs?: ElementType;
  step?: number;
  delay?: number;
};

export function RevealGroup({
  children,
  className = "",
  itemClassName = "",
  as: Wrapper = "div",
  itemAs,
  step = DEFAULT_STEP_MS,
  delay = 0,
}: RevealGroupProps) {
  return (
    <Wrapper className={className}>
      {Children.map(children, (child, index) => (
        <Reveal
          as={itemAs}
          className={itemClassName}
          delay={delay + Math.min(index, MAX_STEPS) * step}
        >
          {child}
        </Reveal>
      ))}
    </Wrapper>
  );
}
