import { useTranslation } from 'react-i18next'
import type { Project } from '../data/projects'
import { useReveal } from '../hooks/useReveal'

const linkClass = 'text-accent text-sm font-medium hover:underline'

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`border-border bg-surface hover:border-accent flex flex-col overflow-hidden rounded-xl border transition duration-500 hover:-translate-y-1 motion-reduce:transition-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={project.image}
        alt={t(`projects.items.${project.id}.alt`)}
        width={400}
        height={250}
        loading="lazy"
        className="block aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
        <h4 className="text-lg font-semibold">{t(`projects.items.${project.id}.name`)}</h4>
        <p className="text-muted text-[.95rem]">{t(`projects.items.${project.id}.desc`)}</p>
        {project.tags && (
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="bg-bg border-border text-muted rounded-full border px-2.5 py-0.5 text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {(project.href || project.repo) && (
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {t('projects.demo')}
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {t('projects.code')}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
