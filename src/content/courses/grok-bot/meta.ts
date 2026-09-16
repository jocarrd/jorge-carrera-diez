import type { Locale } from "@/i18n/config";

export type CourseLessonRef = {
  id: string;
  module: number;
  slug: Record<Locale, string>;
};

// Estado de cada día del directo en el curso: "done" ya está transcrito y volcado
// en las lecciones, "processing" se está grabando o transcribiendo, "upcoming" aún no ha salido.
export type LivePart = {
  number: number;
  date: string;
  status: "done" | "processing" | "upcoming";
  topics: Record<Locale, string[]>;
};

export type CourseModule = {
  number: number;
  title: Record<Locale, string>;
  level: "beginner" | "intermediate" | "advanced";
};

// El orden, los módulos y los slugs viven aquí y no en el front matter de cada
// lección: son lo que enlaza un idioma con el otro y lo que usan las rutas, y
// no pueden depender de que 44 ficheros escriban lo mismo.
export const grokBotCourse = {
  id: "grok-bot",
  slug: { es: "grok-bot", en: "grok-bot" } as Record<Locale, string>,
  updated: "2026-09-16",
  liveUrl: "https://x.com/i/broadcasts/1AxRnZbVpjaxl",
  docsUrl: "https://docs.x.ai/grok-bot/overview",
  cover: {
    es: "/images/cursos/grok-bot/portada-es.png",
    en: "/images/cursos/grok-bot/portada-en.png",
  } as Record<Locale, string>,
  parts: [
    {
      number: 1,
      date: "2026-09-15",
      status: "done",
      topics: {
        es: ["Grok Bot 101", "Ingeniería", "Producto", "Fundadores"],
        en: ["Grok Bot 101", "Engineering", "Product", "Founders"],
      },
    },
    {
      number: 2,
      date: "2026-09-16",
      status: "processing",
      topics: {
        es: ["Sales Engineering", "Ventas", "SDRs", "Atención al cliente"],
        en: ["Sales Engineering", "Sales", "SDRs", "Customer Support"],
      },
    },
    {
      number: 3,
      date: "2026-09-17",
      status: "upcoming",
      topics: {
        es: ["Marketing Ops", "Post-venta", "Marketing", "Presentación final"],
        en: ["Marketing Ops", "Post-Sales", "Marketing", "Final showcase"],
      },
    },
  ] as LivePart[],
  modules: [
    { number: 1, title: { es: "Fundamentos", en: "Fundamentals" }, level: "beginner" },
    { number: 2, title: { es: "Enseñar a tu Bot", en: "Teaching your Bot" }, level: "beginner" },
    { number: 3, title: { es: "Conectar tus herramientas", en: "Connecting your tools" }, level: "intermediate" },
    { number: 4, title: { es: "Equipos de Bots", en: "Teams of Bots" }, level: "intermediate" },
    { number: 5, title: { es: "Grok Bot para ingeniería", en: "Grok Bot for engineering" }, level: "advanced" },
    { number: 6, title: { es: "Casos reales", en: "Real use cases" }, level: "advanced" },
    { number: 7, title: { es: "Nivel experto", en: "Expert level" }, level: "advanced" },
  ] as CourseModule[],
  lessons: [
    { id: "01", module: 1, slug: { en: "what-is-grok-bot", es: "que-es-grok-bot" } },
    { id: "02", module: 1, slug: { en: "the-bots-computer", es: "el-ordenador-de-los-bots" } },
    { id: "03", module: 1, slug: { en: "your-first-bot", es: "tu-primer-bot" } },
    { id: "04", module: 1, slug: { en: "approvals-and-permissions", es: "aprobaciones-y-permisos" } },
    { id: "05", module: 2, slug: { en: "memory", es: "memoria" } },
    { id: "06", module: 2, slug: { en: "skills-and-teach-a-task", es: "skills-y-teach-a-task" } },
    { id: "07", module: 2, slug: { en: "good-context", es: "buen-contexto" } },
    { id: "08", module: 3, slug: { en: "connectors-and-plugins", es: "conectores-y-plugins" } },
    { id: "09", module: 3, slug: { en: "logins-and-credentials", es: "sesiones-y-credenciales" } },
    { id: "10", module: 3, slug: { en: "routines", es: "routines" } },
    { id: "11", module: 4, slug: { en: "one-bot-per-role", es: "un-bot-por-rol" } },
    { id: "12", module: 4, slug: { en: "bots-working-together", es: "bots-que-trabajan-juntos" } },
    { id: "13", module: 4, slug: { en: "orchestrating-a-team", es: "orquestar-un-equipo" } },
    { id: "14", module: 4, slug: { en: "sharing-bots", es: "compartir-bots" } },
    { id: "15", module: 5, slug: { en: "cursor-cloud-agents", es: "agentes-en-la-nube-de-cursor" } },
    { id: "16", module: 5, slug: { en: "verification", es: "que-verifique-su-trabajo" } },
    { id: "17", module: 5, slug: { en: "engineering-automations", es: "automatizaciones-de-ingenieria" } },
    { id: "18", module: 6, slug: { en: "product-and-data", es: "producto-y-datos" } },
    { id: "19", module: 6, slug: { en: "founders-and-sales", es: "fundadores-y-ventas" } },
    { id: "20", module: 6, slug: { en: "running-a-business-with-bots", es: "montar-un-negocio-con-bots" } },
    { id: "21", module: 7, slug: { en: "cost-and-performance", es: "coste-y-rendimiento" } },
    { id: "22", module: 7, slug: { en: "limits", es: "limites" } },
  ] as CourseLessonRef[],
  copy: {
    es: {
      title: "Grok Bot, de cero a experto",
      description:
        "Curso gratis para aprender a usar Grok Bot desde cero. Lecciones cortas en español, con ejemplos reales y prompts que puedes copiar.",
      intro:
        "Lo he sacado del directo de lanzamiento y de la documentación oficial, y lo he ordenado en 22 lecciones cortas. Si nunca has usado Grok Bot, empieza por la primera.",
      unofficial:
        "Este curso no es de xAI. Está hecho a partir de su documentación y del directo de lanzamiento.",
      statusTitle: "Estado del curso",
      statusIntro:
        "El directo de lanzamiento dura tres días. Cuando acaba cada uno, lo transcribo y añado al curso lo que haya de nuevo.",
      partLabel: "Parte",
      statusDone: "Ya está en el curso",
      statusProcessing: "Se emite hoy. La añado cuando termine",
      statusUpcoming: "Pendiente",
      lessonSource: "Basado en la parte {done} de {total} del directo",
      lessonSourceMore: "Qué falta",
      start: "Empezar el curso",
      continue: "Seguir donde lo dejaste",
      review: "Volver a empezar",
      lessonsLabel: "lecciones",
      minutesLabel: "min",
      readingTime: "de lectura",
      updatedLabel: "Actualizado",
      progressLabel: "completadas",
      moduleLabel: "Módulo",
      lessonLabel: "Lección",
      levels: { beginner: "Principiante", intermediate: "Intermedio", advanced: "Avanzado" },
      syllabus: "Temario",
      objectives: "Qué vas a aprender",
      markComplete: "Marcar como completada",
      completed: "Completada",
      previous: "Anterior",
      next: "Siguiente",
      finish: "Has terminado el curso",
      backToCourse: "Volver al temario",
      live: "Verlo en el directo",
      copy: "Copiar",
      copied: "Copiado",
      prompt: "Prompt",
      liveNote: "Visto en el directo",
      courseBreadcrumb: "Cursos",
      openSyllabus: "Ver el temario",
    },
    en: {
      title: "Grok Bot, from zero to expert",
      description:
        "A free course to learn Grok Bot from scratch. Short lessons with real examples and prompts you can copy.",
      intro:
        "I took the launch livestream and the official docs and turned them into 22 short lessons. If you have never used Grok Bot, start with the first one.",
      unofficial:
        "This course is not made by xAI. It is based on their docs and the launch livestream.",
      statusTitle: "Course status",
      statusIntro:
        "The launch livestream runs over three days. When each day ends, I transcribe it and add anything new to the course.",
      partLabel: "Part",
      statusDone: "In the course",
      statusProcessing: "Airing today. Added once it ends",
      statusUpcoming: "Not yet",
      lessonSource: "Based on part {done} of {total} of the livestream",
      lessonSourceMore: "What's missing",
      start: "Start the course",
      continue: "Pick up where you left off",
      review: "Start again",
      lessonsLabel: "lessons",
      minutesLabel: "min",
      readingTime: "reading",
      updatedLabel: "Updated",
      progressLabel: "completed",
      moduleLabel: "Module",
      lessonLabel: "Lesson",
      levels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
      syllabus: "Syllabus",
      objectives: "What you'll learn",
      markComplete: "Mark as complete",
      completed: "Completed",
      previous: "Previous",
      next: "Next",
      finish: "You've finished the course",
      backToCourse: "Back to the syllabus",
      live: "Watch it in the livestream",
      copy: "Copy",
      copied: "Copied",
      prompt: "Prompt",
      liveNote: "Seen in the livestream",
      courseBreadcrumb: "Courses",
      openSyllabus: "Open the syllabus",
    },
  },
};

export type CourseCopy = (typeof grokBotCourse.copy)["es"];
