import { useLanguage } from '../../hooks/useLanguage'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} Nur Aziz Raihan
        <span className="footer-sep" aria-hidden="true" />
        <a href="/privacy.html">{t.privacy.title}</a>
      </p>
    </footer>
  )
}

export default Footer
