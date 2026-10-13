import { Trans, useTranslation } from 'react-i18next'
import type { Experience } from '../data/experience'
import { formatPeriod } from '../lib/formatPeriod'

export default function ExperienceItem({ item }: { item: Experience }) {
  const { t, i18n } = useTranslation()
  const base = `experience.items.${item.id}` as const

  const location = t(`${base}.location`)
  const intro = t(`${base}.intro`)
  const bullets = t(`${base}.bullets`, { returnObjects: true }) as unknown as string[]
  const period = formatPeriod(item.start, item.end, i18n.language, t('experience.present'))

  return (
    <article className="border-border relative border-l-2 pb-10 pl-6 last:pb-0">
      <span
        aria-hidden="true"
        className="bg-accent border-bg absolute top-1.5 -left-[7px] size-3 rounded-full border-2"
      />
      <h3 className="text-lg font-semibold">{t(`${base}.role`)}</h3>
      <p className="text-muted mb-3 text-sm">
        {period}
        {location && ` | ${location}`}
      </p>
      {intro && <p className="text-muted mb-2">{intro}</p>}
      {bullets.length > 0 && (
        <ul className="text-muted mb-4 list-disc space-y-1.5 pl-5 marker:text-accent">
          {bullets.map((bullet) => (
            <li key={bullet}>
              <Trans defaults={bullet} components={{ strong: <strong className="text-text" /> }} />
            </li>
          ))}
        </ul>
      )}
      {item.technologies.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-surface border-border text-muted rounded-full border px-2.5 py-0.5 text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
