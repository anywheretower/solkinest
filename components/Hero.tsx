const WA_LINK = "https://wa.me/56957394822";

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "11 tratamientos especializados",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Aparatología de última generación",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
    text: "Soprano Ice Triláser",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    text: "Viña del Mar",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--color-bg-white) 0%, var(--color-bg-teal-whisper) 60%, var(--color-bg-teal-soft) 100%)",
      }}
    >
      {/* Subtle teal radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 85%, rgba(29,166,184,0.10) 0%, transparent 55%), radial-gradient(ellipse at 20% 15%, rgba(212,175,53,0.07) 0%, transparent 50%)",
        }}
      />

      {/* Decorative corner — top left */}
      <div className="absolute top-28 left-10 opacity-30">
        <div className="w-px h-20" style={{ backgroundColor: "var(--color-primary)" }} />
        <div className="w-10 h-px -mt-20" style={{ backgroundColor: "var(--color-primary)" }} />
      </div>

      {/* Decorative corner — top right */}
      <div className="absolute top-28 right-10 opacity-30 flex flex-col items-end">
        <div className="w-px h-20" style={{ backgroundColor: "var(--color-primary)" }} />
        <div className="w-10 h-px -mt-20" style={{ backgroundColor: "var(--color-primary)" }} />
      </div>

      {/* Large background circles */}
      <div
        className="absolute right-[-18vw] top-[8%] w-[60vw] h-[60vw] rounded-full"
        style={{ border: "1px solid rgba(29,166,184,0.08)" }}
      />
      <div
        className="absolute left-[-22vw] bottom-[5%] w-[45vw] h-[45vw] rounded-full"
        style={{ border: "1px solid rgba(29,166,184,0.06)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-[11px] tracking-[0.5em] uppercase mb-6 animate-hero-1"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
          }}
        >
          Estética Profesional · Viña del Mar
        </p>

        {/* Accent rule */}
        <div
          className="w-14 h-px mx-auto mb-10 animate-hero-2"
          style={{ backgroundColor: "var(--color-accent)" }}
        />

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 animate-hero-3"
          style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
        >
          Resultados reales con
          <br />
          <span style={{ color: "var(--color-primary)", fontWeight: 300 }}>
            tecnología de vanguardia
          </span>
        </h1>

        {/* Accent rule */}
        <div
          className="w-14 h-px mx-auto mt-10 mb-10 animate-hero-4"
          style={{ backgroundColor: "var(--color-accent)" }}
        />

        {/* Subtitle */}
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-hero-4"
          style={{
            color: "var(--color-text-body)",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 300,
          }}
        >
          Tratamientos estéticos corporales y faciales con aparatología de
          vanguardia y dermocosméticos profesionales.{" "}
          <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>
            Resultados visibles desde la primera sesión.
          </span>
        </p>

        {/* CTA */}
        <div className="animate-hero-5 mb-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reserva tu hora · WhatsApp
          </a>
        </div>

        {/* Badges row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-hero-5">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-3"
              style={{
                backgroundColor: "var(--color-bg-teal-soft)",
                border: "1px solid rgba(29,166,184,0.2)",
              }}
            >
              <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>{badge.icon}</span>
              <span
                className="text-[11px] leading-tight text-left"
                style={{
                  color: "var(--color-primary-deep)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 500,
                }}
              >
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-40 animate-hero-5"
      >
        <span
          className="text-[9px] tracking-[0.45em] uppercase"
          style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
        >
          Explorar
        </span>
        <div className="w-px h-8" style={{ backgroundColor: "var(--color-primary)" }} />
      </div>
    </section>
  );
}
