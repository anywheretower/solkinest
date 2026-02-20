export default function Contraindicaciones() {
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

  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "#fdfaf5" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-14">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#9e5840", fontFamily: "var(--font-montserrat)" }}
          >
            Información Importante
          </p>
          <h2
            className="text-3xl md:text-4xl font-light italic text-center mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "#1a0f07" }}
          >
            Contraindicaciones
          </h2>
          <div className="w-14 h-px bg-border-warm" />
        </div>

        <div
          className="border-l-4 p-8 md:p-10"
          style={{ borderColor: "#9e5840", backgroundColor: "#faf4ee" }}
        >
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
          >
            Nuestros tratamientos corporales con aparatología{" "}
            <strong style={{ color: "#9e5840" }}>no se realizan</strong> en los
            siguientes casos:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lista.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)" }}
              >
                <span
                  className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#9e5840" }}
                />
                {item}
              </li>
            ))}
          </ul>

          <p
            className="mt-8 text-xs leading-relaxed"
            style={{
              color: "#9d8b7a",
              fontFamily: "var(--font-montserrat)",
              fontStyle: "italic",
            }}
          >
            Si tienes dudas sobre si puedes realizarte un tratamiento, escríbenos
            por WhatsApp antes de agendar. Tu seguridad es lo primero.
          </p>
        </div>
      </div>
    </section>
  );
}
