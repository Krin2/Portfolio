import { useTranslation } from 'react-i18next'
import { skillCategories, skills, spokenLanguages } from '../data/skills'
import LevelDots from './LevelDots'
import Section from './Section'

const card = 'bg-surface border-border rounded-xl border p-5'
const heading = 'text-accent mb-4 text-sm font-semibold tracking-wide uppercase'

export default function Skills() {
  const { t } = useTranslation()

  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const items = skills
            .filter((skill) => skill.category === category)
            .sort((a, b) => (b.level ?? 0) - (a.level ?? 0))

          return (
            <div key={category} className={card}>
              <h3 className={heading}>{t(`skills.categories.${category}`)}</h3>
              {category === 'automation' ? (
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill.name}
                      className="bg-bg border-border rounded-full border px-3 py-1 text-sm"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <span>{skill.name}</span>
                      {skill.level && <LevelDots level={skill.level} />}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}

        <div className={card}>
          <h3 className={heading}>{t('skills.languagesTitle')}</h3>
          <ul className="flex flex-col gap-2">
            {spokenLanguages.map((language) => (
              <li key={language.id} className="flex items-center justify-between gap-3">
                <span>
                  {t(`skills.languages.${language.id}`)}
                  {language.native && <span className="text-muted"> {t('skills.native')}</span>}
                </span>
                <LevelDots level={language.level} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
