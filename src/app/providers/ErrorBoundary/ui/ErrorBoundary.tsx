import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { withTranslation } from 'react-i18next'
import { PageError } from 'widgets/PageError/ui/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props
    if (this.state.hasError) {
      return <Suspense fallback=''>
          <PageError/>
      </Suspense>
    }

    return children
  }
}

export default withTranslation()(ErrorBoundary)
