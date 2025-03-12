import React from 'react';
import { Box, PhoneIcon } from 'lucide-react';

export default function KitchenCabinets() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <Box className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Kitchen Cabinets</h1>
          </div>
          <p className="mt-4 text-lg text-cyan-50 max-w-3xl">
            Transform your kitchen with our expert cabinet installation and renovation services. 
            We specialize in creating beautiful, functional storage solutions for your kitchen.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Kitchen Cabinet Services</h2>
            <p className="text-gray-600">
              Whether you're looking to install new cabinets, refinish existing ones, or repair 
              damaged units, our expert team delivers high-quality craftsmanship and attention 
              to detail in every project.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Cabinet Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Custom Cabinet Installation
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Cabinet Refinishing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Hardware Replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Cabinet Repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Storage Solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              Ready to upgrade your kitchen cabinets? Contact us for a free consultation 
              and estimate. Our team will help you create the perfect storage solution for your kitchen.
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