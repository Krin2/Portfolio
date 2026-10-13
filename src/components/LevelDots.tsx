import { useTranslation } from 'react-i18next'
import { MAX_LEVEL } from '../data/skills'

// Indicador de nivel de 1 a 5 (como en el CV), accesible mediante aria-label
export default function LevelDots({ level }: { level: number }) {
  const { t } = useTranslation()

  return (
    <span
      role="img"
      aria-label={t('accessibility.level', { level, max: MAX_LEVEL })}
      className="flex gap-1"
    >
      {Array.from({ length: MAX_LEVEL }, (_, i) => (
        <span
          key={i}
          className={`size-2.5 rounded-full border ${
            i < level ? 'border-accent bg-accent' : 'border-muted/50 bg-transparent'
          }`}
        />
      ))}
    </span>
  )
}
