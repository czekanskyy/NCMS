import { nc_roles } from '@prisma/client';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const ROLES_ALLOWED_TO_AUTH = new Set<nc_roles>([nc_roles.ADMIN, nc_roles.AUTHOR]);

export default withAuth(
  function middleware(req) {
    if (
      (req.nextUrl.pathname === '/dashboard' ||
        req.nextUrl.pathname.startsWith('/dashboard/users') ||
        req.nextUrl.pathname.startsWith('/dashboard/settings')) &&
      req.nextauth.token?.role !== nc_roles.ADMIN
    ) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role !== undefined && ROLES_ALLOWED_TO_AUTH.has(token.role),
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*'],
};
