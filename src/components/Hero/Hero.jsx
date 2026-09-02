import { FaMapMarkerAlt, FaRegCheckCircle } from 'react-icons/fa'
import { useTypewriter } from '../../hooks/useTypewriter'
import { useLanguage } from '../../hooks/useLanguage'
import { PROJECTS_META } from '../../data/projects'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  const typed = useTypewriter(t.hero.roles)

  // Counts data/projects.js directly, so this stays correct as projects are
  // added or removed instead of being a number someone has to remember to bump.
  const stats = [...t.hero.stats, { value: `${PROJECTS_META.length}+`, label: t.hero.projectsShipped }]

  return (
    // The section runs full width so its colour wash can too; `.section` moves
    // to the inner wrapper, which is what actually holds the content column.
    <section id="home" className="hero">
      <div className="hero-inner section">
        <p className="hero-status">
          <span className="status-dot" />
          {t.hero.status}
        </p>

        <h1 className="hero-name">Nur Aziz Raihan</h1>

        <p className="hero-role">
          <span>{typed}</span>
          <span className="cursor" />
        </p>

        <p className="hero-bio">{t.hero.bio}</p>

        <ul className="hero-meta">
          <li>
            <FaMapMarkerAlt className="hero-meta-icon" aria-hidden="true" />
            {t.hero.location}
          </li>
          <li>
            <FaRegCheckCircle className="hero-meta-icon" aria-hidden="true" />
            {t.hero.availability}
          </li>
        </ul>

        <dl className="hero-stats">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <dt className="hero-stat-value">{stat.value}</dt>
              <dd className="hero-stat-label label">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            {t.hero.ctaWork}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.hero.ctaContact} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
