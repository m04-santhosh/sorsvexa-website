import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { format } from "date-fns";

export async function GET() {
  try {
    const bookings = await db.booking.findMany({
      orderBy: { createdAt: "desc" },
    });

    // CSV Header
    const headers = [
      "Full Name",
      "Company",
      "Email",
      "Phone",
      "Industry",
      "Service",
      "Budget",
      "Project Description",
      "Status",
      "Date",
    ];

    // Escape CSV cell (handles quotes, commas, newlines)
    const escapeCsv = (cell: string | null | undefined) => {
      if (!cell) return '""';
      const str = String(cell);
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    // Generate CSV rows
    const csvRows = bookings.map((booking) => {
      return [
        booking.fullName,
        booking.company,
        booking.email,
        booking.phone,
        booking.industry,
        booking.service,
        booking.budget,
        booking.description,
        booking.status,
        format(new Date(booking.createdAt), "yyyy-MM-dd HH:mm:ss"),
      ]
        .map(escapeCsv)
        .join(",");
    });

    const csvContent = [headers.join(","), ...csvRows].join("\n");

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="bookings_export_${format(
          new Date(),
          "yyyyMMdd_HHmmss"
        )}.csv"`,
      },
    });
  } catch (error) {
    console.error("Export Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
