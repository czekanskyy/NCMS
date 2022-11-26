import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/api/prisma';
import { SHA3 } from 'crypto-js';
import { nc_users } from '@prisma/client';
import { SessionE, TokenE } from '@typings';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Nazwa użytkownika', type: 'text' },
        password: { label: 'Hasło', type: 'password' },
      },
      async authorize({ username, password }, req) {
        const user = prisma.nc_users.findFirst({
          where: {
            username,
            password: SHA3(password).toString(),
          },
        });
        if (user) return user;

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      let newToken = token as TokenE;
      if (user) {
        const newUser = user as nc_users;
        newToken = { token, ...newUser };
      }

      return newToken;
    },
    async session({ session, token }) {
      let newSession = session as SessionE;
      let newToken = token as TokenE;
      if (newToken) {
        newSession.user = newToken;
      }
      return newSession;
    },
  },
};

export default NextAuth(authOptions);
