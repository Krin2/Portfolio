import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

// Mantiene el titulo y los meta tags en el idioma activo
export function useDocumentMeta() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')
    setMeta('meta[name="description"]', t('meta.description'))
    setMeta('meta[property="og:title"]', t('meta.title'))
    setMeta('meta[property="og:description"]', t('meta.ogDescription'))
  }, [t, i18n.language])
}
