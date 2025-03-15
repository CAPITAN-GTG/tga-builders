"use client";

import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { number: 250, suffix: 'k', label: 'Projects completed' },
  { number: 150, suffix: 'k', label: 'Clients' },
  { number: 15, suffix: '', label: 'Employees' },
  { number: 60, suffix: '+', label: 'Services Offered' },
];

const StatsHero = () => {
  return (
    <section className="relative bg-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#f0f0f0_2px,transparent_2px),linear-gradient(90deg,#f0f0f0_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-2 p-6"
            >
              <div className="flex items-baseline justify-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17416E]">
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17416E]">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsHero; 