import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader, PrimaryButton, TextLink, PillTag, Reveal } from "../components/ui";
import { projects, howIWork, personalInfo } from "../content";
import { ArrowUpRight, Grid3x3, List } from "lucide-react";

// Number to words mapping
const numberWords: Record<number, string> = {
  1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five",
  6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten",
  11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen",
};

// Valid filter and sort values
const VALID_TYPES = ["All", "Web", "Mobile", "AI", "Systems"] as const;
const VALID_SORTS = ["newest", "category"] as const;
const VALID_VIEWS = ["index", "grid"] as const;

type ProjectType = typeof VALID_TYPES[number];
type SortType = typeof VALID_SORTS[number];
type ViewType = typeof VALID_VIEWS[number];

// Poster fallback component
function ProjectPoster({ project, className = "" }: { project: typeof projects[0]; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ backgroundColor: project.panelColor }}
    >
      <div className="text-center px-6">
        <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-paper/90 leading-tight">
          {project.title}
        </div>
      </div>
    </div>
  );
}

// Project image or poster
function ProjectImage({ project, className = "", loading = "lazy" }: { 
  project: typeof projects[0]; 
  className?: string;
  loading?: "lazy" | "eager";
}) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className={className}
        loading={loading}
        width={1200}
        height={800}
      />
    );
  }
  return <ProjectPoster project={project} className={className} />;
}

