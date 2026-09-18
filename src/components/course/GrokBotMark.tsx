import {
  GROK_BOT_SHAPES,
  GROK_BOT_TRANSFORM,
  GROK_BOT_VIEWBOX,
  type GrokBotShape,
} from "@/components/course/grok-bot-shapes";

type GrokBotMarkProps = {
  shape?: GrokBotShape;
  className?: string;
  title?: string;
};

export function GrokBotMark({
  shape = "circle",
  className = "",
  title,
}: GrokBotMarkProps) {
  const { head, eyes } = GROK_BOT_SHAPES[shape];

  return (
    <svg
      viewBox={GROK_BOT_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={`grok-bot-mark ${className}`}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <g transform={GROK_BOT_TRANSFORM}>
        <path className="grok-bot-mark__head" d={head} />
        {eyes.map((d) => (
          <path key={d.slice(0, 24)} className="grok-bot-mark__eye" d={d} />
        ))}
      </g>
    </svg>
  );
}
