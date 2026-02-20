const WA_LINK = "https://wa.me/56957394822";

export default function CTAFinal() {
  return (
    <section
      className="py-28 md:py-44 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-teal-soft)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(29,166,184,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "var(--color-bg-teal-whisper)" }}
      />

      {/* Decorative circle */}
      <div
        className="absolute right-[-10vw] top-[-10vw] w-[50vw] h-[50vw] rounded-full"
        style={{ border: "1px solid rgba(29,166,184,0.12)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p
          className="text-[11px] tracking-[0.5em] uppercase mb-6"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
        >
          Da el primer paso
        </p>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-light italic leading-tight mb-8"
          style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
        >
          ¿Lista para{" "}
          <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
            transformarte?
          </span>
        </h2>

        <p
          className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
          style={{
            color: "var(--color-text-body)",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 400,
          }}
        >
          Agenda tu hora hoy y comienza a ver resultados. Escríbenos por WhatsApp
          y te ayudamos a elegir el tratamiento ideal para ti.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 600,
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
          <span
            className="text-sm"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
          >
            +56 9 5739 4822
          </span>
        </div>
      </div>
    </section>
  );
}
