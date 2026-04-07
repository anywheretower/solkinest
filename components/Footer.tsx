"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import { fadeUp, stagger, staggerItem, viewportConfig } from "@/lib/motion";

const WA_LINK = "https://wa.me/56957394822";

export default function Footer() {
  const navLinks = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#reservas", label: "Reservas" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <footer style={{ backgroundColor: "var(--color-primary-night)" }}>
      {/* Main footer grid — asymmetric: brand col wider */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Col 1: Brand (wider) */}
        <motion.div className="lg:col-span-2" variants={staggerItem}>
          <Image
            src="/logo-solkinest.png"
            alt="Solkinest — Kinesiología & Estética"
            width={180}
            height={54}
            className="h-16 w-auto mb-3 brightness-0 invert"
            loading="lazy"
          />
          <p
            className="text-xs leading-relaxed mb-6"
            style={{
              color: "rgba(255,255,255,0.45)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 300,
            }}
          >
            Estética profesional con tecnología de vanguardia.
            <br />
            Talca, Chile.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Solkinest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center border transition-colors"
              style={{ borderColor: "var(--color-primary-deep)" }}
            >
              <Facebook size={16} color="rgba(255,255,255,0.35)" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/solkinest/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border transition-colors"
              style={{ borderColor: "var(--color-primary-deep)" }}
            >
              <Instagram size={16} color="rgba(255,255,255,0.35)" strokeWidth={1.5} />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center border transition-colors"
              style={{ borderColor: "var(--color-primary-deep)" }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.35)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Col 2: Nav links */}
        <motion.div className="lg:col-span-1" variants={staggerItem}>
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5 font-semibold"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat)" }}
          >
            Navegación
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs transition-colors"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3: Horarios */}
        <motion.div className="lg:col-span-1" variants={staggerItem}>
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5 font-semibold"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat)" }}
          >
            Horarios
          </p>
          <div className="space-y-3">
            <div>
              <p
                className="text-[10px] uppercase tracking-wider mb-0.5"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 600,
                }}
              >
                Lun – Vie
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
              >
                11:00–15:00 y 16:00–19:00
              </p>
            </div>
            <div>
              <p
                className="text-[10px] uppercase tracking-wider mb-0.5"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 600,
                }}
              >
                Sábados
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
              >
                09:00–14:00
              </p>
            </div>
          </div>
        </motion.div>

        {/* Col 4: Contact */}
        <motion.div className="lg:col-span-1" variants={staggerItem}>
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5 font-semibold"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat)" }}
          >
            Contacto
          </p>
          <p
            className="text-xs mb-1"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}
          >
            Av. Las Rastras 1285, esq. 2 Norte
          </p>
          <p
            className="text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}
          >
            Centro Pichimapu, Piso 8, Of. 808
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat)" }}
          >
            +56 9 5739 4822
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderColor: "var(--color-primary-deep)" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <p
          className="text-[11px]"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-montserrat)" }}
        >
          © {new Date().getFullYear()} Solkinest SpA · Talca, Chile
        </p>
        <p
          className="text-[11px]"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-montserrat)" }}
        >
          RUT 77.109.605-0
        </p>
        <p
          className="text-[11px]"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-montserrat)" }}
        >
          Actualizado: marzo 2026
        </p>
      </motion.div>
    </footer>
  );
}
