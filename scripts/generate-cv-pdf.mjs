#!/usr/bin/env node
// Genera los PDF del CV que se sirven en /cv.pdf y /cv-en.pdf.
// El boton de la pagina de CV enlaza a estos ficheros, asi que hay que
// regenerarlos cada vez que cambie el contenido del CV.
//
//   npm run cv:pdf                    -> contra la web publicada
//   BASE_URL=http://localhost:3000 npm run cv:pdf   -> contra el local

import { execFile } from "node:child_process";
import { mkdir, access } from "node:fs/promises";
import { promisify } from "node:util";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.BASE_URL ?? "https://www.jorge-carrera-diez.com";

const targets = [
  { path: "/cv", file: "cv.pdf" },
  { path: "/en/cv", file: "cv-en.pdf" },
];

// Chrome no siempre esta en el mismo sitio segun la maquina.
const candidates = [
  process.env.CHROME_BIN,
  "/opt/google/chrome/chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

async function findChrome() {
  for (const bin of candidates) {
    try {
      await access(bin);
      return bin;
    } catch {}
  }
  throw new Error(`No encuentro Chrome. Probados: ${candidates.join(", ")}`);
}

const chrome = await findChrome();
const outDir = resolve(root, "public");
await mkdir(outDir, { recursive: true });

for (const { path, file } of targets) {
  const out = resolve(outDir, file);
  const profile = `/tmp/cv-pdf-${process.pid}-${file}`;
  await run(chrome, [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    `--user-data-dir=${profile}`,
    "--no-pdf-header-footer",
    "--virtual-time-budget=10000",
    `--print-to-pdf=${out}`,
    `${baseUrl}${path}`,
  ]);
  await run("rm", ["-rf", profile]);
  console.log(`${file} <- ${baseUrl}${path}`);
}
