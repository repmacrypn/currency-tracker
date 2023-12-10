import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { App } from '@/components/App'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback'
import { store } from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </HashRouter>,
)
