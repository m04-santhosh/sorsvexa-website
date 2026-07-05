import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

    // Insert into Supabase
    const { data, error } = await supabase
      .from("consultations")
      .insert([
        {
          full_name: full_name,
          company: company_name || null,
          email: email,
          phone: phone || null,
          business_type: industry || null,
          service: service || null,
          message: message,
          status: "New Lead",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation submitted successfully.",
        data,
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