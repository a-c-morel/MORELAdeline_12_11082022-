import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import Navbar from './components/Navbar'
import Aside from './components/Aside'

/**
 * Render the root div containing the app
 */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>
        <div className="container">
          <Aside />
          <main>
            <App />
          </main>
        </div>
      </div>
  </BrowserRouter>
)
