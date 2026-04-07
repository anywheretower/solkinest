"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { fadeUp, stagger, staggerItem, viewportConfig } from "@/lib/motion";
import { useState } from "react";

const WA_LINK = "https://wa.me/56957394822";

export default function InfoPractica() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola, soy ${form.nombre}. ${form.mensaje}`;
    const url = `${WA_LINK}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section
      id="contacto"
      className="relative min-h-[700px] overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/contacto-bg.png"
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

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda — todo el contenido */}
          <div>
            {/* Header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-12"
            >
              <p
                className="text-[11px] tracking-[0.5em] uppercase mb-5"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
              >
                Dónde Encontrarnos
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
              >
                Información Práctica
              </h2>
              <div className="w-14 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
            </motion.div>

            {/* Info cards — 3 columnas */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {/* Horarios */}
              <motion.div
                variants={staggerItem}
                className="p-6"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ color: "var(--color-primary)" }}>
                    <Clock size={18} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
                  >
                    Horarios
                  </h3>
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-wider uppercase mb-1 font-semibold"
                    style={{ color: "var(--color-primary-deep)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Lunes a Viernes
                  </p>
                  <p
                    className="text-sm mb-0.5"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-montserrat)" }}
                  >
                    11:00–15:00 y 16:00–19:00
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Última hora: 14:00 y 18:00
                  </p>
                </div>
                <div className="mt-4">
                  <p
                    className="text-[10px] tracking-wider uppercase mb-1 font-semibold"
                    style={{ color: "var(--color-primary-deep)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Sábados
                  </p>
                  <p
                    className="text-sm mb-0.5"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-montserrat)" }}
                  >
                    09:00–14:00
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Última hora: 13:00
                  </p>
                </div>
              </motion.div>
                {/* Ubicación */}
                <motion.div
                  variants={staggerItem}
                  className="p-6"
                  style={{
                    borderColor: "var(--color-bg-teal-soft)",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ color: "var(--color-primary)" }}>
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-sm font-semibold"
                      style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
                    >
                      Ubicación
                    </h3>
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Av. Las Rastras 1285
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-body)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Esquina 2 Norte
                  </p>
                  <p
                    className="text-sm mt-2"
                    style={{ color: "var(--color-text-body)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Centro Pichimapu
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-body)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Piso 8, Oficina 808
                  </p>
                  <p
                    className="text-xs mt-2"
                    style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Talca, Chile
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Avenida+Las+Rastras+1285,+Talca,+Chile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 text-[11px] tracking-widest uppercase transition-all hover:opacity-85"
                    style={{
                      backgroundColor: "var(--color-primary-night)",
                      color: "#ffffff",
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 600,
                    }}
                  >
                    <MapPin size={13} strokeWidth={1.5} />
                    Ver en Google Maps
                  </a>
                </motion.div>
            </motion.div>

            {/* Formulario de contacto */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <p
                className="text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
              >
                Escríbenos directamente
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="px-4 py-2.5 text-sm rounded-sm border-none focus:ring-2 focus:outline-none"
                    style={{
                      backgroundColor: "var(--color-bg-teal-soft)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="px-4 py-2.5 text-sm rounded-sm border-none focus:ring-2 focus:outline-none"
                    style={{
                      backgroundColor: "var(--color-bg-teal-soft)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  />
                </div>
                <textarea
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  rows={3}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-sm border-none focus:ring-2 focus:outline-none resize-none"
                  style={{
                    backgroundColor: "var(--color-bg-teal-soft)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] tracking-widest uppercase transition-all hover:opacity-85"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "#ffffff",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 600,
                  }}
                >
                  <Send size={13} />
                  {enviado ? "¡Mensaje enviado!" : "Enviar por WhatsApp"}
                </button>
              </form>
            </motion.div>

          </div>

          {/* Columna derecha — vacía para imagen de fondo */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
