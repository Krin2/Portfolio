import { render, screen } from '@testing-library/react'
import i18n from '../localization'
import CvDocument from './CvDocument'

describe('CvDocument', () => {
  it('incluye el telefono, el email y los 5 trabajos, y no muestra direccion', () => {
    const { container } = render(<CvDocument />)
    const text = container.textContent ?? ''

    expect(text).toContain('+549 351 6839826')
    expect(text).toContain('ingmarcosfrigerio@gmail.com')
    expect(text).not.toContain('1073')
    expect(text).not.toMatch(/Rafaela/)
    expect(screen.getAllByRole('article')).toHaveLength(5)
  })

  it('esta disponible en ingles', async () => {
    await i18n.changeLanguage('en')
    render(<CvDocument />)

    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByText(/Spanish \(native\)/)).toBeInTheDocument()
    expect(screen.getByText('Automation Engineer - Renault')).toBeInTheDocument()
  })
})
