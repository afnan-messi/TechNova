import { FaArrowRight, FaCheck, FaClock, FaHandshake, FaHeadset, FaShieldAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import './ServicesPage.css'

const serviceDetails = [
  { description: 'We create fast, flexible websites and digital platforms that make your brand easier to discover and your business easier to grow. Every build is shaped around performance, accessibility, and a clear path to conversion.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80' },
  { description: 'From first wireframe to store launch, we build mobile experiences that feel natural in the hand. Our cross-platform approach keeps the experience consistent while giving your team a reliable foundation to grow.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80' },
  { description: 'We turn complex workflows into calm, intuitive interfaces that people understand quickly. Research, prototyping, and a considered design system keep every decision connected to real user needs.', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80' },
  { description: 'We design cloud infrastructure that is secure, observable, and ready to scale with demand. Automated delivery and thoughtful operations help your team ship more often with less risk.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80' },
  { description: 'When the path forward is unclear, we bring technical perspective and product discipline to the room. We help teams make confident choices about architecture, priorities, and delivery.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80' },
  { description: 'We make security practical and continuous, protecting the systems your customers and team rely on. Our approach combines prevention, testing, monitoring, and clear guidance your organization can act on.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80' },
  { description: 'We help teams turn promising AI ideas into useful, responsible products. From data readiness to model integration, we focus on measurable value and experiences people can trust.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
  { description: 'We connect products, teams, and third-party tools through reliable APIs designed for clarity and longevity. Strong documentation, security, and observability make integrations easier to maintain.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80' },
]

const processSteps = [
  ['1', 'Discovery Call', 'We listen, ask the right questions, and define the opportunity.'],
  ['2', 'Proposal & Planning', 'You get a clear scope, roadmap, and investment plan.'],
  ['3', 'Design & Development', 'Our team turns the plan into a polished, working product.'],
  ['4', 'Testing & Launch', 'We refine every detail, test thoroughly, and launch confidently.'],
  ['5', 'Ongoing Support', 'We stay close to help your product keep getting better.'],
]

const trustPoints = [
  [FaClock, 'On-Time Delivery'], [FaHandshake, 'Transparent Pricing'], [FaHeadset, 'Dedicated Support'], [FaShieldAlt, 'Scalable Solutions'],
]

function ServicesPage() {
  return <main className="services-page"><section className="services-page-hero"><div className="services-page-orb services-page-orb-blue"></div><div className="services-page-orb services-page-orb-orange"></div><motion.div className="container services-page-hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><p className="eyebrow">What we do</p><h1>Services built around <span>your goals.</span></h1><p>Strategy, design, and engineering working together to create digital products that move your business forward.</p></motion.div></section><section className="services-detail-list"><div className="container">{services.map((service, index) => { const Icon = service.icon; const detail = serviceDetails[index]; const imageOnLeft = index % 2 === 0; return <motion.article className={`service-detail ${imageOnLeft ? 'service-detail-image-left' : 'service-detail-image-right'}`} key={service.title} initial={{ opacity: 0, x: imageOnLeft ? -35 : 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }}><div className="service-detail-visual"><img src={detail.image} alt={`${service.title} project visual`} loading="lazy" /></div><div className="service-detail-copy"><span className="service-detail-icon"><Icon /></span><p className="eyebrow">{String(index + 1).padStart(2, '0')} / Service</p><h2>{service.title}</h2><p className="service-detail-description">{detail.description}</p><ul>{[...service.features, 'Ongoing Collaboration'].slice(0, 5).map((feature) => <li key={feature}><FaCheck />{feature}</li>)}</ul><a className="button button-small" href="/#calculator">Get a Quote for This <FaArrowRight /></a></div></motion.article> })}</div></section><section className="services-process"><div className="container"><div className="services-page-heading"><p className="eyebrow">Our process</p><h2>A clear path from idea to impact.</h2></div><div className="process-timeline">{processSteps.map(([number, title, text]) => <motion.article className="process-step" key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Number(number) * .06 }}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p></motion.article>)}</div></div></section><section className="services-trust"><div className="container trust-grid">{trustPoints.map(([Icon, label]) => <div className="trust-point" key={label}><Icon /><strong>{label}</strong></div>)}</div></section><section className="services-page-cta"><div className="container"><p className="eyebrow">Let’s find the right fit</p><h2>Not sure which service you need?</h2><p>Tell us what you’re trying to achieve and we’ll help you choose the clearest next step.</p><a className="button button-light" href="/#calculator">Get a free consultation <FaArrowRight /></a></div></section></main>
}

export default ServicesPage
