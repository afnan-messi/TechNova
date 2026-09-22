import { motion } from 'framer-motion'
import Counter from './Counter'
import './About.css'

const stats = [{ value: 120, suffix: '+', label: 'Projects delivered' }, { value: 84, suffix: '', label: 'Happy clients' }, { value: 9, suffix: '+', label: 'Years experience' }, { value: 24, suffix: '/7', label: 'Support available' }]

function About() {
  return <section className="section about" id="about"><div className="container about-grid"><motion.div className="about-image" initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}><video className="about-video" src="/videos/team-working.mp4" poster="/images/team-working-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="TechNova team collaborating in the office" /></motion.div><motion.div className="about-copy" initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}><p className="eyebrow">Why TechNova</p><h2>We make ambitious ideas easier to build.</h2><p>We are a product-minded software company for teams who want technology to feel like a competitive advantage, not a constraint. Our designers, engineers, and strategists work together from first sketch to lasting scale.</p><a className="text-link" href="#contact">Meet your technology partner <span aria-hidden="true">→</span></a></motion.div></div><div className="container stats-grid">{stats.map((stat) => <Counter key={stat.label} {...stat} />)}</div></section>
}

export default About
