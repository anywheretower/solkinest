"use client";

import { useState } from "react";

type Pricing = { label: string; value: string; offer?: string };
type ServiceData = {
  id: number;
  name: string;
  duration: string;
  category: "corporal" | "facial" | "masaje" | "depilacion";
  description: string;
  pricing?: Pricing[];
  note?: string;
  important?: string;
  specialTable?: { headers: string[]; rows: string[][] };
  sizeTable?: { size: string; duration: string }[];
};

const CATEGORY_LABELS: Record<string, string> = {
  corporal: "Corporal",
  facial: "Facial",
  masaje: "Masaje",
  depilacion: "Depilación",
};

const CATEGORY_COLORS: Record<string, string> = {
  corporal: "#9e5840",
  facial: "#b8924a",
  masaje: "#7d6b57",
  depilacion: "#5a7468",
};

const services: ServiceData[] = [
  {
    id: 1,
    name: "Tratamiento Full Reductivo",
    duration: "50 min",
    category: "corporal",
    description:
      "Drenaje de grasa superficial y reafirmación de la piel para reducir y moldear tu silueta. Elige la zona: abdomen, espalda, cara y cuello, brazos, piernas anterior o piernas posterior + glúteos. Hasta 3 zonas por sesión.",
    pricing: [
      { label: "1 sesión", value: "$35.000" },
      { label: "3 sesiones", value: "$100.000" },
      { label: "6 sesiones", value: "$180.000" },
      { label: "10 sesiones", value: "$280.000" },
    ],
    note: "1 a 2 sesiones semanales por zona, mínimo 3 días de descanso entre sesiones.",
  },
  {
    id: 2,
    name: "Reductivo de Papada",
    duration: "25 min",
    category: "corporal",
    description:
      "Reduce y reafirma la zona de papada y cuello mediante aparatología y dermocosméticos profesionales. Tratamiento express con resultados progresivos.",
    pricing: [
      { label: "1 sesión", value: "$25.000" },
      { label: "3 sesiones", value: "$70.000" },
      { label: "6 sesiones", value: "$130.000" },
      { label: "10 sesiones", value: "$200.000" },
    ],
    note: "1 a 2 sesiones semanales, mínimo 3 días de descanso entre sesiones.",
  },
  {
    id: 3,
    name: "Masaje de Relajación",
    duration: "25 / 50 min",
    category: "masaje",
    description:
      "Dale un descanso a tu cuerpo. Alivia dolores musculares, reduce el estrés y renuévate de energías. Zonas disponibles: espalda, cuello, cabeza, brazos, manos, piernas o pies.",
    pricing: [
      { label: "25 minutos", value: "$18.000", offer: "$15.000" },
      { label: "50 minutos", value: "$35.000", offer: "$28.000" },
    ],
  },
  {
    id: 4,
    name: "Rejuvenecimiento Facial",
    duration: "50 min",
    category: "facial",
    description:
      "Reduce arrugas, líneas de expresión y bolsas. Piel rejuvenecida, revitalizada y reafirmada gracias a aparatología avanzada y dermocosméticos profesionales. Cara, cuello y escote.",
    pricing: [
      { label: "1 sesión", value: "$35.000" },
      { label: "3 sesiones", value: "$100.000" },
      { label: "6 sesiones", value: "$180.000" },
      { label: "10 sesiones", value: "$280.000" },
    ],
    note: "1 a 2 sesiones semanales, mínimo 3 días de descanso entre sesiones.",
  },
  {
    id: 5,
    name: "Anticelulítico Piernas y Glúteos",
    duration: "50 min",
    category: "corporal",
    description:
      "Piel más lisa y tersa. Trabajamos sobre tabiques fibrosos y adipocitos de la celulitis con aparatología de vanguardia y drenaje linfático manual. Mejora la circulación y elimina toxinas y líquidos retenidos.",
    pricing: [
      { label: "1 sesión", value: "$35.000" },
      { label: "3 sesiones", value: "$100.000" },
      { label: "6 sesiones", value: "$180.000" },
      { label: "10 sesiones", value: "$280.000" },
    ],
  },
  {
    id: 6,
    name: "Drenaje Linfático Manual",
    duration: "50 min",
    category: "masaje",
    description:
      "Técnica de masaje suave y rítmica que estimula el sistema linfático. Elimina líquido retenido, mejora la circulación y reduce la sensación de pesadez.",
    pricing: [
      { label: "1 sesión", value: "$30.000" },
      { label: "3 sesiones", value: "$85.000" },
      { label: "6 sesiones", value: "$160.000" },
      { label: "10 sesiones", value: "$250.000" },
    ],
    note: "1 a 2 sesiones semanales, mínimo 3 días de descanso entre sesiones.",
  },
  {
    id: 7,
    name: "Drenaje Linfático Post Operatorio",
    duration: "Según zona",
    category: "masaje",
    description:
      "Masaje suave y rítmico diseñado para estimular el sistema linfático y reducir inflamación posterior a una cirugía. El tratamiento evoluciona según tu etapa de recuperación: kinesiotaping, ultrasonido, radiofrecuencia, vacumterapia y electroterapia.",
    specialTable: {
      headers: ["Zona", "Duración", "Por sesión", "Pack 10 ses."],
      rows: [
        ["Lipopapada", "25 min", "$20.000", "$169.900"],
        ["1–2 zonas", "50 min", "$30.000", "$269.900"],
        ["3 zonas", "1 hr 25 min", "$40.000", "$369.900"],
        ["4–5 zonas", "1 hr 50 min", "$50.000", "$469.900"],
      ],
    },
  },
  {
    id: 8,
    name: "Reductivo Post Parto",
    duration: "50 min",
    category: "corporal",
    description:
      "Recupera tu silueta después del embarazo. Zona: abdomen y cintura. Combinamos drenaje de grasa superficial, reafirmación cutánea y entrenamiento muscular mediante aparatología y drenaje linfático manual.",
    pricing: [
      { label: "1 sesión", value: "$35.000" },
      { label: "3 sesiones", value: "$100.000" },
      { label: "6 sesiones", value: "$180.000" },
      { label: "10 sesiones", value: "$280.000" },
    ],
    note: "1 a 2 sesiones semanales, mínimo 3 días entre sesiones.",
    important:
      "Disponible desde 3 meses post cesárea o 2 meses post parto normal. No recomendado durante lactancia.",
  },
  {
    id: 9,
    name: "Levantamiento de Glúteos",
    duration: "Por sesión",
    category: "corporal",
    description:
      "Aumenta y tonifica la musculatura glútea con electroterapia y vacumterapia. Copas delfín para posicionar la grasa y potenciar el volumen. Finaliza con masaje de levantamiento con crema DMAE.",
    pricing: [
      { label: "1 sesión", value: "$30.000" },
      { label: "10 sesiones", value: "$250.000" },
    ],
  },
  {
    id: 10,
    name: "Levantamiento de Senos",
    duration: "Por sesión",
    category: "corporal",
    description:
      "Reafirma y tonifica los senos de forma no invasiva. Electroterapia para pectorales, copas delfín para levantar, radiofrecuencia para reafirmar la piel y masaje de levantamiento con crema DMAE.",
    pricing: [
      { label: "1 sesión", value: "$30.000" },
      { label: "10 sesiones", value: "$250.000" },
    ],
  },
  {
    id: 11,
    name: "Depilación Triláser Soprano Ice",
    duration: "Según zona",
    category: "depilacion",
    description:
      "Elimina el vello de forma rápida, segura e indolora. Efectiva en todo tipo de pieles. Combina tres longitudes de onda: Alexandrita 755nm, Diodo 810nm y Nd:YAG 1064nm. Se recomiendan 6 sesiones con intervalos de 30–60 días.",
    sizeTable: [
      { size: "XS", duration: "15 min" },
      { size: "S", duration: "20 min" },
      { size: "M", duration: "40 min" },
      { size: "L", duration: "50 min" },
      { size: "XL", duration: "60 min" },
    ],
    important:
      "Si consumes medicamentos fotosensibles (antibióticos, antiinflamatorios, anticonceptivos), infórmanos antes de la sesión.",
  },
];

