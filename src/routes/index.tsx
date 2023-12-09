import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from '@/constants/routes'

export const Pages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
