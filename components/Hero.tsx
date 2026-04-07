"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Sun, MapPin } from "lucide-react";
import Image from "next/image";
import { stagger, staggerItem } from "@/lib/motion";

const WA_LINK = "https://wa.me/56957394822";

const badges = [
  {
    icon: <CheckCircle size={16} strokeWidth={1.5} />,
    text: "11 tratamientos especializados",
  },
  {
    icon: <Zap size={16} strokeWidth={1.5} />,
    text: "Aparatología de última generación",
  },
  {
    icon: <Sun size={16} strokeWidth={1.5} />,
    text: "Soprano Ice Triláser",
  },
  {
    icon: <MapPin size={16} strokeWidth={1.5} />,
    text: "Talca",
  },
];

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
} as const;

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
} as const;

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] md:min-h-[90vh] flex flex-col items-start justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        className="object-cover z-0 -scale-x-100"
        priority
        aria-hidden="true"
      />

      {/* White gradient overlay left to right */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hero-overlay"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-left max-w-7xl w-full mx-auto px-6 pt-28 md:pt-32"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={heroItem}
          className="text-[11px] tracking-[0.5em] uppercase mb-6"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
          }}
        >
          Estética Profesional · Talca
        </motion.p>

        {/* Accent rule */}
        <motion.div
          variants={heroItem}
          className="w-14 h-px mb-10"
          style={{ backgroundColor: "var(--color-accent)" }}
        />

        {/* Main heading */}
        <motion.h1
          variants={heroItem}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug lg:leading-tight mb-4"
          style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
        >
          Tu mejor versión con
          <br />
          <span style={{ color: "var(--color-primary)", fontWeight: 300 }}>
            tecnología de vanguardia
          </span>
        </motion.h1>

        {/* Accent rule */}
        <motion.div
          variants={heroItem}
          className="w-14 h-px mt-10 mb-10"
          style={{ backgroundColor: "var(--color-accent)" }}
        />

        {/* Subtitle */}
        <motion.p
          variants={heroItem}
          className="text-xs md:text-sm mb-12 leading-relaxed max-w-md"
          style={{
            color: "var(--color-text-body)",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 300,
          }}
        >
          Tratamientos estéticos corporales y faciales con aparatología de
          vanguardia y dermocosméticos profesionales.{" "}
          <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>
            Resultados visibles desde la primera sesión.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={heroItem} className="mb-14 flex flex-col gap-1.5 max-w-sm">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full px-9 py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reserva tu hora · WhatsApp
          </a>
          <a
            href="#agendar"
            className="inline-flex items-center justify-center gap-3 w-full px-9 py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: "var(--color-primary-night)",
              color: "#ffffff",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
            </svg>
            Agenda directo en calendario
          </a>
        </motion.div>

        {/* Badges row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-center gap-3 px-5 py-4 rounded-sm"
              style={{
                backgroundColor: "var(--color-bg-teal-soft)",
                border: "none",
              }}
            >
              <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>{badge.icon}</span>
              <span
                className="text-xs leading-tight text-left"
                style={{
                  color: "var(--color-primary-deep)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 500,
                }}
              >
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}
