import { NextResponse } from "next/server";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const { mobileNumber, password } = await request.json();

    if (!mobileNumber || !password) {
      return NextResponse.json(
        { error: "Mobile Number and Password are required" },
        { status: 400 }
      );
    }

    if (mobileNumber === "7019820571" && password === "Santhosh@123") {
      // Create secure session
      await createSession("admin");
      
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid Mobile Number or Password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
