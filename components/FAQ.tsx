"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Los tratamientos duelen?",
    a: "No. Nuestros tratamientos son no invasivos y están diseñados para ser cómodos. La depilación láser Soprano Ice cuenta con sistema de enfriamiento que hace la sesión prácticamente indolora.",
  },
  {
    q: "¿Cuántas sesiones necesito para ver resultados?",
    a: "Depende del tratamiento y la zona. En general, los resultados comienzan a notarse desde la primera sesión, pero recomendamos un mínimo de 6 sesiones para resultados óptimos. En depilación láser se recomiendan 6 sesiones, una por cada ciclo de crecimiento del vello.",
  },
  {
    q: "¿Cómo reservo mi hora?",
    a: "Escríbenos por WhatsApp al +56 9 5739 4822. La sesión se confirma con pago anticipado por transferencia bancaria o efectivo.",
  },
  {
    q: "¿Puedo cancelar mi reserva?",
    a: "Sí, hasta 3 horas antes de tu hora agendada. Las reservas no canceladas dentro del plazo no son reembolsables.",
  },
  {
    q: "¿Puedo realizarme tratamientos si estoy embarazada o amamantando?",
    a: "Los tratamientos con aparatología no se realizan durante el embarazo ni la lactancia. El tratamiento reductivo post parto puede comenzarse a los 2 meses de un parto normal o 3 meses de cesárea, y una vez finalizada la lactancia.",
  },
  {
    q: "¿Puedo combinar zonas en una misma sesión?",
    a: "Sí. En el tratamiento full reductivo puedes agendar hasta 3 zonas en el mismo día. También puedes distribuir las sesiones de un pack entre distintas zonas según tus objetivos.",
  },
  {
    q: "¿Qué pasa si llego tarde a mi sesión?",
    a: "El tiempo de retraso se descuenta de tu sesión. Te recomendamos llegar con unos minutos de anticipación.",
  },
  {
    q: "¿La depilación láser funciona en todo tipo de piel?",
    a: "Sí. El equipo Soprano Ice Triláser combina tres longitudes de onda que lo hacen efectivo en todo tipo de pieles y vellos, incluyendo vellos finos y claros.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: "#d9cfc2" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span
          className="text-sm font-semibold leading-snug"
          style={{ color: "#1a0f07", fontFamily: "var(--font-montserrat)" }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform duration-300"
          style={{
            backgroundColor: open ? "#1a0f07" : "#ede4d8",
            color: open ? "#fdfaf5" : "#7d6b57",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div className="pb-5 expanded-content">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6" style={{ backgroundColor: "#fdfaf5" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
          >
            Dudas frecuentes
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "#1a0f07" }}
          >
            Preguntas Frecuentes
          </h2>
          <div className="w-14 h-px" style={{ backgroundColor: "#b8924a" }} />
        </div>

        {/* Items */}
        <div className="border-t" style={{ borderColor: "#d9cfc2" }}>
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
