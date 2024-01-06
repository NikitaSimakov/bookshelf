import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { AuthOptions } from "next-auth";
import { auth } from "@/app/firebase";

export const authConfig: AuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              // console.log("userCredential", userCredential.user);
              return {
                name: userCredential.user.displayName,
                email: userCredential.user.email,
              };
            }
            return null;
          })
          .catch((error) => console.log(error));
      },
    }),
  ],
};

export default NextAuth(authConfig);
