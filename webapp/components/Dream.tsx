import React from 'react'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Dream = () => {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/dream.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 " />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Title Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">You dream it.</span>
              <span className="block mt-2">We can build it.</span>
            </h2>
            <p className="mt-6 text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Building solid foundations for an ever-changing world
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pages/services"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/20 rounded-md hover:bg-white/10 transition-all duration-300 group"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pages/contact-us"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />
        </div>
      </div>
    </section>
  )
}

export default Dream