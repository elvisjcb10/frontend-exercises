import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>SPLI <br/>TTER</h2>
    <App />
  </StrictMode>,
)
