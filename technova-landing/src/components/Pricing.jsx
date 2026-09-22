import { FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { pricing } from '../data/pricing'
import './Pricing.css'

function Pricing() {
  return <section className="section pricing" id="pricing"><div className="container"><div className="section-heading"><p className="eyebrow">Simple investment</p><h2>A plan for the next stage of your story.</h2></div><div className="pricing-grid">{pricing.map((plan) => <motion.article className={`pricing-card ${plan.popular ? 'pricing-popular' : ''}`} key={plan.name} whileHover={{ y: -8 }} transition={{ duration: .2 }}>{plan.popular && <span className="popular-label">Most popular</span>}<h3>{plan.name}</h3><p>{plan.description}</p><strong className="pricing-price">{plan.price}</strong><ul>{plan.features.map((feature) => <li key={feature}><FaCheck />{feature}</li>)}</ul><a className={plan.popular ? 'button' : 'button button-outline'} href="#contact">Choose {plan.name}</a></motion.article>)}</div></div></section>
}

export default Pricing
