import pokedex from '../assets/pokedex.png'
import weather from '../assets/clima-consola.png'
import tables from '../assets/tablas.png'
import frigo from '../assets/cta300.png'
import plc from '../assets/PLC.jpg'
import hmi from '../assets/hmi.jpg'
import office from '../assets/vru2.jpg'

export type ProjectId = 'pokedex' | 'weather' | 'tables' | 'frigo' | 'plc' | 'hmi' | 'office'
export type ProjectGroup = 'backend' | 'frontend' | 'automation'

export interface Project {
  id: ProjectId
  group: ProjectGroup
  image: string
  /** Enlace a la demo; si falta, la tarjeta no muestra enlace */
  href?: string
  /** Muestra "Proximamente" en lugar del enlace */
  soon?: boolean
  tags?: string[]
}

export const projectGroups: ProjectGroup[] = ['backend', 'frontend', 'automation']

// Los textos (nombre, alt, descripcion) estan en locales/*.json bajo projects.items.<id>
export const projects: Project[] = [
  { id: 'pokedex', group: 'backend', image: pokedex, href: 'https://krin2.github.io/pokedex/' },
  { id: 'weather', group: 'backend', image: weather, soon: true },
  { id: 'tables', group: 'backend', image: tables, href: 'https://krin2.github.io/tablas/' },
  {
    id: 'frigo',
    group: 'frontend',
    image: frigo,
    href: 'https://krin2.github.io/Frigo/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  { id: 'plc', group: 'automation', image: plc },
  { id: 'hmi', group: 'automation', image: hmi },
  { id: 'office', group: 'automation', image: office },
]
