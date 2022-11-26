import { nc_users } from '@prisma/client';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

type TokenE = JWT & nc_users;

type SessionE = Session & {
  user: nc_users;
};
