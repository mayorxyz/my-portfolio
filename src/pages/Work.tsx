import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader, Reveal } from "../components/ui";
import { projects } from "../content";

const categories = ["All", "Web", "Mobile", "AI", "Systems"] as const;

export default function Work() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="01" name="Selected work" meta={`${filtered.length} projects`} />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink">
            Products with a{" "}
            <em className="italic text-accent font-serif">point of view.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-muted text-[15px] sm:text-base mt-3 max-w-[520px]">
            A selection of products I've designed and built, from concept to launch.
          </p>
        </Reveal>

        {/* Filter chips */}
        <Reveal delay={200}>
          <div className="flex flex-wrap gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`h-[34px] px-4 rounded-pill font-mono text-[10px] uppercase tracking-[0.12em] border transition-all duration-180 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                  filter === cat
                    ? "bg-ink text-paper border-ink"
                    : "border-line text-muted hover:text-ink hover:border-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project list */}
        <div className="mt-12 space-y-0">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.3) }}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className={`block border-t border-line last:border-b py-8 group hover:bg-ink/[0.02] transition-colors duration-180 ${
                    i % 2 === 0 ? "" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
                    <div className="flex items-start gap-6">
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-card shrink-0 flex items-center justify-center"
                        style={{ backgroundColor: project.panelColor }}
                      >
                        <span className="font-serif text-xl sm:text-2xl text-ink/80">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-serif text-2xl sm:text-3xl lg:text-[36px] leading-[1.1] tracking-[-0.015em] group-hover:underline decoration-line underline-offset-4">
                            {project.title}
                          </h3>
                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted hidden sm:inline">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-muted text-sm sm:text-[15px] mt-1 max-w-[640px]">
                          {project.tagline}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.slice(0, 3).map((t) => (
                            <span key={t} className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 lg:pl-8">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
                        {project.year}
                      </span>
                      <span className="inline-block transition-transform duration-180 group-hover:translate-x-1 text-ink">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
