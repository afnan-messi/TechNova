import { useState } from 'react'
import { FaArrowRight, FaCheck, FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import './ContactPage.css'

const initialForm = { name: '', email: '', phone: '', subject: '', budget: '', message: '' }
const faqs = [
  ['How quickly will I get a response?', 'We typically respond within 24 hours on business days.'],
  ['Do you offer free consultations?', 'Yes. Every new project starts with a complimentary conversation to understand your goals.'],
  ['What information should I include in my message?', 'A little context about your goals, timeline, and challenges helps us prepare the most useful response.'],
  ['Can I schedule a call instead?', 'Absolutely. Mention your preferred times in the message and we will find a time that works.'],
]

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.subject) nextErrors.subject = 'Please choose a project type.'
    if (!form.budget) nextErrors.budget = 'Please choose a budget range.'
    if (form.message.trim().length < 10) nextErrors.message = 'Please share a little more about your project.'
    return nextErrors
  }
  const submitForm = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setIsSubmitting(true)
    window.setTimeout(() => { setIsSubmitting(false); setSubmitted(true) }, 1200)
  }
  const resetForm = () => { setForm(initialForm); setErrors({}); setSubmitted(false) }

  return <main className="contact-page"><section className="contact-page-hero"><div className="contact-page-orb contact-page-orb-blue"></div><div className="contact-page-orb contact-page-orb-orange"></div><motion.div className="container contact-page-hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><p className="eyebrow">Get in touch</p><h1>Let’s build something <span>great together.</span></h1><p>Tell us what you’re working toward and get a thoughtful first response from our team within 24 hours.</p></motion.div></section><section className="contact-page-main"><div className="container contact-page-grid"><motion.div className="contact-form-card" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><AnimatePresence mode="wait">{submitted ? <motion.div className="contact-success" key="success" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }}><span className="contact-success-icon"><FaCheck /></span><h2>Message received.</h2><p>Thanks! We’ll get back to you within 24 hours.</p><button className="button button-outline" type="button" onClick={resetForm}>Send Another Message</button></motion.div> : <motion.form key="form" onSubmit={submitForm} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }}><div className="contact-form-heading"><p className="eyebrow">Start a conversation</p><h2>Tell us about your project.</h2></div><div className="contact-form-row"><Field label="Full Name" name="name" value={form.name} onChange={updateField} error={errors.name} /><Field label="Email" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} /></div><div className="contact-form-row"><Field label="Phone (optional)" name="phone" value={form.phone} onChange={updateField} /><SelectField label="Subject / Project Type" name="subject" value={form.subject} onChange={updateField} error={errors.subject} options={['Website', 'Web App', 'Mobile App', 'Consulting', 'Other']} /></div><SelectField label="Budget Range" name="budget" value={form.budget} onChange={updateField} error={errors.budget} options={['Under $2k', '$2k-$5k', '$5k-$15k', '$15k+']} /><label className="contact-field">Message<textarea name="message" rows="5" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} />{errors.message && <small className="contact-error">{errors.message}</small>}</label><button className="button contact-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? <><span className="contact-spinner"></span> Sending...</> : <>Send message <FaArrowRight /></>}</button></motion.form>}</AnimatePresence></motion.div><motion.aside className="contact-info-card" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="eyebrow">Let’s connect</p><h2>Good conversations start here.</h2><p className="contact-info-intro">No pitch, no pressure. Just a clear conversation about what you want to make possible.</p><div className="contact-details"><span><FaEnvelope /><strong>hello@technova.com</strong></span><span><FaPhoneAlt /><strong>+1 (415) 555-0148</strong></span><span><FaMapMarkerAlt /><strong>101 Market Street, San Francisco</strong></span><span><FaClock /><strong>Mon–Fri, 9am–6pm PST</strong></span></div><div className="response-badge">⚡ We typically respond within 24 hours</div><div className="contact-trust">{['Free Initial Consultation', 'No Obligation Quotes', 'NDA Available on Request', 'Response Within 24 Hours'].map((item) => <span key={item}><FaCheck />{item}</span>)}</div><div className="contact-socials"><a href="#contact" aria-label="Facebook"><FaFacebookF /></a><a href="#contact" aria-label="Twitter"><FaTwitter /></a><a href="#contact" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="#contact" aria-label="Instagram"><FaInstagram /></a></div></motion.aside></div></section><section className="contact-map-section"><div className="container"><iframe title="TechNova office location" src="https://www.google.com/maps?q=San%20Francisco&output=embed" loading="lazy"></iframe></div></section><section className="contact-faq"><div className="container contact-faq-grid"><div><p className="eyebrow">Quick answers</p><h2>Before you reach out.</h2></div><div className="contact-faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <div className={`contact-faq-item ${isOpen ? 'contact-faq-open' : ''}`} key={question}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{question}</span><FaArrowRight /></button><AnimatePresence initial={false}>{isOpen && <motion.div className="contact-faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{answer}</p></motion.div>}</AnimatePresence></div> })}</div></div></section><section className="contact-alternative"><div className="container"><div><p className="eyebrow">Prefer email?</p><h2>Reach us directly at hello@technova.com</h2></div><a className="button button-light" href="mailto:hello@technova.com">Send an email <FaArrowRight /></a></div></section></main>
}

function Field({ label, name, type = 'text', value, onChange, error }) {
  return <label className="contact-field">{label}<input type={type} name={name} value={value} onChange={onChange} aria-invalid={Boolean(error)} />{error && <small className="contact-error">{error}</small>}</label>
}

function SelectField({ label, name, value, onChange, error, options }) {
  return <label className="contact-field">{label}<select name={name} value={value} onChange={onChange} aria-invalid={Boolean(error)}><option value="">Select an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>{error && <small className="contact-error">{error}</small>}</label>
}

export default ContactPage
