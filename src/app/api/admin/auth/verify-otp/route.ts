export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createSession } from "@/lib/session";

// Allowed admin phone number
const ADMIN_PHONE = "7019820571";

export async function POST(request: Request) {
  try {
    const { phone, code } = await request.json();

    if (!phone || !code) {
      return NextResponse.json({ message: "Phone and code are required" }, { status: 400 });
    }

    let normalizedPhone = phone.replace(/\D/g, "");

    // If it starts with country code 91, strip it for consistent comparison
    if (normalizedPhone.startsWith("91") && normalizedPhone.length === 12) {
      normalizedPhone = normalizedPhone.substring(2);
    }

    console.log(`[AUTH DEBUG] Verify Phone: ${phone} (Normalized: ${normalizedPhone})`);
    console.log(`[AUTH DEBUG] Allowed Admin Phone: ${ADMIN_PHONE}`);

    if (normalizedPhone !== ADMIN_PHONE) {
      return NextResponse.json({ message: "Unauthorized Admin" }, { status: 401 });
    }

    // Find the latest valid OTP for this phone
    const otpRequest = await db.otpRequest.findFirst({
      where: {
        phone: normalizedPhone,
        code: code,
        expiresAt: {
          gt: new Date(),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!otpRequest) {
      return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 401 });
    }

    // OTP is valid! Delete the request so it can't be reused
    await db.otpRequest.deleteMany({
      where: { phone: normalizedPhone },
    });

    // Create session
    await createSession(normalizedPhone);

    return NextResponse.json({ message: "Logged in successfully" }, { status: 200 });
  } catch (error) {
    console.error("OTP Verify Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

