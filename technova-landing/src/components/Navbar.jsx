import { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

const links = [
  ['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Portfolio', 'portfolio'],
  ['Pricing', 'pricing'], ['Contact', 'contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link className="navbar-logo" to="/" onClick={closeMenu}>Tech<span>Nova</span></Link>
        <button className="navbar-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label="Toggle navigation">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`navbar-nav ${menuOpen ? 'navbar-nav-open' : ''}`} id="main-navigation" aria-label="Main navigation">
          {links.map(([label, id]) => label === 'About' ? <Link key={id} to="/about" onClick={closeMenu}>{label}</Link> : label === 'Services' ? <Link key={id} to="/services" onClick={closeMenu}>{label}</Link> : label === 'Portfolio' ? <Link key={id} to="/portfolio" onClick={closeMenu}>{label}</Link> : label === 'Pricing' ? <Link key={id} to="/pricing" onClick={closeMenu}>{label}</Link> : label === 'Contact' ? <Link key={id} to="/contact" onClick={closeMenu}>{label}</Link> : <a key={id} href={`/#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="button button-small" href="/#contact" onClick={closeMenu}>Get Started <FaArrowRight /></a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
