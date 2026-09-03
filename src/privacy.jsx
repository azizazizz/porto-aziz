import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LanguageProvider from './i18n/LanguageProvider'
import Privacy from './components/Privacy/Privacy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <Privacy />
    </LanguageProvider>
  </StrictMode>,
)
