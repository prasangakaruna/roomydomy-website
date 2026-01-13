"use client"
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function SelfSustainingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="RoomyDomy Logo" 
                  width={120} 
                  height={75} 
                />
              </Link>
            </div>
            <ul className="hidden lg:flex gap-6 text-gray-700 font-medium text-sm">
              <li><Link href="/#benefits" className="hover:text-emerald-600 transition">Benefits</Link></li>
              <li><Link href="/#pricing" className="hover:text-emerald-600 transition">Pricing</Link></li>
              <li><Link href="/#locations" className="hover:text-emerald-600 transition">Locations</Link></li>
              <li><Link href="/#realtors" className="hover:text-emerald-600 transition">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600 transition">Contact</Link></li>
            </ul>
            <div className="lg:hidden flex items-center">
              <button className="text-gray-800 hover:text-emerald-600 focus:outline-none p-2 rounded transition" aria-label="Open menu">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect y="4" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="18" width="24" height="2" rx="1" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="hidden lg:flex gap-3 ml-6">
              <button className="px-5 py-2.5 rounded-full border-2 border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition font-medium text-sm">Start A Demo</button>
              <Link href="/contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition shadow-md text-sm inline-block">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm text-emerald-700 font-semibold">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Self-Sustaining
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Live <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Off-Grid</span> with Complete Independence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our eco-domes are equipped with state-of-the-art solar energy systems that power your entire home sustainably. Experience true energy independence while reducing your carbon footprint to zero.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Energy Independence</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Every RoomyDomy eco-dome comes with a comprehensive solar energy system designed to meet all your power needs. From lighting and appliances to heating and cooling, your dome operates entirely off-grid, completely independent from traditional utility companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our integrated solar panels, battery storage systems, and energy-efficient design work together to ensure you have reliable power 24/7, regardless of weather conditions or location. Say goodbye to monthly utility bills and hello to sustainable, self-sufficient living.
                </p>
              </div>

              {/* Solar System Components */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Solar Energy System Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Solar Panels</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      High-efficiency monocrystalline solar panels with 25+ year warranty, generating 8-12kW of power depending on dome size.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Weather-resistant design</li>
                      <li>• Optimized for all climates</li>
                      <li>• Minimal maintenance required</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Battery Storage</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Advanced lithium-ion battery systems store excess energy for use during nighttime and cloudy days.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 20-40kWh capacity options</li>
                      <li>• 10+ year lifespan</li>
                      <li>• Smart energy management</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Inverter System</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      High-quality inverters convert DC solar power to AC for all your household appliances and devices.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Pure sine wave output</li>
                      <li>• Grid-tie and off-grid options</li>
                      <li>• Real-time monitoring</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Energy Monitoring</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Smart monitoring systems track your energy production, consumption, and battery levels in real-time.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Mobile app integration</li>
                      <li>• Usage analytics</li>
                      <li>• Automated optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Energy Efficiency Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Energy Efficiency Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Geodesic Design</h3>
                      <p className="text-gray-600">The dome's spherical shape maximizes natural light and minimizes surface area, reducing heating and cooling needs by up to 30%.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Superior Insulation</h3>
                      <p className="text-gray-600">Advanced insulation materials maintain comfortable temperatures year-round with minimal energy consumption.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">LED Lighting</h3>
                      <p className="text-gray-600">Energy-efficient LED lighting throughout reduces power consumption by 80% compared to traditional bulbs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Energy Star Appliances</h3>
                      <p className="text-gray-600">All included appliances meet or exceed Energy Star standards for maximum efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Smart Thermostats</h3>
                      <p className="text-gray-600">Programmable smart thermostats optimize heating and cooling based on your schedule and preferences.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Water Systems */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Water & Waste Management</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Complete self-sufficiency extends beyond energy. Our domes can be equipped with rainwater collection systems, water filtration, and composting toilets for complete off-grid living.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Rainwater Collection</h4>
                    <p className="text-sm text-gray-600">Capture and store rainwater for all your needs</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Water Filtration</h4>
                    <p className="text-sm text-gray-600">Multi-stage filtration for clean, safe drinking water</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Waste Management</h4>
                    <p className="text-sm text-gray-600">Composting systems for sustainable waste handling</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Self-Sustaining Living</h2>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Zero Utility Bills
                      </h4>
                      <p className="text-gray-600 text-sm">Eliminate monthly electricity, water, and gas bills forever.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Energy Independence
                      </h4>
                      <p className="text-gray-600 text-sm">Never worry about power outages or utility rate increases.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Environmental Impact
                      </h4>
                      <p className="text-gray-600 text-sm">Reduce your carbon footprint to near zero.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Remote Locations
                      </h4>
                      <p className="text-gray-600 text-sm">Build anywhere, even where utilities don't reach.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Long-Term Savings
                      </h4>
                      <p className="text-gray-600 text-sm">Save thousands annually while increasing property value.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Reliability
                      </h4>
                      <p className="text-gray-600 text-sm">Backup systems ensure power even during extended cloudy periods.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Go Off-Grid Today</h3>
                  <p className="mb-6 text-emerald-50">
                    Experience complete energy independence with our self-sustaining eco-domes.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">System Specs</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Solar Capacity</div>
                      <div className="text-lg font-semibold text-gray-900">8-12 kW</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Battery Storage</div>
                      <div className="text-lg font-semibold text-gray-900">20-40 kWh</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Warranty</div>
                      <div className="text-lg font-semibold text-gray-900">25 Years</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Energy Savings</div>
                      <div className="text-lg font-semibold text-emerald-600">$2,000-$4,000/year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience True Energy Independence
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join the off-grid revolution. Live sustainably while enjoying all the comforts of modern life.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
