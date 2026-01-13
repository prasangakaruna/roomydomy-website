"use client"
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function NaturalClimateControlPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Natural Climate Control
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comfort Through <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Design</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The geodesic dome's unique geometry creates natural climate control, maintaining comfortable temperatures year-round with minimal energy consumption through passive design principles.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Passive Climate Control</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Traditional homes fight against nature, requiring constant heating and cooling to maintain comfort. Our geodesic domes work with natural forces, using the dome's unique geometry and passive design principles to create comfortable living conditions with minimal energy input.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The spherical shape of a dome has the smallest surface area relative to volume of any structure, meaning less heat loss in winter and less heat gain in summer. Combined with strategic placement, natural ventilation, and thermal mass, your dome maintains comfortable temperatures naturally.
                </p>
              </div>

              {/* Design Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Dome Geometry Creates Comfort</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Minimal Surface Area</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      The dome shape has 30% less surface area than a box of equal volume, dramatically reducing heat transfer.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Less heat loss in winter</li>
                      <li>• Less heat gain in summer</li>
                      <li>• Reduced energy needs</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Natural Air Flow</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      The curved interior creates natural convection currents, circulating air without fans or mechanical systems.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hot air rises naturally</li>
                      <li>• Cool air settles below</li>
                      <li>• Continuous circulation</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Thermal Mass</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Strategic use of thermal mass materials absorbs heat during the day and releases it at night.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Temperature stabilization</li>
                      <li>• Reduced temperature swings</li>
                      <li>• Natural heating/cooling</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Solar Orientation</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Domes are positioned to maximize winter sun exposure and minimize summer heat gain.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Passive solar heating</li>
                      <li>• Natural shading strategies</li>
                      <li>• Optimal sun angles</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Energy Savings */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Energy Efficiency Results</h2>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Heating Energy Reduction</span>
                      <span className="text-2xl font-bold text-emerald-600">30-50%</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Cooling Energy Reduction</span>
                      <span className="text-2xl font-bold text-emerald-600">40-60%</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Overall Energy Savings</span>
                      <span className="text-2xl font-bold text-emerald-600">35-55%</span>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Annual Savings</span>
                        <span className="text-lg font-semibold text-emerald-600">$1,500-$3,000</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">*Compared to traditional homes of similar size</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Natural Climate Control</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Lower Energy Bills</h3>
                      <p className="text-gray-600">Significant reduction in heating and cooling costs through passive design.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Consistent Comfort</h3>
                      <p className="text-gray-600">Natural temperature regulation creates more consistent, comfortable conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Reduced Mechanical Systems</h3>
                      <p className="text-gray-600">Less reliance on HVAC systems means lower maintenance and longer equipment life.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Better Air Quality</h3>
                      <p className="text-gray-600">Natural ventilation improves indoor air quality without mechanical systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Natural Comfort</h3>
                  <p className="mb-6 text-emerald-50">
                    Experience comfort through intelligent design, not energy consumption.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Savings</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Heating Reduction</div>
                      <div className="text-lg font-semibold text-gray-900">30-50%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Cooling Reduction</div>
                      <div className="text-lg font-semibold text-gray-900">40-60%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Annual Savings</div>
                      <div className="text-lg font-semibold text-emerald-600">$1,500-$3,000</div>
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
            Comfort Through Intelligent Design
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Experience natural climate control that reduces energy use while maximizing comfort.
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