type CategoryFilter = "todos" | "corporal" | "facial" | "masaje" | "depilacion";

function ServicioCard({ service }: { service: ServiceData }) {
  const [open, setOpen] = useState(false);
  const catColor = CATEGORY_COLORS[service.category];

  return (
    <div
      id={`servicio-${service.id}`}
      className="flex flex-col border transition-all duration-300 hover:shadow-lg"
      style={{
        borderColor: open ? "#b8924a" : "#d9cfc2",
        backgroundColor: "#fdfaf5",
      }}
    >
      {/* Card body */}
      <div className="p-6 flex-1">
        {/* Category + Duration */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] tracking-[0.3em] uppercase px-2.5 py-1"
            style={{
              color: catColor,
              backgroundColor: catColor + "18",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
            }}
          >
            {CATEGORY_LABELS[service.category]}
          </span>
          <span
            className="text-xs"
            style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)" }}
          >
            {service.duration}
          </span>
        </div>

        {/* Name */}
        <h3
          className="text-xl md:text-2xl font-light mb-3 leading-tight"
          style={{ fontFamily: "var(--font-montserrat)", color: "#1a0f07" }}
        >
          {service.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
        >
          {service.description}
        </p>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-6 py-4 border-t text-xs tracking-widest uppercase transition-colors duration-200"
        style={{
          borderColor: "#d9cfc2",
          color: open ? "#b8924a" : "#7d6b57",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 500,
        }}
      >
        <span>{open ? "Cerrar" : "Ver precios"}</span>
        <span
          className="transition-transform duration-300 inline-block"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ↓
        </span>
      </button>

      {/* Expanded content */}
      {open && (
        <div
          className="px-6 pb-6 pt-4 border-t expanded-content"
          style={{ borderColor: "#ede4d8", backgroundColor: "#faf7f0" }}
        >
          {/* Standard pricing */}
          {service.pricing && (
            <div className="space-y-0 mb-4">
              {service.pricing.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5 border-b"
                  style={{ borderColor: "#ede4d8" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)" }}
                  >
                    {row.label}
                  </span>
                  <div className="flex items-center gap-3">
                    {row.offer && (
                      <span
                        className="text-xs line-through opacity-40"
                        style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)" }}
                      >
                        {row.value}
                      </span>
                    )}
                    <span
                      style={{
                        color: row.offer ? "#9e5840" : "#1a0f07",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      {row.offer ?? row.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Special table — Post Operatorio */}
          {service.specialTable && (
            <div className="overflow-x-auto mb-4">
              <table
                className="w-full text-sm"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <thead>
                  <tr>
                    {service.specialTable.headers.map((h) => (
                      <th
                        key={h}
                        className="text-left py-2 pr-4 text-[10px] tracking-wider uppercase font-medium border-b"
                        style={{ color: "#b8924a", borderColor: "#ede4d8" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.specialTable.rows.map((row, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "#ede4d8" }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="py-2.5 pr-4 text-sm"
                          style={{
                            color: j === 0 ? "#1a0f07" : j >= 2 ? "#9e5840" : "#7d6b57",
                            fontWeight: j >= 2 ? 600 : 400,
                            fontFamily:
                              j >= 2 ? "var(--font-montserrat)" : "var(--font-montserrat)",
                            fontSize: j >= 2 ? "1rem" : "0.875rem",
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Size table — Depilación */}
          {service.sizeTable && (
            <div className="mb-4">
              <p
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: "#b8924a", fontFamily: "var(--font-montserrat)" }}
              >
                Duración por tamaño de zona · Precio a consultar
              </p>
              <div className="grid grid-cols-5 gap-1.5">
                {service.sizeTable.map((row) => (
                  <div
                    key={row.size}
                    className="flex flex-col items-center py-3 border"
                    style={{ borderColor: "#d9cfc2", backgroundColor: "#fdfaf5" }}
                  >
                    <span
                      className="text-xl font-semibold mb-0.5"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        color: "#1a0f07",
                      }}
                    >
                      {row.size}
                    </span>
                    <span
                      className="text-[10px]"
                      style={{ color: "#7d6b57", fontFamily: "var(--font-montserrat)" }}
                    >
                      {row.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Note */}
          {service.note && (
            <p
              className="text-xs leading-relaxed mt-3"
              style={{
                color: "#9d8b7a",
                fontFamily: "var(--font-montserrat)",
                fontStyle: "italic",
              }}
            >
              ⏱ {service.note}
            </p>
          )}

          {/* Important */}
          {service.important && (
            <p
              className="text-xs leading-relaxed mt-3 px-3 py-2.5 border-l-2"
              style={{
                color: "#9e5840",
                fontFamily: "var(--font-montserrat)",
                borderColor: "#9e5840",
                backgroundColor: "#9e584012",
              }}
            >
              ⚠ {service.important}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function Servicios() {
  const [filter, setFilter] = useState<CategoryFilter>("todos");

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "corporal", label: "Corporal" },
    { key: "facial", label: "Facial" },
    { key: "masaje", label: "Masajes" },
    { key: "depilacion", label: "Depilación" },
  ];

  const filtered =
    filter === "todos" ? services : services.filter((s) => s.category === filter);

  return (
    <section
      id="servicios"
      className="py-28 md:py-40 px-6"
      style={{ backgroundColor: "#ede4d8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#9e5840", fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
          >
            Tratamientos
          </p>
          <h2
            className="text-4xl md:text-5xl font-light italic text-center mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "#1a0f07" }}
          >
            Todos nuestros servicios
          </h2>
          <div className="w-14 h-px bg-gold" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className="px-5 py-2 text-[11px] tracking-widest uppercase transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 500,
                backgroundColor: filter === cat.key ? "#1a0f07" : "transparent",
                color: filter === cat.key ? "#fdfaf5" : "#7d6b57",
                border: `1px solid ${filter === cat.key ? "#1a0f07" : "#d9cfc2"}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((service) => (
            <ServicioCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
