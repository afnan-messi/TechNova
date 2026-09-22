import { motion } from 'framer-motion'
import './Preloader.css'

function Preloader({ isExiting = false, onExitComplete }) {
  return <motion.div className="preloader" role="status" aria-label="Loading" aria-hidden={isExiting} initial={{ opacity: 1, scale: 1 }} animate={isExiting ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }} transition={{ duration: .5, ease: [0.4, 0, 0.2, 1] }} onAnimationComplete={() => { if (isExiting) onExitComplete?.() }}><div className="preloader-content"><div className="preloader-logo">Tech<span>Nova</span></div><p>Building Digital Excellence</p><div className="preloader-dots" aria-hidden="true"><span></span><span></span><span></span></div></div></motion.div>
}

export default Preloader
