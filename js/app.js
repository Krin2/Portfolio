'use strict'

document.documentElement.classList.add('js')

// Aparicion suave de secciones y tarjetas al hacer scroll
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

// Marca el enlace del menu segun la seccion visible
const links = document.querySelectorAll('.nav a')
const sections = [...links].map((a) => document.querySelector(a.getAttribute('href')))

const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id))
  })
}, { rootMargin: '-40% 0px -55% 0px' })
sections.forEach((s) => s && spy.observe(s))
