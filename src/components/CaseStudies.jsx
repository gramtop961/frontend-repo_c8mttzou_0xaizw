import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CaseStudies() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/case-studies?limit=3`)
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
    <section id="case-studies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proven Outcomes"
          title="Case Studies"
          subtitle="A snapshot of how we improve reliability, bandwidth, and operational outcomes across tough environments."
        />

        {loading ? (
          <p className="text-gray-600">Loading case studies...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-600">No case studies yet. Ask us for references.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((c, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.45 }} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.client} • {c.industry}</p>
                <p className="mt-2 text-gray-700">{c.summary}</p>
                {c.results?.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm list-disc list-inside text-gray-700">
                    {c.results.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
