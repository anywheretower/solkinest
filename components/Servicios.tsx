"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, LayoutGrid, Activity, Sparkles, Hand, Zap } from "lucide-react";
import { fadeUp, stagger, staggerItem, viewportConfig } from "@/lib/motion";

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
  preparacion?: { titulo: string; items: string[] };
};

const CATEGORY_LABELS: Record<string, string> = {
  corporal: "Corporal",
  facial: "Facial",
  masaje: "Masaje",
  depilacion: "Depilación",
};

const CATEGORY_COLORS: Record<string, string> = {
  corporal: "#1D6070",
  facial: "#D4AF35",
  masaje: "#1D8B9A",
  depilacion: "#1DA6B8",
};

const CATEGORY_BG: Record<string, string> = {
  corporal: "rgba(29,96,112,0.05)",
  facial: "rgba(212,175,53,0.05)",
  masaje: "rgba(29,139,154,0.05)",
  depilacion: "rgba(212,175,53,0.05)",
};

const services: ServiceData[] = [
  {
    id: 1,
    name: "Tratamiento Full Reductivo",
    duration: "50 min",
    category: "corporal",
    description:
      "Drenaje de grasa superficial y reafirmación de la piel para reducir y moldear tu silueta. Elige la zona: abdomen, espalda, cara y cuello, brazos, piernas anterior o piernas posterior + glúteos. Hasta 3 zonas en 1 día.",
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
    note: "1 o 2 sesiones semanales con 3 días de descanso entre sesiones.",
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
    duration: "50 min",
    category: "corporal",
    description:
      "Aumenta y tonifica la musculatura glútea con electroterapia y vacumterapia. Copas delfín para posicionar la grasa y potenciar el volumen. Finaliza con masaje de levantamiento con crema DMAE.",
    pricing: [
      { label: "1 sesión", value: "$30.000" },
      { label: "10 sesiones", value: "$250.000" },
    ],
    note: "2 sesiones semanales.",
  },
  {
    id: 10,
    name: "Levantamiento de Senos",
    duration: "50 min",
    category: "corporal",
    description:
      "Reafirma y tonifica los senos de forma no invasiva. Electroterapia para pectorales, copas delfín para levantar, radiofrecuencia para reafirmar la piel y masaje de levantamiento con crema DMAE.",
    pricing: [
      { label: "1 sesión", value: "$30.000" },
      { label: "10 sesiones", value: "$250.000" },
    ],
    note: "2 sesiones semanales.",
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
      "Si consumes medicamentos fotosensibles (antibióticos, antiinflamatorios, anticonceptivos, antidepresivos, antiacnéicos, entre otros), infórmanos antes de la sesión.",
    preparacion: {
      titulo: "¿Cómo asisto a mi primera cita de depilación láser?",
      items: [
        "NO depilar la o las zonas a tratar con cera o pinzas en UN mes previo al tratamiento.",
        "NO aplique productos autobronceante dos semanas previas a la sesión.",
        "NO emplee maquillaje el día del tratamiento en la zona a tratar (cara o áreas similares).",
        "NO aplique cosméticos que contengan ácido glicólico ni ácido retinoico UNA semana previa al tratamiento.",
        "NO utilice desodorante el mismo día del tratamiento láser, en el caso de realizarse axilas.",
        "Acudir con la zona a tratar perfectamente rasurada con máquinas para piel sensible, 3-4 hojas, con uso de acondicionador para un rasurado más suave, ocupando máquina nueva y siguiendo la dirección de crecimiento del vello.",
        "INFORMAR siempre los medicamentos que estás tomando a la especialista del centro.",
      ],
    },
  },
];

type CategoryFilter = "todos" | "corporal" | "facial" | "masaje" | "depilacion";

