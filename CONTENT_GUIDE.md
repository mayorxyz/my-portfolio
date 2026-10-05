# Content Replacement Guide

This document lists all placeholder content that needs to be replaced with your real data.

## 📝 How to Replace Content

All content is in `src/content.ts`. Search for each section and replace the placeholder values.

---

## 👤 Personal Information

**Location in file:** `personalInfo` object

```typescript
export const personalInfo = {
  name: "Mayor",                    // → Your name
  role: "Full-stack developer",     // → Your role/title
  location: "Port Harcourt, NG",    // → Your location
  updated: "Oct 2026",              // → Current date
  status: "Available for projects", // → Your availability
  email: "hello@mayor.dev",         // → Your email
  socials: [
    { label: "@mayordev", href: "#" },      // → Your social links
    { label: "github/mayor", href: "#" },
    { label: "linkedin/mayor", href: "#" },
  ],
};
```

---

## 📱 Apps (8 placeholder apps)

**Location in file:** `apps` array

Replace each app with your real apps:

```typescript
{
  name: "Pulsekit",                    // → App name
  description: "Habit tracker that...", // → One-line description (8-14 words)
  platform: "iOS · Android",           // → Platform(s)
  color: "#5b4bd6",                    // → Brand color (hex)
  status: "Live",                      // → "Live" or "Beta"
  iconBg: "#5b4bd6"                    // → Icon background color
}
```

**Current placeholders:**
1. Pulsekit - Habit tracker
2. Fieldday - Outdoor activity planner
3. Notewell - Voice memo organizer
4. Stackwise - Kanban board
5. Lumenote - Reading companion
6. Gridform - Form builder
7. Tidepool - Finance dashboard
8. Calmcast - Meditation timer

---

## 💼 Projects (8 placeholder projects)

**Location in file:** `projects` array

Replace each project with your real projects:

```typescript
{
  slug: "orbit-market",              // → URL-friendly slug
  title: "Orbit Market",             // → Project title
  category: "Web",                   // → "Web" | "Mobile" | "AI" | "Systems"
  year: "2026",                      // → Year
  tagline: "A peer-to-peer...",      // → One-line tagline
  tags: ["React", "Node", ...],      // → 4 tech stack tags
  panelColor: "#e8855a",             // → Panel background color
  role: "Lead developer",            // → Your role
  summary: "Built a marketplace..."  // → 2-3 sentence summary
}
```

**Current placeholders:**
1. Nexus Workspace - Workspace platform (Web) - ✅ Already detailed
2. Meridian Hospital - Hospital website (Web) - ✅ Already detailed
3. Ironmark Construction - Construction company (Web) - ✅ Already detailed
4. Orbit Market - Marketplace (Web)
5. Fieldnotes - Journaling app (Mobile)
6. Lumen AI - Writing assistant (AI)
7. GridOps - Monitoring dashboard (Systems)
8. Canopy CMS - Headless CMS (Web)

---

## 📖 Case Studies (3 full case studies)

**Location in file:** `caseStudies` array

Each case study needs:

```typescript
{
  slug: "project-slug",              // → Must match a project slug
  title: "Project Title",
  category: "Web",
  year: "2026",
  stack: ["React", "Node"],          // → Tech stack
  timeline: "4 months",              // → Project duration
  platform: "Web",                   // → Platform
  role: "Lead developer",
  
  problem: "Problem description...", // → 2-3 sentences
  
  approach: [                        // → 3 bullet points
    "Approach point 1",
    "Approach point 2",
    "Approach point 3"
  ],
  
  architectureNodes: [               // → 5-7 nodes for diagram
    { id: "client", label: "React", x: 100, y: 200 },
    // ... more nodes
  ],
  
  architectureEdges: [               // → Connections between nodes
    ["client", "api"],
    ["api", "db"]
  ],
  
  stats: [                           // → 3 key metrics
    { value: "200+", label: "Users" },
    { value: "1.8s", label: "Load time" },
    { value: "94%", label: "Completion" }
  ],
  
  chartA: [                          // → 12 monthly data points (line chart)
    { month: "Jan", value: 12 },
    { month: "Feb", value: 18 },
    // ... through Dec
  ],
  
  chartB: [                          // → 5-6 categories (bar chart)
    { category: "Browse", value: 85 },
    { category: "Cart", value: 62 },
    // ... more categories
  ],
  
  nextSteps: [                       // → 3 future plans
    "Add feature X",
    "Improve Y",
    "Build Z"
  ],
  
  panelColor: "#e8855a"              // → Must match project panelColor
}
```

