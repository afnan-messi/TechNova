import { useState } from 'react'
import { FaArrowRight, FaCheck, FaChevronDown, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { comparisonFeatures, pricingFaqs, pricingPlans } from '../data/pricingPlans'
import './PricingPage.css'

const formatPrice = (price) => `$${price.toLocaleString('en-US')}`
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.65 } }

function PricingPage() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="pricing-page">
      <section className="pricing-page-hero">
        <div className="pricing-page-orb pricing-page-orb-blue"></div>
        <div className="pricing-page-orb pricing-page-orb-orange"></div>
        <motion.div className="container pricing-page-hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow">Pricing</p>
          <h1>Simple, <span>transparent pricing.</span></h1>
          <p>Choose a plan that matches your stage. Every number you see is the full investment — no hidden fees, no surprise add-ons.</p>
        </motion.div>
      </section>

      <section className="pricing-page-plans">
        <div className="container">
          <motion.div className="pricing-page-toggle-wrap" {...fadeUp}>
            <button
              className={`pricing-page-switch ${yearly ? 'pricing-page-switch-yearly' : ''}`}
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly billing"
              onClick={() => setYearly((current) => !current)}
            >
              <span className={!yearly ? 'is-active' : ''}>Monthly</span>
              <span className="pricing-page-switch-track" aria-hidden="true"><span className="pricing-page-switch-knob"></span></span>
              <span className={yearly ? 'is-active' : ''}>Yearly</span>
            </button>
            <AnimatePresence>
              {yearly && (
                <motion.span className="pricing-page-save-badge" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}>
                  Save up to 20% yearly
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="pricing-page-grid">
            {pricingPlans.map((plan, index) => {
              const price = yearly ? plan.yearlyPrice : plan.monthlyPrice
              return (
                <motion.article
                  className={`pricing-page-card ${plan.isPopular ? 'pricing-page-card-popular' : ''}`}
                  key={plan.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  {plan.isPopular && <span className="pricing-page-ribbon">Most Popular</span>}
                  <h2>{plan.name}</h2>
                  <div className="pricing-page-price-row">
                    <AnimatePresence mode="wait">
                      <motion.strong className="pricing-page-price" key={`${plan.id}-${price}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                        {formatPrice(price)}
                      </motion.strong>
                    </AnimatePresence>
                    <span className="pricing-page-period">{yearly ? '/year' : '/month'}</span>
                  </div>
                  <p className="pricing-page-card-copy">{plan.description}</p>
                  <div className="pricing-page-divider"></div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li className={feature.included ? '' : 'pricing-page-feature-off'} key={feature.name}>
                        {feature.included ? <FaCheck aria-hidden="true" /> : <FaTimes aria-hidden="true" />}
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                  <Link className={plan.isPopular ? 'button' : 'button button-outline'} to="/contact">
                    {plan.ctaText} <FaArrowRight />
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pricing-page-compare">
        <div className="container">
          <motion.div className="pricing-page-heading" {...fadeUp}>
            <p className="eyebrow">Compare in detail</p>
            <h2>Every feature, <span>side by side.</span></h2>
            <p>A full breakdown so you can choose with confidence — not just from the card summaries.</p>
          </motion.div>
          <motion.div className="pricing-page-table-wrap" {...fadeUp}>
            <table className="pricing-page-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  {pricingPlans.map((plan) => <th key={plan.id}>{plan.name}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Website pages</th>
                  <td>Up to 5</td>
                  <td>Up to 15</td>
                  <td>Unlimited</td>
                </tr>
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name}>
                    <th scope="row">{feature.name}</th>
                    {pricingPlans.map((plan) => (
                      <td key={`${feature.name}-${plan.id}`}>
                        {feature[plan.id] ? <FaCheck className="pricing-page-table-check" aria-label="Included" /> : <span className="pricing-page-table-dash" aria-label="Not included">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="pricing-page-unsure">
        <div className="container">
          <motion.div className="pricing-page-unsure-card" {...fadeUp}>
            <div>
              <p className="eyebrow">Need a custom number?</p>
              <h2>Not sure which plan?</h2>
              <p>Use the interactive project calculator to mix features, timelines, and scope into a transparent estimate.</p>
            </div>
            <Link className="button" to="/#calculator">Open the calculator <FaArrowRight /></Link>
          </motion.div>
        </div>
      </section>

      <section className="pricing-page-faq">
        <div className="container pricing-page-faq-grid">
          <motion.div className="pricing-page-heading" {...fadeUp}>
            <p className="eyebrow">Need to know</p>
            <h2>Pricing <span>questions</span></h2>
            <p>Clear answers before you pick a plan or start a conversation.</p>
          </motion.div>
          <div className="faq-list">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={faq.question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{faq.question}</span>
                    <FaChevronDown />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pricing-page-cta">
        <div className="container">
          <p className="eyebrow">Let’s talk it through</p>
          <h2>Still have questions about pricing?</h2>
          <p>Tell us what you are building and we will recommend the clearest next step.</p>
          <Link className="button button-light" to="/contact">Talk to our team <FaArrowRight /></Link>
        </div>
      </section>
    </main>
  )
}

export default PricingPage
