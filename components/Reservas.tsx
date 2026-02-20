export default function Reservas() {
  const datosBancarios = [
    { label: "Nombre", value: "Solkinest SpA" },
    { label: "RUT", value: "77.109.605-0" },
    { label: "Banco", value: "Banco Estado" },
    { label: "Tipo de cuenta", value: "Cuenta Vista / Chequera Electrónica" },
    { label: "N° de cuenta", value: "43571942128" },
  ];

  const politicas = [
    "La sesión se reserva mediante pago anticipado por transferencia bancaria o efectivo.",
    "Las reservas pueden cancelarse hasta 3 horas antes de la hora agendada.",
    "La reserva no cancelada dentro del plazo no es reembolsable y la sesión se dará por realizada.",
    "Los retrasos serán descontados del tiempo de tu sesión.",
  ];

  return (
    <section
      id="reservas"
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--color-primary-night)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat)" }}
          >
            Cómo Reservar
          </p>
          <h2
            className="text-3xl md:text-4xl font-light italic text-center text-white mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Reservas y Políticas
          </h2>
          <div className="w-14 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Datos bancarios */}
          <div
            className="p-8 border"
            style={{
              borderColor: "rgba(29,166,184,0.2)",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <h3
              className="text-xl font-light italic mb-7"
              style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-accent-soft)" }}
            >
              Datos de Transferencia
            </h3>
            <div className="space-y-4">
              {datosBancarios.map((item) => (
                <div key={item.label}>
                  <span
                    className="block text-[10px] tracking-widest uppercase mb-0.5"
                    style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Políticas */}
          <div
            className="p-8 border"
            style={{
              borderColor: "rgba(29,166,184,0.2)",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <h3
              className="text-xl font-light italic mb-7"
              style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-accent-soft)" }}
            >
              Políticas de Cancelación
            </h3>
            <ul className="space-y-4">
              {politicas.map((pol, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-montserrat)" }}
                >
                  <span
                    className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                  {pol}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
