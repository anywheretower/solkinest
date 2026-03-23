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
 * Genera todos los slots posibles para un día dado
 */
function generateDaySlots(date: Date): { start: Date; end: Date }[] {
  const day = date.getDay(); // 0=dom, 1=lun, ..., 6=sab
  if (day === 0) return []; // domingo cerrado

  const blocks = day === 6 ? SCHEDULE.saturday : SCHEDULE.weekday;
  if (day >= 1 && day <= 5) {
    // weekday
  } else if (day !== 6) {
    return [];
  }

  const slots: { start: Date; end: Date }[] = [];

  for (const block of blocks) {
    let hour = block.start;
    while (hour < block.end) {
      const start = new Date(date);
      start.setHours(hour, 0, 0, 0);
      const end = new Date(start);
      end.setMinutes(end.getMinutes() + SLOT_DURATION);
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

  // Generar todos los slots del rango
  const allSlots: Slot[] = [];
  const current = new Date(fromDate);

  while (current <= toDate) {
    const daySlots = generateDaySlots(current);
    const now = new Date();

    for (const slot of daySlots) {
      // No mostrar slots pasados
      if (slot.start <= now) continue;

      // Verificar si el slot choca con algún evento existente
      const isBusy = busyTimes.some(
        (busy) => slot.start < busy.end && slot.end > busy.start
      );

      allSlots.push({
        start: slot.start.toISOString(),
        end: slot.end.toISOString(),
        available: !isBusy,
      });
    }

    current.setDate(current.getDate() + 1);
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
