import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function Counter({ value, suffix = '', label }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  useEffect(() => {
    if (!inView) return undefined
    let current = 0
    const step = Math.max(1, Math.ceil(value / 45))
    const timer = window.setInterval(() => {
      current = Math.min(current + step, value)
      setCount(current)
      if (current === value) window.clearInterval(timer)
    }, 30)
    return () => window.clearInterval(timer)
  }, [inView, value])

  return <div className="counter" ref={ref}><strong>{count}{suffix}</strong><span>{label}</span></div>
}

export default Counter
