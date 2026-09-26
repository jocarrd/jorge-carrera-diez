import type { CSSProperties } from "react";
import { PlayOnView } from "@/components/ui";

const EMPTY_HTML = [
  "<body>",
  '  <div id="root"></div>',
  '  <script src="/assets/index.js"></script>',
  "</body>",
];

const RENDERED_HTML = [
  "<title>Playa Centro de Guardamar hoy:",
  "  estado del mar, oleaje y banderas | Snowy</title>",
  '<meta name="description" content="Hoy en Playa',
  "  Centro de Guardamar (Guardamar del Segura,",
  "  Alicante): mar marejadilla, bandera verde",
  '  prevista por oleaje, olas de 0,5 m, agua a 26°.">',
  "<h1>Playa Centro de Guardamar</h1>",
];

type Side = { label: string; caption: string };

function CodePanel({
  side,
  lines,
  tone,
}: {
  side: Side;
  lines: string[];
  tone: "empty" | "full";
}) {
  return (
    <figure className={`render-panel render-${tone}`}>
      <figcaption className="render-label">{side.label}</figcaption>
      <pre className="render-code">
        <code>
          {lines.map((line, index) => (
            <span
              key={line}
              className="render-line"
              style={{ "--i": index } as CSSProperties}
            >
              {line}
            </span>
          ))}
        </code>
      </pre>
      <p className="render-caption">{side.caption}</p>
    </figure>
  );
}

export function RenderCompare({
  before,
  after,
}: {
  before: Side;
  after: Side;
}) {
  return (
    <PlayOnView className="render-compare mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2">
      <CodePanel side={before} lines={EMPTY_HTML} tone="empty" />
      <CodePanel side={after} lines={RENDERED_HTML} tone="full" />
    </PlayOnView>
  );
}
