import { useTranslation } from 'react-i18next'
import profile from '../assets/perfil.jpg'
import { GitHubIcon, LinkedInIcon } from './icons'
import LinkButton from './LinkButton'
import Section from './Section'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <Section id="home" className="flex flex-col items-center py-16 text-center sm:py-24">
      <img
        src={profile}
        alt={t('accessibility.brandPhoto')}
        width={140}
        height={140}
        className="border-accent mb-6 size-35 rounded-full border-[3px] object-cover object-[center_35%]"
      />
      <p className="text-accent text-sm tracking-[0.15em] uppercase">{t('hero.eyebrow')}</p>
      <h1 className="font-title my-2 text-[clamp(2.2rem,8vw,4rem)] leading-tight">
        Marcos Frigerio
      </h1>
      <p className="text-muted text-[clamp(1.1rem,3vw,1.5rem)]">{t('hero.role')}</p>
      <p className="text-muted mt-5 mb-8 max-w-xl">{t('hero.lead')}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <LinkButton variant="primary" href="#projects">
          {t('hero.viewProjects')}
        </LinkButton>
        <LinkButton href="https://github.com/Krin2" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="size-[1.1rem]" /> GitHub
        </LinkButton>
        <LinkButton
          href="https://www.linkedin.com/in/marcos-frigerio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="size-[1.1rem]" /> LinkedIn
        </LinkButton>
      </div>
    </Section>
  )
}
