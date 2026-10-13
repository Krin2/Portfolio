import { useTranslation } from 'react-i18next'
import Section from './Section'

const chip = 'bg-surface border-border rounded-full border px-4 py-2'

export default function Skills() {
  const { t } = useTranslation()

  return (
    <Section id="skills" title={t('skills.title')}>
      <ul className="flex flex-wrap gap-2">
        <li className={chip}>{t('skills.backend')}</li>
        <li className={chip}>HTML</li>
        <li className={chip}>CSS</li>
        <li className={chip}>JavaScript</li>
        <li className={chip}>
          React <small className="text-muted">{t('skills.inProgress')}</small>
        </li>
        <li className={chip}>PLC</li>
        <li className={chip}>HMI</li>
        <li className={chip}>{t('skills.automation')}</li>
      </ul>
    </Section>
  )
}
