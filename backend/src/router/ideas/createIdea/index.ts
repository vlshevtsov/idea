import { trpcLoggedProcedure } from '../../../lib/trpc'
import { zCreateIdeaTrpcInput } from './input'

export const createIdeaTrpcRoute = trpcLoggedProcedure
  .input(zCreateIdeaTrpcInput)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.me) {
      throw Error('Not authenticated')
    }
    const exIdea = await ctx.prisma.idea.findUnique({
      where: {
        nick: input.nick
      },
    })
    if (exIdea) {
      throw Error('Nick already exists')
    }
    await ctx.prisma.idea.create({
      data: { ...input, authorId: ctx.me.id },
    })

    return true
  })
