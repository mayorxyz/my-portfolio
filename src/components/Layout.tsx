import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../content";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="border-b border-line sticky top-0 bg-paper/95 backdrop-blur-sm z-20">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-start justify-between gap-4">
        <div>
          <Link to="/" className="font-serif text-xl hover:text-accent transition-colors duration-200">{personalInfo.name}</Link>
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted mt-1">
            {personalInfo.role}
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center text-center">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            {personalInfo.location}
          </div>
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted mt-1">
            Updated {personalInfo.updated}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block font-mono text-[12px] uppercase tracking-[0.12em] text-muted text-right">
            {personalInfo.status}
          </div>
          {isHome ? null : (
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center h-10 px-4 rounded-pill bg-ink text-paper font-sans text-sm font-medium hover:bg-ink/85 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Book a conversation
            </Link>
          )}
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

const navItems = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
];

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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-1.5 h-12 sm:h-13 px-1.5 sm:px-2 rounded-full bg-paper/90 backdrop-blur-md border border-line shadow-float max-w-[calc(100vw-2rem)] sm:max-w-none overflow-x-auto no-scrollbar"
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-3 sm:px-4 py-1.5 sm:py-2 font-sans text-xs sm:text-sm font-medium transition-colors duration-180 z-10 whitespace-nowrap ${
              isActive ? "text-ink" : "text-ink/70 hover:text-ink"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-ink/10 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {item.label}
          </Link>
        );
      })}

      {/* Divider */}
      <div className="w-[1px] h-4 sm:h-5 bg-line mx-0.5 shrink-0" aria-hidden="true" />

      {/* CTA Button */}
      <motion.div whileTap={{ scale: 0.95 }} className="shrink-0">
        <Link
          to="/contact"
          className={`relative px-3.5 sm:px-4 h-8 sm:h-9 flex items-center rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-180 whitespace-nowrap ${
            location.pathname === "/contact"
              ? "bg-ink text-paper shadow-sm"
              : "bg-ink text-paper hover:bg-ink/85"
          }`}
        >
          {location.pathname === "/contact" && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 bg-ink rounded-full -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          Book a call
        </Link>
      </motion.div>
    </motion.nav>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 -top-12 z-40 px-3.5 py-2 bg-paper border border-line rounded-pill font-sans text-sm font-medium text-ink focus:top-4 transition-all duration-250 shadow-md"
    >
      Skip to content
    </a>
  );
}

function SectionIndicator() {
  const [current, setCurrent] = useState<{ number: string; name: string } | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setCurrent(null);
      return;
    }
    const sections = [
      { id: "apps", number: "02", name: "Apps" },
      { id: "work", number: "03", name: "Work" },
      { id: "capabilities", number: "04", name: "Capabilities" },
      { id: "contact", number: "05", name: "Contact" },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const section = sections.find((s) => s.id === visible.target.id);
          if (section) setCurrent({ number: section.number, name: section.name });
        }
      },
      { threshold: [0.2, 0.5] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  if (!current) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-8 z-20 font-mono text-[12px] uppercase tracking-[0.12em] text-muted pointer-events-none hidden md:block">
      <span className="text-accent">{current.number}</span> — {current.name}
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <>
      <SkipLink />
      {/* <Header /> */}
      <SectionIndicator />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="min-h-screen pb-28"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {/* <Footer /> */}
      <FloatingNav />
    </>
  );
}