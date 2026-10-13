import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { t, i18n } = useTranslation()

  return (
    <button
      type="button"
      onClick={() => void i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
      aria-label={t('accessibility.langSwitch')}
      title={t('accessibility.langTitle')}
      className="border-border bg-surface text-text hover:border-accent h-10 min-w-10 cursor-pointer rounded-full border px-3 text-sm font-semibold transition"
    >
      {t('lang.label')}
    </button>
  )
}
