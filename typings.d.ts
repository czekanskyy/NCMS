import { nc_users } from '@prisma/client';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

// type TokenE = JWT & nc_users;

// type SessionE = Session & {
//   user: nc_users;
// };

declare module 'next-auth/jwt' {
  interface JWT extends nc_users {}
}

declare module 'next-auth' {
  interface Session {
    user?: nc_users & DefaultSession['user'];
  }

  interface User extends nc_users {}
}
