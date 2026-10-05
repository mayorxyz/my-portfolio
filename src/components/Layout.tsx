import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../content";

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 py-6 flex items-start justify-between">
        <div>
          <div className="font-serif text-xl">{personalInfo.name}</div>
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted mt-1">
            {personalInfo.role}
          </div>
        </div>
        <div className="hidden sm:block text-center">
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
            {personalInfo.location}
          </div>
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted mt-1">
            Updated {personalInfo.updated}
          </div>
        </div>
        <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted text-right">
          {personalInfo.status}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <a href={`mailto:${personalInfo.email}`} className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors duration-200">
            {personalInfo.email}
          </a>
          {personalInfo.socials.map((s) => (
            <a key={s.label} href={s.href} className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors duration-180">
              {s.label}
            </a>
          ))}
        </div>
        <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted">
          © 2026 {personalInfo.name}
        </div>
      </div>
    </footer>
  );
}

export function FloatingNav() {
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <motion.nav
      aria-label="Quick navigation"
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 16 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 h-12 px-1.5 rounded-pill bg-paper border border-line shadow-float"
    >
      <Link to="/" className="px-3.5 font-sans text-sm font-medium text-ink rounded-pill hover:bg-ink/5 transition-colors duration-180">
        Home
      </Link>
      <Link to="/work" className="px-3.5 font-sans text-sm font-medium text-ink rounded-pill hover:bg-ink/5 transition-colors duration-180">
        Work
      </Link>
      <Link to="/about" className="px-3.5 font-sans text-sm font-medium text-ink rounded-pill hover:bg-ink/5 transition-colors duration-180">
        About
      </Link>
      <Link to="/contact" className="px-4 h-9 flex items-center rounded-pill bg-ink text-paper font-sans text-sm font-medium hover:bg-ink/85 transition-colors duration-180">
        Book a call
      </Link>
    </motion.nav>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 -top-12 z-20 px-3.5 py-2 bg-paper border border-line rounded-pill font-sans text-sm font-medium text-ink focus:top-4 transition-all duration-250"
    >
      Skip to content
    </a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <>
      <SkipLink />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingNav />
    </>
  );
}
