'use client'
import React from 'react';
import { MapPin, PhoneIcon } from 'lucide-react';

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <MapPin className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Service Areas</h1>
          </div>
          <p className="mt-4 text-lg text-cyan-50 max-w-3xl">
            We provide our comprehensive construction and repair services throughout 
            Los Angeles County and surrounding areas. Check if we serve your location.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Areas We Serve</h2>
            <p className="text-gray-600">
              TGA Builders is proud to serve residential and commercial clients in All California. Our service area includes major cities and surrounding 
              communities.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Primary Service Locations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Los Angeles
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  San Fernando
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Santa Clarita
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Glendale
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Burbank
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Orange County
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  San Bernardino County
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Ventura County
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  And more in the state of California
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Check Service Availability</h3>
            <p className="text-gray-600 mb-6">
              Not sure if we serve your area? Contact us to verify service availability 
              in your location. We're happy to discuss your project needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us at</p>
                  <div className="space-y-1">
                    <p className="text-gray-900 font-medium">(702) 755-3316</p>
                    <p className="text-gray-900 font-medium">(747) 303-8403</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors"
                  onClick={() => window.location.href = 'tel:7027553316'}
                >
                  Call (702)
                </button>
                <button 
                  className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors"
                  onClick={() => window.location.href = 'tel:7473038403'}
                >
                  Call (747)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 