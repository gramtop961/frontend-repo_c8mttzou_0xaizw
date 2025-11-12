import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const card = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))]
  const filtered = filter === 'All' ? services : services.filter(s => s.category === filter)

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Capabilities"
          title="Services"
          subtitle="From enterprise IT to mission-critical satellite connectivity, we deliver end-to-end solutions."
        />

        {loading ? (
          <p className="text-gray-600">Loading services...</p>
        ) : (
          <>
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    filter === c ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-300'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((s, idx) => (
                <motion.div key={idx} {...card} viewport={{ once: true, margin: '-100px' }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold">{s.category}</p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-700">{s.description}</p>
                  {s.features?.length > 0 && (
                    <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
                      {s.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
