import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest text-blue-600 font-semibold"
        >
          {eyebrow}
        </motion.p>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl font-bold text-gray-900"
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-gray-700"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
