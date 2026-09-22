import { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Hero.css'

const slides = [
  { eyebrow: 'Software for forward motion', title: 'Innovative Software Solutions', text: 'Build smarter workflows and dependable digital products that help your business move with confidence.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=85' },
  { eyebrow: 'Scale without friction', title: 'Cloud & Web Development', text: 'Launch secure, flexible platforms that stay fast and resilient as your audience grows.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85' },
  { eyebrow: 'Intelligence, made useful', title: 'AI-Powered Applications', text: 'Turn complex data into clear decisions with thoughtful AI products built around real human needs.', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=2000&q=85' },
]

function Hero() {
  const heroRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -20 : -80])

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768)
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return (
    <section className="hero" id="home" aria-label="TechNova solutions" ref={heroRef}>
      <motion.div className="hero-parallax-bg" style={{ y: backgroundY }} aria-hidden="true"><span className="hero-orb hero-orb-blue"></span><span className="hero-orb hero-orb-orange"></span></motion.div>
      <Swiper className="hero-swiper" modules={[Autoplay, EffectFade, Navigation, Pagination]} effect="fade" loop navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }} pagination={{ clickable: true }} autoplay={{ delay: 1500, disableOnInteraction: false }}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="hero-slide" style={{ backgroundImage: `linear-gradient(90deg, rgba(10, 29, 39, .9), rgba(10, 29, 39, .42)), url(${slide.image})` }}>
              <div className="container hero-content">
                <p className="eyebrow">{slide.eyebrow}</p>
                <h1>{slide.title}</h1>
                <p className="hero-text">{slide.text}</p>
                <a className="button" href="#contact">Start a conversation <FaArrowRight /></a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button className="hero-arrow hero-prev" type="button" aria-label="Previous slide"><FaChevronLeft /></button>
        <button className="hero-arrow hero-next" type="button" aria-label="Next slide"><FaChevronRight /></button>
      </Swiper>
    </section>
  )
}

export default Hero
