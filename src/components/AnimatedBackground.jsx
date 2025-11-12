import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-20 h-96 w-96 rounded-full blur-3xl"
        style={{ background:
          'radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(59,130,246,0))' }}
        animate={{ y: [0, 20, -10, 0], x: [0, 10, -10, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background:
          'radial-gradient(closest-side, rgba(99,102,241,0.35), rgba(99,102,241,0))' }}
        animate={{ y: [0, -15, 5, 0], x: [0, -10, 12, 0], scale: [1, 1.06, 0.97, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
