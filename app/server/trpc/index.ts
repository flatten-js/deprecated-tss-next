import { TRPCError, initTRPC } from "@trpc/server"

import { TRPCContext } from "./context"



const t = initTRPC.context<TRPCContext>().create()

const authMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({ ctx })
})

export const router = t.router
export const procedure = {
  public: t.procedure,
  protected: t.procedure.use(authMiddleware)
}