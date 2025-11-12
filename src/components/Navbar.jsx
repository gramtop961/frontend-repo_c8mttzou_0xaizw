import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#news', label: 'Updates' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded bg-gradient-to-tr from-blue-600 to-indigo-500 inline-block group-hover:scale-110 transition" />
          <span className="font-bold text-gray-900 text-lg">Bhagwati Satcom & IT</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {navItems.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-blue-600 transition-colors">{i.label}</a>
          ))}
          <a href="/test" className="ml-2 px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs hover:bg-gray-800 transition">System Test</a>
        </nav>
        <button aria-label="Open menu" onClick={() => setOpen((v) => !v)} className="md:hidden p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 active:bg-gray-200"
                >
                  {i.label}
                </a>
              ))}
              <a href="/test" className="inline-flex items-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm">System Test</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
