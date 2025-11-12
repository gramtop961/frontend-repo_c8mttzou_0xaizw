import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service_interest: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', company: '', service_interest: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 grid md:grid-cols-2 gap-4">
          <input className="border rounded p-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input className="border rounded p-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input className="border rounded p-2" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <input className="border rounded p-2" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
          <input className="border rounded p-2 md:col-span-2" name="service_interest" placeholder="Interested Service" value={form.service_interest} onChange={handleChange} />
          <textarea className="border rounded p-2 md:col-span-2" name="message" placeholder="Message" rows="4" value={form.message} onChange={handleChange} />
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold">
              {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
            </button>
            {status === 'sent' && <span className="text-green-700">Thanks! We will reach out shortly.</span>}
            {status === 'error' && <span className="text-red-700">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
