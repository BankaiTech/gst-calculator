import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GstCalculator from './components/GstCalculator'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GstCalculator />
  </StrictMode>,
)
