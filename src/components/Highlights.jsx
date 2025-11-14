import React from 'react'
import { motion } from 'framer-motion'

const Highlights = () => {
  const features = [
    {
      title: 'Military-Grade Durability',
      description: 'Built to withstand extreme conditions and electromagnetic interference'
    },
    {
      title: 'Advanced Autonomy',
      description: 'AI-powered decision making and autonomous mission execution'
    },
    {
      title: 'Secure Communications',
      description: 'Encrypted data links and anti-jamming technology'
    }
  ]

  return (
    <section className="py-20 px-4 bg-charcoal-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Key <span className="text-orange-500">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 orange-glow">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights