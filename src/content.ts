// src/content.ts — All placeholder content for the portfolio
// Replace any block marked PLACEHOLDER with real data.

export const personalInfo = {
  name: "Mayor",
  role: "Full-stack developer",
  location: "Port Harcourt, NG",
  updated: "Oct 2026",
  status: "Available for projects",
  email: "hello@mayor.dev",
  socials: [
    { label: "@mayordev", href: "#" }, // TODO: replace with real social links
    { label: "github/mayor", href: "#" }, // TODO: replace
    { label: "linkedin/mayor", href: "#" }, // TODO: replace
  ],
};

// Optional hero image (falls back to SVG illustration if absent)
export const heroImage: string | undefined = undefined; // TODO: replace with "/images/hero.webp" when available

// Proof strip — testimonials or metrics. Render nothing if empty.
export interface ProofItem {
  type: "testimonial" | "metric";
  quote?: string; // for testimonials
  name?: string;
  role?: string;
  value?: string; // for metrics
  label?: string;
}

export const proof: ProofItem[] = [
  // TODO: replace with real testimonials or metrics
  // { type: "testimonial", quote: "Mayor shipped our MVP in six weeks.", name: "Ada O.", role: "Founder, Loopwise" },
  // { type: "metric", value: "480+", label: "Projects delivered" },
];

// ─── APPS ────────────────────────────────────────────────
export interface App {
  name: string;
  description: string;
  platform: string;
  color: string;
  status: "Live" | "Beta";
  iconBg: string;
  href?: string; // TODO: replace with real store/app links
  icon?: string; // optional image path
}

export const apps: App[] = [
  { name: "Pulsekit", description: "Habit tracker that adapts to your energy levels daily.", platform: "iOS · Android", color: "#5b4bd6", status: "Live", iconBg: "#5b4bd6", href: "#" }, // TODO: replace with real store link
  { name: "Fieldday", description: "Outdoor activity planner with weather-aware suggestions.", platform: "iOS", color: "#2d8a4e", status: "Live", iconBg: "#2d8a4e", href: "#" }, // TODO: replace
  { name: "Notewell", description: "Voice memo organizer that transcribes and tags automatically.", platform: "Web", color: "#c44b2f", status: "Live", iconBg: "#c44b2f", href: "#" }, // TODO: replace
  { name: "Stackwise", description: "Kanban board built for solo developers shipping fast.", platform: "Web · Desktop", color: "#1d6b8a", status: "Live", iconBg: "#1d6b8a", href: "#" }, // TODO: replace
  { name: "Lumenote", description: "Reading companion that surfaces your highlights contextually.", platform: "iOS · Android", color: "#8a6b1d", status: "Beta", iconBg: "#8a6b1d", href: "#" }, // TODO: replace
  { name: "Gridform", description: "Form builder with conditional logic and offline support.", platform: "Web", color: "#6b1d8a", status: "Live", iconBg: "#6b1d8a", href: "#" }, // TODO: replace
  { name: "Tidepool", description: "Personal finance dashboard with spending pattern insights.", platform: "iOS", color: "#1d8a7a", status: "Beta", iconBg: "#1d8a7a", href: "#" }, // TODO: replace
  { name: "Calmcast", description: "Meditation timer with ambient soundscapes and streaks.", platform: "iOS · Android", color: "#4b5b8a", status: "Live", iconBg: "#4b5b8a", href: "#" }, // TODO: replace
];

// ─── PROJECTS ────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "AI" | "Systems";
  year: string;
  tagline: string;
  tags: string[];
  panelColor: string;
  role: string;
  summary: string;
  image?: string; // optional hero image path; falls back to colour panel
  platform?: string;
  featured?: boolean; // show as featured block on work index
  gallery?: string[]; // additional images for case study
  liveUrl?: string; // live project URL
  hasCaseStudy?: boolean; // whether a full case study exists
}

