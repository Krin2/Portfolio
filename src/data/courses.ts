export interface CourseGroup {
  provider: string
  courses: string[]
}

// Los nombres de los cursos se muestran en su idioma original
export const courseGroups: CourseGroup[] = [
  {
    provider: 'Udemy',
    courses: [
      'Curso Completo de Claude Code: Crea Aplicaciones con IA',
      'Maneja DOCKER en 5 días. Mejora como SysAdmin Linux o DevOps',
      'ReactJS Desde Cero',
      'Nest: Desarrollo backend escalable con Node',
      "Typescript: The complete developer's guide",
    ],
  },
  { provider: 'Coursera', courses: ['Typescript Operators', 'Cryptography 1'] },
  { provider: 'Acamica', courses: ['Desarrollo Web Full Stack'] },
  {
    provider: 'UTN',
    courses: [
      'Posgrado en gestión de proyectos',
      'Diplomatura en programación Java',
      'Professional Testing Master',
    ],
  },
  {
    provider: 'Universidad de Belgrano',
    courses: ['Diplomatura en administración de empresas'],
  },
  { provider: 'Microsoft', courses: ['Programador ASP .NET (curso oficial 2310C)'] },
]
