export const contact = {
  email: 'ingmarcosfrigerio@gmail.com',
  phone: '+5493516839826',
  phoneDisplay: '+549 351 6839826',
  github: 'https://github.com/Krin2',
  linkedin: 'https://www.linkedin.com/in/marcos-frigerio/',
} as const

/** Rutas de los CV en PDF generados por `npm run cv` (carpeta public/cv) */
export function cvPath(language: string): string {
  const suffix = language === 'es' ? 'ES' : 'EN'
  return `${import.meta.env.BASE_URL}cv/Marcos-Frigerio-CV-${suffix}.pdf`
}