export const projects: Project[] = [
  {
    slug: "ledgerline",
    title: "Ledgerline",
    category: "Web",
    year: "2026",
    tagline: "Your money, minus the mystery.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    panelColor: "#a9d6c9",
    role: "Lead developer & designer",
    summary: "Built a personal finance OS with account tracking, transaction management, savings goals, and analytics. Plain-spoken voice, zero jargon, and a playful approach to money management.",
    featured: true,
    hasCaseStudy: true,
    liveUrl: "https://finance-beta-jade-28.vercel.app/",
    // image: "/images/projects/ledgerline.webp", // TODO: add screenshot path
  },
  {
    slug: "aetheris",
    title: "Aetheris",
    category: "Web",
    year: "2026",
    tagline: "The foundational Layer-1 for the next internet.",
    tags: ["React", "TypeScript", "Tailwind", "Web3"],
    panelColor: "#0a0a0a",
    role: "Lead developer & designer",
    summary: "Designed and built a cinematic, mythic website for a fictional Layer-1 blockchain. Features live stats, technical pillars, ecosystem showcase, developer docs, and governance interface.",
    hasCaseStudy: true,
    liveUrl: "https://aetheris-blockchain.vercel.app/",
    // image: "/images/projects/aetheris.webp", // TODO: add screenshot path
  },
  {
    slug: "codex",
    title: "Codex",
    category: "Web",
    year: "2026",
    tagline: "A knowledge base that lives in your browser and compiles your notes on the fly.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    panelColor: "#c8bdf0",
    role: "Developer and designer",
    summary: "Built a fast, private knowledge base with full-text search, syntax highlighting, and a single render pipeline. Zero backend — everything runs in the browser with localStorage persistence.",
    hasCaseStudy: true,
    liveUrl: "https://codex-iota-six.vercel.app/#/",
    // image: "/images/projects/codex.webp", // TODO: add screenshot path
  },
  {
    slug: "nexus-workspace",
    title: "Nexus Workspace",
    category: "Web",
    year: "2026",
    tagline: "A premium dark workspace where fast teams stop losing the plot.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    panelColor: "#0a0a0a",
    role: "Lead developer & designer",
    summary: "Built a workspace and analytics platform with drag-and-drop boards, live dashboards, and real-time sync. Premium dark UI with smooth animations and a focus on developer experience.",
    hasCaseStudy: true,
    liveUrl: "https://nexus-startup-pi.vercel.app/",
    // image: "/images/projects/nexus.webp", // TODO: add screenshot path
  },
  {
    slug: "meridian-hospital",
    title: "Meridian Hospital",
    category: "Web",
    year: "2025",
    tagline: "Clinical trust, designed — a teaching hospital's digital front door.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    panelColor: "#1d2b47",
    role: "Lead developer & designer",
    summary: "Designed and built a patient-focused website for MERIDIAN General Hospital. Features a cost estimator, doctor directory, department showcase, and a calm, trustworthy design language.",
    hasCaseStudy: true,
    liveUrl: "https://meridian-hospital-gray.vercel.app/",
    // image: "/images/projects/meridian.webp", // TODO: add screenshot path
  },
  {
    slug: "ironmark-construction",
    title: "Ironmark Construction",
    category: "Web",
    year: "2025",
    tagline: "A bold digital presence for 25 years of building what stays standing.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    panelColor: "#1d2b47",
    role: "Lead developer & designer",
    summary: "Designed and built a full marketing website for Ironmark Construction Group. Editorial style, component architecture, and a live preview that lets visitors explore the real site.",
    hasCaseStudy: true,
    liveUrl: "https://ironmark-construction-company.vercel.app/",
    // image: "/images/projects/ironmark.webp", // TODO: add screenshot path
  },
  {
    slug: "orbit-market",
    title: "Orbit Market",
    category: "Web",
    year: "2026",
    tagline: "A peer-to-peer marketplace for local artisans and makers.",
    tags: ["React", "Node", "Postgres", "Stripe"],
    panelColor: "#e8855a",
    role: "Lead developer",
    summary: "Built a marketplace connecting 200+ local artisans with buyers. Focused on fast load times, simple checkout, and a clean seller dashboard.",
    hasCaseStudy: true,
    // image: "/images/projects/orbit.webp", // TODO: add screenshot path
  },
  {
    slug: "fieldnotes-app",
    title: "Fieldnotes",
    category: "Mobile",
    year: "2025",
    tagline: "Offline-first journaling app for researchers in remote areas.",
    tags: ["Flutter", "SQLite", "Dart"],
    panelColor: "#a9d6c9",
    role: "Solo developer",
    summary: "Designed and shipped a journaling app that works fully offline and syncs when connected. Used by 12 field researchers across three countries.",
    hasCaseStudy: true,
    // image: "/images/projects/fieldnotes.webp", // TODO: add screenshot path
  },
  {
    slug: "lumen-ai",
    title: "Lumen AI",
    category: "AI",
    year: "2026",
    tagline: "AI assistant that drafts, reviews, and learns from your writing.",
    tags: ["Python", "FastAPI", "LLM", "React"],
    panelColor: "#c8bdf0",
    role: "AI engineer",
    summary: "Built an AI writing assistant that adapts to the user's voice over time. Handles drafting, editing, and tone adjustment across long-form content.",
    hasCaseStudy: true,
    // image: "/images/projects/lumen.webp", // TODO: add screenshot path
  },
  {
    slug: "gridops",
    title: "GridOps",
    category: "Systems",
    year: "2025",
    tagline: "Infrastructure monitoring dashboard for small engineering teams.",
    tags: ["Go", "Grafana", "Docker", "React"],
    panelColor: "#d8c9a0",
    role: "Systems engineer",
    summary: "Created a lightweight monitoring tool that surfaces only what matters. Reduced alert fatigue by 60% for the pilot team of 8 engineers.",
    hasCaseStudy: true,
    // image: "/images/projects/gridops.webp", // TODO: add screenshot path
  },
  {
    slug: "canopy-cms",
    title: "Canopy CMS",
    category: "Web",
    year: "2024",
    tagline: "Headless CMS designed for content teams who hate complexity.",
    tags: ["Next.js", "Prisma", "TypeScript"],
    panelColor: "#e8a9dd",
    role: "Full-stack developer",
    summary: "Built a headless CMS with a visual editor that non-technical writers actually enjoy using. Now powering 14 editorial sites.",
    // image: "/images/projects/canopy.webp", // TODO: add screenshot path
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    category: "AI",
    year: "2026",
    tagline: "Real-time analytics with natural language queries.",
    tags: ["Python", "React", "D3", "LLM"],
    panelColor: "#5b8a6b",
    role: "Lead developer",
    summary: "Built an analytics dashboard where users ask questions in plain English and get charts back. Processes 2M events per day for the beta cohort.",
    // image: "/images/projects/pulse.webp", // TODO: add screenshot path
  },
  {
    slug: "terravault",
    title: "TerraVault",
    category: "Systems",
    year: "2024",
    tagline: "Encrypted file storage with zero-knowledge architecture.",
    tags: ["Rust", "WebCrypto", "S3", "React"],
    panelColor: "#1d2b47",
    role: "Security-focused dev",
    summary: "Built end-to-end encrypted storage where the server never sees plaintext. Handles files up to 5GB with resumable uploads.",
    // image: "/images/projects/terravault.webp", // TODO: add screenshot path
  },
  {
    slug: "harbor-app",
    title: "Harbor",
    category: "Mobile",
    year: "2025",
    tagline: "Neighborhood safety network with anonymous reporting.",
    tags: ["React Native", "Firebase", "Maps"],
    panelColor: "#c44b2f",
    role: "Mobile developer",
    summary: "Shipped a community safety app with anonymous reporting, verified incidents, and real-time alerts. Active in 6 neighborhoods.",
    // image: "/images/projects/harbor.webp", // TODO: add screenshot path
  },
];

