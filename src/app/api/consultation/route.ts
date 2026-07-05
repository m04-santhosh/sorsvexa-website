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
    if (!full_name || !email || !message) {
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

    // Temporarily returning success without saving since Supabase was removed
    console.log("Received consultation request:", {
      full_name,
      company_name,
      email,
      phone,
      industry,
      service,
      budget,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Consultation submitted successfully.",
        data: [],
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