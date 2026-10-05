import { useRef, useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

// ─── Section Header ──────────────────────────────────────
interface SectionHeaderProps {
  number: string;
  name: string;
  meta?: ReactNode;
  dark?: boolean;
}

export function SectionHeader({ number, name, meta, dark }: SectionHeaderProps) {
  return (
    <div className={`flex justify-between items-end border-b pb-3 mb-12 ${dark ? "border-navy-line" : "border-line"}`}>
      <span className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] ${dark ? "text-navy-muted" : "text-muted"}`}>
        <span className="text-accent font-normal">{number}</span> — {name}
      </span>
      {meta && (
        <span className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] ${dark ? "text-navy-muted" : "text-muted"}`}>
          {meta}
        </span>
      )}
    </div>
  );
}

// ─── Primary Button ──────────────────────────────────────
interface ButtonProps {
  href?: string;
  to?: string;
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export function PrimaryButton({ href, to, children, showArrow = true, className = "", onClick }: ButtonProps) {
  const base = "inline-flex items-center gap-2 h-11 px-5 rounded-pill bg-ink text-paper font-sans text-sm font-medium transition-all duration-180 hover:bg-[#2a2a2a] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`} onClick={onClick}>
        {children}
        {showArrow && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <a href={href || "#"} className={`${base} ${className}`} onClick={onClick}>
      {children}
      {showArrow && <ArrowIcon />}
    </a>
  );
}

// ─── Text Link ───────────────────────────────────────────
interface TextLinkProps {
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
}

export function TextLink({ href, to, children, className = "" }: TextLinkProps) {
  const base = "inline-flex items-center gap-1.5 font-sans text-sm font-medium text-ink underline decoration-line underline-offset-[4px] hover:decoration-ink transition-all duration-180 group";

  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`}>
        {children}
        <span className="inline-block transition-transform duration-180 group-hover:translate-x-[3px]">→</span>
      </Link>
    );
  }

  return (
    <a href={href || "#"} className={`${base} ${className}`}>
      {children}
      <span className="inline-block transition-transform duration-180 group-hover:translate-x-[3px]">→</span>
    </a>
  );
}

// ─── Pill Tag ────────────────────────────────────────────
export function PillTag({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center h-[26px] px-2.5 rounded-pill border font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-180 hover:text-ink hover:border-ink ${dark ? "border-navy-line text-navy-muted hover:text-paper hover:border-paper" : "border-line text-muted"}`}>
      {children}
    </span>
  );
}

// ─── Icon Button (round) ─────────────────────────────────
export function IconButton({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid place-items-center w-9 h-9 rounded-full border border-line text-ink hover:bg-ink hover:text-paper transition-all duration-180 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      {children}
    </a>
  );
}

// ─── Arrow Icon ──────────────────────────────────────────
function ArrowIcon() {
  return (
    <span className="inline-block transition-transform duration-180 group-hover:translate-x-[3px]">→</span>
  );
}

// ─── Scroll Reveal ───────────────────────────────────────
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
      style={{ transition: "opacity 600ms cubic-bezier(.22,.61,.36,1), transform 600ms cubic-bezier(.22,.61,.36,1)", transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Stagger Group ───────────────────────────────────────
export function StaggerGroup({ children, className = "" }: { children: ReactNode[]; className?: string }) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={Math.min(i * 60, 300)}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
