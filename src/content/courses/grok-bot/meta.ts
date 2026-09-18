import type { Locale } from "@/i18n/config";

export type CourseLessonRef = {
  id: string;
  module: number;
  slug: Record<Locale, string>;
};

export type LivePart = {
  number: number;
  date: string;
  status: "done" | "processing" | "upcoming";

  liveUrl?: string;
  topics: Record<Locale, string[]>;
};

export type CourseModule = {
  number: number;
  title: Record<Locale, string>;
  level: "beginner" | "intermediate" | "advanced";
};

export const grokBotCourse = {
  id: "grok-bot",
  slug: { es: "grok-bot", en: "grok-bot" } as Record<Locale, string>,
  updated: "2026-09-17",
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
      liveUrl: "https://x.com/i/broadcasts/1AxRnZbVpjaxl",
      topics: {
        es: ["Grok Bot 101", "Ingeniería", "Producto", "Fundadores"],
        en: ["Grok Bot 101", "Engineering", "Product", "Founders"],
      },
    },
    {
      number: 2,
      date: "2026-09-16",
      status: "done",
      liveUrl: "https://x.com/i/broadcasts/1PKqrNyvmYwGb",
      topics: {
        es: ["Sales Engineering", "Ventas", "SDRs", "Atención al cliente"],
        en: ["Sales Engineering", "Sales", "SDRs", "Customer Support"],
      },
    },
    {
      number: 3,
      date: "2026-09-17",
      status: "done",
      liveUrl: "https://x.com/i/broadcasts/1YGNrbXEeazGw",
      topics: {
        es: ["Marketing Ops", "Post-venta", "Marketing", "Presentación final"],
        en: ["Marketing Ops", "Post-Sales", "Marketing", "Final showcase"],
      },
    },
  ] as LivePart[],
  modules: [
    {
      number: 0,
      title: { es: "La historia", en: "The story" },
      level: "beginner",
    },
    {
      number: 1,
      title: { es: "Fundamentos", en: "Fundamentals" },
      level: "beginner",
    },
    {
      number: 2,
      title: { es: "Enseñar a tu Bot", en: "Teaching your Bot" },
      level: "beginner",
    },
    {
      number: 3,
      title: { es: "Conectar tus herramientas", en: "Connecting your tools" },
      level: "intermediate",
    },
    {
      number: 4,
      title: { es: "Equipos de Bots", en: "Teams of Bots" },
      level: "intermediate",
    },
    {
      number: 5,
      title: { es: "Grok Bot para ingeniería", en: "Grok Bot for engineering" },
      level: "advanced",
    },
    {
      number: 6,
      title: { es: "Casos reales", en: "Real use cases" },
      level: "advanced",
    },
    {
      number: 7,
      title: { es: "Nivel experto", en: "Expert level" },
      level: "advanced",
    },
    {
      number: 8,
      title: {
        es: "Ventas y atención al cliente",
        en: "Sales and customer support",
      },
      level: "advanced",
    },
    {
      number: 9,
      title: { es: "Después de lanzar", en: "After you launch" },
      level: "advanced",
    },
  ] as CourseModule[],
  lessons: [
    { id: "00", module: 0, slug: { en: "the-story", es: "la-historia" } },
    {
      id: "01",
      module: 1,
      slug: { en: "what-is-grok-bot", es: "que-es-grok-bot" },
    },
    {
      id: "02",
      module: 1,
      slug: { en: "the-bots-computer", es: "el-ordenador-de-los-bots" },
    },
    {
      id: "03",
      module: 1,
      slug: { en: "your-first-bot", es: "tu-primer-bot" },
    },
    {
      id: "04",
      module: 1,
      slug: { en: "approvals-and-permissions", es: "aprobaciones-y-permisos" },
    },
    { id: "05", module: 2, slug: { en: "memory", es: "memoria" } },
    {
      id: "06",
      module: 2,
      slug: { en: "skills-and-teach-a-task", es: "skills-y-teach-a-task" },
    },
    { id: "07", module: 2, slug: { en: "good-context", es: "buen-contexto" } },
    {
      id: "08",
      module: 3,
      slug: { en: "connectors-and-plugins", es: "conectores-y-plugins" },
    },
    {
      id: "09",
      module: 3,
      slug: { en: "logins-and-credentials", es: "sesiones-y-credenciales" },
    },
    { id: "10", module: 3, slug: { en: "routines", es: "routines" } },
    {
      id: "11",
      module: 4,
      slug: { en: "one-bot-per-role", es: "un-bot-por-rol" },
    },
    {
      id: "12",
      module: 4,
      slug: { en: "bots-working-together", es: "bots-que-trabajan-juntos" },
    },
    {
      id: "13",
      module: 4,
      slug: { en: "orchestrating-a-team", es: "orquestar-un-equipo" },
    },
    { id: "14", module: 4, slug: { en: "sharing-bots", es: "compartir-bots" } },
    {
      id: "15",
      module: 5,
      slug: { en: "cursor-cloud-agents", es: "agentes-en-la-nube-de-cursor" },
    },
    {
      id: "16",
      module: 5,
      slug: { en: "verification", es: "que-verifique-su-trabajo" },
    },
    {
      id: "17",
      module: 5,
      slug: {
        en: "engineering-automations",
        es: "automatizaciones-de-ingenieria",
      },
    },
    {
      id: "18",
      module: 6,
      slug: { en: "product-and-data", es: "producto-y-datos" },
    },
    {
      id: "19",
      module: 6,
      slug: { en: "founders-and-sales", es: "fundadores-y-ventas" },
    },
    {
      id: "20",
      module: 6,
      slug: {
        en: "running-a-business-with-bots",
        es: "montar-un-negocio-con-bots",
      },
    },
    {
      id: "21",
      module: 7,
      slug: { en: "cost-and-performance", es: "coste-y-rendimiento" },
    },
    { id: "22", module: 7, slug: { en: "limits", es: "limites" } },
    {
      id: "23",
      module: 8,
      slug: { en: "sales-engineering-with-bots", es: "preventa-con-bots" },
    },
    {
      id: "24",
      module: 8,
      slug: { en: "sales-and-prospecting", es: "ventas-y-prospeccion" },
    },
    {
      id: "25",
      module: 8,
      slug: { en: "customer-support", es: "atencion-al-cliente" },
    },
    {
      id: "26",
      module: 9,
      slug: { en: "the-feedback-loop", es: "el-bucle-de-feedback" },
    },
    {
      id: "27",
      module: 9,
      slug: { en: "measuring-after-launch", es: "medir-despues-de-lanzar" },
    },
    {
      id: "28",
      module: 9,
      slug: { en: "what-you-take-away", es: "lo-que-te-llevas" },
    },
  ] as CourseLessonRef[],
  copy: {
    es: {
      title: "Grok Bot: una empresa en 72 horas",
      seoTitle: "Curso de Grok Bot: una empresa en 72 horas",
      subtitle:
        "Aprende a usar Grok Bot desde cero siguiendo cómo tres personas de xAI montan una empresa en directo.",
      description:
        "Curso gratis para aprender a usar Grok Bot desde cero. Lecciones cortas en español, con ejemplos reales y prompts que puedes copiar.",
      intro:
        "xAI presentó Grok Bot con un directo de tres días, de casi nueve horas cada uno. Casi nadie tiene tiempo de verlo. Yo lo he transcrito, lo he cruzado con la documentación oficial y lo he ordenado en lecciones cortas que se leen en el móvil.",
      eyebrow: "Curso gratis",
      aboutProduct: "Sobre Grok Bot, de SpaceXAI",
      featuresTitle: "Cómo funciona",
      features: [
        {
          title: "Empiezas desde cero",
          text: "La primera lección explica qué es un Bot y la última, cuándo no conviene usarlo. Cada lección solo da por sabido lo que viste en las anteriores.",
        },
        {
          title: "El vídeo, a un clic",
          text: "Si algo se enseñó en el directo, la lección enlaza al minuto exacto. Lees la idea y, si quieres verla funcionando, saltas ahí.",
        },
        {
          title: "Prompts para copiar",
          text: "Los ejemplos vienen listos para pegarlos en tu Bot. Cambias los nombres por los tuyos y funcionan.",
        },
        {
          title: "Recuerda por dónde vas",
          text: "Marca lo que terminas y vuelve otro día donde lo dejaste. Sin cuentas ni registros, todo se guarda en tu navegador.",
        },
      ],
      authorTitle: "El autor",
      authorText:
        "Soy Jorge Carrera, ingeniero de software y tech lead. Trabajo con agentes de IA a diario en mis proyectos. Hice este curso para aprender Grok Bot a fondo y lo publico por si a ti también te ahorra las horas de vídeo.",
      authorX: "Sígueme en X",
      authorWeb: "Ver en qué he trabajado",
      authorContact: "Hablemos",
      followTitle: "¿Te está sirviendo?",
      followText:
        "Cada día añado lo nuevo del directo y lo cuento en X. Sígueme y te enteras en cuanto salga.",
      followButton: "Seguir a @jorgecarrera_es",
      introModule: "Antes de empezar",
      storyLabel: "Antes de este módulo",
      storyMore: "Seguir leyendo",
      lessonContents: "Índice",
      glossaryTitle: "Glosario",
      searchPlaceholder: "Buscar en el curso: skills, routines, soporte…",
      searchEmpty:
        "No hay nada con esas palabras. Prueba con otra o mira el glosario.",
      searchSection: "Sección",
      whatsNewTitle: "Novedades desde tu última visita",
      whatsNewAdded: "Lecciones nuevas",
      whatsNewUpdated: "Lecciones actualizadas",
      searchInCourse: "Buscar en el curso",
      searchTerm: "Glosario",
      share: "Compartir",
      linkCopied: "Enlace copiado",
      askTitle: "Dudas",
      askText:
        "Pregúntamela en X y te respondo. Si ayuda a más gente, la añado a la lección.",
      askButton: "Preguntar en X",
      askTweet: "@jorgecarrera_es tengo una duda sobre «{title}»: ",
      momentIn: "Este momento, en la lección",
      glossaryDescription:
        "Los términos de Grok Bot explicados en una frase: Bot, skill, routine, connector, MCP, agente en la nube y el resto, con la lección donde se explica cada uno.",
      glossaryIntro:
        "Las palabras que aparecen en el curso y que conviene tener claras. Cada una enlaza a la lección donde se explica a fondo. Dentro de las lecciones, los términos subrayados con puntos abren su definición.",
      glossaryLink: "Glosario de términos",
      glossaryLearn: "Se explica en la lección",
      glossarySee: "Ver en el glosario",
      nextUp: "Siguiente lección",
      moduleDone: "Módulo {n} terminado",
      nextModule: "Empiezas el módulo {n}",
      completeAndContinue: "Completar y seguir",
      continueNext: "Seguir",
      toRead: "por leer",
      minutesLeft: "min",
      resumeText: "Te quedaste en",
      resumeButton: "Seguir ahí",
      close: "Cerrar",
      dayLabel: "Día",
      diaryTitle: "Diario del directo",
      diaryDescription:
        "Lo que pasó cada día en el directo de lanzamiento de Grok Bot, en orden: la empresa que montaron en 72 horas, los Bots que crearon y lo que salió mal.",
      diaryIntro:
        "Tres personas de xAI se propusieron montar una empresa en 72 horas con Grok Bot, en directo. Aquí está la historia día a día, con el enlace al minuto de cada momento y a la lección donde aprendes a hacerlo tú.",
      diaryLink: "Leer la historia del directo día a día",
      diaryDayLink: "Leer el diario del día",
      diaryPending: "Su historia se añade en cuanto la transcriba.",
      diaryDaysNav: "Días del directo",
      diaryLive: "en directo",
      diaryStartCourse: "Empezar el curso desde cero",
      diarySeeSyllabus: "Ver el temario",
      diaryLearnTitle: "Apréndelo en el curso",
      moduleStart: "Empezar el módulo",
      diaryEndTitle: "Del diario al curso",
      diaryEndText:
        "El curso ordena todo lo que pasó en el directo en lecciones cortas, de lo básico a lo avanzado. Empieza desde cero o entra directamente al módulo que te interese.",
      syllabusStart: "Empezar",
      partStoryLink: "Qué pasó",
      learnIn: "Lo aprendes en",
      unofficial:
        "Este curso no es de xAI. Está hecho a partir de su documentación y del directo de lanzamiento.",
      statusTitle: "Las tres partes",
      statusIntro:
        "El curso crece con el directo. Cuando termina la parte de cada día, la transcribo y añado lo nuevo a las lecciones.",
      partLabel: "Parte",
      statusDone: "Ya está en el curso",
      statusProcessing: "La añado en cuanto la transcriba",
      statusUpcoming: "Pendiente",
      lessonSource: "Basado en la parte {done} de {total} del directo",
      lessonSourceMore: "Pendiente",
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
      levels: {
        beginner: "Principiante",
        intermediate: "Intermedio",
        advanced: "Avanzado",
      },
      syllabus: "Temario",
      objectives: "Temario",
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
      title: "Grok Bot: a company in 72 hours",
      seoTitle: "Grok Bot course: a company in 72 hours",
      subtitle:
        "Learn Grok Bot from scratch by following three people from xAI as they build a company live.",
      description:
        "A free course to learn Grok Bot from scratch. Short lessons with real examples and prompts you can copy.",
      intro:
        "xAI launched Grok Bot with a three-day livestream, almost nine hours each day. Hardly anyone has time to watch it. I transcribed it, checked it against the official docs and turned it into short lessons you can read on your phone.",
      eyebrow: "Free course",
      aboutProduct: "About Grok Bot, by SpaceXAI",
      featuresTitle: "How it works",
      features: [
        {
          title: "You start from zero",
          text: "The first lesson explains what a Bot is and the last one covers when not to use it. Each lesson only assumes what you saw in the ones before.",
        },
        {
          title: "The video, one click away",
          text: "When something was shown in the livestream, the lesson links to the exact minute. Read the idea, then jump there if you want to see it working.",
        },
        {
          title: "Prompts to copy",
          text: "Examples come ready to paste into your Bot. Swap the names for yours and they work.",
        },
        {
          title: "It remembers where you are",
          text: "Mark what you finish and come back to where you left off. No account needed, everything stays in your browser.",
        },
      ],
      authorTitle: "The author",
      authorText:
        "I'm Jorge Carrera, a software engineer and tech lead. I work with AI agents every day on my projects. I made this course to learn Grok Bot properly, and I'm sharing it in case it saves you the hours of video too.",
      authorX: "Follow me on X",
      authorWeb: "See what I have worked on",
      authorContact: "Get in touch",
      followTitle: "Finding this useful?",
      followText:
        "I add what's new from the livestream every day and post about it on X. Follow along to catch it as soon as it's out.",
      followButton: "Follow @jorgecarrera_es",
      introModule: "Before you start",
      storyLabel: "Before this module",
      storyMore: "Keep reading",
      lessonContents: "Contents",
      glossaryTitle: "Glossary",
      searchPlaceholder: "Search the course: skills, routines, support…",
      searchEmpty:
        "Nothing matches those words. Try another or check the glossary.",
      searchSection: "Section",
      whatsNewTitle: "New since your last visit",
      whatsNewAdded: "New lessons",
      whatsNewUpdated: "Updated lessons",
      searchInCourse: "Search the course",
      searchTerm: "Glossary",
      share: "Share",
      linkCopied: "Link copied",
      askTitle: "Questions",
      askText:
        "Ask me on X and I'll reply. If it helps other people too, I'll add it to the lesson.",
      askButton: "Ask on X",
      askTweet: '@jorgecarrera_es I have a question about "{title}": ',
      momentIn: "This moment, in lesson",
      glossaryDescription:
        "Grok Bot terms explained in one sentence: Bot, skill, routine, connector, MCP, cloud agent and the rest, with the lesson that covers each one.",
      glossaryIntro:
        "The words that come up in the course and are worth having clear. Each one links to the lesson that explains it in depth. Inside lessons, terms with a dotted underline open their definition.",
      glossaryLink: "Glossary of terms",
      glossaryLearn: "Explained in lesson",
      glossarySee: "See in the glossary",
      nextUp: "Next lesson",
      moduleDone: "Module {n} done",
      nextModule: "Starting module {n}",
      completeAndContinue: "Complete and continue",
      continueNext: "Continue",
      toRead: "left to read",
      minutesLeft: "min",
      resumeText: "You stopped at",
      resumeButton: "Jump back",
      close: "Close",
      dayLabel: "Day",
      diaryTitle: "Livestream diary",
      diaryDescription:
        "What happened each day of the Grok Bot launch livestream, in order: the company built in 72 hours, the Bots created along the way and what went wrong.",
      diaryIntro:
        "Three people from xAI set out to build a company in 72 hours with Grok Bot, live. Here's the story day by day, with a link to the minute of each moment and to the lesson where you learn to do it yourself.",
      diaryLink: "Read the livestream story day by day",
      diaryDayLink: "Read the diary for this day",
      diaryPending: "Its story goes up as soon as I transcribe it.",
      diaryDaysNav: "Livestream days",
      diaryLive: "live",
      diaryStartCourse: "Start the course from the beginning",
      diarySeeSyllabus: "See the syllabus",
      diaryLearnTitle: "Learn it in the course",
      moduleStart: "Start module",
      diaryEndTitle: "From the diary to the course",
      diaryEndText:
        "The course turns everything that happened in the livestream into short lessons, from the basics to advanced. Start from the beginning or go straight to the module you're interested in.",
      syllabusStart: "Start",
      partStoryLink: "What happened",
      learnIn: "Learn it in",
      unofficial:
        "This course is not made by xAI. It is based on their docs and the launch livestream.",
      statusTitle: "The three parts",
      statusIntro:
        "The course grows with the livestream. When each day's part ends, I transcribe it and add what's new to the lessons.",
      partLabel: "Part",
      statusDone: "In the course",
      statusProcessing: "Added as soon as I transcribe it",
      statusUpcoming: "Not yet",
      lessonSource: "Based on part {done} of {total} of the livestream",
      lessonSourceMore: "Pending",
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
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      syllabus: "Syllabus",
      objectives: "Contents",
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
