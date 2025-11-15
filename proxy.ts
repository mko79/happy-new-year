import { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Get the pathname
  const { pathname } = request.nextUrl;

  // Check if the pathname starts with a locale
  const pathnameHasLocale = ['en', 'ar'].some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If there's no locale in the pathname, redirect to the default locale
  if (!pathnameHasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return Response.redirect(url);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};