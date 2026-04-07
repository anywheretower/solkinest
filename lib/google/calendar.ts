import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: SCOPES,
  });
}

const calendar = google.calendar({ version: "v3", auth: getAuth() });

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID!;
const TIMEZONE = "America/Santiago";

// Horarios de atención
const SCHEDULE = {
  // Lun(1)–Vie(5): dos bloques
  weekday: [
    { start: 11, end: 15 }, // 11:00–15:00
    { start: 16, end: 19 }, // 16:00–19:00
  ],
  // Sáb(6)
  saturday: [
    { start: 9, end: 14 }, // 09:00–14:00
  ],
};

const SLOT_DURATION = 60; // minutos por slot

type Slot = {
  start: string; // ISO 8601
  end: string;
  available: boolean;
};

/**
 * Obtiene los componentes de fecha en Chile para cualquier Date (UTC o local).
 */
function getChileComponents(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    year: "numeric", month: "numeric", day: "numeric", weekday: "short",
    hour: "numeric", minute: "numeric", hour12: false,
  });
  const parts = fmt.formatToParts(date);
  const get = (type: string) => parseInt(parts.find((p) => p.type === type)?.value || "0");
  const weekdayStr = parts.find((p) => p.type === "weekday")?.value || "";
  const dayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    year: get("year"),
    month: get("month") - 1, // 0-indexed
    day: get("day"),
    dayOfWeek: dayMap[weekdayStr] ?? 0,
  };
}

/**
 * Crea un Date UTC que representa una hora específica en Chile.
 * Ej: dateInChile(2026, 3, 8, 11) → Date UTC que equivale a 11:00 Chile.
 */
function dateInChile(year: number, month: number, day: number, hour: number): Date {
  const tentative = new Date(Date.UTC(year, month, day, hour, 0, 0, 0));
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE, hour: "numeric", hour12: false,
  });
  const chileHour = parseInt(fmt.format(tentative));
  const diff = (chileHour === 24 ? 0 : chileHour) - hour;
  return new Date(tentative.getTime() - diff * 3600_000);
}

/**
 * Genera todos los slots posibles para una fecha en Chile.
 */
function generateDaySlots(chile: { year: number; month: number; day: number; dayOfWeek: number }): { start: Date; end: Date }[] {
  if (chile.dayOfWeek === 0) return []; // domingo cerrado

  const blocks = chile.dayOfWeek === 6 ? SCHEDULE.saturday : SCHEDULE.weekday;
  const slots: { start: Date; end: Date }[] = [];

  for (const block of blocks) {
    let hour = block.start;
    while (hour < block.end) {
      const start = dateInChile(chile.year, chile.month, chile.day, hour);
      const end = new Date(start.getTime() + SLOT_DURATION * 60_000);
      slots.push({ start, end });
      hour++;
    }
  }

  return slots;
}

/**
 * Obtiene slots disponibles para un rango de fechas
 */
export async function getAvailableSlots(
  fromDate: Date,
  toDate: Date
): Promise<Slot[]> {
  // Obtener eventos existentes del calendario
  const res = await calendar.events.list({
    calendarId: CALENDAR_ID,
    timeMin: fromDate.toISOString(),
    timeMax: toDate.toISOString(),
    singleEvents: true,
    orderBy: "startTime",
    timeZone: TIMEZONE,
  });

  const busyTimes = (res.data.items || []).map((event) => ({
    start: new Date(event.start?.dateTime || event.start?.date || ""),
    end: new Date(event.end?.dateTime || event.end?.date || ""),
  }));

  // Generar todos los slots del rango iterando por días de Chile
  const allSlots: Slot[] = [];
  const now = new Date();

  // Iterar usando UTC noon para evitar problemas de boundary de timezone
  const current = new Date(fromDate);
  current.setUTCHours(12, 0, 0, 0);
  const endMark = new Date(toDate);
  endMark.setUTCHours(12, 0, 0, 0);

  const seen = new Set<string>();

  while (current <= endMark) {
    const chile = getChileComponents(current);
    const key = `${chile.year}-${chile.month}-${chile.day}`;
    if (!seen.has(key)) {
      seen.add(key);
      const daySlots = generateDaySlots(chile);

      for (const slot of daySlots) {
        if (slot.start <= now) continue;

        const isBusy = busyTimes.some(
          (busy) => slot.start < busy.end && slot.end > busy.start
        );

        allSlots.push({
          start: slot.start.toISOString(),
          end: slot.end.toISOString(),
          available: !isBusy,
        });
      }
    }

    current.setUTCDate(current.getUTCDate() + 1);
  }

  return allSlots;
}

/**
 * Crea una reserva en el calendario
 */
export async function createBooking(params: {
  start: string;
  end: string;
  nombre: string;
  telefono: string;
  tratamiento: string;
}) {
  const event = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: {
      summary: `Reserva: ${params.nombre} — ${params.tratamiento}`,
      description: [
        `Cliente: ${params.nombre}`,
        `Teléfono: ${params.telefono}`,
        `Tratamiento: ${params.tratamiento}`,
        `Reservado desde: solkinest.cl`,
      ].join("\n"),
      start: {
        dateTime: params.start,
        timeZone: TIMEZONE,
      },
      end: {
        dateTime: params.end,
        timeZone: TIMEZONE,
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "popup", minutes: 60 },
          { method: "popup", minutes: 15 },
        ],
      },
    },
  });

  return {
    id: event.data.id,
    start: event.data.start?.dateTime,
    end: event.data.end?.dateTime,
    summary: event.data.summary,
  };
}

/**
 * Cancela una reserva del calendario
 */
export async function cancelBooking(eventId: string) {
  await calendar.events.delete({
    calendarId: CALENDAR_ID,
    eventId,
  });
}
