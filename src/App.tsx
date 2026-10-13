import { useTranslation } from 'react-i18next'
import { useDocumentMeta } from './hooks/useDocumentMeta'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  const { t } = useTranslation()
  useDocumentMeta()

  return (
    <>
      <a
        href="#main"
        className="bg-accent text-accent-text sr-only rounded-lg px-4 py-2 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]"
      >
        {t('accessibility.skip')}
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
