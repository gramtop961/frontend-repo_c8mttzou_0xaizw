export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            IT Excellence meets Satellite Connectivity
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            We architect modern IT systems and deliver mission-critical satellite communications for remote, maritime, and enterprise operations.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold">Get a Proposal</a>
            <a href="#services" className="px-5 py-3 bg-white border border-gray-300 hover:border-gray-400 rounded-md font-semibold text-gray-800">Explore Services</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">99.9%</p>
              <p className="text-xs text-gray-600">Uptime Targets</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-xs text-gray-600">Global Deployments</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">24/7</p>
              <p className="text-xs text-gray-600">NOC Support</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop" alt="Satellite" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border">
            <p className="text-sm font-semibold">Trusted by enterprises in energy, maritime, and government</p>
          </div>
        </div>
      </div>
    </section>
  )
}
