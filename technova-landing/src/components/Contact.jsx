import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Contact.css'

const initialForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submitForm = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.subject.trim()) nextErrors.subject = 'Please add a subject.'
    if (form.message.trim().length < 10) nextErrors.message = 'Please tell us a little more.'
    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) { setSubmitted(true); setForm(initialForm) }
  }

  return <section className="section contact" id="contact"><div className="container contact-grid"><motion.div className="contact-info" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="eyebrow">Start a conversation</p><h2>Let’s make something useful.</h2><p>Have a question, a challenge, or a half-formed idea? We’d love to hear it.</p><div className="contact-details"><span><FaEnvelope /> hello@technova.example</span><span><FaPhone /> +1 (415) 555-0148</span><span><FaMapMarkerAlt /> 101 Market Street, San Francisco</span></div><iframe title="TechNova office location map" src="https://www.google.com/maps?q=San%20Francisco&output=embed" loading="lazy"></iframe></motion.div><motion.form className="contact-form" onSubmit={submitForm} noValidate initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><div className="form-row"><label>Name<input name="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} />{errors.name && <small>{errors.name}</small>}</label><label>Email<input type="email" name="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} />{errors.email && <small>{errors.email}</small>}</label></div><label>Subject<input name="subject" value={form.subject} onChange={updateField} aria-invalid={Boolean(errors.subject)} />{errors.subject && <small>{errors.subject}</small>}</label><label>Message<textarea name="message" rows="5" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} />{errors.message && <small>{errors.message}</small>}</label>{submitted && <p className="success-message" role="status">Thanks. Your message is ready for our team.</p>}<button className="button" type="submit">Send message <span aria-hidden="true">→</span></button></motion.form></div></section>
}

export default Contact
