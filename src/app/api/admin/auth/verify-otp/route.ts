export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createSession } from "@/lib/session";

const ADMIN_PHONE = process.env.ADMIN_PHONE?.replace(/\D/g, "") || "917019820571";

export async function POST(request: Request) {
  try {
    const { phone, code } = await request.json();

    if (!phone || !code) {
      return NextResponse.json({ message: "Phone and code are required" }, { status: 400 });
    }

    const normalizedPhone = phone.replace(/\D/g, "");

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

