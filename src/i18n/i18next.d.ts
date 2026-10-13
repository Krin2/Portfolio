import 'i18next'
import type es from '../locales/es.json'

// Claves de traduccion tipadas: t('clave.inexistente') falla al compilar
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: { translation: typeof es }
  }
}
