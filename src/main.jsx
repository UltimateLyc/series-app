// Libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import App from './pages/App'

// Styles
import './index.css'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