function ServicioCard({ service }: { service: ServiceData }) {
  const [descOpen, setDescOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const catColor = CATEGORY_COLORS[service.category];

  return (
    <motion.div
      id={`servicio-${service.id}`}
      className="flex flex-col transition-all duration-300 hover:shadow-lg"
      style={{
        backgroundColor: CATEGORY_BG[service.category],
      }}
      variants={staggerItem}
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
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
          >
            {service.duration}
          </span>
        </div>

        {/* Name */}
        <h3
          className="text-base font-bold leading-tight"
          style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
        >
          {service.name}
        </h3>
      </div>

      {/* Description toggle */}
      <button
        onClick={() => setDescOpen(!descOpen)}
        className="flex items-center justify-between px-6 py-3 border-t text-[10px] tracking-widest uppercase transition-colors duration-200"
        style={{
          borderColor: "var(--color-text-muted)",
          color: descOpen ? "var(--color-primary)" : "var(--color-text-secondary)",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 500,
        }}
      >
        <span>{descOpen ? "Cerrar descripción" : "Ver descripción"}</span>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300"
          style={{ transform: descOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Description content */}
      {descOpen && (
        <div
          className="px-6 pb-5 pt-4 border-t"
          style={{
            borderColor: "var(--color-bg-teal-soft)",
            backgroundColor: "var(--color-bg-teal-whisper)",
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
            }}
          >
            {service.description}
          </p>

          {/* Important */}
          {service.important && (
            <p
              className="text-xs leading-relaxed mt-4 px-3 py-2.5 border-l-2"
              style={{
                color: "var(--color-primary-deep)",
                fontFamily: "var(--font-montserrat)",
                borderColor: "var(--color-primary-deep)",
                backgroundColor: "rgba(29,96,112,0.07)",
              }}
            >
              ⚠ {service.important}
            </p>
          )}

          {/* Preparacion */}
          {service.preparacion && (
            <div className="mt-5 pt-4 border-t" style={{ borderColor: "var(--color-bg-teal-soft)" }}>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--color-primary-deep)", fontFamily: "var(--font-montserrat)" }}
              >
                {service.preparacion.titulo}
              </p>
              <ul className="space-y-2">
                {service.preparacion.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs leading-relaxed"
                    style={{ color: "var(--color-text-body)", fontFamily: "var(--font-montserrat)" }}
                  >
                    <span
                      className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "var(--color-primary-deep)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Prices toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-6 py-3 border-t text-[10px] tracking-widest uppercase transition-colors duration-200"
        style={{
          borderColor: "var(--color-text-muted)",
          color: open ? "var(--color-primary)" : "var(--color-text-secondary)",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 500,
        }}
      >
        <span>{open ? "Cerrar precios" : "Ver precios"}</span>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Expanded content */}
      {open && (
        <div
          className="px-6 pb-6 pt-4 border-t expanded-content"
          style={{
            borderColor: "var(--color-bg-teal-soft)",
            backgroundColor: "var(--color-bg-teal-whisper)",
          }}
        >
          {/* Standard pricing */}
          {service.pricing && (
            <div className="space-y-0 mb-4">
              {service.pricing.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5 border-b"
                  style={{ borderColor: "var(--color-bg-teal-soft)" }}
                >
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--color-text-body)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {row.label}
                  </span>
                  <div className="flex items-center gap-3">
                    {row.offer && (
                      <span
                        className="text-xs line-through opacity-40"
                        style={{
                          color: "var(--color-text-secondary)",
                          fontFamily: "var(--font-montserrat)",
                        }}
                      >
                        {row.value}
                      </span>
                    )}
                    <span
                      style={{
                        color: row.offer ? "var(--color-primary)" : "var(--color-text)",
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

          {/* Special table -- Post Operatorio */}
          {service.specialTable && (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
                <thead>
                  <tr>
                    {service.specialTable.headers.map((h) => (
                      <th
                        key={h}
                        className="text-left py-2 pr-4 text-[10px] tracking-wider uppercase font-medium border-b"
                        style={{
                          color: "var(--color-primary)",
                          borderColor: "var(--color-bg-teal-soft)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.specialTable.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b"
                      style={{ borderColor: "var(--color-bg-teal-soft)" }}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="py-2.5 pr-4 text-sm"
                          style={{
                            color:
                              j === 0
                                ? "var(--color-text)"
                                : j >= 2
                                ? "var(--color-primary-deep)"
                                : "var(--color-text-body)",
                            fontWeight: j >= 2 ? 600 : 400,
                            fontFamily: "var(--font-montserrat)",
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

          {/* Size table -- Depilacion */}
          {service.sizeTable && (
            <div className="mb-4">
              <p
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
              >
                Duración por tamaño de zona · Precio a consultar
              </p>
              <div className="grid grid-cols-5 gap-1.5">
                {service.sizeTable.map((row) => (
                  <div
                    key={row.size}
                    className="flex flex-col items-center py-3 border"
                    style={{
                      borderColor: "var(--color-text-muted)",
                      backgroundColor: "var(--color-bg-white)",
                    }}
                  >
                    <span
                      className="text-xl font-semibold mb-0.5"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        color: "var(--color-text)",
                      }}
                    >
                      {row.size}
                    </span>
                    <span
                      className="text-[10px]"
                      style={{
                        color: "var(--color-text-secondary)",
                        fontFamily: "var(--font-montserrat)",
                      }}
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
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-montserrat)",
                fontStyle: "normal",
              }}
            >
              ⏱ {service.note}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Servicios() {
  const [filter, setFilter] = useState<CategoryFilter>("todos");

  const categories: { key: CategoryFilter; label: string; icon: React.ReactNode }[] = [
    { key: "todos", label: "Todos", icon: <LayoutGrid size={14} strokeWidth={1.5} /> },
    { key: "corporal", label: "Corporal", icon: <Activity size={14} strokeWidth={1.5} /> },
    { key: "facial", label: "Facial", icon: <Sparkles size={14} strokeWidth={1.5} /> },
    { key: "masaje", label: "Masajes", icon: <Hand size={14} strokeWidth={1.5} /> },
    { key: "depilacion", label: "Depilación", icon: <Zap size={14} strokeWidth={1.5} /> },
  ];

  const filtered =
    filter === "todos" ? services : services.filter((s) => s.category === filter);

  return (
    <section
      id="servicios"
      className="py-28 md:py-40 px-6"
      style={{ backgroundColor: "var(--color-bg-teal-whisper)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
            }}
          >
            Tratamientos
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
          >
            Todos nuestros servicios
          </h2>
          <div className="w-14 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className="inline-flex items-center justify-center gap-2 w-40 py-2 text-[11px] tracking-widest uppercase transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 500,
                backgroundColor:
                  filter === cat.key ? "var(--color-primary-night)" : "transparent",
                color: filter === cat.key ? "#ffffff" : "var(--color-text-body)",
                border: `1px solid ${
                  filter === cat.key
                    ? "var(--color-primary-night)"
                    : "var(--color-text-muted)"
                }`,
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {filtered.map((service) => (
            <ServicioCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
