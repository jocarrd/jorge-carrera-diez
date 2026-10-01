import { site } from "@/content/site";
import type { Copy } from "@/types/content";

export const en: Copy = {
  meta: {
    siteTitle:
      "Tech Lead and full stack engineer: software architecture, generative AI and SEO",
    description:
      "Computer engineer from the University of La Rioja. I lead architecture and new capabilities on enterprise projects, work with EQx (Elite Quality Index, University of St. Gallen) and develop Snowy, a weather platform in production on Next.js, NestJS, Redis, MySQL and Docker.",
    location: "Logroño, La Rioja, Spain",
    jobTitle: "Tech Lead and full stack engineer",
    universityLabel: "University of La Rioja",
    collegeLabel: "Official Association of Computer Engineers of La Rioja",
    ogAlt: `${site.name} - Software engineer`,
    ogEyebrow: "Tech Lead · Full stack",
    ogTagline:
      "Software architecture, full stack development and generative AI in production systems.",
    ogStats: [
      ["now", "VidaCaixa · EQx"],
      ["in production", "Snowy"],
      ["where", "Remote · Spain"],
    ],
  },
  nav: {
    brandRole: "Software engineer",
    contact: "Contact",
    writeToMe: "Email me",
    homeAriaLabel: "Home",
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    menuButton: "Menu",
    closeButton: "Close",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    sectionsLabel: "Sections",
    pagesLabel: "Pages",
    localeLabel: "Language",
    items: [
      { key: "home", label: "Home" },
      { key: "experience", label: "Experience" },
      { key: "projects", label: "Projects" },
      { key: "blog", label: "Blog" },
      { key: "snowy", label: "Snowy" },
      { key: "cv", label: "CV" },
      { key: "contact", label: "Contact" },
    ],
    sections: [
      { anchor: "rol-actual", label: "Current role" },
      { anchor: "snowy-showcase", label: "Snowy" },
      { anchor: "proyectos", label: "Projects" },
      { anchor: "experiencia", label: "Experience" },
    ],
  },
  profile: {
    headline:
      "Software engineer. I am Tech Lead on VidaCaixa projects, I took over the technical lead at EQx in Switzerland, and I develop Snowy, which now takes millions of impressions a month.",
    positioning: "Tech Lead · Full stack · Software architecture",
    positioningLong:
      "Tech Lead and full stack engineer, from architecture to production.",

    aboutTitle: "Chartered computer engineer, based in Logroño, Spain.",
    aboutStatement: [
      { text: "Software engineer based in Logroño. " },
      { text: "Tech Lead in banking and insurance", strong: true },
      { text: ", " },
      { text: "technical lead of the Elite Quality Index", strong: true },
      { text: " in Switzerland and, on the side, " },
      { text: "I build Snowy", strong: true },
      { text: "." },
    ],
    tagline: ["Tech Lead and", "full stack", "engineer."],
    taglineSub:
      "Engineer on banking and insurance projects in Spain, on a Swiss academic index and on a weather platform people use every day.",
    availability: "Available for projects and teams",
    clientsLabel: "Where I have worked",
    capabilities: [
      {
        title: "Software architecture",
        text: "How a system splits into frontend, backend, data and deployment, and which decision belongs to each layer.",
      },
      {
        title: "Full stack development",
        text: "React, Next.js and TypeScript on the frontend; Node, NestJS and Java with Spring Boot on the backend.",
      },
      {
        title: "Generative AI and agents",
        text: "Agents and models integrated into real systems, with their limits, cost and maintenance.",
      },
      {
        title: "Data and infrastructure",
        text: "Databases, caching, deployments and the server everything runs on.",
      },
    ],
    focus: [
      "Web product with React, Next.js, TypeScript and NestJS",
      "Agent orchestration and generative AI integration",
      "SEO-first products with SSR and indexable content",
      "Decoupled backend, Redis, MySQL, Docker and VPS",
      "UX, performance, weather data and Artificial Intelligence",
    ],
    summary: [
      { text: "Computer engineer from the " },
      {
        text: "University of La Rioja",
        href: site.universityUrl,
        external: true,
      },
      { text: ", chartered by the " },
      {
        text: "Official Association of Computer Engineers of La Rioja",
        href: site.collegeUrl,
        external: true,
      },
      {
        text: ". Over five years in the industry: currently Tech Lead in banking and insurance, and freelance engineer for the Swiss foundation that publishes the ",
      },
      { text: "Elite Quality Index", href: site.eqxIndex, external: true },
      {
        text: " under the University of St. Gallen. Alongside that I build Snowy, a weather platform with real users that I use to work product, data and infrastructure end to end.",
      },
    ],
    visualStats: [
      ["Current", "Tech Lead"],
      ["Product", "Snowy"],
      ["Based in", "Logroño"],
      ["Stack", "Full stack"],
    ],
  },
  hero: {
    paths: {
      team: { question: "Hiring for your team?", label: "See CV" },
      product: {
        question: "Need help with your product?",
        label: "See services",
      },
    },
    ctaPrimary: "See experience",
    ctaSecondary: "CV",
    ctaContact: "Get in touch",
    cycle: {
      label: "Delivery cycle",
      state: "running",
      steps: [
        {
          title: "Architecture",
          caption: "the decision gets written down",
          tag: "ADR",
        },
        {
          title: "Implementation",
          caption: "in an isolated workspace",
          tag: "branch",
        },
        {
          title: "Review and tests",
          caption: "nothing lands unverified",
          tag: "tests",
        },
        {
          title: "Build and deploy",
          caption: "container and cache",
          tag: "CI",
        },
        { title: "In production", caption: "with real users", tag: "live" },
      ],
      foot: "snowy.es · eqx",
      badge: "3 in production",
    },
  },
  currentRole: {
    homeTitle: "Tech Lead in banking and insurance.",
    homeText:
      "I own the frontend architecture of a product with security, traceability and long-term maintenance requirements. The job is deciding how it gets built, and making sure the team can sustain it.",
    fronts: [
      {
        label: "01",
        title: "Architecture and standards",
        text: "How the frontend is structured, what ships in each release and which conventions hold across teams.",
      },
      {
        label: "02",
        title: "Reviews and team",
        text: "Code reviews, technical mentoring and alignment with backend, QA and business.",
      },
      {
        label: "03",
        title: "Generative AI in production",
        text: "Use cases and agents inside enterprise flows, with their limits, their cost and their maintenance.",
      },
    ],
    eyebrow: "Current role",
    title:
      "Tech Lead at VidaCaixa and engineering partner to EQx in Switzerland.",
    text: "My current work combines technical judgement, coordination across teams and shipping new capabilities — both in an enterprise environment and on an international product where I own the technical handover end to end.",
    paragraphs: [
      [
        {
          text: "At VidaCaixa I work as Tech Lead in a banking and insurance environment, taking frontend architecture decisions, coordinating technically, reviewing code and aligning with backend, QA and business.",
        },
      ],
      [
        {
          text: "I am also involved in integrating generative AI capabilities, landing use cases, agents and tooling inside enterprise flows with security, traceability and maintenance requirements.",
        },
      ],
      [
        {
          text: "In parallel I collaborate as a freelance engineer with the Swiss foundation that publishes the ",
        },
        { text: "Elite Quality Index", href: site.eqxIndex, external: true },
        {
          text: ", a political-economy index under the academic leadership of the University of St. Gallen. I took over its digital products and work directly with the index directors and designers to decide what ships and when.",
        },
      ],
    ],
    signals: [
      {
        title: "Technical leadership",
        text: "Architecture, standards, code reviews, technical coordination and supporting the team.",
      },
      {
        title: "AI integration",
        text: "Defining and embedding generative AI capabilities and agents into enterprise flows at Caixa.",
      },
      {
        title: "Critical environment",
        text: "Work on a banking and insurance product with business dependencies, QA, backend and cross-functional teams.",
      },
    ],
  },
  ai: {
    titleAccent: "AI agents",
    title: "Crux, my framework for working with AI agents",
    lead: "Crux controls the lifecycle of every task an agent does, from understanding the project to proposing the change. The code it produces follows each project's standards, and nothing reaches production without being checked.",
    detailTitle: "The agent's memory lives in git",
    detail:
      "Each project has a repository just for its documentation, with its conventions and decisions, versioned and in the cloud. The agent reads it before touching anything, and what it learns in one session is not lost in the next.",
    rows: [
      ["standard", "Rules, procedures and tooling shared by every project."],
      [
        "project",
        "Documentation and procedures of its own, declared in a contract.",
      ],
      ["repository", "Generated context pointers, never written by hand."],
    ],
    journey: {
      label: "One task, start to finish",
      commandsLabel: "See the commands (for developers)",
      steps: [
        {
          kicker: "Isolated workspaces",
          title: "Every task in its own space",
          text: "Several tasks move forward at once without stepping on each other.",
          command: "crux workspace new mapa-3d",
          output: "workspace 'mapa-3d' ready · own branch, copy and ports",
        },
        {
          kicker: "Procedures",
          title: "The agent follows a written procedure",
          text: "The steps are documented. Nothing is improvised.",
          command: "/ship",
          output: "the agent opens the written procedure before committing",
        },
        {
          kicker: "Quality gate",
          title: "Nothing moves on without passing the tests",
          text: "If something fails, it stops before it reaches production.",
          command: "crux ship run -- npm test",
          output: "tests green, result written to the receipt",
        },
        {
          kicker: "Receipt",
          title: "Every delivery comes with its proof",
          text: "What was checked, and on which version, is written down.",
          command: "crux workspace finish mapa-3d",
          output: "pull request opened, with the receipt as proof",
        },
        {
          kicker: "Measurement",
          title: "What isn't used gets removed",
          text: "Which procedures help and which are dead weight is measured.",
          command: "crux usage",
          output: "which procedures get used and which are dead weight",
        },
      ],
    },
    diagram: {
      eyebrow: "Every task, in any project",
      inLabel: "Goes in",
      systemLabel: "The system provides",
      outLabel: "Stays in git",
      inTitle: "One task",
      inCaption: "from any project",
      projects: [
        "a new feature",
        "a production bug",
        "an infrastructure change",
      ],
      system: [
        "The procedure to follow",
        "An isolated workspace",
        "The gates it has to pass",
        "The project context",
      ],
      output: [
        "The code",
        "The decision and its rationale",
        "The procedure learned",
        "What was measured",
      ],
      note: "Without a system behind it, only the code survives a working session.",
    },
    principlesTitle: "The principles behind it",
    principles: [
      {
        title: "Reasoning weighs as much as code",
        text: "What a project knows is not only in what gets programmed: it is in the decisions taken, in the reasoning that led to them, and in what was discussed with whoever defines the product. That shapes every later step and is the first thing to be lost, so I built the architecture to keep it.",
      },
      {
        title: "The standard is verified",
        text: "The rules holding the work together have automated checks wired into the cycle. A rule you have to remember gets followed some of the time.",
      },
      {
        title: "What goes unused is retired",
        text: "Which procedures actually get invoked is measured. A catalogue that grows without pruning stops being useful for finding anything.",
      },
    ],
  },
  snowyShowcase: {
    title: "A weather platform in production.",
    lead: "Snowy is a complex product covering multi-model forecasts, radar, weather stations, alerts, climate history and an AI assistant. Over the last three months it had 16.8 million impressions on Google and 257,000 clicks, and it has more than 1,400 registered users.",
    ctaPrimary: "See the engineering case",
    ctaSecondary: "Open Snowy",
    gallery: [
      {
        image: "/images/snowy-clima-crestas.webp",
        imageMobile: "/images/snowy-clima-crestas-movil.webp",
        title: "Climate since 1950",
        caption:
          "Each ridge is a year: how its days split between colder and warmer than normal.",
        alt: "Snowy ridgeline chart with the warm days of each year in Spain since 1950, shifting from blue to red",
      },
      {
        image: "/images/snowy-red-estaciones-movil.webp",
        imageMobile: "/images/snowy-red-estaciones-movil.webp",
        title: "Station network",
        caption:
          "1,863 stations from AEMET, regional networks and hobbyists, with the ones reporting right now.",
        alt: "Snowy weather station network list on a phone",
      },
      {
        image: "/images/snowy-estacion-ficha-movil.webp",
        imageMobile: "/images/snowy-estacion-ficha-movil.webp",
        title: "Your station, with an owner",
        caption:
          "Every station has an owner: connect yours to the network, follow them and save favourites.",
        alt: "Snowy station page with its owner and the follow and favourite buttons",
      },
      {
        image: "/images/snowy-reportes-movil.webp",
        imageMobile: "/images/snowy-reportes-movil.webp",
        title: "Live reports",
        caption:
          "Rain, hail, snow or fog, reported by the community and shown on the map instantly.",
        alt: "Snowy live reports screen with the report the weather button",
      },
      {
        image: "/images/snowy-nieve-3d.webp",
        imageMobile: "/images/snowy-nieve-3d-movil.webp",
        title: "Ski slopes in 3D",
        caption:
          "Terrain and slopes for each resort, in 3D over the real relief.",
        alt: "Snowy 3D map with the Formigal slopes over the Pyrenees relief",
      },
      {
        image: "/images/snowy-home.webp",
        imageMobile: "/images/snowy-tiempo-movil.webp",
        title: "Forecast, with confidence",
        caption:
          "Three models cross-checked, a confidence indicator and 1,171 live stations.",
        alt: "Snowy forecast landing, with cross-checked models and the confidence indicator",
      },
      {
        image: "/images/snowy-stations-map.webp",
        imageMobile: "/images/snowy-perfil-movil.webp",
        title: "User profile",
        caption:
          "Stations, reports, streak and queries: the community side of the product.",
        alt: "A Snowy user profile with activity stats and their featured station",
      },
    ],
    imageAlt: "Snowy home with weather search, AI assistant and planner",
  },
  experiencePreview: {
    eyebrow: "Experience",
    title: "Technical leadership on enterprise projects.",
    text: "My current role gives context and authority: architecture, standards, reviews, coordination, agents and mentoring on systems with real impact.",
    cta: "See full career",
  },
  projectsPreview: {
    eyebrow: "Products",
    title: "Snowy, EQx and La Rioja Meteo.",
    text: "Three projects in production where I handle the architecture, the infrastructure and the development.",
  },
  sectionLabels: {
    work: "What I do",
    role: "Now",
    method: "Method",
    projects: "Projects",
    snowy: "Snowy",
    experience: "Career",
    about: "About me",
    blog: "Blog",
    contact: "Contact",
  },
  contactCta: {
    terminalCommand: "contact --with jorge",
    terminalHint: "Click to open your email",
    title: "If my profile fits, let's talk.",
    text: "If you have something in mind and are not sure it fits, write to me and I will tell you straight. If I am not the right person, I will say that too.",
    cta: "Email me",
  },
  footer: {
    tagline: "Software engineer and chartered computer engineer.",
    contact: "Contact",
  },
  cvTimeline: {
    label: "Track record",
    note: "Enterprise consultancy and international product at once: banking and insurance on one side, a Swiss foundation and a platform in production on the other.",
  },
  experience: [
    {
      company: "EQx",
      role: "Freelance software engineer",
      context: "University of St. Gallen, Switzerland",
      headline: "Software engineer - EQx (Switzerland)",
      client: "Foundation for Value Creation",
      image: "/images/eqx-home.webp",
      imageAlt:
        "Home page of the Elite Quality Index, the index the foundation publishes",
      period: "July 2026 - Present",
      start: "2026-07",
      end: null,
      summary:
        "Technical handover of the digital products of the Foundation for Value Creation: the public site of the Elite Quality Index and the private console behind it. The index measures across 151 countries whether elites create value or extract it, under the academic direction of the University of St. Gallen.",
      highlights: [
        "Handover from the previous developer with no interruption to the running product.",
        "End-to-end ownership of the user experience across both products.",
        "Direct contact with the index directors, designers and the people behind the rating model.",
        "Product-level prioritisation: deciding what ships for each client milestone.",
        "Remote work with an international team on an applied research project.",
      ],
      logo: {
        src: "/images/logos/eqx.png",
        alt: "EQx - Elite Quality Index",
        fallback: "EQx",
      },
    },
    {
      company: "Capgemini",
      role: "Tech Lead",
      context: "Capgemini",
      headline: "Tech Lead - VidaCaixa",
      client: "VidaCaixa",
      period: "October 2025 - Present",
      start: "2025-10",
      end: null,
      summary:
        "Frontend technical leadership on a strategic project in the insurance sector, defining architecture, development standards, best practices and the integration of generative AI into enterprise flows.",
      highlights: [
        "Frontend architecture definition and key technical decisions.",
        "Leading the integration of generative AI across Caixa projects.",
        "Agent orchestration, use-case assessment and the technical landing of AI flows.",
        "Code reviews, quality standards and mentoring.",
        "Coordination with backend, QA and business.",
      ],
      logo: {
        src: "/images/logos/vidacaixa.png",
        alt: "VidaCaixa",
        fallback: "VidaCaixa",
      },
    },
    {
      company: "Capgemini",
      role: "Lead Software Engineer",
      context: "Capgemini",
      headline: "Lead Software Engineer - Openbank",
      client: "Openbank, Santander Group",
      period: "March 2025 - October 2025",
      start: "2025-03",
      end: "2025-10",
      summary:
        "Built the UI of a banking operations system for branches, focused on React, scalability, maintainability and hexagonal architecture patterns.",
      highlights: [
        "Building scalable banking interfaces.",
        "Mentoring junior engineers on React and architecture.",
        "Applying good practices on a large-scale financial project.",
      ],
      logo: {
        src: "/images/logos/openbank.png",
        alt: "Openbank Santander Group",
        fallback: "Openbank",
      },
    },
    {
      company: "Minsait (Indra)",
      role: "Full Stack and Frontend Developer",
      context: "Inditex",
      client: "Inditex",
      period: "June 2023 - March 2025",
      start: "2023-06",
      end: "2025-03",
      summary:
        "Development and maintenance of Inditex's store management terminal, deployed across thousands of points of sale worldwide.",
      highlights: [
        "Frontend with React and TypeScript; backend with Java and Spring Boot.",
        "CI/CD with GitHub Actions, testing and quality improvements.",
        "Scrum teams and deployments on cloud environments.",
      ],
      logo: {
        src: "/images/logos/minsait.png",
        alt: "Minsait",
        fallback: "Minsait",
      },
    },
    {
      company: "Hiberus Digital",
      role: "Full Stack and Frontend React Developer",
      context: "React, Next.js, Node.js",
      period: "February 2022 - June 2023",
      start: "2022-02",
      end: "2023-06",
      summary:
        "Web applications in production, reusable components and projects such as the Hiberus corporate site and SivasDescalzo.",
      highlights: [
        "React, Next.js, Node.js, Jest and React Testing Library.",
        "Components for the internal OnlyUI library.",
        "Weather station management system as my final degree project.",
      ],
      logo: {
        src: "/images/logos/hiberus.png",
        alt: "Hiberus",
        fallback: "Hiberus",
      },
    },
    {
      company: "JIG",
      role: "Frontend Vue Developer (intern)",
      context: "Wolfsburg mobility",
      period: "September 2021 - December 2021",
      start: "2021-09",
      end: "2021-12",
      summary:
        "Frontend internship with Vue, CSS, HTML, Docker and Git, building a site for transport users and an admin panel.",
      highlights: [
        "Interface for bus line passengers.",
        "Control panel for monitoring fleet components.",
        "First professional contact with web product and real operations.",
      ],
      logo: {
        src: "/images/logos/jig.png",
        alt: "JIG",
        fallback: "JIG",
      },
    },
  ],
  aboutFacts: {
    location: "Based in",
    languages: "Languages",
    education: "Education",
  },
  education: [
    {
      title: "Computer Engineering",
      org: site.university,
      url: site.universityUrl,
      note: "Chartered by the " + site.college,
    },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "SSR", "SEO", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["NestJS", "Node.js", "Java", "Spring Boot", "APIs", "Auth"],
    },
    {
      title: "Data and infrastructure",
      items: ["MySQL", "Redis", "Prisma", "Docker", "Coolify", "AWS"],
    },
    {
      title: "AI and agents",
      items: ["Vercel AI SDK", "RAG", "LLMs", "MCP", "Tools", "Evals"],
    },
    {
      title: "Product",
      items: ["UX", "Roadmap", "Automation", "Analytics", "CI/CD"],
    },
  ],
  projects: [
    {
      slug: "snowy",
      imageMobile: "/images/snowy-movil.webp",
      pitch:
        "Multi-model forecasting, radar and an assistant for all of Spain.",
      name: "Snowy",
      url: site.snowy,
      label: "Weather platform",
      logo: "/images/snowy-logo.webp",
      image: "/images/snowy-home.webp",
      description:
        "Weather platform with real-time data, maps, radar, stations, SEO, its own backend, infrastructure and AI.",
      impact:
        "Development end to end, from server rendering to the radar and the deployments, with maintenance running since it first shipped.",
      metrics: [
        { value: "16", label: "weather models" },
        { value: "1,800+", label: "live stations" },
        { value: "374", label: "reservoirs tracked" },
        { value: "1,400+", label: "registered users" },
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "MySQL",
        "Redis",
        "Docker",
        "Coolify",
        "AI SDK",
      ],
    },
    {
      slug: "eqx",
      imageMobile: "/images/eqx-movil.webp",
      pitch: "The index ranking 151 countries by the quality of their elites.",
      name: "EQx",
      url: "https://elitequality.org/",
      label: "Client · Switzerland",
      image: "/images/eqx-home.webp",
      description:
        "Elite Quality Index: the Foundation for Value Creation index ranking 151 countries by the quality of their elites, with a public site and an assessment platform.",
      impact:
        "Redesign of elitequality.org on a design system, a new Value Creation Rating website and maintenance of the platform where companies take their assessment.",
      metrics: [
        { value: "151", label: "countries ranked" },
        { value: "148", label: "indicators" },
        { value: "12", label: "pillars across 4 areas" },
        { value: "7th", label: "annual edition" },
      ],
      stack: [
        "Astro",
        "React",
        "Next.js",
        "PostgreSQL",
        "D3",
        "GitHub Actions",
      ],
    },
    {
      slug: "lariojameteo",
      imageMobile: "/images/lariojameteo-movil.webp",
      pitch: "La Rioja's reference weather portal, publishing since 2012.",
      name: "LaRiojaMeteo",
      url: site.lariojameteo,
      label: "Regional portal",
      logo: "/images/lariojameteo-logo-white.png",
      image: "/images/lariojameteo-home.webp",
      description:
        "Regional weather portal combining audience, content, SEO, community and editorial distribution for La Rioja and Logroño.",
      impact:
        "A regional weather project running since 2012, with an editorial focus, SEO, community and live data.",
      metrics: [
        { value: "2012", label: "project origin" },
        { value: "2024", label: "Jorge joins" },
        { value: "130+", label: "archive pages" },
        { value: "500k", label: "initial monthly visits" },
      ],
      stack: ["SEO", "WordPress", "Performance", "UX", "Analytics"],
    },
  ],
  sideProjects: [
    {
      slug: "mac-o-menos",
      name: "Mac o menos",
      url: "https://macs.jorge-carrera-diez.com/",
      host: "macs.jorge-carrera-diez.com",
      description:
        "Every morning it compares the price of 110 Mac configurations across nine Spanish stores and Apple, and flags where each one is cheapest.",
      stack: ["Python", "Astro", "TypeScript", "GitHub Actions"],
    },
  ],
  featuredProjects: {
    leadCta: "See the case",
    secondaryCta: "See the case",
    leadImageAlt: "Main project interface",
    secondaryImageAlt: "Project home page",
  },
  pages: {
    projects: {
      title: "Projects",
      description:
        "Projects by Jorge Carrera Diez: Snowy, the EQx Elite Quality Index and LaRiojaMeteo. Product, architecture, data, SEO and infrastructure.",
      eyebrow: "Projects",
      heading:
        "A platform in production, an international client and a portal with an audience.",
      text: "Snowy is where I test architecture decisions for real. EQx is how I work with a client. LaRiojaMeteo is audience, content and SEO sustained over years.",
      sideTitle: "Side projects",
      sideText:
        "Tools I build on my own, to solve a problem of mine or to test an idea.",
    },
    experience: {
      title: "Experience",
      description:
        "Professional experience of Jorge Carrera Diez as a software engineer, Tech Lead, Lead Software Engineer and Full Stack Developer, and how he applies generative AI and agents inside enterprise workflows.",
      eyebrow: "Experience",
      heading:
        "Software engineer with a track record in banking, insurance, retail and web product.",
      text: "The full track record, in order. Where I led the technical decisions, what I built at each place, and how I have been putting AI agents into flows that were already in production.",
      spanLegend: "Running right now",
    },
    cv: {
      title: "CV",
      description:
        "CV of Jorge Carrera Diez, software engineer and chartered computer engineer specialised in digital product, architecture, frontend, backend and SEO.",
      eyebrow: "CV",
      experienceEyebrow: "Experience",
      experienceTitle: "Career",
      stackEyebrow: "Stack",
      stackTitle: "Technical skills",
      stackText:
        "I pick tools for performance, maintainability, SEO, cost and user experience.",
      educationTitle: "Education",
      languagesTitle: "Languages",
      downloadCta: "Download as PDF",
      printHint: "Two pages, updated September 2026.",
    },
    contact: {
      title: "Let's work together",
      description:
        "Jorge Carrera Diez, freelance software engineer. Technical handover of products already in production, React and Next.js development, and frontend architecture advisory.",
      lead: "I step into products that already exist and keep building them, or take them from zero to production.",
      detail:
        "Software architecture, product decisions and agents put where they actually save hours. Write to me and I answer myself, with no forms in between.",
      availabilityLabel: "how we start",
      availabilityText:
        "We talk for half an hour, agree what is in and what is out, and you get the budget and the working rhythm in writing before I touch anything.",
      stepsTitle: "How we start",
      stepsText:
        "No twenty-page proposals, no meetings to prepare another meeting.",
      steps: [
        {
          title: "A half-hour call",
          text: "You tell me what the product is, where it stands and what you need.",
        },
        {
          title: "We scope the work",
          text: "What is in, what is out and how long it takes. If it does not fit, I say so there.",
        },
        {
          title: "Budget and rhythm in writing",
          text: "Fixed price and how often you will see something running, before we start.",
        },
      ],
      servicesTitle: "How I can help",
      servicesText: "Four ways of working, each with a real project behind it.",
      services: [
        {
          title: "Products from zero to production",
          text: "I turn a founder's idea into a working product, with React, Next.js, TypeScript and NestJS. Deployment and SEO come from day one, not at the end.",
        },
        {
          title: "Architecture and team support",
          text: "For teams already building. I decide the architecture and review the code, so what they write today can still be maintained a year from now.",
        },
        {
          title: "Automation with AI agents",
          text: "I identify the tasks your team performs manually and automate them with AI agents. It is how I work every day, with Crux, the framework I have developed for it.",
        },
        {
          title: "Technical SEO and AI search",
          route: "seoService",
          text: "I review the technical SEO of your website so it shows up on Google and in assistants such as ChatGPT or Perplexity. It is the work behind Snowy's organic traffic.",
        },
      ],
      clientsTitle: "Where I have worked",
      clientsText:
        "Products in production, with real users and consequences when something breaks.",
      clients: [
        {
          title: "University of St. Gallen",
          text: "Digital products of the Elite Quality Index, for the Swiss foundation that publishes it.",
        },
        {
          title: "Inditex",
          text: "Store management terminal, deployed across thousands of points of sale.",
        },
        {
          title: "Openbank · Santander Group",
          text: "Interface for a banking operations system used in branches.",
        },
        {
          title: "VidaCaixa",
          text: "Frontend technical leadership: architecture, standards and code review.",
        },
      ],
      emailLabel: "write to me",
      emailHint:
        "Tell me the context in four lines: what the product is, what state it is in, and what you need. I will reply if it fits, and also if it does not.",
      ctaPrimary: "Send an email",
      ctaSecondary: "See CV",
      servicesCtaTitle: "What you can hire me for",
      servicesCtaText:
        "The ways of working and the weekly dedication are on the services page.",
      servicesCtaButton: "See services",
      linksTitle: "Before you write",
      linksText:
        "If you would rather have more context first, here is the relevant part of my profile and where to see my work.",
      links: [
        { key: "malt", label: "Malt" },
        { key: "linkedin", label: "LinkedIn" },
        { key: "github", label: "GitHub" },
        { key: "cv", label: "Web CV" },
        { key: "snowy", label: "Snowy" },
      ],
    },
    services: {
      title: "Digital product development, from idea to production",
      description:
        "Jorge Carrera Diez, freelance product engineer: I take digital products from idea to production, join teams that are already building, and do technical SEO. React, Next.js, TypeScript, NestJS and AWS.",
      eyebrow: "What you can hire me for",
      heading: "Digital products, from idea to production",
      lead: "I take a founder's idea all the way to a product in production, or join a team that is already building and improve what is there. From the infrastructure to the frontend, with a product mindset.",
      detail:
        "Five years on production systems in banking, insurance and retail, with teams that could not pause delivery while the ground was rebuilt underneath. Alongside that I develop Snowy, a weather platform that gathered 16.8 million organic impressions and 257,000 clicks from Google over the last three months.",
      ctaCall: "Book a call",
      ctaCase: "Read the Snowy SEO case",
      caseLink: "See the technical SEO service",
      chart: {
        title: "Daily clicks from Google on Snowy",
        ariaLabel:
          "Daily clicks from Google on Snowy between 26 June and 24 September 2026, peaking at 27,351 on 12 August, the day of the eclipse.",
        peakLabel: "27,351 clicks on eclipse day",
        startLabel: "26 Jun",
        endLabel: "24 Sep",
        caption: "Source: Google Search Console, 91 days.",
      },
      productionTitle: "In production",
      productionText: "Products I run or have run, with real users inside.",
      productionLink: "See the case",
      production: [
        {
          name: "Snowy",
          text: "Weather intelligence platform: multi-model forecast, radar and an AI assistant.",
          domain: "snowy.es",
          image: "/images/snowy-home.webp",
          alt: "Snowy homepage with the station map and the forecast",
          route: "snowy",
        },
        {
          name: "EQx",
          text: "The index that ranks 151 countries by the quality of their elites, for a Swiss foundation.",
          domain: "elitequality.org",
          image: "/images/eqx-home.webp",
          alt: "Elite Quality Index homepage with the world map",
          route: "eqx",
        },
        {
          name: "La Rioja Meteo",
          text: "The reference weather portal in La Rioja since 2012.",
          domain: "lariojameteo.es",
          image: "/images/lariojameteo-home.webp",
          alt: "La Rioja Meteo homepage",
          route: "lariojameteo",
        },
      ],
      stackTitle: "What I work with",
      stackText:
        "What I use daily on projects with real users, rather than a list of everything I have touched once.",
      stack: [
        {
          group: "Frontend",
          items:
            "React · Next.js · TypeScript · Tailwind · SSR · technical SEO",
        },
        {
          group: "Backend",
          items: "Node · NestJS · Java · Spring Boot · APIs · authentication",
        },
        {
          group: "Data and infrastructure",
          items: "MySQL · PostgreSQL · Redis · Prisma · Docker · AWS · Vercel",
        },
        {
          group: "Agents and AI",
          items: "Vercel AI SDK · RAG · MCP · tools · evaluations",
        },
      ],
      metrics: [
        {
          value: 16830175,
          label: "organic impressions",
          detail: "on Snowy, over the last 90 days",
        },
        {
          value: 257346,
          label: "clicks from search",
          detail: "over that same period",
        },
        {
          value: 1400,
          suffix: "+",
          label: "registered users",
          detail: "on Snowy",
        },
      ],
      formTitle: "First, a half-hour call",
      formText:
        "You tell me what the product is and what you need. Afterwards I send you a fixed written proposal, price included. Fill these in and your mail client opens with the request already written.",
      form: {
        name: "Name",
        email: "Email",
        product: "Product",
        productHint: "Name or web address, if it already exists",
        need: "What you need",
        needHint: "What state it is in and what you are missing",
        formSubject: "30-minute call",
        submit: "Request the call",
        note: "Nothing is stored here. The message goes out from your own account.",
        emailAlt: "Rather write without a form?",
      },
    },
    seoService: {
      title: "Technical SEO consultant: audit and implementation",
      description:
        "Freelance technical SEO consultant: a technical SEO audit of your website and implementation of the changes. Indexing, Core Web Vitals, JavaScript rendering and AI search, specialising in React and Next.js.",
      eyebrow: "Services · Technical SEO",
      heading: "Technical SEO consultant",
      lead: "I review your website's technical SEO and get it ready for Google and for AI search. Since I am also a developer, I can implement the changes myself in your repository.",
      detail:
        "It is the work behind Snowy, a weather intelligence platform that gathered 16.8 million impressions and 257,000 organic clicks in 90 days. It works for any website, and where I add the most is on products built with React or Next.js.",
      facts: [
        { label: "Impressions on Snowy", value: "16.8 M" },
        { label: "Clicks in 90 days", value: "257,346" },
        { label: "Average position", value: "8.1" },
        { label: "Speciality", value: "React and Next.js" },
      ],
      ctaPrimary: "Book a call",
      ctaSecondary: "See the Snowy case",
      forWhomTitle: "When it makes sense",
      forWhomText: "Situations where the problem is usually technical.",
      forWhom: [
        {
          title: "Google does not show your website",
          text: "The product is good, but the pages are not indexed or rank below the competition.",
        },
        {
          title: "You are about to migrate",
          text: "A change of domain, CMS or framework. A well-built redirect map keeps the traffic you already have.",
        },
        {
          title: "Your website is built with React or Next.js",
          text: "If the content depends on JavaScript, Google and AI bots may not see what your users see.",
        },
        {
          title: "You want to show up in AI answers",
          text: "ChatGPT, Perplexity and Google's AI summaries cite pages they can read and that bring data of their own.",
        },
      ],
      auditTitle: "What the technical SEO audit covers",
      auditText:
        "The areas I review, with the terms you will find in the report.",
      audit: [
        {
          title: "Crawling and indexing",
          text: "robots.txt, meta robots, indexing status in Search Console, discovered but not indexed pages, soft 404s and status codes.",
        },
        {
          title: "Architecture and internal linking",
          text: "Click depth, orphan pages, URL parameters and pagination.",
        },
        {
          title: "JavaScript rendering",
          text: "What Googlebot sees in the initial HTML and after rendering, and whether the canonical and noindex come from the server.",
        },
        {
          title: "Core Web Vitals",
          text: "LCP, INP and CLS with field data from real users, as well as lab tests.",
        },
        {
          title: "Duplicates, canonicals and hreflang",
          text: "Which version of each page counts for Google, and whether language or country versions are linked correctly.",
        },
        {
          title: "Redirects and sitemaps",
          text: "Chains, loops and 302s that should be 301s. XML sitemaps that only include indexable, canonical URLs.",
        },
        {
          title: "Structured data",
          text: "Markup that is valid and says the same as the page.",
        },
        {
          title: "Log file analysis",
          text: "What Googlebot, Bingbot and AI bots actually crawl, and how often.",
        },
        {
          title: "AI search",
          text: "Access for the ChatGPT and Perplexity bots in robots.txt and at the CDN, content available without JavaScript, and data of your own that can be cited.",
        },
        {
          title: "Migrations",
          text: "A URL-to-URL redirect map before the change, and follow-up in Search Console afterwards.",
        },
      ],
      deliverablesTitle: "What you get",
      deliverablesText:
        "A diagnosis with the cause of each problem and the order in which to fix them.",
      deliverables: [
        {
          title: "Report",
          text: "Each problem with its cause, where it appears and how to fix it.",
        },
        {
          title: "Prioritised backlog",
          text: "Tasks ordered by impact and effort, ready to go into the sprint.",
        },
        {
          title: "Walkthrough session",
          text: "We go through the report together, with your team if you have one.",
        },
        {
          title: "Implementation, if you want it",
          text: "I do it in your repository, with changes your team can review, and then validate it in Search Console and Bing Webmaster Tools.",
        },
      ],
      jsTitle: "SEO for React and Next.js",
      jsText: "Where it shows most that the reviewer also writes code.",
      js: [
        {
          title: "Server rendering",
          text: "SSR, SSG or ISR depending on how quickly each page goes stale, so Google and AI bots get the content in the first HTML.",
        },
        {
          title: "Performance",
          text: "Hydration, JavaScript weight and images. It is the first thing I look at when LCP or INP come out badly.",
        },
        {
          title: "Metadata and linking from the code",
          text: "Titles, canonicals, hreflang and links with a real href generated by the product itself, without relying on someone filling them in by hand.",
        },
      ],
      search: {
        title: "Where Google has no answer of its own",
        text: "One page for each specific search. This is the one that performs best on Snowy.",
        query: "bandera playa guardamar del segura hoy",
        domain: "snowy.es",
        path: "playas › guardamar-centro",
        resultTitle:
          "Playa Centro de Guardamar hoy: estado del mar, oleaje y banderas",
        resultSnippet:
          "Hoy en Playa Centro de Guardamar (Guardamar del Segura, Alicante): mar marejadilla, bandera verde prevista por oleaje, olas de 0,5 m, agua a 26°.",
        badge: "Position 1.8 · 41% click through",
        caption:
          "The page's real title and description, in Spanish. Position and click-through rate from Search Console, 90 days.",
      },
      chart: {
        title: "Daily clicks from Google on Snowy",
        ariaLabel:
          "Daily clicks from Google on Snowy between 26 June and 24 September 2026, peaking at 27,351 on 12 August, the day of the eclipse.",
        peakLabel: "27,351 clicks on eclipse day",
        startLabel: "26 Jun",
        endLabel: "24 Sep",
        caption: "Source: Google Search Console, 91 days.",
      },
      render: {
        before: {
          label: "A website that depends on JavaScript",
          caption:
            "The bot gets an empty page. The content appears when the JavaScript runs, and AI bots do not run it.",
        },
        after: {
          label: "Snowy, rendered on the server",
          caption:
            "What OAI-SearchBot, ChatGPT's search bot, received on 26 September 2026.",
        },
      },
      vitalsTitle: "Core Web Vitals",
      vitalsText:
        "The three metrics Google uses to measure loading experience, with the thresholds it publishes.",
      vitals: [
        {
          name: "LCP",
          full: "Largest Contentful Paint",
          good: "≤ 2.5 s",
          poor: "> 4 s",
          text: "How long the main content takes to render.",
        },
        {
          name: "INP",
          full: "Interaction to Next Paint",
          good: "≤ 200 ms",
          poor: "> 500 ms",
          text: "How long the page takes to respond when you tap something.",
        },
        {
          name: "CLS",
          full: "Cumulative Layout Shift",
          good: "≤ 0.1",
          poor: "> 0.25",
          text: "How much the content moves while it loads.",
        },
      ],
      vitalsScale: { good: "Good", improve: "Needs work", poor: "Poor" },
      faqTitle: "Frequently asked questions",
      faqText: "What people usually ask before ordering an audit.",
      faq: [
        {
          question: "How is this different from an SEO agency?",
          answer:
            "I focus on the technical side and, being a developer, I can implement the changes in your code instead of handing your team a list. I do not run campaigns or write content.",
        },
        {
          question: "What is SEO for AI, or GEO?",
          answer:
            "Getting your website ready for AI search engines to understand and cite it, such as Google's AI summaries or ChatGPT. The basis is the same as technical SEO, with two additions: letting their bots in and serving content without relying on JavaScript.",
        },
        {
          question: "Do I need an llms.txt?",
          answer:
            "Google has said it does not use it and that no special files are needed for AI. You can publish one, but it is not what will make you show up. What counts is content that is accessible and brings data of its own.",
        },
        {
          question: "Do you implement the changes?",
          answer:
            "If you want, yes. The audit and the implementation are quoted separately, so you can order just the diagnosis.",
        },
        {
          question: "How much does it cost?",
          answer:
            "It depends on the size of the website and whether implementation is included. After a half-hour call I send you a fixed written proposal.",
        },
        {
          question: "Do you only work with Next.js?",
          answer:
            "No. I review any website. React and Next.js are where I add the most because it is the stack I develop with every day.",
        },
      ],
      closingTitle: "Shall we review your website's SEO?",
      closingText:
        "A half-hour call to look at your case. Afterwards I send you in writing what I would do and what it would cost.",
      closingCta: "Book a call",
      closingSecondary: "See services",
    },
    snowySeo: {
      title: "Case study: Snowy's technical SEO",
      description:
        "The technical SEO that took Snowy to 16.8 million impressions and 257,000 organic clicks in 90 days, measured in Search Console, and how I apply it to other websites, including for AI search.",
      eyebrow: "Case study · Snowy",
      heading: "Snowy's technical SEO: 257,000 clicks in 90 days",
      lead: "16.8 million impressions on Google in three months, without spending a euro on advertising. This is the technical work behind it, and the same work I apply when I review another website.",
      detail:
        "Snowy is a weather platform built with Next.js. I lead its development, and the technical SEO comes with it. Figures are from Search Console, 26 June to 24 September 2026.",
      facts: [
        { label: "Impressions", value: "16.8 M" },
        { label: "Clicks", value: "257,346" },
        { label: "Average position", value: "8.1" },
        { label: "URLs in the sitemap", value: "7,538" },
      ],
      ctaPrimary: "Review my website's SEO",
      ctaSecondary: "See the Snowy case",
      workTitle: "What was done",
      workText:
        "The technical work, from what weighs most on the result to what weighs least.",
      work: [
        {
          title: "One page per specific search",
          text: "Every beach has its own page with the day's flag, every eclipse viewing spot has its own, and every earthquake its own record. That is more than 200 beaches and around 300 spots for the 2026 eclipse, with over 500 pages already set up for 2027. Someone searching for today's flag at Gandia beach lands on a page that answers exactly that.",
        },
        {
          title: "Caching at the pace of each piece of data",
          text: "Each page type is regenerated according to how long its content takes to go stale: the sitemap once a day, the eclipse spots once a week, pages about a past event once a month. Google finds fresh content and the server does not rebuild everything on every visit.",
        },
        {
          title: "Sitemaps and structured data",
          text: "A sitemap of 7,538 addresses, a news sitemap with consistent modification dates, and structured data on the pages, including the FAQs in articles.",
        },
        {
          title: "Fewer pages competing with each other",
          text: "Several earthquake pages were fighting for the same searches. One was declared the hub, the others were consolidated, and retired addresses redirect with a 301 so nothing gained is lost.",
        },
        {
          title: "Readable by AI search",
          text: "The ChatGPT and Perplexity bots do not run JavaScript. Snowy serves every page already rendered on the server, so ChatGPT's search bot gets the day's flag for each beach in the first HTML. The robots.txt lets them in and the structured data tells them what each page is.",
        },
        {
          title: "Deciding with Search Console",
          text: "Traffic is measured by section every few weeks, and that decides where to invest and what to leave alone. The repository has 138 changes tagged as SEO.",
        },
      ],
      resultTitle: "Where the traffic came from",
      resultText: "Clicks over the 90 days, grouped by section.",
      shares: [
        {
          label: "Beaches",
          value: "35.8%",
          detail: "92,288 clicks, almost all looking for the day's flag",
        },
        {
          label: "Eclipse",
          value: "32.6%",
          detail: "83,988 clicks, 27,351 on 12 August alone",
        },
        {
          label: "Earthquakes",
          value: "15.7%",
          detail: "40,461 clicks, the section that holds up best out of season",
        },
        {
          label: "WikiMeteo",
          value: "7.2%",
          detail: "18,468 clicks on the weather glossary",
        },
      ],
      resultNote:
        "The best-performing query is today's flag at Guardamar del Segura beach: position 1.8, and 41% of the people who see it click through.",
      lessonsTitle: "What I apply when reviewing your website",
      lessonsText: "What these numbers teach before a single page is touched.",
      lessons: [
        {
          title: "Go for the searches that can be won",
          text: "For “weather in…” Google puts its own panel at the top and those Snowy pages convert at 0.1%. For today's flag at Guardamar beach it has none, and 41% of the people who see it click through. Before creating pages I check which searches really have room.",
        },
        {
          title: "Get there before the peak",
          text: "The eclipse brought 27,351 clicks in a single day because the page for each city had been indexed for weeks when the date came. Whatever your business knows is coming gets prepared in advance.",
        },
      ],
      closingTitle: "Your website does not show up on Google or in AI answers?",
      closingText:
        "We look at it on a half-hour call, and afterwards I send you in writing what I would change and what it would cost.",
      closingCta: "Book a call",
      closingSecondary: "See services",
      source:
        "Source: Google Search Console, snowy.es property, 26-06-2026 to 24-09-2026. Clicks by section, grouped by URL.",
      chart: {
        title: "Daily clicks from Google",
        ariaLabel:
          "Daily clicks from Google on Snowy between 26 June and 24 September 2026, peaking at 27,351 on 12 August, the day of the eclipse.",
        peakLabel: "27,351 clicks on 12 August",
        startLabel: "26 Jun",
        endLabel: "24 Sep",
        caption: "Source: Google Search Console, 91 days.",
      },
      phoneAlt:
        "Snowy's page for Playa Centro de Guardamar, with a green flag and 0.5 metre waves",
    },
    snowy: {
      title: "Snowy",
      description:
        "How Snowy is built, a weather platform in production: architecture, real-time data, radar, SEO and AI, told from the inside.",
      eyebrow: "In production",
      heading: "Snowy: a weather platform with maps, real-time data and AI.",
      facts: [
        { label: "Role", value: "Design, development and infrastructure" },
        { label: "Period", value: "Since 2025, ongoing" },
        { label: "Scope", value: "Whole product, from database to SEO" },
        { label: "Reach", value: "16.8M impressions in 90 days" },
      ],
      stack: {
        eyebrow: "Stack",
        title: "What runs underneath.",
        text: "The pieces Snowy runs on, from server rendering to deployments.",
        groups: [
          {
            label: "Front",
            items: ["Next.js", "React", "TypeScript", "Tailwind", "MapLibre"],
          },
          { label: "Backend", items: ["NestJS", "Prisma", "MySQL", "Redis"] },
          {
            label: "Infrastructure",
            items: ["Docker", "Coolify", "Cloudflare", "Own VPS"],
          },
          {
            label: "AI and data",
            items: ["AI SDK", "RAG", "Batch jobs", "GRIB2"],
          },
        ],
      },
      lead: "Snowy is a weather platform for forecasts, maps, stations, alerts, reservoirs, air quality, earthquakes and smart tools, in a fast experience aimed at real decisions.",
      detail:
        "It combines sixteen weather models into a single forecast that states how much confidence it deserves, generates its own radar from the source data and has an assistant that answers with the network's data. Over the last three months it has recorded 16.8 million impressions on Google, 257,000 clicks and more than 1,400 registered users.",
      ctaPrimary: "Open Snowy",
      ctaSecondary: "See CV",
      imageAlts: {
        home: "Snowy main interface with AI assistant, search and weather planner",
        stations: "Map of weather stations in Snowy",
        radar: "Snowy weather map with radar, alerts and stations",
      },
      details: {
        eyebrow: "Details",
        title: "Three places where the work shows.",
        text: "A full screenshot proves the site exists. These crops show how it is put together.",
        items: [
          {
            title: "Every figure says how much to trust it",
            text: "The card does not just give a temperature: it says how much confidence that forecast deserves. When sixteen models disagree, hiding it is lying by omission.",
            image: "/images/detalle/ficha.webp",
            alt: "Station card with temperature, humidity, wind, UV index and reliability",
          },
          {
            title: "Seventy years of series, in one sentence",
            text: '"Madrid is 1.4 °C warmer today than in 1950-1979." Behind it sits our own processing of the historical series; in front, a sentence you do not need a meteorology degree to read.',
            image: "/images/detalle/clima.webp",
            alt: "Temperature trend by decade with the warming map of Spain",
          },
          {
            title: "Official data, refreshed on its own",
            text: "374 reservoirs from MITECO, with volume, weekly variation and last year's comparison, refreshed automatically.",
            image: "/images/detalle/embalses.webp",
            alt: "National water reserve at 64% with volume, variation and year-on-year comparison",
          },
        ],
      },
      product: {
        eyebrow: "Product",
        title: "What Snowy is",
        text: "A weather platform for Spain: multi-model forecasting over live data, with interactive maps and an assistant that answers in plain language.",
      },
      convergence: {
        eyebrow: "The underlying problem",
        title: "Sixteen models that disagree.",
        text: "Each source gives a different forecast for the same point, and the further ahead you look, the further apart they drift. The product work is not showing them all: it is giving one answer and saying how much it can be trusted.",
        ticks: [
          { at: 0.02, label: "Now" },
          { at: 0.42, label: "+3 days" },
          { at: 0.98, label: "+10 days" },
        ],
        spreadLabel: "Spread between models",
        answerLabel: "The answer",
        note: "A schematic of the behaviour, not a measurement: what it shows is that uncertainty grows with lead time.",
      },
      features: [
        {
          title: "Multi-model forecasting",
          text: "Comparison of weather models, forecasts by location and tools to make sense of uncertainty.",
        },
        {
          title: "Weather map",
          text: "Radar, stations, alerts, earthquakes, air quality and environmental layers in one interactive interface.",
        },
        {
          title: "Live stations",
          text: "A station network with current and historical data, plus an onboarding flow for users.",
        },
        {
          title: "SEO content",
          text: "Indexable pages for locations, phenomena, pollen, air quality, reservoirs and WikiMeteo.",
        },
        {
          title: "AI assistant",
          text: "Conversation, voice, specialised tools and answers grounded in weather data.",
        },
        {
          title: "Derived products",
          text: "Energy, embeddable widgets, an eclipse product and new verticals on the same technical base.",
        },
      ],
      modules: {
        eyebrow: "Modules",
        title: "Different surfaces, one architecture.",
        text: "Each module answers a specific question with its own data sources, and all of them share the same technical foundation.",
        items: [
          {
            title: "AI assistant",
            text: "Answers in plain language with station and model data, such as what to wear or whether alerts are active.",
            image: "/images/snowy-ai-assistant.webp",
            alt: "Snowy AI assistant giving a weather-based clothing recommendation",
          },
          {
            title: "Reservoirs",
            text: "Reservoir levels from official data, their weekly evolution and comparisons by river basin.",
            image: "/images/snowy-reservoirs.webp",
            alt: "Snowy reservoirs module with water reserves and a map by region",
          },
          {
            title: "Historical climate",
            text: "Historical series showing how temperature has changed in each area.",
            image: "/images/snowy-climate.webp",
            alt: "Snowy historical climate module with a warming map of Spain",
          },
          {
            title: "Earthquakes",
            text: "Seismic activity in real time from official sources, with the detail of each event and reports from users.",
            image: "/images/snowy-earthquakes.webp",
            alt: "Snowy earthquake monitor showing a recent seismic event",
          },
          {
            title: "Stations",
            text: "The page for each weather station, with its live data and its history.",
            image: "/images/snowy-station-detail.webp",
            alt: "Weather station detail in Snowy with live metrics",
          },
          {
            title: "Ski resorts",
            text: "Forecast, snow report and piste map for 30 ski resorts in Spain and Andorra.",
            image: "/images/snowy-ski.webp",
            alt: "Baqueira Beret page on Snowy with the mountain profile and the snow line",
          },
        ],
      },
      traction: {
        title: "Organic growth, with no ad spend.",
        text: "SEO, performance and product usefulness already show up in usage: organic search, clicks and registered users on a platform of my own.",
      },
      build: {
        eyebrow: "Engineering",
        title: "How it is built.",
        text: "Snowy runs on a decoupled architecture: Next.js for SSR, SEO and UI; NestJS for business logic and data; Redis for cache; MySQL for persistence; and separate services where radar, CMS or jobs carry different loads.",
      },
      architecture: {
        layers: [
          {
            tag: "Front",
            name: "Next.js",
            role: "Server rendering, SEO and interface",
          },
          {
            tag: "Engine",
            name: "NestJS",
            role: "Business logic, integrations and data model",
          },
        ],
        stores: [
          {
            tag: "Cache",
            name: "Redis",
            role: "What gets asked a lot and changes little",
          },
          {
            tag: "Persistence",
            name: "MySQL",
            role: "The state that has to survive",
          },
        ],
        servicesLabel: "Separate",
        services: ["Radar", "CMS", "Jobs"],
        servicesNote:
          "They split off when their load looks nothing like the rest: the radar renders tiles, the jobs run on a schedule.",
      },
      capabilities: [
        {
          title: "Architecture",
          text: "A multi-repo ecosystem with a Next.js front, NestJS engine, Vite CMS, Node.js radar, batch jobs and cross-cutting documentation.",
        },
        {
          title: "Technical SEO",
          text: "Indexable pages for cities, models, tools, stations, reservoirs, earthquakes, air quality, pollen, alerts, WikiMeteo and special content.",
        },
        {
          title: "Data",
          text: "Professional models, stations, reservoirs, earthquakes, air quality, pollen and official sources unified under one internal model.",
        },
        {
          title: "Infrastructure",
          text: "Production on VPS, Docker, Caddy, Cloudflare, GHCR, GitHub Actions, healthchecks, rollback and operational runbooks.",
        },
        {
          title: "Radar",
          text: "Interactive map with radar, stations, earthquakes, air quality, risk zones and environmental layers in real time.",
        },
        {
          title: "AI",
          text: "A weather assistant with natural language, voice mode and specialised tools that turn weather data into practical decisions.",
        },
        {
          title: "B2B",
          text: "Snowy Energy, embeddable widgets and sector verticals as a natural extension of the core weather product.",
        },
      ],
      seo: {
        eyebrow: "SEO and data",
        title: "SEO, data and performance as architecture decisions.",
        text: "Users and Google both need fast answers. That's why the project runs on SSR, per-domain cache, an internal data model, IndexNow, revalidation and provider abstraction.",
        sourcesTitle: "Integrated sources",
        sources: [
          {
            sigla: "AEMET",
            nombre: "Spain's national weather agency",
            aporta: "Stations and warnings",
            campo: "tiempo",
          },
          {
            sigla: "Euskalmet",
            nombre: "Basque weather agency",
            aporta: "Basque Country stations",
            campo: "tiempo",
          },
          {
            sigla: "MeteoGalicia",
            nombre: "Galician regional weather service",
            aporta: "Galicia stations",
            campo: "tiempo",
          },
          {
            sigla: "MITECO",
            nombre: "Spanish ministry for ecological transition",
            aporta: "Reservoirs and water reserve",
            campo: "agua",
          },
          {
            sigla: "IGN",
            nombre: "Spain's national geographic institute",
            aporta: "Earthquakes in Spain",
            campo: "sismo",
          },
          {
            sigla: "USGS",
            nombre: "United States Geological Survey",
            aporta: "Earthquakes worldwide",
            campo: "sismo",
          },
          {
            sigla: "CAMS",
            nombre: "Copernicus Atmosphere Monitoring",
            aporta: "Air quality and pollen",
            campo: "aire",
          },
        ],
        sourcesText:
          "The goal is to unify heterogeneous providers into one consistent model, precompute the expensive parts and answer the end user very fast.",
      },
      b2b: {
        eyebrow: "B2B inside Snowy",
        title: "Energy, widgets and sector verticals.",
        text: "The same data, maps, forecasts and AI make derived products possible: energy forecasting, embeddable widgets and tools for specific cases.",
        lines: [
          {
            title: "Snowy Energy",
            url: "https://snowy.es/productos/energia",
            text: "Renewable forecasting, simulator and dashboard for solar energy as a B2B vertical inside the Snowy ecosystem.",
          },
          {
            title: "B2B widgets",
            url: "https://snowy.es/productos/widgets",
            text: "An embeddable SDK to bring weather data, maps, tools or the AI assistant into third-party sites.",
          },
          {
            title: "Eclipses",
            url: "https://snowy.es/eclipse-2027",
            text: "A content and planning product: it launched with the total eclipse of August 2026 and already runs for the 2027 one.",
          },
        ],
      },
      press: {
        eyebrow: "Press",
        title: "Snowy has had public reach too.",
        text: "The project was born out of LaRiojaMeteo and has appeared in press, radio and public portals. That's a signal of a real product, a community and continuity.",
        openDataLabel: "datos.gob.es",
        openDataTag: "Public listing",
        openDataTitle: "Snowy is listed on Spain's national open data portal.",
        proof: [
          {
            source: "RNE",
            title: "A radio interview to explain it",
            text: "Radio appearance explaining Snowy and how the weather project has evolved.",
            image: "/images/snowy-rne.png",
            alt: "Jorge Carrera and Daniel Benito in an RNE interview about Snowy",
          },
          {
            source: "larioja.com",
            title: "Coverage in the regional press",
            text: "Regional press coverage of the Snowy launch out of LaRiojaMeteo.",
            image: "/images/snowy-larioja-foto.webp",
            alt: "larioja.com article about the launch of Snowy",
            url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
          },
        ],
      },
      metrics: [
        {
          value: "16",
          label: "models",
          detail: "ECMWF, GFS, ICON, ARPEGE, GEM and more",
        },
        {
          value: "1,000+",
          label: "stations",
          detail: "official network and Snowy community",
        },
        {
          value: "370+",
          label: "reservoirs",
          detail: "status and evolution across Spain",
        },
        { value: "1,000+", label: "terms", detail: "WikiMeteo in Spanish" },
        {
          value: "20+",
          label: "AI tools",
          detail: "assistant, voice and daily decisions",
        },
        {
          value: "10+",
          label: "map layers",
          detail: "radar, stations, risks and air",
        },
      ],
      tractionMetrics: [
        {
          value: "16.8M",
          label: "impressions",
          detail: "last 3 months in organic search",
        },
        {
          value: "242k",
          label: "clicks",
          detail: "traffic from Google over 3 months",
        },
        {
          value: "1,400+",
          label: "registered users",
          detail: "an owned base for community and new features",
        },
      ],
      mediaMentions: [
        {
          outlet: "El Confidencial",
          cover: "/images/prensa/el-confidencial.webp",
          date: "18 January 2026",
          title:
            "La Rioja Meteo launches Snowy, an AI-powered site for everyday weather decisions.",
          url: "https://www.elconfidencial.com/tecnologia/2026-01-18/web-ia-la-rioja-prevision-tiempo-1tna-1qrt_4282037/",
        },
        {
          outlet: "larioja.com",
          cover: "/images/prensa/larioja-com.webp",
          date: "22 January 2026",
          title:
            "Snowy is born: a La Rioja assistant for umbrellas, laundry and daily recommendations.",
          url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
        },
        {
          outlet: "eldiario.es",
          cover: "/images/prensa/eldiario-es.webp",
          date: "12 January 2026",
          title:
            "La Rioja Meteo creates Snowy, a weather platform with practical recommendations.",
          url: "https://www.eldiario.es/la-rioja/rioja-meteo-crea-snowy-nueva-plataforma-meteorologia-dice-poner-lavadora-ropa-ponerte_1_12898410.html",
        },
        {
          outlet: "nuevecuatrouno",
          cover: "/images/prensa/nuevecuatrouno.webp",
          date: "12 January 2026",
          title: "Snowy launches as La Rioja Meteo's new weather platform.",
          url: "https://nuevecuatrouno.com/2026/01/12/nace-snowy-la-plataforma-meteorologica-de-la-rioja-meteo/",
        },
        {
          outlet: "Diario de León",
          cover: "/images/prensa/diario-de-leon.webp",
          date: "14 April 2026",
          title: "Snowy as a tool for planning eclipse viewing in León.",
          url: "https://www.diariodeleon.es/sociedad/260414/2081770/mejor-alia-leon-eclipse.html",
        },
        {
          outlet: "Actualidad Rioja Baja",
          cover: "/images/prensa/actualidad-rioja-baja.webp",
          date: "12 January 2026",
          title:
            "La Rioja Meteo launches Snowy as an advanced, accessible weather platform.",
          url: "https://actualidadriojabaja.com/la-rioja-meteo-lanza-snowy-una-nueva-plataforma-meteorologica-avanzada-y-accesible/",
        },
        {
          outlet: "nuevecuatrouno",
          cover: "/images/prensa/nuevecuatrouno-2.webp",
          date: "11 April 2026",
          title:
            "Snowy and La Rioja Meteo in the planning for August's eclipse.",
          url: "https://nuevecuatrouno.com/2026/04/11/cielo-rioja-apunta-despejado-gran-eclipse-de-agosto/",
        },
      ],
    },
    lariojameteo: {
      title: "LaRiojaMeteo",
      description:
        "LaRiojaMeteo project case: a weather blog with more than 500,000 monthly visits where Jorge Carrera Diez works as webmaster.",
      eyebrow: "Collaboration",
      heading:
        "LaRiojaMeteo: regional weather, community, SEO and the editorial base for Snowy.",
      facts: [
        { label: "Role", value: "Partner and technical lead" },
        { label: "Period", value: "Since 2024" },
        { label: "Scope", value: "Site, SEO, performance and live data" },
        { label: "Origin", value: "Running since 2012" },
      ],
      stack: {
        eyebrow: "Stack",
        title: "A content portal that has to be fast.",
        text: "On WordPress, with a plugin of my own for the Snowy data and the rest of the work spent making what already exists load fast, read well on a phone and get found on Google.",
        groups: [
          { label: "Platform", items: ["WordPress", "PHP", "MySQL"] },
          {
            label: "Visibility",
            items: ["Technical SEO", "Structured data", "Core Web Vitals"],
          },
          { label: "Data", items: ["Snowy stations", "Webcams", "Reservoirs"] },
          { label: "Measurement", items: ["Search Console", "Analytics"] },
        ],
      },
      lead: "I work as a partner and the technical profile at LaRiojaMeteo, the reference weather portal for La Rioja and Logroño, with forecasts, analysis, live data, news, guides and community.",
      cta: "Visit LaRiojaMeteo",
      imageAlt: "LaRiojaMeteo home with cover, categories and latest article",
      timeline: {
        eyebrow: "Track record",
        title: "From a regional weather blog to an ecosystem with Snowy.",
        text: "LaRiojaMeteo brings history, community, local knowledge and editorial distribution. Snowy brings product, data, AI and infrastructure.",
      },
      product: {
        eyebrow: "The work",
        title: "Modernising without breaking what already worked.",
        text: "The portal had been publishing for twelve years and had an audience, an archive and search rankings. The job was to bring it up to date inside and out, and to wire it to Snowy's data.",
        items: [
          {
            title: "Redesign and modernisation",
            text: "The whole portal brought up to date —look, navigation and structure— without losing the archive or the search positions it already held.",
          },
          {
            title: "A custom plugin",
            text: "A WordPress plugin of my own that pulls Snowy's data into the portal —stations, reservoirs, webcams— instead of pasting it by hand into every post.",
          },
          {
            title: "Performance and mobile",
            text: "Core Web Vitals, images, caching and comfortable reading on a phone, which is where almost all the traffic comes from.",
          },
        ],
        shots: [
          {
            image: "/images/lrm/portada.webp",
            title: "Home",
            alt: "LaRiojaMeteo home on a phone, with the active warning and the day's data",
          },
          {
            image: "/images/lrm/predicciones.webp",
            title: "Forecasts",
            alt: "LaRiojaMeteo forecasts section on a phone",
          },
          {
            image: "/images/lrm/embalses.webp",
            title: "Reservoirs, with Snowy data",
            alt: "LaRiojaMeteo reservoirs category on a phone, with data pulled from Snowy",
          },
        ],
      },
      history: {
        eyebrow: "The track record",
        title: "Twelve years publishing before a line of code changed.",
        text: "This is not a project you launch: it already had an audience, an archive and search rankings when I arrived. That changes the engagement entirely, because every change lands on something that already works.",
        milestones: [
          {
            at: 0,
            year: "2012",
            title: "The project starts",
            text: "A weather portal for La Rioja, publishing continuously.",
          },
          {
            at: 0.55,
            year: "2024",
            title: "I join",
            text: "With 130+ archive pages and half a million visits already banked.",
            own: true,
          },
          {
            at: 1,
            year: "Today",
            title: "Performance, SEO and UX",
            text: "The work is sustaining and improving what already has an audience.",
          },
        ],
      },
      metrics: [
        {
          value: "2012",
          label: "origin",
          detail: "start of the original weather project",
        },
        {
          value: "2020",
          label: "La Rioja Meteo",
          detail: "evolution into the current brand",
        },
        {
          value: "2024",
          label: "Jorge joins",
          detail: "technical work and product vision",
        },
        {
          value: "2025",
          label: "Snowy",
          detail: "launch of the advanced weather product",
        },
      ],
      responsibility: {
        eyebrow: "Responsibility",
        title:
          "A project where SEO and the mobile experience have direct impact.",
        text: "LaRiojaMeteo combines traffic, content, organic visibility and continuous maintenance.",
        items: [
          "Architecture and technical maintenance of the site.",
          "SEO work to improve rankings and organic traffic.",
          "Multimedia content management, performance and mobile adaptation.",
          "Traffic analysis and continuous improvement of the user experience.",
        ],
      },
      content: {
        eyebrow: "Content",
        title: "A portal with editorial depth and real-time data.",
        text: "The portal works as a local weather archive: analysis, episodes, phenomena, guides, webcams, stations and community.",
        items: [
          "Forecasts for La Rioja and Logroño",
          "Weather analysis, snowfall, rainfall and reservoirs",
          "Real time, Snowy stations and webcams",
          "News, astronomy, guides and the weather-enthusiast community",
        ],
      },
    },
    blog: {
      title: "Blog",
      description:
        "Articles by Jorge Carrera Diez on software development, AI agents and the projects he runs in production.",
      eyebrow: "Articles",
      heading: "Blog",
      lead: "How I work with AI agents, architecture decisions and what comes out of the projects I run in production.",
      latestLabel: "Latest article",
      moreLabel: "All articles",
      readLabel: "Read the article",
      minutesLabel: "min read",
      backLabel: "All articles",
      tocLabel: "In this article",
      shareLabel: "Share on X",
      commentLabel: "Comment on X",
      copyLinkLabel: "Copy link",
      copyCodeLabel: "Copy",
      codeCopiedLabel: "Copied",
      copiedLabel: "Link copied",
      closeLabel: "Close",
      authorRole: "Software engineer",
      endTitle: "Was it useful?",
      endText:
        "On X I share what I am building. If you work with agents or are building something similar, I would love to hear how you do it.",
      endCta: "Follow on X",
      feedLabel: "RSS",
    },
    eqx: {
      title: "EQx and VCr",
      description:
        "Jorge Carrera Diez builds the websites of the Elite Quality Index and the Value Creation Rating, and the platform where companies take their assessment, for the Foundation for Value Creation in St. Gallen, Switzerland.",
      eyebrow: "Client · Switzerland",
      heading:
        "Websites and assessment platform for the Foundation for Value Creation",
      lead: "The foundation, based in St. Gallen, publishes two indices: the Elite Quality Index (EQx), which scores 151 countries, and the Value Creation Rating (VCr), which scores companies. Since July 2026 I have been the project's developer, in charge of its three parts: the website of each index and the platform where companies take their assessment.",
      detail:
        "I work remotely and in English with the foundation's business and design teams. I gather what they ask for, write it down as requirements and take it to production.",
      ctaPrimary: "Visit elitequality.org",
      ctaSecondary: "Let's talk",
      facts: [
        { label: "Client", value: "Foundation for Value Creation" },
        { label: "Role", value: "Development and requirements" },
        { label: "Since", value: "July 2026" },
        { label: "Scope", value: "Two websites and an assessment platform" },
      ],
      imageAlts: {
        home: "elitequality.org home page with the Elite Quality Index world map",
      },
      products: {
        title: "What I built",
        items: [
          {
            name: "elitequality.org",
            tech: "Astro · React · D3",
            text: "The public website of the Elite Quality Index, with the rankings table of 151 countries, the interactive world map and the country comparison tool.",
            href: "https://elitequality.org/",
          },
          {
            name: "VCr website",
            tech: "Astro · React",
            text: "The website of the Value Creation Rating, the foundation's company rating. It includes the directory of rated companies, a page for each one and a comparison tool with the official VCr2026 data.",
          },
          {
            name: "self-VCr",
            tech: "Next.js · Prisma · PostgreSQL",
            text: "The platform where companies complete their self-assessment: they answer the questionnaire, obtain their rating and download the official PDF report.",
          },
        ],
      },
      partners: {
        title: "With the University of St. Gallen",
        text: "The Foundation for Value Creation is a non-profit foundation based in St. Gallen, chaired by Dr. Tomas Casas. The Elite Quality Index, edited by Dr. Tomas Casas and Professor Guido Cozzi, is produced under the academic leadership of three institutes of the University of St. Gallen and with an international network of academic partners, among them the Faculty of Economics of the University of Porto. It is grounded in the elite theory of economic development and assesses, through 148 indicators, whether each country's elites create value or extract it. The 2026 edition is the seventh.",
      },
      stack: {
        eyebrow: "Stack",
        title: "Stack",
        groups: [
          {
            label: "EQx and VCr websites",
            items: ["Astro", "React", "Tailwind", "TypeScript", "D3"],
          },
          {
            label: "self-VCr platform",
            items: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
          },
          {
            label: "Delivery",
            items: ["GitHub Actions", "Vitest", "Playwright"],
          },
        ],
      },
    },
  },
  radarScrub: {
    eyebrow: "Live data",
    title: "Precipitation, live.",
    caption:
      "Snowy's precipitation radar, half an hour per step, over the 1,862 stations reporting live.",
    imageAlt:
      "Sequence of Snowy's rain radar over Spain, with live weather stations",
  },
  stickyShowcase: {
    eyebrow: "Snowy",
    title: "From scattered data to a useful tool.",
    imageAlt: "Snowy home page with search, assistant and live data",
    steps: [
      {
        title: "Bringing very different sources together",
        text: "Public data from official agencies, weather stations run by individuals and values Snowy computes from the forecast models. The work is ordering them and presenting them so they help people make everyday decisions.",
        image: "/images/snowy-home.webp",
        imageAlt: "Snowy home with search, assistant and map entry points",
      },
      {
        title: "Snowy Developer, the data through an API",
        text: "With that data, Snowy has become one of the reference weather accounts in Spain. Snowy Developer is the portal that offers it to anyone who wants to build it into their own services, with public documentation and a live demo that needs no sign-up.",
        image: "/images/snowy-developers.webp",
        imageAlt: "Snowy Developer portal: Snowy's weather API",
      },
    ],
  },
  bigStat: {
    eyebrow: "Snowy, last 90 days",
    value: 16830175,
    label: "organic search impressions, with no ad spend.",
    support: [
      { value: "257,000", label: "visits from search" },
      { value: "8.1", label: "average position on Google" },
      { value: "1,400+", label: "registered users" },
    ],
  },
  enVivo: {
    eyebrow: "Right now",
    reportando: "stations reporting right now, across",
    redesLabel: "different networks",
    minimaLabel: "lowest",
    maximaLabel: "highest",
    leidoLabel: "read at",
    texto:
      "These numbers are not written into the page: the Snowy API just served them, the same one explained below.",
    enlace: "Open the map",
  },
  caseCta: {
    title: "Does any of this fit what you need?",
    text: "I work remotely, on European hours. If you have something in mind, tell me and I will say honestly whether I am the right person.",
    cta: "Email me",
    ctaSecondary: "See all projects",
  },
};
