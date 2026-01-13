"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Roomydomy Logo" width={160} height={75} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Pioneering the future of sustainable living with innovative dome homes that harmonize luxury, comfort, and environmental responsibility.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg" aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="text-lg font-bold text-gray-200 mb-6">Products & Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Dome Homes
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Custom Design
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Installation
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Maintenance
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Financing
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-gray-200 mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                About Us
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Our Mission
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sustainability
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Careers
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Press
              </Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-bold text-gray-200 mb-6">Support & Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact Support
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Privacy Policy
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Terms of Service
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Cookie Policy
              </Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center gap-2">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Accessibility
              </Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-200 mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest news about sustainable living and dome home innovations.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 lg:w-80 px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent shadow-lg"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-semibold rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>© 2025 Roomydomy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Designed for Prasanga</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">Sitemap</Link>
              <Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">Accessibility</Link>
              <Link href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
