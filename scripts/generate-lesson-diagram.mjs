const PLAYWRIGHT =
  process.env.PLAYWRIGHT_CORE ??
  "/home/anne/.npm/_npx/705bc6b22212b352/node_modules/playwright-core/index.mjs";
const { chromium } = await import(PLAYWRIGHT);

const CHROME =
  process.env.CHROME_PATH ??
  "/home/anne/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome";
const ORIGIN = process.env.SITE_ORIGIN ?? "http://localhost:3001";

const spec = JSON.parse(process.argv[2] ?? "{}");
const salida = process.argv[3];

if (!spec.steps || !salida) {
  console.error(
    'uso: node scripts/generate-lesson-diagram.mjs \'{"lesson":"26","title":"...","steps":[{"title":"","text":""}]}\' public/images/.../26-x-es.webp',
  );
  process.exit(1);
}

const marcado = (s) => `
<div class="lamina">
  <p class="eyebrow">${s.eyebrow}</p>
  <h1 class="titulo">${s.title}</h1>
  <ol class="pasos">
    ${s.steps
      .map(
        (p, i) => `
      <li class="paso ${i === s.steps.length - 1 ? "is-last" : ""}">
        <span class="num">${i + 1}</span>
        <span class="cuerpo">
          <span class="paso-titulo">${p.title}</span>
          <span class="paso-texto">${p.text}</span>
        </span>
      </li>`,
      )
      .join("")}
  </ol>
  <p class="firma">jorge-carrera-diez.com</p>
</div>`;

const estilos = `
  html, body { margin: 0; padding: 0; background: #0a0a0a; }
  .lamina {
    box-sizing: border-box;
    width: 1080px; height: 1080px;
    padding: 72px;
    display: flex; flex-direction: column;
    background: radial-gradient(120% 90% at 50% 120%, #1c1208 0%, #0a0a0a 62%);
    color: #f2f2f2;
  }
  .eyebrow {
    margin: 0 0 10px;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 22px; letter-spacing: 0.16em; text-transform: uppercase;
    color: #f97316;
  }
  .titulo {
    margin: 0 0 62px;
    font-size: 58px; font-weight: 600; line-height: 1.06; letter-spacing: -0.03em;
  }
  .pasos { list-style: none; margin: 0; padding: 0; display: grid; gap: 18px; flex: 1; align-content: start; }
  .paso {
    display: flex; align-items: center; gap: 28px;
    border: 1px solid rgba(255,255,255,.09);
    border-radius: 22px;
    background: rgba(255,255,255,.035);
    padding: 26px 34px;
  }
  .paso.is-last { border-color: #f97316; background: rgba(249,115,22,.09); }
  .num {
    flex: none;
    display: grid; place-items: center;
    width: 74px; height: 74px; border-radius: 999px;
    border: 3px solid #f97316; color: #f97316;
    font-size: 34px; font-weight: 600;
  }
  .paso.is-last .num { background: #f59e5c; border-color: #f59e5c; color: #140d06; }
  .cuerpo { display: flex; flex-direction: column; gap: 6px; }
  .paso-titulo { font-size: 36px; font-weight: 600; letter-spacing: -0.02em; }
  .paso-texto { font-size: 26px; color: #a8a29e; line-height: 1.25; }
  .firma {
    margin: 0; text-align: right;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 22px; color: #57534e; letter-spacing: 0.02em;
  }
`;

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage({
  viewport: { width: 1080, height: 1080 },
  deviceScaleFactor: 1,
});

await page.goto(`${ORIGIN}/cursos`, {
  waitUntil: "networkidle",
  timeout: 60000,
});

await page.evaluate(
  ({ html, css }) => {
    const hoja = document.createElement("style");
    hoja.textContent = css;
    document.head.append(hoja);
    document.body.innerHTML = html;
    document.documentElement.setAttribute("data-theme", "dark");
  },
  { html: marcado(spec), css: estilos },
);

await page.waitForTimeout(900);
await page.locator(".lamina").screenshot({ path: salida, type: "png" });
await browser.close();
console.log(`escrito ${salida}`);
