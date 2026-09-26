import type { CSSProperties } from "react";
import { PlayOnView } from "@/components/ui";

type Vital = {
  name: string;
  full: string;
  good: string;
  poor: string;
  text: string;
};

export function VitalsScale({
  items,
  scale,
}: {
  items: Vital[];
  scale: { good: string; improve: string; poor: string };
}) {
  return (
    <PlayOnView className="vitals mt-10 grid gap-5 sm:mt-14 sm:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.name}
          className="vital"
          style={{ "--i": index } as CSSProperties}
        >
          <p className="vital-name">{item.name}</p>
          <p className="vital-full">{item.full}</p>
          <div aria-hidden className="vital-bar">
            <span className="vital-zone vital-good" />
            <span className="vital-zone vital-improve" />
            <span className="vital-zone vital-poor" />
            <span className="vital-marker" />
          </div>
          <div className="vital-legend">
            <span>
              {scale.good} {item.good}
            </span>
            <span>
              {scale.poor} {item.poor}
            </span>
          </div>
          <p className="vital-text">{item.text}</p>
        </div>
      ))}
    </PlayOnView>
  );
}
