import { router, procedure } from '@/server/trpc'
import { z } from 'zod'
import { 
  uniqueNamesGenerator, 
  adjectives, 
  colors, 
  animals 
} from 'unique-names-generator'

export const appRouter = router({
  create: (
    procedure.public
      .input(z.object({ sub: z.string() }))
      .mutation(async ({ ctx, input }) => {
        return await ctx.db.user.upsert({
          where: {
            google_sub: input.sub
          },
          update: {},
          create: {
            name: uniqueNamesGenerator({
              dictionaries: [adjectives, colors, animals],
              separator: '-'
            }),
            google_sub: input.sub
          }
        })
      })
  )
})

export type AppRouter = typeof appRouter