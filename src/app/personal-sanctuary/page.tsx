"use client"
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function PersonalSanctuaryPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Personal Sanctuary
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Private <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Escape</span> Awaits
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Indulge in your private escape where solitude and peace reign supreme. Your eco-dome is more than a home—it's a sanctuary designed for tranquility, reflection, and complete personal retreat from the demands of modern life.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">A Haven of Peace and Solitude</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  In a world filled with constant noise, notifications, and demands, your eco-dome offers something increasingly rare: true peace and solitude. Designed as a personal sanctuary, each dome provides a private retreat where you can disconnect, recharge, and reconnect with yourself and nature.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The geodesic design creates a sense of spaciousness and harmony, while the remote locations ensure complete privacy. Whether you're seeking a quiet weekend escape, a meditation retreat, or a permanent residence away from the hustle, your dome becomes your personal sanctuary.
                </p>
              </div>

              {/* Sanctuary Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sanctuary Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Complete Privacy</h3>
                    </div>
                    <p className="text-gray-600">
                      Secluded locations and thoughtful design ensure you're completely undisturbed. No neighbors in sight, no traffic noise—just you and nature.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Tranquil Ambiance</h3>
                    </div>
                    <p className="text-gray-600">
                      The dome's unique acoustics and natural materials create a calming, peaceful atmosphere perfect for relaxation and meditation.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Natural Connection</h3>
                    </div>
                    <p className="text-gray-600">
                      Floor-to-ceiling windows and open design bring the outdoors in, creating a seamless connection with nature that soothes the soul.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Digital Detox</h3>
                    </div>
                    <p className="text-gray-600">
                      Remote locations with limited connectivity encourage true disconnection, allowing you to fully unplug and be present.
                    </p>
                  </div>
                </div>
              </div>

              {/* Wellness & Mindfulness */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wellness & Mindfulness</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Your dome is designed to support your wellness journey. The peaceful environment, natural light, and connection to nature create the perfect setting for meditation, yoga, reading, or simply being present.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Meditation Spaces</h3>
                      <p className="text-gray-600">Dedicated quiet areas with natural light and peaceful views, perfect for daily meditation practice.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Outdoor Living</h3>
                      <p className="text-gray-600">Private decks and outdoor spaces for morning coffee, evening stargazing, or simply breathing fresh air.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Reading Nooks</h3>
                      <p className="text-gray-600">Cozy corners with natural light, perfect for losing yourself in a good book or journaling.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600 flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Spa-Like Bathrooms</h3>
                      <p className="text-gray-600">Luxurious bathrooms with natural materials, creating a spa-like experience for daily relaxation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personalization */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Space, Your Way</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Every dome can be customized to reflect your personal style and needs. Whether you prefer minimalist simplicity or cozy comfort, we work with you to create a space that truly feels like your sanctuary.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Interior Design</h4>
                    <p className="text-sm text-gray-600">Choose from various design themes and color palettes</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Furniture Selection</h4>
                    <p className="text-sm text-gray-600">Curate furniture that matches your lifestyle</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Touches</h4>
                    <p className="text-sm text-gray-600">Add art, plants, and decor that speaks to you</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Sanctuary Experience</h2>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Stress Relief
                      </h4>
                      <p className="text-gray-600 text-sm">Escape daily pressures and find true relaxation in your private retreat.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Mental Clarity
                      </h4>
                      <p className="text-gray-600 text-sm">The peaceful environment helps clear your mind and restore focus.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Creative Inspiration
                      </h4>
                      <p className="text-gray-600 text-sm">Natural beauty and solitude spark creativity and new perspectives.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Quality Time
                      </h4>
                      <p className="text-gray-600 text-sm">Perfect for couples, families, or solo retreats to reconnect.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Health Benefits
                      </h4>
                      <p className="text-gray-600 text-sm">Fresh air, natural light, and reduced stress improve overall wellbeing.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> Personal Growth
                      </h4>
                      <p className="text-gray-600 text-sm">Time in solitude supports self-reflection and personal development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Create Your Sanctuary</h3>
                  <p className="mb-6 text-emerald-50">
                    Design your personal retreat where peace and solitude reign supreme.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
                  >
                    Start Your Journey
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sanctuary Features</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Complete Privacy
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Peaceful Ambiance
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Natural Connection
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Customizable Design
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Wellness Focused
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
            Find Your Peace in Your Personal Sanctuary
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Create your private escape where solitude and tranquility become your daily reality.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Design Your Sanctuary
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
