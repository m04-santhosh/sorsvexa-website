import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const adminCount = await db.admin.count();
    return NextResponse.json({ hasAdmin: adminCount > 0 });
  } catch (error) {
    console.error('Check Admin Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
