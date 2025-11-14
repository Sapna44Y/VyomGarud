import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: 'Home', path: '/', type: 'link' },
    { name: 'Capabilities', path: '#capabilities', type: 'scroll', section: 'capabilities' },
    { name: 'About', path: '#about', type: 'scroll', section: 'about' },
    { name: 'Contact', path: '#contact', type: 'scroll', section: 'contact' },
    { name: 'Technology', path: '/technology', type: 'link' },
  ]

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleNavigation = (item) => {
    if (item.type === 'scroll') {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for navigation then scroll
        setTimeout(() => {
          scrollToSection(item.section)
        }, 100)
      } else {
        // Already on home page, just scroll
        scrollToSection(item.section)
      }
      setIsMenuOpen(false)
    }
    // For regular links, the Link component will handle navigation
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-charcoal-900/95 backdrop-blur-sm z-50 border-b border-charcoal-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">VG</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                VYOM<span className="text-orange-500">GARUD</span>
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Advanced UAV Systems</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-2 text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-orange-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActivePath(item.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"
                    />
                  )}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="relative py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavigation({ type: 'scroll', section: 'contact' })}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 orange-glow text-sm"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 w-6 h-6 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-charcoal-700 pt-4"
            >
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  item.type === 'link' ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActivePath(item.path)
                          ? 'bg-orange-500/10 text-orange-500 border-l-4 border-orange-500'
                          : 'text-gray-300 hover:text-white hover:bg-charcoal-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item)}
                      className={`py-3 px-4 rounded-lg text-base font-medium text-left transition-all duration-300 ${
                        'text-gray-300 hover:text-white hover:bg-charcoal-800'
                      }`}
                    >
                      {item.name}
                    </button>
                  )
                ))}
                <button
                  onClick={() => handleNavigation({ type: 'scroll', section: 'contact' })}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center mt-2"
                >
                  Contact Us
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header