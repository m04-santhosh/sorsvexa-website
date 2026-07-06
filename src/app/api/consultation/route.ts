export const runtime = 'nodejs';
import { NextResponse } from "next/server";

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

    // Mock saving to a database
    const booking = {
      id: "mock-" + Date.now(),
      fullName: full_name,
      company: company_name || null,
      email,
      phone,
      industry: industry || null,
      service: service || null,
      budget: budget || null,
      description: message,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    console.log("Mock saved consultation request:", booking);

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
