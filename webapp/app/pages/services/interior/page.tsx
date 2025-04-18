'use client'
import React from 'react';
import { PaintBucket, PhoneIcon } from 'lucide-react';

export default function InteriorServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <PaintBucket className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Interior Services</h1>
          </div>
          <p className="mt-4 text-lg text-cyan-50 max-w-3xl">
            Elevate your interior spaces with our professional design and renovation services. 
            We create beautiful, functional spaces that reflect your style and meet your needs.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Interior Services</h2>
            <p className="text-gray-600">
              From complete room makeovers to subtle improvements, our interior services are designed 
              to enhance the beauty and functionality of your living spaces. We combine creativity 
              with technical expertise to deliver outstanding results.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Interior Painting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Wall Texturing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Crown Molding
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Trim Work
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Custom Finishes
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              Ready to transform your interior spaces? Contact us for a free consultation 
              and estimate. Our team is ready to bring your vision to life.
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