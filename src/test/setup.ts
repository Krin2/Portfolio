import '@testing-library/jest-dom/vitest'
import { afterEach, beforeEach } from 'vitest'
import i18n from '../localization'

beforeEach(async () => {
  localStorage.clear()
  delete document.documentElement.dataset.theme
  await i18n.changeLanguage('es')
})

afterEach(() => {
  localStorage.clear()
})
