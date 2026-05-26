import { features } from '../data/content'

export default function FeaturesStrip() {
  return (
    <div className="reveal bg-green-deep grid grid-cols-2 md:grid-cols-4 border-t border-white/8">
      {features.map((f, i) => (
        <div
          key={i}
          className={`flex items-start gap-4 px-7 py-9 ${i < features.length - 1 ? 'border-r border-white/10' : ''}`}
        >
          <div className="w-11 h-11 rounded-[10px] bg-white/12 flex items-center justify-center text-xl flex-shrink-0">
            {f.icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[12px] font-light text-white/60 leading-relaxed">{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}