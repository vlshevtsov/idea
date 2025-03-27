import { trpcLoggedProcedure } from '../../../lib/trpc'
import { getPasswordHash } from '../../../utils/getPasswordHash'
import { zSignInTrpcInput } from './input'
import { signJWT } from '../../../utils/signJWT'

export const signInTrpcRoute = trpcLoggedProcedure.input(zSignInTrpcInput).mutation(async ({ ctx, input }) => {
  const user = await ctx.prisma.user.findFirst({
    where: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  })
  if (!user) {
    throw new Error('Wrong nick or password')
  }
  const token = signJWT(user.id)
  return { token }
})
