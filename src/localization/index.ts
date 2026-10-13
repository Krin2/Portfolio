import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from '../locales/es.json'
import en from '../locales/en.json'

export const SUPPORTED_LANGUAGES = ['es', 'en'] as const
export type Language = (typeof SUPPORTED_LANGUAGES)[number]

function isLanguage(value: string | null): value is Language {
  return SUPPORTED_LANGUAGES.includes(value as Language)
}

// Idioma guardado, o el del navegador (espanol si empieza con "es", ingles si no)
function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem('lang')
    if (isLanguage(saved)) return saved
  } catch {
    // localStorage bloqueado: se usa el idioma del navegador
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

void i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: initialLanguage(),
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = i18n.language

i18n.on('languageChanged', (lang) => {
  document.documentElement.lang = lang
  try {
    localStorage.setItem('lang', lang)
  } catch {
    // sin persistencia
  }
})

export default i18n
