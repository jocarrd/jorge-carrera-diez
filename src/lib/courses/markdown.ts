import { Marked, type Tokens } from "marked";

export type LessonFrontMatter = {
  id: string;
  module: number;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  minutes: number;
  objectives: string[];
  updated: string;
};

export type TocEntry = { id: string; text: string };

// El front matter de las lecciones es un subconjunto pequeño de YAML: textos,
// números y una lista. Un parser propio evita una dependencia para eso, y lo
// que no entiende lo dice en vez de dejar un campo vacío.
export function parseFrontMatter(source: string, file: string): { data: LessonFrontMatter; body: string } {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: falta el front matter`);
  const data: Record<string, unknown> = {};
  let listKey: string | null = null;
  for (const raw of match[1].split("\n")) {
    const line = raw.replace(/\s+#.*$/, "");
    if (!line.trim()) continue;
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      (data[listKey] as string[]).push(unquote(item[1]));
      continue;
    }
    const pair = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (!pair) throw new Error(`${file}: línea de front matter no válida: ${raw}`);
    const [, key, value] = pair;
    if (value === "") {
      data[key] = [];
      listKey = key;
    } else {
      listKey = null;
      data[key] = /^\d+$/.test(value) ? Number(value) : unquote(value);
    }
  }
  for (const key of ["id", "module", "title", "description", "level", "minutes", "objectives", "updated"]) {
    if (data[key] === undefined) throw new Error(`${file}: falta el campo "${key}"`);
  }
  return { data: data as LessonFrontMatter, body: match[2] };
}

function unquote(value: string) {
  const v = value.trim();
  return (v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")) ? v.slice(1, -1) : v;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function toSeconds(hms: string) {
  const [h, m, s] = hms.split(":").map(Number);
  return h * 3600 + m * 60 + s;
}

type RenderOptions = {
  liveUrl: string;
  labels: { copy: string; prompt: string; live: string };
  calloutLabels: Record<"NOTE" | "TIP" | "WARNING", string>;
};

export function renderLesson(body: string, options: RenderOptions): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const marked = new Marked({ gfm: true });

  marked.use({
    extensions: [
      {
        // {{live 0:43:54 "Etiqueta"}} → enlace al minuto exacto del directo.
        name: "live",
        level: "inline",
        start: (src: string) => src.indexOf("{{live"),
        tokenizer(src: string) {
          const m = src.match(/^\{\{live (\d+:\d{2}:\d{2}) "([^"]+)"\}\}/);
          if (!m) return undefined;
          return { type: "live", raw: m[0], time: m[1], label: m[2] };
        },
        renderer(token) {
          const t = token as unknown as { time: string; label: string };
          const href = `${options.liveUrl}?t=${toSeconds(t.time)}s`;
          return `<a class="live-chip" href="${href}" target="_blank" rel="noopener noreferrer"><span class="live-chip-dot" aria-hidden="true"></span><span class="live-chip-time">${t.time}</span><span class="live-chip-label">${escapeHtml(t.label)}</span></a>`;
        },
      },
    ],
    renderer: {
      heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Heading) {
        const inner = this.parser.parseInline(token.tokens);
        const id = slugify(token.text);
        if (token.depth === 2) toc.push({ id, text: inner.replace(/<[^>]+>/g, "") });
        const level = Math.min(token.depth + 0, 4);
        return `<h${level} id="${id}"><a class="lesson-anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${inner}</h${level}>\n`;
      },
      code(token: Tokens.Code) {
        if (token.lang === "prompt") {
          // En el fichero los prompts van cortados a mano para leerlos en el editor; en la web cada frase fluye con el ancho.
          const text = token.text.replace(/([^.:?!\n])\n(?![ \t]*(?:[-*•]|\d+[.)])[ \t])(?=[ \t]*\S)[ \t]*/g, "$1 ");
          return `<div class="lesson-prompt"><div class="lesson-prompt-head"><span>${options.labels.prompt}</span><button type="button" class="lesson-copy" data-copy>${options.labels.copy}</button></div><pre><code>${escapeHtml(text)}</code></pre></div>\n`;
        }
        const lang = token.lang ? ` data-lang="${escapeHtml(token.lang)}"` : "";
        return `<pre class="lesson-code"${lang}><code>${escapeHtml(token.text)}</code></pre>\n`;
      },
      link(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Link) {
        const inner = this.parser.parseInline(token.tokens);
        const external = /^https?:\/\//.test(token.href);
        return `<a href="${escapeHtml(token.href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`;
      },
    },
  });

  let html = marked.parse(body, { async: false }) as string;

  // Callouts con la sintaxis de GitHub: > [!TIP] en la primera línea de la cita.
  html = html.replace(
    /<blockquote>\s*<p>\[!(NOTE|TIP|WARNING)\]\s*(?:<br>)?\s*([\s\S]*?)<\/blockquote>/g,
    (_, kind: "NOTE" | "TIP" | "WARNING", rest: string) =>
      `<aside class="lesson-callout lesson-callout--${kind.toLowerCase()}"><p class="lesson-callout-title">${options.calloutLabels[kind]}</p><p>${rest}</aside>`,
  );

  return { html, toc };
}
