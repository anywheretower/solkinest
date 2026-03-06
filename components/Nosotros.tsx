"use client";

import { motion } from "framer-motion";
import { TrendingDown, Diamond, RotateCcw, Heart } from "lucide-react";
import { fadeUp, stagger, staggerItem, viewportConfig } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  "Reducción": TrendingDown,
  "Reafirmación": Diamond,
  "Rejuvenecimiento": RotateCcw,
  "Bienestar": Heart,
};

export default function Nosotros() {
  const tecnologias = [
    "Radiofrecuencia",
    "Electroterapia",
    "Vacumterapia",
    "Ultrasonido",
    "Cavitación",
    "Lipoláser",
    "Láser Triláser Soprano Ice",
  ];

  const resultados = [
    { label: "Reducción" },
    { label: "Reafirmación" },
    { label: "Rejuvenecimiento" },
    { label: "Bienestar" },
  ];

  return (
    <section
      id="nosotros"
      className="py-28 md:py-40 px-6"
      style={{ backgroundColor: "var(--color-bg-cream)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-20"
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
            Sobre Nosotros
          </p>
          <div className="w-14 h-px" style={{ backgroundColor: "var(--color-text-muted)" }} />
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          className="text-3xl md:text-4xl font-semibold leading-tight text-center mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Tecnología avanzada, técnicas manuales y dermocosméticos para{" "}
          <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
            la mejor versión de ti
          </span>
        </motion.blockquote>

        {/* Body */}
        <motion.p
          className="text-base leading-relaxed text-center mb-16 max-w-2xl mx-auto"
          style={{
            color: "var(--color-text-body)",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 400,
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          En Solkinest combinamos tecnología avanzada, técnicas manuales
          especializadas y dermocosméticos profesionales para ayudarte a alcanzar
          la mejor versión de ti. Trabajamos con aparatología de última generación
          para brindarte procedimientos seguros, efectivos y no invasivos.
        </motion.p>

        {/* Results grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16"
          style={{ backgroundColor: "var(--color-text-muted)" }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {resultados.map((r) => {
            const Icon = iconMap[r.label];
            return (
              <motion.div
                key={r.label}
                className="flex flex-col items-center justify-center py-10 px-4"
                style={{ backgroundColor: "var(--color-bg-white)" }}
                variants={staggerItem}
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="mb-3"
                  style={{ color: "var(--color-primary)", opacity: 0.5 }}
                />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    color: "var(--color-text-body)",
                    fontWeight: 500,
                  }}
                >
                  {r.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p
            className="text-[10px] tracking-[0.45em] uppercase text-center mb-5"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
          >
            Aparatología
          </p>
          <motion.div
            className="flex justify-center gap-2.5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {tecnologias.map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 text-[11px] tracking-wider uppercase border whitespace-nowrap"
                style={{
                  borderColor: "var(--color-bg-teal-soft)",
                  color: "var(--color-primary-deep)",
                  fontFamily: "var(--font-montserrat)",
                  backgroundColor: "var(--color-bg-teal-soft)",
                  fontWeight: 500,
                }}
                variants={staggerItem}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
