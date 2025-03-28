import _ from 'lodash'
import { trpcLoggedProcedure } from '../../../lib/trpc'
import { zGetIdeaTrpcInput } from './input'

export const getIdeaTrpcRoute = trpcLoggedProcedure
  .input(zGetIdeaTrpcInput).query(async ({ ctx, input }) => {
    const rawIdea = await ctx.prisma.idea.findUnique({
      where: {
        nick: input.ideaNick
      },
      include: {
        author: {
          select: {
            id: true,
            nick: true,
            name: true,
          },
        },
        ideasLikes: {
          select: {
            id: true
          },
          where: {
            userId: ctx.me?.id
          }
        },
        _count: {
          select: {
            ideasLikes: true
          }
        }
      }
    })

    if (rawIdea?.blockedAt) {
      throw new Error('Idea is blocked be admin')
    }
    const isLikedByMe = !!rawIdea?.ideasLikes.length
    const likesCount = rawIdea?._count.ideasLikes || 0
    const idea = rawIdea && { ..._.omit(rawIdea, ['ideasLikes', '_count']), isLikedByMe, likesCount }

    return { idea }
  })
