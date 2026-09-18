const PLAYWRIGHT =
  process.env.PLAYWRIGHT_CORE ??
  "/home/anne/.npm/_npx/705bc6b22212b352/node_modules/playwright-core/index.mjs";
const { chromium } = await import(PLAYWRIGHT);

import { readdirSync, readFileSync } from "node:fs";

const CHROME =
  process.env.CHROME_PATH ??
  "/home/anne/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome";
const ORIGIN = process.env.SITE_ORIGIN ?? "http://localhost:3001";
const META = "src/content/courses/grok-bot/meta.ts";

const locale = process.argv[2] ?? "es";
const salida = process.argv[3] ?? `public/images/cursos/grok-bot/portada-${locale}.png`;

const lecciones = readdirSync(
  `src/content/courses/grok-bot/lessons/${locale}`,
).filter((f) => f.endsWith(".md")).length;

const meta = readFileSync(META, "utf8");
const bloque = meta.slice(meta.indexOf("modules: ["), meta.indexOf("] as CourseModule[]"));
const modulos = [...bloque.matchAll(/number:\s*(\d+),\s*\n\s*title:\s*\{([^}]*)\}/g)]
  .map(([, n, t]) => {
    const m = t.match(new RegExp(`${locale}:\\s*"([^"]+)"`));
    return { n: Number(n), titulo: m ? m[1] : "" };
  })
  .filter((m) => m.n > 0 && m.titulo);

const textos = {
  es: {
    eyebrow: (n) => `Curso gratuito · ${n} lecciones`,
    titulo: ["Grok Bot:", "una empresa", "en 72 horas."],
    lead: "Aprende a usar Grok Bot desde cero siguiendo cómo tres personas de xAI montan una empresa en directo.",
    niveles: ["Principiante", "Intermedio", "Avanzado"],
    pie: "Curso no oficial · Hecho a partir de la documentación de xAI y el directo de lanzamiento",
  },
  en: {
    eyebrow: (n) => `Free course · ${n} lessons`,
    titulo: ["Grok Bot:", "a company", "in 72 hours."],
    lead: "Learn Grok Bot from scratch by following three people from xAI building a company live.",
    niveles: ["Beginner", "Intermediate", "Advanced"],
    pie: "Unofficial course · Built from xAI's documentation and the launch livestream",
  },
};
const t = textos[locale];

const escalones = modulos.length;
const baseY = 640;
const topY = 170;
const paso = (baseY - topY) / (escalones - 1);
const baseX = 800;
const pasoX = 50;

const cortos = {
  es: { 5: "Para ingeniería", 8: "Ventas y soporte" },
  en: { 5: "For engineering", 8: "Sales and support" },
};
const naranjaDesde = Math.ceil(escalones / 2) + 1;

const marcado = `
<div class="lamina">
  <div class="rejilla"></div>
  <p class="eyebrow"><span class="punto"></span>${t.eyebrow(lecciones)}</p>
  <h1 class="titulo"><span class="viva">${t.titulo[0]}</span><br>${t.titulo[1]}<br>${t.titulo[2]}</h1>
  <p class="lead">${t.lead}</p>
  <ul class="niveles">
    ${t.niveles.map((n, i) => `<li class="${i === t.niveles.length - 1 ? "is-alto" : ""}">${n}</li>`).join("")}
  </ul>
  <p class="pie">${t.pie}</p>
  <p class="firma">jorge-carrera-diez.com</p>
  <svg class="escalera" viewBox="0 0 1600 900">
    <path d="${modulos
      .map((m, i) => `${i === 0 ? "M" : "L"} ${baseX + i * pasoX} ${baseY - i * paso}`)
      .join(" ")}" stroke="#b45309" stroke-width="2" fill="none" />
  </svg>
  ${modulos
    .map(
      (m, i) => `
    <div class="hito ${i + 1 >= naranjaDesde ? "is-alto" : ""}" style="left:${baseX + i * pasoX - 26}px; top:${baseY - i * paso - 26}px">
      <span class="bola">${m.n}</span><span class="etiqueta">${cortos[locale]?.[m.n] ?? m.titulo}</span>
    </div>`,
    )
    .join("")}
</div>`;

const estilos = `
  html, body { margin:0; padding:0; background:#0a0a0a; }
  .lamina {
    position: relative; box-sizing: border-box;
    width:1600px; height:900px; padding:90px;
    background: radial-gradient(90% 80% at 88% 74%, #2a1608 0%, #120c07 38%, #0a0a0a 72%);
    color:#f2f2f2; overflow:hidden;
  }
  .rejilla {
    position:absolute; inset:0;
    background-image:
      linear-gradient(to right, rgba(255,255,255,.028) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,.028) 1px, transparent 1px);
    background-size: 74px 74px;
  }
  .eyebrow {
    position:relative; margin:0 0 34px; display:flex; align-items:center; gap:14px;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size:25px; letter-spacing:.14em; text-transform:uppercase; color:#f97316;
  }
  .punto { width:11px; height:11px; border-radius:999px; background:#f97316; }
  .titulo {
    position:relative; margin:0 0 42px;
    font-size:86px; font-weight:700; line-height:1.06; letter-spacing:-.035em; color:#8b8783;
  }
  .viva { color:#fdfdfd; }
  .lead {
    position:relative; margin:0; max-width:640px;
    font-size:29px; line-height:1.42; color:#a8a29e;
  }
  .niveles {
    position:absolute; left:90px; bottom:176px;
    display:flex; gap:18px; list-style:none; margin:0; padding:0;
  }
  .niveles li {
    border:1px solid rgba(255,255,255,.22); border-radius:999px;
    padding:13px 26px;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size:20px; letter-spacing:.09em; text-transform:uppercase; color:#d6d3d1;
  }
  .niveles li.is-alto { border-color:#f97316; color:#f97316; }
  .pie {
    position:absolute; left:90px; bottom:74px; margin:0;
    font-size:22px; color:#78716c;
  }
  .firma {
    position:absolute; right:90px; bottom:68px; margin:0;
    font-size:30px; font-weight:700; letter-spacing:-.01em; color:#fdfdfd;
  }
  .escalera { position:absolute; inset:0; pointer-events:none; }
  .hito { position:absolute; display:flex; align-items:center; gap:18px; }
  .bola {
    display:grid; place-items:center; width:52px; height:52px; border-radius:999px;
    background:#16130f; border:1px solid rgba(255,255,255,.18);
    font-size:25px; font-weight:600; color:#f2f2f2;
  }
  .hito.is-alto .bola { background:#f8a95c; border-color:#f8a95c; color:#170e05; }
  .etiqueta { font-size:27px; color:#e7e5e4; white-space:nowrap; }
`;

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 1,
});
await page.goto(`${ORIGIN}/cursos`, { waitUntil: "networkidle", timeout: 60000 });
await page.evaluate(
  ({ html, css }) => {
    const hoja = document.createElement("style");
    hoja.textContent = css;
    document.head.append(hoja);
    document.body.innerHTML = html;
    document.documentElement.setAttribute("data-theme", "dark");
  },
  { html: marcado, css: estilos },
);
await page.waitForTimeout(900);
await page.locator(".lamina").screenshot({ path: salida, type: "png" });
await browser.close();
console.log(`${salida} · ${lecciones} lecciones · ${escalones} módulos`);
