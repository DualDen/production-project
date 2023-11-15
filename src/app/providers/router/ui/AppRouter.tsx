import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
      <div>
          <Suspense fallback={<div>Loading...</div>}>
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
