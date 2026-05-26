import { values } from '../data/content'

export default function Values() {
  return (
    <section id="values" className="max-w-[1100px] mx-auto px-6 md:px-16 py-28 border-t border-green-mid/15">
      <div className="grid md:grid-cols-2 gap-20 items-end mb-20 reveal">
        <div>
          <div className="flex items-center gap-3 mb-14">
            <span className="w-2 h-2 rounded-full bg-green-mid" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-green-mid">03 — Nilai Kami</span>
          </div>
          <h2 className="font-playfair font-light text-[clamp(34px,4.2vw,50px)] leading-[1.18]">
            Tiga prinsip yang{' '}
            <em className="not-italic text-green-mid">menghidupkan</em> kami.
          </h2>
        </div>
        <p className="text-[15px] font-light leading-[1.9] text-muted">
          Kami tidak membangun program besar-besaran. Kami membangun kebiasaan baik yang berkelanjutan — satu tindakan kecil, satu komunitas, satu hari dalam satu waktu.
        </p>
      </div>

      <div>
        {values.map((v, i) => (
          <div
            key={i}
            className="reveal grid grid-cols-[72px_1fr] gap-9 items-start py-9 border-t border-green-mid/15 last:border-b last:border-green-mid/15"
          >
            <span className="font-playfair font-light text-[13px] text-green-mid pt-0.5">{v.num}</span>
            <div>
              <div className="text-[17px] font-medium mb-2.5 text-ink">{v.title}</div>
              <p className="text-sm font-light text-muted leading-[1.85]">{v.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}