import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Principal from './Pages/Principal.jsx'
import AgendaCita from './Pages/AgendaCita.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
   <StrictMode>
   <AgendaCita />
 </StrictMode>,
)

//Se agrega comentario en el Main 