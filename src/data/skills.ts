export type SkillCategory = 'frontend' | 'backend' | 'data' | 'tools' | 'auth' | 'automation'
export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  name: string
  category: SkillCategory
  /** Nivel de 1 a 5, segun el CV; las habilidades de automatizacion no llevan nivel */
  level?: SkillLevel
}

export const MAX_LEVEL = 5

export const skillCategories: SkillCategory[] = [
  'frontend',
  'backend',
  'data',
  'tools',
  'auth',
  'automation',
]

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 5 },
  { name: 'React', category: 'frontend', level: 4 },
  { name: 'HTML', category: 'frontend', level: 4 },
  { name: 'CSS', category: 'frontend', level: 4 },
  { name: 'Tailwind', category: 'frontend', level: 4 },
  { name: 'Vue', category: 'frontend', level: 1 },

  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'NestJS', category: 'backend', level: 2 },
  { name: 'C#', category: 'backend', level: 2 },

  { name: 'SQL', category: 'data', level: 4 },
  { name: 'Neo4j', category: 'data', level: 4 },
  { name: 'MongoDB', category: 'data', level: 2 },
  { name: 'PostgreSQL', category: 'data', level: 2 },

  { name: 'Git', category: 'tools', level: 4 },
  { name: 'Jira', category: 'tools', level: 4 },
  { name: 'Cypress', category: 'tools', level: 3 },
  { name: 'Docker', category: 'tools', level: 2 },
  { name: 'Segment', category: 'tools', level: 1 },

  { name: 'Auth0', category: 'auth', level: 2 },
  { name: 'Firebase', category: 'auth', level: 2 },
  { name: 'Web3', category: 'auth', level: 1 },

  { name: 'PLC', category: 'automation' },
  { name: 'HMI', category: 'automation' },
  { name: 'AutoCAD', category: 'automation' },
]

export type LanguageId = 'es' | 'en' | 'it' | 'pt' | 'fr'

export interface SpokenLanguage {
  id: LanguageId
  level: SkillLevel
  /** Muestra "(nativo)" junto al nombre del idioma */
  native?: boolean
}

export const spokenLanguages: SpokenLanguage[] = [
  { id: 'es', level: 5, native: true },
  { id: 'en', level: 3 },
  { id: 'it', level: 2 },
  { id: 'pt', level: 1 },
  { id: 'fr', level: 1 },
]
