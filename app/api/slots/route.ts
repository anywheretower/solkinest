import { NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/google/calendar";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (!from || !to) {
    return NextResponse.json(
      { error: "Parámetros 'from' y 'to' son requeridos (ISO 8601)" },
      { status: 400 }
    );
  }

  try {
    const slots = await getAvailableSlots(new Date(from), new Date(to));
    return NextResponse.json({ slots });
  } catch (err) {
    console.error("Error al obtener slots:", err);
    return NextResponse.json(
      { error: "Error al consultar disponibilidad" },
      { status: 500 }
    );
  }
}
