import React from 'react'
import { motion } from 'framer-motion'

const Technology = () => {
  const technologies = [
    {
      title: 'Advanced Autonomy',
      description: 'AI-powered autonomous flight systems with real-time decision making and obstacle avoidance.',
      features: [
        'Machine Learning Algorithms',
        'Real-time Path Planning',
        'Swarm Intelligence',
        'Adaptive Mission Control'
      ],
      image: '🤖'
    },
    {
      title: 'Precision Navigation',
      description: 'Military-grade GPS and inertial navigation systems for centimeter-level accuracy.',
      features: [
        'Dual-frequency GNSS',
        'IMU Sensor Fusion',
        'Visual Odometry',
        'Terrain Following'
      ],
      image: '🎯'
    },
    {
      title: 'Secure Communications',
      description: 'Encrypted data links with anti-jamming and anti-spoofing capabilities.',
      features: [
        'AES-256 Encryption',
        'Frequency Hopping',
        'Mesh Networking',
        'SATCOM Integration'
      ],
      image: '🔒'
    },
    {
      title: 'Advanced Sensing',
      description: 'Multi-spectral sensor suites for day/night all-weather operation.',
      features: [
        'EO/IR Cameras',
        'LIDAR Mapping',
        'Hyperspectral Imaging',
        'Synthetic Aperture Radar'
      ],
      image: '📡'
    }
  ]

  const specs = [
    { category: 'Flight Performance', details: ['Endurance: 6-24 hours', 'Range: 100-500 km', 'Max Speed: 120 km/h', 'Service Ceiling: 6000m'] },
    { category: 'Payload Capacity', details: ['Standard: 5-20 kg', 'Heavy Lift: 20-100 kg', 'Modular Bay System', 'Quick Release Mechanism'] },
    { category: 'Communication', details: ['Range: 50-200 km LOS', 'Encrypted Data Link', 'SATCOM Ready', 'Mesh Network Capable'] },
    { category: 'Environmental', details: ['Operating Temp: -40°C to +60°C', 'Weather: All-weather', 'Wind Resistance: 15 m/s', 'IP67 Rated'] }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-orange-500/10 to-charcoal-900"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-orange-500">Technology</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cutting-edge UAV systems powered by advanced AI, secure communications, and military-grade reliability
          </motion.p>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Core <span className="text-orange-500">Technologies</span>
          </h2>
          
          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image/Icon */}
                <div className="flex-1 flex justify-center">
                  <div className="w-48 h-48 bg-orange-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30">
                    <span className="text-6xl">{tech.image}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">{tech.title}</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Technical <span className="text-orange-500">Specifications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-charcoal-900 rounded-xl p-6 border border-charcoal-700 hover:border-orange-500 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-orange-500">{spec.category}</h3>
                  <ul className="space-y-2">
                    {spec.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-400 text-sm flex items-center space-x-2">
                        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Built for <span className="text-orange-500">Excellence</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'R&D Excellence',
                description: 'Continuous innovation in UAV technology with dedicated research facilities',
                stat: '15+'
              },
              {
                title: 'Quality Standards',
                description: 'ISO 9001 certified manufacturing with military-grade quality control',
                stat: '99.95%'
              },
              {
                title: 'Field Proven',
                description: 'Extensively tested in real-world conditions and operational scenarios',
                stat: '5000+'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl font-bold text-orange-500 mb-4">{item.stat}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-orange-500">Deploy?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our technical team to discuss how our UAV technology can meet your specific operational requirements.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 orange-glow">
              Schedule Technical Briefing
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Technology;