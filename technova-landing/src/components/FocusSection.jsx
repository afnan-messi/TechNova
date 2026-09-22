import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './FocusSection.css'

function FocusSection({ children }) {
  const sectionRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const blur = useTransform(scrollYProgress, [0, .5, 1], [5, 0, 5])
  const opacity = useTransform(scrollYProgress, [0, .5, 1], [.68, 1, .68])
  const filter = useTransform(blur, (value) => `blur(${value}px)`)

  useEffect(() => {
    const updateViewport = () => setIsDesktop(window.innerWidth >= 768)
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return <motion.div ref={sectionRef} className="focus-section" style={isDesktop ? { filter, opacity } : { filter: 'none', opacity: 1 }}>{children}</motion.div>
}

export default FocusSection
