const testimonios = [
  {
    texto:
      "Después de 6 sesiones del tratamiento reductivo noté un cambio increíble en mi abdomen. El trato es muy profesional y cercano.",
    nombre: "Carolina",
    tratamiento: "Tratamiento Full Reductivo",
  },
  {
    texto:
      "Me hice la depilación láser y no sentí nada de dolor. Super recomendado, ya voy en mi cuarta sesión.",
    nombre: "Valentina",
    tratamiento: "Depilación Triláser Soprano Ice",
  },
  {
    texto:
      "Los masajes descontracturantes son lo mejor. Salgo como nueva cada vez. Excelente relación precio-calidad.",
    nombre: "Francisca",
    tratamiento: "Masaje de Relajación",
  },
];

export default function Testimonios() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: "#ede4d8" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
          >
            Experiencias reales
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "#1a0f07" }}
          >
            Lo que dicen nuestras clientas
          </h2>
          <div className="w-14 h-px" style={{ backgroundColor: "#b8924a" }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-8 relative"
              style={{ backgroundColor: "#fdfaf5", border: "1px solid #d9cfc2" }}
            >
              {/* Big quote mark */}
              <span
                className="absolute top-4 right-6 text-6xl leading-none select-none"
                style={{ color: "#b8924a", opacity: 0.15, fontFamily: "Georgia, serif" }}
                aria-hidden
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    viewBox="0 0 20 20"
                    width="14"
                    height="14"
                    fill="#b8924a"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: "#4a3828", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
              >
                "{t.texto}"
              </p>

              {/* Author */}
              <div className="border-t pt-4" style={{ borderColor: "#ede4d8" }}>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "#1a0f07", fontFamily: "var(--font-montserrat)" }}
                >
                  {t.nombre}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
                >
                  {t.tratamiento}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
