import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_PATHS = ['/dashboard', '/leagues', '/settings'];

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('better-auth.session_token');
  const { pathname } = request.nextUrl;

  const isProtectedPath = PROTECTED_PATHS.some(path => pathname.startsWith(path));

  if (isProtectedPath && !sessionToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/leagues/:path*', '/settings/:path*'],
};
