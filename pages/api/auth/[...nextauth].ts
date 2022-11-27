import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/api/prisma';
import { SHA3 } from 'crypto-js';

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
      if (user) {
        token = { token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
