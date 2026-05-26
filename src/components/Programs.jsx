import { brands } from '../data/content'
import BrandCard from './BrandCard'

export default function Programs() {
  return (
    <div id="programs" className="border-t border-green-mid/15">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16 pt-20">
        <div className="reveal flex items-center gap-3 mb-14">
          <span className="w-2 h-2 rounded-full bg-green-mid" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-green-mid">
            02 — Program & Sub-brand
          </span>
        </div>
        <div className="reveal flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-5">
          <h2 className="font-playfair font-light text-[clamp(38px,5vw,62px)] leading-[1.1]">
            Empat wujud,<br />
            <em className="not-italic text-green-mid">satu semangat.</em>
          </h2>
          <p className="text-sm font-light text-muted max-w-[220px] md:text-right leading-[1.7]">
            Setiap program lahir dari kebutuhan nyata komunitas di sekitar kita.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-t border-l border-green-mid/15">
        {brands.map(b => <BrandCard key={b.id} brand={b} />)}
      </div>
    </div>
  )
}