'use client'
import React from 'react';
import { AlertTriangle, PhoneIcon } from 'lucide-react';

export default function EmergencyServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <AlertTriangle className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Emergency Services</h1>
          </div>
          <p className="mt-4 text-lg text-cyan-50 max-w-3xl">
            24/7 emergency repair and maintenance services. We're here when you need us most, 
            providing quick response and professional solutions for urgent situations.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Emergency Response Services</h2>
            <p className="text-gray-600">
              Our emergency response team is available 24/7 to handle urgent repair needs. 
              We provide quick, professional service to address immediate concerns and prevent 
              further damage to your property.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Services Include</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Water Damage Response
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Urgent Repairs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Storm Damage
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  Structural Issues
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                  24/7 Response Team
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Available 24/7</h3>
            <p className="text-gray-600 mb-6">
              Having an emergency? Contact us immediately for rapid response service. 
              Our team is ready to help resolve your urgent situation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Emergency Line</p>
                  <p className="text-gray-900 font-medium">(747) 303-8403</p>
                </div>
              </div>
              <button 
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                onClick={() => window.location.href = 'tel:7473038403'}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 