const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Program", href: "#programs" },
  { label: "Nilai", href: "#values" },
  { label: "Bergabung", href: "#join" },
];

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7zm0 9a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-[68px] bg-white/94 backdrop-blur-lg border-b border-green-mid/15">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="flex items-center justify-center flex-shrink-0 rounded-full w-9 h-9 bg-green-deep">
          <LeafIcon />
        </div>
        <span className="font-jakarta text-[17px] font-semibold text-ink tracking-tight">
          Re<span className="text-green-mid">k</span>yndness
        </span>
      </a>

      <div className="hidden md:flex gap-9">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[13px] font-normal text-muted hover:text-green-deep transition-colors duration-200 no-underline"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-green-deep text-white text-[13px] font-medium rounded-md hover:bg-green-mid hover:-translate-y-px transition-all duration-200 shadow-[0_4px_14px_rgba(27,107,82,0.25)]">
          Donasi 🌱
        </button>
        <a
          href="https://gate.v2.rekyndness.id/signin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-ink text-[13px] font-medium rounded-md border border-ink/18 hover:border-green-mid hover:text-green-deep hover:-translate-y-px transition-all duration-200"
        >
          Masuk
        </a>
      </div>
    </nav>
  );
}
