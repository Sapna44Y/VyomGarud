import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
   <section id="about" className="py-20 px-4 max-w-6xl mx-auto"> {/* Added id="about" */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Our <span className="text-orange-500">Mission</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            At VyomGarud, we pioneer the future of unmanned aerial systems with cutting-edge technology 
            designed for the most demanding operational environments.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Our mission is to provide military and defense forces with reliable, autonomous UAV solutions 
            that enhance situational awareness, ensure mission success, and protect personnel through 
            advanced AI-powered systems and precision engineering.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: '99.9%', label: 'System Reliability' },
            { number: '24/7', label: 'Operational Readiness' },
            { number: '1000+', label: 'Flight Hours' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-charcoal-800 border border-charcoal-700"
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About