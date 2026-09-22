import { useEffect, useState } from 'react'
import './RobotMascot.css'

const messages = [
  '👋 Hey! Need a website like this?',
  '🚀 We build apps 2x faster with our agile process',
  '🎉 Limited time: 20% off your first project!',
  '💡 Curious about our services? Click me!',
  '⭐ 150+ happy clients and counting',
]

const dismissedStorageKey = 'technova-robot-dismissed'

function RobotMascot() {
  const [isVisible, setIsVisible] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem(dismissedStorageKey) === 'true')

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setIsVisible(true), 3500)
    return () => window.clearTimeout(revealTimer)
  }, [])

  useEffect(() => {
    if (dismissed) return undefined
    const messageTimer = window.setInterval(() => {
      setMessageIndex((currentIndex) => (currentIndex + 1) % messages.length)
    }, 7000)
    return () => window.clearInterval(messageTimer)
  }, [dismissed])

  const dismissMessage = () => {
    sessionStorage.setItem(dismissedStorageKey, 'true')
    setDismissed(true)
  }

  const handleRobotClick = () => {
    if (dismissed) {
      sessionStorage.removeItem(dismissedStorageKey)
      setDismissed(false)
      return
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return <aside className={`robot-mascot ${isVisible ? 'robot-mascot-visible' : ''}`} aria-label="TechNova assistant"><div className={`robot-bubble ${dismissed ? 'robot-bubble-dismissed' : ''}`}><button className="robot-close" type="button" onClick={dismissMessage} aria-label="Dismiss assistant message">×</button><p aria-live="polite">{messages[messageIndex]}</p></div><button className="robot-button" type="button" onClick={handleRobotClick} aria-label={dismissed ? 'Show TechNova assistant message' : 'Chat with the TechNova assistant'}><span className="robot-antenna" aria-hidden="true"></span><span className="robot-face" aria-hidden="true">🤖</span></button></aside>
}

export default RobotMascot
