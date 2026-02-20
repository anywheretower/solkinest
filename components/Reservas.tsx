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
      style={{ backgroundColor: "#1a0f07" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)" }}
          >
            Cómo Reservar
          </p>
          <h2
            className="text-3xl md:text-4xl font-light italic text-center text-white mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Reservas y Políticas
          </h2>
          <div className="w-14 h-px bg-gold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Datos bancarios */}
          <div
            className="p-8 border"
            style={{ borderColor: "#b8924a25", backgroundColor: "#221309" }}
          >
            <h3
              className="text-xl font-light italic mb-7"
              style={{ fontFamily: "var(--font-montserrat)", color: "#dfc896" }}
            >
              Datos de Transferencia
            </h3>
            <div className="space-y-4">
              {datosBancarios.map((item) => (
                <div key={item.label}>
                  <span
                    className="block text-[10px] tracking-widest uppercase mb-0.5"
                    style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#ede4d8", fontFamily: "var(--font-montserrat)" }}
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
            style={{ borderColor: "#b8924a25", backgroundColor: "#221309" }}
          >
            <h3
              className="text-xl font-light italic mb-7"
              style={{ fontFamily: "var(--font-montserrat)", color: "#dfc896" }}
            >
              Políticas de Cancelación
            </h3>
            <ul className="space-y-4">
              {politicas.map((pol, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "#c4b5a5", fontFamily: "var(--font-montserrat)" }}
                >
                  <span
                    className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-gold"
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
