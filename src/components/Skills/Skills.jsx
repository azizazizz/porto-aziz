import { FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa'
import {
  SiArduino,
  SiBootstrap,
  SiCodeigniter,
  SiFlutter,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si'
import SectionHeading from '../SectionHeading/SectionHeading'
import { useLanguage } from '../../hooks/useLanguage'
import './Skills.css'

// `color` is each technology's own brand colour. The grid sits monochrome at
// rest so it never reads as a swatch library; the colour only appears on the
// chip you are pointing at or pressing. Entries without an official colour
// (a language or a concept rather than a product) fall back to the accent.
const GROUPS = [
  {
    key: 'frontend',
    items: [
      { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4fc08d' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'CodeIgniter', icon: SiCodeigniter, color: '#ef4223' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Hapi.js', icon: null, color: null },
    ],
  },
  {
    key: 'database',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'SQL', icon: FaDatabase, color: null },
    ],
  },
  {
    key: 'mobile',
    items: [{ name: 'Flutter', icon: SiFlutter, color: '#02569b' }],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub', icon: FaGithub, color: null },
      { name: 'Arduino / IoT', icon: SiArduino, color: '#00979d' },
      { tKey: 'security', icon: null, color: null },
    ],
  },
]

function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section skills">
      <SectionHeading number="02" title={t.skills.title} subtitle={t.skills.subtitle} />

      <div className="skills-grid">
        {GROUPS.map((group) => (
          <div className="skill-group" key={group.key}>
            <p className="skill-group-label label">{t.skills.groups[group.key]}</p>
            <div className="skill-chips">
              {group.items.map((item) => {
                const Icon = item.icon
                const label = item.name || t.skills.items[item.tKey]
                return (
                  <span
                    className="chip"
                    key={item.name || item.tKey}
                    style={{ '--chip-color': item.color || 'var(--accent)' }}
                  >
                    {Icon && <Icon className="chip-icon" />}
                    {label}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
