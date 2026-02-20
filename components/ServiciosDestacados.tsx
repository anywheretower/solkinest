"use client";

const WA_LINK = "https://wa.me/56957394822";

const destacados = [
  {
    id: 1,
    name: "Tratamiento Full Reductivo",
    shortDesc: "Moldea y reafirma tu silueta corporal",
    desde: "$35.000",
    duration: "50 min",
    category: "Corporal",
    catColor: "#1D6070",
    accent: "rgba(29,96,112,0.08)",
  },
  {
    id: 11,
    name: "Depilación Triláser Soprano Ice",
    shortDesc: "Elimina el vello de forma indolora y efectiva",
    desde: "A consultar",
    duration: "Según zona",
    category: "Depilación",
    catColor: "#1DA6B8",
    accent: "rgba(29,166,184,0.08)",
  },
  {
    id: 4,
    name: "Rejuvenecimiento Facial",
    shortDesc: "Reduce arrugas y revitaliza tu piel",
    desde: "$35.000",
    duration: "50 min",
    category: "Facial",
    catColor: "#D4AF35",
    accent: "rgba(212,175,53,0.08)",
  },
  {
    id: 3,
    name: "Masaje de Relajación",
    shortDesc: "Alivia tensiones y renuévate de energías",
    desde: "$15.000",
    duration: "25 / 50 min",
    category: "Masaje",
    catColor: "#1D8B9A",
    accent: "rgba(29,139,154,0.08)",
  },
];

export default function ServiciosDestacados() {
  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--color-bg-white)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
            }}
          >
            Los más solicitados
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
          >
            Tratamientos Destacados
          </h2>
          <div className="w-14 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destacados.map((s) => (
            <div
              key={s.id}
              className="flex flex-col border transition-shadow duration-300 hover:shadow-xl"
              style={{
                borderColor: "var(--color-bg-teal-soft)",
                backgroundColor: "var(--color-bg-white)",
                borderTopWidth: 3,
                borderTopColor: s.catColor,
              }}
            >
              {/* Top */}
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase px-2.5 py-1"
                    style={{
                      color: s.catColor,
                      backgroundColor: s.accent,
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 600,
                    }}
                  >
                    {s.category}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {s.duration}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
                >
                  {s.name}
                </h3>

                <p
                  className="text-sm mb-6"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 400,
                  }}
                >
                  {s.shortDesc}
                </p>

                {/* Price */}
                <div
                  className="flex items-baseline gap-1.5 px-4 py-3 mb-6"
                  style={{
                    backgroundColor: s.accent,
                    borderLeft: `3px solid ${s.catColor}`,
                  }}
                >
                  <span
                    className="text-[10px] tracking-widest uppercase"
                    style={{
                      color: s.catColor,
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 600,
                    }}
                  >
                    Desde
                  </span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {s.desde}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-[11px] tracking-widest uppercase border-t transition-colors duration-200"
                style={{
                  borderColor: "var(--color-bg-teal-soft)",
                  color: "#ffffff",
                  backgroundColor: "var(--color-primary-night)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = s.catColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "var(--color-primary-night)";
                }}
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
