import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            IT Excellence meets Satellite Connectivity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-700 text-lg"
          >
            We architect modern IT systems and deliver mission-critical satellite communications for remote, maritime, and enterprise operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex gap-3"
          >
            <a href="#contact" className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold shadow-sm">Get a Proposal</a>
            <a href="#services" className="px-5 py-3 bg-white border border-gray-300 hover:border-gray-400 rounded-md font-semibold text-gray-800 shadow-sm">Explore Services</a>
          </motion.div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            {[{k:'Uptime Targets', v:'99.9%'},{k:'Global Deployments', v:'50+'},{k:'NOC Support', v:'24/7'}].map((stat,i)=> (
              <motion.div key={stat.k}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i*0.1 }}
              >
                <p className="text-3xl font-bold text-gray-900">{stat.v}</p>
                <p className="text-xs text-gray-600">{stat.k}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="aspect-[4/3] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop" alt="Satellite" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border"
          >
            <p className="text-sm font-semibold">Trusted by enterprises in energy, maritime, and government</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
