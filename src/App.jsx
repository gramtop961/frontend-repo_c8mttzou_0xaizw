import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <News />
        <Contact />
      </main>
      <footer className="relative py-12 border-t mt-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
          <div className="absolute -top-24 left-1/3 h-48 w-48 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-56 w-56 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Bhagwati Satcom & IT — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-blue-600" href="#services">Services</a>
            <a className="hover:text-blue-600" href="#case-studies">Case Studies</a>
            <a className="hover:text-blue-600" href="#news">Updates</a>
            <a className="hover:text-blue-600" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
