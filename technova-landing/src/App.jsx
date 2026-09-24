import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RobotMascot from './components/RobotMascot'
import QuickContact from './components/QuickContact'
import Preloader from './components/Preloader'
import PriceCalculator from './components/PriceCalculator'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'

function HomePage() {
  return <main><Hero /><About /><Services /><Portfolio /><Testimonials /><Pricing /><PriceCalculator /><CTA /><Contact /></main>
}

function App() {
  const [loading, setLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setLoading(false), 1800)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(loadingTimer)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!loading) document.body.style.overflow = ''
  }, [loading])

  useEffect(() => {
    if (loading || location.pathname !== '/' || !location.hash) return undefined
    const scrollTimer = window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }), 0)
    return () => window.clearTimeout(scrollTimer)
  }, [loading, location.hash, location.pathname])

  return <><AnimatePresence>{showPreloader && <Preloader isExiting={!loading} onExitComplete={() => setShowPreloader(false)} />}</AnimatePresence><Navbar /><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/portfolio" element={<PortfolioPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/pricing" element={<PricingPage />} /></Routes><Footer /><RobotMascot />{location.pathname !== '/contact' && <QuickContact />}</>
}

export default App
