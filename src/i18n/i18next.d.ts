import 'i18next'
import type es from '../locales/es.json'
import type { ExperienceId } from '../data/experience'

type Locale = typeof es

// Las listas de tareas (bullets) son arrays en el JSON, pero i18next recorre cada
// elemento al generar los tipos de las claves y supera el limite de profundidad de TypeScript.
// Se declaran como una sola clave: se leen con t(clave, { returnObjects: true }).
// Es un type (no interface) porque i18next exige tipos con firma de indice implicita
type ExperienceLocale = {
  title: string
  present: string
  automationToggle: string
  items: Record<ExperienceId, { role: string; location: string; intro: string; bullets: string }>
}

// Claves de traduccion tipadas: t('clave.inexistente') falla al compilar
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: { translation: Omit<Locale, 'experience'> & { experience: ExperienceLocale } }
  }
}
