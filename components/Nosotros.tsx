export default function Nosotros() {
  const tecnologias = [
    "Radiofrecuencia",
    "Electroterapia",
    "Vacumterapia",
    "Ultrasonido",
    "Láser Triláser Soprano Ice",
  ];

  const resultados = [
    { label: "Reducción", symbol: "▽" },
    { label: "Reafirmación", symbol: "◇" },
    { label: "Rejuvenecimiento", symbol: "○" },
    { label: "Bienestar", symbol: "△" },
  ];

  return (
    <section
      id="nosotros"
      className="py-28 md:py-40 px-6"
      style={{ backgroundColor: "#fdfaf5" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#b8924a", fontFamily: "var(--font-jost)", fontWeight: 400 }}
          >
            Sobre Nosotros
          </p>
          <div className="w-14 h-px bg-border-warm" />
        </div>

        {/* Pull quote */}
        <blockquote
          className="text-3xl sm:text-4xl md:text-5xl font-light italic leading-tight text-center mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-cormorant)", color: "#1a0f07" }}
        >
          Tecnología avanzada, técnicas manuales y dermocosméticos para{" "}
          <span className="font-semibold not-italic" style={{ color: "#b8924a" }}>
            la mejor versión de ti
          </span>
        </blockquote>

        {/* Body */}
        <p
          className="text-base leading-relaxed text-center mb-16 max-w-2xl mx-auto"
          style={{ color: "#7d6b57", fontFamily: "var(--font-jost)", fontWeight: 400 }}
        >
          En Solkinest combinamos tecnología avanzada, técnicas manuales
          especializadas y dermocosméticos profesionales para ayudarte a alcanzar
          la mejor versión de ti. Trabajamos con aparatología de última generación
          para brindarte procedimientos seguros, efectivos y no invasivos.
        </p>

        {/* Results grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16"
          style={{ backgroundColor: "#d9cfc2" }}
        >
          {resultados.map((r) => (
            <div
              key={r.label}
              className="flex flex-col items-center justify-center py-10 px-4"
              style={{ backgroundColor: "#fdfaf5" }}
            >
              <span
                className="text-xl mb-3"
                style={{ color: "#b8924a", opacity: 0.5 }}
              >
                {r.symbol}
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-jost)",
                  color: "#7d6b57",
                  fontWeight: 500,
                }}
              >
                {r.label}
              </span>
            </div>
          ))}
        </div>

        {/* Technology tags */}
        <div>
          <p
            className="text-[10px] tracking-[0.45em] uppercase text-center mb-5"
            style={{ color: "#b8924a", fontFamily: "var(--font-jost)" }}
          >
            Aparatología
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {tecnologias.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-[11px] tracking-wider uppercase border"
                style={{
                  borderColor: "#d9cfc2",
                  color: "#7d6b57",
                  fontFamily: "var(--font-jost)",
                  backgroundColor: "#f5edd8",
                  fontWeight: 400,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