// ─── CASE STUDIES (3 full) ───────────────────────────────
export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  year: string;
  stack: string[];
  timeline: string;
  platform: string;
  role: string;
  problem: string;
  approach: string[];
  architectureNodes: { id: string; label: string; x: number; y: number }[];
  architectureEdges: [string, string][];
  stats: { value: string; label: string }[];
  chartA: { month: string; value: number }[];
  chartB: { category: string; value: number }[];
  nextSteps: string[];
  panelColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ledgerline",
    title: "Ledgerline",
    category: "Web",
    year: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
    timeline: "Personal project",
    platform: "Web",
    role: "Lead developer & designer",
    problem: "Personal finance apps are either too complex for everyday use or too simplistic to provide real insights. Users need something that tracks multiple accounts, categorizes spending automatically, and helps them save for goals — all without feeling like a spreadsheet or a lecture.",
    approach: [
      "Designed a plain-spoken, slightly cheeky voice that treats money management like a conversation, not a chore. Every label, tooltip, and empty state has personality.",
      "Built a modular dashboard with four main views (Overview, Analytics, Transactions, Goals) that work independently but share the same data layer. Everything updates in real-time.",
      "Created a transaction generator that produces realistic demo data so the app always looks alive. Users can add, edit, and delete transactions with instant feedback.",
    ],
    architectureNodes: [
      { id: "overview", label: "Overview", x: 100, y: 100 },
      { id: "analytics", label: "Analytics", x: 300, y: 100 },
      { id: "transactions", label: "Transactions", x: 500, y: 100 },
      { id: "goals", label: "Goals", x: 700, y: 100 },
      { id: "accounts", label: "Accounts", x: 200, y: 300 },
      { id: "categories", label: "Categories", x: 400, y: 300 },
      { id: "storage", label: "localStorage", x: 600, y: 300 },
    ],
    architectureEdges: [["overview", "accounts"], ["overview", "categories"], ["analytics", "transactions"], ["transactions", "storage"], ["goals", "storage"]],
    stats: [
      { value: "4", label: "Main views" },
      { value: "10", label: "Categories" },
      { value: "100%", label: "Client-side" },
    ],
    chartA: [
      { month: "Jan", value: 0 }, { month: "Feb", value: 0 }, { month: "Mar", value: 0 },
      { month: "Apr", value: 0 }, { month: "May", value: 0 }, { month: "Jun", value: 0 },
      { month: "Jul", value: 0 }, { month: "Aug", value: 0 }, { month: "Sep", value: 0 },
      { month: "Oct", value: 0 }, { month: "Nov", value: 0 }, { month: "Dec", value: 0 },
    ],
    chartB: [
      { category: "Speed", value: 100 }, { category: "A11y", value: 98 },
      { category: "Best Prac", value: 100 }, { category: "SEO", value: 95 },
      { category: "PWA", value: 90 },
    ],
    nextSteps: [
      "Add bank API integration via Plaid",
      "Implement recurring transaction detection",
      "Build mobile app with offline support",
    ],
    panelColor: "#a9d6c9",
  },
  {
    slug: "aetheris",
    title: "Aetheris",
    category: "Web",
    year: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    timeline: "Design concept",
    platform: "Web",
    role: "Lead developer & designer",
    problem: "Blockchain websites often feel either too technical for newcomers or too vague for developers. The challenge was to create a cinematic, mythic experience that communicates complex Layer-1 concepts (parallel execution, ZK proofs, decentralized sequencing) while maintaining the gravitas of a foundational protocol.",
    approach: [
      "Designed a terse, transmission-like voice that treats the visitor as an insider receiving signal, not a customer reading marketing copy. Every word earns its place.",
      "Built live-looking stats and network visualizations that convey scale and activity without requiring real blockchain data. The interface feels alive.",
      "Created a multi-section experience (Technology, Tokenomics, Ecosystem, Developers, Governance) that progressively reveals the protocol's depth while keeping each section self-contained.",
    ],
    architectureNodes: [
      { id: "hero", label: "Hero + Stats", x: 100, y: 100 },
      { id: "pillars", label: "Tech Pillars", x: 300, y: 100 },
      { id: "tokenomics", label: "Tokenomics", x: 500, y: 100 },
      { id: "ecosystem", label: "Ecosystem", x: 100, y: 300 },
      { id: "developers", label: "Developers", x: 300, y: 300 },
      { id: "governance", label: "Governance", x: 500, y: 300 },
    ],
    architectureEdges: [["hero", "pillars"], ["pillars", "tokenomics"], ["hero", "ecosystem"], ["ecosystem", "developers"], ["developers", "governance"]],
    stats: [
      { value: "184k", label: "Simulated TPS" },
      { value: "0.8s", label: "Finality time" },
      { value: "6", label: "Sections" },
    ],
    chartA: [
      { month: "Jan", value: 0 }, { month: "Feb", value: 0 }, { month: "Mar", value: 0 },
      { month: "Apr", value: 0 }, { month: "May", value: 0 }, { month: "Jun", value: 0 },
      { month: "Jul", value: 0 }, { month: "Aug", value: 0 }, { month: "Sep", value: 0 },
      { month: "Oct", value: 0 }, { month: "Nov", value: 0 }, { month: "Dec", value: 0 },
    ],
    chartB: [
      { category: "Speed", value: 100 }, { category: "A11y", value: 95 },
      { category: "Best Prac", value: 100 }, { category: "SEO", value: 90 },
      { category: "PWA", value: 85 },
    ],
    nextSteps: [
      "Add real-time blockchain data integration",
      "Implement wallet connection for governance voting",
      "Build interactive tokenomics calculator",
    ],
    panelColor: "#0a0a0a",
  },
  {
    slug: "codex",
    title: "Codex",
    category: "Web",
    year: "2026",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Marked", "Prism"],
    timeline: "Personal project",
    platform: "Web",
    role: "Developer and designer",
    problem: "Engineers keep postmortems, snippets and how-tos in places that are slow, locked behind accounts or hard to search. The goal was a fast, private knowledge base: write in Markdown, search everything instantly, and keep the data on your own machine.",
    approach: [
      "One render pipeline powers every view — library, reader, composer preview, playground, and guide all use the same Markdown compiler, so everything looks and behaves consistently.",
      "Local-first by design. Entries live in localStorage with JSON backup and restore. No backend means no sign-up, no latency, and nothing to leak.",
      "Reading that feels good. Auto-generated table of contents, reading progress tracking, reading-time estimates, syntax highlighting, and one-click copy on every code block.",
    ],
    architectureNodes: [
      { id: "built", label: "Built-in Articles", x: 80, y: 80 },
      { id: "import", label: "Imported Markdown", x: 80, y: 280 },
      { id: "composer", label: "Composer", x: 240, y: 280 },
      { id: "app", label: "App State", x: 320, y: 180 },
      { id: "views", label: "Library / Reader", x: 520, y: 80 },
      { id: "storage", label: "localStorage", x: 520, y: 280 },
      { id: "render", label: "renderCached()", x: 700, y: 80 },
      { id: "marked", label: "Marked + Prism", x: 700, y: 200 },
    ],
    architectureEdges: [["built", "app"], ["import", "composer"], ["composer", "app"], ["app", "views"], ["app", "storage"], ["views", "render"], ["render", "marked"]],
    stats: [
      { value: "0", label: "Backend dependencies" },
      { value: "6", label: "Deep-linkable routes" },
      { value: "100%", label: "Data stays local" },
    ],
    chartA: [
      { month: "Jan", value: 0 }, { month: "Feb", value: 0 }, { month: "Mar", value: 0 },
      { month: "Apr", value: 0 }, { month: "May", value: 0 }, { month: "Jun", value: 0 },
      { month: "Jul", value: 0 }, { month: "Aug", value: 0 }, { month: "Sep", value: 0 },
      { month: "Oct", value: 0 }, { month: "Nov", value: 0 }, { month: "Dec", value: 0 },
    ],
    chartB: [
      { category: "Speed", value: 100 }, { category: "A11y", value: 100 },
      { category: "Best Prac", value: 100 }, { category: "SEO", value: 100 },
      { category: "PWA", value: 100 },
    ],
    nextSteps: [
      "Add automated tests with Vitest and Playwright",
      "Explore optional cloud sync while keeping local-first as default",
      "Export entries as Markdown files alongside JSON backup",
    ],
    panelColor: "#c8bdf0",
  },
  {
    slug: "nexus-workspace",
    title: "Nexus Workspace",
    category: "Web",
    year: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    timeline: "3 months",
    platform: "Web",
    role: "Lead developer & designer",
    problem: "Fast-moving startups were juggling 5+ tools for project management, analytics, and team communication. Context-switching was killing productivity, and existing tools felt either too simple or too enterprise. Teams needed a single, beautiful workspace that could handle both tasks and metrics without compromise.",
    approach: [
      "Designed a premium dark-first interface that feels like a tool built by developers, for developers. Every interaction is smooth, every animation earns its place, and the UI gets out of the way when you need to focus.",
      "Built real-time collaboration from day one using Supabase. Multiple team members can edit boards, view dashboards, and see updates instantly without refresh. Presence indicators show who's online.",
      "Created a modular component system that makes the interface feel cohesive across boards, dashboards, and settings. The same design language applies everywhere, so the tool feels familiar no matter where you are.",
    ],
    architectureNodes: [
      { id: "client", label: "React SPA", x: 100, y: 200 },
      { id: "router", label: "React Router", x: 280, y: 200 },
      { id: "state", label: "Zustand State", x: 450, y: 120 },
      { id: "supabase", label: "Supabase", x: 450, y: 280 },
      { id: "realtime", label: "Realtime Sync", x: 280, y: 60 },
      { id: "auth", label: "Auth & RLS", x: 280, y: 340 },
    ],
    architectureEdges: [["client", "router"], ["router", "state"], ["state", "supabase"], ["client", "realtime"], ["supabase", "auth"]],
    stats: [
      { value: "100%", label: "Mobile responsive" },
      { value: "98+", label: "Lighthouse score" },
      { value: "3mo", label: "Delivery time" },
    ],
    chartA: [
      { month: "Jan", value: 0 }, { month: "Feb", value: 25 }, { month: "Mar", value: 55 },
      { month: "Apr", value: 72 }, { month: "May", value: 85 }, { month: "Jun", value: 92 },
      { month: "Jul", value: 95 }, { month: "Aug", value: 97 }, { month: "Sep", value: 98 },
      { month: "Oct", value: 98 }, { month: "Nov", value: 98 }, { month: "Dec", value: 98 },
    ],
    chartB: [
      { category: "Speed", value: 99 }, { category: "A11y", value: 100 },
      { category: "Best Prac", value: 100 }, { category: "SEO", value: 95 },
      { category: "PWA", value: 92 },
    ],
    nextSteps: [
      "Add API integrations with GitHub, Slack, and Linear",
      "Build mobile apps for iOS and Android",
      "Implement advanced analytics with custom queries",
    ],
    panelColor: "#0a0a0a",
  },
  {
    slug: "meridian-hospital",
    title: "MERIDIAN General Hospital",
    category: "Web",
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    timeline: "4 months",
    platform: "Web",
    role: "Lead developer & designer",
    problem: "MERIDIAN General Hospital had 40 years of clinical excellence but a digital presence that felt outdated and intimidating. Patients struggled to find doctors, understand costs, or book appointments. The site needed to convey trust and calm while making complex healthcare information accessible and actionable.",
    approach: [
      "Designed a patient-first information architecture that puts the most common tasks (find a doctor, understand costs, book appointments) front and center. Every page answers the question 'What do I do next?'",
      "Built interactive tools like the cost estimator and doctor directory that give patients real utility, not just marketing copy. These features drive engagement and reduce phone calls to the front desk.",
      "Created a calm, trustworthy visual language with soft colors, generous whitespace, and clear typography. The design lowers anxiety and makes the hospital feel approachable, not clinical.",
    ],
    architectureNodes: [
      { id: "client", label: "React SPA", x: 100, y: 200 },
      { id: "router", label: "React Router", x: 280, y: 200 },
      { id: "components", label: "Components", x: 450, y: 120 },
      { id: "data", label: "Content Data", x: 450, y: 280 },
      { id: "styles", label: "Tailwind CSS", x: 280, y: 60 },
      { id: "tools", label: "Interactive Tools", x: 280, y: 340 },
    ],
    architectureEdges: [["client", "router"], ["router", "components"], ["client", "data"], ["components", "styles"], ["client", "tools"]],
    stats: [
      { value: "100%", label: "Mobile responsive" },
      { value: "97+", label: "Lighthouse score" },
      { value: "4mo", label: "Delivery time" },
    ],
    chartA: [
      { month: "Jan", value: 0 }, { month: "Feb", value: 20 }, { month: "Mar", value: 45 },
      { month: "Apr", value: 65 }, { month: "May", value: 78 }, { month: "Jun", value: 88 },
      { month: "Jul", value: 92 }, { month: "Aug", value: 95 }, { month: "Sep", value: 96 },
      { month: "Oct", value: 96 }, { month: "Nov", value: 96 }, { month: "Dec", value: 96 },
    ],
    chartB: [
      { category: "Speed", value: 98 }, { category: "A11y", value: 100 },
      { category: "Best Prac", value: 100 }, { category: "SEO", value: 95 },
      { category: "PWA", value: 90 },
    ],
    nextSteps: [
      "Add online appointment booking with calendar integration",
      "Implement patient portal for medical records access",
      "Add multi-language support for diverse patient population",
    ],
    panelColor: "#1d2b47",
  },
  {
    slug: "ironmark-construction",
    title: "Ironmark Construction Group",
    category: "Web",
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    timeline: "3 months",
    platform: "Web",
    role: "Lead developer & designer",
    problem: "Ironmark Construction Group had 25+ years of experience but no digital presence. They needed a website that reflected their reputation for reliability and quality work across commercial, industrial, residential, and infrastructure projects. The site had to feel professional and trustworthy while being easy for their team to update with new projects.",
    approach: [
      "Designed a bold, editorial-style website that mirrors their no-nonsense approach to construction. Clean typography, strong imagery, and clear service categories.",
      "Built a component-based architecture with reusable sections for projects, services, and team. This makes it easy to add new content without touching code.",
      "Implemented smooth animations and interactions that feel premium without being distracting. Every element serves a purpose.",
    ],
    architectureNodes: [
      { id: "client", label: "React SPA", x: 100, y: 200 },
      { id: "router", label: "React Router", x: 280, y: 200 },
      { id: "components", label: "Components", x: 450, y: 120 },
      { id: "content", label: "Content Data", x: 450, y: 280 },
      { id: "styles", label: "Tailwind CSS", x: 280, y: 60 },
      { id: "build", label: "Vite Build", x: 280, y: 340 },
    ],
    architectureEdges: [["client", "router"], ["router", "components"], ["client", "content"], ["components", "styles"], ["client", "build"]],
    stats: [
      { value: "100%", label: "Mobile responsive" },
      { value: "95+", label: "Lighthouse score" },
      { value: "3mo", label: "Delivery time" },
    ],
    chartA: [
      { month: "Jan", value: 0 }, { month: "Feb", value: 15 }, { month: "Mar", value: 35 },
      { month: "Apr", value: 52 }, { month: "May", value: 68 }, { month: "Jun", value: 85 },
      { month: "Jul", value: 92 }, { month: "Aug", value: 95 }, { month: "Sep", value: 95 },
      { month: "Oct", value: 95 }, { month: "Nov", value: 95 }, { month: "Dec", value: 95 },
    ],
    chartB: [
      { category: "Speed", value: 98 }, { category: "A11y", value: 100 },
      { category: "Best Prac", value: 100 }, { category: "SEO", value: 100 },
      { category: "PWA", value: 90 },
    ],
    nextSteps: [
      "Add project filtering by category and year",
      "Implement a CMS for easy content updates",
      "Add a project inquiry form with email notifications",
    ],
    panelColor: "#1d2b47",
  },
  {
    slug: "orbit-market",
    title: "Orbit Market",
    category: "Web",
    year: "2026",
    stack: ["React", "Node", "Postgres", "Stripe"],
    timeline: "4 months",
    platform: "Web",
    role: "Lead developer",
    problem: "Local artisans in Port Harcourt had no simple way to sell online. Existing platforms were too complex, charged high fees, and didn't support mobile money. Sellers needed something that worked on slow connections and felt trustworthy to buyers.",
    approach: [
      "Mapped the seller journey from photo upload to payout, cutting it to three steps.",
      "Built a lightweight PWA that caches product data for offline browsing.",
      "Integrated mobile money alongside card payments with a single checkout flow.",
    ],
    architectureNodes: [
      { id: "client", label: "React PWA", x: 100, y: 200 },
      { id: "api", label: "Node API", x: 300, y: 200 },
      { id: "db", label: "Postgres", x: 500, y: 120 },
      { id: "cache", label: "Redis", x: 500, y: 280 },
      { id: "pay", label: "Payments", x: 300, y: 60 },
      { id: "cdn", label: "CDN", x: 100, y: 60 },
      { id: "queue", label: "Job Queue", x: 500, y: 200 },
    ],
    architectureEdges: [["client", "api"], ["api", "db"], ["api", "cache"], ["api", "pay"], ["client", "cdn"], ["api", "queue"]],
    stats: [
      { value: "200+", label: "Active sellers" },
      { value: "1.8s", label: "Median load time" },
      { value: "94%", label: "Task completion rate" },
    ],
    chartA: [
      { month: "Jan", value: 12 }, { month: "Feb", value: 18 }, { month: "Mar", value: 24 },
      { month: "Apr", value: 31 }, { month: "May", value: 45 }, { month: "Jun", value: 52 },
      { month: "Jul", value: 61 }, { month: "Aug", value: 78 }, { month: "Sep", value: 95 },
      { month: "Oct", value: 110 }, { month: "Nov", value: 134 }, { month: "Dec", value: 156 },
    ],
    chartB: [
      { category: "Browse", value: 85 }, { category: "Add cart", value: 62 },
      { category: "Checkout", value: 48 }, { category: "Pay", value: 44 },
      { category: "Confirm", value: 42 },
    ],
    nextSteps: [
      "Add multi-language support for French-speaking markets.",
      "Introduce seller analytics dashboard with sales trends.",
      "Build native mobile apps for power sellers.",
    ],
    panelColor: "#e8855a",
  },
  {
    slug: "fieldnotes-app",
    title: "Fieldnotes",
    category: "Mobile",
    year: "2025",
    stack: ["Flutter", "SQLite", "Dart"],
    timeline: "6 months",
    platform: "iOS · Android",
    role: "Solo developer",
    problem: "Field researchers working in remote areas with unreliable connectivity needed a journaling tool that never lost data. Existing apps required constant internet and crashed with large attachments like photos and audio recordings.",
    approach: [
      "Designed an offline-first architecture with conflict-free sync when connection returns.",
      "Built a custom local database layer optimized for large binary attachments.",
      "Created a minimal UI that works one-handed in difficult field conditions.",
    ],
    architectureNodes: [
      { id: "ui", label: "Flutter UI", x: 100, y: 200 },
      { id: "state", label: "State Mgr", x: 250, y: 200 },
      { id: "local", label: "SQLite", x: 400, y: 120 },
      { id: "sync", label: "Sync Engine", x: 400, y: 280 },
      { id: "cloud", label: "Cloud DB", x: 550, y: 200 },
      { id: "media", label: "Media Store", x: 250, y: 60 },
    ],
    architectureEdges: [["ui", "state"], ["state", "local"], ["state", "sync"], ["sync", "cloud"], ["local", "media"]],
    stats: [
      { value: "12", label: "Field researchers" },
      { value: "3", label: "Countries deployed" },
      { value: "0", label: "Data loss incidents" },
    ],
    chartA: [
      { month: "Jan", value: 5 }, { month: "Feb", value: 12 }, { month: "Mar", value: 18 },
      { month: "Apr", value: 22 }, { month: "May", value: 30 }, { month: "Jun", value: 28 },
      { month: "Jul", value: 35 }, { month: "Aug", value: 42 }, { month: "Sep", value: 38 },
      { month: "Oct", value: 45 }, { month: "Nov", value: 50 }, { month: "Dec", value: 55 },
    ],
    chartB: [
      { category: "Text", value: 90 }, { category: "Photo", value: 72 },
      { category: "Audio", value: 45 }, { category: "GPS", value: 60 },
      { category: "Sketch", value: 25 }, { category: "Tags", value: 80 },
    ],
    nextSteps: [
      "Add collaborative editing for research teams in the same location.",
      "Build export to common academic formats (CSV, BibTeX).",
      "Integrate with satellite communication devices for extreme remote use.",
    ],
    panelColor: "#a9d6c9",
  },
  {
    slug: "lumen-ai",
    title: "Lumen AI",
    category: "AI",
    year: "2026",
    stack: ["Python", "FastAPI", "LLM", "React"],
    timeline: "5 months",
    platform: "Web",
    role: "AI engineer",
    problem: "Writers and content teams needed an AI assistant that could adapt to their specific voice and style. Generic AI tools produced content that sounded robotic and required heavy editing, defeating the purpose of using AI in the first place.",
    approach: [
      "Built a voice-profile system that learns from each user's existing writing samples.",
      "Created a multi-stage pipeline: draft, review, refine with user feedback loops.",
      "Designed an interface that shows AI reasoning so users trust and can correct suggestions.",
    ],
    architectureNodes: [
      { id: "editor", label: "Editor UI", x: 100, y: 200 },
      { id: "api", label: "FastAPI", x: 280, y: 200 },
      { id: "llm", label: "LLM Layer", x: 450, y: 120 },
      { id: "voice", label: "Voice Model", x: 450, y: 280 },
      { id: "store", label: "User Data", x: 280, y: 60 },
      { id: "eval", label: "Evaluator", x: 600, y: 200 },
    ],
    architectureEdges: [["editor", "api"], ["api", "llm"], ["api", "voice"], ["api", "store"], ["llm", "eval"]],
    stats: [
      { value: "73%", label: "Less editing needed" },
      { value: "4.2k", label: "Documents processed" },
      { value: "2.1s", label: "Avg response time" },
    ],
    chartA: [
      { month: "Jan", value: 200 }, { month: "Feb", value: 340 }, { month: "Mar", value: 480 },
      { month: "Apr", value: 620 }, { month: "May", value: 810 }, { month: "Jun", value: 950 },
      { month: "Jul", value: 1100 }, { month: "Aug", value: 1400 }, { month: "Sep", value: 1800 },
      { month: "Oct", value: 2200 }, { month: "Nov", value: 2800 }, { month: "Dec", value: 3400 },
    ],
    chartB: [
      { category: "Drafting", value: 88 }, { category: "Editing", value: 72 },
      { category: "Tone", value: 65 }, { category: "Research", value: 45 },
      { category: "Summary", value: 80 },
    ],
    nextSteps: [
      "Add team voice profiles for consistent brand content.",
      "Build API access for integration with existing writing tools.",
      "Implement fact-checking layer for research-heavy content.",
    ],
    panelColor: "#c8bdf0",
  },
];

