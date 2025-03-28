"use client";

import { Users, Phone } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "Reliable Service",
    description: "Providing reliable service at an affordable and fair price."
  },
  {
    title: "Responsibility",
    description: "Taking responsibility for our services and advice."
  },
  {
    title: "Transparency",
    description: "Full transparency in licensing, bonds, and insurance that we hold."
  },
  {
    title: "Quality Assurance",
    description: "Exemplary quality assurance program to ensure satisfactory workmanship."
  }
];

export default function CompanyMission() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Pattern */}
      <div className="relative bg-[#287593]">
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
                  <Link href="/pages/about-us" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">/</span>
                </li>
                <li>
                  <span className="text-white">Our Company Mission</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold text-white">Our Company Mission</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-900 leading-relaxed">
            At TGA Builders Inc. our mission is to deliver the best service in California to our residential 
            and commercial clients. We believe that a team of technicians which is willing to listen to 
            customers' specific requirements is critical to the success of any project. That's why we consider 
            the advice we give as important as the services we provide.
          </p>
          <p className="text-gray-900 leading-relaxed">
            What sets us apart from our competition is how much we value our customers' feedback. This is 
            exemplified through our proven track record, testimonials, and over 18 years of experience in 
            this business. We pride ourselves in our superior capabilities and resources, always working 
            hard to deliver quality results within budget and established timelines.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-900 mb-4">
              We are focused on continually improving our reputation within the California area. As part 
              of our vision, we are driven to strengthen relationships with our existing clients.
            </p>
            <p className="text-gray-900">
              We are also excited about working with new clients that have heard positive things from 
              friends and family. It makes us proud that most of our new customers found us this way, 
              rather than through advertising.
            </p>
          </div>
        </div>

        {/* Team Development */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Development</h2>
          <div className="bg-white shadow-sm rounded-lg p-6">
            <p className="text-gray-900">
              It is our mission to empower our team members in their career with us. We always train 
              our new hires to a high standard of quality and consistently invest in new training and 
              equipment to make sure our team's work is consistent and efficient.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-cyan-50 rounded-lg p-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
              <Phone className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Ready to Experience Our Service?</h3>
              <p className="text-gray-600 mb-2">Contact us today to learn more about how we can help.</p>
              <div className="flex flex-row items-center gap-4">
                <a 
                  href="tel:7473038403" 
                  className="inline-flex items-center text-lg font-semibold text-black rounded-full px-4 py-1 hover:text-white hover:bg-black transition-all duration-500"
                >
                  (747) 303-8403
                </a>
                <span className="text-black">or</span>
                <a 
                  href="tel:7027553316" 
                  className="inline-flex items-center text-lg font-semibold text-black rounded-full px-4 py-1 hover:text-white hover:bg-black transition-all duration-500"
                >
                  (702) 755-3316
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 