import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Marked } from "marked";
import type { Locale } from "@/i18n/config";

export type PostFrontMatter = {
  title: string;
  description: string;
  date: string;
  cover: string;
  coverAlt: string;
  preview: string;
  previewAlt: string;
  tags: string[];
};

export type PostSummary = PostFrontMatter & {
  slug: string;
  minutes: number;
};

export type TocEntry = { id: string; text: string };

export type Post = PostSummary & { html: string; toc: TocEntry[] };

const BLOG_DIR = join(process.cwd(), "src/content/blog");
const WORDS_PER_MINUTE = 220;
const REQUIRED: (keyof PostFrontMatter)[] = [
  "title",
  "description",
  "date",
  "cover",
  "coverAlt",
  "preview",
  "previewAlt",
  "tags",
];

function unquote(value: string) {
  const v = value.trim();
  return (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
    ? v.slice(1, -1)
    : v;
}

function parseFrontMatter(source: string, file: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: falta el front matter`);
  const data: Record<string, string | string[]> = {};
  let listKey: string | null = null;
  for (const raw of match[1].split("\n")) {
    if (!raw.trim()) continue;
    const item = raw.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      (data[listKey] as string[]).push(unquote(item[1]));
      continue;
    }
    const pair = raw.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (!pair) throw new Error(`${file}: línea no válida: ${raw}`);
    const [, key, value] = pair;
    if (value === "") {
      data[key] = [];
      listKey = key;
    } else {
      listKey = null;
      data[key] = unquote(value);
    }
  }
  for (const key of REQUIRED) {
    if (data[key] === undefined)
      throw new Error(`${file}: falta el campo "${key}"`);
  }
  return { data: data as PostFrontMatter, body: match[2] };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const CALLOUT = /^> \[!(SUMMARY|NOTE)\] ?(.*)\n((?:>.*\n?)*)/gm;

function expandCallouts(body: string) {
  return body.replace(
    CALLOUT,
    (_match, kind: string, title: string, rest: string) => {
      const inner = rest
        .split("\n")
        .map((line) => line.replace(/^> ?/, ""))
        .join("\n")
        .trim();
      const heading = title
        ? `<p class="post-callout-title">${escapeHtml(title)}</p>`
        : "";
      return `<aside class="post-callout post-callout--${kind.toLowerCase()}">${heading}\n\n${inner}\n\n</aside>\n`;
    },
  );
}

function render(body: string) {
  const toc: TocEntry[] = [];
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const id = slugify(text);
        if (depth === 2) toc.push({ id, text: text.replace(/<[^>]+>/g, "") });
        return `<h${depth} id="${id}"><a class="post-anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${text}</h${depth}>`;
      },
      image({ href, text, title }) {
        const caption = title
          ? `<figcaption>${escapeHtml(title)}</figcaption>`
          : "";
        return `<figure class="post-figure"><a href="${escapeHtml(href)}" target="_blank" rel="noopener"><img src="${escapeHtml(href)}" alt="${escapeHtml(text)}" loading="lazy" decoding="async" /></a>${caption}</figure>`;
      },
      paragraph({ tokens }) {
        const only = tokens.length === 1 && tokens[0].type === "image";
        const inner = this.parser.parseInline(tokens);
        return only ? inner : `<p>${inner}</p>`;
      },
      link({ href, tokens }) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href);
        return external
          ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${text}</a>`
          : `<a href="${escapeHtml(href)}">${text}</a>`;
      },
    },
  });
  return { html: marked.parse(expandCallouts(body)) as string, toc };
}

function readPost(
  locale: Locale,
  file: string,
): { summary: PostSummary; body: string } {
  const path = join(BLOG_DIR, locale, file);
  const { data, body } = parseFrontMatter(readFileSync(path, "utf8"), path);
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    summary: {
      ...data,
      slug: file.replace(/\.md$/, ""),
      minutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    },
    body,
  };
}

export function getPosts(locale: Locale): PostSummary[] {
  return getPostSlugs(locale)
    .map((slug) => readPost(locale, `${slug}.md`).summary)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string): Post | null {
  if (!getPostSlugs(locale).includes(slug)) return null;
  const { summary, body } = readPost(locale, `${slug}.md`);
  return { ...summary, ...render(body) };
}

export function getPostSlugs(locale: Locale): string[] {
  return readdirSync(join(BLOG_DIR, locale))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
