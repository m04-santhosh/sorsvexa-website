import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { createSession } from '@/lib/session';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Check if an admin already exists
    const existingAdminCount = await db.admin.count();
    if (existingAdminCount > 0) {
      return NextResponse.json({ message: 'Admin already exists' }, { status: 403 });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create admin
    const admin = await db.admin.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });

    // Create session
    await createSession(admin.id);

    return NextResponse.json({ message: 'Admin created successfully' });
  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
