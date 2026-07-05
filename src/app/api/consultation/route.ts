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

    // Reject empty required fields. Full name, email and message are collected in the UI.
    if (!full_name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Insert the submitted data into the Supabase table
    const { error } = await supabase.from("consultation_requests").insert([
      {
        full_name,
        company_name: company_name || null,
        email,
        phone: phone || null,
        industry: industry || null,
        service: service || null,
        budget: budget || null,
        message,
        status: "New Lead",
        source: "Website",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to submit consultation request." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Consultation request submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit consultation request." },
      { status: 500 }
    );
  }
}
