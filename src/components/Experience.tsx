import { useTranslation } from 'react-i18next'
import { experience } from '../data/experience'
import ExperienceItem from './ExperienceItem'
import Section from './Section'

export default function Experience() {
  const { t } = useTranslation()
  const software = experience.filter((item) => item.category === 'software')
  const automation = experience.filter((item) => item.category === 'automation')

  return (
    <Section id="experience" title={t('experience.title')}>
      <div className="max-w-3xl">
        {software.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}

        {/* La experiencia en automatizacion es anterior, asi que va colapsada */}
        <details className="group border-border mt-10 border-t pt-6">
          <summary className="text-accent cursor-pointer font-semibold marker:text-accent">
            {t('experience.automationToggle')}
          </summary>
          <div className="mt-6">
            {automation.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </details>
      </div>
    </Section>
  )
}
