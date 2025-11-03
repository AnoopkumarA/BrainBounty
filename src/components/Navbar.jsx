import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Coin System', href: '#coins' },
    { name: 'Privacy', href: '#privacy' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-primary-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/brainbounty.png" 
                alt="BrainBounty Logo" 
                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 blur-xl bg-primary-400 opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient">BrainBounty</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105">
              Download Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary-400 transition-colors duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-slate-900/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300">
            Download Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

