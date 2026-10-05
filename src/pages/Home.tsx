import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader, PrimaryButton, TextLink, PillTag, Reveal } from "../components/ui";
import { apps, projects, capabilities, principles, proof, heroImage, personalInfo, howIWork } from "../content";
import { Smartphone, Globe, Brain, Monitor, ArrowUpRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   HERO
   ────────────────────────────────────────────────────────── */
function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if ("ontouchstart" in window) return;

    let rafId: number;
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setOffset({ x, y }));
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMove);
    return () => {
      el?.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-lg bg-navy overflow-hidden relative"
      style={{ height: "clamp(260px, 40vw, 420px)" }}
    >
      <svg
        viewBox="0 0 800 420"
        className="w-full h-full"
        role="img"
        aria-label="Abstract illustration of an orbiting workspace"
      >
        {/* Orbit ellipse */}
        <ellipse
          cx="400"
          cy="210"
          rx="180"
          ry="80"
          fill="none"
          stroke="#34425f"
          strokeWidth="1"
          className="animate-orbit motion-reduce:animate-none"
        />
        {/* Character */}
        <circle cx="400" cy="180" r="24" fill="#e8613c" opacity="0.9" />
        <rect x="388" y="204" width="24" height="36" rx="8" fill="#9ba5ba" />
        {/* Floating cube 1 */}
        <g
          className="animate-float1 motion-reduce:animate-none"
          style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }}
        >
          <rect x="280" y="140" width="28" height="28" rx="4" fill="#34425f" stroke="#9ba5ba" strokeWidth="1" />
        </g>
        {/* Floating cube 2 */}
        <g
          className="animate-float2 motion-reduce:animate-none"
          style={{ transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)` }}
        >
          <rect x="510" y="250" width="22" height="22" rx="3" fill="#e8613c" opacity="0.6" />
        </g>
        {/* HUD labels — hidden below sm */}
        <g className="hidden sm:block">
          <text x="24" y="28" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">LAT 4.815°N</text>
          <text x="24" y="44" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">STATUS: BUILDING</text>
          <text x="640" y="28" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">v2.6.1</text>
          <text x="640" y="400" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">NODES: 7</text>
          <text x="24" y="400" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">ORBIT: ACTIVE</text>
        </g>
      </svg>
      {/* Parallax disabled on touch */}
      {isTouch && <style>{`.animate-float1, .animate-float2 { animation: none !important; }`}</style>}
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24" aria-labelledby="hero-heading">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h1
            id="hero-heading"
            className="font-serif text-5xl sm:text-6xl lg:text-[96px] leading-[1.0] lg:leading-[0.95] tracking-[-0.025em] text-ink max-w-[14ch] lg:max-w-[18ch]"
          >
            I build software people{" "}
            <em className="italic text-accent font-serif">actually use.</em>
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-muted text-[15px] sm:text-base max-w-[520px] mt-6 leading-relaxed">
            Full-stack developer in Port Harcourt. I design, build, and ship products across mobile, web, AI, and systems.
          </p>
          <p className="text-muted text-[15px] sm:text-base max-w-[520px] mt-3 leading-relaxed">
            For founders and small teams who need a product shipped.
          </p>
        </Reveal>

        <Reveal delay={200}>
          {/* Availability badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-pill border border-line">
            <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              {personalInfo.status}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
            <PrimaryButton to="/contact">Book a conversation</PrimaryButton>
            <TextLink to="/work">See the work</TextLink>
          </div>
        </Reveal>

        {/* Hero visual */}
        <Reveal delay={300}>
          <div className="mt-12">
            {heroImage ? (
              <img
                src={heroImage}
                alt="Hero illustration"
                className="w-full rounded-lg"
                style={{ height: "clamp(260px, 40vw, 420px)", objectFit: "cover" }}
                width={1280}
                height={420}
              />
            ) : (
              <HeroIllustration />
            )}
          </div>
        </Reveal>

        {/* Principles — below hero visual, 3-column on md+ */}
        <Reveal delay={400}>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 list-none p-0">
            {principles.map((p, i) => (
              <li key={i} className="flex gap-4 py-3 border-t border-line md:border-t-0 md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0 text-sm">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-sans font-medium text-ink">{p.label}</div>
                  <div className="text-muted text-[14px] mt-1">{p.sentence}</div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   PROOF STRIP
   ────────────────────────────────────────────────────────── */
function ProofStrip() {
  if (!proof || proof.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 border-t border-b border-line" aria-label="Proof">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proof.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              {item.type === "testimonial" && item.quote && (
                <>
                  <p className="font-serif text-2xl leading-[1.15] text-ink">"{item.quote}"</p>
                  {(item.name || item.role) && (
                    <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                      {item.name}{item.role ? ` · ${item.role}` : ""}
                    </p>
                  )}
                </>
              )}
              {item.type === "metric" && item.value && (
                <>
                  <div className="font-serif text-5xl text-ink">{item.value}</div>
                  {item.label && (
                    <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">{item.label}</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   APPS
   ────────────────────────────────────────────────────────── */
function AppsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" id="apps" aria-labelledby="apps-heading">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="02" name="Live apps" meta="2026" />
        </Reveal>
        <Reveal delay={100}>
          <h2 id="apps-heading" className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink">
            Seen on real homescreens.
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
              <Link
                to={app.href && app.href !== "#" ? app.href : "#"}
                onClick={(e) => { if (!app.href || app.href === "#") e.preventDefault(); }}
                className="group grid grid-cols-[48px_1fr_auto] sm:grid-cols-[56px_1fr_auto_auto] items-center gap-4 min-h-[88px] border-t border-line last:border-b hover:bg-ink/[0.03] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {app.icon ? (
                  <img
                    src={app.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm shrink-0 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm shrink-0" style={{ backgroundColor: app.iconBg }} />
                )}
                <div className="min-w-0">
                  <h3 className="font-serif text-[22px] leading-[1.15] tracking-[-0.01em] group-hover:underline decoration-line underline-offset-4">
                    {app.name}
                  </h3>
                  <p className="text-sm text-muted truncate">{app.description}</p>
                  {/* Mobile: stack platform + status under description */}
                  <div className="flex items-center gap-3 mt-1 sm:hidden">
                    <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                      {app.platform}
                    </span>
                    <span className={`inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.12em] ${app.status === "Live" ? "text-green-700" : "text-accent"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
                      {app.status}
                    </span>
                  </div>
                </div>
                {/* Desktop: platform + status */}
                <div className="hidden sm:flex flex-col items-end gap-1">
                  <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                    {app.platform}
                  </span>
                  <span className={`inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.12em] ${app.status === "Live" ? "text-green-700" : "text-accent"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
                    {app.status}
                  </span>
                </div>
                {/* Arrow with "Open" label on hover */}
                <div className="relative w-11 h-11 grid place-items-center rounded-full border border-line group-hover:bg-ink group-hover:text-paper group-hover:border-ink transition-all duration-200 shrink-0">
                  <span className="font-mono text-[12px] uppercase tracking-[0.12em] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Open
                  </span>
                  <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:opacity-0 transition-opacity duration-200" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   WORK CARD (shared)
   ────────────────────────────────────────────────────────── */
function getCapIcon(icon: string) {
  switch (icon) {
    case "smartphone": return <Smartphone size={24} strokeWidth={1.5} />;
    case "brain": return <Brain size={24} strokeWidth={1.5} />;
    case "globe": return <Globe size={24} strokeWidth={1.5} />;
    case "monitor": return <Monitor size={24} strokeWidth={1.5} />;
    default: return <Globe size={24} strokeWidth={1.5} />;
  }
}

interface WorkCardProps {
  number: string;
  project: typeof projects[number];
  large?: boolean;
}

function WorkCard({ number, project, large = false }: WorkCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-lg"
    >
      <article className="transition-all duration-200 group-hover:-translate-y-1">
        <div className="flex justify-between mb-4">
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            <span className="text-accent">{number}</span> — {project.category}
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            {project.year} · {project.platform || "Web"}
          </span>
        </div>
        <h3 className={`font-serif leading-[1.05] tracking-[-0.015em] text-ink ${large ? "text-3xl sm:text-4xl lg:text-[44px]" : "text-2xl sm:text-3xl"}`}>
          {project.title}
        </h3>
        <p className="text-muted text-[15px] sm:text-base mt-3 max-w-[640px]">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 4).map((t) => <PillTag key={t}>{t}</PillTag>)}
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-ink underline decoration-line underline-offset-4 group-hover:decoration-ink transition-all duration-200">
          See project
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
        <div
          className={`mt-8 rounded-lg overflow-hidden relative transition-shadow duration-200 group-hover:shadow-lift`}
          style={{ background: project.panelColor, aspectRatio: large ? "16/9" : "4/3" }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
              width={1280}
              height={large ? 720 : 960}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70%] h-[75%] rounded-sm bg-paper/90 shadow-device flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                <div className="text-center px-4">
                  <div className="font-serif text-2xl text-ink">{project.title}</div>
                  <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted mt-2">
                    {project.platform || "Web"} Application
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

function WorkSection() {
  const showcaseProjects = projects.slice(0, 3);
  return (
    <section className="py-16 sm:py-20 lg:py-28" id="work" aria-labelledby="work-heading">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="03" name="Selected work" meta="2024–2026" />
        </Reveal>
        <Reveal delay={100}>
          {/* Larger statement heading for "Selected work" */}
          <h2 id="work-heading" className="font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[1.0] lg:leading-[0.95] tracking-[-0.025em] text-ink">
            Products with a point of view.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">
          <Reveal delay={200}>
            <WorkCard number="01" project={showcaseProjects[0]} large />
          </Reveal>

          <Reveal delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <WorkCard number="02" project={showcaseProjects[1]} />
              <WorkCard number="03" project={showcaseProjects[2]} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="mt-16 text-right">
            <TextLink to="/work">View all work</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   HOW I WORK STRIP
   ────────────────────────────────────────────────────────── */
function HowIWorkStrip() {
  return (
    <section className="py-12 sm:py-16 border-t border-b border-line" aria-labelledby="how-heading">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-between items-end border-b border-line pb-3 mb-10">
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              <span className="text-accent">—</span> How I work
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 id="how-heading" className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink">
            Three ways I ship.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0">
            {howIWork.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-serif text-2xl leading-[1.15]">{item.label}</div>
                  <div className="text-muted text-[15px] mt-2 leading-relaxed">{item.sentence}</div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   CAPABILITIES
   ────────────────────────────────────────────────────────── */
function CapabilitiesSection() {
  return (
    <section
      className="relative bg-navy pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
      id="capabilities"
      aria-labelledby="capabilities-heading"
    >
      {/* Soft gradient edge at top */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, var(--color-paper) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 relative">
        <Reveal>
          <SectionHeader number="04" name="Capabilities" dark />
        </Reveal>
        <Reveal delay={100}>
          <h2 id="capabilities-heading" className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-paper">
            One product brain. Four ways to ship.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 border border-navy-line overflow-hidden" style={{ borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }}>
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`p-8 min-h-[280px] flex flex-col hover:bg-white/[0.04] transition-colors duration-200 ${i >= 2 ? "border-t border-navy-line" : ""} ${i % 2 === 1 ? "sm:border-l sm:border-navy-line" : ""}`}
              >
                <div className="text-paper mb-4">{getCapIcon(cap.icon)}</div>
                <h3 className="font-serif text-[28px] leading-[1.1] text-paper">{cap.title}</h3>
                <p className="text-navy-muted text-[15px] mt-3 flex-1">{cap.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cap.tags.map((t) => <PillTag key={t} dark>{t}</PillTag>)}
                </div>
                {cap.projectSlug && (
                  <Link
                    to={`/work/${cap.projectSlug}`}
                    className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-paper underline decoration-navy-line underline-offset-4 hover:decoration-paper transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    See it in work
                    <span className="inline-block transition-transform duration-200 hover:translate-x-1">→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   CLOSING CTA
   ────────────────────────────────────────────────────────── */
function ClosingCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-40" id="contact" aria-labelledby="cta-heading">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            <span className="text-accent">05</span> — Contact
          </span>
          <h2 id="cta-heading" className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink mt-4">
            The best work starts with a{" "}
            <em className="italic text-accent font-serif">useful conversation.</em>
          </h2>
          <p className="text-muted text-[15px] sm:text-base mt-4 max-w-[480px] mx-auto">
            Let's talk about your project, timeline, and how I can help.
          </p>
          <p className="text-muted text-[15px] sm:text-base mt-2 max-w-[480px] mx-auto">
            I reply within one working day. No sales pitch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <PrimaryButton to="/contact">Book 20 minutes</PrimaryButton>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted hover:text-ink underline decoration-line underline-offset-4 hover:decoration-ink transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {personalInfo.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   HOME
   ────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <AppsSection />
      <WorkSection />
      <HowIWorkStrip />
      <CapabilitiesSection />
      <ClosingCTA />
    </>
  );
}
