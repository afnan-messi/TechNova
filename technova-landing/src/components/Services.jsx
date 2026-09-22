import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { services } from '../data/services'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Services.css'

function Services() {
  return <section className="section services" id="services"><div className="container"><motion.div className="services-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}><p className="eyebrow">What we do</p><h2>Our <span>Services</span></h2><p>From first idea to lasting scale, we create focused digital products that make ambitious businesses easier to run.</p></motion.div><motion.div className="services-showcase" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: .1 }}><button className="services-arrow services-prev" type="button" aria-label="Previous service"><FaArrowLeft /></button><Swiper className="services-swiper" modules={[Autoplay, EffectCoverflow, Navigation, Pagination]} effect="coverflow" grabCursor centeredSlides loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }} navigation={{ prevEl: '.services-prev', nextEl: '.services-next' }} pagination={{ el: '.services-pagination', clickable: true, bulletClass: 'services-bullet', bulletActiveClass: 'services-bullet-active' }} coverflowEffect={{ rotate: 0, stretch: 0, depth: 80, modifier: 1, slideShadows: false }} breakpoints={{ 0: { slidesPerView: 1 }, 700: { slidesPerView: 2 }, 1050: { slidesPerView: 3 } }}>{services.map((service) => { const Icon = service.icon; return <SwiperSlide key={service.title}><article className="service-card"><span className="service-icon"><Icon /></span><h3>{service.title}</h3><p>{service.shortDescription}</p><ul>{service.features.map((feature) => <li key={feature}><FaCheck />{feature}</li>)}</ul><a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn More <FaArrowRight /></a></article></SwiperSlide> })}</Swiper><button className="services-arrow services-next" type="button" aria-label="Next service"><FaArrowRight /></button><div className="services-pagination" aria-label="Service slides" /></motion.div></div></section>
}

export default Services
