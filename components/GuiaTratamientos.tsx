"use client";

const guia = [
  {
    objetivo: "Quiero reducir medidas",
    tratamiento: "Full Reductivo · Reductivo de Papada",
    href: "#servicio-1",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z" />
        <path d="M9 10h6M12 7v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    objetivo: "Quiero eliminar la celulitis",
    tratamiento: "Anticelulítico Piernas y Glúteos",
    href: "#servicio-5",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12c2-4 6-6 8-6s6 2 8 6-6 6-8 6-6-2-8-6z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    objetivo: "Quiero rejuvenecer mi rostro",
    tratamiento: "Rejuvenecimiento Facial",
    href: "#servicio-4",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5" />
        <path d="M9 13.5c0 2 1 4 3 4s3-2 3-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    objetivo: "Quiero relajarme",
    tratamiento: "Masaje de Relajación · Drenaje Linfático",
    href: "#servicio-3",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16c2-6 14-6 16 0" strokeLinecap="round" />
        <path d="M7 12c1-4 9-4 10 0" strokeLinecap="round" />
        <path d="M10 8c.5-2 3.5-2 4 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    objetivo: "Tuve una cirugía estética",
    tratamiento: "Drenaje Linfático Post Operatorio",
    href: "#servicio-7",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    objetivo: "Quiero eliminar el vello",
    tratamiento: "Depilación Triláser Soprano Ice",
    href: "#servicio-11",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 3l12 18M18 3L6 21" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    objetivo: "Acabo de ser mamá",
    tratamiento: "Reductivo Post Parto",
    href: "#servicio-8",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21C12 21 4 14 4 9a8 8 0 0116 0c0 5-8 12-8 12z" />
      </svg>
    ),
  },
];

export default function GuiaTratamientos() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: "#1a0f07" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
          >
            Te ayudamos a elegir
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-center mb-4"
            style={{ fontFamily: "var(--font-montserrat)", color: "#fdfaf5" }}
          >
            ¿No sabes qué tratamiento elegir?
          </h2>
          <p
            className="text-sm text-center mb-6 max-w-xl"
            style={{ color: "#c4b5a5", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
          >
            Cuéntanos tu objetivo y te asesoramos sin compromiso.
          </p>
          <div className="w-14 h-px" style={{ backgroundColor: "#b8924a" }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {guia.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-3 p-5 border transition-all duration-200"
              style={{
                borderColor: "#b8924a20",
                backgroundColor: "#ffffff08",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#b8924a60";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff12";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#b8924a20";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff08";
              }}
            >
              <div className="flex items-start gap-3">
                <div style={{ color: "#b8924a", flexShrink: 0, marginTop: 2 }}>
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm leading-snug mb-1.5"
                    style={{ color: "#fdfaf5", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.objetivo}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
                  >
                    → {item.tratamiento}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center text-xs mt-10"
          style={{ color: "#6b5a4a", fontFamily: "var(--font-montserrat)", fontStyle: "italic" }}
        >
          Haz clic en cualquier opción para ir directamente al tratamiento en la lista completa.
        </p>
      </div>
    </section>
  );
}
