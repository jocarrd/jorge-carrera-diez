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
    { number: 2, title: { es: "Que aprenda contigo", en: "Teaching your Bot" }, level: "beginner" },
    { number: 3, title: { es: "Conectarlo a tu trabajo", en: "Connecting it to your work" }, level: "intermediate" },
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
        "Curso gratuito y escrito para aprender Grok Bot paso a paso: qué es, cómo crear tus primeros Bots, enseñarles tareas, conectarlos a tus herramientas y montar equipos que trabajen solos.",
      intro:
        "Las nueve horas de la parte 1 del directo y veinte páginas de documentación, ordenadas en 22 lecciones que se leen en unos minutos. Empieza desde cero y sube de nivel poco a poco.",
      unofficial:
        "Curso no oficial. Se basa en la documentación de xAI y en el directo de lanzamiento de Grok Bot, que dura tres días.",
      statusTitle: "Estado del curso",
      statusIntro:
        "El directo de lanzamiento dura tres días y cada día es una parte. El curso crece a medida que se transcriben. Ahora mismo recoge la parte 1.",
      partLabel: "Parte",
      statusDone: "Transcrita e incluida",
      statusProcessing: "Grabándose hoy · se transcribe al terminar",
      statusUpcoming: "Próximamente",
      lessonSource: "Basado en la parte {done} de {total} del directo",
      lessonSourceMore: "Ver el estado",
      start: "Empezar el curso",
      continue: "Continuar donde lo dejaste",
      review: "Repasar desde el principio",
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
        "A free written course to learn Grok Bot step by step: what it is, how to create your first Bots, teach them tasks, connect them to your tools and build teams that work on their own.",
      intro:
        "Nine hours from part 1 of the livestream and twenty pages of documentation, organised into 22 lessons you can read in a few minutes each. Start from zero and level up gradually.",
      unofficial:
        "Unofficial course. Based on the xAI documentation and the three-day Grok Bot launch livestream.",
      statusTitle: "Course status",
      statusIntro:
        "The launch livestream runs for three days, one part per day. The course grows as each part is transcribed. Right now it covers part 1.",
      partLabel: "Part",
      statusDone: "Transcribed and included",
      statusProcessing: "Recording today · transcribed when it ends",
      statusUpcoming: "Coming soon",
      lessonSource: "Based on part {done} of {total} of the livestream",
      lessonSourceMore: "See status",
      start: "Start the course",
      continue: "Continue where you left off",
      review: "Review from the start",
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
