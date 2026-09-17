import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import type { Locale } from "@/i18n/config";
import { getCourse, getLesson } from "@/lib/courses/load";

export const courseOgSize = { width: 1200, height: 630 };

async function fonts() {
  const raiz = (f: string) => join(process.cwd(), "src/assets/fonts", f);
  const [regular, semibold] = await Promise.all([readFile(raiz("Geist-Regular.woff")), readFile(raiz("Geist-SemiBold.woff"))]);
  return [
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

function Frame({ eyebrow, kicker, title, text, footRight }: { eyebrow: string; kicker: string; title: string; text: string; footRight: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 68px 50px",
        background: "radial-gradient(900px 520px at 88% 72%, rgba(251,146,60,0.20), transparent 62%), #0a0a0a",
        color: "#f2f2f2",
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 21, letterSpacing: 2, textTransform: "uppercase", color: "#fb923c" }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#fb923c" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 26, color: "#a0a0a0" }}>{kicker}</div>
        <div style={{ display: "flex", marginTop: 12, fontSize: title.length > 34 ? 64 : 76, lineHeight: 1.04, fontWeight: 600, letterSpacing: -2.6, maxWidth: 1040 }}>
          {title}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 27, lineHeight: 1.4, color: "#c4c4c4", maxWidth: 980 }}>{text}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 600, letterSpacing: -1 }}>jorge-carrera-diez.com</div>
        <div style={{ display: "flex", fontSize: 22, color: "#a0a0a0" }}>{footRight}</div>
      </div>
    </div>
  );
}

const clip = (s: string, max: number) => (s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s);

export async function renderLessonOg(locale: Locale, slug: string) {
  const lesson = getLesson(locale, slug)!;
  const copy = grokBotCourse.copy[locale];
  const mod = grokBotCourse.modules.find((m) => m.number === lesson.ref.module)!;
  const moduleName = mod.number === 0 ? copy.introModule : `${copy.moduleLabel} ${mod.number} · ${mod.title[locale]}`;
  return new ImageResponse(
    (
      <Frame
        eyebrow={`${copy.eyebrow} · ${copy.title}`}
        kicker={`${copy.lessonLabel} ${lesson.id} · ${moduleName}`}
        title={lesson.title}
        text={clip(lesson.description, 150)}
        footRight={`${lesson.minutes} ${copy.minutesLabel} · ${getCourse(locale).lessons.length} ${copy.lessonsLabel}`}
      />
    ),
    { ...courseOgSize, fonts: await fonts() },
  );
}

export async function renderDiaryOg(locale: Locale) {
  const copy = grokBotCourse.copy[locale];
  const done = grokBotCourse.parts.filter((p) => p.status === "done").length;
  return new ImageResponse(
    (
      <Frame
        eyebrow={`${copy.eyebrow} · ${copy.title}`}
        kicker="Grok Bot"
        title={copy.diaryTitle}
        text={clip(copy.diaryDescription, 150)}
        footRight={`${copy.dayLabel} ${done} / ${grokBotCourse.parts.length}`}
      />
    ),
    { ...courseOgSize, fonts: await fonts() },
  );
}
