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
  // Emisión de cada día; un {{live}} sin día usa el de la página.
  liveUrls: Record<number, string>;
  day: number;
  dayLabel: string;
  // Enlaces para las menciones a otras lecciones y módulos dentro del texto.
  lessonHref: (id: string) => string | null;
  moduleHref: (module: number) => string | null;
  // Términos del glosario: la primera aparición en la lección abre su definición.
  glossary?: { id: string; term: string; forms: string[]; definition: string; href: string; seeLabel: string }[];
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
        // {{live d2 0:43:54 "Etiqueta"}} → lo mismo en la emisión del día 2.
        name: "live",
        level: "inline",
        start: (src: string) => src.indexOf("{{live"),
        tokenizer(src: string) {
          const m = src.match(/^\{\{live (?:d(\d) )?(\d+:\d{2}:\d{2}) "([^"]+)"\}\}/);
          if (!m) return undefined;
          return { type: "live", raw: m[0], day: m[1] ? Number(m[1]) : options.day, time: m[2], label: m[3] };
        },
        renderer(token) {
          const t = token as unknown as { day: number; time: string; label: string };
          const url = options.liveUrls[t.day];
          // Un día sin emisión enlazada rompe el build en vez de publicar un enlace muerto.
          if (!url) throw new Error(`{{live}} apunta al día ${t.day}, que no tiene liveUrl`);
          const href = `${url}?t=${toSeconds(t.time)}s`;
          // Con más de un día publicado, la hora sola no dice de qué emisión es.
          const time = Object.keys(options.liveUrls).length > 1 ? `${options.dayLabel} ${t.day} · ${t.time}` : t.time;
          return `<a class="live-chip" href="${href}" target="_blank" rel="noopener noreferrer"><span class="live-chip-dot" aria-hidden="true"></span><span class="live-chip-time">${time}</span><span class="live-chip-label">${escapeHtml(t.label)}</span></a>`;
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
      // Los esquemas son cuadrados de 1080 px: con el tamaño declarado no mueven el texto al cargar.
      image(token: Tokens.Image) {
        return `<figure class="lesson-figure"><img src="${escapeHtml(token.href)}" alt="${escapeHtml(token.text)}" width="1080" height="1080" loading="lazy" decoding="async"></figure>`;
      },
      link(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Link) {
        const inner = this.parser.parseInline(token.tokens);
        const external = /^https?:\/\//.test(token.href);
        return `<a href="${escapeHtml(token.href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`;
      },
    },
  });

  let html = marked.parse(body, { async: false }) as string;

  // Una imagen sola en su línea llega envuelta en un párrafo, y un <figure> no puede ir dentro de <p>.
  html = html.replace(/<p>(<figure class="lesson-figure">[\s\S]*?<\/figure>)<\/p>/g, "$1");
  html = linkCrossReferences(html, options);
  if (options.glossary?.length) html = markGlossaryTerms(html, options.glossary);

  // Callouts con la sintaxis de GitHub: > [!TIP] en la primera línea de la cita.
  html = html.replace(
    /<blockquote>\s*<p>\[!(NOTE|TIP|WARNING)\]\s*(?:<br>)?\s*([\s\S]*?)<\/blockquote>/g,
    (_, kind: "NOTE" | "TIP" | "WARNING", rest: string) =>
      `<aside class="lesson-callout lesson-callout--${kind.toLowerCase()}"><p class="lesson-callout-title">${options.calloutLabels[kind]}</p><p>${rest}</aside>`,
  );

  return { html, toc };
}

// "lección 05", "lecciones 01 y 05", "lesson 15", "módulo 8" → enlaces. Solo en
// texto corrido: dentro de un enlace, un titular, un bloque de código o un prompt
// no se toca nada.
const SKIP = new Set(["a", "code", "pre", "h1", "h2", "h3", "h4", "button"]);
const LESSON_REF = /\b(lecci[oó]n(?:es)?|lessons?)\s+(\d{2})((?:(?:,\s*|\s+(?:y|o|and|or)\s+)\d{2})*)/gi;
const MODULE_REF = /\b(m[oó]dulos?|modules?)\s+(\d)\b/gi;

function linkCrossReferences(html: string, options: RenderOptions): string {
  const open: string[] = [];
  return html
    .split(/(<[^>]+>)/)
    .map((part) => {
      const tag = part.match(/^<(\/)?([a-z0-9]+)/i);
      if (tag) {
        const name = tag[2].toLowerCase();
        if (SKIP.has(name) && !part.endsWith("/>")) {
          if (tag[1]) open.splice(open.lastIndexOf(name), 1);
          else open.push(name);
        }
        return part;
      }
      if (open.length > 0 || !part) return part;
      const link = (href: string | null, text: string) => (href ? `<a class="lesson-ref" href="${href}">${text}</a>` : text);
      return part
        .replace(LESSON_REF, (whole, word: string, first: string, rest: string) => {
          const tail = rest.replace(/\d{2}/g, (id) => link(options.lessonHref(id), id));
          return `${link(options.lessonHref(first), `${word} ${first}`)}${tail}`;
        })
        .replace(MODULE_REF, (whole, word: string, n: string) => link(options.moduleHref(Number(n)), whole));
    })
    .join("");
}

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// Tampoco se marcan términos en negrita: ahí suelen ser etiquetas de la interfaz.
const TERM_SKIP = new Set([...SKIP, "strong", "summary"]);

function markGlossaryTerms(html: string, terms: NonNullable<RenderOptions["glossary"]>): string {
  const pending = new Map(terms.map((t) => [t.id, t]));
  const open: string[] = [];
  let bodyStarted = false;
  return html
    .split(/(<[^>]+>)/)
    .map((part) => {
      const tag = part.match(/^<(\/)?([a-z0-9]+)/i);
      if (tag) {
        const name = tag[2].toLowerCase();
        if (TERM_SKIP.has(name) && !part.endsWith("/>")) {
          if (tag[1]) open.splice(open.lastIndexOf(name), 1);
          else open.push(name);
        }
        // Lo que va antes del primer titular es la entradilla de la lección: se deja limpia.
        if (!tag[1] && name === "h2") bodyStarted = true;
        return part;
      }
      if (!bodyStarted || open.length > 0 || !part.trim() || pending.size === 0) return part;
      let text = part;
      for (const term of [...pending.values()]) {
        const re = new RegExp(`(^|[^\\p{L}\\p{N}-])(${term.forms.map(escapeRegex).join("|")})(?=$|[^\\p{L}\\p{N}-])`, "iu");
        const m = text.match(re);
        if (!m || m.index === undefined) continue;
        const start = m.index + m[1].length;
        const word = m[2];
        const popId = `termino-${term.id}`;
        const button = `<button type="button" class="lesson-term" popovertarget="${popId}">${word}</button><span id="${popId}" popover class="lesson-term-pop"><strong>${escapeHtml(term.term)}</strong> ${escapeHtml(term.definition)} <a href="${term.href}">${escapeHtml(term.seeLabel)} →</a></span>`;
        text = text.slice(0, start) + button + text.slice(start + word.length);
        pending.delete(term.id);
        // El texto ya lleva etiquetas: el resto de términos esperan al siguiente trozo.
        break;
      }
      return text;
    })
    .join("");
}
