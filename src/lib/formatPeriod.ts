function formatMonth(value: string, locale: string): string {
  const [year, month] = value.split('-').map(Number)
  if (!year || !month) return value
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(
    new Date(year, month - 1, 1),
  )
}

/** "ago 2023 – presente"; end null usa el texto de "hasta hoy" */
export function formatPeriod(start: string, end: string | null, locale: string, present: string) {
  return `${formatMonth(start, locale)} – ${end ? formatMonth(end, locale) : present}`
}
