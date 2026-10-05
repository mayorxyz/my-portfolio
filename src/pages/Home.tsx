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
    
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

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
        <circle cx="400" cy="180" r="24" fill="#e8613c" opacity="0.9" />
        <rect x="388" y="204" width="24" height="36" rx="8" fill="#9ba5ba" />
        <g
          className="animate-float1 motion-reduce:animate-none"
          style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }}
        >
          <rect x="280" y="140" width="28" height="28" rx="4" fill="#34425f" stroke="#9ba5ba" strokeWidth="1" />
        </g>
        <g
          className="animate-float2 motion-reduce:animate-none"
          style={{ transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)` }}
        >
          <rect x="510" y="250" width="22" height="22" rx="3" fill="#e8613c" opacity="0.6" />
        </g>
        <g className="hidden sm:block">
          <text x="24" y="28" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">LAT 4.815°N</text>
          <text x="24" y="44" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">STATUS: BUILDING</text>
          <text x="640" y="28" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">v2.6.1</text>
          <text x="640" y="400" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">NODES: 7</text>
          <text x="24" y="400" fill="#9ba5ba" fontSize="11" fontFamily="JetBrains Mono, monospace">ORBIT: ACTIVE</text>
        </g>
      </svg>
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
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-pill border border-line">
            <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              {personalInfo?.status || "Available for work"}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
            <PrimaryButton to="/contact">Book a conversation</PrimaryButton>
            <Link
              to="/work"
              className="inline-flex h-[48px] items-center justify-center rounded-full border border-ink px-6 font-sans text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See the work
            </Link>
          </div>
        </Reveal>

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

        <Reveal delay={400}>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 list-none p-0">
            {(principles || []).map((p, i) => (
              <li key={i} className="flex gap-4 py-3 border-t border-line md:border-t-0 md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0 text-sm">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-sans font-medium text-ink">{p?.label}</div>
                  <div className="text-muted text-[14px] mt-1">{p?.sentence}</div>
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
              {item?.type === "testimonial" && item?.quote && (
                <>
                  <p className="font-serif text-2xl leading-[1.15] text-ink">"{item.quote}"</p>
                  {(item?.name || item?.role) && (
                    <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                      {item.name}{item.role ? ` · ${item.role}` : ""}
                    </p>
                  )}
                </>
              )}
              {item?.type === "metric" && item?.value && (
                <>
                  <div className="font-serif text-5xl text-ink">{item.value}</div>
                  {item?.label && (
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
  if (!apps || apps.length === 0) return null;

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
            <Reveal key={app?.name || i} delay={Math.min(i * 60, 300)}>
              <Link
                to={app?.href && app.href !== "#" ? app.href : "#"}
                onClick={(e) => { if (!app?.href || app.href === "#") e.preventDefault(); }}
                className="group grid grid-cols-[48px_1fr_auto] sm:grid-cols-[56px_1fr_auto_auto] items-center gap-4 min-h-[88px] border-t border-line last:border-b hover:bg-ink/[0.03] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {app?.icon ? (
                  <img
                    src={app.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm shrink-0 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm shrink-0 flex items-center justify-center font-bold text-ink" 
                    style={{ backgroundColor: app?.iconBg || '#e2e8f0' }} 
                  >
                    {app?.name?.charAt(0) || 'A'}
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-serif text-[22px] leading-[1.15] tracking-[-0.01em] group-hover:underline decoration-line underline-offset-4">
                    {app?.name}
                  </h3>
                  <p className="text-sm text-muted truncate">{app?.description}</p>
                  <div className="flex items-center gap-3 mt-1 sm:hidden">
                    <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                      {app?.platform}
                    </span>
                    <span className={`inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.12em] ${app?.status === "Live" ? "text-green-700" : "text-accent"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
                      {app?.status}
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1">
                  <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                    {app?.platform}
                  </span>
                  <span className={`inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.12em] ${app?.status === "Live" ? "text-green-700" : "text-accent"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
                    {app?.status}
                  </span>
                </div>
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
   WORK SECTION (BRUTALIST 3-PART CARD - Now Robust)
   ────────────────────────────────────────────────────────── */
function WorkSection() {
  const showcaseProjects = projects?.slice(0, 3) || [];
  if (showcaseProjects.length === 0) return null;

  const p1 = showcaseProjects[0];
  const p2 = showcaseProjects[1];
  const p3 = showcaseProjects[2];

  return (
    <section className="py-16 sm:py-20 lg:py-28" id="work" aria-labelledby="work-heading">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="03" name="Selected work" meta="2024–2026" />
        </Reveal>
        <Reveal delay={100}>
          <h2 id="work-heading" className="font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[1.0] lg:leading-[0.95] tracking-[-0.025em] text-ink">
            Products with a point of view.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 border-[3px] border-ink bg-paper shadow-[8px_8px_0px_0px_#000] flex flex-col rounded-none overflow-hidden">
            
            {/* Top Part: Featured Project */}
            <div className={`flex flex-col lg:flex-row ${p2 ? 'border-b-[3px]' : ''} border-ink`}>
              <div 
                className="w-full lg:w-[65%] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-ink p-8 sm:p-12 lg:p-20 flex items-center justify-center relative min-h-[400px]"
                style={{ backgroundColor: p1?.panelColor || '#9fbdda' }}
              >
                {p1?.image ? (
                  <img 
                    src={p1.image} 
                    alt={p1?.title || 'Project preview'} 
                    className="w-full max-w-[700px] h-auto border-[3px] border-ink shadow-[6px_6px_0px_0px_#000] rounded-none object-cover"
                  />
                ) : (
                  <div className="w-[80%] h-[300px] bg-paper border-[3px] border-ink shadow-[6px_6px_0px_0px_#000] flex items-center justify-center">
                    <span className="font-serif text-3xl">{p1?.title || 'Project'}</span>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-[35%] p-8 sm:p-12 flex flex-col justify-center bg-[#f5f2eb]">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-accent">01</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink border-[2px] border-ink px-2 py-1 bg-paper">{p1?.category || 'Project'}</span>
                </div>
                
                <h3 className="font-serif text-5xl sm:text-6xl bg-accent text-paper border-[3px] border-ink p-2 w-fit mb-2 leading-none">
                  {p1?.title || 'Untitled'}
                </h3>
                {p1?.tagline && (
                  <p className="font-serif text-xl sm:text-2xl bg-accent text-paper border-[3px] border-ink p-2 w-fit mb-8">
                    {p1.tagline}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {(p1?.tags || []).slice(0, 4).map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink border-[2px] border-ink px-2 py-1 bg-paper">
                      {t}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/work/${p1?.slug || ''}`} 
                  className="font-mono text-sm font-bold uppercase tracking-widest text-ink border-b-[3px] border-ink w-fit pb-1 hover:bg-ink hover:text-paper transition-colors duration-200"
                >
                  Visit product ↗
                </Link>
              </div>
            </div>

            {/* Bottom Part: Shrunk Projects (Conditionally Rendered) */}
            {showcaseProjects.length > 1 && (
              <div className={`flex flex-col sm:flex-row ${showcaseProjects.length === 2 ? 'sm:h-auto' : 'sm:h-[350px]'}`}>
                {/* Project 2 */}
                {p2 && (
                  <Link 
                    to={`/work/${p2?.slug || ''}`} 
                    className={`group relative w-full ${p3 ? 'sm:w-1/2 border-b-[3px] sm:border-b-0 sm:border-r-[3px]' : 'w-full border-b-[3px] sm:border-b-0'} border-ink p-8 flex items-center justify-center overflow-hidden min-h-[300px]`}
                    style={{ backgroundColor: p2?.panelColor || '#e2e8f0' }}
                  >
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink bg-paper border-[2px] border-ink px-2 py-1">02 / {p2?.title || 'Project'}</span>
                    </div>
                    {p2?.image ? (
                      <img 
                        src={p2.image} 
                        alt={p2?.title || 'Project preview'} 
                        className="w-[80%] max-w-[400px] h-auto border-[3px] border-ink shadow-[4px_4px_0px_0px_#000] rounded-none group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-[70%] h-[60%] bg-paper border-[3px] border-ink shadow-[4px_4px_0px_0px_#000] flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-300">
                        <span className="font-serif text-2xl">{p2?.title || 'Project'}</span>
                      </div>
                    )}
                  </Link>
                )}

                {/* Project 3 */}
                {p3 && (
                  <Link 
                    to={`/work/${p3?.slug || ''}`} 
                    className="group relative w-full sm:w-1/2 p-8 flex items-center justify-center overflow-hidden min-h-[300px]"
                    style={{ backgroundColor: p3?.panelColor || '#fef08a' }}
                  >
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink bg-paper border-[2px] border-ink px-2 py-1">03 / {p3?.title || 'Project'}</span>
                    </div>
                    {p3?.image ? (
                      <img 
                        src={p3.image} 
                        alt={p3?.title || 'Project preview'} 
                        className="w-[80%] max-w-[400px] h-auto border-[3px] border-ink shadow-[4px_4px_0px_0px_#000] rounded-none group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-[70%] h-[60%] bg-paper border-[3px] border-ink shadow-[4px_4px_0px_0px_#000] flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-300">
                        <span className="font-serif text-2xl">{p3?.title || 'Project'}</span>
                      </div>
                    )}
                  </Link>
                )}
              </div>
            )}
          </div>
        </Reveal>

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
  if (!howIWork || howIWork.length === 0) return null;

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
                  <div className="font-serif text-2xl leading-[1.15]">{item?.label}</div>
                  <div className="text-muted text-[15px] mt-2 leading-relaxed">{item?.sentence}</div>
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
function getCapIcon(icon: string) {
  switch (icon) {
    case "smartphone": return <Smartphone size={24} strokeWidth={1.5} />;
    case "brain": return <Brain size={24} strokeWidth={1.5} />;
    case "globe": return <Globe size={24} strokeWidth={1.5} />;
    case "monitor": return <Monitor size={24} strokeWidth={1.5} />;
    default: return <Globe size={24} strokeWidth={1.5} />;
  }
}

function CapabilitiesSection() {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section
      className="relative bg-navy pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
      id="capabilities"
      aria-labelledby="capabilities-heading"
    >
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
            {capabilities.map((cap, i) => {
              const capability = cap as typeof cap & {
                subtitle?: string;
                stack?: string[];
              };

              return (
                <div
                  key={cap?.title || i}
                  className={`p-8 min-h-[280px] flex flex-col hover:bg-paper/[0.02] transition-colors duration-200 border-navy-line ${i % 2 === 0 ? "border-r sm:border-r" : ""} ${i < 2 ? "border-b" : ""}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#9ba5ba]">
                      {String(i + 1).padStart(2, "0")} / {cap?.title}
                    </div>
                    <div className="text-paper p-3 rounded-full bg-paper/5 border border-paper/10">
                      {getCapIcon(cap?.icon)}
                    </div>
                  </div>
                  <h3 className="font-serif text-[28px] leading-[1.1] text-paper mt-auto">{capability?.subtitle || cap?.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(capability?.stack || []).map((s, idx) => (
                      <PillTag key={`${s}-${idx}`} dark>{s}</PillTag>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-paper min-h-screen">
      <Hero />
      <ProofStrip />
      <AppsSection />
      <WorkSection />
      <HowIWorkStrip />
      <CapabilitiesSection />
    </main>
  );
}