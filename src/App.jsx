import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import CoinSystem from './components/CoinSystem'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Features />
      <CoinSystem />
      <Privacy />
      <Footer />
    </div>
  )
}

export default App
