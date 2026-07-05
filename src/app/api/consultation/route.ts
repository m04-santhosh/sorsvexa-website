import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      full_name,
      company_name,
      email,
      phone,
      industry,
      service,
      budget,
      message,
    } = body;

    // Required fields
    if (!full_name || !email || !message || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Save to SQLite via Prisma
    const booking = await db.booking.create({
      data: {
        fullName: full_name,
        company: company_name || null,
        email,
        phone,
        industry: industry || null,
        service: service || null,
        budget: budget || null,
        description: message,
      },
    });

    console.log("Saved consultation request:", booking);

    return NextResponse.json(
      {
        success: true,
        message: "Consultation submitted successfully.",
        data: booking,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}