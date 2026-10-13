import { useTranslation } from 'react-i18next'
import { useTheme } from '../theme/useTheme'
import { MoonIcon, SunIcon } from './icons'

export default function ThemeToggle() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t(dark ? 'accessibility.themeToLight' : 'accessibility.themeToDark')}
      title={t('accessibility.themeTitle')}
      className="border-border bg-surface text-text hover:border-accent grid size-10 cursor-pointer place-items-center rounded-full border transition"
    >
      {dark ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
    </button>
  )
}
