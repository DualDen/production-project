import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

const AppRouter = () => {
  return (
      <div>
          <Suspense fallback={<PageLoader/>}>
              <Routes>
                  {Object.values(routesConfig).map(({ path, element }) => (
                      <Route key={path} path={path} element={element}/>
                  ))}
              </Routes>
          </Suspense>
      </div>
  )
}

export default AppRouter
