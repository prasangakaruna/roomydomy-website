"use client"
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function CarbonNegativePage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Carbon Negative Construction
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building That <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Removes CO2</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our revolutionary construction process doesn't just reduce carbon emissions—it actively removes CO2 from the atmosphere. Every dome we build contributes to reversing climate change.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond Carbon Neutral</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Traditional construction is a major contributor to global CO2 emissions, accounting for nearly 40% of all carbon output. At RoomyDomy, we've revolutionized the building process to not only eliminate emissions but actively sequester carbon from the atmosphere.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our carbon-negative construction approach means that each dome we build removes more CO2 from the atmosphere than it produces during construction and operation. This is achieved through innovative materials, sustainable sourcing, and carbon-capturing technologies integrated into every build.
                </p>
              </div>

              {/* How It Works */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Carbon Negative Construction Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Bio-Based Materials</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      We use materials like hempcrete, bamboo, and sustainably harvested timber that actively absorb CO2 as they grow and continue to sequester carbon throughout their lifecycle.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hempcrete: -110 kg CO2 per cubic meter</li>
                      <li>• Bamboo: Rapid growth captures CO2 quickly</li>
                      <li>• Certified sustainable timber</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Carbon Capture Technology</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Integrated carbon capture systems in our construction process remove CO2 directly from the air during building.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Direct air capture units</li>
                      <li>• CO2 mineralization in materials</li>
                      <li>• Permanent carbon storage</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Renewable Energy</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      All construction processes are powered by renewable energy, eliminating emissions from the building phase.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Solar-powered construction sites</li>
                      <li>• Electric construction equipment</li>
                      <li>• Zero-emission transportation</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Circular Economy</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Materials are sourced locally, reducing transportation emissions, and designed for complete recyclability.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Local material sourcing</li>
                      <li>• Minimal waste production</li>
                      <li>• 100% recyclable components</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Carbon Impact */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Measurable Carbon Impact</h2>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">CO2 Removed per Dome</span>
                      <span className="text-2xl font-bold text-emerald-600">15-25 tons</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Traditional Home Emissions</span>
                      <span className="text-2xl font-bold text-red-600">40-60 tons</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Net Carbon Benefit</span>
                      <span className="text-2xl font-bold text-emerald-600">55-85 tons CO2</span>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Equivalent to</span>
                        <span className="text-lg font-semibold text-gray-700">Planting 1,200-2,000 trees</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">*Per dome over its lifetime</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Carbon Negative Matters</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Climate Action</h3>
                      <p className="text-gray-600">Each dome actively contributes to reversing climate change, not just reducing your personal footprint.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Future-Proof Investment</h3>
                      <p className="text-gray-600">As carbon regulations tighten, carbon-negative properties will increase in value and desirability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Healthier Living</h3>
                      <p className="text-gray-600">Natural, bio-based materials improve indoor air quality and create a healthier living environment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Certification & Credits</h3>
                      <p className="text-gray-600">Your dome may qualify for carbon credits and green building certifications, adding financial value.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Build Carbon Negative</h3>
                  <p className="mb-6 text-emerald-50">
                    Join the movement to reverse climate change, one dome at a time.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Carbon Impact</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">CO2 Removed</div>
                      <div className="text-2xl font-bold text-emerald-600">15-25 tons</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">vs Traditional Home</div>
                      <div className="text-lg font-semibold text-gray-900">-55 to -85 tons</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Tree Equivalent</div>
                      <div className="text-lg font-semibold text-gray-900">1,200-2,000 trees</div>
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
            Build a Home That Heals the Planet
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Every dome we build removes CO2 from the atmosphere. Be part of the solution.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Building
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
