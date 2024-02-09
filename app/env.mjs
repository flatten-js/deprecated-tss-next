import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    DATABASE_URL: z.string().url(),
    MONGODB_URI: z.string().url(),
    PAYLOAD_SECRET: z.string().min(1),
    PAYLOAD_CONFIG_PATH: z.string().min(1)
  },
  client: {}
})