import { SectionHeader, PillTag, Reveal } from "../components/ui";
import { bio, timeline, skills, howIWork } from "../content";

function PortraitSVG() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 sm:w-40 sm:h-40" aria-label="Portrait illustration">
      <circle cx="100" cy="100" r="90" fill="#c8bdf0" />
      <circle cx="100" cy="80" r="30" fill="#141414" />
      <rect x="75" y="110" width="50" height="60" rx="16" fill="#141414" />
      <circle cx="90" cy="75" r="4" fill="#f1efe7" />
      <circle cx="110" cy="75" r="4" fill="#f1efe7" />
      <path d="M 92 88 Q 100 94 108 88" fill="none" stroke="#f1efe7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="01" name="About" meta="2026" />
        </Reveal>

        {/* Intro */}
        <div className="mt-12 flex flex-col sm:flex-row items-start gap-8">
          <Reveal>
            <PortraitSVG />
          </Reveal>
          <Reveal delay={100}>
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink">
                Hi, I'm{" "}
                <em className="italic text-accent font-serif">Mayor.</em>
              </h1>
              <p className="text-muted text-[15px] sm:text-base mt-4 max-w-[640px] leading-relaxed">
                {bio}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal delay={200}>
          <div className="mt-16">
            <SectionHeader number="02" name="Timeline" />
            <div className="space-y-0">
              {timeline.map((entry, i) => (
                <div key={i} className="flex gap-6 py-4 border-t border-line">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5 w-12">
                    {entry.year}
                  </span>
                  <div className="min-w-0">
                    <div className="font-serif text-xl sm:text-2xl leading-[1.15]">{entry.title}</div>
                    <div className="text-sm text-muted mt-0.5">{entry.org}</div>
                    <div className="text-sm text-muted mt-1">{entry.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal delay={300}>
          <div className="mt-16">
            <SectionHeader number="03" name="Skills" />
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.group}>
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted block mb-3">
                    {group.group}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <PillTag key={item}>{item}</PillTag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* How I work */}
        <Reveal delay={400}>
          <div className="mt-16">
            <SectionHeader number="04" name="How I work" />
            <ul className="space-y-0">
              {howIWork.map((item, i) => (
                <li key={i} className="flex gap-6 py-4 border-t border-line">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-accent shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-serif text-xl sm:text-2xl leading-[1.15]">{item.label}</div>
                    <div className="text-sm text-muted mt-1">{item.sentence}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Navy section */}
        <Reveal delay={500}>
          <div className="mt-16 bg-navy rounded-panel p-8 sm:p-12">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-navy-muted">
              <span className="text-accent">05</span> — Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-paper mt-4">
              Build things that{" "}
              <em className="italic text-accent font-serif">matter.</em>
            </h2>
            <p className="text-navy-muted text-[15px] sm:text-base mt-4 max-w-[520px] leading-relaxed">
              I believe the best software comes from understanding the problem deeply, shipping early, and iterating based on real feedback. Not from long planning cycles or perfect first drafts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
