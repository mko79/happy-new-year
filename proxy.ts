import { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Get the pathname
  const { pathname } = request.nextUrl;

  // Skip static assets - don't redirect these
  const staticAssetPatterns = [
    '/sounds/',
    '/images/',
    '/locales/',
    '.svg',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.ico',
    '.mp3',
    '.wav',
    '.ogg',
    '.webp',
  ];

  const isStaticAsset = staticAssetPatterns.some(pattern => pathname.includes(pattern));

  // Skip _next internal paths and static assets
  if (pathname.startsWith('/_next') || isStaticAsset) {
    return;
  }

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
    // Match all paths except _next (which is handled in the function)
    '/((?!_next).*)',
  ],
};