import { useTranslation } from 'react-i18next'
import { projectGroups, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Section from './Section'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <Section id="projects" title={t('projects.title')}>
      {projectGroups.map((group) => (
        <div key={group} className="mt-10 first-of-type:mt-0">
          <h3 className="text-accent mb-4 text-lg tracking-wide uppercase">
            {t(`projects.groups.${group}`)}
          </h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,17rem),1fr))] gap-5">
            {projects
              .filter((project) => project.group === group)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
