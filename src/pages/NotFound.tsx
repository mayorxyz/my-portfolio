import { TextLink } from "../components/ui";

function Illustration404() {
  return (
    <svg viewBox="0 0 200 160" className="w-40 h-32" aria-hidden="true">
      <rect x="40" y="30" width="120" height="100" rx="12" fill="#c8bdf0" />
      <text x="100" y="90" textAnchor="middle" fontSize="36" fontFamily="Instrument Serif, serif" fill="#141414">
        ?
      </text>
      <circle cx="60" cy="50" r="8" fill="#e8613c" opacity="0.6" />
      <rect x="130" y="110" width="16" height="16" rx="3" fill="#1d2b47" opacity="0.4" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-page mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Illustration404 />
        </div>
        <h1 className="font-serif text-8xl sm:text-9xl lg:text-[160px] leading-none tracking-[-0.03em] text-ink">
          4
          <em className="italic text-accent font-serif">0</em>
          4
        </h1>
        <p className="text-muted text-[15px] sm:text-base mt-6 max-w-[400px] mx-auto">
          This page doesn't exist. Maybe it moved, or maybe it never was.
        </p>
        <div className="mt-8">
          <TextLink to="/">← Back home</TextLink>
        </div>
      </div>
    </section>
  );
}