// ─── CAPABILITIES ────────────────────────────────────────
export interface Capability {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  projectSlug?: string; // optional link to a related project
}

export const capabilities: Capability[] = [
  { title: "Mobile products", description: "Native and cross-platform apps built for real usage patterns. Offline-first, fast, and respectful of battery and data.", tags: ["Flutter", "React Native", "Swift"], icon: "smartphone", projectSlug: "meridian-hospital" },
  { title: "AI agents", description: "Practical AI features that solve specific problems. Not demos — production systems with evaluation, fallbacks, and clear user trust.", tags: ["LLM", "RAG", "Python"], icon: "brain", projectSlug: "codex" },
  { title: "Web products", description: "Full-stack web apps from idea to deployment. Fast, accessible, and built with maintainability as a first-class concern.", tags: ["React", "Next.js", "Node"], icon: "globe", projectSlug: "ledgerline" },
  { title: "Desktop and systems", description: "Tools that live on the machine. CLI utilities, desktop apps, and infrastructure that engineering teams actually want to use.", tags: ["Rust", "Go", "Electron"], icon: "monitor", projectSlug: "nexus-workspace" },
];

// ─── PRINCIPLES ──────────────────────────────────────────
export const principles = [
  { label: "Ship weekly", sentence: "Small releases beat big launches every time." },
  { label: "Measure first", sentence: "Decisions start with data, not opinions." },
  { label: "Write it down", sentence: "If it isn't documented, it doesn't exist." },
];

