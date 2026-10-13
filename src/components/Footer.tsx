import { useTranslation } from 'react-i18next'
import { GitHubIcon, LinkedInIcon } from './icons'

const linkClass = 'text-muted hover:text-accent'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-border text-muted mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t px-[clamp(1rem,4vw,2rem)] py-8 text-sm">
      <p>{t('footer.rights')}</p>
      <p className="flex gap-4">
        <a
          href="https://github.com/Krin2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={linkClass}
        >
          <GitHubIcon className="size-[1.1rem]" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcos-frigerio/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClass}
        >
          <LinkedInIcon className="size-[1.1rem]" />
        </a>
      </p>
    </footer>
  )
}
