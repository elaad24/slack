// import NextAuth, { NextAuthOptions } from "next-auth"
import { NextAuthOptions } from "next-auth"
import GooogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"



export const authOptions : NextAuthOptions= {
    // Configure one or more authentication providers

    providers: [
        GooogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      // ...add more providers here
    ],
  }


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }