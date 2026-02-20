"use client";

import { useState } from "react";

const WA_NUMBER = "56957394822";

type Step = "calendar" | "form" | "success";
type WeekOffset = 0 | 1;

interface SelectedSlot {
  date: Date;
  time: string;
}

const SERVICES = [
  "Tratamiento Full Reductivo",
  "Reductivo de Papada",
  "Masaje de Relajación",
  "Rejuvenecimiento Facial",
  "Anticelulítico Piernas y Glúteos",
  "Drenaje Linfático Manual",
  "Drenaje Linfático Post Operatorio",
  "Reductivo Post Parto",
  "Levantamiento de Glúteos",
  "Levantamiento de Senos",
  "Depilación Triláser Soprano Ice",
];

const WEEKDAY_SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const SATURDAY_SLOTS = ["10:00", "11:00", "12:00"];
const DAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS_SHORT = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const MONTHS_FULL = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const DAY_NAMES_FULL = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function getMonday(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const dow = d.getDay(); // 0=Sun
  const diff = dow === 0 ? -6 : 1 - dow;
  d.setDate(d.getDate() + diff);
  return d;
}

function generateWeekDays(weekOffset: WeekOffset): Date[] {
  const monday = getMonday(new Date());
  monday.setDate(monday.getDate() + weekOffset * 7);
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function getSlotsForDate(date: Date): string[] {
  const dow = date.getDay();
  if (dow === 6) return SATURDAY_SLOTS;
  if (dow === 0) return [];
  return WEEKDAY_SLOTS;
}

function isSlotPast(date: Date, time: string): boolean {
  const now = new Date();
  const [h, m] = time.split(":").map(Number);
  const slotTime = new Date(date);
  slotTime.setHours(h, m, 0, 0);
  return slotTime <= now;
}

function generateCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return "SK-" + Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function getDayLabel(date: Date): string {
  const dow = date.getDay(); // 1=Mon..6=Sat
  if (dow === 0) return "Dom";
  return DAY_LABELS[dow - 1];
}

function isToday(date: Date): boolean {
  const now = new Date();
  return date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();
}

export default function AgendarOnline() {
  const [step, setStep] = useState<Step>("calendar");
  const [weekOffset, setWeekOffset] = useState<WeekOffset>(0);
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [bookingCode, setBookingCode] = useState("");

  // Booking form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  // Cancel form
  const [cancelCode, setCancelCode] = useState("");
  const [cancelPhone, setCancelPhone] = useState("");
  const [cancelOpen, setCancelOpen] = useState(false);

  const weekDays = generateWeekDays(weekOffset);

  function handleSlotClick(date: Date, time: string) {
    if (isSlotPast(date, time)) return;
    setSelectedSlot({ date: new Date(date), time });
    setStep("form");
    setTimeout(() => {
      document.getElementById("agendar-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot || !name.trim() || !phone.trim() || !service) return;
    const code = generateCode();
    setBookingCode(code);

    const d = selectedSlot.date;
    const dateStr = `${DAY_NAMES_FULL[d.getDay()]} ${d.getDate()} de ${MONTHS_FULL[d.getMonth()]} a las ${selectedSlot.time}`;
    const msg = encodeURIComponent(
      `Hola! Quiero confirmar mi reserva en Solkinest:\n\nCódigo: ${code}\nTratamiento: ${service}\nFecha: ${dateStr}\nNombre: ${name}\nTeléfono: ${phone}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setStep("success");
  }

  function handleCancelSubmit() {
    if (!cancelCode.trim() || !cancelPhone.trim()) return;
    const msg = encodeURIComponent(
      `Hola! Quiero cancelar mi reserva en Solkinest:\n\nCódigo: ${cancelCode}\nTeléfono: ${cancelPhone}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  }

  function resetAndGoBack() {
    setStep("calendar");
    setSelectedSlot(null);
    setName("");
    setPhone("");
    setService("");
    setBookingCode("");
  }

  const inputStyle = {
    fontFamily: "var(--font-montserrat)",
    color: "var(--color-text)",
    backgroundColor: "var(--color-bg-white)",
    borderColor: "var(--color-text-muted)",
    fontSize: "0.875rem",
  };

  const labelStyle = {
    color: "var(--color-primary)",
    fontFamily: "var(--font-montserrat)",
  };

  return (
    <section
      id="agendar"
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--color-bg-white)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col items-center mb-14">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-5"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat)" }}
          >
            Disponibilidad
          </p>
          <h2
            className="text-3xl md:text-4xl font-light italic text-center mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
          >
            Agendar en Línea
          </h2>
          <div className="w-14 h-px mb-6" style={{ backgroundColor: "var(--color-accent)" }} />
          <p
            className="text-sm text-center max-w-sm leading-relaxed"
            style={{ color: "var(--color-text-body)", fontFamily: "var(--font-montserrat)" }}
          >
            Selecciona el día y hora que prefieras. Tu reserva se confirmará por WhatsApp.
          </p>
        </div>

        {/* Week tabs */}
        <div className="flex gap-2 mb-8">
          {(["Esta semana", "Próxima semana"] as const).map((label, i) => {
            const offset = i as WeekOffset;
            const active = weekOffset === offset;
            return (
              <button
                key={label}
                onClick={() => setWeekOffset(offset)}
                className="px-5 py-2.5 text-[11px] tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 500,
                  backgroundColor: active ? "var(--color-primary-night)" : "transparent",
                  color: active ? "#ffffff" : "var(--color-text-body)",
                  border: `1px solid ${active ? "var(--color-primary-night)" : "var(--color-text-muted)"}`,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Calendar grid */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 mb-4">
          <div className="grid grid-cols-6 gap-2.5 min-w-[560px]">
            {weekDays.map((day, colIdx) => {
              const slots = getSlotsForDate(day);
              const todayFlag = isToday(day);

              return (
                <div key={colIdx} className="flex flex-col">
                  {/* Day header */}
                  <div
                    className="text-center py-3 mb-2 border-b"
                    style={{ borderColor: "var(--color-bg-teal-soft)" }}
                  >
                    <p
                      className="text-[10px] tracking-widest uppercase font-semibold mb-0.5"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        color: todayFlag ? "var(--color-primary)" : "var(--color-text-secondary)",
                      }}
                    >
                      {DAY_LABELS[colIdx]}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        color: todayFlag ? "var(--color-primary-deep)" : "var(--color-text-muted)",
                        fontWeight: todayFlag ? 600 : 400,
                      }}
                    >
                      {day.getDate()} {MONTHS_SHORT[day.getMonth()]}
                    </p>
                    {todayFlag && (
                      <span
                        className="inline-block mt-1 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      />
                    )}
                  </div>

                  {/* Slots */}
                  <div className="flex flex-col gap-1.5">
                    {slots.length === 0 ? (
                      <p
                        className="text-center py-4 text-[10px] tracking-wide uppercase"
                        style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-montserrat)" }}
                      >
                        Cerrado
                      </p>
                    ) : (
                      slots.map((time) => {
                        const past = isSlotPast(day, time);
                        const selected =
                          selectedSlot?.date.toDateString() === day.toDateString() &&
                          selectedSlot.time === time;

                        return (
                          <button
                            key={time}
                            disabled={past}
                            onClick={() => handleSlotClick(day, time)}
                            className="w-full py-2 text-center transition-all duration-150"
                            style={{
                              fontFamily: "var(--font-montserrat)",
                              fontWeight: 500,
                              fontSize: "0.7rem",
                              letterSpacing: "0.05em",
                              ...(selected
                                ? {
                                    backgroundColor: "var(--color-primary)",
                                    color: "#ffffff",
                                    border: "1px solid var(--color-primary)",
                                  }
                                : past
                                ? {
                                    backgroundColor: "var(--color-bg-neutral)",
                                    color: "var(--color-text-muted)",
                                    border: "1px solid transparent",
                                    cursor: "not-allowed",
                                    opacity: 0.45,
                                  }
                                : {
                                    backgroundColor: "var(--color-bg-teal-soft)",
                                    color: "var(--color-primary-deep)",
                                    border: "1px solid transparent",
                                  }),
                            }}
                          >
                            {time}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-5 mb-10">
          {[
            { bg: "var(--color-bg-teal-soft)", label: "Disponible" },
            { bg: "var(--color-primary)", label: "Seleccionado" },
            { bg: "var(--color-bg-neutral)", label: "Pasado", dim: true },
          ].map(({ bg, label, dim }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: bg, opacity: dim ? 0.45 : 1 }}
              />
              <span
                className="text-[10px] tracking-wide"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-montserrat)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Form panel ── */}
        {step === "form" && selectedSlot && (
          <div
            id="agendar-panel"
            className="border p-8 mb-10 scroll-mt-24"
            style={{
              borderColor: "var(--color-bg-teal-soft)",
              backgroundColor: "var(--color-bg-teal-whisper)",
            }}
          >
            {/* Selected slot summary */}
            <div
              className="flex items-start justify-between mb-7 pb-6 border-b"
              style={{ borderColor: "var(--color-bg-teal-soft)" }}
            >
              <div>
                <p
                  className="text-[10px] tracking-widest uppercase mb-1.5"
                  style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
                >
                  Hora seleccionada
                </p>
                <p
                  className="text-xl font-light"
                  style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
                >
                  {getDayLabel(selectedSlot.date)}{" "}
                  {selectedSlot.date.getDate()} de {MONTHS_FULL[selectedSlot.date.getMonth()]}
                  {" · "}
                  {selectedSlot.time}
                </p>
              </div>
              <button
                onClick={resetAndGoBack}
                className="text-[10px] tracking-widest uppercase mt-1 flex-shrink-0"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
              >
                ← Cambiar
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    className="block text-[10px] tracking-widest uppercase mb-2"
                    style={labelStyle}
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 outline-none border"
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-[10px] tracking-widest uppercase mb-2"
                    style={labelStyle}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+56 9 xxxx xxxx"
                    className="w-full px-4 py-3 outline-none border"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Service select */}
              <div>
                <label
                  className="block text-[10px] tracking-widest uppercase mb-2"
                  style={labelStyle}
                >
                  Tratamiento
                </label>
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 outline-none border appearance-none"
                  style={{
                    ...inputStyle,
                    color: service ? "var(--color-text)" : "var(--color-text-muted)",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23838C95' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: "36px",
                  }}
                >
                  <option value="" disabled>
                    Selecciona un tratamiento
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-3.5 text-[11px] tracking-widest uppercase text-white transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-primary-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-primary)")
                  }
                >
                  Confirmar reserva → WhatsApp
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── Success card ── */}
        {step === "success" && selectedSlot && (
          <div
            id="agendar-panel"
            className="border p-8 mb-10 scroll-mt-24"
            style={{
              borderColor: "var(--color-primary)",
              backgroundColor: "var(--color-bg-teal-whisper)",
            }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Check icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--color-bg-teal-soft)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <p
                className="text-[11px] tracking-[0.4em] uppercase mb-2"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
              >
                Reserva enviada
              </p>
              <h3
                className="text-2xl font-light italic mb-7"
                style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
              >
                ¡Gracias, {name}!
              </h3>

              {/* Booking summary card */}
              <div
                className="w-full max-w-sm p-6 mb-6 border text-left"
                style={{
                  borderColor: "var(--color-bg-teal-soft)",
                  backgroundColor: "var(--color-bg-white)",
                }}
              >
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                    >
                      Código de reserva
                    </p>
                    <p
                      className="text-2xl font-semibold tracking-wider"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        color: "var(--color-primary-deep)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {bookingCode}
                    </p>
                  </div>
                  <div
                    className="h-px"
                    style={{ backgroundColor: "var(--color-bg-teal-soft)" }}
                  />
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                    >
                      Fecha y hora
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
                    >
                      {getDayLabel(selectedSlot.date)}{" "}
                      {selectedSlot.date.getDate()} de {MONTHS_FULL[selectedSlot.date.getMonth()]}
                      {" · "}
                      {selectedSlot.time}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                    >
                      Tratamiento
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-text)" }}
                    >
                      {service}
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="text-xs italic mb-7 max-w-xs leading-relaxed"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
              >
                Guarda tu código. Tu reserva se confirmará por WhatsApp a la brevedad.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 text-[11px] tracking-widest uppercase text-white text-center transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--color-whatsapp)",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 600,
                  }}
                >
                  Ir a WhatsApp
                </a>
                <button
                  onClick={resetAndGoBack}
                  className="px-8 py-3 text-[11px] tracking-widest uppercase border transition-colors duration-200"
                  style={{
                    borderColor: "var(--color-text-muted)",
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 500,
                  }}
                >
                  Nueva reserva
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Cancel section ── */}
        <div
          className="border-t pt-8 mt-2"
          style={{ borderColor: "var(--color-bg-teal-soft)" }}
        >
          <button
            onClick={() => setCancelOpen(!cancelOpen)}
            className="flex items-center justify-between w-full text-left gap-4"
          >
            <span
              className="text-sm"
              style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
            >
              ¿Necesitas cancelar una reserva?
            </span>
            <span
              className="text-[10px] tracking-widest uppercase flex items-center gap-1.5 flex-shrink-0"
              style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
            >
              {cancelOpen ? "Cerrar" : "Ver"}
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transition: "transform 0.2s",
                  transform: cancelOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          {cancelOpen && (
            <div className="mt-6 space-y-4 max-w-md expanded-content">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-[10px] tracking-widest uppercase mb-2"
                    style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Código de reserva
                  </label>
                  <input
                    type="text"
                    value={cancelCode}
                    onChange={(e) => setCancelCode(e.target.value.toUpperCase())}
                    placeholder="SK-XXXXXX"
                    className="w-full px-4 py-3 outline-none border"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] tracking-widest uppercase mb-2"
                    style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Tu teléfono
                  </label>
                  <input
                    type="tel"
                    value={cancelPhone}
                    onChange={(e) => setCancelPhone(e.target.value)}
                    placeholder="+56 9 xxxx xxxx"
                    className="w-full px-4 py-3 outline-none border"
                    style={inputStyle}
                  />
                </div>
              </div>

              <button
                onClick={handleCancelSubmit}
                disabled={!cancelCode.trim() || !cancelPhone.trim()}
                className="px-8 py-3 text-[11px] tracking-widest uppercase border transition-colors duration-200 disabled:opacity-40"
                style={{
                  borderColor: "var(--color-primary-deep)",
                  color: "var(--color-primary-deep)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 500,
                }}
              >
                Cancelar reserva → WhatsApp
              </button>

              <p
                className="text-xs italic"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-montserrat)" }}
              >
                La cancelación debe realizarse con al menos 3 horas de anticipación.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
