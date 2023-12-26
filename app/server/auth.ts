import NextAuth from "next-auth/next"
import { AuthOptions, getServerSession } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

import { env } from '@/env.mjs'
import { createServerCaller } from "./trpc/context"


export const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return { id: profile.sub }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async signIn({ profile }) {
      if (profile) {
        const caller = await createServerCaller()
        const user = await caller.user.create({ sub: profile.sub! })
        profile.name = user.name
      }
      return true
    },
    jwt({ token, profile }) {
      if (profile) {
        token.name = profile.name
      }
      return token
    }
  }
}

export const getServerAuthSession = () => getServerSession(authOptions)

export default NextAuth(authOptions)