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
      <footer className="py-10 border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
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
