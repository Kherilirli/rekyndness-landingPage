import { marqueeItems } from '../data/content'

const Track = () => (
  <div className="flex whitespace-nowrap">
    {[...marqueeItems, ...marqueeItems].map((item, i) => (
      <div key={i} className="flex items-center gap-9 px-9 text-[11px] font-medium tracking-[0.14em] uppercase text-green-mid">
        <span className="text-sm">{item.icon}</span>
        <span>{item.label}</span>
      </div>
    ))}
  </div>
)

export default function MarqueeStrip() {
  return (
    <div className="border-t border-b border-green-mid/15 overflow-hidden py-4 bg-green-pale">
      <div className="flex animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  )
}