import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.SESSION_SECRET || "fallback-secret-key-for-development-only";
const encodedKey = new TextEncoder().encode(secretKey);

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define protected routes
  const isProtectedRoute = path.startsWith('/admin/dashboard') || path.startsWith('/admin/bookings');
  
  if (isProtectedRoute) {
    const cookie = request.cookies.get('admin_session')?.value;
    
    if (!cookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      await jwtVerify(cookie, encodedKey, {
        algorithms: ["HS256"],
      });
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect authenticated users away from login page
  if (path === '/admin/login' || path === '/admin') {
    const cookie = request.cookies.get('admin_session')?.value;
    if (cookie) {
      try {
        await jwtVerify(cookie, encodedKey, {
          algorithms: ["HS256"],
        });
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch (error) {
        // invalid token, let them go to login
      }
    }
    
    if (path === '/admin') {
       return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/login', '/admin/dashboard/:path*', '/admin/bookings/:path*'],
};
