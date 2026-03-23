import { NextResponse } from "next/server";
import { createBooking, cancelBooking } from "@/lib/google/calendar";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { start, end, nombre, telefono, tratamiento } = body;

    if (!start || !end || !nombre || !telefono || !tratamiento) {
      return NextResponse.json(
        { error: "Campos requeridos: start, end, nombre, telefono, tratamiento" },
        { status: 400 }
      );
    }

    const booking = await createBooking({
      start,
      end,
      nombre,
      telefono,
      tratamiento,
    });

    return NextResponse.json({ booking });
  } catch (err) {
    console.error("Error al crear reserva:", err);
    return NextResponse.json(
      { error: "Error al crear la reserva" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get("id");

  if (!eventId) {
    return NextResponse.json(
      { error: "Parámetro 'id' es requerido" },
      { status: 400 }
    );
  }

  try {
    await cancelBooking(eventId);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error al cancelar reserva:", err);
    return NextResponse.json(
      { error: "Error al cancelar la reserva" },
      { status: 500 }
    );
  }
}
