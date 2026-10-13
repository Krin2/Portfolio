'use strict'

document.documentElement.classList.add('js')

const root = document.documentElement

// ---------- Idioma ----------
// Los textos viven en languages/es.js y languages/en.js (window.LANGUAGES)
const SUPPORTED = ['es', 'en']

function t(key) {
  const dict = window.LANGUAGES[root.lang] || {}
  return dict[key] !== undefined ? dict[key] : key
}

function translate() {
  document.querySelectorAll('[data-translate]').forEach((el) => {
    el.textContent = t(el.dataset.translate)
  })
  // Solo para textos propios con etiquetas (strong, small); no usar con contenido externo
  document.querySelectorAll('[data-translate-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.translateHtml)
  })
  // Formato "atributo:clave;atributo:clave"
  document.querySelectorAll('[data-translate-attr]').forEach((el) => {
    el.dataset.translateAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':')
      el.setAttribute(attr.trim(), t(key.trim()))
    })
  })
  updateThemeLabel()
}

function setLanguage(lang, save) {
  root.lang = lang
  if (save) {
    try { localStorage.setItem('lang', lang) } catch (e) {}
  }
  translate()
}

function initialLanguage() {
  let saved = null
  try { saved = localStorage.getItem('lang') } catch (e) {}
  if (SUPPORTED.includes(saved)) return saved
  return (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'
}

// ---------- Tema claro / oscuro ----------
const themeToggle = document.getElementById('theme-toggle')

function updateThemeLabel() {
  const dark = root.getAttribute('data-theme') === 'dark'
  themeToggle.setAttribute('aria-label', t(dark ? 'accessibility.themeToLight' : 'accessibility.themeToDark'))
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.content = theme === 'dark' ? '#0d0d12' : '#f7f7fa'
  updateThemeLabel()
}

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  try { localStorage.setItem('theme', next) } catch (e) {}
})

document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(root.lang === 'es' ? 'en' : 'es', true)
})

setLanguage(initialLanguage(), false)
applyTheme(root.getAttribute('data-theme') || 'dark')

// ---------- Aparicion suave de secciones y tarjetas ----------
const items = document.querySelectorAll('.section, .card, .hero')
items.forEach((el) => el.classList.add('reveal'))

if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        reveal.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  items.forEach((el) => reveal.observe(el))
} else {
  items.forEach((el) => el.classList.add('visible'))
}

// ---------- Marca el enlace del menu segun la seccion visible ----------
const links = document.querySelectorAll('.nav a')
const sections = [...links].map((a) => document.querySelector(a.getAttribute('href')))

const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id))
  })
}, { rootMargin: '-40% 0px -55% 0px' })
sections.forEach((s) => s && spy.observe(s))
