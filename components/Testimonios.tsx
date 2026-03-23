"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { fadeUp, viewportConfig } from "@/lib/motion";

const testimonios = [
  {
    texto:
      "Después de 6 sesiones del tratamiento reductivo noté un cambio increíble en mi abdomen. El trato es muy profesional y cercano.",
    nombre: "Carolina",
    tratamiento: "Tratamiento Full Reductivo",
  },
  {
    texto:
      "Me hice la depilación láser y no sentí nada de dolor. Super recomendado, ya voy en mi cuarta sesión.",
    nombre: "Valentina",
    tratamiento: "Depilación Triláser Soprano Ice",
  },
  {
    texto:
      "Los masajes descontracturantes son lo mejor. Salgo como nueva cada vez. Excelente relación precio-calidad.",
    nombre: "Francisca",
    tratamiento: "Masaje de Relajación",
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

export default function Testimonios() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonios.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonios[current];

  return (
    <motion.section
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {/* Background image */}
      <Image
        src="/testimonios-bg.png"
        alt=""
        fill
        className="object-cover z-0 -scale-x-100"
        loading="lazy"
        aria-hidden="true"
      />

      {/* White gradient overlay — same as Hero */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to right, #ffffff 0%, #ffffff 20%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
            }}
          >
            Experiencias reales
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-left mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
          >
            Lo que dicen nuestras clientas
          </h2>
          <div className="w-14 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
        </div>

        {/* Slider */}
        <div
          className="relative max-w-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Arrow left */}
          <button
            onClick={prev}
            aria-label="Testimonio anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
            style={{
              color: "var(--color-primary)",
              border: "1px solid var(--color-bg-teal-soft)",
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Arrow right */}
          <button
            onClick={next}
            aria-label="Testimonio siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
            style={{
              color: "var(--color-primary)",
              border: "1px solid var(--color-bg-teal-soft)",
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-start text-left p-10 md:p-14 relative"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                {/* Big decorative quote mark */}
                <span
                  className="absolute top-4 right-8 text-8xl leading-none select-none"
                  style={{
                    color: "var(--color-accent)",
                    opacity: 0.15,
                    fontFamily: "Georgia, serif",
                  }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      viewBox="0 0 20 20"
                      width="14"
                      height="14"
                      fill="var(--color-accent)"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p
                  className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{t.texto}&rdquo;
                </p>

                {/* Author */}
                <div
                  className="border-t pt-5 w-full max-w-xs"
                  style={{ borderColor: "var(--color-bg-teal-soft)" }}
                >
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {t.nombre}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 500,
                    }}
                  >
                    {t.tratamiento}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-start gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
              style={{
                color: "var(--color-primary)",
                border: "1px solid var(--color-bg-teal-soft)",
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Testimonio siguiente"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
              style={{
                color: "var(--color-primary)",
                border: "1px solid var(--color-bg-teal-soft)",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-start gap-2.5 mt-8">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  backgroundColor:
                    i === current ? "var(--color-primary)" : "var(--color-bg-teal-soft)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>

  );
}
