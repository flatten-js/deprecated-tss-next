import { headers } from "next/headers"
import { Session } from "next-auth"
import { PrismaClient } from "@prisma/client"

import { getServerAuthSession } from "@/server/auth"
import { db } from '@/server/prisma'
import { appRouter } from "./routes"


export type TRPCContext = {
  db: PrismaClient,
  session: Session | null,
  headers: Headers
}

export async function createTRPCContext(opts: { headers: TRPCContext['headers'] }) {
  const session = await getServerAuthSession()
  return { db, session, ...opts }
}

export async function createServerCaller() {
  const ctx: TRPCContext = await createTRPCContext({ headers: headers() })
  return appRouter.createCaller(ctx)
}