export type ExperienceId = 'freelanceUS' | 'intive' | 'freelanceEU' | 'renault' | 'automation'
export type ExperienceCategory = 'software' | 'automation'

export interface Experience {
  id: ExperienceId
  category: ExperienceCategory
  /** Formato AAAA-MM; end null significa "hasta hoy" */
  start: string
  end: string | null
  technologies: string[]
}

// Los textos (cargo, lugar, descripcion, tareas) estan en locales/*.json bajo experience.items.<id>
export const experience: Experience[] = [
  {
    id: 'freelanceUS',
    category: 'software',
    start: '2023-08',
    end: null,
    technologies: ['React', 'TypeScript', 'Neo4j', 'MariaDB', 'MySQL', 'AWS', 'Storybook'],
  },
  {
    id: 'intive',
    category: 'software',
    start: '2021-04',
    end: '2023-08',
    technologies: [
      'C#',
      '.NET',
      'MVC',
      'Auth0',
      'Firebase',
      'JavaScript',
      'Cypress',
      'GitHub Actions',
      'Segment',
      'TypeScript',
      'NestJS',
      'Blockchain',
    ],
  },
  {
    id: 'freelanceEU',
    category: 'software',
    start: '2022-06',
    end: '2022-12',
    technologies: ['TypeScript', 'Auth0', 'SQLite'],
  },
  {
    id: 'renault',
    category: 'automation',
    start: '2015-01',
    end: '2018-08',
    technologies: [],
  },
  {
    id: 'automation',
    category: 'automation',
    start: '2011-06',
    end: '2021-04',
    technologies: ['PLC', 'HMI', 'AutoCAD'],
  },
]
