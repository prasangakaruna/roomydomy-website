"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'locations' | 'exterior' | 'interior'>('locations');

  // Images organized by category
  const gallerySections = {
    locations: [
      // Costa Rica Project Renderings - Locations
      "/new/Costa Rica Project Renderings 1.jpg",
      "/new/Costa Rica Project Renderings 2.jpg",
      "/new/Costa Rica Project Renderings 3.jpg",
      "/new/Costa Rica Project Renderings 6.jpg",
      "/new/Costa Rica Project Renderings 7.jpg",
      "/new/Costa Rica Project Renderings 8.jpg",
      "/new/Costa Rica Project Renderings 9.jpg",
      "/new/Costa Rica Project Renderings 10.jpg",
      "/new/Costa Rica Project Renderings 11.jpg",
      "/new/Costa Rica Project Renderings 12.jpg",
      "/new/Costa Rica Project Renderings 13.jpg",
      "/new/Costa Rica Project Renderings 14.jpg",
      "/new/Costa Rica Project Renderings 15.jpg",
      "/new/Costa Rica Project Renderings 18.jpg",
      "/new/Costa Rica Project Renderings 19.jpg",
      "/new/Costa Rica Project Renderings 20.jpg",
      "/new/Costa Rica Project Renderings 21.jpg",
      "/new/Costa Rica Project Renderings 22.jpg",
      "/new/Costa Rica Project Renderings 23.jpg",
      "/new/Costa Rica Project Renderings 24.jpg",
      "/new/Costa Rica Project Renderings 25.jpg",
      "/new/Costa Rica Project Renderings 26.jpg",
      "/new/Costa Rica Project Renderings 27.jpg",
      "/new/Costa Rica Project Renderings 28.jpg",
      "/new/Costa Rica Project Renderings 29.jpg",
    ],
    exterior: [
      // 11R Lotus Cafe Renders - Exterior
      "/new/11R Lotus Cafe Render1.jpg",
      "/new/11R Lotus Cafe Render2.jpg",
      "/new/11R Lotus Cafe Render3.jpg",
      "/new/11R Lotus Cafe Render4.jpg",
      "/new/11R Lotus Cafe Render5.jpg",
      "/new/11R Lotus Cafe Render6.jpg",
      "/new/11R Lotus Cafe Render7.jpg",
      "/new/11R Lotus Cafe Render9.jpg",
      "/new/11R Lotus Cafe Render10.jpg",
      // 6R Renders - Exterior
      "/new/6R Render00.png",
      "/new/6R Render15.jpg",
      "/new/6R Render3.png",
      // 7R Renders - Exterior
      "/new/7r11.png",
      "/new/7r13.png",
      "/new/7r15.png",
      "/new/7r16.png",
    ],
    interior: [
      // 8R Lotus Renders - Interior
      "/new/8R Lotus Render1.jpg",
      "/new/8R Lotus Render2.jpg",
      "/new/8R Lotus Render3.jpg",
      "/new/8R Lotus Render4.jpg",
      "/new/8R Lotus Render5.jpg",
      "/new/8R Lotus Render6.jpg",
      "/new/8R Lotus Render7.jpg",
      "/new/8R Lotus Render8.jpg",
    ],
  };

  const currentImages = gallerySections[activeSection];
  const closeModal = () => setSelectedImage(null);

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
              <li><Link href="/gallery" className="hover:text-emerald-600 transition text-emerald-600 font-semibold">Gallery</Link></li>
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

      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-600 font-semibold text-sm">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              Image Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Our Project Gallery
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Explore our stunning collection of dome home designs, renderings, and project showcases.
            </p>

            {/* Section Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveSection('locations')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeSection === 'locations'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Locations ({gallerySections.locations.length})
                </span>
              </button>
              <button
                onClick={() => setActiveSection('exterior')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeSection === 'exterior'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Exterior ({gallerySections.exterior.length})
                </span>
              </button>
              <button
                onClick={() => setActiveSection('interior')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeSection === 'interior'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Interior ({gallerySections.interior.length})
                </span>
              </button>
            </div>
          </div>

          {/* Section Title */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {activeSection === 'locations' && 'Our Locations'}
              {activeSection === 'exterior' && 'Exterior Views'}
              {activeSection === 'interior' && 'Interior Views'}
            </h2>
            <p className="text-gray-600">
              {activeSection === 'locations' && 'Explore our stunning dome locations around the world'}
              {activeSection === 'exterior' && 'Discover the beautiful exterior designs of our eco-domes'}
              {activeSection === 'interior' && 'Experience the comfortable and stylish interior spaces'}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium truncate">
                      {image.split('/').pop()?.replace(/\.[^/.]+$/, '')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Count */}
          <div className="text-center mt-12 text-gray-600">
            <p className="text-lg">
              Showing <span className="font-semibold text-emerald-600">{currentImages.length}</span> {activeSection === 'locations' ? 'location' : activeSection === 'exterior' ? 'exterior' : 'interior'} images
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10 bg-black/50 rounded-full p-2"
            aria-label="Close"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Full size gallery image"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {selectedImage.split('/').pop()}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