**Current case studies:**
1. Nexus Workspace (Web) - ✅ Already detailed
2. Meridian Hospital (Web) - ✅ Already detailed
3. Ironmark Construction (Web) - ✅ Already detailed
4. Orbit Market (Web)

---

## 🎯 Capabilities (4 capabilities)

**Location in file:** `capabilities` array

```typescript
{
  title: "Mobile products",          // → Capability title
  description: "Native and cross-platform...", // → 2 sentences
  tags: ["Flutter", "React Native"], // → 3 relevant tags
  icon: "smartphone"                 // → "smartphone" | "brain" | "globe" | "monitor"
}
```

**Current capabilities:**
1. Mobile products
2. AI agents
3. Web products
4. Desktop and systems

---

## 💡 Principles (3 principles)

**Location in file:** `principles` array

```typescript
{
  label: "Ship weekly",              // → Short label (2-3 words)
  sentence: "Small releases beat..." // → One sentence (<12 words)
}
```

**Current principles:**
1. Ship weekly
2. Measure first
3. Write it down

---

## 👨‍💻 About Page

### Bio
**Location:** `bio` constant

Replace with your bio (90-120 words, first person):

```typescript
export const bio = "I'm Mayor, a full-stack developer...";
```

### Timeline (6 entries)
**Location:** `timeline` array

```typescript
{
  year: "2026",                      // → Year
  title: "Independent developer",    // → Role/title
  org: "Self-employed",              // → Company/organization
  detail: "Building products..."     // → One-line description
}
```

**Current timeline:**
1. 2026 - Independent developer
2. 2024 - Senior engineer at Tidecraft Labs
3. 2022 - Full-stack developer at Canopy Digital
4. 2021 - Frontend developer at BrightPath
5. 2020 - Freelance developer
6. 2019 - CS degree

### Skills (4 groups)
**Location:** `skills` array

```typescript
{
  group: "Languages",                // → Skill category
  items: ["TypeScript", "Python"]    // → 4-6 skills
}
```

**Current skill groups:**
1. Languages (6 items)
2. Frontend (5 items)
3. Backend (6 items)
4. AI & Data (5 items)

### How I Work (3 principles)
**Location:** `howIWork` array

```typescript
{
  label: "Start small",              // → Principle label
  sentence: "Prototype in a week..." // → One sentence
}
```

**Current principles:**
1. Start small
2. Stay close
3. Leave it better

---

## 🚀 Nexus Workspace (Special Project)

**Location:** `nexus` object

This project has additional detailed content:

```typescript
export const nexus = {
  liveUrl: "https://nexus-startup-pi.vercel.app/",
  productName: "Nexus",
  tagline: "Where fast teams stop losing the plot.",
  description: "A workspace and analytics platform for fast-moving teams.",
  
  stats: [                           // → 4 platform metrics
    { value: "12k+", label: "Teams onboard" },
    // ...
  ],
  
  features: [                        // → 6 key features
    {
      icon: "layout-grid",           // → "layout-grid" | "bar-chart-3" | "shield-check" | "zap" | "sparkles" | "party-popper"
      title: "Drag-and-drop boards",
      blurb: "Move work around like it's a deck of cards."
    },
    // ...
  ],
  
  testimonials: [                    // → 4 customer testimonials
    {
      name: "Amaka Eze",
      role: "Founder, Loopwise",
      quote: "We cancelled three tools the week we moved to Nexus."
    },
    // ...
  ],
  
  pricing: [                         // → 3 pricing tiers
    {
      name: "Starter",
      price: "Free",
      blurb: "For solo builders and small experiments.",
      features: ["Up to 3 members", "2 boards", "Basic dashboards"],
      highlight: false               // → true for highlighted plan
    },
    // ...
  ]
};
```

---

## 🏥 Meridian General Hospital (Special Project)

**Location:** `meridian` object

This project has additional detailed content:

