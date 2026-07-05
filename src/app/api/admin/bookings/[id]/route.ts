import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await request.json();

    if (!status) {
      return NextResponse.json({ message: "Status is required" }, { status: 400 });
    }

    const updatedBooking = await db.booking.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ booking: updatedBooking });
  } catch (error) {
    console.error("Update Booking Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await db.booking.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Delete Booking Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
