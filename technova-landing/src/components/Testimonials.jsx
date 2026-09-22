import { FaStar } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../data/testimonials'
import 'swiper/css'
import 'swiper/css/pagination'
import './Testimonials.css'

function Testimonials() {
  return <section className="section testimonials" id="testimonials"><div className="container"><div className="section-heading"><p className="eyebrow">Client perspective</p><h2>Good work should feel good to talk about.</h2></div><Swiper className="testimonials-swiper" modules={[Autoplay, Pagination]} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1 }, 700: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}>{testimonials.map((item) => <SwiperSlide key={item.name}><article className="testimonial-card"><div className="testimonial-photo-wrap"><img src={item.photo} alt={item.name} className="testimonial-photo" loading="lazy" /></div><div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <FaStar key={index} />)}</div><blockquote>“{item.quote}”</blockquote><div className="testimonial-author"><div><strong>{item.name}</strong><span>{item.role}</span></div></div></article></SwiperSlide>)}</Swiper></div></section>
}

export default Testimonials
