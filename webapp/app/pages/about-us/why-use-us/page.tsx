"use client";

import { Shield, Clock, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';

export default function WhyUseUs() {
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
                  <span className="text-white">Why Use Us</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold text-white">Why Use Us</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-900 leading-relaxed">
            When you choose TGA Builders Inc. you also tap into the benefits that come with a company 
            that has over 18 years of handyman experience. Our comprehensive and reliable service makes 
            us the number one choice for home and business owners in the California area.
          </p>
          <p className="text-gray-900 leading-relaxed">
            Our ethics and high caliber for quality also keep us accountable on the job. That's why we 
            provide the same level of service to our clients as we would to our friends and family. This 
            is evident through our professional track record, testimonials, and the benefits that our 
            customers regularly get to take advantage of.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Key Benefits</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
              <p className="text-gray-900">
                Our Customer Care team is available 24/7. If you have an emergency, you can give us a call 
                and count on us to be there when you need us most.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
              <p className="text-gray-900">
                We make booking as convenient as possible because we know what it's like juggling work, 
                family, and property repairs.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
              <p className="text-gray-900">
                Our technicians are COVID-19 conscious and always wear masks. We also treat your home with 
                respect by ensuring that our team wears booties to protect your flooring and that they 
                always cleaning up after the job is done.
              </p>
            </li>
          </ul>
        </div>

        {/* Professional Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Professional Services for Affordable Prices
          </h2>
          <div className="bg-white shadow-sm rounded-lg p-6">
            <p className="text-gray-900 mb-4">
              We provide high quality tradesman services in California for an affordable and fair price. 
              Every single technician on our team is fully trained and is held accountable to a professional 
              standard at all times.
            </p>
            <p className="text-gray-900">
              Our billing is also provided on an hourly basis for small jobs and for larger ones we can 
              quote a fixed price so that you can rest assured the job will get done within your budget.
            </p>
          </div>
        </div>

        {/* Our Guarantee Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Guarantee</h2>
          <div className="space-y-6">
            <p className="text-gray-900">
              We only recruit skilled tradesmen with the necessary knowledge, experience, and certifications 
              to complete the jobs that you book them for. TGA Builders Inc. also invests into the best 
              tools, equipment, and vans that our team members require to deliver an exceptional service.
            </p>
            <p className="text-gray-900">
              We are committed to meeting the highest of standards for each job and continuously improving. 
              That's why our quality assurance team tracks the quality of each tradesman's work during 
              their employment with us. In the off chance that the quality on a job doesn't meet our 
              standards or the customer's standards, we will make sure to get it corrected at no cost to 
              the customer.
            </p>
            <p className="text-gray-900">
              We also take responsibility for defects that occur within 12 months. You can learn more 
              about our commitments in our terms and conditions.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-cyan-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Service Estimate Today</h2>
          <p className="text-gray-900 mb-6">
            If you want to get an estimate for services or want to schedule a booking, give us a call. 
            Our Customer Care team is always ready to take your call and answer your questions.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
              <Phone className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Call us at</p>
              <div className="flex flex-row items-center gap-4 mt-1">
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