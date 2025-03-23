"use client";

import { Lightbulb, Wrench, DoorClosed, TreePine, ArrowRight, Droplet, Building2, Home } from 'lucide-react';
import Link from 'next/link';
import Welcome from '../components/Welcome';
import LearnMoreButton from '../components/LearnMoreButton';
import Dream from '../components/Dream';
import ContactForm from '../components/ContactForm';
import StatsHero from '../components/StatsHero';
import ServicePopup from '../components/ServicePopup';
import { useState } from 'react';

const services = [
  {
    title: 'Residential Construction',
    icon: Home,
    services: [
      'Remodels',
      'Drywall installation',
      'Paint',
      'Water damages',
      'Wall repairs',
      'Framing',
      'Drywall'
    ]
  },
  {
    title: 'Commercial Construction',
    icon: Building2,
    services: [
      'Remodels',
      'Drywall installation',
      'Paint',
      'Water damages',
      'Wall repairs',
      'Framing',
      'Drywall',
      'External paint'
    ]
  },
  {
    title: 'Electrical & Lighting',
    icon: Lightbulb,
    services: [
      'Minor Electrical',
      'GFCI replacements',
      'Plug replacements',
      'Light replacements',
      'Light bulbs replacement'
    ]
  },
  {
    title: 'General Maintenance',
    icon: Wrench,
    services: [
      'Handyman services',
      'Cleaning interior buildings',
      'Pest control repairs',
      'Pest control inspections',
      'Building repairs interior and exterior',
      'And more'
    ]
  },
  {
    title: 'Doors & Gates',
    icon: DoorClosed,
    services: [
      'Welding repairs',
      'Doors replacement',
      'New doors installation',
      'Commercial doors installation',
      'Welding',
      'And more'
    ]
  },
  {
    title: 'Landscape Services',
    icon: TreePine,
    services: [
      'Landscaping',
      'Tree trimming',
      'Clean yards lots etc.',
      'Paver installation',
      'Landscaping Bedrock conversions',
      'Tree removal'
    ]
  },
  {
    title: 'Plumbing',
    icon: Droplet,
    services: [
      'Emergency water leaks',
      'Minor plumbing issues',
      'Valve replacements'
    ]
  }
];

const FrontPage = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/bg.png")' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Your satisfaction is our goal.</span>
              <span className="block mt-2">Your vision is our business.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-200 sm:max-w-3xl">
              Dreams are meant to come true. We'll make it happen for you.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <LearnMoreButton variant="dark" />
              <Link
                href="/pages/contact-us"
                className="rounded-md bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Service Boxes */}
          <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-lg bg-white/10 p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex flex-col items-center text-center">
                  <service.icon className="h-8 w-8 text-cyan-400" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                  <div className="mt-4 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-cyan-400/50 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Welcome />
      <Dream />
      <StatsHero />
      <ContactForm />

      {/* Service Popup */}
      {selectedService && (
        <ServicePopup
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          services={selectedService.services}
          icon={selectedService.icon}
        />
      )}
    </main>
  );
};

export default FrontPage;