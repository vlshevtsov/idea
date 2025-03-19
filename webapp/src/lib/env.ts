import { zEnvNonemptyTrimmed } from '@idea/shared/src/zod'
import { z } from 'zod'

export const zEnv = z.object({
  VITE_BACKEND_TRPC_URL: zEnvNonemptyTrimmed,
  VITE_WEBAPP_URL: zEnvNonemptyTrimmed,
})

// eslint-disable-next-line no-restricted-syntax
export const env = zEnv.parse(process.env)
