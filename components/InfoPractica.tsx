const WA_LINK = "https://wa.me/56957394822";

export default function InfoPractica() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "#ede4d8" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "#b8924a", fontFamily: "var(--font-jost)" }}
          >
            Dónde Encontrarnos
          </p>
          <h2
            className="text-3xl md:text-4xl font-light italic text-center mb-6"
            style={{ fontFamily: "var(--font-cormorant)", color: "#1a0f07" }}
          >
            Información Práctica
          </h2>
          <div className="w-14 h-px bg-border-warm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Horarios */}
          <div
            className="p-8 border"
            style={{ borderColor: "#d9cfc2", backgroundColor: "#fdfaf5" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: "#b8924a" }}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
              </div>
              <h3
                className="text-xl font-light"
                style={{ fontFamily: "var(--font-cormorant)", color: "#1a0f07" }}
              >
                Horarios
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <p
                  className="text-[10px] tracking-wider uppercase mb-1 font-medium"
                  style={{ color: "#9e5840", fontFamily: "var(--font-jost)" }}
                >
                  Lunes a Viernes
                </p>
                <p
                  className="text-sm mb-0.5"
                  style={{ color: "#1a0f07", fontFamily: "var(--font-jost)" }}
                >
                  11:00–15:00 y 16:00–19:00
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "#9d8b7a",
                    fontFamily: "var(--font-jost)",
                    fontStyle: "italic",
                  }}
                >
                  Última hora: 14:00 y 18:00
                </p>
              </div>
              <div>
                <p
                  className="text-[10px] tracking-wider uppercase mb-1 font-medium"
                  style={{ color: "#9e5840", fontFamily: "var(--font-jost)" }}
                >
                  Sábados
                </p>
                <p
                  className="text-sm mb-0.5"
                  style={{ color: "#1a0f07", fontFamily: "var(--font-jost)" }}
                >
                  09:00–14:00
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "#9d8b7a",
                    fontFamily: "var(--font-jost)",
                    fontStyle: "italic",
                  }}
                >
                  Última hora: 13:00
                </p>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div
            className="p-8 border"
            style={{ borderColor: "#d9cfc2", backgroundColor: "#fdfaf5" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: "#b8924a" }}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <h3
                className="text-xl font-light"
                style={{ fontFamily: "var(--font-cormorant)", color: "#1a0f07" }}
              >
                Ubicación
              </h3>
            </div>

            <p
              className="text-sm font-medium"
              style={{ color: "#1a0f07", fontFamily: "var(--font-jost)" }}
            >
              1 Norte #841
            </p>
            <p
              className="text-sm"
              style={{ color: "#7d6b57", fontFamily: "var(--font-jost)" }}
            >
              Entre 1 y 2 Oriente
            </p>
            <p
              className="text-sm mt-3"
              style={{ color: "#7d6b57", fontFamily: "var(--font-jost)" }}
            >
              Condominio Progresur
            </p>
            <p
              className="text-sm"
              style={{ color: "#7d6b57", fontFamily: "var(--font-jost)" }}
            >
              Block B-2, Depto. 3
            </p>
            <p
              className="text-xs mt-4 italic"
              style={{ color: "#9d8b7a", fontFamily: "var(--font-jost)" }}
            >
              Viña del Mar, Chile
            </p>
          </div>

          {/* Contacto */}
          <div
            className="p-8 border"
            style={{ borderColor: "#d9cfc2", backgroundColor: "#fdfaf5" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: "#b8924a" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3
                className="text-xl font-light"
                style={{ fontFamily: "var(--font-cormorant)", color: "#1a0f07" }}
              >
                Contacto
              </h3>
            </div>

            <p
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: "#9d8b7a", fontFamily: "var(--font-jost)" }}
            >
              WhatsApp
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-cormorant)", color: "#1a0f07" }}
            >
              +56 9 5739 4822
            </a>

            <div className="mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-[11px] tracking-widest uppercase transition-all hover:opacity-85"
                style={{
                  backgroundColor: "#1a0f07",
                  color: "#fdfaf5",
                  fontFamily: "var(--font-jost)",
                  fontWeight: 600,
                }}
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
