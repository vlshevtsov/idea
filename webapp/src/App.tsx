import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/ideas/AllIdeasPage'
import { ViewIdeaPage } from './pages/ideas/ViewIdeaPage'
import { SignUpPage } from './pages/auth/SignUpPage'
import * as routes from './lib/routes'
import { Layout } from './components/Layout'
import { NewIdeaPage } from './pages/ideas/NewIdeaPage'
import { SignInPage } from './pages/auth/SignInPage'
import { SignOutPage } from './pages/auth/SignOutPage'
import { EditIdeaPage } from './pages/ideas/EditIdeaPage'
import './styles/global.scss'
import { AppContextProvider } from './lib/ctx'
import { NotFoundPage } from './pages/other/NotFoundPage'
import { EditProfilePage } from './pages/auth/EditProfilePage'

export const App = () => {
  return (
    <TrpcProvider>
      <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getSignInRoute()} element={<SignInPage />} />
            <Route path={routes.getSignUpRoute()} element={<SignUpPage />} />
            <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
            <Route path={routes.getEditProfileRoute()} element={<EditProfilePage />} />
            <Route path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)} element={<ViewIdeaPage />} />
            <Route path={routes.getEditIdeaRoute(routes.editIdeaRouteParams)} element={<EditIdeaPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path={routes.getSignOutRoute()} element={<SignOutPage />} />
        </Routes>
      </BrowserRouter>
      </AppContextProvider>
    </TrpcProvider>
  )
}
