import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { createTrpcRouter } from '../lib/trpc'
import { getIdeaTrpcRoute } from './ideas/getIdea'
import { getIdeasTrpcRoute } from './ideas/getIdeas'
import { createIdeaTrpcRoute } from './ideas/createIdea'
import { blockIdeaTrpcRoute } from './ideas/blockIdea'
import { signUpTrpcRoute } from './auth/SignUp'
import { updatePasswordTrpcRoute } from './auth/updatePassword'
import { signInTrpcRoute } from './auth/signIn'
import { getMeTrpcRoute } from './auth/getMe'
import { updateProfileTrpcRoute } from './auth/updateProfile'
import { updateIdeaTrpcRoute } from './ideas/updateIdea'
import { setIdeaLikeTrpcRoute } from './ideas/setIdeaLike'

export const trpcRouter = createTrpcRouter({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  createIdea: createIdeaTrpcRoute,
  blockIdea: blockIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  updatePassword: updatePasswordTrpcRoute,
  signIn: signInTrpcRoute,
  getMe: getMeTrpcRoute,
  updateProfile: updateProfileTrpcRoute,
  updateIdea: updateIdeaTrpcRoute,
  setIdeaLike: setIdeaLikeTrpcRoute
})

export type TrpcRouter = typeof trpcRouter
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>
