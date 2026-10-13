import { createRoot } from 'react-dom/client'
import i18n from '../localization'
import '../index.css'
import './cv.css'
import CvDocument from './CvDocument'

// ?lang=es | ?lang=en
const requested = new URLSearchParams(window.location.search).get('lang')
await i18n.changeLanguage(requested === 'en' ? 'en' : 'es')

createRoot(document.getElementById('root')!).render(<CvDocument />)
