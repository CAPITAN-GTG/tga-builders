import React from 'react';
import { Droplets, PhoneIcon } from 'lucide-react';

export default function BathroomRepairs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <Droplets className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Bathroom Repairs</h1>
          </div>
          <p className="mt-4 text-lg text-cyan-50 max-w-3xl">
            Expert bathroom repair services to fix any issues and restore functionality. 
            From minor fixes to major repairs, we ensure your bathroom works perfectly.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Bathroom Repair Services</h2>
            <p className="text-gray-600">
              Our experienced technicians specialize in all types of bathroom repairs. We use 
              high-quality materials and proven techniques to ensure lasting solutions for 
              any bathroom issue.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Common Repairs We Handle</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Leaky Faucets & Fixtures
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Toilet Repairs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Shower/Tub Repairs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Tile & Grout Repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Vanity & Cabinet Fixes
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              Having bathroom issues? Contact us for quick, professional repairs. 
              Our team is ready to restore your bathroom to perfect working condition.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us at</p>
                  <p className="text-gray-900 font-medium">(747) 303-8403</p>
                </div>
              </div>
              <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 