// ─── LEDGERLINE FINANCE OS ───────────────────────────────
export const ledgerline = {
  liveUrl: "https://finance-beta-jade-28.vercel.app/",
  productName: "Ledgerline",
  tagline: "Your money, minus the mystery.",
  description: "A personal finance OS that tracks accounts, transactions, goals, and analytics with a plain-spoken voice and zero jargon.",
  user: { name: "Tobi Adebayo", initials: "TA", plan: "Demo account" },
  accounts: [
    { name: "Everyday Checking", institution: "Harbor Credit Union", type: "checking", balance: "$4,286.50", trend: "+2.4%", mask: "4821" },
    { name: "Rainy Day Savings", institution: "Harbor Credit Union", type: "savings", balance: "$12,840", trend: "+5.1%", mask: "9304" },
    { name: "Travel Rewards Card", institution: "Summit Bank", type: "credit", balance: "-$1,124.80", trend: "-3.2%", mask: "7715" },
    { name: "Long Game Portfolio", institution: "Pinecrest Invest", type: "investment", balance: "$28,460.25", trend: "+8.7%", mask: "2208" },
  ],
  categories: [
    { name: "Housing", color: "#2f6f8f", budget: "$1,400", quip: "Four walls, one landlord." },
    { name: "Groceries", color: "#6aa84f", budget: "$450", quip: "Yes, you needed all of it." },
    { name: "Dining out", color: "#e07a3f", budget: "$280", quip: "Worth it. Mostly." },
    { name: "Transport", color: "#8a6bd1", budget: "$220", quip: "Getting from A to B." },
    { name: "Subscriptions", color: "#c2417a", budget: "$90", quip: "Do you still watch that one?" },
    { name: "Health", color: "#d1495b", budget: "$150", quip: "Your future self says thanks." },
  ],
  goals: [
    { name: "Emergency fund", target: "$15,000", saved: "$12,840", pct: 86, deadline: "Dec 2026", nudge: "Nearly there. Future you is already relaxed." },
    { name: "Trip to Japan", target: "$4,500", saved: "$1,980", pct: 44, deadline: "Apr 2027", nudge: "Ramen budget is safe." },
    { name: "New laptop", target: "$2,200", saved: "$1,650", pct: 75, deadline: "Nov 2026", nudge: "Three good weeks away." },
    { name: "Home deposit", target: "$40,000", saved: "$9,200", pct: 23, deadline: "Jun 2029", nudge: "Long game. Steady wins." },
  ],
  analytics: [
    { label: "Net worth", value: "$44,462", note: "Everything you own minus everything you owe" },
    { label: "Savings rate", value: "31%", note: "Share of income you kept" },
    { label: "Avg monthly spend", value: "$3,212", note: "Last three months" },
    { label: "Investment return", value: "+6.5%", note: "Year to date" },
  ],
};

