import { useEffect, useRef, useState } from 'react'

const supported = typeof IntersectionObserver !== 'undefined'

// Marca el elemento como visible la primera vez que entra en pantalla
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(!supported)

  useEffect(() => {
    const element = ref.current
    if (!supported || !element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
