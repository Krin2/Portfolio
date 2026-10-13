import { useTranslation } from 'react-i18next'
import LinkButton from './LinkButton'
import Section from './Section'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact" title={t('contact.title')}>
      <p className="text-muted max-w-2xl">{t('contact.lead')}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <LinkButton variant="primary" href="mailto:ingmarcosfrigerio@gmail.com">
          ingmarcosfrigerio@gmail.com
        </LinkButton>
        <LinkButton href="tel:+5493516839826">+549 351 6839826</LinkButton>
      </div>
    </Section>
  )
}
