export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Allowed admin phone number
const ADMIN_PHONE = "7019820571";

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json({ message: "Phone number is required" }, { status: 400 });
    }

    let normalizedPhone = phone.replace(/\D/g, "");
    
    // If it starts with country code 91, strip it for consistent comparison
    if (normalizedPhone.startsWith("91") && normalizedPhone.length === 12) {
      normalizedPhone = normalizedPhone.substring(2);
    }

    console.log(`[AUTH DEBUG] Entered Phone: ${phone} (Normalized: ${normalizedPhone})`);
    console.log(`[AUTH DEBUG] Allowed Admin Phone: ${ADMIN_PHONE}`);

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
