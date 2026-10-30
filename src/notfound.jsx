import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LanguageProvider from './i18n/LanguageProvider'
import NotFound from './components/NotFound/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <NotFound />
    </LanguageProvider>
  </StrictMode>,
)
