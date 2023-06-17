import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GooogleProvider from "next-auth/providers/google"



export const authOptions : NextAuthOptions= {
    // Configure one or more authentication providers
    providers: [
        GooogleProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
  }


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }