import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('muestra el nombre y el titulo principal', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Marcos Frigerio' })).toBeInTheDocument()
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument()
  })
})
