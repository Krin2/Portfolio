import graphToSql from '../assets/graph-to-sql.png'
import componentLibrary from '../assets/component-library.png'
import authFlow from '../assets/auth-flow.png'
import hmiSimulator from '../assets/hmi-simulator.png'
import frigo from '../assets/cta300.png'

export type ProjectId = 'graphToSql' | 'componentLibrary' | 'authFlow' | 'hmiSimulator' | 'frigo'
export type ProjectGroup = 'backend' | 'frontend' | 'automation'

export interface Project {
  id: ProjectId
  group: ProjectGroup
  image: string
  /** Enlace a la demo; si falta, la tarjeta no muestra enlace */
  href?: string
  /** Enlace al repositorio en GitHub ("Ver codigo") */
  repo?: string
  tags?: string[]
}

export const projectGroups: ProjectGroup[] = ['backend', 'frontend', 'automation']

// Los textos (nombre, alt, descripcion) estan en locales/*.json bajo projects.items.<id>
export const projects: Project[] = [
  {
    id: 'graphToSql',
    group: 'backend',
    image: graphToSql,
    href: 'https://krin2.github.io/graph-to-sql-migrator/',
    repo: 'https://github.com/Krin2/graph-to-sql-migrator',
    tags: ['Neo4j', 'SQL', 'SQLite', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'componentLibrary',
    group: 'frontend',
    image: componentLibrary,
    href: 'https://krin2.github.io/react-component-library/',
    repo: 'https://github.com/Krin2/react-component-library',
    tags: ['React', 'TypeScript', 'Tailwind', 'Storybook', 'Accessibility'],
  },
  {
    id: 'authFlow',
    group: 'frontend',
    image: authFlow,
    href: 'https://krin2.github.io/auth-flow-demo/',
    repo: 'https://github.com/Krin2/auth-flow-demo',
    tags: ['React', 'TypeScript', 'Firebase Auth', 'Cypress', 'GitHub Actions'],
  },
  {
    id: 'frigo',
    group: 'frontend',
    image: frigo,
    href: 'https://krin2.github.io/Frigo/',
    repo: 'https://github.com/Krin2/Frigo',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'hmiSimulator',
    group: 'automation',
    image: hmiSimulator,
    href: 'https://krin2.github.io/hmi-plc-simulator/',
    repo: 'https://github.com/Krin2/hmi-plc-simulator',
    tags: ['PLC', 'HMI', 'ISA-18.2', 'ISA-101', 'React', 'TypeScript'],
  },
]
