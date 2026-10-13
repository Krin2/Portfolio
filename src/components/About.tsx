import { Trans, useTranslation } from 'react-i18next'
import Section from './Section'

const paragraphs = ['about.p1', 'about.p2', 'about.p3'] as const

export default function About() {
  const { t } = useTranslation()

  return (
    <Section id="about" title={t('about.title')}>
      <div className="text-muted flex max-w-2xl flex-col gap-4">
        {paragraphs.map((key) => (
          <p key={key}>
            <Trans
              i18nKey={key}
              components={{ strong: <strong className="text-text font-semibold" /> }}
            />
          </p>
        ))}
      </div>
    </Section>
  )
}
