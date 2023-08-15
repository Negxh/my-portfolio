import { BrowserRouter, HashRouter } from 'react-router-dom'
import './App.scss'

import { Navigation } from './Components/layouts/Navigation'
import { NavRouter } from './Components/routes/NavRouter'

function App() {

  return (
    <HashRouter basename='/'>
      <div className="layout">
        {/* Header */}
        <Navigation />

        {/* Content */}
        <div className="content">
          <NavRouter />
        </div>

      </div>
    </HashRouter>
  )
}

export default App
