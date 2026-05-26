export default function Join() {
  return (
    <section id="join" className="max-w-[1100px] mx-auto px-6 md:px-16 py-36 grid md:grid-cols-2 gap-20 items-center">
      <div className="reveal">
        <div className="flex items-center gap-3 mb-14">
          <span className="w-2 h-2 rounded-full bg-green-mid" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-green-mid">04 — Bergabung</span>
        </div>
        <h2 className="font-playfair font-light text-[clamp(38px,5vw,64px)] leading-[1.1]">
          Kebaikanmu
          <em className="not-italic text-green-mid block">dimulai di sini.</em>
        </h2>
      </div>

      <div className="reveal">
        <p className="text-[15px] font-light leading-[1.9] text-muted mb-11">
          Ada banyak cara untuk berbuat baik bersama Rekyndness. Pilih yang paling sesuai
          dengan dirimu — tidak perlu banyak, cukup mulai dari satu langkah kecil.
        </p>

        <div className="flex flex-col gap-3.5">
          {/* CTA 1 — user umum ke Pertywi (yang sudah live) */}
          <a
            href="https://pertywi.rekyndness.id"
            className="w-full py-4 bg-green-deep text-white text-[13px] font-medium tracking-[0.04em] rounded-lg hover:bg-green-mid hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_18px_rgba(27,107,82,0.22)] text-center no-underline block"
          >
            ♻️ Mulai Setor Sampah — Pertywi
          </a>

          {/* CTA 2 — waitlist untuk Revyva */}
          <button className="w-full py-4 bg-transparent text-ink text-[13px] font-medium tracking-[0.04em] rounded-lg border border-ink/18 hover:border-green-mid hover:text-green-deep hover:bg-green-pale hover:-translate-y-0.5 transition-all duration-200">
            🧸 Daftar Waitlist Revyva
          </button>

          {/* CTA 3 — mitra untuk Lumyna */}
          <button className="w-full py-4 bg-transparent text-ink text-[13px] font-medium tracking-[0.04em] rounded-lg border border-ink/18 hover:border-green-mid hover:text-green-deep hover:bg-green-pale hover:-translate-y-0.5 transition-all duration-200">
            🤝 Daftar sebagai Mitra Lumyna
          </button>

          {/* CTA 4 — hubungi */}
          <button className="w-full py-3 text-muted text-[12px] font-normal tracking-[0.06em] hover:text-green-deep transition-colors duration-200">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  )
}