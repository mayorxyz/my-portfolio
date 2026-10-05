import { useState, useEffect } from "react";
import { SectionHeader, PrimaryButton, Reveal } from "../components/ui";
import { personalInfo } from "../content";

function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
      {time} WAT
    </span>
  );
}

function EnvelopeSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16" aria-hidden="true">
      <ellipse cx="60" cy="60" rx="50" ry="50" fill="none" stroke="#d8d5ca" strokeWidth="1" strokeDasharray="4 4" />
      <rect x="35" y="42" width="50" height="36" rx="4" fill="none" stroke="#141414" strokeWidth="1.5" />
      <path d="M 35 42 L 60 62 L 85 42" fill="none" stroke="#141414" strokeWidth="1.5" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Ready to point at Formspree or similar
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader number="01" name="Contact" meta={<LiveTime />} />
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-center gap-4 mt-4">
            <EnvelopeSVG />
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] lg:leading-[1.0] tracking-[-0.02em] text-ink">
              Let's{" "}
              <em className="italic text-accent font-serif">talk.</em>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-muted text-[15px] sm:text-base mt-4 max-w-[520px]">
            Have a project in mind? I'd love to hear about it. Fill out the form or send me an email directly.
          </p>
        </Reveal>

        {/* Availability */}
        <Reveal delay={200}>
          <div className="mt-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
              {personalInfo.status}
            </span>
          </div>
        </Reveal>

        {/* Email CTA */}
        <Reveal delay={250}>
          <div className="mt-8">
            <PrimaryButton href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </PrimaryButton>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={300}>
          <div className="mt-12 max-w-[520px]">
            {submitted ? (
              <div className="border border-line rounded-card p-8 text-center">
                <div className="font-serif text-2xl mb-2">Message sent!</div>
                <p className="text-muted text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-pill border border-line bg-transparent text-ink text-sm focus:outline-none focus:border-ink transition-colors duration-180"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-accent text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-pill border border-line bg-transparent text-ink text-sm focus:outline-none focus:border-ink transition-colors duration-180"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-accent text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-card border border-line bg-transparent text-ink text-sm focus:outline-none focus:border-ink transition-colors duration-180 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-accent text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-pill bg-ink text-paper font-sans text-sm font-medium transition-all duration-180 hover:bg-[#2a2a2a] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Social links */}
        <Reveal delay={400}>
          <div className="mt-16 pt-8 border-t border-line">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted block mb-4">
              Find me elsewhere
            </span>
            <div className="flex flex-wrap gap-4">
              {personalInfo.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink underline decoration-line underline-offset-4 hover:decoration-ink transition-all duration-180"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
