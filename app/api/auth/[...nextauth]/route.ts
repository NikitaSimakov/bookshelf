import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authConfig);

export { handler as POST, handler as GET };
