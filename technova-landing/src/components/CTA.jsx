import { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import './CTA.css'

function CTA() {
  const ctaRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [isMobile ? -10 : -40, isMobile ? 10 : 40])

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768)
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return <section className="cta" ref={ctaRef}><motion.div className="cta-parallax-bg" style={{ y: backgroundY }} aria-hidden="true"></motion.div><motion.div className="container cta-inner" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div><p className="eyebrow">Your next chapter starts here</p><h2>Have a big idea? Let’s give it momentum.</h2><p>Tell us what you’re building and we’ll help you find the clearest path forward.</p></div><a className="button button-light" href="#contact">Let’s talk <FaArrowRight /></a></motion.div></section>
}

export default CTA
