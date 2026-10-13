import { render, screen } from '@testing-library/react'
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
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument()
    for (const name of ['Proyectos', 'Habilidades', 'Sobre mí', 'Contacto']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
  })

  it('muestra las 7 tarjetas de proyecto', () => {
    renderApp()
    expect(screen.getAllByRole('article')).toHaveLength(7)
  })

  it('cambia el idioma y actualiza el atributo lang y el titulo', async () => {
    renderApp()
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar idioma a inglés' }))

    expect(screen.getByRole('heading', { level: 2, name: 'About me' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
    expect(localStorage.getItem('lang')).toBe('en')
    expect(screen.getByRole('button', { name: 'Change language to Spanish' })).toBeInTheDocument()
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
})
