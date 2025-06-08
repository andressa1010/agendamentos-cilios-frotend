import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyled } from './Global/GlobalStyled.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled/>
    <App />
  </StrictMode>,
)
