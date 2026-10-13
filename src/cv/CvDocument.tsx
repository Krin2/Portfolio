import { Trans, useTranslation } from 'react-i18next'
import profile from '../assets/perfil.jpg'
import LevelDots from '../components/LevelDots'
import { courseGroups } from '../data/courses'
import { contact } from '../data/contact'
import { experience, type Experience } from '../data/experience'
import { skills, spokenLanguages } from '../data/skills'
import { formatPeriod } from '../lib/formatPeriod'

const sideTitle = 'mt-6 mb-2 text-[9pt] font-semibold tracking-wide text-[#6b5410] uppercase'
const mainTitle = 'font-title mb-3 border-b-2 border-accent pb-1 text-[16pt]'

function CvExperience({ item }: { item: Experience }) {
  const { t, i18n } = useTranslation()
  const base = `experience.items.${item.id}` as const
  const location = t(`${base}.location`)
  const intro = t(`${base}.intro`)
  const bullets = t(`${base}.bullets`, { returnObjects: true }) as unknown as string[]
  const period = formatPeriod(item.start, item.end, i18n.language, t('experience.present'))

  return (
    <article className="cv-item mb-5">
      <h3 className="text-accent text-[11pt] font-semibold italic">{t(`${base}.role`)}</h3>
      <p className="text-muted mb-1 text-[9pt] italic">
        {period}
        {location && ` | ${location}`}
      </p>
      {intro && <p className="mb-1">{intro}</p>}
      {bullets.length > 0 && (
        <ul className="list-disc space-y-0.5 pl-5">
          {bullets.map((bullet) => (
            <li key={bullet}>
              <Trans defaults={bullet} components={{ strong: <strong /> }} />
            </li>
          ))}
        </ul>
      )}
      {item.technologies.length > 0 && (
        <p className="text-muted mt-1 text-[9pt]">{item.technologies.join(' · ')}</p>
      )}
    </article>
  )
}

// Version imprimible del CV. Es la unica vista que muestra el telefono; no incluye direccion.
export default function CvDocument() {
  const { t } = useTranslation()
  const leveled = skills
    .filter((skill) => skill.level)
    .sort((a, b) => (b.level ?? 0) - (a.level ?? 0))

  return (
    <div data-cv-ready className="relative min-h-[297mm]">
      <div className="cv-band" />

      <aside className="absolute top-0 left-0 w-[66mm] px-[6mm] py-[10mm] text-[9pt]">
        <img
          src={profile}
          alt={t('accessibility.brandPhoto')}
          className="border-accent mx-auto size-[42mm] rounded-full border-[3px] object-cover object-[center_35%]"
        />

        <h2 className={sideTitle}>{t('nav.contact')}</h2>
        <ul className="space-y-1 break-words">
          <li>{contact.phoneDisplay}</li>
          <li>{contact.email}</li>
          <li>{contact.linkedin.replace('https://www.', '')}</li>
          <li>{contact.github.replace('https://', '')}</li>
        </ul>

        <h2 className={sideTitle}>{t('skills.title')}</h2>
        <ul className="space-y-0.5">
          {leveled.map((skill) => (
            <li key={skill.name} className="flex items-center justify-between">
              <span>{skill.name}</span>
              {skill.level && <LevelDots level={skill.level} />}
            </li>
          ))}
        </ul>

        <h2 className={sideTitle}>{t('skills.languagesTitle')}</h2>
        <ul className="space-y-0.5">
          {spokenLanguages.map((language) => (
            <li key={language.id} className="flex items-center justify-between">
              <span>
                {t(`skills.languages.${language.id}`)}
                {language.native && ` ${t('skills.native')}`}
              </span>
              <LevelDots level={language.level} />
            </li>
          ))}
        </ul>
      </aside>

      {/* thead/tfoot se repiten en cada pagina y dan el margen superior e inferior */}
      <table className="ml-[66mm] w-[144mm] border-collapse">
        <thead>
          <tr>
            <td>
              <div className="h-[10mm]" />
            </td>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>
              <div className="h-[10mm]" />
            </td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td className="px-[8mm] align-top">
              <header className="mb-5 text-center">
                <h1 className="font-title text-[24pt] leading-tight">Marcos Frigerio</h1>
                <p className="text-accent text-[12pt] font-semibold">{t('hero.role')}</p>
                <p className="text-muted mt-1">{t('hero.lead')}</p>
              </header>

              <section>
                <h2 className={mainTitle}>{t('experience.title')}</h2>
                {experience.map((item) => (
                  <CvExperience key={item.id} item={item} />
                ))}
              </section>

              <section className="cv-item">
                <h2 className={mainTitle}>{t('education.title')}</h2>
                <p className="font-semibold">{t('education.degree')}</p>
                <p className="text-muted mb-3">{t('education.degreeOrg')}</p>
                <h3 className="mb-1 font-semibold">{t('education.coursesTitle')}</h3>
                <ul className="list-disc space-y-0.5 pl-5 text-[9pt]">
                  {courseGroups.flatMap((group) =>
                    group.courses.map((course) => (
                      <li key={course}>
                        {course} <span className="text-muted">- {group.provider}</span>
                      </li>
                    )),
                  )}
                </ul>
              </section>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
