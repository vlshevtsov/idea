import { zStringRequired } from '@idea/shared/src/zod'
import { z } from 'zod'

export const zSetIdeaLikeIdeaTrpcInput = z.object({
  ideaId: zStringRequired,
  isLikedByMe: z.boolean(),
})
