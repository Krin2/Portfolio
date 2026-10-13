import { useTranslation } from 'react-i18next'
import { useActiveSection } from '../hooks/useActiveSection'
import profile from '../assets/perfil.jpg'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const sections = ['projects', 'skills', 'about', 'contact'] as const

export default function Header() {
  const { t } = useTranslation()
  const active = useActiveSection(sections)

  return (
    <header className="border-border bg-header sticky top-0 z-50 flex h-16 items-center justify-between gap-4 border-b px-[clamp(1rem,4vw,3rem)] backdrop-blur-md">
      <a
        href="#home"
        aria-label={t('accessibility.home')}
        className="flex items-center gap-3 font-semibold"
      >
        <img
          src={profile}
          alt=""
          width={40}
          height={40}
          className="border-accent size-10 rounded-full border-2 object-cover object-[center_35%]"
        />
        <span className="hidden sm:inline">Marcos Frigerio</span>
      </a>

      <nav aria-label={t('accessibility.mainNav')} className="flex">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'true' : undefined}
            className={`hover:bg-surface hover:text-text rounded-full px-2 py-1.5 text-sm transition sm:px-3 sm:text-[.95rem] ${
              active === id ? 'bg-surface text-text' : 'text-muted'
            }`}
          >
            {t(`nav.${id}`)}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
