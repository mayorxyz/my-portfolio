import { SectionHeader, PrimaryButton, TextLink, PillTag, IconButton, Reveal } from "../components/ui";
import { apps, projects, capabilities, principles } from "../content";
import { Smartphone, Globe, Brain, Monitor } from "lucide-react";

function HeroIllustration() {
  return (
    <div className="w-full rounded-panel bg-navy overflow-hidden relative" style={{ height: "clamp(260px, 40vw, 420px)" }}>
      <svg viewBox="0 0 800 420" className="w-full h-full" aria-hidden="true">
        {/* Orbit ellipse */}
        <ellipse cx="400" cy="210" rx="180" ry="80" fill="none" stroke="#34425f" strokeWidth="1" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "400px 210px" }} />
        {/* Character - simple friendly figure */}
        <circle cx="400" cy="180" r="24" fill="#e8613c" opacity="0.9" />
        <rect x="388" y="204" width="24" height="36" rx="8" fill="#9ba5ba" />
        {/* Floating cube 1 */}
        <g className="animate-[float1_15s_ease-in-out_infinite]">
          <rect x="280" y="140" width="28" height="28" rx="4" fill="#34425f" stroke="#9ba5ba" strokeWidth="1" />
        </g>
        {/* Floating cube 2 */}
        <g className="animate-[float2_18s_ease-in-out_infinite]">
          <rect x="510" y="250" width="22" height="22" rx="3" fill="#e8613c" opacity="0.6" />
        </g>
        {/* HUD labels */}
        <text x="24" y="28" fill="#9ba5ba" fontSize="9" fontFamily="JetBrains Mono, monospace">LAT 4.815°N</text>
        <text x="24" y="40" fill="#9ba5ba" fontSize="9" fontFamily="JetBrains Mono, monospace">STATUS: BUILDING</text>
        <text x="680" y="28" fill="#9ba5ba" fontSize="9" fontFamily="JetBrains Mono, monospace">v2.6.1</text>
        <text x="680" y="400" fill="#9ba5ba" fontSize="9" fontFamily="JetBrains Mono, monospace">NODES: 7</text>
        <text x="24" y="400" fill="#9ba5ba" fontSize="9" fontFamily="JetBrains Mono, monospace">ORBIT: ACTIVE</text>
      </svg>
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[96px] leading-[1.0] lg:leading-[0.95] tracking-[-0.025em] text-ink max-w-[80%]">
            I build software people{" "}
            <em className="italic text-accent font-serif">actually use.</em>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-muted text-[15px] sm:text-base max-w-[520px] mt-6 leading-relaxed">
            Full-stack developer in Port Harcourt. I design, build, and ship products across mobile, web, AI, and systems.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <PrimaryButton to="/contact">Book a conversation</PrimaryButton>
            <TextLink to="/work">See the work</TextLink>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <ul className="mt-12 list-none p-0">
            {principles.map((p, i) => (
              <li key={i} className="flex gap-6 py-3 border-t border-line text-sm">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink">{p.sentence}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-12">
            <HeroIllustration />
          </div>
        </Reveal>
        <Reveal delay={500}>
          <p className="font-serif italic text-[15px] text-muted text-right mt-4">
            Original illustration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function AppsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32" id="apps">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="02" name="Live apps" meta="2026" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink">
            Seen on real{" "}
            <em className="italic text-accent font-serif">homescreens.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-muted text-[15px] sm:text-base mt-3 max-w-[520px]">
            The right product, on the right surface.
          </p>
        </Reveal>
        <div className="mt-12 list-none">
          {apps.map((app, i) => (
            <Reveal key={app.name} delay={Math.min(i * 60, 300)}>
              <div className="grid grid-cols-[56px_1fr_auto] sm:grid-cols-[56px_1fr_140px_36px] items-center gap-4 min-h-[88px] border-t border-line last:border-b hover:bg-ink/[0.03] transition-colors duration-180">
                <div className="w-14 h-14 rounded-[22%] shrink-0" style={{ backgroundColor: app.iconBg }} />
                <div className="min-w-0">
                  <h3 className="font-serif text-[22px] leading-[1.15] tracking-[-0.01em]">{app.name}</h3>
                  <p className="text-sm text-muted truncate">{app.description}</p>
                </div>
                <span className="hidden sm:inline-flex font-mono text-[10px] uppercase tracking-[0.12em] text-muted justify-self-end">
                  {app.platform}
                </span>
                <div className="hidden sm:flex gap-2">
                  <IconButton href="#" label={`Open ${app.name}`}>↗</IconButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function getCapIcon(icon: string) {
  switch (icon) {
    case "smartphone": return <Smartphone size={24} strokeWidth={1.5} />;
    case "brain": return <Brain size={24} strokeWidth={1.5} />;
    case "globe": return <Globe size={24} strokeWidth={1.5} />;
    case "monitor": return <Monitor size={24} strokeWidth={1.5} />;
    default: return <Globe size={24} strokeWidth={1.5} />;
  }
}

function WorkSection() {
  const showcaseProjects = projects.slice(0, 3);
  return (
    <section className="py-16 sm:py-20 lg:py-32" id="work">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="03" name="Selected work" meta="2024–2026" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink">
            Products with a{" "}
            <em className="italic text-accent font-serif">point of view.</em>
          </h2>
        </Reveal>

        {/* Showcase 1 - Wide panel */}
        <Reveal delay={200}>
          <article className="mt-16">
            <div className="flex justify-between mb-4">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
                <span className="text-accent">01</span> — {showcaseProjects[0].category}
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
                {showcaseProjects[0].year} · Web
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] lg:leading-[1.1] tracking-[-0.015em]">
              {showcaseProjects[0].title}
            </h3>
            <p className="text-muted text-[15px] sm:text-base mt-3 max-w-[640px]">{showcaseProjects[0].tagline}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {showcaseProjects[0].tags.map((t) => <PillTag key={t}>{t}</PillTag>)}
            </div>
            <div className="mt-4">
              <TextLink to={`/work/${showcaseProjects[0].slug}`}>See project</TextLink>
            </div>
            <div className="mt-8 rounded-panel overflow-hidden relative" style={{ background: showcaseProjects[0].panelColor, aspectRatio: "16/9" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[75%] rounded-media bg-paper/90 shadow-device flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-2xl text-ink">{showcaseProjects[0].title}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mt-2">Web Application</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Showcase 2 - Pair */}
        <Reveal delay={300}>
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {showcaseProjects.slice(1, 3).map((p) => (
              <article key={p.slug}>
                <div className="rounded-panel overflow-hidden" style={{ background: p.panelColor, aspectRatio: "4/3" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[60%] h-[70%] rounded-media bg-paper/90 shadow-device flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="font-serif text-xl text-ink">{p.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-2xl leading-[1.15] tracking-[-0.01em] mt-4">{p.title}</h3>
                <p className="text-sm text-muted mt-1">{p.tagline}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="04" name="Capabilities" dark />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-paper">
            One product brain.{" "}
            <em className="italic text-accent font-serif">Four ways to ship.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 border border-navy-line rounded-card overflow-hidden">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`p-8 min-h-[280px] flex flex-col hover:bg-white/[0.04] transition-colors duration-180 ${i >= 2 ? "border-t border-navy-line" : ""} ${i % 2 === 1 ? "sm:border-l sm:border-navy-line" : ""}`}
              >
                <div className="text-paper mb-4">{getCapIcon(cap.icon)}</div>
                <h3 className="font-serif text-[28px] leading-[1.1] text-paper">{cap.title}</h3>
                <p className="text-navy-muted text-[15px] mt-3 flex-1">{cap.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cap.tags.map((t) => <PillTag key={t} dark>{t}</PillTag>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
            <span className="text-accent">05</span> — Contact
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink mt-4">
            The best work starts with a{" "}
            <em className="italic text-accent font-serif">useful conversation.</em>
          </h2>
          <p className="text-muted text-[15px] sm:text-base mt-4 max-w-[480px] mx-auto">
            Let's talk about your project, timeline, and how I can help.
          </p>
          <div className="mt-8">
            <PrimaryButton to="/contact">Book 20 minutes</PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AppsSection />
      <WorkSection />
      <CapabilitiesSection />
      <ClosingCTA />
    </>
  );
}
