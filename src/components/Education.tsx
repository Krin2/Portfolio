import { useTranslation } from 'react-i18next'
import { courseGroups } from '../data/courses'
import Section from './Section'

export default function Education() {
  const { t } = useTranslation()

  return (
    <Section id="education" title={t('education.title')}>
      <div className="bg-surface border-border mb-8 max-w-3xl rounded-xl border p-5">
        <h3 className="text-lg font-semibold">{t('education.degree')}</h3>
        <p className="text-muted">{t('education.degreeOrg')}</p>
      </div>

      <h3 className="text-accent mb-4 text-sm font-semibold tracking-wide uppercase">
        {t('education.coursesTitle')}
      </h3>
      <div className="grid gap-5 sm:grid-cols-2">
        {courseGroups.map((group) => (
          <div key={group.provider} className="bg-surface border-border rounded-xl border p-5">
            <h4 className="mb-2 font-semibold">{group.provider}</h4>
            <ul className="text-muted list-disc space-y-1 pl-5 text-[.95rem] marker:text-accent">
              {group.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