export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewOffset, setPreviewOffset] = useState({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);

  // Parse URL params with validation
  const type = (searchParams.get("type") || "All") as ProjectType;
  const sort = (searchParams.get("sort") || "newest") as SortType;
  const view = (searchParams.get("view") || "index") as ViewType;

  const validType = VALID_TYPES.includes(type) ? type : "All";
  const validSort = VALID_SORTS.includes(sort) ? sort : "newest";
  const validView = VALID_VIEWS.includes(view) ? view : "index";

  // Update URL params
  const updateParams = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === "All" || value === "newest" || value === "index") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams, { replace: true });
  };

  // Filter and sort projects
  const filtered = useMemo(() => {
    let result = validType === "All" ? projects : projects.filter(p => p.category === validType);
    
    if (validSort === "category") {
      result = [...result].sort((a, b) => a.category.localeCompare(b.category));
    } else {
      result = [...result].sort((a, b) => b.year.localeCompare(a.year));
    }
    
    return result;
  }, [validType, validSort]);

  // Featured project
  const featured = useMemo(() => projects.find(p => p.featured), []);
  const showFeatured = featured && (validType === "All" || featured.category === validType);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Active project for preview
  const activeProject = filtered[activeIndex] || filtered[0];

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [validType, validSort]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (validView !== "index" || window.innerWidth < 1024) return;
      
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex(i => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(i => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && activeProject) {
        if (activeProject.hasCaseStudy) {
          window.location.href = `/work/${activeProject.slug}`;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [validView, filtered.length, activeProject]);

  // Preview parallax
  useEffect(() => {
    if (validView !== "index" || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const el = previewRef.current;
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
      
      setPreviewOffset({ x, y });
    };

    const el = previewRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, [validView]);

  // Check reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  return (
    <>
      {/* Header */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader number="01" name="Selected work" meta={`${filtered.length} of ${projects.length}`} />
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[1.0] lg:leading-[0.95] tracking-[-0.025em] text-ink mt-6">
              {numberWords[projects.length] || projects.length} things I've shipped.
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-muted text-[15px] sm:text-base mt-4 max-w-[640px] leading-relaxed">
              A selection of products I've designed and built, from mobile apps to blockchain protocols. Each project solved a real problem for real users.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky control bar */}
      <div className="sticky top-[73px] sm:top-[89px] bg-paper/95 backdrop-blur-sm border-b border-line z-10">
        <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            {/* Filter chips */}
            <div 
              className="flex gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0 lg:overflow-visible"
              role="group"
              aria-label="Filter projects"
            >
              {VALID_TYPES.map(cat => (
                <button
                  key={cat}
                  onClick={() => updateParams({ type: cat })}
                  aria-pressed={validType === cat}
                  className={`shrink-0 h-11 px-4 rounded-pill font-mono text-[12px] uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    validType === cat
                      ? "bg-ink text-paper"
                      : "bg-transparent text-muted hover:text-ink border border-line hover:border-ink"
                  }`}
                >
                  {cat} <span className="ml-1 opacity-60">{categoryCounts[cat] || 0}</span>
                </button>
              ))}
            </div>

            {/* Sort and view controls */}
            <div className="flex items-center gap-3 lg:ml-auto">
              <select
                value={validSort}
                onChange={(e) => updateParams({ sort: e.target.value })}
                className="h-11 px-4 pr-10 rounded-pill border border-line bg-transparent font-mono text-[12px] uppercase tracking-[0.12em] text-muted cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%236b6a64' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                aria-label="Sort projects"
              >
                <option value="newest">Newest first</option>
                <option value="category">By category</option>
              </select>

              <div className="hidden lg:flex items-center gap-1 border border-line rounded-pill p-1">
                <button
                  onClick={() => updateParams({ view: "index" })}
                  aria-pressed={validView === "index"}
                  aria-label="Index view"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    validView === "index" ? "bg-ink text-paper" : "text-muted hover:text-ink"
                  }`}
                >
                  <List size={16} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => updateParams({ view: "grid" })}
                  aria-pressed={validView === "grid"}
                  aria-label="Grid view"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    validView === "grid" ? "bg-ink text-paper" : "text-muted hover:text-ink"
                  }`}
                >
                  <Grid3x3 size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured block */}
      {showFeatured && featured && (
        <section className="py-12 sm:py-16 lg:py-20 border-b border-line">
          <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal>
              <Link
                to={featured.hasCaseStudy ? `/work/${featured.slug}` : "#"}
                onClick={(e) => !featured.hasCaseStudy && e.preventDefault()}
                className="group block focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                aria-disabled={!featured.hasCaseStudy}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden">
                    <ProjectImage project={featured} className="w-full h-full object-cover" loading="eager" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent">Featured</span>
                      <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">— {featured.category} · {featured.year}</span>
                    </div>
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-ink mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-muted text-[15px] sm:text-base leading-relaxed mb-6 max-w-[520px]">
                      {featured.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.tags.map(tag => <PillTag key={tag}>{tag}</PillTag>)}
                    </div>
                    {featured.hasCaseStudy && (
                      <div className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink group-hover:text-accent transition-colors duration-200">
                        View case study
                        <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                    {!featured.hasCaseStudy && (
                      <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                        Case study coming soon
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            // Empty state
            <div className="text-center py-20">
              <p className="font-serif text-3xl sm:text-4xl text-ink mb-4">No projects match this filter.</p>
              <button
                onClick={() => updateParams({ type: "All" })}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-pill bg-ink text-paper font-sans text-sm font-medium hover:bg-ink/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                Show all projects
              </button>
            </div>
          ) : validView === "index" ? (
            // Desktop index view
            <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-8 lg:gap-12">
              {/* Left: Project list */}
              <ul className="space-y-0">
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, index) => (
                    <motion.li
                      key={project.slug}
                      layout
                      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.25, delay: Math.min(index * 0.05, 0.15) }}
                    >
                      <Link
                        to={project.hasCaseStudy ? `/work/${project.slug}` : "#"}
                        onClick={(e) => !project.hasCaseStudy && e.preventDefault()}
                        onMouseEnter={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        className={`group relative block py-6 sm:py-8 border-t border-line last:border-b focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 transition-opacity duration-200 ${
                          activeIndex === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                        }`}
                        aria-disabled={!project.hasCaseStudy}
                      >
                        {/* Active indicator bar */}
                        {activeIndex === index && (
                          <div
                            className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                            style={{ backgroundColor: project.panelColor }}
                          />
                        )}

                        <div className="flex items-start justify-between gap-4 pl-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-ink mb-2">
                              {project.title}
                            </h3>
                            <p className="text-muted text-[15px] sm:text-base leading-relaxed line-clamp-2">
                              {project.tagline}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                              {project.year}
                            </span>
                            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                          activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        }`}>
                          <ArrowUpRight size={24} strokeWidth={1.5} className="text-accent" />
                        </div>

                        {!project.hasCaseStudy && (
                          <div className="mt-2 pl-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                            Case study coming soon
                          </div>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              {/* Right: Sticky preview */}
              <div className="hidden lg:block">
                <div
                  ref={previewRef}
                  className="sticky top-[180px] rounded-lg overflow-hidden border border-line"
                  aria-hidden="true"
                >
                  <AnimatePresence mode="wait">
                    {activeProject && (
                      <motion.div
                        key={activeProject.slug}
                        initial={prefersReducedMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={prefersReducedMotion ? {} : { opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <div
                            className="w-full h-full transition-transform duration-300"
                            style={{
                              transform: prefersReducedMotion ? "none" : `translate(${previewOffset.x}px, ${previewOffset.y}px) scale(1.05)`,
                            }}
                          >
                            <ProjectImage project={activeProject} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div className="p-6 bg-paper">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                              {activeProject.category} · {activeProject.year}
                            </span>
                          </div>
                          <p className="text-muted text-[15px] leading-relaxed mb-4">
                            {activeProject.tagline}
                          </p>
                          <p className="text-sm text-muted mb-4">
                            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink">Role:</span>{" "}
                            {activeProject.role}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {activeProject.tags.map(tag => <PillTag key={tag}>{tag}</PillTag>)}
                          </div>
                          <div className="flex flex-col gap-3">
                            {activeProject.hasCaseStudy && (
                              <Link
                                to={`/work/${activeProject.slug}`}
                                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink hover:text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                              >
                                View case study
                                <ArrowUpRight size={16} strokeWidth={1.5} />
                              </Link>
                            )}
                            {activeProject.liveUrl && (
                              <a
                                href={activeProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-muted hover:text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                              >
                                Visit live
                                <ArrowUpRight size={16} strokeWidth={1.5} />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ) : (
            // Grid view
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.25, delay: Math.min(index * 0.05, 0.15) }}
                  >
                    <Link
                      to={project.hasCaseStudy ? `/work/${project.slug}` : "#"}
                      onClick={(e) => !project.hasCaseStudy && e.preventDefault()}
                      className="group block rounded-lg overflow-hidden border border-line hover:shadow-float transition-shadow duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                      aria-disabled={!project.hasCaseStudy}
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
                          <ProjectImage project={project} className="w-full h-full object-cover" />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <p className="text-paper text-sm leading-relaxed mb-3">
                            {project.tagline}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-2 py-1 rounded-pill bg-paper/20 backdrop-blur-sm text-paper font-mono text-[12px] uppercase tracking-[0.12em]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-paper">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                            {project.category}
                          </span>
                          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                            · {project.year}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl leading-[1.15] tracking-[-0.01em] text-ink">
                          {project.title}
                        </h3>
                        {!project.hasCaseStudy && (
                          <div className="mt-2 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                            Case study coming soon
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Process strip */}
      <section className="py-12 sm:py-16 lg:py-20 border-t border-line">
        <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {howIWork.map((item, index) => (
                <div key={index}>
                  <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl leading-[1.15] tracking-[-0.01em] text-ink mb-3">
                    {item.label}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {item.sentence}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 sm:py-20 lg:py-32 bg-navy">
        <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-paper mb-6">
              Have something like this in mind?
            </h2>
            <p className="text-navy-muted text-[15px] sm:text-base mb-8 max-w-[520px] mx-auto leading-relaxed">
              Let's talk about your project, timeline, and how I can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-pill bg-paper text-ink font-sans text-sm font-medium hover:bg-paper/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                Book a conversation
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-navy-muted hover:text-paper transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {personalInfo.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
