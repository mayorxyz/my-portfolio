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
    { label: "@mayordev", href: "#" },
    { label: "github/mayor", href: "#" },
    { label: "linkedin/mayor", href: "#" },
  ],
};

// ─── APPS ────────────────────────────────────────────────
export interface App {
  name: string;
  description: string;
  platform: string;
  color: string;
  status: "Live" | "Beta";
  iconBg: string;
}

export const apps: App[] = [
  { name: "Pulsekit", description: "Habit tracker that adapts to your energy levels daily.", platform: "iOS · Android", color: "#5b4bd6", status: "Live", iconBg: "#5b4bd6" },
  { name: "Fieldday", description: "Outdoor activity planner with weather-aware suggestions.", platform: "iOS", color: "#2d8a4e", status: "Live", iconBg: "#2d8a4e" },
  { name: "Notewell", description: "Voice memo organizer that transcribes and tags automatically.", platform: "Web", color: "#c44b2f", status: "Live", iconBg: "#c44b2f" },
  { name: "Stackwise", description: "Kanban board built for solo developers shipping fast.", platform: "Web · Desktop", color: "#1d6b8a", status: "Live", iconBg: "#1d6b8a" },
  { name: "Lumenote", description: "Reading companion that surfaces your highlights contextually.", platform: "iOS · Android", color: "#8a6b1d", status: "Beta", iconBg: "#8a6b1d" },
  { name: "Gridform", description: "Form builder with conditional logic and offline support.", platform: "Web", color: "#6b1d8a", status: "Live", iconBg: "#6b1d8a" },
  { name: "Tidepool", description: "Personal finance dashboard with spending pattern insights.", platform: "iOS", color: "#1d8a7a", status: "Beta", iconBg: "#1d8a7a" },
  { name: "Calmcast", description: "Meditation timer with ambient soundscapes and streaks.", platform: "iOS · Android", color: "#4b5b8a", status: "Live", iconBg: "#4b5b8a" },
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
}

export const projects: Project[] = [
  { slug: "orbit-market", title: "Orbit Market", category: "Web", year: "2026", tagline: "A peer-to-peer marketplace for local artisans and makers.", tags: ["React", "Node", "Postgres", "Stripe"], panelColor: "#e8855a", role: "Lead developer", summary: "Built a marketplace connecting 200+ local artisans with buyers. Focused on fast load times, simple checkout, and a clean seller dashboard." },
  { slug: "fieldnotes-app", title: "Fieldnotes", category: "Mobile", year: "2025", tagline: "Offline-first journaling app for researchers in remote areas.", tags: ["Flutter", "SQLite", "Dart"], panelColor: "#a9d6c9", role: "Solo developer", summary: "Designed and shipped a journaling app that works fully offline and syncs when connected. Used by 12 field researchers across three countries." },
  { slug: "lumen-ai", title: "Lumen AI", category: "AI", year: "2026", tagline: "AI assistant that drafts, reviews, and learns from your writing.", tags: ["Python", "FastAPI", "LLM", "React"], panelColor: "#c8bdf0", role: "AI engineer", summary: "Built an AI writing assistant that adapts to the user's voice over time. Handles drafting, editing, and tone adjustment across long-form content." },
  { slug: "gridops", title: "GridOps", category: "Systems", year: "2025", tagline: "Infrastructure monitoring dashboard for small engineering teams.", tags: ["Go", "Grafana", "Docker", "React"], panelColor: "#d8c9a0", role: "Systems engineer", summary: "Created a lightweight monitoring tool that surfaces only what matters. Reduced alert fatigue by 60% for the pilot team of 8 engineers." },
  { slug: "canopy-cms", title: "Canopy CMS", category: "Web", year: "2024", tagline: "Headless CMS designed for content teams who hate complexity.", tags: ["Next.js", "Prisma", "TypeScript"], panelColor: "#e8a9dd", role: "Full-stack developer", summary: "Built a headless CMS with a visual editor that non-technical writers actually enjoy using. Now powering 14 editorial sites." },
  { slug: "pulse-analytics", title: "Pulse Analytics", category: "AI", year: "2026", tagline: "Real-time analytics with natural language queries.", tags: ["Python", "React", "D3", "LLM"], panelColor: "#5b8a6b", role: "Lead developer", summary: "Built an analytics dashboard where users ask questions in plain English and get charts back. Processes 2M events per day for the beta cohort." },
  { slug: "terravault", title: "TerraVault", category: "Systems", year: "2024", tagline: "Encrypted file storage with zero-knowledge architecture.", tags: ["Rust", "WebCrypto", "S3", "React"], panelColor: "#1d2b47", role: "Security-focused dev", summary: "Built end-to-end encrypted storage where the server never sees plaintext. Handles files up to 5GB with resumable uploads." },
  { slug: "harbor-app", title: "Harbor", category: "Mobile", year: "2025", tagline: "Neighborhood safety network with anonymous reporting.", tags: ["React Native", "Firebase", "Maps"], panelColor: "#c44b2f", role: "Mobile developer", summary: "Shipped a community safety app with anonymous reporting, verified incidents, and real-time alerts. Active in 6 neighborhoods." },
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
}

export const capabilities: Capability[] = [
  { title: "Mobile products", description: "Native and cross-platform apps built for real usage patterns. Offline-first, fast, and respectful of battery and data.", tags: ["Flutter", "React Native", "Swift"], icon: "smartphone" },
  { title: "AI agents", description: "Practical AI features that solve specific problems. Not demos — production systems with evaluation, fallbacks, and clear user trust.", tags: ["LLM", "RAG", "Python"], icon: "brain" },
  { title: "Web products", description: "Full-stack web apps from idea to deployment. Fast, accessible, and built with maintainability as a first-class concern.", tags: ["React", "Next.js", "Node"], icon: "globe" },
  { title: "Desktop and systems", description: "Tools that live on the machine. CLI utilities, desktop apps, and infrastructure that engineering teams actually want to use.", tags: ["Rust", "Go", "Electron"], icon: "monitor" },
];

// ─── PRINCIPLES ──────────────────────────────────────────
export const principles = [
  { label: "Ship weekly", sentence: "Small releases beat big launches every time." },
  { label: "Measure first", sentence: "Decisions start with data, not opinions." },
  { label: "Write it down", sentence: "If it isn't documented, it doesn't exist." },
];

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
