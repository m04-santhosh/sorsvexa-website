export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Normalized admin phone number for comparison
const ADMIN_PHONE = process.env.ADMIN_PHONE?.replace(/\D/g, "") || "917019820571";

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json({ message: "Phone number is required" }, { status: 400 });
    }

    const normalizedPhone = phone.replace(/\D/g, "");

    if (normalizedPhone !== ADMIN_PHONE) {
      return NextResponse.json({ message: "Unauthorized Admin" }, { status: 401 });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in database
    await db.otpRequest.create({
      data: {
        phone: normalizedPhone,
        code: otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiry
      }
    });

    // For development, we print the OTP to the console.
    // In production, you would integrate Twilio or another SMS provider here.
    console.log(`===========================================`);
    console.log(`[DEVELOPMENT] ADMIN OTP CODE IS: ${otp}`);
    console.log(`===========================================`);

    return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("OTP Request Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

