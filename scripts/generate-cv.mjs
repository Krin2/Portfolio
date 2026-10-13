// Genera los CV en PDF (es y en) a partir de cv.html. Uso: npm run cv
// Requiere Google Chrome instalado (se usa el del sistema, no se descarga ningun navegador).
import { mkdir } from 'node:fs/promises'
import { createServer } from 'vite'
import { chromium } from 'playwright-core'

const PORT = 5199
const OUT_DIR = 'public/cv'
const languages = ['es', 'en']

await mkdir(OUT_DIR, { recursive: true })

const server = await createServer({ logLevel: 'error', server: { port: PORT, strictPort: true } })
await server.listen()

const browser = await chromium.launch({ channel: 'chrome' })
try {
  for (const lang of languages) {
    const page = await browser.newPage()
    await page.goto(`http://localhost:${PORT}/Portfolio/cv.html?lang=${lang}`)
    await page.waitForSelector('[data-cv-ready]')
    await page.evaluate(() => document.fonts.ready)
    await page.emulateMedia({ media: 'print' })

    const path = `${OUT_DIR}/Marcos-Frigerio-CV-${lang.toUpperCase()}.pdf`
    await page.pdf({ path, preferCSSPageSize: true, printBackground: true })
    console.log(`Generado ${path}`)
    await page.close()
  }
} finally {
  await browser.close()
  await server.close()
}