// ─── AETHERIS BLOCKCHAIN ─────────────────────────────────
export const aetheris = {
  liveUrl: "https://aetheris-blockchain.vercel.app/",
  productName: "AETHERIS",
  ticker: "AETH",
  tagline: "The foundational Layer-1 for the next internet.",
  description: "Parallel execution. Zero-knowledge settlement. Sequencing nobody owns. Built for the day a billion people show up.",
  manifesto: ["Blocks are a bottleneck.", "Proofs are the new trust.", "Order belongs to everyone."],
  liveStats: [
    { value: "184k", label: "TPS", detail: "Sustained, parallel lanes" },
    { value: "0.8s", label: "Finality", detail: "Proof-settled" },
    { value: "$0.0004", label: "Median fee", detail: "Not a typo" },
    { value: "4,210", label: "Validators", detail: "Across 96 countries" },
  ],
  pillars: [
    { glyph: "||", title: "Parallel execution", line: "Transactions that don't touch each other don't wait for each other." },
    { glyph: "ZK", title: "Zero-knowledge settlement", line: "Prove it once. Verify it anywhere. Trust the math, not the middleman." },
    { glyph: "◇", title: "Decentralised sequencing", line: "No single operator decides what goes first. The network does." },
  ],
  ecosystem: [
    { name: "Orbitex", category: "DeFi", line: "A spot DEX with zero-slippage batch auctions.", status: "Live" },
    { name: "Lumen Lend", category: "DeFi", line: "Lending markets that settle in under a second.", status: "Live" },
    { name: "Voidrunners", category: "Gaming", line: "An on-chain space sim with 10,000 concurrent pilots.", status: "Beta" },
    { name: "Proofworks", category: "Infrastructure", line: "Prover-as-a-service for teams that don't run hardware.", status: "Live" },
    { name: "Sigil", category: "Identity", line: "Private credentials you prove without revealing.", status: "Live" },
    { name: "Halo", category: "Social", line: "A feed you own, with portable followers.", status: "Beta" },
  ],
  governance: [
    { id: "AIP-052", title: "Raise lane cap from 192 to 256", status: "Voting", for: 71, against: 22 },
    { id: "AIP-051", title: "Fund the Prover Open Hardware program", status: "Voting", for: 58, against: 35 },
    { id: "AIP-050", title: "Reduce minimum validator stake by 15%", status: "Passed", for: 66, against: 28 },
    { id: "AIP-049", title: "Add encrypted mempool v2", status: "Executed", for: 83, against: 11 },
  ],
  tokenomics: {
    total: "1B AETH",
    allocation: [
      { label: "Community and rewards", pct: 38 },
      { label: "Ecosystem fund", pct: 20 },
      { label: "Core contributors", pct: 18 },
      { label: "Investors", pct: 14 },
      { label: "Foundation reserve", pct: 10 },
    ],
  },
};

