import { useParams, Link } from "react-router-dom";
import { SectionHeader, PillTag, TextLink, Reveal } from "../components/ui";
import { caseStudies, projects } from "../content";

function DeviceMockup({ color, title }: { color: string; title: string }) {
  return (
    <div className="rounded-panel overflow-hidden relative" style={{ background: color, aspectRatio: "16/9" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Phone frame */}
        <div className="w-[30%] h-[80%] rounded-media bg-paper shadow-device flex flex-col overflow-hidden">
          <div className="h-6 bg-line/50 flex items-center justify-center">
            <div className="w-12 h-1.5 bg-muted/30 rounded-full" />
          </div>
          <div className="flex-1 p-3 flex flex-col gap-2">
            <div className="h-3 bg-ink/10 rounded w-3/4" />
            <div className="h-3 bg-ink/10 rounded w-1/2" />
            <div className="flex-1 bg-accent/10 rounded-media mt-2" />
            <div className="h-2 bg-ink/10 rounded w-2/3" />
            <div className="h-2 bg-ink/10 rounded w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram({ nodes, edges }: { nodes: { id: string; label: string; x: number; y: number }[]; edges: [string, string][] }) {
  return (
    <svg viewBox="0 0 650 340" className="w-full max-w-[650px] mx-auto" role="img" aria-label="Architecture diagram">
      {edges.map(([from, to], i) => {
        const fromNode = nodes.find((n) => n.id === from);
        const toNode = nodes.find((n) => n.id === to);
        if (!fromNode || !toNode) return null;
        return (
          <line key={i} x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y} stroke="#d8d5ca" strokeWidth="1" />
        );
      })}
      {nodes.map((node) => (
        <g key={node.id}>
          <rect x={node.x - 50} y={node.y - 18} width="100" height="36" rx="8" fill="#f1efe7" stroke="#d8d5ca" strokeWidth="1" />
          <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#141414">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function LineChart({ data, title }: { data: { month: string; value: number }[]; title: string }) {
  const max = Math.max(...data.map((d) => d.value));
  const w = 400;
  const h = 160;
  const padding = 30;
  const points = data.map((d, i) => ({
    x: padding + (i / (data.length - 1)) * (w - padding * 2),
    y: h - padding - ((d.value / max) * (h - padding * 2)),
  }));
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-3">{title}</h4>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label={`Line chart: ${title}`}>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((frac) => (
          <line key={frac} x1={padding} y1={h - padding - frac * (h - padding * 2)} x2={w - padding} y2={h - padding - frac * (h - padding * 2)} stroke="#d8d5ca" strokeWidth="0.5" />
        ))}
        {/* Line */}
        <path d={path} fill="none" stroke="#e8613c" strokeWidth="2" strokeLinecap="round" />
        {/* X labels */}
        {data.filter((_, i) => i % 3 === 0).map((d, i) => (
          <text key={i} x={padding + ((i * 3) / (data.length - 1)) * (w - padding * 2)} y={h - 8} fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b6a64" textAnchor="middle">
            {d.month}
          </text>
        ))}
      </svg>
    </div>
  );
}

function BarChart({ data, title }: { data: { category: string; value: number }[]; title: string }) {
  const max = Math.max(...data.map((d) => d.value));
  const w = 400;
  const h = 160;
  const padding = 30;
  const barWidth = (w - padding * 2) / data.length - 8;

  return (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-3">{title}</h4>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label={`Bar chart: ${title}`}>
        {data.map((d, i) => {
          const barH = (d.value / max) * (h - padding * 2);
          const x = padding + i * ((w - padding * 2) / data.length) + 4;
          return (
            <g key={i}>
              <rect x={x} y={h - padding - barH} width={barWidth} height={barH} fill="#141414" rx="2" />
              <text x={x + barWidth / 2} y={h - 8} fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#6b6a64" textAnchor="middle">
                {d.category}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((c) => c.slug === slug);
  const project = projects.find((p) => p.slug === slug);

  if (!study && !project) {
    return (
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-6xl">Project not found</h1>
          <TextLink to="/work" className="mt-6 inline-flex">← Back to work</TextLink>
        </div>
      </section>
    );
  }

  const fallback = project ? {
    slug: project.slug,
    title: project.title,
    category: project.category,
    year: project.year,
    stack: project.tags,
    timeline: "—",
    platform: "—",
    role: project.role,
    problem: project.summary,
    approach: ["Built with care and attention to detail."],
    architectureNodes: [] as { id: string; label: string; x: number; y: number }[],
    architectureEdges: [] as [string, string][],
    stats: [] as { value: string; label: string }[],
    chartA: [] as { month: string; value: number }[],
    chartB: [] as { category: string; value: number }[],
    nextSteps: ["Continue iterating."],
    panelColor: project.panelColor,
  } : null;

  const data = study || fallback!;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        {/* Cover */}
        <Reveal>
          <DeviceMockup color={data.panelColor} title={data.title} />
        </Reveal>

        {/* Meta */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted block">Role</span>
              <span className="text-sm">{data.role}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted block">Year</span>
              <span className="text-sm">{data.year}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted block">Stack</span>
              <div className="flex gap-2 mt-1">
                {data.stack.map((t) => <span key={t} className="text-sm">{t}</span>)}
              </div>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted block">Timeline</span>
              <span className="text-sm">{study?.timeline || "—"}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted block">Platform</span>
              <span className="text-sm">{study?.platform || "—"}</span>
            </div>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={150}>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] mt-12">
            {data.title}
          </h1>
        </Reveal>

        {/* Problem */}
        <Reveal delay={200}>
          <div className="mt-12">
            <SectionHeader number="01" name="Problem" />
            <p className="text-[15px] sm:text-base max-w-[640px] leading-relaxed">{data.problem}</p>
          </div>
        </Reveal>

        {/* Approach */}
        <Reveal delay={250}>
          <div className="mt-12">
            <SectionHeader number="02" name="Approach" />
            <ul className="space-y-4 max-w-[640px]">
              {data.approach.map((item, i) => (
                <li key={i} className="flex gap-4 text-[15px] sm:text-base">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Architecture */}
        {data.architectureNodes.length > 0 && (
          <Reveal delay={300}>
            <div className="mt-12">
              <SectionHeader number="03" name="Architecture" />
              <div className="border border-line rounded-panel p-6 sm:p-8">
                <ArchitectureDiagram nodes={data.architectureNodes} edges={data.architectureEdges} />
              </div>
            </div>
          </Reveal>
        )}

        {/* Key Screens */}
        <Reveal delay={350}>
          <div className="mt-12">
            <SectionHeader number="04" name="Key screens" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <DeviceMockup key={i} color={data.panelColor} title={`${data.title} — Screen ${i + 1}`} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Results */}
        {data.stats.length > 0 && (
          <Reveal delay={400}>
            <div className="mt-12">
              <SectionHeader number="05" name="Results" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="border border-line rounded-card p-6 text-center">
                    <div className="font-serif text-4xl sm:text-5xl text-ink">{stat.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data.chartA.length > 0 && <LineChart data={data.chartA} title="Monthly growth" />}
                {data.chartB.length > 0 && <BarChart data={data.chartB} title="Feature usage" />}
              </div>
            </div>
          </Reveal>
        )}

        {/* Next steps */}
        <Reveal delay={450}>
          <div className="mt-12">
            <SectionHeader number="06" name="Next steps" />
            <ul className="space-y-3 max-w-[640px]">
              {data.nextSteps.map((step, i) => (
                <li key={i} className="flex gap-4 text-[15px] border-t border-line pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Prev / Next */}
        <Reveal delay={500}>
          <div className="mt-16 pt-8 border-t border-line flex justify-between">
            {prevProject ? (
              <Link to={`/work/${prevProject.slug}`} className="group flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors duration-180">
                <span className="transition-transform duration-180 group-hover:-translate-x-1">←</span>
                {prevProject.title}
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link to={`/work/${nextProject.slug}`} className="group flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors duration-180">
                {nextProject.title}
                <span className="transition-transform duration-180 group-hover:translate-x-1">→</span>
              </Link>
            ) : <div />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
