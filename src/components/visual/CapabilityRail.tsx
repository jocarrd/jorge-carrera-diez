import { Rail } from "@/components/ui";
import { CapabilityArt } from "@/components/visual/CapabilityArt";

export type Capability = { title: string; text: string };

type CapabilityRailProps = {
  items: Capability[];
  label: string;
  className?: string;
};

export function CapabilityRail({
  items,
  label,
  className = "",
}: CapabilityRailProps) {
  return (
    <Rail label={label} className={className}>
      {items.map((item, index) => (
        <article key={item.title} className="cap rail-item">
          <p className="cap-num">{String(index + 1).padStart(2, "0")}</p>
          <CapabilityArt kind={index} />
          <h3 className="cap-title">{item.title}</h3>
          <p className="cap-text">{item.text}</p>
        </article>
      ))}
    </Rail>
  );
}
