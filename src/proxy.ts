import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.SESSION_SECRET || "fallback-secret-key-for-development-only";
const encodedKey = new TextEncoder().encode(secretKey);

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect /admin UI routes (except the login page at /admin)
  if (path.startsWith('/admin/')) {
    const cookie = request.cookies.get('admin_session')?.value;
    if (!cookie) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    try {
      await jwtVerify(cookie, encodedKey, { algorithms: ["HS256"] });
    } catch (error) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  // Protect /api/admin API routes (except auth and export)
  if (
    path.startsWith('/api/admin') &&
    !path.startsWith('/api/admin/auth') &&
    !path.startsWith('/api/admin/export')
  ) {
    const cookie = request.cookies.get('admin_session')?.value;
    if (!cookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
      await jwtVerify(cookie, encodedKey, { algorithms: ["HS256"] });
    } catch (error) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  // Redirect authenticated users away from login page
  if (path === '/admin') {
    const cookie = request.cookies.get('admin_session')?.value;
    if (cookie) {
      try {
        await jwtVerify(cookie, encodedKey, { algorithms: ["HS256"] });
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch (error) {
        // invalid token, let them stay on login page
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
