"use client"
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function PassiveIncomePage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Passive Income
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Earn Up to <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">$50,000/Year</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your eco-dome into a profitable investment. Our fully managed rental program lets you earn passive income while you're away, completely hassle-free.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  When you own a RoomyDomy eco-dome, you're not just investing in a home—you're investing in a revenue-generating asset. Our comprehensive rental management program handles everything, from guest bookings to property maintenance, so you can enjoy your passive income without lifting a finger.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're using your dome as a vacation home, weekend retreat, or full-time residence, you can list it on our premium rental platform when you're not using it. Our team of experienced property managers ensures your dome is always guest-ready and generating maximum returns.
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">High Revenue Potential</h3>
                    </div>
                    <p className="text-gray-600">
                      With average nightly rates of $200-$400 and occupancy rates of 60-80%, your dome can generate $30,000-$50,000 annually depending on location and seasonality.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Fully Managed</h3>
                    </div>
                    <p className="text-gray-600">
                      We handle everything: guest communication, check-ins, cleaning, maintenance, and marketing. You just collect the income.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Flexible Scheduling</h3>
                    </div>
                    <p className="text-gray-600">
                      Block out dates whenever you want to use your dome. The rest of the time, it works for you automatically.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Premium Platform</h3>
                    </div>
                    <p className="text-gray-600">
                      Your dome is listed on our exclusive platform, attracting high-quality guests who value unique, sustainable accommodations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Revenue Breakdown */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Revenue Breakdown</h2>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Average Nightly Rate</span>
                      <span className="text-2xl font-bold text-emerald-600">$250-$350</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Occupancy Rate</span>
                      <span className="text-2xl font-bold text-emerald-600">65-80%</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Nights Booked/Year</span>
                      <span className="text-2xl font-bold text-emerald-600">180-240 nights</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                      <span className="text-lg font-semibold text-gray-700">Management Fee</span>
                      <span className="text-2xl font-bold text-gray-600">20-25%</span>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Estimated Annual Income</span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">$30,000-$50,000</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">*Actual earnings vary by location, season, and property features</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Management Services */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Manage</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Guest Communication</h3>
                      <p className="text-gray-600">Handle all inquiries, bookings, and guest support 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Check-in & Check-out</h3>
                      <p className="text-gray-600">Coordinate seamless arrivals and departures for all guests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Professional Cleaning</h3>
                      <p className="text-gray-600">Deep cleaning and preparation between every guest stay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Maintenance & Repairs</h3>
                      <p className="text-gray-600">Regular upkeep and emergency repairs handled promptly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Marketing & Listings</h3>
                      <p className="text-gray-600">Professional photography, optimized listings, and strategic pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Financial Reporting</h3>
                      <p className="text-gray-600">Monthly statements and transparent accounting for all income and expenses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Earning?</h3>
                  <p className="mb-6 text-emerald-50">
                    Join hundreds of dome owners who are already generating passive income from their properties.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Average ROI</div>
                      <div className="text-2xl font-bold text-emerald-600">8-12%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Minimum Commitment</div>
                      <div className="text-lg font-semibold text-gray-900">None - Use Anytime</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Setup Time</div>
                      <div className="text-lg font-semibold text-gray-900">2-4 Weeks</div>
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
            Turn Your Dome Into a Revenue Stream
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Start earning passive income from day one. Our team handles everything so you don't have to.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
