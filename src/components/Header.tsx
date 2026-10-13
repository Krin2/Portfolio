import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useActiveSection } from '../hooks/useActiveSection'
import profile from '../assets/perfil.jpg'
import { CloseIcon, MenuIcon } from './icons'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const sections = ['experience', 'skills', 'projects', 'education', 'about', 'contact'] as const

const observed = ['home', ...sections] as const

export default function Header() {
  const { t } = useTranslation()
  // 'home' se observa solo para quitar el resaltado del menu cuando se esta arriba de todo
  const active = useActiveSection(observed)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const linkClass = (id: string) =>
    `hover:bg-surface hover:text-text rounded-full px-3 py-1.5 text-[.95rem] transition ${
      active === id ? 'bg-surface text-text' : 'text-muted'
    }`

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

      <nav aria-label={t('accessibility.mainNav')} className="hidden md:flex">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'true' : undefined}
            className={linkClass(id)}
          >
            {t(`nav.${id}`)}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={t(menuOpen ? 'accessibility.closeMenu' : 'accessibility.openMenu')}
          className="border-border bg-surface text-text hover:border-accent grid size-10 cursor-pointer place-items-center rounded-full border transition md:hidden"
        >
          {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label={t('accessibility.mainNav')}
          className="border-border bg-bg absolute inset-x-0 top-16 flex flex-col gap-1 border-b p-4 md:hidden"
        >
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={active === id ? 'true' : undefined}
              className={linkClass(id)}
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
