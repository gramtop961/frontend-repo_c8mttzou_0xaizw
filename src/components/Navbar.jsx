import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded bg-gradient-to-tr from-blue-600 to-indigo-500 inline-block" />
          <span className="font-bold text-gray-900 text-lg">Bhagwati Satcom & IT</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#case-studies" className="hover:text-blue-600">Case Studies</a>
          <a href="#news" className="hover:text-blue-600">Updates</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="/test" className="ml-2 px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs">System Test</a>
        </nav>
        <button className="md:hidden p-2"><Menu className="h-6 w-6" /></button>
      </div>
    </header>
  )
}
