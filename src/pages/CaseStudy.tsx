import { useParams, Link } from "react-router-dom";
import { SectionHeader, PillTag, TextLink, Reveal } from "../components/ui";
import { caseStudies, projects, ironmark, meridian, nexus, codex, aetheris } from "../content";
import { Building, Factory, Home, Route, Heart, Brain, Bone, Baby, HeartHandshake, Ribbon, Siren, ScanLine, LayoutGrid, BarChart3, ShieldCheck, Zap, Sparkles, PartyPopper, Search, Tags, ListTree, Copy, Moon, Download, Network, Shield, Layers } from "lucide-react";

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

function IronmarkCover() {
  return (
    <div className="rounded-panel overflow-hidden relative bg-navy" style={{ aspectRatio: "16/9" }}>
      <svg viewBox="0 0 800 450" className="w-full h-full" aria-label="Ironmark Construction illustration">
        {/* Background buildings */}
        <rect x="50" y="200" width="80" height="250" fill="#34425f" />
        <rect x="150" y="150" width="100" height="300" fill="#34425f" />
        <rect x="270" y="180" width="90" height="270" fill="#34425f" />
        <rect x="380" y="120" width="120" height="330" fill="#34425f" />
        <rect x="520" y="160" width="95" height="290" fill="#34425f" />
        <rect x="635" y="190" width="115" height="260" fill="#34425f" />

        {/* Crane */}
        <line x1="440" y1="50" x2="440" y2="120" stroke="#e8613c" strokeWidth="4" />
        <line x1="380" y1="50" x2="500" y2="50" stroke="#e8613c" strokeWidth="3" />
        <line x1="500" y1="50" x2="500" y2="80" stroke="#9ba5ba" strokeWidth="1" />

        {/* Windows (small rectangles) */}
        {[...Array(8)].map((_, i) => (
          <rect key={`w1-${i}`} x={160 + (i % 4) * 20} y={170 + Math.floor(i / 4) * 40} width="12" height="16" fill="#9ba5ba" opacity="0.3" />
        ))}
        {[...Array(10)].map((_, i) => (
          <rect key={`w2-${i}`} x={390 + (i % 5) * 20} y={140 + Math.floor(i / 5) * 40} width="12" height="16" fill="#9ba5ba" opacity="0.3" />
        ))}

        {/* Ground line */}
        <line x1="0" y1="450" x2="800" y2="450" stroke="#9ba5ba" strokeWidth="2" />

        {/* HUD labels */}
        <text x="20" y="30" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">IRONMARK GROUP</text>
        <text x="20" y="44" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">EST. 2000</text>
        <text x="680" y="30" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">480 PROJECTS</text>
        <text x="680" y="440" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">25+ YEARS</text>
      </svg>
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

function getServiceIcon(icon: string) {
  switch (icon) {
    case "building": return <Building size={24} strokeWidth={1.5} />;
    case "factory": return <Factory size={24} strokeWidth={1.5} />;
    case "home": return <Home size={24} strokeWidth={1.5} />;
    case "bridge": return <Route size={24} strokeWidth={1.5} />;
    default: return <Building size={24} strokeWidth={1.5} />;
  }
}

function LivePreviewBox() {
  return (
    <div className="mt-12">
      <SectionHeader number="07" name="Live preview" />
      <div className="border border-line rounded-panel overflow-hidden">
        <div className="bg-ink text-paper px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em]">ironmark-construction-company.vercel.app</span>
          <a
            href={ironmark.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
        <div className="relative" style={{ height: "600px" }}>
          <iframe
            src={ironmark.liveUrl}
            title="Ironmark Construction Group - Live Preview"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function IronmarkServices() {
  return (
    <div className="mt-12">
      <SectionHeader number="08" name="Service categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ironmark.services.map((service) => (
          <div key={service.title} className="border border-line rounded-card p-6 hover:bg-ink/[0.02] transition-colors duration-180">
            <div className="text-ink mb-3">{getServiceIcon(service.icon)}</div>
            <h3 className="font-serif text-2xl leading-[1.15] mb-2">{service.title}</h3>
            <p className="text-sm text-muted">{service.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IronmarkFeaturedProjects() {
  return (
    <div className="mt-12">
      <SectionHeader number="09" name="Featured projects" />
      <div className="space-y-0">
        {ironmark.featuredProjects.map((project, i) => (
          <div key={project.title} className="flex gap-6 py-4 border-t border-line">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5 w-12">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-serif text-xl sm:text-2xl leading-[1.15]">{project.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{project.category}</span>
              </div>
              <p className="text-sm text-muted">{project.tagline}</p>
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted shrink-0">
              {project.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IronmarkValues() {
  return (
    <div className="mt-12 bg-navy rounded-panel p-8 sm:p-12">
      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-navy-muted">
        <span className="text-accent">10</span> — Company values
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-paper mt-4">
        Built on{" "}
        <em className="italic text-accent font-serif">early mornings</em> and straight answers.
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ironmark.values.map((value) => (
          <div key={value.label} className="border-t border-navy-line pt-4">
            <div className="font-serif text-xl sm:text-2xl text-paper mb-2">{value.label}</div>
            <p className="text-navy-muted text-sm">{value.sentence}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getDeptIcon(icon: string) {
  switch (icon) {
    case "heart": return <Heart size={24} strokeWidth={1.5} />;
    case "brain": return <Brain size={24} strokeWidth={1.5} />;
    case "bone": return <Bone size={24} strokeWidth={1.5} />;
    case "baby": return <Baby size={24} strokeWidth={1.5} />;
    case "heart-handshake": return <HeartHandshake size={24} strokeWidth={1.5} />;
    case "ribbon": return <Ribbon size={24} strokeWidth={1.5} />;
    case "siren": return <Siren size={24} strokeWidth={1.5} />;
    case "scan": return <ScanLine size={24} strokeWidth={1.5} />;
    default: return <Heart size={24} strokeWidth={1.5} />;
  }
}

function MeridianCover() {
  return (
    <div className="rounded-panel overflow-hidden relative bg-navy" style={{ aspectRatio: "16/9" }}>
      <svg viewBox="0 0 800 450" className="w-full h-full" aria-label="Meridian Hospital illustration">
        {/* Hospital building */}
        <rect x="250" y="150" width="300" height="300" fill="#34425f" />
        <rect x="280" y="180" width="60" height="80" fill="#9ba5ba" opacity="0.3" />
        <rect x="370" y="180" width="60" height="80" fill="#9ba5ba" opacity="0.3" />
        <rect x="460" y="180" width="60" height="80" fill="#9ba5ba" opacity="0.3" />
        <rect x="280" y="290" width="60" height="80" fill="#9ba5ba" opacity="0.3" />
        <rect x="370" y="290" width="60" height="80" fill="#9ba5ba" opacity="0.3" />
        <rect x="460" y="290" width="60" height="80" fill="#9ba5ba" opacity="0.3" />

        {/* Cross symbol */}
        <rect x="385" y="100" width="30" height="80" fill="#e8613c" />
        <rect x="360" y="125" width="80" height="30" fill="#e8613c" />

        {/* Ground line */}
        <line x1="0" y1="450" x2="800" y2="450" stroke="#9ba5ba" strokeWidth="2" />

        {/* Trees */}
        <circle cx="150" cy="380" r="40" fill="#34425f" opacity="0.6" />
        <rect x="145" y="400" width="10" height="50" fill="#34425f" />
        <circle cx="650" cy="380" r="40" fill="#34425f" opacity="0.6" />
        <rect x="645" y="400" width="10" height="50" fill="#34425f" />

        {/* HUD labels */}
        <text x="20" y="30" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">MERIDIAN GENERAL</text>
        <text x="20" y="44" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">EST. 1985</text>
        <text x="640" y="30" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">120 SPECIALISTS</text>
        <text x="640" y="440" fill="#9ba5ba" fontSize="10" fontFamily="JetBrains Mono, monospace">250K+ PATIENTS</text>
      </svg>
    </div>
  );
}

function MeridianLivePreview() {
  return (
    <div className="mt-12">
      <SectionHeader number="07" name="Live preview" />
      <div className="border border-line rounded-panel overflow-hidden">
        <div className="bg-ink text-paper px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em]">meridian-hospital-gray.vercel.app</span>
          <a
            href={meridian.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
        <div className="relative" style={{ height: "600px" }}>
          <iframe
            src={meridian.liveUrl}
            title="MERIDIAN General Hospital - Live Preview"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function MeridianDepartments() {
  return (
    <div className="mt-12">
      <SectionHeader number="08" name="Medical departments" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {meridian.departments.map((dept) => (
          <div key={dept.name} className="border border-line rounded-card p-6 hover:bg-ink/[0.02] transition-colors duration-180">
            <div className="text-ink mb-3">{getDeptIcon(dept.icon)}</div>
            <h3 className="font-serif text-2xl leading-[1.15] mb-2">{dept.name}</h3>
            <p className="text-sm text-muted">{dept.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MeridianDoctors() {
  return (
    <div className="mt-12">
      <SectionHeader number="09" name="Featured specialists" />
      <div className="space-y-0">
        {meridian.featuredDoctors.map((doctor, i) => (
          <div key={doctor.name} className="flex gap-6 py-4 border-t border-line">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5 w-12">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-serif text-xl sm:text-2xl leading-[1.15]">{doctor.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{doctor.dept}</span>
              </div>
              <p className="text-sm text-muted">{doctor.title} · {doctor.years} years experience</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MeridianOutcomes() {
  return (
    <div className="mt-12">
      <SectionHeader number="10" name="Clinical outcomes" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {meridian.outcomes.map((outcome) => (
          <div key={outcome.label} className="border border-line rounded-card p-6 text-center">
            <div className="font-serif text-3xl sm:text-4xl text-ink">{outcome.value}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mt-2">{outcome.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MeridianValues() {
  return (
    <div className="mt-12 bg-navy rounded-panel p-8 sm:p-12">
      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-navy-muted">
        <span className="text-accent">11</span> — Hospital values
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-paper mt-4">
        Care that feels as{" "}
        <em className="italic text-accent font-serif">good as it works.</em>
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {meridian.values.map((value) => (
          <div key={value.label} className="border-t border-navy-line pt-4">
            <div className="font-serif text-xl sm:text-2xl text-paper mb-2">{value.label}</div>
            <p className="text-navy-muted text-sm">{value.sentence}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getFeatureIcon(icon: string) {
  switch (icon) {
    case "layout-grid": return <LayoutGrid size={24} strokeWidth={1.5} />;
    case "bar-chart-3": return <BarChart3 size={24} strokeWidth={1.5} />;
    case "shield-check": return <ShieldCheck size={24} strokeWidth={1.5} />;
    case "zap": return <Zap size={24} strokeWidth={1.5} />;
    case "sparkles": return <Sparkles size={24} strokeWidth={1.5} />;
    case "party-popper": return <PartyPopper size={24} strokeWidth={1.5} />;
    default: return <LayoutGrid size={24} strokeWidth={1.5} />;
  }
}

function NexusCover() {
  return (
    <div className="rounded-panel overflow-hidden relative bg-ink" style={{ aspectRatio: "16/9" }}>
      <svg viewBox="0 0 800 450" className="w-full h-full" aria-label="Nexus workspace illustration">
        {/* Dark background with gradient */}
        <rect width="800" height="450" fill="#0a0a0a" />
        
        {/* Dashboard cards */}
        <rect x="50" y="80" width="220" height="140" rx="12" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
        <rect x="290" y="80" width="220" height="140" rx="12" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
        <rect x="530" y="80" width="220" height="140" rx="12" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
        
        {/* Chart in first card */}
        <line x1="70" y1="180" x2="250" y2="180" stroke="#2a2a2a" strokeWidth="1" />
        <path d="M 70 160 L 100 140 L 130 150 L 160 120 L 190 130 L 220 100 L 250 110" 
              fill="none" stroke="#e8613c" strokeWidth="2" strokeLinecap="round" />
        
        {/* Bars in second card */}
        <rect x="310" y="160" width="30" height="40" fill="#e8613c" opacity="0.8" />
        <rect x="350" y="140" width="30" height="60" fill="#e8613c" opacity="0.6" />
        <rect x="390" y="120" width="30" height="80" fill="#e8613c" opacity="0.9" />
        <rect x="430" y="150" width="30" height="50" fill="#e8613c" opacity="0.7" />
        <rect x="470" y="130" width="30" height="70" fill="#e8613c" opacity="0.8" />
        
        {/* Board in third card */}
        <rect x="550" y="100" width="60" height="80" rx="4" fill="#2a2a2a" />
        <rect x="620" y="100" width="60" height="80" rx="4" fill="#2a2a2a" />
        <rect x="690" y="100" width="60" height="80" rx="4" fill="#2a2a2a" />
        
        {/* Bottom section */}
        <rect x="50" y="250" width="700" height="150" rx="12" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
        
        {/* Task list */}
        <rect x="70" y="270" width="200" height="20" rx="4" fill="#2a2a2a" />
        <rect x="70" y="300" width="200" height="20" rx="4" fill="#2a2a2a" />
        <rect x="70" y="330" width="200" height="20" rx="4" fill="#2a2a2a" />
        <rect x="70" y="360" width="200" height="20" rx="4" fill="#2a2a2a" />
        
        {/* Metrics */}
        <text x="320" y="290" fill="#e8613c" fontSize="32" fontFamily="Instrument Serif, serif">12k+</text>
        <text x="320" y="310" fill="#6b6a64" fontSize="10" fontFamily="JetBrains Mono, monospace">TEAMS</text>
        
        <text x="450" y="290" fill="#e8613c" fontSize="32" fontFamily="Instrument Serif, serif">99.9%</text>
        <text x="450" y="310" fill="#6b6a64" fontSize="10" fontFamily="JetBrains Mono, monospace">UPTIME</text>
        
        <text x="580" y="290" fill="#e8613c" fontSize="32" fontFamily="Instrument Serif, serif">4.9/5</text>
        <text x="580" y="310" fill="#6b6a64" fontSize="10" fontFamily="JetBrains Mono, monospace">RATING</text>
        
        {/* HUD labels */}
        <text x="20" y="30" fill="#6b6a64" fontSize="10" fontFamily="JetBrains Mono, monospace">NEXUS WORKSPACE</text>
        <text x="20" y="44" fill="#6b6a64" fontSize="10" fontFamily="JetBrains Mono, monospace">v2.0.1</text>
        <text x="680" y="30" fill="#6b6a64" fontSize="10" fontFamily="JetBrains Mono, monospace">LIVE DASHBOARDS</text>
        <text x="680" y="440" fill="#6b6a64" fontSize="10" fontFamily="JetBrains Mono, monospace">REAL-TIME SYNC</text>
      </svg>
    </div>
  );
}

function NexusLivePreview() {
  return (
    <div className="mt-12">
      <SectionHeader number="07" name="Live preview" />
      <div className="border border-line rounded-panel overflow-hidden">
        <div className="bg-ink text-paper px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em]">nexus-startup-pi.vercel.app</span>
          <a
            href={nexus.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
        <div className="relative" style={{ height: "600px" }}>
          <iframe
            src={nexus.liveUrl}
            title="Nexus Workspace - Live Preview"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function NexusFeatures() {
  return (
    <div className="mt-12">
      <SectionHeader number="08" name="Key features" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nexus.features.map((feature) => (
          <div key={feature.title} className="border border-line rounded-card p-6 hover:bg-ink/[0.02] transition-colors duration-180">
            <div className="text-ink mb-3">{getFeatureIcon(feature.icon)}</div>
            <h3 className="font-serif text-2xl leading-[1.15] mb-2">{feature.title}</h3>
            <p className="text-sm text-muted">{feature.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NexusStats() {
  return (
    <div className="mt-12">
      <SectionHeader number="09" name="Platform metrics" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {nexus.stats.map((stat) => (
          <div key={stat.label} className="border border-line rounded-card p-6 text-center">
            <div className="font-serif text-3xl sm:text-4xl text-ink">{stat.value}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NexusTestimonials() {
  return (
    <div className="mt-12">
      <SectionHeader number="10" name="What teams are saying" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {nexus.testimonials.map((testimonial) => (
          <div key={testimonial.name} className="border border-line rounded-card p-6">
            <p className="text-[15px] leading-relaxed mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tile-lilac flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-serif text-lg">{testimonial.name}</div>
                <div className="text-xs text-muted">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NexusPricing() {
  return (
    <div className="mt-12 bg-navy rounded-panel p-8 sm:p-12">
      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-navy-muted">
        <span className="text-accent">11</span> — Pricing tiers
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-paper mt-4">
        Simple pricing.{" "}
        <em className="italic text-accent font-serif">No tiny print.</em>
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {nexus.pricing.map((plan) => (
          <div key={plan.name} className={`rounded-card p-6 ${plan.highlight ? 'bg-paper text-ink' : 'bg-navy-line/20 text-paper'}`}>
            <div className="font-serif text-2xl mb-2">{plan.name}</div>
            <div className={`font-serif text-4xl mb-2 ${plan.highlight ? 'text-accent' : 'text-paper'}`}>{plan.price}</div>
            <p className={`text-sm mb-4 ${plan.highlight ? 'text-ink/70' : 'text-navy-muted'}`}>{plan.blurb}</p>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className={`text-sm flex items-start gap-2 ${plan.highlight ? 'text-ink/80' : 'text-navy-muted'}`}>
                  <span className="text-accent mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCodexIcon(icon: string) {
  switch (icon) {
    case "search": return <Search size={24} strokeWidth={1.5} />;
    case "tags": return <Tags size={24} strokeWidth={1.5} />;
    case "list-tree": return <ListTree size={24} strokeWidth={1.5} />;
    case "copy": return <Copy size={24} strokeWidth={1.5} />;
    case "moon": return <Moon size={24} strokeWidth={1.5} />;
    case "download": return <Download size={24} strokeWidth={1.5} />;
    default: return <Search size={24} strokeWidth={1.5} />;
  }
}

function CodexCover() {
  return (
    <div className="rounded-panel overflow-hidden relative bg-tile-lilac" style={{ aspectRatio: "16/9" }}>
      <svg viewBox="0 0 800 450" className="w-full h-full" aria-label="Codex knowledge base illustration">
        {/* Background */}
        <rect width="800" height="450" fill="#c8bdf0" />
        
        {/* Article cards */}
        <rect x="60" y="80" width="200" height="280" rx="12" fill="#f1efe7" stroke="#d8d5ca" strokeWidth="1" />
        <rect x="280" y="80" width="200" height="280" rx="12" fill="#f1efe7" stroke="#d8d5ca" strokeWidth="1" />
        <rect x="500" y="80" width="200" height="280" rx="12" fill="#f1efe7" stroke="#d8d5ca" strokeWidth="1" />
        
        {/* Article content lines */}
        <rect x="80" y="100" width="160" height="8" rx="2" fill="#141414" opacity="0.8" />
        <rect x="80" y="120" width="140" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="80" y="135" width="150" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="80" y="150" width="130" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        
        {/* Code block in first card */}
        <rect x="80" y="180" width="160" height="60" rx="4" fill="#141414" />
        <rect x="90" y="195" width="80" height="4" rx="1" fill="#e8613c" opacity="0.8" />
        <rect x="90" y="205" width="100" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        <rect x="90" y="215" width="60" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        <rect x="90" y="225" width="90" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        
        {/* Tags */}
        <rect x="80" y="260" width="50" height="20" rx="10" fill="#e8613c" opacity="0.2" />
        <rect x="140" y="260" width="60" height="20" rx="10" fill="#1d2b47" opacity="0.2" />
        
        {/* Second card content */}
        <rect x="300" y="100" width="160" height="8" rx="2" fill="#141414" opacity="0.8" />
        <rect x="300" y="120" width="140" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="300" y="135" width="150" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="300" y="150" width="130" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="300" y="180" width="160" height="60" rx="4" fill="#141414" />
        <rect x="310" y="195" width="70" height="4" rx="1" fill="#e8613c" opacity="0.8" />
        <rect x="310" y="205" width="90" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        <rect x="310" y="215" width="50" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        <rect x="310" y="225" width="80" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        
        {/* Third card content */}
        <rect x="520" y="100" width="160" height="8" rx="2" fill="#141414" opacity="0.8" />
        <rect x="520" y="120" width="140" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="520" y="135" width="150" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="520" y="150" width="130" height="6" rx="2" fill="#6b6a64" opacity="0.6" />
        <rect x="520" y="180" width="160" height="60" rx="4" fill="#141414" />
        <rect x="530" y="195" width="60" height="4" rx="1" fill="#e8613c" opacity="0.8" />
        <rect x="530" y="205" width="80" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        <rect x="530" y="215" width="40" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        <rect x="530" y="225" width="70" height="4" rx="1" fill="#9ba5ba" opacity="0.6" />
        
        {/* Search bar */}
        <rect x="200" y="380" width="400" height="40" rx="20" fill="#f1efe7" stroke="#d8d5ca" strokeWidth="1" />
        <circle cx="220" cy="400" r="8" fill="none" stroke="#6b6a64" strokeWidth="1.5" />
        <line x1="226" y1="406" x2="232" y2="412" stroke="#6b6a64" strokeWidth="1.5" />
        <rect x="240" y="395" width="100" height="6" rx="2" fill="#6b6a64" opacity="0.4" />
        
        {/* HUD labels */}
        <text x="20" y="30" fill="#141414" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.6">CODEX</text>
        <text x="20" y="44" fill="#141414" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.6">LOCAL-FIRST</text>
        <text x="700" y="30" fill="#141414" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.6">MARKDOWN</text>
        <text x="700" y="440" fill="#141414" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.6">ZERO BACKEND</text>
      </svg>
    </div>
  );
}

function CodexLivePreview() {
  return (
    <div className="mt-12">
      <SectionHeader number="07" name="Live preview" />
      <div className="border border-line rounded-panel overflow-hidden">
        <div className="bg-ink text-paper px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em]">codex-iota-six.vercel.app</span>
          <a
            href={codex.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
        <div className="relative" style={{ height: "600px" }}>
          <iframe
            src={codex.liveUrl}
            title="Codex Knowledge Base - Live Preview"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function CodexFeatures() {
  return (
    <div className="mt-12">
      <SectionHeader number="08" name="Key features" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {codex.features.map((feature) => (
          <div key={feature.title} className="border border-line rounded-card p-6 hover:bg-ink/[0.02] transition-colors duration-180">
            <div className="text-ink mb-3">{getCodexIcon(feature.icon)}</div>
            <h3 className="font-serif text-2xl leading-[1.15] mb-2">{feature.title}</h3>
            <p className="text-sm text-muted">{feature.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodexPipeline() {
  return (
    <div className="mt-12">
      <SectionHeader number="09" name="Render pipeline" />
      <div className="space-y-0">
        {codex.pipeline.map((step, i) => (
          <div key={step.step} className="flex gap-6 py-4 border-t border-line">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5 w-12">
              {step.step}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-xl sm:text-2xl leading-[1.15] mb-1">{step.label}</div>
              <p className="text-sm text-muted">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodexDecisions() {
  return (
    <div className="mt-12">
      <SectionHeader number="10" name="Technical decisions" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {codex.decisions.map((decision) => (
          <div key={decision.title} className="border border-line rounded-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-2">{decision.title}</div>
            <div className="font-serif text-2xl leading-[1.15] mb-2">{decision.choice}</div>
            <p className="text-sm text-muted">{decision.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodexLimits() {
  return (
    <div className="mt-12">
      <SectionHeader number="11" name="Design constraints" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {codex.limits.map((limit) => (
          <div key={limit.label} className="border border-line rounded-card p-6 text-center">
            <div className="font-serif text-3xl sm:text-4xl text-ink">
              {limit.value}
              <span className="text-lg">{limit.suffix}</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mt-2">{limit.label}</div>
            <p className="text-xs text-muted mt-2">{limit.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodexScreens() {
  return (
    <div className="mt-12">
      <SectionHeader number="12" name="Application views" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {codex.screens.map((screen) => (
          <div key={screen.id} className="border border-line rounded-card overflow-hidden">
            <div className="bg-tile-lilac p-8 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              <div className="text-center">
                <div className="font-serif text-2xl text-ink mb-2">{screen.title}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{screen.route}</div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted">{screen.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AetherisCover() {
  return (
    <div className="rounded-panel overflow-hidden relative bg-ink" style={{ aspectRatio: "16/9" }}>
      <svg viewBox="0 0 800 450" className="w-full h-full" aria-label="Aetheris blockchain network illustration">
        <rect width="800" height="450" fill="#0a0a0a" />
        
        {/* Network mesh - nodes and connections */}
        <g opacity="0.6">
          {/* Connection lines */}
          <line x1="200" y1="150" x2="350" y2="200" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="350" y1="200" x2="500" y2="150" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="500" y1="150" x2="600" y2="250" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="200" y1="150" x2="250" y2="300" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="350" y1="200" x2="400" y2="320" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="500" y1="150" x2="550" y2="300" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="600" y1="250" x2="550" y2="300" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="250" y1="300" x2="400" y2="320" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
          <line x1="400" y1="320" x2="550" y2="300" stroke="#e8613c" strokeWidth="0.5" opacity="0.4" />
        </g>
        
        {/* Nodes */}
        <circle cx="200" cy="150" r="6" fill="#e8613c" />
        <circle cx="350" cy="200" r="8" fill="#e8613c" />
        <circle cx="500" cy="150" r="6" fill="#e8613c" />
        <circle cx="600" cy="250" r="7" fill="#e8613c" />
        <circle cx="250" cy="300" r="5" fill="#e8613c" />
        <circle cx="400" cy="320" r="9" fill="#e8613c" />
        <circle cx="550" cy="300" r="6" fill="#e8613c" />
        
        {/* Glow effects */}
        <circle cx="350" cy="200" r="12" fill="#e8613c" opacity="0.2" />
        <circle cx="400" cy="320" r="14" fill="#e8613c" opacity="0.2" />
        
        {/* HUD elements */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6b6a64">
          <text x="40" y="40">// signal received</text>
          <text x="40" y="56">AETHERIS v1.0</text>
          <text x="640" y="40">184,000 TPS</text>
          <text x="640" y="56">0.8s FINALITY</text>
          <text x="40" y="420">NODES: 4,210</text>
          <text x="640" y="420">EPOCH: 214</text>
        </g>
        
        {/* Manifesto lines */}
        <g fontFamily="Instrument Serif, serif" fontSize="24" fill="#f1efe7" opacity="0.8">
          <text x="400" y="100" textAnchor="middle">The chain</text>
          <text x="400" y="130" textAnchor="middle">that doesn't</text>
          <text x="400" y="160" textAnchor="middle" fill="#e8613c">wait.</text>
        </g>
      </svg>
    </div>
  );
}

function AetherisLivePreview() {
  return (
    <div className="mt-12">
      <SectionHeader number="07" name="Live preview" />
      <div className="border border-line rounded-panel overflow-hidden">
        <div className="bg-ink text-paper px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em]">aetheris-blockchain.vercel.app</span>
          <a
            href={aetheris.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
        <div className="relative" style={{ height: "600px" }}>
          <iframe
            src={aetheris.liveUrl}
            title="Aetheris Blockchain - Live Preview"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function AetherisStats() {
  return (
    <div className="mt-12">
      <SectionHeader number="08" name="Live stats" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {aetheris.liveStats.map((stat) => (
          <div key={stat.label} className="border border-line rounded-card p-6">
            <div className="font-serif text-4xl sm:text-5xl text-ink mb-2">{stat.value}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-1">{stat.label}</div>
            <p className="text-xs text-muted">{stat.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AetherisPillars() {
  const icons = [
    <Layers size={32} strokeWidth={1.5} />,
    <Shield size={32} strokeWidth={1.5} />,
    <Network size={32} strokeWidth={1.5} />,
  ];
  
  return (
    <div className="mt-12">
      <SectionHeader number="09" name="Technical pillars" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {aetheris.pillars.map((pillar, i) => (
          <div key={pillar.title} className="border border-line rounded-card p-8 hover:bg-ink/[0.02] transition-colors duration-180">
            <div className="text-ink mb-4">{icons[i]}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-2">{pillar.glyph}</div>
            <h3 className="font-serif text-2xl leading-[1.15] mb-3">{pillar.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{pillar.line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AetherisEcosystem() {
  return (
    <div className="mt-12">
      <SectionHeader number="10" name="Ecosystem projects" />
      <div className="space-y-0">
        {aetheris.ecosystem.map((project) => (
          <div key={project.name} className="flex items-center gap-6 py-4 border-t border-line">
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-serif text-xl sm:text-2xl leading-[1.15]">{project.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{project.category}</span>
              </div>
              <p className="text-sm text-muted">{project.line}</p>
            </div>
            <span className={`font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-pill border ${
              project.status === "Live" ? "text-green-600 border-green-600" :
              project.status === "Beta" ? "text-accent border-accent" :
              "text-muted border-line"
            }`}>
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AetherisGovernance() {
  return (
    <div className="mt-12 bg-navy rounded-panel p-8 sm:p-12">
      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-navy-muted">
        <span className="text-accent">11</span> — Governance
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-paper mt-4">
        The network votes.{" "}
        <em className="italic text-accent font-serif">You count.</em>
      </h2>
      <div className="mt-8 space-y-0">
        {aetheris.governance.map((proposal) => (
          <div key={proposal.id} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-t border-navy-line">
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{proposal.id}</span>
                <h3 className="font-serif text-lg sm:text-xl leading-[1.15] text-paper">{proposal.title}</h3>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-navy-muted">For: {proposal.for}%</span>
                <span className="text-sm text-navy-muted">Against: {proposal.against}%</span>
              </div>
            </div>
            <span className={`font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-pill border ${
              proposal.status === "Voting" ? "text-accent border-accent" :
              proposal.status === "Passed" ? "text-green-400 border-green-400" :
              proposal.status === "Executed" ? "text-paper border-paper" :
              "text-navy-muted border-navy-line"
            }`}>
              {proposal.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AetherisTokenomics() {
  return (
    <div className="mt-12">
      <SectionHeader number="12" name="Tokenomics" />
      <div className="border border-line rounded-card p-8">
        <div className="font-serif text-3xl sm:text-4xl text-ink mb-2">{aetheris.tokenomics.total}</div>
        <p className="text-sm text-muted mb-6">Fixed genesis supply. Declining emission. Fees that burn.</p>
        <div className="space-y-3">
          {aetheris.tokenomics.allocation.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-sm text-ink">{item.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{item.pct}%</span>
                </div>
                <div className="h-1 bg-line rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
          {slug === "ironmark-construction" ? <IronmarkCover /> : slug === "meridian-hospital" ? <MeridianCover /> : slug === "nexus-workspace" ? <NexusCover /> : slug === "codex" ? <CodexCover /> : slug === "aetheris" ? <AetherisCover /> : <DeviceMockup color={data.panelColor} title={data.title} />}
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

        {/* Ironmark-specific sections */}
        {slug === "ironmark-construction" && (
          <>
            <Reveal delay={480}>
              <LivePreviewBox />
            </Reveal>
            <Reveal delay={500}>
              <IronmarkServices />
            </Reveal>
            <Reveal delay={520}>
              <IronmarkFeaturedProjects />
            </Reveal>
            <Reveal delay={540}>
              <IronmarkValues />
            </Reveal>
          </>
        )}

        {/* Meridian-specific sections */}
        {slug === "meridian-hospital" && (
          <>
            <Reveal delay={480}>
              <MeridianLivePreview />
            </Reveal>
            <Reveal delay={500}>
              <MeridianDepartments />
            </Reveal>
            <Reveal delay={520}>
              <MeridianDoctors />
            </Reveal>
            <Reveal delay={540}>
              <MeridianOutcomes />
            </Reveal>
            <Reveal delay={560}>
              <MeridianValues />
            </Reveal>
          </>
        )}

        {/* Nexus-specific sections */}
        {slug === "nexus-workspace" && (
          <>
            <Reveal delay={480}>
              <NexusLivePreview />
            </Reveal>
            <Reveal delay={500}>
              <NexusFeatures />
            </Reveal>
            <Reveal delay={520}>
              <NexusStats />
            </Reveal>
            <Reveal delay={540}>
              <NexusTestimonials />
            </Reveal>
            <Reveal delay={560}>
              <NexusPricing />
            </Reveal>
          </>
        )}

        {/* Codex-specific sections */}
        {slug === "codex" && (
          <>
            <Reveal delay={480}>
              <CodexLivePreview />
            </Reveal>
            <Reveal delay={500}>
              <CodexFeatures />
            </Reveal>
            <Reveal delay={520}>
              <CodexPipeline />
            </Reveal>
            <Reveal delay={540}>
              <CodexDecisions />
            </Reveal>
            <Reveal delay={560}>
              <CodexLimits />
            </Reveal>
            <Reveal delay={580}>
              <CodexScreens />
            </Reveal>
          </>
        )}

        {/* Aetheris-specific sections */}
        {slug === "aetheris" && (
          <>
            <Reveal delay={480}>
              <AetherisLivePreview />
            </Reveal>
            <Reveal delay={500}>
              <AetherisStats />
            </Reveal>
            <Reveal delay={520}>
              <AetherisPillars />
            </Reveal>
            <Reveal delay={540}>
              <AetherisEcosystem />
            </Reveal>
            <Reveal delay={560}>
              <AetherisTokenomics />
            </Reveal>
            <Reveal delay={580}>
              <AetherisGovernance />
            </Reveal>
          </>
        )}

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
