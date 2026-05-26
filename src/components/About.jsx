import { stats } from '../data/content'

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-3 mb-14">
    <span className="w-2 h-2 rounded-full bg-green-mid" />
    <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-green-mid">{text}</span>
  </div>
)

export default function About() {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 md:px-16 py-28 grid md:grid-cols-2 gap-20 items-start">
      <div className="reveal">
        <SectionLabel text="01 — Tentang Kami" />
        {/* Headline umbrella — bukan fokus ke satu sub-brand */}
        <h2 className="font-playfair font-light text-[clamp(34px,4.2vw,52px)] leading-[1.18]">
          Kami percaya kebaikan bisa
          <em className="not-italic text-green-mid block">dinyalakan</em>
          kembali.
        </h2>
      </div>

      <div className="reveal md:pt-[72px]">
        <div className="text-[15px] font-light leading-[1.95] text-muted mb-14 space-y-[18px]">
          {/* Paragraf 1: asal-usul dan filosofi */}
          <p>
            Rekyndness lahir dari keyakinan sederhana: bahwa setiap orang menyimpan potensi kebaikan
            yang bisa diperkuat, diarahkan, dan dirayakan bersama komunitas.
          </p>
          {/* Paragraf 2: umbrella — menyebut semua dimensi, bukan hanya lingkungan */}
          <p>
            Kami membangun ekosistem digital yang menghubungkan bank sampah, donasi barang bekas,
            pemberdayaan komunitas, dan edukasi sosial — menjadi satu gerakan yang nyata, terukur,
            dan terus berkembang bersama masyarakat.
          </p>
        </div>

        {/* Stats — data real dari Pertywi yang sudah live */}
        <div className="grid grid-cols-3 border-t border-green-mid/15 pt-9">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`${i > 0 ? 'pl-7 border-l border-green-mid/15' : ''} ${i < stats.length - 1 ? 'pr-7' : ''}`}
            >
              <div className="font-playfair font-light text-[40px] leading-none text-green-deep mb-1.5">
                {s.num}
              </div>
              <div className="text-xs font-normal text-muted">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted/60 mt-3 font-light">
          * Data aktual dari platform Pertywi yang sudah berjalan.
        </p>
      </div>
    </section>
  )
}