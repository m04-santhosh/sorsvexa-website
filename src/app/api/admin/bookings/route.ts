export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const service = searchParams.get("service") || "";
    const sort = searchParams.get("sort") || "desc"; // desc (newest) or asc (oldest)
    
    const skip = (page - 1) * limit;

    // Build the query
    const where: Prisma.BookingWhereInput = {};

    if (search) {
      where.OR = [
        { fullName: { contains: search } },
        { company: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } },
      ];
    }

    if (status && status !== "All") {
      where.status = status;
    }

    if (service && service !== "All") {
      where.service = service;
    }

    // Execute query
    const [bookings, total] = await Promise.all([
      db.booking.findMany({
        where,
        orderBy: {
          createdAt: sort === "asc" ? "asc" : "desc",
        },
        skip,
        take: limit,
      }),
      db.booking.count({ where }),
    ]);

    return NextResponse.json({
      bookings,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Bookings Fetch Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

