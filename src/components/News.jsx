import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/news?limit=6`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="news" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Updates" title="Recent News" subtitle="Product announcements, network expansions, and industry highlights." />
        {loading ? (
          <p className="text-gray-600">Loading updates...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-600">No updates yet. Follow us for news.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((n, idx) => (
              <motion.a key={idx} href={n.url || '#'} target="_blank" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.45 }} className="block bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-bold text-gray-900">{n.title}</h3>
                <p className="mt-2 text-gray-700">{n.summary}</p>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
