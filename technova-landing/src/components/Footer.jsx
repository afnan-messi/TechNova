import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { footerLinks } from '../data/footerLinks'
import './Footer.css'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const subscribe = (event) => { event.preventDefault(); if (email.trim()) setSubscribed(true) }
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><a className="navbar-logo" href="#home">Tech<span>Nova</span></a><p>Thoughtful software for teams moving with purpose.</p><div className="socials"><a href="#contact" aria-label="Facebook"><FaFacebookF /></a><a href="#contact" aria-label="Twitter"><FaTwitter /></a><a href="#contact" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="#contact" aria-label="Instagram"><FaInstagram /></a></div></div><div className="footer-links"><h3>Explore</h3>{footerLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</div><div className="newsletter"><h3>Get the good stuff</h3><p>Occasional notes on products, technology, and better work.</p><form onSubmit={subscribe}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Subscribe">→</button></form>{subscribed && <small>Thanks for subscribing.</small>}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} TechNova. All rights reserved.</span><span>Built for what’s next.</span></div></footer>
}

export default Footer
