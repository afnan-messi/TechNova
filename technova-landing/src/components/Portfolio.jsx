import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { portfolio } from '../data/portfolio'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Portfolio.css'

const filters = ['All', 'Web', 'Mobile', 'UI/UX']

function Portfolio() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? portfolio : portfolio.filter((item) => item.category === filter)
  return <section className="section portfolio" id="portfolio"><div className="container"><div className="portfolio-heading"><div className="section-heading"><p className="eyebrow">Selected work</p><h2>Products with a point of view.</h2></div><div className="filter-buttons" role="tablist" aria-label="Portfolio categories">{filters.map((item) => <button key={item} className={filter === item ? 'filter-active' : ''} type="button" onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div></div><Swiper className="portfolio-swiper" key={filter} modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1 }, 700: { slidesPerView: 2 } }}>{filtered.map((item) => <SwiperSlide key={item.title}><article className="portfolio-card"><img src={item.image} alt={`${item.title} project preview`} /><div className="portfolio-card-body"><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><a href="#contact" aria-label={`View ${item.title} project`}>View project <FaArrowRight /></a></div></article></SwiperSlide>)}</Swiper></div></section>
}

export default Portfolio
