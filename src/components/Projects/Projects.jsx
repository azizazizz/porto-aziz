import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectModal from './ProjectModal'
import { useLanguage } from '../../hooks/useLanguage'
import { PROJECTS_META } from '../../data/projects'
import './Projects.css'

function loadImages(folder) {
  const modules = import.meta.glob('../../assets/projects/*/*.jpg', {
    eager: true,
    import: 'default',
  })
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url)
}

// A project without a matching assets/projects/<id> folder just gets no
// images — ProjectMedia/ProjectModal already fall back to a placeholder.
const PROJECTS = PROJECTS_META.map((project) => ({
  ...project,
  images: loadImages(project.id),
}))

function ProjectMedia({ project, index }) {
  if (project.images.length > 0) {
    return <img src={project.images[0]} alt={project.name} loading="lazy" />
  }
  return (
    <div className="media-placeholder" aria-hidden="true">
      <span className="media-index">{String(index + 1).padStart(2, '0')}</span>
    </div>
  )
}

function Projects() {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState(null)

  // Resolve copy at render time so an open modal follows a language switch.
  const projects = PROJECTS.map((project) => ({
    ...project,
    ...t.projects.items[project.id],
  }))
  const activeProject = projects.find((project) => project.id === activeId) || null

  return (
    <section id="projects" className="section projects">
      <SectionHeading number="03" title={t.projects.title} subtitle={t.projects.subtitle} />

      <div className="project-list">
        {projects.map((project, i) => (
          <button
            type="button"
            className="project-card"
            key={project.id}
            onClick={() => setActiveId(project.id)}
          >
            <div className="project-media">
              <ProjectMedia project={project} index={i} />
              <div className="media-overlay">
                <span>
                  {t.projects.view} <span aria-hidden="true">↗</span>
                </span>
              </div>
            </div>

            <div className="project-content">
              <span className="project-index numeral">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-tags">{project.tags.join('  ·  ')}</p>
            </div>
          </button>
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
      )}
    </section>
  )
}

export default Projects
