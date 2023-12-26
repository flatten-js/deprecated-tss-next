import { router, procedure } from '@/server/trpc'

import { appRouter as userAppRouter } from './user'

export const appRouter = router({
  hello: (
    procedure.public
      .query(opts => {
        return { hello: 'world' }
      })
  ),
  protected: (
    procedure.protected
      .query(opts => {
        return { hello: 'protected' }
      })
  ),
  user: userAppRouter
})

export type AppRouter = typeof appRouter