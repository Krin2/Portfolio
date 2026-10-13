import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { ThemeProvider } from './theme/ThemeProvider'

function renderApp() {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  )
}

describe('App', () => {
  it('muestra el nombre, el titulo y todas las secciones', () => {
    renderApp()
    expect(screen.getByRole('heading', { level: 1, name: 'Marcos Frigerio' })).toBeInTheDocument()
    expect(screen.getByText('Desarrollador Fullstack')).toBeInTheDocument()
    for (const name of [
      'Experiencia',
      'Habilidades',
      'Proyectos',
      'Formación',
      'Sobre mí',
      'Contacto',
    ]) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
  })

  it('muestra las 8 tarjetas de proyecto', () => {
    const { container } = renderApp()
    const projects = container.querySelector('#projects')!
    expect(within(projects as HTMLElement).getAllByRole('article')).toHaveLength(8)
  })

  it('enlaza la demo y el codigo de Graph to SQL migrator', async () => {
    const { container } = renderApp()
    const projects = container.querySelector('#projects') as HTMLElement
    const card = within(projects)
      .getByRole('heading', { name: 'Graph to SQL migrator' })
      .closest('article') as HTMLElement

    const demo = within(card).getByRole('link', { name: 'Ver demo →' })
    expect(demo).toHaveAttribute('href', 'https://krin2.github.io/graph-to-sql-migrator/')
    const code = within(card).getByRole('link', { name: 'Ver código →' })
    expect(code).toHaveAttribute('href', 'https://github.com/Krin2/graph-to-sql-migrator')
    expect(within(card).getByText('SQLite')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Cambiar idioma a inglés' }))
    expect(within(card).getByRole('link', { name: 'View code →' })).toBeInTheDocument()
  })

  it('cambia el idioma y actualiza el atributo lang', async () => {
    renderApp()
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar idioma a inglés' }))

    expect(screen.getByRole('heading', { level: 2, name: 'About me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
    expect(localStorage.getItem('lang')).toBe('en')
  })

  it('cambia el tema claro/oscuro y lo guarda', async () => {
    renderApp()
    expect(document.documentElement.dataset.theme).toBe('dark')

    await userEvent.click(screen.getByRole('button', { name: 'Cambiar a modo claro' }))

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(screen.getByRole('button', { name: 'Cambiar a modo oscuro' })).toBeInTheDocument()
  })

  it('tiene enlaces externos seguros', () => {
    renderApp()
    const external = document.querySelectorAll('a[target="_blank"]')
    expect(external.length).toBeGreaterThan(0)
    external.forEach((link) => expect(link).toHaveAttribute('rel', 'noopener noreferrer'))
  })

  it('enlaza el CV en PDF del idioma activo', async () => {
    renderApp()
    const link = screen.getByRole('link', { name: 'Descargar CV (PDF)' })
    expect(link).toHaveAttribute('href', expect.stringMatching(/Marcos-Frigerio-CV-ES\.pdf$/))
    expect(link).toHaveAttribute('download')

    await userEvent.click(screen.getByRole('button', { name: 'Cambiar idioma a inglés' }))
    expect(screen.getByRole('link', { name: 'Download CV (PDF)' })).toHaveAttribute(
      'href',
      expect.stringMatching(/Marcos-Frigerio-CV-EN\.pdf$/),
    )
  })

  it('abre y cierra el menu movil', async () => {
    renderApp()
    const open = screen.getByRole('button', { name: 'Abrir menú' })
    expect(open).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(open)
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await userEvent.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toBeInTheDocument()
  })
})

describe('contenido del CV', () => {
  it('lista los tres trabajos de software y deja la automatizacion colapsada', () => {
    const { container } = renderApp()
    const experience = container.querySelector('#experience') as HTMLElement

    expect(within(experience).getByRole('heading', { name: 'Desarrollador de Software - Intive' }))
    expect(
      within(experience).getAllByRole('heading', { level: 3, name: /Freelance/ }),
    ).toHaveLength(
      3, // dos de software y uno de automatizacion
    )

    const details = experience.querySelector('details')!
    expect(details).not.toHaveAttribute('open')
    expect(within(details).getAllByRole('article', { hidden: true })).toHaveLength(2)
  })

  it('muestra el periodo con "Presente" para el trabajo actual', () => {
    renderApp()
    expect(screen.getByText(/2023 – Presente \| Cliente en EEUU/)).toBeInTheDocument()
  })

  it('traduce la experiencia al ingles', async () => {
    renderApp()
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar idioma a inglés' }))

    expect(screen.getByText('Software Developer - Intive')).toBeInTheDocument()
    expect(screen.getByText(/2023 – Present \| Client in the US/)).toBeInTheDocument()
  })

  it('resalta los nombres de proyecto de Intive en negrita sin mostrar etiquetas', () => {
    renderApp()
    expect(screen.getByText('BitGo.').tagName).toBe('STRONG')
    expect(document.body.textContent).not.toContain('<strong>')
  })

  it('muestra los niveles de habilidad con texto accesible', () => {
    const { container } = renderApp()
    const skills = container.querySelector('#skills') as HTMLElement
    const typescript = within(skills).getByText('TypeScript').closest('li') as HTMLElement
    expect(within(typescript).getByRole('img', { name: 'Nivel 5 de 5' })).toBeInTheDocument()
  })

  it('muestra el espanol con 5 puntos y la etiqueta (nativo)', () => {
    const { container } = renderApp()
    const skills = container.querySelector('#skills') as HTMLElement
    const spanish = within(skills).getByText('Español').closest('li') as HTMLElement
    expect(within(spanish).getByRole('img', { name: 'Nivel 5 de 5' })).toBeInTheDocument()
    expect(spanish).toHaveTextContent('Español (nativo)')
  })

  it('agrupa los cursos por plataforma', () => {
    const { container } = renderApp()
    const education = container.querySelector('#education') as HTMLElement
    expect(within(education).getByRole('heading', { level: 4, name: 'Udemy' })).toBeInTheDocument()
    expect(within(education).getByText('ReactJS Desde Cero')).toBeInTheDocument()
    expect(within(education).getByText('Ingeniería Electrónica')).toBeInTheDocument()
  })
})
