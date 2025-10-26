import React from 'react'
import { Sparkles, Mail, Twitter, Github, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Quiz Mode', href: '#features' },
      { name: 'Puzzle Mode', href: '#features' },
      { name: 'Coin System', href: '#coins' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#privacy' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'GitHub', icon: Github, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ],
  }

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center space-x-2 mb-4 group">
              <Sparkles className="w-8 h-8 text-primary-400 group-hover:text-accent-400 transition-colors duration-300 animate-pulse" />
              <span className="text-2xl font-bold text-gradient">BrainBounty</span>
            </a>
            <p className="text-gray-400 mb-4">
              Challenge your mind with fun puzzles and quizzes. Totally free, totally awesome!
            </p>
            <div className="flex space-x-3">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div>
            <h4 className="text-white font-bold mb-4">Get Started</h4>
            <p className="text-gray-400 mb-4">
              Download BrainBounty today and start your brain training journey!
            </p>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105">
              Download Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BrainBounty. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-pink-400 animate-pulse" /> for brain enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-50" />
    </footer>
  )
}

export default Footer

