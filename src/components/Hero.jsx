const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center pt-24 pb-20 px-6 md:px-16 gap-16 relative overflow-hidden bg-gradient-to-br from-off-white via-off-white to-green-bg">
      {/* BG glow */}
      <div className="absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(61,170,128,0.12),transparent_70%)] pointer-events-none" />

      {/* LEFT */}
      <div className="relative md:pr-16">
        {/* Badge */}
        <div className="opacity-0 animate-fade-up mb-9">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-pale rounded-full border border-green-mid/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-light" />
            <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-green-deep">
              Platform Kebaikan Indonesia
            </span>
          </span>
        </div>

        {/* Headline — narasi umbrella, bukan lingkungan saja */}
        <h1 className="font-playfair font-light text-[clamp(46px,6.5vw,82px)] leading-[1.06] -tracking-[0.01em] mb-9 opacity-0 animate-fade-up [animation-delay:0.2s]">
          Kindness,
          <em className="not-italic text-green-mid block">Redefined.</em>
        </h1>

        {/* Sub-copy — generic umbrella, menyebut 4 dimensi kebaikan */}
        <p className="text-base font-light leading-[1.9] text-muted max-w-[420px] mb-12 opacity-0 animate-fade-up [animation-delay:0.4s]">
          Rekyndness adalah ekosistem digital yang menghubungkan berbagai bentuk kebaikan —
          dari bank sampah, donasi barang bekas, hingga edukasi dan pemberdayaan komunitas —
          dalam satu platform yang nyata dan terukur.
        </p>

        <div className="flex items-center gap-4 opacity-0 animate-fade-up [animation-delay:0.6s]">
          <button
            onClick={() => scroll('programs')}
            className="px-10 py-3.5 bg-green-deep text-white text-[13px] font-medium tracking-[0.04em] rounded-lg hover:bg-green-mid hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_20px_rgba(27,107,82,0.25)]"
          >
            Jelajahi Program
          </button>
          <button
            onClick={() => scroll('about')}
            className="px-8 py-3.5 text-green-deep text-[13px] font-medium tracking-[0.04em] rounded-lg border border-green-mid/35 hover:border-green-mid hover:bg-green-pale hover:-translate-y-0.5 transition-all duration-200"
          >
            Tentang Kami
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex items-center justify-center md:pl-10 opacity-0 animate-[fadeUp_1.2s_0.3s_ease_both]">
        {/* Stat pill — data real dari Pertywi */}
        <div className="absolute top-[15%] -left-5 flex items-center gap-3 px-4 py-3 bg-gold rounded-xl shadow-[0_6px_20px_rgba(232,184,48,0.3)] z-10">
          <div>
            <div className="font-playfair font-normal text-[22px] leading-none text-ink">92</div>
            <div className="text-[11px] font-medium text-ink-soft">Nasabah Aktif</div>
          </div>
        </div>

        {/* Big monogram */}
        <span className="font-playfair font-light text-[clamp(180px,24vw,320px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(45,140,107,0.12)] select-none animate-slow-float">
          R
        </span>

        {/* Badge bawah — lebih umbrella */}
        <div className="absolute bottom-[8%] right-0 p-5 border border-green-mid/15 bg-white rounded-xl max-w-[195px] shadow-[0_8px_32px_rgba(27,107,82,0.08)]">
          <div className="text-[22px] mb-2">✨</div>
          <p className="font-playfair font-light italic text-[13px] leading-[1.55] text-ink-soft">
            "Satu platform, empat cara berbuat baik."
          </p>
        </div>
      </div>
    </section>
  )
}