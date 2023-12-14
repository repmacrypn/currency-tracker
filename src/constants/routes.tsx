import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router'

import { PATH } from '@/constants/path'

const Home = lazy(() => import('@/pages/Home').then(({ Home }) => ({ default: Home })))
const TimeLine = lazy(() => import('@/components/TimeLineContainer'))
const BankCard = lazy(() => import('@/components/BankCardContainer'))
const Contacts = lazy(() =>
  import('@/pages/Contacts').then(({ Contacts }) => ({ default: Contacts })),
)
const PageNotFound = lazy(() =>
  import('@/pages/PageNotFound').then(({ PageNotFound }) => ({ default: PageNotFound })),
)

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={PATH.HOME} /> },
  { path: PATH.HOME, element: <Home /> },
  { path: PATH.TIMELINE, element: <TimeLine /> },
  { path: PATH.BANK_CARD, element: <BankCard /> },
  { path: PATH.CONTACTS, element: <Contacts /> },
  { path: '*', element: <PageNotFound /> },
]
