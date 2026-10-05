# Mayor — Full-Stack Developer Portfolio

A multi-page portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features an editorial cream paper design system with serif headlines, coral accents, and a warm, professional aesthetic.

## 🎨 Design System

**Mood:** Warm paper editorial
- Cream page background (#f1efe7)
- Serif headlines with one coral italic accent word per heading
- Tiny mono labels, hairline rules
- Pastel app tiles, one dark navy section per page
- No gradients, no card shadows

**Typography:**
- Headlines: Instrument Serif (400 weight)
- Body: Inter (400/500 weight)
- Labels: JetBrains Mono (uppercase, 0.12em tracking)

**Color Tokens:**
- Paper: `#f1efe7`
- Ink: `#141414`
- Muted: `#6b6a64`
- Line: `#d8d5ca`
- Accent: `#e8613c`
- Navy: `#1d2b47`
- Tile colors: Pink, Sand, Lilac, Mint

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

The development server will start at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Header, footer, floating nav, skip link
│   └── ui.tsx              # Reusable UI components (buttons, tags, reveals)
├── pages/
│   ├── Home.tsx            # Home page with hero, apps, work, capabilities
│   ├── Work.tsx            # Work index with filters
│   ├── CaseStudy.tsx       # Individual project case studies
│   ├── About.tsx           # About page with bio, timeline, skills
│   ├── Contact.tsx         # Contact form and info
│   └── NotFound.tsx        # 404 page
├── content.ts              # All content data (apps, projects, case studies)
├── App.tsx                 # Router setup
├── main.tsx                # Entry point
└── index.css               # Tailwind + design tokens
```

## 📝 Editing Content

All content is centralized in `src/content.ts`. This file contains:

### Apps Section
```typescript
export const apps: App[] = [
  {
    name: "App name",
    description: "One-line description",
    platform: "iOS · Android",
    color: "#5b4bd6",
    status: "Live",
    iconBg: "#5b4bd6"
  },
  // ... more apps
];
```

### Projects
```typescript
export const projects: Project[] = [
  {
    slug: "project-slug",
    title: "Project Title",
    category: "Web", // Web | Mobile | AI | Systems
    year: "2026",
    tagline: "One-line tagline",
    tags: ["React", "Node", "Postgres"],
    panelColor: "#e8855a",
    role: "Lead developer",
    summary: "2-3 sentence summary"
  },
  // ... more projects
];
```

### Case Studies
```typescript
export const caseStudies: CaseStudy[] = [
  {
    slug: "project-slug",
    title: "Project Title",
    category: "Web",
    year: "2026",
    stack: ["React", "Node"],
    timeline: "4 months",
    platform: "Web",
    role: "Lead developer",
    problem: "Problem description",
    approach: ["Approach point 1", "Approach point 2", "Approach point 3"],
    architectureNodes: [
      { id: "client", label: "React SPA", x: 100, y: 200 },
      // ... more nodes
    ],
    architectureEdges: [["client", "api"], ["api", "db"]],
    stats: [
      { value: "200+", label: "Active users" },
      // ... more stats
    ],
    chartA: [{ month: "Jan", value: 12 }, ...],
    chartB: [{ category: "Browse", value: 85 }, ...],
    nextSteps: ["Step 1", "Step 2", "Step 3"],
    panelColor: "#e8855a"
  },
  // ... more case studies
];
```

### Personal Info
```typescript
export const personalInfo = {
  name: "Mayor",
  role: "Full-stack developer",
  location: "Port Harcourt, NG",
  updated: "Oct 2026",
  status: "Available for projects",
  email: "hello@mayor.dev",
  socials: [
    { label: "@mayordev", href: "#" },
    // ... more socials
  ]
};
```

## 🎯 Routes

- `/` — Home page
- `/work` — Work index with category filters
- `/work/:slug` — Individual case study
- `/about` — About page
- `/contact` — Contact form
- `*` — 404 page

## 🎨 Design Principles

1. **Cream, not white** — Page background is #f1efe7, never pure white
2. **One accent word** — Every heading has exactly one italic coral accent phrase (1-3 words)
3. **Hairlines over boxes** — Structure uses 1px borders and spacing, not shadows
4. **Rationed color** — Neutrals everywhere, coral for emphasis, pastels only on app tiles
5. **Large radius** — Panels 28px, cards 24px, pills 999px

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (single column, 20px padding)
- **Tablet:** 640–1023px (2-column grids, 24px padding)
- **Desktop:** ≥ 1024px (full layout, 32px padding, max-width 1280px)

## ✨ Features

- **Scroll reveal animations** — Fade + 16px rise, 600ms, staggered
- **Page transitions** — 250ms fade between routes
- **Floating navigation** — Fixed bottom pill nav, hides on footer
- **Skip link** — Accessibility-first skip to content
- **Live preview** — Ironmark, Meridian & Nexus projects include iframe previews of the real sites
- **Inline SVG charts** — Line and bar charts with animations
- **Architecture diagrams** — SVG node/edge graphs
- **Form validation** — Client-side validation with success state
- **Featured project showcases** — Ironmark Construction, Meridian Hospital, Nexus Workspace & Codex with custom sections (departments, doctors, services, values, features, testimonials, pricing, pipeline, decisions, limits, screens)

## 🔧 Customization

### Changing Colors
Edit the `@theme` block in `src/index.css`:
```css
@theme {
  --color-paper: #f1efe7;
  --color-accent: #e8613c;
  /* ... */
}
```

### Adding a New Project
1. Add to `projects` array in `src/content.ts`
2. Add to `caseStudies` array if you want a full case study
3. The work page will automatically include it

### Changing Fonts
Update the Google Fonts link in `index.html` and the font families in `src/index.css`:
```css
--font-serif: "Instrument Serif", serif;
--font-sans: "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

## 📊 Performance

- **Lighthouse scores:** 95+ across all categories
- **Bundle size:** ~346KB JS (gzipped: ~108KB)
- **CSS:** ~27KB (gzipped: ~6KB)
- **Fonts:** Loaded with `font-display: swap`

## ♿ Accessibility

- Semantic HTML landmarks
- One H1 per page
- Alt text on all images
- Aria-labels on icon buttons
- Visible focus rings (2px accent, 2px offset)
- Skip link as first focusable element
- Respects `prefers-reduced-motion`
- Minimum 44×44px tap targets

## 🚢 Deployment

The project builds to static files in the `dist/` directory:

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## 📄 License

This is a personal portfolio template. Feel free to use it as inspiration, but please:
- Write your own content
- Create your own illustrations
- Don't copy the exact design or copy

## 🙏 Credits

Design inspired by editorial portfolio styles. Built with:
- React 18
- TypeScript
- Tailwind CSS v4
- React Router v6
- Framer Motion
- Lucide React (icons)

---

**Built by Mayor** — Full-stack developer in Port Harcourt, Nigeria
