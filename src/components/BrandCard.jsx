import { useState } from "react";

// Badge status per sub-brand
const StatusBadge = ({ status, label }) => {
  const styles = {
    live: { bg: "#E8F5F0", color: "#1B6B52", dot: "#1B6B52" },
    coming: { bg: "#FFF8E1", color: "#B45309", dot: "#F59E0B" },
    social: { bg: "#EFF6FF", color: "#1D4ED8", dot: "#3B82F6" },
  };
  const s = styles[status] || styles.coming;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-[0.06em]"
      style={{ background: s.bg, color: s.color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{
          background: s.dot,
          boxShadow: status === "live" ? `0 0 0 3px ${s.dot}30` : "none",
        }}
      />
      {label}
    </span>
  );
};

export default function BrandCard({ brand }) {
  const {
    num,
    name,
    tagline,
    glyph,
    accent,
    accentPale,
    desc,
    tags,
    status,
    statusLabel,
    ctaLabel,
    ctaHref,
  } = brand;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal relative overflow-hidden border-r border-b border-green-mid/15 p-12 md:p-14 transition-colors duration-500 group"
      style={{ backgroundColor: hovered ? accentPale : "transparent" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Nomor + Status */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted">
          {num}
        </span>
        <StatusBadge status={status} label={statusLabel} />
      </div>

      <div className="flex items-end justify-between mb-1.5">
        <h3
          className="font-playfair font-light text-[34px] leading-none"
          style={{ color: accent }}
        >
          {name}
        </h3>
        <span
          className="font-playfair font-light text-[72px] leading-none transition-all duration-500"
          style={{
            color: accent,
            opacity: hovered ? 0.2 : 0.1,
            transform: hovered ? "translateY(-4px)" : "translateY(4px)",
          }}
        >
          {glyph}
        </span>
      </div>

      <p className="text-[13px] font-light italic text-muted mb-6">{tagline}</p>

      <div
        className="h-0.5 rounded-full mb-5 transition-all duration-500"
        style={{ background: accent, width: hovered ? 56 : 28 }}
      />

      <p className="text-sm font-light leading-[1.88] text-muted mb-8">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-9">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-[10px] font-medium tracking-[0.08em] uppercase rounded"
            style={{
              background: accentPale,
              color: accent,
              border: `1px solid ${accent}18`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA unik per sub-brand */}
      <a
        href={ctaHref}
        className="inline-flex items-center gap-2.5 text-[12px] font-medium tracking-[0.1em] uppercase no-underline transition-all duration-300 hover:gap-[18px]"
        style={{ color: accent }}
      >
        <span
          className="h-[1.5px] rounded-full transition-all duration-300"
          style={{ background: accent, width: hovered ? 36 : 22 }}
        />
        {ctaLabel}
      </a>
    </div>
  );
}
