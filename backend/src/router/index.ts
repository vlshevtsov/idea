import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { trpc } from '../lib/trpc'
import { getIdeaTrpcRoute } from './ideas/getIdea'
import { getIdeasTrpcRoute } from './ideas/getIdeas'
import { createIdeaTrpcRoute } from './ideas/createIdea'
import { signUpTrpcRoute } from './auth/SignUp'
import { signInTrpcRoute } from './auth/signIn'
import { getMeTrpcRoute } from './auth/getMe'
import { updateProfileTrpcRoute } from './auth/updateProfile'
import { updateIdeaTrpcRoute } from './ideas/updateIdea'

export const trpcRouter = trpc.router({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  createIdea: createIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  signIn: signInTrpcRoute,
  getMe: getMeTrpcRoute,
  updateProfile: updateProfileTrpcRoute,
  updateIdea: updateIdeaTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>
