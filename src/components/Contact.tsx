import { useTranslation } from 'react-i18next'
import { contact } from '../data/contact'
import LinkButton from './LinkButton'
import Section from './Section'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact" title={t('contact.title')}>
      <p className="text-muted max-w-2xl">{t('contact.lead')}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <LinkButton variant="primary" href={`mailto:${contact.email}`}>
          {contact.email}
        </LinkButton>
        <LinkButton href={`tel:${contact.phone}`}>{contact.phoneDisplay}</LinkButton>
      </div>
    </Section>
  )
}
