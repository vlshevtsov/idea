import { z } from 'zod'

export const zEnv = z.object({
  VITE_BACKEND_TRPC_URL: z.string().trim().min(1),
  VITE_WEBAPP_URL: z.string().trim().min(1),
})

// eslint-disable-next-line no-restricted-syntax
export const env = zEnv.parse(process.env)
