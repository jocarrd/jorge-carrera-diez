import type { Locale } from "@/i18n/config";

export type GlossaryEntry = {
  id: string;

  lesson: string;
  term: Record<Locale, string>;

  forms: Record<Locale, string[]>;
  definition: Record<Locale, string>;
};

export const glossary: GlossaryEntry[] = [
  {
    id: "bot",
    lesson: "01",
    term: { es: "Bot", en: "Bot" },
    forms: { es: ["Bots", "Bot"], en: ["Bots", "Bot"] },
    definition: {
      es: "Un compañero de IA con nombre, un trabajo y su propia conversación. Trabaja en un ordenador en la nube, también cuando tú no estás.",
      en: "An AI teammate with a name, a job and its own conversation. It works on a computer in the cloud, even when you're away.",
    },
  },
  {
    id: "skill",
    lesson: "06",
    term: { es: "Skill", en: "Skill" },
    forms: { es: ["skills", "skill"], en: ["skills", "skill"] },
    definition: {
      es: "Instrucciones guardadas para hacer una tarea siempre igual. Las pueden usar todos tus Bots.",
      en: "Saved instructions to do a task the same way every time. All your Bots can use them.",
    },
  },
  {
    id: "routine",
    lesson: "10",
    term: { es: "Routine", en: "Routine" },
    forms: { es: ["routines", "routine"], en: ["routines", "routine"] },
    definition: {
      es: "Un trabajo que un Bot hace solo, con un horario o cuando pasa algo en otra herramienta.",
      en: "Work a Bot does on its own, on a schedule or when something happens in another tool.",
    },
  },
  {
    id: "connector",
    lesson: "08",
    term: { es: "Connector", en: "Connector" },
    forms: { es: ["connectors", "connector"], en: ["connectors", "connector"] },
    definition: {
      es: "Una conexión ya preparada entre un Bot y un servicio como Slack, Notion o GitHub. En la app aparecen como Plugins.",
      en: "A ready-made link between a Bot and a service such as Slack, Notion or GitHub. In the app they appear as Plugins.",
    },
  },
  {
    id: "mcp",
    lesson: "08",
    term: { es: "MCP", en: "MCP" },
    forms: { es: ["MCP"], en: ["MCP"] },
    definition: {
      es: "Un estándar para que un agente use una herramienta directamente, a través de su API, sin hacer clics en una pantalla.",
      en: "A standard that lets an agent use a tool directly through its API, without clicking through a screen.",
    },
  },
  {
    id: "auto-review",
    lesson: "04",
    term: { es: "Auto-review", en: "Auto-review" },
    forms: {
      es: ["Auto-review", "Auto Review"],
      en: ["Auto-review", "Auto Review"],
    },
    definition: {
      es: "La revisión automática que decide qué acciones de un Bot necesitan tu aprobación antes de hacerse.",
      en: "The automatic review that decides which of a Bot's actions need your approval before they happen.",
    },
  },
  {
    id: "teach-a-task",
    lesson: "06",
    term: { es: "Teach a task", en: "Teach a task" },
    forms: { es: ["Teach a task"], en: ["Teach a task"] },
    definition: {
      es: "Grabar cómo haces una tarea en el ordenador del Bot para que la aprenda y la guarde como skill.",
      en: "Recording how you do a task on the Bot's computer so it learns it and saves it as a skill.",
    },
  },
  {
    id: "cloud-agent",
    lesson: "15",
    term: { es: "Agente en la nube", en: "Cloud agent" },
    forms: {
      es: ["agentes en la nube", "agente en la nube"],
      en: ["cloud agents", "cloud agent"],
    },
    definition: {
      es: "Un agente de programación de Cursor que trabaja en su propio ordenador sobre una copia del código y devuelve el cambio para revisarlo.",
      en: "A Cursor coding agent that works on its own computer on a copy of the code and returns the change for review.",
    },
  },
  {
    id: "harness",
    lesson: "15",
    term: { es: "Harness", en: "Harness" },
    forms: { es: ["harness"], en: ["harness"] },
    definition: {
      es: "Las herramientas que rodean a un modelo y le dejan leer, ejecutar y actuar. El mismo modelo rinde distinto según su harness.",
      en: "The tools around a model that let it read, run and act. The same model performs differently depending on its harness.",
    },
  },
  {
    id: "pull-request",
    lesson: "15",
    term: { es: "Pull request", en: "Pull request" },
    forms: {
      es: ["pull requests", "pull request"],
      en: ["pull requests", "pull request"],
    },
    definition: {
      es: "Una propuesta de cambio en el código, empaquetada para que alguien la revise antes de aceptarla.",
      en: "A proposed change to the code, packaged so someone can review it before it's accepted.",
    },
  },
  {
    id: "chief-of-staff",
    lesson: "13",
    term: { es: "Jefe de gabinete", en: "Chief of staff" },
    forms: { es: ["jefe de gabinete"], en: ["chief of staff"] },
    definition: {
      es: "Un Bot coordinador: reparte el trabajo entre los demás Bots y te cuenta solo los bloqueos y las decisiones.",
      en: "A coordinator Bot: it hands work to the other Bots and only reports blockers and decisions to you.",
    },
  },
  {
    id: "playbook",
    lesson: "13",
    term: { es: "Playbook", en: "Playbook" },
    forms: { es: ["playbook"], en: ["playbook"] },
    definition: {
      es: "El manual del equipo de Bots: las reglas que siguen todos, en un documento compartido.",
      en: "The Bot team's manual: the rules they all follow, in a shared document.",
    },
  },
  {
    id: "crm",
    lesson: "19",
    term: { es: "CRM", en: "CRM" },
    forms: { es: ["CRM"], en: ["CRM"] },
    definition: {
      es: "La herramienta donde un equipo lleva el seguimiento de clientes y oportunidades de venta.",
      en: "The tool where a team tracks customers and sales deals.",
    },
  },
  {
    id: "evals",
    lesson: "25",
    term: { es: "Evals", en: "Evals" },
    forms: { es: ["evals"], en: ["evals"] },
    definition: {
      es: "Casos de prueba que se vuelven a pasar tras cada cambio para comprobar que un Bot sigue respondiendo bien.",
      en: "Test cases run again after every change to check that a Bot still answers correctly.",
    },
  },
  {
    id: "tokens",
    lesson: "21",
    term: { es: "Tokens", en: "Tokens" },
    forms: { es: ["tokens"], en: ["tokens"] },
    definition: {
      es: "La unidad en la que se mide el trabajo del modelo: lo que lee y lo que escribe. Es lo que consume tu uso.",
      en: "The unit that measures the model's work: what it reads and what it writes. It's what uses up your plan.",
    },
  },
];
