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
            At TGA Builders Inc. our mission is to deliver the best service in California to our residential 
            and commercial clients. We believe that a team of technicians which is willing to listen to 
            customers' specific requirements is critical to the success of any project. That's why we consider 
            the advice we give as important as the services we provide.
          </p>
          <p className="text-xl text-gray-900 leading-relaxed">
            What sets us apart from our competition is how much we value our customers' feedback. This is 
            exemplified through our proven track record, testimonials, and over 18 years of experience in 
            this business. We pride ourselves in our superior capabilities and resources, always working 
            hard to deliver quality results within budget and established timelines.
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

        {/* Corporate Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Corporate Values</h2>
          <ul className="space-y-4 text-gray-900">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
              <span>Reliable service at an affordable and fair price.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
              <span>Taking responsibility for our services and advice.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-1" />
              <span>Transparency in licensing, bonds, and insurance that we hold.</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-900">
            It is also our mission to empower our team members to in their career with us. We always train 
            our new hires to a high standard of quality and consistently invest in new training and equipment 
            to make sure our team's work is consistent and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vision Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 leading-relaxed mb-4">
                We are focused on continually improving our reputation within the California area. As part 
                of our vision, we are driven to strengthen relationships with our existing clients.
              </p>
              <p className="text-gray-900 leading-relaxed">
                We are also excited about working with new clients that have heard positive things from 
                friends and family. It makes us proud that most of our new customers found us this way, 
                rather than through advertising.
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 leading-relaxed mb-4">
                We always tailor services to each client's needs. We're able to do this because we have 
                over 16 years of tradesman experience in maintenance and improvements, flooring, and demolitions.
              </p>
              <p className="text-gray-900 leading-relaxed">
                Instead of taking a cookie-cutter approach that you might expect from smaller contracting 
                companies, our company is a powerhouse of experience, knowledge, and skill. We love making 
                home and business owners' project dreams come true!
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-16" />

        {/* Quality Assurance Section */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Quality Assurance</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-900 leading-relaxed">
              TGA Builders Inc. has an exemplary quality assurance program to ensure that our workmanship 
              is always satisfactory to us and our clients.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="h-6 w-6 text-gray-900" />
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
          </div>
          <p className="text-gray-900 mb-4">
            Need professional services? We're here to help!
          </p>
          <a 
            href="tel:7473038403" 
            className="inline-flex items-center text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            (747) 303-8403
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;