// ─── CODEX KNOWLEDGE BASE ────────────────────────────────
export const codex = {
  liveUrl: "https://codex-iota-six.vercel.app/#/",
  productName: "Codex",
  tagline: "A knowledge base that lives in your browser and compiles your notes on the fly.",
  description: "A fast, private knowledge base. Write in Markdown, search everything instantly, and keep the data on your own machine.",
  heroStats: [
    { value: "6", label: "Routes", detail: "Library, reader, composer, editor, playground, guide." },
    { value: "0", label: "Backend services", detail: "No database, no API, no credentials." },
    { value: "1", label: "Render pipeline", detail: "One Markdown engine behind every view." },
  ],
  features: [
    { icon: "search", title: "Full-text search", blurb: "Finds matches in titles, descriptions, tags and the article body." },
    { icon: "tags", title: "Tag filtering", blurb: "Narrow the library to one topic in a click." },
    { icon: "list-tree", title: "Live table of contents", blurb: "Built from H2 and H3 headings, tracking where you are as you scroll." },
    { icon: "copy", title: "Copyable code blocks", blurb: "Prism highlighting for TS, JS, shell, YAML and more, with one-click copy." },
    { icon: "moon", title: "Light and dark themes", blurb: "Your choice is remembered between visits." },
    { icon: "download", title: "JSON backup", blurb: "Export everything to a dated file and restore it any time." },
  ],
  pipeline: [
    { step: "01", label: "Source", detail: "Built-in article or user Markdown." },
    { step: "02", label: "Lex", detail: "Marked builds tokens, the table of contents and stats." },
    { step: "03", label: "Highlight", detail: "Prism colours each fenced code block." },
    { step: "04", label: "Cache", detail: "renderCached() stores the HTML by key." },
    { step: "05", label: "Display", detail: "Library, reader, preview and playground show the result." },
  ],
  decisions: [
    { title: "Build tool", choice: "Vite", why: "Fast dev server and simple static builds." },
    { title: "Language", choice: "React + TypeScript", why: "Component composition with compile-time contracts." },
    { title: "Markdown", choice: "Marked + Prism", why: "Small, familiar and easy to extend." },
    { title: "Routing", choice: "Hash routes", why: "Deep links work on static hosts with no rewrites." },
    { title: "Storage", choice: "localStorage", why: "Private, zero-backend persistence." },
    { title: "Rendering", choice: "One shared pipeline", why: "Every view behaves the same and there's less to maintain." },
  ],
  limits: [
    { value: "220", suffix: " wpm", label: "Reading speed model", detail: "Plus 2.2 seconds per line of code." },
    { value: "110", suffix: " ms", label: "Playground debounce", detail: "Recompiles shortly after you stop typing." },
    { value: "8", label: "Tags per entry", detail: "Keeps cards tidy." },
    { value: "2.8", suffix: " s", label: "Toast lifetime", detail: "Short enough to stay out of the way." },
  ],
  screens: [
    { id: "library", title: "Library", route: "#/", caption: "Search across titles, descriptions, tags and article bodies." },
    { id: "reader", title: "Reader", route: "#/article/:slug", caption: "Read or view source, with a reading progress rail and a live table of contents." },
    { id: "composer", title: "Composer", route: "#/composer", caption: "Write or import Markdown with a live preview and frontmatter support." },
    { id: "playground", title: "Playground", route: "#/playground", caption: "Type Markdown and watch the compiler stats update as you go." },
    { id: "guide", title: "Guide", route: "#/guide", caption: "The in-app docs are Markdown too, rendered by the same pipeline." },
  ],
};

// ─── NEXUS WORKSPACE ─────────────────────────────────────
export const nexus = {
  liveUrl: "https://nexus-startup-pi.vercel.app/",
  productName: "Nexus",
  tagline: "Where fast teams stop losing the plot.",
  description: "A workspace and analytics platform for fast-moving teams. Tasks, metrics and team updates in one place.",
  stats: [
    { value: "12k+", label: "Teams onboard" },
    { value: "4.9/5", label: "Average rating" },
    { value: "38%", label: "Fewer status meetings" },
    { value: "99.9%", label: "Uptime" },
  ],
  features: [
    { icon: "layout-grid", title: "Drag-and-drop boards", blurb: "Move work around like it's a deck of cards." },
    { icon: "bar-chart-3", title: "Live dashboards", blurb: "Numbers that update before you finish your coffee." },
    { icon: "shield-check", title: "Secure by default", blurb: "Sign in once. Sleep well." },
    { icon: "zap", title: "Real-time sync", blurb: "Everyone sees the same thing, right now." },
    { icon: "sparkles", title: "Interface that feels good", blurb: "Smooth scrolling and tiny animations." },
    { icon: "party-popper", title: "Celebrate the wins", blurb: "Ship something? Here's some confetti." },
  ],
  testimonials: [
    { name: "Amaka Eze", role: "Founder, Loopwise", quote: "We cancelled three tools the week we moved to Nexus. Nobody missed them." },
    { name: "Daniel Reyes", role: "CTO, Pixelforge", quote: "The board is so smooth my team now drags things around just for fun." },
    { name: "Sofia Lindgren", role: "Head of Ops, Quanta", quote: "Our Monday status meeting went from an hour to fifteen minutes." },
    { name: "Tunde Bakare", role: "Product Lead, Orbitly", quote: "It's the first tool where dark mode looks designed, not just inverted." },
  ],
  pricing: [
    { name: "Starter", price: "Free", blurb: "For solo builders and small experiments.", features: ["Up to 3 members", "2 boards", "Basic dashboards"] },
    { name: "Pro", price: "$19/mo", blurb: "For teams that ship every week.", features: ["Up to 25 members", "Unlimited boards", "Live dashboards", "Real-time sync"], highlight: true },
    { name: "Scale", price: "$49/mo", blurb: "For growing companies with grown-up needs.", features: ["Unlimited members", "Role-based access", "Advanced analytics", "Custom integrations"] },
  ],
};

