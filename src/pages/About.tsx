import { motion } from "framer-motion";
import { ArrowRight, Terminal, Github, ExternalLink, Mail } from "lucide-react";

// Inlined data for the complete aesthetic preview
const roles = ["Full-stack developer", "Founder, M Gadgets", "AI tinkerer"];
const stats = [
  { v: "6+", l: "Products shipped" },
  { v: "30", l: "Games in Game Hub" },
  { v: "CS", l: "Degree, RSUST" },
  { v: "NG", l: "Port Harcourt" },
];

const timeline = [
  { year: "2026", title: "Founder", org: "M Gadgets", detail: "Online store for phones, gadgets and electronics. Built the catalogue, backend, and run daily operations." },
  { year: "2025", title: "Full-Stack Dev", org: "OrchestrateIQ", detail: "Datadog-style dashboard for watching AI agents: traces, health and behavior in one view." },
  { year: "2024", title: "Researcher", org: "Dissertation", detail: "Final-year research on spam classification across SMS, email and social messages using ML models." },
];

const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind", "Next.js"] },
  { group: "Backend", items: ["Node.js", "Python", "Flask", "SQL"] },
  { group: "AI / ML", items: ["scikit-learn", "NLP", "LLM tooling", "Agent workflows"] },
];

// Abstract geometric tech illustration to replace the soft portrait
function TechNodeSVG() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto drop-shadow-2xl" aria-hidden="true">
      {/* Grid Background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#262626" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {/* Connection Lines */}
      <path d="M100 150 L200 100 L300 150 L200 200 Z" fill="none" stroke="#525252" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M200 100 L200 50 M100 150 L50 150 M300 150 L350 150 M200 200 L200 250" fill="none" stroke="#525252" strokeWidth="2" />
      
      {/* Central Node */}
      <motion.circle 
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} 
        transition={{ duration: 3, repeat: Infinity }}
        cx="200" cy="150" r="40" fill="#0a0a0a" stroke="#ccff00" strokeWidth="4" 
      />
      <rect x="185" y="145" width="30" height="10" fill="#ccff00" />
      
      {/* Outer Nodes */}
      <circle cx="100" cy="150" r="15" fill="#171717" stroke="#ccff00" strokeWidth="2" />
      <circle cx="300" cy="150" r="15" fill="#171717" stroke="#ccff00" strokeWidth="2" />
      <circle cx="200" cy="100" r="15" fill="#171717" stroke="#ccff00" strokeWidth="2" />
      <circle cx="200" cy="200" r="15" fill="#171717" stroke="#ccff00" strokeWidth="2" />
      
      {/* Floating Elements */}
      <motion.rect animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} x="60" y="60" width="20" height="20" fill="none" stroke="#525252" strokeWidth="2" />
      <motion.circle animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} cx="320" cy="80" r="8" fill="#ccff00" />
    </svg>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 selection:bg-[#ccff00] selection:text-black font-sans pb-0">
      
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* HERO SECTION */}
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8 text-[#ccff00] font-mono text-sm tracking-widest uppercase"
          >
            <Terminal size={16} />
            <span>System.Init()</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] text-white font-bold uppercase tracking-tighter"
          >
            I build software<br />
            <span className="text-[#ccff00]">people actually use.</span>
          </motion.h1>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:items-center">
            <button className="bg-[#ccff00] text-black px-8 py-4 font-mono font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-3 w-fit">
              View Work <ArrowRight size={18} />
            </button>
            <div className="font-mono text-neutral-500 text-sm">
              {roles.join(" // ")}
            </div>
          </div>
        </header>

        {/* STATS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-neutral-800 divide-x divide-neutral-800 mb-24">
          {stats.map((s, i) => (
            <div key={i} className="p-6 flex flex-col justify-center">
              <div className="font-mono text-2xl text-white font-bold">{s.v}</div>
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-2">{s.l}</div>
            </div>
          ))}
        </div>

        {/* ILLUSTRATION SECTION */}
        <div className="w-full py-12 mb-24 border border-neutral-800 bg-[#0f0f0f] relative overflow-hidden">
          <div className="absolute top-4 left-4 font-mono text-xs text-neutral-600">ARCHITECTURE.SVG</div>
          <TechNodeSVG />
        </div>

        {/* TIMELINE / EXPERIENCE */}
        <section className="mb-32">
          <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-10 border-b border-neutral-800 pb-4">
            [ Experience_Log ]
          </h2>
          <div className="flex flex-col">
            {timeline.map((entry, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-b border-neutral-800 hover:bg-[#111] transition-colors px-4 -mx-4">
                <div className="font-mono text-[#ccff00] text-sm shrink-0 md:w-24 pt-1">
                  {entry.year}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-mono text-xl text-white font-bold uppercase">{entry.title}</h3>
                    <span className="text-neutral-500 font-mono text-sm">// {entry.org}</span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                    {entry.detail}
                  </p>
                </div>
                <div className="shrink-0 pt-1 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <ExternalLink size={20} className="text-[#ccff00]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section className="mb-24">
          <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-10 border-b border-neutral-800 pb-4">
            [ Tech_Stack ]
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <div key={i} className="border border-neutral-800 bg-[#0f0f0f] p-8 hover:border-[#ccff00]/50 transition-colors">
                <div className="font-mono text-[#ccff00] text-sm uppercase tracking-widest mb-6">
                  0{i + 1}. {group.group}
                </div>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 font-mono text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 bg-neutral-700"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* MASSIVE FOOTER CTA (Matches reference exactly) */}
      <section className="w-full bg-[#ccff00] py-24 px-6 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <div className="font-mono text-black/60 text-sm font-bold uppercase tracking-widest mb-6">
              /// Let's Work
            </div>
            <h2 className="font-mono text-5xl sm:text-6xl md:text-[5rem] leading-[0.9] text-black font-black uppercase tracking-tighter max-w-3xl">
              Have a hard product problem?
            </h2>
          </div>
          
          <button className="shrink-0 bg-black text-[#ccff00] px-10 py-5 font-mono font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors flex items-center gap-4 border border-black">
            <Mail size={20} />
            Contact Me
          </button>
        </div>
      </section>
      
    </div>
  );
}