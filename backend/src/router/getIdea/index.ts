import { trpc } from '../../lib/trpc'
import { z } from 'zod'

export const getIdeaTrpcRoute = trpc.procedure
  .input(
    z.object({
      ideaNick: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    const idea = await ctx.prisma.idea.findUnique({
      where: {
        nick: input.ideaNick
      },
      include: {
        author: {
          select: {
            id: true,
            nick: true
          }
        }
      }
    })
    console.log({ idea })

    return { idea }
  })
