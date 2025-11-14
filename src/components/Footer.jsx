import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Mission', path: '/about#mission' },
        { name: 'Leadership', path: '/about#leadership' },
        { name: 'Careers', path: '/careers' }
      ]
    },
    {
      title: 'Technology',
      links: [
        { name: 'UAV Systems', path: '/technology' },
        { name: 'Autonomy', path: '/technology#autonomy' },
        { name: 'Sensors', path: '/technology#sensors' },
        { name: 'Specifications', path: '/technology#specs' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Defense', path: '/solutions/defense' },
        { name: 'Surveillance', path: '/solutions/surveillance' },
        { name: 'Delivery', path: '/solutions/delivery' },
        { name: 'Custom Solutions', path: '/solutions/custom' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', path: '/support/docs' },
        { name: 'Training', path: '/support/training' },
        { name: 'Maintenance', path: '/support/maintenance' },
        { name: 'Contact Support', path: '/support/contact' }
      ]
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/vyomgarud'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/vyomgarud'
    },
    {
      name: 'YouTube',
      icon: '📹',
      url: 'https://youtube.com/vyomgarud'
    }
  ]

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">VG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  VYOM<span className="text-orange-500">GARUD</span>
                </h3>
                <p className="text-sm text-gray-400 -mt-1">Advanced UAV Systems</p>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Pioneering the future of unmanned aerial systems with military-grade technology, 
              precision engineering, and advanced autonomy for defense and security applications.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-charcoal-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-lg group-hover:text-white">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-charcoal-800">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <span className="text-orange-500">📍</span>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Headquarters</h5>
              <p className="text-gray-400 text-sm">
                Defense Technology Park<br />
                Bengaluru, Karnataka 560001<br />
                India
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <span className="text-orange-500">📞</span>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Contact</h5>
              <p className="text-gray-400 text-sm">
                +91 80 1234 5678<br />
                contact@vyomgarud.com<br />
                Mon-Fri 9AM-6PM IST
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <span className="text-orange-500">⚡</span>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Emergency Support</h5>
              <p className="text-gray-400 text-sm">
                24/7 Technical Support<br />
                support@vyomgarud.com<br />
                +91 80 9876 5432
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} VyomGarud Defense Systems. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/security" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Security
              </Link>
              <Link to="/compliance" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Compliance
              </Link>
            </div>
            
            <div className="text-gray-500 text-xs">
              Patent Pending • Made in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer