import { site } from "@/content/site";
import type { Copy } from "@/types/content";

export const en: Copy = {
  meta: {
    siteTitle:
      "Software engineer focused on product, architecture, SEO and systems design",
    description:
      "Computer engineer from the University of La Rioja. I lead architecture and new capabilities on enterprise projects, work with EQx (Elite Quality Index, University of St. Gallen) and build Snowy, my own weather platform on Next.js, NestJS, Redis, MySQL and Docker.",
    location: "Logroño, La Rioja, Spain",
    jobTitle: "Software engineer",
    universityLabel: "University of La Rioja",
    collegeLabel: "Official Association of Computer Engineers of La Rioja",
    ogAlt: `${site.name} - Software engineer`,
    ogEyebrow: "Software engineer",
    ogTagline: "Product, architecture, data and generative AI. From first commit to deploy.",
    ogStats: [
      ["now", "VidaCaixa · EQx"],
      ["own product", "Snowy"],
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
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    sectionsLabel: "Sections",
    pagesLabel: "Pages",
    localeLabel: "Language",
    items: [
      { key: "home", label: "Home" },
      { key: "snowy", label: "Snowy" },
      { key: "projects", label: "Projects" },
      { key: "experience", label: "Experience" },
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
      "Software engineer. I am Tech Lead on VidaCaixa projects, I took over the technical lead at EQx in Switzerland, and I build Snowy, which is mine top to bottom.",
    positioning: "Software engineer · Product · Architecture",
    positioningLong:
      "Software engineer. I design systems and then stay to maintain them.",
    tagline: ["I design it.", "I build it.", "I keep it running."],
    taglineSub:
      "Right now: financial product in Madrid, a Swiss academic index, and a weather platform that is mine.",
    availability: "Available for one more project",
    availabilityNote:
      "Remote, European hours, in Spanish or English. On scoped engagements of a few hours a week.",
    capabilities: [
      {
        title: "Product architecture",
        text: "I decide how it is structured, what gets cut and why. Then I defend it in review.",
      },
      {
        title: "Generative AI and agents",
        text: "Agents that do actual work inside the product. Anyone can build the pretty demo.",
      },
      {
        title: "Data and infrastructure",
        text: "Backend, caching, continuous deployment and my own server, with cost under control.",
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
      { text: "I am a computer engineer from the " },
      { text: "University of La Rioja", href: site.universityUrl, external: true },
      { text: ", chartered by the " },
      {
        text: "Official Association of Computer Engineers of La Rioja",
        href: site.collegeUrl,
        external: true,
      },
      {
        text: ". I work in enterprise environments leading technical decisions, collaborate as a freelance engineer with the Swiss foundation that publishes the ",
      },
      { text: "Elite Quality Index", href: site.eqxIndex, external: true },
      {
        text: " under the University of St. Gallen, and build Snowy to work on product, frontend, backend, data, infrastructure, SEO and agents over a real system.",
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
    ctaPrimary: "See Snowy",
    ctaSecondary: "CV",
    ctaContact: "Let's talk",
  },
  currentRole: {
    homeTitle: "Three fronts, right now.",
    homeText:
      "Technical judgement and coordination inside an enterprise environment, full technical ownership of an international product, and one of my own in production.",
    fronts: [
      {
        label: "Tech Lead · VidaCaixa",
        title: "Technical leadership in a critical environment",
        text: "Frontend architecture, standards, code reviews and alignment with backend, QA and business in the financial and insurance sector.",
      },
      {
        label: "Freelance · EQx, Switzerland",
        title: "Technical handover of a global index",
        text: "The Elite Quality Index measures across 151 countries whether elites create value or extract it, under academic direction from the University of St. Gallen.",
      },
      {
        label: "Own product · Snowy",
        title: "Where I find out if I was right",
        text: "I build all of it, from server rendering to the radar and the deployments. Product, data, infrastructure, SEO and AI on a real system.",
      },
    ],
    eyebrow: "Current role",
    title: "Tech Lead at VidaCaixa and engineering partner to EQx in Switzerland.",
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
    title: "AI that does the work, not that looks like it.",
    lead: "I work on agents, RAG, tools, MCP and LLMs from one simple idea: AI should solve concrete tasks inside the product and stay as maintainable as any other part of the system.",
    detail:
      "What interests me most is designing the flow: what context the model needs, which tools it can use, how responses are controlled and what experience the user actually gets.",
    rows: [
      ["VidaCaixa", "generative capabilities integrated into an enterprise environment"],
      ["Snowy", "assistant and tooling over real weather data"],
      ["principles", "context, limits, traceability, cost and end experience"],
    ],
    flow: [
      { title: "Interface", caption: "UX, streaming and feedback", metric: "input" },
      { title: "Agent", caption: "plan, short memory and tool choice", metric: "reason" },
      { title: "Tools", caption: "MCP, APIs and contracts", metric: "tools" },
      { title: "Data", caption: "RAG, sources and permissions", metric: "context" },
      { title: "Control", caption: "logs, limits and evaluation", metric: "guard" },
    ],
    consoleLines: [
      ["intent", "weather query with user context"],
      ["tool", "getForecast(), getAlerts(), searchDocs()"],
      ["context", "internal sources + real-time data"],
      ["policy", "limits, traceability and verifiable answers"],
    ],
    principlesTitle: "How I approach it",
    principles: [
      {
        title: "Context before prompt",
        text: "The value is in the model receiving the right information: your own data, permissions, retrieval, tools and the limits of the use case.",
      },
      {
        title: "Agents with clear responsibility",
        text: "I like designing flows where the agent knows what it can do, which tool to use and how to leave a trace you can debug.",
      },
      {
        title: "Product, cost and operations",
        text: "An AI feature also needs reasonable latency, fallback, observability, evaluations and a UX that doesn't force the user to understand the system.",
      },
    ],
  },
  snowyShowcase: {
    title: "Snowy is my product, and I keep it running on my own.",
    lead: "The project already works as a product: over the last three months it has generated 14.7 million organic impressions and 242,000 clicks, with more than 1,400 registered users to keep building on.",
    detail:
      "Building it combines frontend, backend, cache, data, SEO, infrastructure and AI decisions under real constraints of cost, performance and maintenance.",
    ctaPrimary: "See the engineering case",
    ctaSecondary: "Open Snowy",
    imageAlt: "Snowy home with weather search, AI assistant and planner",
  },
  experiencePreview: {
    eyebrow: "Experience",
    title: "Technical leadership on enterprise projects.",
    text: "My current role gives context and authority: architecture, standards, reviews, coordination, agents and mentoring on systems with real impact.",
    cta: "See full career",
  },
  projectsPreview: {
    eyebrow: "Projects",
    title: "Three projects you can actually open and poke at.",
    text: "One is entirely mine. One is a client in Switzerland. The third has been publishing for twelve years. All three are live right now.",
  },
  contactCta: {
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
    note: "Enterprise consultancy and international product at once: banking and insurance on one side, a Swiss foundation and my own product on the other.",
  },
  experience: [
    {
      company: "EQx",
      role: "Freelance software engineer",
      context: "University of St. Gallen, Switzerland",
      headline: "Software engineer - EQx (Switzerland)",
      client: "Foundation for Value Creation",
      image: "/images/eqx-home.webp",
      imageAlt: "Home page of the Elite Quality Index, the index the foundation publishes",
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
        src: "/logos/eqx.svg",
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
        src: "/logos/vidacaixa.png",
        alt: "VidaCaixa",
        fallback: "VidaCaixa",
        containerClassName: "p-2",
        className: "scale-[1.45]",
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
        src: "/logos/openbank.jpg",
        alt: "Openbank Santander Group",
        fallback: "Openbank",
        containerClassName: "p-2",
        className: "scale-[2.7]",
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
        src: "/logos/minsait.webp",
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
        src: "/logos/hiberus.png",
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
        src: "/logos/jig.png",
        alt: "JIG",
        fallback: "JIG",
      },
    },
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
      name: "Snowy",
      url: site.snowy,
      label: "Engineering case",
      logo: "/images/snowy-logo.webp",
      image: "/images/snowy-home.webp",
      description:
        "Weather platform with real-time data, maps, radar, stations, SEO, its own backend, infrastructure and AI.",
      impact:
        "I build all of it, from server rendering to the radar and the deployments. When something falls over at three in the morning, it calls me.",
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
      name: "EQx",
      url: "https://elitequality.org/",
      label: "Client",
      image: "/images/eqx-home.webp",
      description:
        "Elite Quality Index: the Foundation for Value Creation index ranking 151 countries by the quality of their elites, with a public site and a private assessment platform.",
      impact:
        "I picked up a project already in production and now keep it running: the index site, the rating platform and the documentation that did not exist before.",
      metrics: [
        { value: "151", label: "countries ranked" },
        { value: "148", label: "indicators" },
        { value: "12", label: "pillars across 4 areas" },
        { value: "7th", label: "annual edition" },
      ],
      stack: ["Astro", "React", "Next.js", "PostgreSQL", "D3", "GitHub Actions"],
    },
    {
      slug: "lariojameteo",
      name: "LaRiojaMeteo",
      url: site.lariojameteo,
      label: "Webmaster",
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
      heading: "My own product, an international client and a portal with an audience.",
      text: "Snowy is where I test architecture decisions for real. EQx is how I work with a client. LaRiojaMeteo is audience, content and SEO sustained over years.",
    },
    experience: {
      title: "Experience",
      description:
        "Professional experience of Jorge Carrera Diez as a software engineer, Tech Lead, Lead Software Engineer and Full Stack Developer, and how he applies generative AI and agents inside enterprise workflows.",
      eyebrow: "Experience",
      heading: "Software engineer with a track record in banking, insurance, retail and web product.",
      text: "The full track record, in order. Where I led the technical decisions, what I built at each place, and how I have been putting AI agents into flows that were already in production.",
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
      downloadCta: "Download as PDF",
      printHint: "This opens the print dialog: choose “Save as PDF”.",
    },
    contact: {
      title: "Let's work together",
      description:
        "Jorge Carrera Diez, freelance software engineer. Technical handover of products already in production, React and Next.js development, and frontend architecture advisory.",
      lead: "I step into products that already exist, understand them, and keep building without anything grinding to a halt.",
      detail:
        "It is what I am doing right now for a Swiss foundation: I took over from their previous developer and picked up both of their digital products without interrupting operations.",
      availabilityLabel: "availability",
      availabilityText:
        "Remote, European hours, in Spanish or English. I work on scoped engagements of a few hours a week: it is the format that lets me genuinely commit to what I take on.",
      servicesTitle: "How I can help",
      servicesText:
        "Three ways of working that are already running with real clients, not a list of technologies.",
      services: [
        {
          title: "Taking over a product in flight",
          text: "Whoever built it is leaving and the work has to continue. I pick up the code, the infrastructure and the product judgement, and keep things running meanwhile.",
        },
        {
          title: "Web product development",
          text: "React, Next.js, TypeScript and NestJS, from frontend to backend and infrastructure. Including the boring part: deployment, performance and search visibility.",
        },
        {
          title: "Architecture and team support",
          text: "Architecture decisions, standards and code review for teams already building who would rather not regret it a year from now.",
        },
      ],
      clientsTitle: "Where I have worked",
      clientsText: "Products in production, with real users and consequences when something breaks.",
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
      linksTitle: "Before you write",
      linksText:
        "If you would rather have more context first, here is the relevant part of my profile and the place where my work can be hired.",
      links: [
        { key: "malt", label: "Malt" },
        { key: "linkedin", label: "LinkedIn" },
        { key: "github", label: "GitHub" },
        { key: "cv", label: "Web CV" },
        { key: "snowy", label: "Snowy" },
      ],
    },
    snowy: {
      title: "Snowy",
      description:
        "Snowy, the weather platform built by Jorge Carrera Diez with Next.js, NestJS, Redis, MySQL, Docker, SEO, radar, weather data and AI.",
      eyebrow: "My own product",
      heading: "Snowy: a weather platform with maps, real-time data and AI.",
      facts: [
        { label: "Role", value: "Design, development and infrastructure" },
        { label: "Period", value: "Since 2025, ongoing" },
        { label: "Scope", value: "Whole product, from database to SEO" },
        { label: "Reach", value: "14.7M impressions in 90 days" },
      ],
      stack: {
        eyebrow: "Stack",
        title: "What runs underneath.",
        text: "Everything you see in Snowy is mine to maintain: rendering, backend, data, radar and deployments.",
        groups: [
          { label: "Front", items: ["Next.js", "React", "TypeScript", "Tailwind", "MapLibre"] },
          { label: "Backend", items: ["NestJS", "Prisma", "MySQL", "Redis"] },
          { label: "Infrastructure", items: ["Docker", "Coolify", "Cloudflare", "Own VPS"] },
          { label: "AI and data", items: ["AI SDK", "RAG", "Batch jobs", "GRIB2"] },
        ],
      },
      lead: "Snowy is a weather platform for forecasts, maps, stations, alerts, reservoirs, air quality, earthquakes and smart tools, in a fast experience aimed at real decisions.",
      detail:
        "The difference is bringing product, data, SEO, interactive maps and agents together on an architecture of my own: SSR frontend, backend as the source of truth, per-domain cache and dedicated services for radar, CMS and batch jobs. Over the last 3 months Snowy has passed 14.7 million impressions, 242,000 organic clicks and 1,400 registered users.",
      ctaPrimary: "Open Snowy",
      ctaSecondary: "See CV",
      imageAlts: {
        home: "Snowy main interface with AI assistant, search and weather planner",
        stations: "Map of weather stations in Snowy",
        radar: "Snowy weather map with radar, alerts and stations",
      },
      product: {
        eyebrow: "Product",
        title: "What Snowy is",
        text: "A weather platform for Spain: multi-model forecasting over live data, with interactive maps and an assistant that answers in plain language.",
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
          text: "Energy, embeddable widgets, eclipse 2026 and new verticals on the same technical base.",
        },
      ],
      modules: {
        eyebrow: "Modules",
        title: "Different surfaces, one architecture.",
        text: "Each module has different requirements: external data, cache, visualisation, SEO, real-time state and shared internal models.",
        items: [
          {
            title: "AI assistant",
            text: "Conversational queries with weather tooling: clothing, alerts, forecast, location and actionable answers.",
            image: "/images/snowy-ai-assistant.webp",
            alt: "Snowy AI assistant giving a weather-based clothing recommendation",
          },
          {
            title: "Reservoirs",
            text: "Official data, weekly evolution, maps and comparisons by region, province and river basin.",
            image: "/images/snowy-reservoirs.webp",
            alt: "Snowy reservoirs module with water reserves and a map by region",
          },
          {
            title: "Historical climate",
            text: "Processing of historical series to analyse trends, anomalies and temperature change by area.",
            image: "/images/snowy-climate.webp",
            alt: "Snowy historical climate module with a warming map of Spain",
          },
          {
            title: "Earthquakes",
            text: "Real-time monitor with official sources, magnitude, location, event detail and community reports.",
            image: "/images/snowy-earthquakes.webp",
            alt: "Snowy earthquake monitor showing a recent seismic event",
          },
          {
            title: "Stations",
            text: "Station detail with current metrics, history, favourites, owner and live weather data.",
            image: "/images/snowy-station-detail.webp",
            alt: "Weather station detail in Snowy with live metrics",
          },
        ],
      },
      traction: {
        title: "Real traction, not just architecture.",
        text: "SEO, performance and product usefulness already show up in usage: organic search, clicks and registered users on a platform of my own.",
      },
      build: {
        eyebrow: "Engineering",
        title: "How it is built.",
        text: "Snowy runs on a decoupled architecture: Next.js for SSR, SEO and UI; NestJS for business logic and data; Redis for cache; MySQL for persistence; and separate services where radar, CMS or jobs carry different loads.",
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
            text: "Renewable forecasting, simulator and dashboard for solar energy as a B2B vertical inside the Snowy ecosystem.",
          },
          {
            title: "B2B widgets",
            text: "An embeddable SDK to bring weather data, maps, tools or the AI assistant into third-party sites.",
          },
          {
            title: "Eclipse 2026",
            text: "A content and planning product around the total solar eclipse of 12 August 2026.",
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
            title: "Interview on RNE",
            text: "Radio appearance explaining Snowy and how the weather project has evolved.",
            image: "/images/snowy-rne.png",
            alt: "Jorge Carrera and Daniel Benito in an RNE interview about Snowy",
          },
          {
            title: "Article in larioja.com",
            text: "Regional press coverage of the Snowy launch out of LaRiojaMeteo.",
            image: "/images/snowy-larioja-article.jpeg",
            alt: "larioja.com article about the launch of Snowy",
            url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
          },
        ],
      },
      metrics: [
        { value: "16", label: "models", detail: "ECMWF, GFS, ICON, ARPEGE, GEM and more" },
        { value: "1,000+", label: "stations", detail: "official network and Snowy community" },
        { value: "370+", label: "reservoirs", detail: "status and evolution across Spain" },
        { value: "1,000+", label: "terms", detail: "WikiMeteo in Spanish" },
        { value: "20+", label: "AI tools", detail: "assistant, voice and daily decisions" },
        { value: "10+", label: "map layers", detail: "radar, stations, risks and air" },
      ],
      tractionMetrics: [
        { value: "14.7M", label: "impressions", detail: "last 3 months in organic search" },
        { value: "242k", label: "clicks", detail: "traffic from Google over 3 months" },
        {
          value: "1,400+",
          label: "registered users",
          detail: "an owned base for community and new features",
        },
      ],
      mediaMentions: [
        {
          outlet: "El Confidencial",
          date: "18 January 2026",
          title:
            "La Rioja Meteo launches Snowy, an AI-powered site for everyday weather decisions.",
          url: "https://www.elconfidencial.com/tecnologia/2026-01-18/web-ia-la-rioja-prevision-tiempo-1tna-1qrt_4282037/",
        },
        {
          outlet: "larioja.com",
          date: "22 January 2026",
          title:
            "Snowy is born: a La Rioja assistant for umbrellas, laundry and daily recommendations.",
          url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
        },
        {
          outlet: "eldiario.es",
          date: "12 January 2026",
          title:
            "La Rioja Meteo creates Snowy, a weather platform with practical recommendations.",
          url: "https://www.eldiario.es/la-rioja/rioja-meteo-crea-snowy-nueva-plataforma-meteorologia-dice-poner-lavadora-ropa-ponerte_1_12898410.html",
        },
        {
          outlet: "nuevecuatrouno",
          date: "12 January 2026",
          title: "Snowy launches as La Rioja Meteo's new weather platform.",
          url: "https://nuevecuatrouno.com/2026/01/12/nace-snowy-la-plataforma-meteorologica-de-la-rioja-meteo/",
        },
        {
          outlet: "Diario de León",
          date: "14 April 2026",
          title: "Snowy as a tool for planning eclipse viewing in León.",
          url: "https://www.diariodeleon.es/sociedad/260414/2081770/mejor-alia-leon-eclipse.html",
        },
        {
          outlet: "Actualidad Rioja Baja",
          date: "12 January 2026",
          title: "La Rioja Meteo launches Snowy as an advanced, accessible weather platform.",
          url: "https://actualidadriojabaja.com/la-rioja-meteo-lanza-snowy-una-nueva-plataforma-meteorologica-avanzada-y-accesible/",
        },
        {
          outlet: "nuevecuatrouno",
          date: "11 April 2026",
          title: "Snowy and La Rioja Meteo in the planning for August's eclipse.",
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
        text: "Most of the work is not new features: it is making what already exists load fast, read well on a phone and get found on Google.",
        groups: [
          { label: "Platform", items: ["WordPress", "PHP", "MySQL"] },
          { label: "Visibility", items: ["Technical SEO", "Structured data", "Core Web Vitals"] },
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
      metrics: [
        { value: "2012", label: "origin", detail: "start of the original weather project" },
        { value: "2020", label: "La Rioja Meteo", detail: "evolution into the current brand" },
        { value: "2024", label: "Jorge joins", detail: "technical work and product vision" },
        { value: "2025", label: "Snowy", detail: "launch of the advanced weather product" },
      ],
      responsibility: {
        eyebrow: "Responsibility",
        title: "A project where SEO and the mobile experience have direct impact.",
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
    eqx: {
      title: "EQx",
      description:
        "EQx project case: Jorge Carrera Diez took over the technical lead of the Elite Quality Index for the Foundation for Value Creation in St. Gallen, Switzerland.",
      eyebrow: "Client · Switzerland",
      heading: "EQx: the index that measures elite quality across 151 countries.",
      lead: "I took over the technical lead of the Elite Quality Index, a project of the Foundation for Value Creation under the academic leadership of three University of St. Gallen institutes. I came in to pick up a project already in production and keep it running on my own.",
      detail:
        "This is the engagement that best shows how I work with a client: nobody handed me the context, it had to be rebuilt by reading the code and measuring what was actually deployed. Today I maintain both the public index site and the private assessment platform, and the client has in writing what used to live in one person's head.",
      ctaPrimary: "Visit elitequality.org",
      ctaSecondary: "Get in touch",
      facts: [
        { label: "Client", value: "Foundation for Value Creation" },
        { label: "Role", value: "Technical handover and development" },
        { label: "Period", value: "Since July 2026" },
        { label: "Scope", value: "Public site and assessment platform" },
      ],
      imageAlts: {
        home: "elitequality.org homepage with the Elite Quality Index world map",
        rankings: "EQx country ranking table and interactive map",
      },
      client: {
        eyebrow: "The client",
        title: "A Swiss foundation publishing an annual academic index.",
        text: "The Foundation for Value Creation is a non-profit based in St. Gallen, supervised by the Swiss federal authority for foundations. It publishes the Elite Quality Index, which measures how far a country's elites create value rather than extract it.",
        items: [
          {
            title: "Academic leadership",
            text: "Three University of St. Gallen institutes — IIDM, ERP and SBF — plus an international network of academic partners.",
          },
          {
            title: "Two products",
            text: "The country index, public at elitequality.org, and the Value Creation Ratings for firms, computed on a private platform.",
          },
          {
            title: "Working in English",
            text: "All coordination is remote and in English, on European hours. The assessment platform ships in English, Spanish and Chinese.",
          },
        ],
      },
      metrics: [
        { value: "151", label: "countries ranked" },
        { value: "148", label: "indicators" },
        { value: "12", label: "pillars across 4 areas" },
        { value: "7th", label: "annual edition" },
      ],
      index: {
        eyebrow: "The index",
        title: "Four levels, from a single number to 148 indicators.",
        text: "The shape of the EQx drives the whole interface: every view on the site — the map, the table, the comparison tool — is a way into and out of this hierarchy.",
        levels: [
          {
            level: "Level 1",
            title: "The index",
            text: "One score and a global rank per country, plus the Power and Value sub-indexes.",
          },
          {
            level: "Level 2",
            title: "Four areas",
            text: "The first breakdown, used to compare countries without going into detail.",
          },
          {
            level: "Level 3",
            title: "Twelve pillars",
            text: "The level where you see where a country's score actually comes from.",
          },
          {
            level: "Level 4",
            title: "148 indicators",
            text: "The source data. This is what has to be auditable when someone disputes a result.",
          },
        ],
      },
      work: {
        eyebrow: "What I do",
        title: "Pick up a running project and make it sustainable.",
        text: "The job was not to build from scratch but to take ownership: understand what was there, write it down, and keep shipping without breaking what was already published.",
        items: [
          {
            title: "Map the ground first",
            text: "Measure what is actually deployed instead of trusting inherited documentation. Much of what the repo described was no longer what was in production.",
          },
          {
            title: "Public index site",
            text: "A static site with interactive islands: world map, rankings table, country comparison tool and rank evolution over time.",
          },
          {
            title: "Assessment platform",
            text: "A private application where a firm answers the survey, its rating is computed and the official four-page report is generated.",
          },
          {
            title: "Data that has to add up",
            text: "Rankings come from the foundation's official workbooks. The import is validated against the source: if it does not match, you fix the importer, not the output.",
          },
          {
            title: "Continuous delivery",
            text: "Every change ships on merge, and the project moved into the client's own organisation rather than mine.",
          },
          {
            title: "Handover documentation",
            text: "What I learn gets written down. If someone else comes in tomorrow, they do not repeat the archaeology I had to do.",
          },
        ],
      },
      vcr: {
        eyebrow: "self-VCr",
        title: "The other half: rating firms.",
        text: "Alongside the country index, the foundation computes a Value Creation Rating for firms. The tool is private and invitation-only, so there are no screenshots here — but I can say what it is made of.",
        items: [
          "A multilingual survey with saved progress, so it can be answered across several sessions.",
          "A scoring engine turning answers into the sustainable value creation score.",
          "The official four-page report, server-rendered and always faithful to its design.",
          "An admin console for clients, teams and access links.",
        ],
        note: "This is work under client agreement. The specifics belong in a conversation, not on a web page.",
      },
      stack: {
        eyebrow: "Stack",
        title: "Two different applications, one person responsible.",
        text: "The index site and the assessment platform share no code and no framework. What they share is me.",
        groups: [
          { label: "Index site", items: ["Astro", "React", "Tailwind", "TypeScript"] },
          { label: "Visualisation", items: ["D3", "TopoJSON", "TanStack Table"] },
          { label: "Platform", items: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"] },
          { label: "Delivery", items: ["GitHub Actions", "Continuous deploy", "Vitest", "Playwright"] },
        ],
      },
    },
  },
  caseCta: {
    title: "Does any of this fit what you need?",
    text: "I work on scoped engagements, remote and on European hours. If you have something in mind, tell me and I will say honestly whether I am the right person.",
    cta: "Email me",
    ctaSecondary: "See all projects",
  },
};
