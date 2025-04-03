'use client';

import React from 'react';
import { ExternalLink, Star, Quote } from 'lucide-react';
import ReviewCarousel from '@/components/ReviewCarousel';
import ImageGallery from '@/components/ImageGallery';
import Image from 'next/image';

const Reviews = () => {
  const images = [20, 21, 22, 23, 24, 25, 26, 27];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[30vh] min-h-[300px] flex items-center justify-center">
        <Image
          src="/gallery-28.png"
          alt="TGA Builders Projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Discover why homeowners trust TGA Builders for their construction and renovation needs
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Welcome to TGA Builders Inc., your premier partner for top-quality commercial, residential construction and facility maintenance services in Las Vegas, Nevada. With years of industry experience, we specialize in delivering exceptional results tailored to meet the unique needs of your business. Our commitment to quality, safety, and reliability ensures that your projects are completed on time and within budget, minimizing disruption to your operations.
            </p>
          </div>
        </div>
      </div>

      {/* Review Carousel Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At TGA Builders Inc., customer satisfaction is our top priority. Here's what our clients have to say about our services:
            </p>
          </div>
          <ReviewCarousel />
        </div>
      </div>

      {/* Recent Projects Gallery */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Construction Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent work and see the quality and
              attention to detail we bring to every project.
            </p>
          </div>
          <ImageGallery images={images} />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TGA Builders Inc.?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#287593] mb-3">Comprehensive Services</h3>
              <p className="text-gray-700">
                From electrical and lighting to general maintenance and landscaping, we offer a wide range of services to meet all your construction and facility maintenance needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#287593] mb-3">Experienced Professionals</h3>
              <p className="text-gray-700">
                Our team comprises skilled professionals with extensive experience in the construction industry, ensuring high-quality workmanship on every project.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#287593] mb-3">Customer-Centric Approach</h3>
              <p className="text-gray-700">
                We prioritize our clients' visions and work closely with them to bring their dreams to reality, ensuring satisfaction at every stage of the project.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#287593] mb-3">Commitment to Safety and Quality</h3>
              <p className="text-gray-700">
                Adhering to the highest safety standards and using top-quality materials, we ensure that our projects are not only aesthetically pleasing but also durable and safe.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At TGA Builders Inc., we are more than just a construction company; we are your trusted partner in building and maintaining spaces that support your success. Contact us today to discuss how we can assist with your next project.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#287593] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our satisfied customers and let us help you create the home of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/pages/contact-us"
                className="inline-block bg-[#287593] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1f5a77] transition-colors duration-300 w-full sm:w-auto"
              >
                Get a Free Consultation
              </a>
              <a
                href="https://www.google.com/search?q=tga+builders+inc+reviews&sca_esv=c29d84b229fa45c6&sxsrf=AHTn8zrUXvIeCshx_s3okpXToP6t6eluEA%3A1742663594344&ei=qu_eZ6jYFPLdkPIPu9DRwAk&ved=0ahUKEwio1YPkl56MAxXyLkQIHTtoFJgQ4dUDCBA&uact=5&oq=tga+builders+inc+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhh0Z2EgYnVpbGRlcnMgaW5jIHJldmlld3MyBRAhGKABMgUQIRigAUjUYFDNEFj-X3AIeAGQAQCYAYgCoAGwHKoBBjMwLjcuMbgBA8gBAPgBAZgCKqACuhuoAgrCAgoQABiwAxjWBBhHwgITEC4YgAQYsAMYQxjHARiKBRivAcICBhAAGAcYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgUQABjvBcICCBAhGKABGMMEwgIHECMYJxjqAsICChAjGPAFGCcY6gLCAgoQIxiABBgnGIoFwgIQEC4YgAQY0QMYQxjHARiKBcICEBAuGIAEGEMYxwEYigUYrwHCAg4QLhiABBixAxjRAxjHAcICERAAGIAEGLEDGIMBGIoFGIsDwgIXEC4YgAQYsQMYgwEYqAMYigUYiwMYngPCAg4QABiABBixAxiDARiLA8ICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYiwPCAg0QABiABBhDGIoFGIsDwgIXEC4YgAQYsQMY0QMY0gMYxwEYqAMYiwPCAhAQLhiABBgUGIcCGMcBGK8BwgIIEC4YgAQYsQPCAgsQABiABBixAxiDAcICChAAGIAEGEMYigXCAhMQLhiABBixAxjRAxhDGMcBGIoFwgILEC4YgAQYxwEYrwHCAggQABiABBixA8ICChAAGIAEGBQYhwLCAgUQABiABMICCBAAGIAEGIsDwgIGEAAYFhgewgIHEC4YgAQYDcICBxAAGIAEGA3CAgcQIRigARgKwgIIEAAYogQYiQXCAgUQIRirAsICBRAhGJ8FmAMH8QXjAve-9vRBzogGAZAGBJIHBjMyLjkuMaAH7ocCsgcGMjQuOS4xuAeGGw&sclient=gws-wiz-serp#lrd=0x80c291d8182e1b9b:0xae5e95e3705dbc53,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[#287593] hover:text-[#1f5a77] transition-colors duration-300 w-full sm:w-auto"
              >
                <span>Read More Reviews</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 