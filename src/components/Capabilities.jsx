import React from 'react'
import { motion } from 'framer-motion'

const Capabilities = () => {
  const capabilities = [
    {
      title: 'Tactical Surveillance Drones',
      description: 'Long-endurance UAVs with advanced sensor packages for intelligence gathering and reconnaissance missions.',
      icon: '🛰️'
    },
    {
      title: 'Autonomous Swarm Systems',
      description: 'Coordinated multi-drone operations powered by AI for complex mission scenarios and area coverage.',
      icon: '🤖'
    },
    {
      title: 'Precision Delivery Systems',
      description: 'Heavy-lift drones capable of autonomous payload delivery in challenging environments.',
      icon: '📦'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Real-time data processing and machine learning for actionable intelligence from aerial footage.',
      icon: '🧠'
    }
  ]

  return (
    <section id="capabilities" className="py-20 px-4 max-w-6xl mx-auto"> {/* Added id="capabilities" */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-orange-500">Capabilities</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Advanced UAV systems engineered for reliability and performance in critical operations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-charcoal-800 rounded-xl p-6 border border-charcoal-700 hover:border-orange-500 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Capabilities