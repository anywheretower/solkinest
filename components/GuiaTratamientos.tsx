"use client";

import { motion } from "framer-motion";
import { Ruler, Eye, Sparkles, Wind, Cross, Scissors, Baby } from "lucide-react";
import { fadeUp, stagger, staggerItem, viewportConfig } from "@/lib/motion";
import type { LucideIcon } from "lucide-react";

type GuiaItem = {
  objetivo: string;
  tratamiento: string;
  href: string;
  icon: LucideIcon;
};

const guia: GuiaItem[] = [
  {
    objetivo: "Quiero reducir medidas",
    tratamiento: "Full Reductivo · Reductivo de Papada",
    href: "#servicio-1",
    icon: Ruler,
  },
  {
    objetivo: "Quiero eliminar la celulitis",
    tratamiento: "Anticelulítico Piernas y Glúteos",
    href: "#servicio-5",
    icon: Eye,
  },
  {
    objetivo: "Quiero rejuvenecer mi rostro",
    tratamiento: "Rejuvenecimiento Facial",
    href: "#servicio-4",
    icon: Sparkles,
  },
  {
    objetivo: "Quiero relajarme",
    tratamiento: "Masaje de Relajación · Drenaje Linfático",
    href: "#servicio-3",
    icon: Wind,
  },
  {
    objetivo: "Tuve una cirugía estética",
    tratamiento: "Drenaje Linfático Post Operatorio",
    href: "#servicio-7",
    icon: Cross,
  },
  {
    objetivo: "Quiero eliminar el vello",
    tratamiento: "Depilación Triláser Soprano Ice",
    href: "#servicio-11",
    icon: Scissors,
  },
  {
    objetivo: "Acabo de ser mamá",
    tratamiento: "Reductivo Post Parto",
    href: "#servicio-8",
    icon: Baby,
  },
];

export default function GuiaTratamientos() {
  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--color-primary-night)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{
              color: "var(--color-accent)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
            }}
          >
            Te ayudamos a elegir
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-center mb-4"
            style={{ fontFamily: "var(--font-montserrat)", color: "#ffffff" }}
          >
            ¿No sabes qué tratamiento elegir?
          </h2>
          <p
            className="text-sm text-center mb-6 max-w-xl"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 300,
            }}
          >
            Cuéntanos tu objetivo y te asesoramos sin compromiso.
          </p>
          <div className="w-14 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {guia.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                variants={staggerItem}
                className="group flex flex-col gap-3 p-5 border transition-all duration-200"
                style={{
                  borderColor: "rgba(29,96,112,0.35)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(29,166,184,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(255,255,255,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(29,96,112,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(255,255,255,0.05)";
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      color: "var(--color-accent)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm leading-snug mb-1.5"
                      style={{ color: "#ffffff", fontFamily: "var(--font-montserrat)" }}
                    >
                      {item.objetivo}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 400,
                      }}
                    >
                      → {item.tratamiento}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-xs mt-10"
          style={{
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-montserrat)",
            fontStyle: "normal",
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Haz clic en cualquier opción para ir directamente al tratamiento en la lista completa.
        </motion.p>
      </div>
    </section>
  );
}
