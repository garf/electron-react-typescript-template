import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import AppRoutes from './app-routes'

function render() {
  const container = document.getElementById('app')
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </React.StrictMode>
  )
}

render()