```typescript
export const meridian = {
  liveUrl: "https://meridian-hospital-gray.vercel.app/",
  hospitalName: "MERIDIAN General Hospital",
  tagline: "Clinical trust, designed.",
  
  stats: [                           // → 4 hospital stats
    { value: "40+", label: "Years of care" },
    // ...
  ],
  
  departments: [                     // → 8 medical departments
    {
      name: "Cardiology",
      icon: "heart",                 // → "heart" | "brain" | "bone" | "baby" | "heart-handshake" | "ribbon" | "siren" | "scan"
      blurb: "Hearts are our thing."
    },
    // ...
  ],
  
  featuredDoctors: [                 // → 4 featured doctors
    {
      name: "Dr. Amara Okonkwo",
      title: "Consultant Cardiologist",
      dept: "Cardiology",
      years: 18
    },
    // ...
  ],
  
  outcomes: [                        // → 4 clinical outcomes
    {
      label: "Cardiac surgery survival",
      value: "98.2%"
    },
    // ...
  ],
  
  values: [                          // → 4 hospital values
    {
      label: "Patients first",
      sentence: "Every decision starts with..."
    },
    // ...
  ]
};
```

---

## 🏗️ Ironmark Construction (Special Project)

**Location:** `ironmark` object

This project has additional detailed content:

```typescript
export const ironmark = {
  liveUrl: "https://ironmark-construction-company.vercel.app/",
  companyName: "Ironmark Construction Group",
  tagline: "We build the stuff that stays standing.",
  
  stats: [                           // → 4 company stats
    { value: "25+", label: "Years building" },
    // ...
  ],
  
  services: [                        // → 4 service categories
    {
      title: "Commercial",
      icon: "building",              // → "building" | "factory" | "home" | "bridge"
      blurb: "Offices, retail..."
    },
    // ...
  ],
  
  featuredProjects: [                // → 4 featured projects
    {
      title: "Meridian Tower",
      category: "Commercial",
      year: "2024",
      tagline: "A 28-storey tower..."
    },
    // ...
  ],
  
  values: [                          // → 4 company values
    {
      label: "Safety first",
      sentence: "Everyone goes home..."
    },
    // ...
  ]
};
```

---

## 🎨 Images and Illustrations

### Current Approach
- All illustrations are inline SVG (no external images)
- Hero illustration: Custom SVG with orbit, cubes, HUD labels
- Project covers: SVG device mockups or custom illustrations
- Ironmark cover: Custom construction-themed SVG

### To Replace with Real Images
If you want to use real images instead of SVG:

1. Add images to `public/images/` folder
2. Update components to use `<img>` tags
3. Update `DeviceMockup` component to accept image URLs

Example:
```typescript
function DeviceMockup({ color, title, imageUrl }: { color: string; title: string; imageUrl?: string }) {
  return (
    <div className="rounded-panel overflow-hidden relative" style={{ background: color, aspectRatio: "16/9" }}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      ) : (
        // ... existing SVG mockup
      )}
    </div>
  );
}
```

---

## 📊 Charts

Charts are generated from data in case studies:

- **Chart A (Line):** 12 monthly data points showing growth/trends
- **Chart B (Bar):** 5-6 categories showing distribution/usage

Update the `chartA` and `chartB` arrays in each case study with your real metrics.

---

## 🔗 Links to Update

### Social Links
- `personalInfo.socials` - Update href values
- Footer social links - Auto-generated from `personalInfo.socials`

### Project Links
- Each project's `slug` determines its URL: `/work/{slug}`
- Update slugs to match your project names

### External Links
- Ironmark live preview URL: `ironmark.liveUrl`
- Any "View live" or "Visit site" links

---

## ✅ Checklist

Before launching, verify:

- [ ] All personal info updated
- [ ] All 8 apps replaced with real apps (or removed)
- [ ] All 8 projects replaced with real projects
- [ ] At least 3 case studies completed with real data
- [ ] Bio written (90-120 words)
- [ ] Timeline updated with real experience
- [ ] Skills updated with your actual skills
- [ ] Email address updated
- [ ] Social links working
- [ ] All images/illustrations replaced (if using real images)
- [ ] Contact form tested
- [ ] All links tested
- [ ] Meta description updated in `index.html`
- [ ] Open Graph tags updated in `index.html`
- [ ] Favicon added (optional)

---

## 🎯 Quick Start

1. Open `src/content.ts`
2. Start with `personalInfo` - add your name, email, etc.
3. Replace `apps` array with your real apps (or delete if you don't have apps)
4. Replace `projects` array with your real projects
5. Create case studies for your best 3 projects
6. Update `bio`, `timeline`, `skills` in the About section
7. Test all pages locally
8. Build and deploy

---

**Need help?** Check the main README.md for more details on the design system and customization options.
