const lista = [
  "Embarazo o lactancia",
  "Uso de marcapasos",
  "Cáncer activo",
  "Enfermedades vasculares graves (trombosis, várices severas)",
  "Enfermedades cardíacas",
  "Infecciones cutáneas o heridas abiertas",
  "Implantes metálicos en la zona de tratamiento",
  "Uso de anticoagulantes",
  "Insuficiencia renal o hepática",
  "Epilepsia",
];

export default function Contraindicaciones() {
  return (
    <section className="py-10 px-6" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-4xl mx-auto">
        <details className="group">
          <summary
            className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none border-t border-b"
            style={{ borderColor: "#d9cfc2" }}
          >
            <span
              className="text-sm font-semibold flex items-center gap-2"
              style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)" }}
            >
              <span style={{ color: "#9e5840" }}>⚠</span>
              Contraindicaciones — Ver detalle
            </span>
            <span
              className="text-xs tracking-widest uppercase flex items-center gap-1.5"
              style={{ color: "#9d8b7a", fontFamily: "var(--font-montserrat)", flexShrink: 0 }}
            >
              <span className="group-open:hidden">Ver</span>
              <span className="hidden group-open:inline">Cerrar</span>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </summary>

          <div className="py-6">
            <p
              className="text-sm mb-5"
              style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
            >
              Nuestros tratamientos con aparatología{" "}
              <strong style={{ color: "#9e5840" }}>no se realizan</strong> en los
              siguientes casos:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              {lista.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs leading-relaxed"
                  style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)" }}
                >
                  <span
                    className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#9e5840" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="text-xs italic"
              style={{ color: "#9d8b7a", fontFamily: "var(--font-montserrat)" }}
            >
              ¿Tienes dudas? Escríbenos antes de agendar.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
