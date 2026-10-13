import es from './es.json'
import en from './en.json'

// Devuelve las rutas de todas las claves; los arrays cuentan como una sola hoja con su largo
function shape(value: unknown, path = ''): string[] {
  if (Array.isArray(value)) return [`${path}[${value.length}]`]
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      shape(child, path ? `${path}.${key}` : key),
    )
  }
  return [path]
}

describe('locales', () => {
  it('es y en tienen exactamente las mismas claves y cantidad de tareas', () => {
    expect(shape(en).sort()).toEqual(shape(es).sort())
  })

  it('no hay textos vacios salvo los opcionales', () => {
    const optional = /\.(location|intro)$/
    const empty = (locale: unknown) =>
      JSON.stringify(locale, null, 1)
        .split('\n')
        .filter((line) => /": ""/.test(line))
        .filter((line) => !optional.test(line.split('"')[1] ?? ''))

    // location e intro pueden estar vacios; el resto no
    const nonOptionalEmpty = empty(es).filter((line) => !/"(location|intro)"/.test(line))
    expect(nonOptionalEmpty).toEqual([])
  })
})
