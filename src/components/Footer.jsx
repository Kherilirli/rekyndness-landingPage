import { subBrandColors } from '../data/content'

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
    <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7zm0 9a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
)

const navLinks = [
  { label: 'Tentang',   href: '#about' },
  { label: 'Program',   href: '#programs' },
  { label: 'Nilai',     href: '#values' },
  { label: 'Bergabung', href: '#join' },
  { label: 'Instagram', href: 'https://instagram.com/rekyndness.green', target: '_blank' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.06] px-6 md:px-16 pt-14 pb-8">
      {/* Top */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
        {/* Logo & tagline */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-[34px] h-[34px] rounded-full bg-green-mid flex items-center justify-center flex-shrink-0">
              <LeafIcon />
            </div>
            <span className="font-jakarta text-base font-semibold text-white">Rekyndness</span>
          </div>
          {/* Tagline umbrella */}
          <p className="text-[13px] font-light italic text-white/40 max-w-[260px] leading-relaxed">
            Satu platform, empat dimensi kebaikan.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-8 md:gap-10">
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.target}
              className="text-[12px] font-normal tracking-[0.1em] uppercase text-white/45 hover:text-green-light transition-colors duration-200 no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.08] pt-7 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Tahun diperbaiki ke 2026 */}
        <p className="text-[11px] font-light text-white/30">
          © 2024 – 2026 Rekyndness. All rights reserved.
        </p>
        <div className="flex gap-5 flex-wrap">
          {subBrandColors.map(b => (
            <span
              key={b.name}
              className="text-[11px] font-medium tracking-[0.08em] uppercase"
              style={{ color: b.color }}
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}