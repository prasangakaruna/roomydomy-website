"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { locationData } from "./location-data";

interface LocationDetailsPageClientProps {
  locationSlug: string;
}

export default function LocationDetailsPageClient({ locationSlug }: LocationDetailsPageClientProps) {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const location = locationData[locationSlug];

  useEffect(() => {
    if (!location) {
      setIsLoading(false);
      return;
    }

    // Generate image paths from /new/ folder
    const generateImagePaths = (): string[] => {
      const paths: string[] = [];
      
      // Map locations to images from /new/ folder
      const locationImageMap: Record<string, string[]> = {
        'monteverde-retreat': [
          '/new/Costa Rica Project Renderings 1.jpg',
          '/new/Costa Rica Project Renderings 2.jpg',
          '/new/Costa Rica Project Renderings 3.jpg',
          '/new/Costa Rica Project Renderings 6.jpg',
          '/new/Costa Rica Project Renderings 7.jpg',
          '/new/Costa Rica Project Renderings 8.jpg',
          '/new/Costa Rica Project Renderings 9.jpg',
          '/new/Costa Rica Project Renderings 10.jpg',
          '/new/Costa Rica Project Renderings 11.jpg',
          '/new/Costa Rica Project Renderings 12.jpg',
          '/new/Costa Rica Project Renderings 13.jpg',
          '/new/Costa Rica Project Renderings 14.jpg',
          '/new/Costa Rica Project Renderings 15.jpg',
        ],
        'adriatic-haven': [
          '/new/11R Lotus Cafe Render1.jpg',
          '/new/11R Lotus Cafe Render2.jpg',
          '/new/11R Lotus Cafe Render3.jpg',
          '/new/11R Lotus Cafe Render4.jpg',
          '/new/11R Lotus Cafe Render5.jpg',
          '/new/11R Lotus Cafe Render6.jpg',
          '/new/11R Lotus Cafe Render7.jpg',
          '/new/11R Lotus Cafe Render9.jpg',
          '/new/11R Lotus Cafe Render10.jpg',
        ],
        'algarve-coastal-village': [
          '/new/11R Lotus Cafe Render1.jpg',
          '/new/11R Lotus Cafe Render2.jpg',
          '/new/11R Lotus Cafe Render3.jpg',
          '/new/11R Lotus Cafe Render4.jpg',
          '/new/11R Lotus Cafe Render5.jpg',
          '/new/11R Lotus Cafe Render6.jpg',
        ],
        'atlas': [
          '/new/11R Lotus Cafe Render7.jpg',
          '/new/11R Lotus Cafe Render9.jpg',
          '/new/11R Lotus Cafe Render10.jpg',
        ],
        'bolu': [
          '/new/8R Lotus Render1.jpg',
          '/new/8R Lotus Render2.jpg',
          '/new/8R Lotus Render3.jpg',
          '/new/8R Lotus Render4.jpg',
          '/new/8R Lotus Render5.jpg',
        ],
        'fethiye': [
          '/new/8R Lotus Render6.jpg',
          '/new/8R Lotus Render7.jpg',
          '/new/8R Lotus Render8.jpg',
          '/new/6R Render00.png',
          '/new/6R Render15.jpg',
        ],
        'marmaris': [
          '/new/6R Render3.png',
          '/new/7r11.png',
          '/new/7r13.png',
          '/new/7r15.png',
          '/new/7r16.png',
        ],
        'canakkale': [
          '/new/Costa Rica Project Renderings 18.jpg',
          '/new/Costa Rica Project Renderings 19.jpg',
          '/new/Costa Rica Project Renderings 20.jpg',
          '/new/Costa Rica Project Renderings 21.jpg',
        ],
        'kocaeli': [
          '/new/Costa Rica Project Renderings 22.jpg',
          '/new/Costa Rica Project Renderings 23.jpg',
          '/new/Costa Rica Project Renderings 24.jpg',
          '/new/Costa Rica Project Renderings 25.jpg',
        ],
      };
      
      // Return mapped images or default set
      if (locationImageMap[locationSlug]) {
        return locationImageMap[locationSlug];
      }
      
      // Default fallback - use a mix of images from /new/ folder
      return [
        '/new/11R Lotus Cafe Render1.jpg',
        '/new/11R Lotus Cafe Render2.jpg',
        '/new/11R Lotus Cafe Render3.jpg',
        '/new/11R Lotus Cafe Render4.jpg',
        '/new/8R Lotus Render1.jpg',
        '/new/8R Lotus Render2.jpg',
        '/new/Costa Rica Project Renderings 1.jpg',
        '/new/Costa Rica Project Renderings 2.jpg',
      ];
    };

    const imagePaths = generateImagePaths();
    
    // Preload images to check which ones exist
    const loadImages = async () => {
      const validImages: string[] = [];
      const loadPromises = imagePaths.map((imgPath) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            validImages.push(imgPath);
            resolve();
          };
          img.onerror = () => resolve(); // Skip if image doesn't exist
          img.src = imgPath;
        });
      });

      await Promise.all(loadPromises);
      setImages(validImages);
      setIsLoading(false);
    };

    loadImages();
  }, [location, locationSlug]);

  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-6">The location you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition-all duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-200 focus:outline-none font-medium"
              aria-label="Go back"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-2xl font-bold text-gray-900">{location.title}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        {/* Location Info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
              {location.location}
            </span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
              {location.climate}
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{location.description}</p>
          
          {/* Detailed Description */}
          {location.detailedDescription && (
            <div className="mb-8 p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About This Location
              </h3>
              <p className="text-gray-700 leading-relaxed">{location.detailedDescription}</p>
            </div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {location.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Property Details */}
          {location.propertyDetails && (
            <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Property Details
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {location.propertyDetails.size && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Size</div>
                    <div className="text-lg font-semibold text-gray-900">{location.propertyDetails.size}</div>
                  </div>
                )}
                {location.propertyDetails.capacity && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Capacity</div>
                    <div className="text-lg font-semibold text-gray-900">{location.propertyDetails.capacity}</div>
                  </div>
                )}
                {location.propertyDetails.bedrooms && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Bedrooms</div>
                    <div className="text-lg font-semibold text-gray-900">{location.propertyDetails.bedrooms}</div>
                  </div>
                )}
                {location.propertyDetails.bathrooms && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Bathrooms</div>
                    <div className="text-lg font-semibold text-gray-900">{location.propertyDetails.bathrooms}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Two Column Layout for Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Nearby Attractions */}
            {location.nearbyAttractions && location.nearbyAttractions.length > 0 && (
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nearby Attractions
                </h3>
                <ul className="space-y-2">
                  {location.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            {location.activities && location.activities.length > 0 && (
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Activities
                </h3>
                <ul className="space-y-2">
                  {location.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Amenities */}
            {location.amenities && location.amenities.length > 0 && (
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Amenities
                </h3>
                <ul className="space-y-2">
                  {location.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Best Time to Visit */}
            {location.bestTimeToVisit && (
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Best Time to Visit
                </h3>
                <p className="text-gray-700 leading-relaxed">{location.bestTimeToVisit}</p>
              </div>
            )}
          </div>

          {/* Transportation & Local Culture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {location.transportation && (
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Transportation
                </h3>
                <p className="text-gray-700 leading-relaxed">{location.transportation}</p>
              </div>
            )}

            {location.localCulture && (
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Local Culture
                </h3>
                <p className="text-gray-700 leading-relaxed">{location.localCulture}</p>
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading images...</p>
            </div>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 mb-4">No images available for this location.</p>
            <Link
              href="/"
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              Go Back Home
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Main Image Display */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100">
              {images[currentImageIndex] && (
                <Image
                  src={images[currentImageIndex]}
                  alt={`${location.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Grid */}
            {images.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentImageIndex === index
                        ? "border-teal-500 ring-2 ring-teal-200"
                        : "border-gray-200 hover:border-teal-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${location.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in This Location?</h2>
            <p className="text-gray-600 mb-6">Get in touch with us to learn more about available domes in this area.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-lg shadow-lg border-2 border-teal-600 hover:bg-teal-50 transition-all duration-200"
              >
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
