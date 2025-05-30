import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Notes  from './Context/Notes.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Notes>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  
    </Notes>

  </StrictMode>,
)
