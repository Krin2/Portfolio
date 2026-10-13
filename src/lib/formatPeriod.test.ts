import { formatPeriod } from './formatPeriod'

describe('formatPeriod', () => {
  it('formatea un periodo cerrado en espanol', () => {
    expect(formatPeriod('2021-04', '2023-08', 'es', 'Presente')).toMatch(/abr.* 2021 – ago.* 2023/i)
  })

  it('usa el texto de "presente" cuando no hay fecha de fin', () => {
    expect(formatPeriod('2023-08', null, 'en', 'Present')).toMatch(/Aug.* 2023 – Present/)
  })

  it('devuelve el valor original si la fecha es invalida', () => {
    expect(formatPeriod('abc', null, 'es', 'Presente')).toBe('abc – Presente')
  })
})
