// import createMiddleware from 'next-intl/middleware';

// import { locales } from '@/constants';

// export default createMiddleware({
//   locales,
//   defaultLocale: 'uz',
//   localeDetection: false,
//   localePrefix: "as-needed",
// });

// export const config = {
//   matcher: [
//     '/((?!api|_next|_vercel|.*\\..*).*)',
//     '/([\\w-]+)?/users/(.+)'
//   ]
// };
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en|uz)/:path*']
};