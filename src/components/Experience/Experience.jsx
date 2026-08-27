import SectionHeading from '../SectionHeading/SectionHeading'
import { useLanguage } from '../../hooks/useLanguage'
import './Experience.css'

const ORDER = ['coding-camp', 'infradigital']

// Company logos are optional — an id without a matching file here just
// keeps the plain timeline dot instead of a badge.
const LOGOS = Object.fromEntries(
  Object.entries(
    import.meta.glob('../../assets/logos/*.{png,jpg,jpeg,svg}', {
      eager: true,
      import: 'default',
    }),
  ).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]),
)

// `mono: true` marks a single-color (white) mark that needs inverting in
// light theme, since it would otherwise vanish against the light badge.
const COMPANY_LOGO = {
  'coding-camp': { src: LOGOS['coding-camp'], mono: true },
  infradigital: { src: LOGOS.infradigital, mono: false },
}

function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section experience">
      <SectionHeading number="04" title={t.experience.title} subtitle={t.experience.subtitle} />

      <div className="timeline">
        {ORDER.map((id, i) => {
          const role = t.experience.items[id]
          const logo = COMPANY_LOGO[id]
          return (
            <div className="timeline-entry" key={id}>
              <div className="timeline-rail">
                {logo ? (
                  <span className="timeline-logo">
                    <img src={logo.src} alt="" className={logo.mono ? 'mono' : undefined} />
                  </span>
                ) : (
                  <span className="timeline-dot" />
                )}
                {i !== ORDER.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <p className="timeline-date">{role.date}</p>
                <p className="timeline-title">
                  {role.title} <span className="at">@ {role.company}</span>
                </p>
                <ul className="timeline-highlights">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
