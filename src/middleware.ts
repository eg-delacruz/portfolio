import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'de'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  //matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],

  //Config according to the next-intl docs for the app router folder 22.3.24
  matcher: ['/', '/(de|en|es)/:path*'],
};
