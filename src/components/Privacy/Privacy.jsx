import LanguageToggle from '../LanguageToggle/LanguageToggle'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useLanguage } from '../../hooks/useLanguage'
import './Privacy.css'

const EMAIL = 'zizraihan508@gmail.com'

function Privacy() {
  const { t } = useLanguage()

  return (
    <>
      <header className="privacy-bar">
        <div className="privacy-bar-inner">
          <a href="/" className="privacy-back">
            {t.privacy.back}
          </a>
          <div className="privacy-bar-actions">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="privacy section">
        <h1 className="privacy-title">{t.privacy.title}</h1>
        <p className="privacy-updated label">{t.privacy.updated}</p>

        {t.privacy.body.map((paragraph) => (
          <p className="privacy-p" key={paragraph.slice(0, 40)}>
            {paragraph}
          </p>
        ))}

        <p className="privacy-contact">
          {t.privacy.contactLabel} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </main>
    </>
  )
}

export default Privacy
