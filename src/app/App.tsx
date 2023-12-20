import React, { type ReactElement, Suspense, useEffect } from 'react'
import './index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/theme/useTheme'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = (): ReactElement => {
  const { theme } = useTheme()
  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback={'...Loading'}>
              <Navbar/>
              <div className={'content-page'}>
                  <Sidebar/>
                  <div className={'page-wrapper'}>
                      <AppRouter/>
                  </div>
              </div>
          </Suspense>
      </div>
  )
}

export default App
