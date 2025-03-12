"use client";

import { Phone, CheckCircle2, Clock, Shield, Users, Wrench } from 'lucide-react';
import Link from 'next/link';

const services = [
  "Interior and exterior painting",
  "Kitchen cabinets",
  "Home repairs",
  "Bathroom repairs",
  "Demolitions",
  "Drywall repairs",
  "Flooring and tiling",
  "General Household",
  "Curtain Hanging",
  "Door",
  "Door Installation"
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our Customer Care team is available every day of the year, around the clock."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "All services are completed by licensed, bonded, and insured professionals."
  },
  {
    icon: Users,
    title: "Background Checked",
    description: "All our employees undergo thorough background checks for your peace of mind."
  },
  {
    icon: Wrench,
    title: "Professional Service",
    description: "Over 18 years of experience in delivering quality handyman services."
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Pattern */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">/</span>
                </li>
                <li>
                  <span className="text-white">About Us</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-900 leading-relaxed">
            TGA Handyman Services LLC is owned and founded by Manny Samayoa who is a passionate tradesman and family man. 
            Manny has over 18 years of experience in the Handyman Trade.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <feature.icon className="h-6 w-6 text-gray-900 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 my-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-gray-900 leading-relaxed mb-6">
                Our team is capable of delivering a range of handyman services of every size and type:
              </p>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-gray-900 flex-shrink-0" />
                    <span className="text-gray-900">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-gray-900" />
                <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
              </div>
              <p className="text-gray-900 mb-4">
                Need professional handyman services? We're here to help!
              </p>
              <a 
                href="tel:+17473038403" 
                className="inline-flex items-center text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors"
              >
                (747) 303-8403
              </a>
            </div>

            <div className="prose prose-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-gray-900 leading-relaxed">
                When you choose TGA Handyman Services LLC, you choose the very best this area has to offer. 
                Our services are designed to provide you with the labor, resources, and experience needed 
                to get your job done right.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-16" />

        {/* Bottom Sections */}
        <div className="space-y-16">
          {/* Commitment Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 leading-relaxed">
                We're committed to listening to our clients from the moment we begin our working relationship. 
                This ensures that we deliver what is needed professionally and within budget. We also listen 
                to our clients' feedback during the job and after the job, so that they are satisfied 
                throughout the entire process.
              </p>
            </div>
          </div>

          {/* Professional Services Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Handyman Services
            </h2>
            <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-4 text-gray-900">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>One-stop shop for all your home repair, remodeling, and installation needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Quality workmanship guaranteed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Background-checked employees for your safety and peace of mind</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Free estimates over the phone when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
                  <span>Proper COVID-19 precautions for your safety</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-4 mt-6">
                <p className="text-gray-900">
                  Need an efficient and affordable handyman service? Call us at{' '}
                  <a href="tel:+17473038403" className="font-semibold hover:text-gray-600 transition-colors">
                    (747) 303-8403
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;