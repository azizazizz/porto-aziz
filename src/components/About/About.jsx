import SectionHeading from '../SectionHeading/SectionHeading'
import { useLanguage } from '../../hooks/useLanguage'
import './About.css'

const STACK = ['JavaScript', 'Vue.js', 'Node.js', 'Hapi.js', 'PHP', 'CodeIgniter', 'Flutter', 'SQL']

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about">
      <SectionHeading number="01" title={t.about.title} subtitle={t.about.subtitle} />

      <p className="about-lead">{t.about.lead}</p>

      <div className="about-copy">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
        <p className="about-stack-label label">{t.about.stackLabel}</p>
        <ul className="about-stack">
          {STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
