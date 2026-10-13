import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface SectionProps {
  id: string
  title?: string
  className?: string
  children: ReactNode
}

// Seccion con titulo y aparicion suave al entrar en pantalla
export default function Section({ id, title, className = '', children }: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`border-t border-border py-12 transition duration-700 first:border-t-0 sm:py-20 motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {title && <h2 className="font-title mb-6 text-[clamp(1.6rem,4vw,2.2rem)]">{title}</h2>}
      {children}
    </section>
  )
}
