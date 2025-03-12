import React from 'react';
import { Utensils, PhoneIcon } from 'lucide-react';

export default function KitchenRepairs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <Utensils className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Kitchen Repairs</h1>
          </div>
          <p className="mt-4 text-lg text-cyan-50 max-w-3xl">
            Expert kitchen repair services to keep your kitchen functional and beautiful. 
            From minor fixes to major repairs, we ensure your kitchen works perfectly.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Kitchen Repair Services</h2>
            <p className="text-gray-600">
              Your kitchen is the heart of your home, and we understand how important it is to keep 
              it in perfect working order. Our skilled technicians provide comprehensive repair 
              services to address any kitchen-related issues.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">What We Repair</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Countertop Repairs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Cabinet Hardware
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Sink & Faucet Issues
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Tile & Backsplash
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Lighting Fixtures
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              Having issues with your kitchen? Contact us for prompt and professional repair services. 
              We'll have your kitchen back in perfect working order.
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