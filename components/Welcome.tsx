import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LearnMoreButton from './LearnMoreButton';

const Welcome = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/electrical.jpg"
                alt="TGA Builders Electrical Services"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-600/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-600/10 rounded-full -z-10" />
          </div>

          {/* Content Section */}
          <div className="lg:pl-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-cyan-600 font-semibold tracking-wide uppercase">WELCOME TO</h4>
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  TGA BUILDERS
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Welcome to TGA BUILDERS, where we are dedicated to providing top-tier commercial construction and facility maintenance services that keep your properties running smoothly and looking their best. With years of industry experience and a skilled team of professionals, we handle everything from ground-up construction projects to routine maintenance, all tailored to meet the unique needs of your business.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Our commitment to quality, safety, and reliability means you can trust us to deliver projects on time and on budget, ensuring minimal disruption to your operations. At TGA BUILDERS, we're more than just a service provider—we're your trusted partner in creating and maintaining spaces that support your success.
              </p>

              <div className="pt-6">
                <LearnMoreButton className="text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;