// ─── MERIDIAN GENERAL HOSPITAL ───────────────────────────
export const meridian = {
  liveUrl: "https://meridian-hospital-gray.vercel.app/",
  hospitalName: "MERIDIAN General Hospital",
  tagline: "Clinical trust, designed.",
  stats: [
    { value: "40+", label: "Years of care" },
    { value: "120", label: "Specialist doctors" },
    { value: "250k+", label: "Patients treated" },
    { value: "96%", label: "Patient satisfaction" },
  ],
  departments: [
    { name: "Cardiology", icon: "heart", blurb: "Hearts are our thing. Literally." },
    { name: "Neurology", icon: "brain", blurb: "Big brains for the brain." },
    { name: "Orthopaedics", icon: "bone", blurb: "Get back to the things you love." },
    { name: "Paediatrics", icon: "baby", blurb: "Small patients, big personalities." },
    { name: "Maternity", icon: "heart-handshake", blurb: "Welcome to the world, little one." },
    { name: "Oncology", icon: "ribbon", blurb: "Expert treatment, people in your corner." },
    { name: "Emergency", icon: "siren", blurb: "Open at 3am. Ready at 3am." },
    { name: "Diagnostics", icon: "scan", blurb: "Answers, fast." },
  ],
  featuredDoctors: [
    { name: "Dr. Amara Okonkwo", title: "Consultant Cardiologist", dept: "Cardiology", years: 18 },
    { name: "Dr. Priya Nair", title: "Consultant Neurologist", dept: "Neurology", years: 15 },
    { name: "Dr. Samuel Adeyemi", title: "Orthopaedic Surgeon", dept: "Orthopaedics", years: 12 },
    { name: "Dr. Elena Rossi", title: "Consultant Paediatrician", dept: "Paediatrics", years: 14 },
  ],
  values: [
    { label: "Patients first", sentence: "Every decision starts with the person in the bed." },
    { label: "Honest by default", sentence: "Clear prices, clear outcomes, clear conversations." },
    { label: "Calm is a skill", sentence: "We design spaces and routines that lower the temperature." },
    { label: "Always learning", sentence: "We're a teaching hospital. Curiosity is part of the job." },
  ],
  outcomes: [
    { label: "Cardiac surgery survival", value: "98.2%" },
    { label: "Stroke patients treated < 60min", value: "91%" },
    { label: "30-day readmission rate", value: "4.1%" },
    { label: "Infection rate", value: "0.8%" },
  ],
};

// ─── IRONMARK CONSTRUCTION ───────────────────────────────
export const ironmark = {
  liveUrl: "https://ironmark-construction-company.vercel.app/",
  companyName: "Ironmark Construction Group",
  tagline: "We build the stuff that stays standing.",
  stats: [
    { value: "25+", label: "Years building" },
    { value: "480", label: "Projects delivered" },
    { value: "1.2M", label: "Man-hours, incident-free" },
    { value: "98%", label: "On or ahead of schedule" },
  ],
  services: [
    { title: "Commercial", icon: "building", blurb: "Offices, retail and mixed-use that make tenants stay." },
    { title: "Industrial", icon: "factory", blurb: "Warehouses, plants and yards built for heavy duty." },
    { title: "Residential", icon: "home", blurb: "Homes and apartment blocks built like we'd live in them." },
    { title: "Infrastructure", icon: "bridge", blurb: "Roads, bridges and utilities that carry the everyday." },
  ],
  featuredProjects: [
    { title: "Meridian Tower", category: "Commercial", year: "2024", tagline: "A 28-storey tower that finished before the coffee machines arrived." },
    { title: "Cargo Point Hub", category: "Industrial", year: "2023", tagline: "Sixty-five thousand square metres, and not one wobbly floor." },
    { title: "Willow Court", category: "Residential", year: "2025", tagline: "180 homes, one very happy waiting list." },
    { title: "Harbour Link", category: "Infrastructure", year: "2022", tagline: "The bridge that cut a 40-minute detour down to five." },
  ],
  values: [
    { label: "Safety first", sentence: "Everyone goes home the same way they arrived." },
    { label: "Say it straight", sentence: "Clear prices, clear schedules, clear bad news." },
    { label: "Build to last", sentence: "We'd rather do it once than come back again." },
    { label: "Own the outcome", sentence: "Our name goes on the building." },
  ],
};

// ─── ABOUT ───────────────────────────────────────────────
export const bio = "I'm Mayor, a full-stack developer based in Port Harcourt, Nigeria. I build software that people actually use — mobile apps, web products, AI systems, and the infrastructure behind them. I care about shipping fast, measuring outcomes, and writing code that the next developer can understand. When I'm not building, I'm reading about systems thinking or walking along the waterfront.";

export interface TimelineEntry {
  year: string;
  title: string;
  org: string;
  detail: string;
}

export const timeline: TimelineEntry[] = [
  { year: "2026", title: "Independent developer", org: "Self-employed", detail: "Building products for clients and shipping my own apps." },
  { year: "2024", title: "Senior engineer", org: "Tidecraft Labs", detail: "Led mobile and AI teams. Shipped three products from zero to launch." },
  { year: "2022", title: "Full-stack developer", org: "Canopy Digital", detail: "Built web platforms for editorial teams and small businesses." },
  { year: "2021", title: "Frontend developer", org: "BrightPath", detail: "First professional role. Built React apps for healthcare clients." },
  { year: "2020", title: "Freelance developer", org: "Various", detail: "Took on small projects while finishing my CS degree." },
  { year: "2019", title: "CS degree", org: "University of Port Harcourt", detail: "Graduated with focus on software engineering and systems." },
];

export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["TypeScript", "Python", "Dart", "Rust", "Go", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Flutter", "Tailwind", "Framer Motion"] },
  { group: "Backend", items: ["Node", "FastAPI", "Postgres", "Redis", "Docker", "AWS"] },
  { group: "AI & Data", items: ["LLM integration", "RAG", "Vector DBs", "Evaluation", "Prompt design"] },
];

export const howIWork = [
  { label: "Start small", sentence: "Prototype in a week, validate in two, then invest." },
  { label: "Stay close", sentence: "I work directly with founders and product leads, no layers." },
  { label: "Leave it better", sentence: "Every project ends with docs, tests, and a handoff plan." },
];
