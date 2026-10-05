import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeader, PillTag, Reveal } from "../components/ui";
import { projects } from "../content";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const VALID_TYPES = ["All", "Web", "Mobile", "AI", "Systems"] as const;
const VALID_SORTS = ["newest", "category"] as const;

type ProjectType = (typeof VALID_TYPES)[number];
type SortType = (typeof VALID_SORTS)[number];
type Project = (typeof projects)[number];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border-l-2 border-ink pl-4">
      <div className="font-mono text-[11px] uppercase tracking-widest text-muted">{label}</div>
      <div className="mt-1 font-serif text-3xl font-bold text-ink">{value}</div>
    </div>
  );
}

function ProjectImage({ project, className = "", loading = "lazy" }: { project: Project; className?: string; loading?: "lazy" | "eager" }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} screenshot`} className={className} loading={loading} decoding="async" width={1200} height={800} />;
  }
  return (
    <div className={`relative flex items-center justify-center p-6 text-center ${className}`} style={{ backgroundColor: project.panelColor || "#111" }}>
      <div className="font-serif text-3xl font-bold tracking-tight text-white">{project.title}</div>
    </div>
  );
}

export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion() ?? false;
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const validType = (VALID_TYPES.includes(searchParams.get("type") as ProjectType) ? searchParams.get("type") : "All") as ProjectType;
  const validSort = (VALID_SORTS.includes(searchParams.get("sort") as SortType) ? searchParams.get("sort") : "newest") as SortType;

  const updateParams = useCallback((updates: Record<string, string>) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([k, v]) => (v === "All" || v === "newest" ? next.delete(k) : next.set(k, v)));
    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams]);

  const filtered = useMemo(() => {
    const base = validType === "All" ? [...projects] : projects.filter((p) => p.category === validType);
    return base.sort((a, b) => {
      // Put featured item first if applicable
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return validSort === "category" ? a.category.localeCompare(b.category) || b.year.localeCompare(a.year) : b.year.localeCompare(a.year);
    });
  }, [validType, validSort]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return counts;
  }, []);

  const stats = useMemo(() => ({
    total: projects.length,
    caseStudies: projects.filter((p) => p.hasCaseStudy).length,
    categories: new Set(projects.map((p) => p.category)).size,
    latestYear: projects.reduce((latest, p) => (p.year > latest ? p.year : latest), projects[0]?.year ?? ""),
  }), []);

  // Scroll spy for desktop sticky image sync
  useEffect(() => {
    if (!isDesktop) return;
    const handleScroll = () => {
      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
          setActiveIndex(idx);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop, filtered.length]);

  useEffect(() => { setActiveIndex(0); }, [validType, validSort]);

  const activeProject = filtered[activeIndex] ?? filtered[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-2 border-ink pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-28">
        <div className="relative mx-auto max-w-page px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader number="01" name="Selected Work & Case Studies" meta={`${filtered.length} of ${projects.length} built projects`} />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16">
            <div>
              <motion.h1 
                className="font-serif text-5xl font-extrabold tracking-tight text-ink sm:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              >
                Engineered Works.
              </motion.h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-muted sm:text-xl">
                A definitive catalog of production-grade web applications, automated systems, and intelligent machine learning architectures built for scale and performance.
              </p>
            </div>

            <motion.aside 
              className="border-2 border-ink bg-paper p-6 shadow-[4px_4px_0px_0px_#111]"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <Stat label="Total" value={stats.total} />
                <Stat label="Studies" value={stats.caseStudies} />
                <Stat label="Domains" value={stats.categories} />
                <Stat label="Epoch" value={stats.latestYear} />
              </div>
            </motion.aside>
          </div>

          {/* Inline Integrated Codex & Filter Controls */}
          <div className="mt-12 flex flex-col gap-4 border-t-2 border-ink pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {VALID_TYPES.map((cat) => {
                const isActive = validType === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => updateParams({ type: cat })}
                    aria-pressed={isActive}
                    className={`rounded-none border-2 px-5 py-2.5 font-mono text-xs uppercase tracking-widest font-bold transition-all ${
                      isActive ? "border-ink bg-ink text-paper shadow-[3px_3px_0px_0px_var(--color-accent,#e11d48)]" : "border-ink/30 bg-paper text-ink hover:border-ink"
                    }`}
                  >
                    {cat} <span className="ml-1.5 opacity-70">({categoryCounts[cat] ?? 0})</span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[200px]">
              <select
                aria-label="Sort projects"
                value={validSort}
                onChange={(e) => updateParams({ sort: e.target.value })}
                className="h-11 w-full appearance-none border-2 border-ink bg-paper px-4 font-mono text-xs uppercase tracking-widest font-bold text-ink focus:outline-none"
              >
                <option value="newest">Sort: Newest First</option>
                <option value="category">Sort: By Category</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Work Section: Sticky Image Left (Larger), Scroll Content Right */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-page px-5 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="border-2 border-dashed border-ink p-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-ink">No projects found in this category.</h2>
              <button type="button" onClick={() => updateParams({ type: "All", sort: "newest" })} className="mt-6 border-2 border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold text-paper shadow-[3px_3px_0px_0px_#111]">
                Reset Filters
              </button>
            </div>
          ) : isDesktop ? (
            <div className="grid grid-cols-12 gap-12 lg:items-start">
              {/* Left Sticky Image Column - Larger width (7 cols) */}
              <div className="col-span-7 sticky top-28">
                <div className="relative aspect-[16/10] w-full border-2 border-ink bg-paper shadow-[8px_8px_0px_0px_#111] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject?.slug}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 h-full w-full"
                    >
                      {activeProject && <ProjectImage project={activeProject} className="h-full w-full object-cover" loading="eager" />}
                      <div className="absolute bottom-4 left-4 border-2 border-ink bg-ink px-4 py-1.5 font-mono text-xs uppercase tracking-widest font-bold text-paper shadow-[2px_2px_0px_0px_#fff]">
                        {activeProject?.category} — {activeProject?.year}
                      </div>
                      {activeProject?.featured && (
                        <div className="absolute top-4 left-4 border-2 border-ink bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest font-bold text-paper shadow-[2px_2px_0px_0px_#111]">
                          Featured Project
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Scrolling Information Column (5 cols) */}
              <div className="col-span-5 flex flex-col gap-20 py-12">
                {filtered.map((project, index) => (
                  <div
                    key={project.slug}
                    ref={(el) => { itemRefs.current[index] = el; }}
                    className={`border-2 p-8 transition-colors ${activeIndex === index ? "border-ink bg-paper shadow-[6px_6px_0px_0px_#111]" : "border-ink/20 bg-paper/50 opacity-70 hover:opacity-100"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-xs uppercase tracking-widest font-bold text-muted">Artifact {String(index + 1).padStart(2, "0")} / {project.year}</div>
                      {project.featured && (
                        <span className="border border-ink bg-accent/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest font-bold text-ink">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted">{project.tagline}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (<PillTag key={tag}>{tag}</PillTag>))}
                    </div>
                    <div className="mt-8">
                      {project.hasCaseStudy ? (
                        <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-ink hover:text-accent">
                          <span>View Case Study</span> <ArrowUpRight size={16} strokeWidth={2} />
                        </Link>
                      ) : (
                        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Blueprint In Progress</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Mobile Stack
            <div className="flex flex-col gap-12">
              {filtered.map((project, index) => (
                <div key={project.slug} className="border-2 border-ink bg-paper p-6 shadow-[4px_4px_0px_0px_#111]">
                  <div className="relative aspect-[16/10] w-full border-2 border-ink mb-6 overflow-hidden">
                    <ProjectImage project={project} className="absolute inset-0 h-full w-full object-cover" />
                    {project.featured && (
                      <div className="absolute top-3 left-3 border-2 border-ink bg-accent px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest font-bold text-paper shadow-[2px_2px_0px_0px_#111]">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted">{project.category} — {project.year}</div>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (<PillTag key={tag}>{tag}</PillTag>))}
                  </div>
                  <div className="mt-6">
                    {project.hasCaseStudy ? (
                      <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-ink">
                        <span>View Case Study</span> <ArrowUpRight size={16} strokeWidth={2} />
                      </Link>
                    ) : (
                      <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Blueprint In Progress</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}