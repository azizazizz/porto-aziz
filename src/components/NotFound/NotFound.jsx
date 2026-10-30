import LanguageToggle from '../LanguageToggle/LanguageToggle'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useLanguage } from '../../hooks/useLanguage'
import './NotFound.css'

function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="notfound-page">
      <header className="notfound-bar">
        <div className="notfound-bar-inner">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className="notfound">
        <p className="notfound-code numeral" aria-hidden="true">
          404
        </p>
        <h1 className="notfound-title">{t.notFound.title}</h1>
        <p className="notfound-text">{t.notFound.text}</p>
        <a href="/" className="notfound-btn">
          <span aria-hidden="true">←</span> {t.notFound.back}
        </a>
      </main>
    </div>
  )
}

export default NotFound
