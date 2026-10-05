import { useState, useEffect } from "react";
import { SectionHeader, Reveal } from "../components/ui";
import { personalInfo } from "../content";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  Mail, 
  Clock, 
  Radio, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from "lucide-react";

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
    <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
      <Clock size={12} className="text-zinc-500 animate-pulse" />
      <span className="font-mono text-[11px] font-semibold tracking-wider text-zinc-700">
        {time} WAT
      </span>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'message' | 'direct'>('message');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
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
  };

  // Placeholder social links matching the user's requirement
  const socials = [
    { label: "GitHub", handle: "@github-handle", icon: Github, href: personalInfo?.socials?.[0]?.href || "https://github.com" },
    { label: "LinkedIn", handle: "/in/profile", icon: Linkedin, href: personalInfo?.socials?.[1]?.href || "https://linkedin.com" },
    { label: "X (Twitter)", handle: "@handle", icon: Twitter, href: personalInfo?.socials?.[2]?.href || "https://twitter.com" },
    { label: "Telegram", handle: "@telegram-chat", icon: Send, href: "https://telegram.me" },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header section with top metadata bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-zinc-900 text-white rounded-md">
                  01
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                  Connection Portal
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight text-zinc-900">
                Let's start a <span className="italic text-[#FF6B6B] font-serif">dialogue.</span>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="flex flex-col items-start md:items-end gap-3">
              <LiveTime />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-600 font-medium">
                  {personalInfo?.status || "Available for projects"}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Social Matrix */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal delay={200}>
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-serif text-2xl text-zinc-900 mb-3">Direct Dispatch</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Prefer writing from your personal inbox? Reach out directly via email or choose your favorite platform below.
                </p>
                <a
                  href={`mailto:${personalInfo?.email || "hello@example.com"}`}
                  className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-900 text-zinc-900 font-mono text-xs transition-all group"
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <Mail size={16} className="text-zinc-500 group-hover:text-zinc-900 transition-colors" />
                    {personalInfo?.email || "hello@example.com"}
                  </span>
                  <ArrowUpRight size={16} className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>

            {/* Social Matrix Placeholders */}
            <Reveal delay={250}>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-4">
                  Find me elsewhere
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socials.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-900 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-zinc-100 rounded-lg text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                            <IconComponent size={18} />
                          </div>
                          <div>
                            <div className="font-sans font-bold text-xs text-zinc-900">{item.label}</div>
                            <div className="font-mono text-[10px] text-zinc-500">{item.handle}</div>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <Reveal delay={300}>
              <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
                
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full mb-2">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-serif text-3xl text-zinc-900">Message Dispatched</h3>
                    <p className="text-zinc-600 text-sm max-w-sm mx-auto">
                      Thank you for reaching out. Your transmission has been received and I will review it shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-900 underline underline-offset-4 hover:text-[#FF6B6B]"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-6">
                      <div className="flex items-center gap-2">
                        <MessageSquare size={18} className="text-[#FF6B6B]" />
                        <span className="font-sans font-bold text-sm text-zinc-900">Secure Transmission Form</span>
                      </div>
                      <span className="font-mono text-[11px] text-zinc-400">All fields required</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div>
                        <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                          placeholder="Jane Doe"
                        />
                        {errors.name && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.name}</p>}
                      </div>

                      {/* Email input */}
                      <div>
                        <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                          placeholder="jane@example.com"
                        />
                        {errors.email && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-2">
                        Project Details / Inquiry
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all resize-none"
                        placeholder="Tell me about your scope, timelines, or questions..."
                      />
                      {errors.message && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 h-13 px-6 rounded-xl bg-zinc-900 text-white font-sans text-sm font-bold transition-all duration-200 hover:bg-zinc-800 shadow-sm"
                    >
                      <span>Transmit Message</span>
                      <ArrowUpRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}