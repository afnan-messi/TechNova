import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { features, projectTypes, timelines } from '../data/calculatorData'
import './PriceCalculator.css'

const formatPrice = (price) => `$${price.toLocaleString('en-US')}`

function PriceCalculator() {
  const [selectedProject, setSelectedProject] = useState(projectTypes[0].id)
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[0].id)

  const { projectType, timeline, selectedItems, subtotal, total } = useMemo(() => {
    const projectType = projectTypes.find((project) => project.id === selectedProject) || projectTypes[0]
    const timeline = timelines.find((item) => item.id === selectedTimeline) || timelines[0]
    const selectedItems = features.filter((feature) => selectedFeatures.includes(feature.id))
    const subtotal = projectType.basePrice + selectedItems.reduce((sum, feature) => sum + feature.price, 0)
    return { projectType, timeline, selectedItems, subtotal, total: Math.round(subtotal * timeline.multiplier) }
  }, [selectedFeatures, selectedProject, selectedTimeline])

  const toggleFeature = (featureId) => {
    setSelectedFeatures((current) => current.includes(featureId) ? current.filter((id) => id !== featureId) : [...current, featureId])
  }

  return <section className="section price-calculator" id="calculator"><div className="container calculator-layout"><div className="calculator-options"><div className="calculator-heading"><p className="eyebrow">Plan your investment</p><h2>Build your <span>perfect package.</span></h2><p>Choose the building blocks for your next digital product and get a transparent estimate in seconds.</p></div><div className="calculator-group"><h3>01. Choose a project type</h3><div className="calculator-pills">{projectTypes.map((project) => <button className={selectedProject === project.id ? 'calculator-pill calculator-pill-active' : 'calculator-pill'} type="button" key={project.id} onClick={() => setSelectedProject(project.id)} aria-pressed={selectedProject === project.id}>{project.label}<span>from {formatPrice(project.basePrice)}</span></button>)}</div></div><div className="calculator-group"><h3>02. Add features</h3><div className="feature-options">{features.map((feature) => { const Icon = feature.icon; const selected = selectedFeatures.includes(feature.id); return <button className={selected ? 'calculator-feature calculator-feature-selected' : 'calculator-feature'} type="button" key={feature.id} onClick={() => toggleFeature(feature.id)} aria-pressed={selected}><span className="calculator-feature-icon"><Icon /></span><span className="calculator-feature-copy"><strong>{feature.label}</strong><small>+{formatPrice(feature.price)}</small></span>{selected && <span className="calculator-check" aria-hidden="true"><FaCheck /></span>}</button> })}</div></div><div className="calculator-group"><h3>03. Select your timeline</h3><div className="calculator-pills calculator-timeline">{timelines.map((item) => <button className={selectedTimeline === item.id ? 'calculator-pill calculator-pill-active' : 'calculator-pill'} type="button" key={item.id} onClick={() => setSelectedTimeline(item.id)} aria-pressed={selectedTimeline === item.id}>{item.label}<span>{item.multiplier === 1 ? 'No rush fee' : `${Math.round((item.multiplier - 1) * 100)}% rush fee`}</span></button>)}</div></div></div><aside className="calculator-summary"><div className="calculator-summary-inner"><p className="eyebrow">Your estimate</p><p className="calculator-summary-label">Estimated project total</p><AnimatePresence mode="wait"><motion.strong className="calculator-total" key={total} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .25 }}>{formatPrice(total)}</motion.strong></AnimatePresence><div className="calculator-breakdown"><div><span>{projectType.label}</span><strong>{formatPrice(projectType.basePrice)}</strong></div>{selectedItems.map((feature) => <div key={feature.id}><span>{feature.label}</span><strong>{formatPrice(feature.price)}</strong></div>)}<div><span>{timeline.label} timeline</span><strong>{timeline.multiplier === 1 ? 'Included' : `+${formatPrice(total - subtotal)}`}</strong></div></div><div className="calculator-subtotal"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><a className="button calculator-cta" href="#contact">Get This Quote <FaArrowRight /></a><p className="calculator-note">A transparent starting estimate. We’ll refine the details together.</p></div></aside></div></section>
}

export default PriceCalculator
