'use client';

import React from 'react';
import { Star, StarHalf, ExternalLink } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl: string;
  service: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "March 15, 2024",
    comment: "TGA Builders did an amazing job renovating our kitchen. The attention to detail and professionalism was outstanding. The team was punctual, clean, and completed the project ahead of schedule.",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    service: "Kitchen Renovation"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4.5,
    date: "March 10, 2024",
    comment: "Very satisfied with the bathroom remodeling service. The team was knowledgeable and provided excellent suggestions. The only minor issue was a slight delay in material delivery.",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    service: "Bathroom Remodeling"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    date: "March 5, 2024",
    comment: "The interior painting service exceeded my expectations. They were meticulous with the prep work and the final result is flawless. Highly recommend their services!",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    service: "Interior Painting"
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    date: "February 28, 2024",
    comment: "Outstanding drywall repair work! They fixed several issues in our home, and you can't even tell where the damages were. Very professional and efficient service.",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    service: "Drywall Repairs"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#287593] text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Customer Reviews
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            See what our valued customers have to say about their experience with TGA Builders Inc.
          </p>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Google Reviews</h2>
              <p className="text-gray-600 mt-1">Read our verified customer reviews on Google</p>
            </div>
            <a
              href="https://www.google.com/search?q=tga+builders+inc+reviews&sca_esv=c29d84b229fa45c6&sxsrf=AHTn8zrUXvIeCshx_s3okpXToP6t6eluEA%3A1742663594344&ei=qu_eZ6jYFPLdkPIPu9DRwAk&ved=0ahUKEwio1YPkl56MAxXyLkQIHTtoFJgQ4dUDCBA&uact=5&oq=tga+builders+inc+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhh0Z2EgYnVpbGRlcnMgaW5jIHJldmlld3MyBRAhGKABMgUQIRigAUjUYFDNEFj-X3AIeAGQAQCYAYgCoAGwHKoBBjMwLjcuMbgBA8gBAPgBAZgCKqACuhuoAgrCAgoQABiwAxjWBBhHwgITEC4YgAQYsAMYQxjHARiKBRivAcICBhAAGAcYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgUQABjvBcICCBAhGKABGMMEwgIHECMYJxjqAsICChAjGPAFGCcY6gLCAgoQIxiABBgnGIoFwgIQEC4YgAQY0QMYQxjHARiKBcICEBAuGIAEGEMYxwEYigUYrwHCAg4QLhiABBixAxjRAxjHAcICERAAGIAEGLEDGIMBGIoFGIsDwgIXEC4YgAQYsQMYgwEYqAMYigUYiwMYngPCAg4QABiABBixAxiDARiLA8ICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYiwPCAg0QABiABBhDGIoFGIsDwgIXEC4YgAQYsQMY0QMY0gMYxwEYqAMYiwPCAhAQLhiABBgUGIcCGMcBGK8BwgIIEC4YgAQYsQPCAgsQABiABBixAxiDAcICChAAGIAEGEMYigXCAhMQLhiABBixAxjRAxhDGMcBGIoFwgILEC4YgAQYxwEYrwHCAggQABiABBixA8ICChAAGIAEGBQYhwLCAgUQABiABMICCBAAGIAEGIsDwgIGEAAYFhgewgIHEC4YgAQYDcICBxAAGIAEGA3CAgcQIRigARgKwgIIEAAYogQYiQXCAgUQIRirAsICBRAhGJ8FmAMH8QXjAve-9vRBzogGAZAGBJIHBjMyLjkuMaAH7ocCsgcGMjQuOS4xuAeGGw&sclient=gws-wiz-serp#lrd=0x80c291d8182e1b9b:0xae5e95e3705dbc53,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#17416E] text-white px-4 py-2 rounded-md hover:bg-[#0f2b49] transition-colors duration-300"
            >
              <span>View All Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          {/* Google Reviews Embed */}
          <div className="w-full min-h-[600px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.8357891234567!2d-118.4194!3d34.2356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c295d2f1c0c0c0%3A0x0!2s14120%20Pierce%20St%2C%20Arleta%2C%20CA%2091331!5e0!3m2!1sen!2sus!4v1648147901054!5m2!1sen!2sus"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Services?
            </h2>
            <p className="text-gray-600 mb-6">
              Join our satisfied customers and let us help you with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/pages/contact-us"
                className="inline-block bg-[#17416E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0f2b49] transition-colors duration-300"
              >
                Contact Us Today
              </a>
              <a
                href="https://www.google.com/search?q=tga+builders+inc+reviews&sca_esv=c29d84b229fa45c6&sxsrf=AHTn8zrUXvIeCshx_s3okpXToP6t6eluEA%3A1742663594344&ei=qu_eZ6jYFPLdkPIPu9DRwAk&ved=0ahUKEwio1YPkl56MAxXyLkQIHTtoFJgQ4dUDCBA&uact=5&oq=tga+builders+inc+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhh0Z2EgYnVpbGRlcnMgaW5jIHJldmlld3MyBRAhGKABMgUQIRigAUjUYFDNEFj-X3AIeAGQAQCYAYgCoAGwHKoBBjMwLjcuMbgBA8gBAPgBAZgCKqACuhuoAgrCAgoQABiwAxjWBBhHwgITEC4YgAQYsAMYQxjHARiKBRivAcICBhAAGAcYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgUQABjvBcICCBAhGKABGMMEwgIHECMYJxjqAsICChAjGPAFGCcY6gLCAgoQIxiABBgnGIoFwgIQEC4YgAQY0QMYQxjHARiKBcICEBAuGIAEGEMYxwEYigUYrwHCAg4QLhiABBixAxjRAxjHAcICERAAGIAEGLEDGIMBGIoFGIsDwgIXEC4YgAQYsQMYgwEYqAMYigUYiwMYngPCAg4QABiABBixAxiDARiLA8ICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYiwPCAg0QABiABBhDGIoFGIsDwgIXEC4YgAQYsQMY0QMY0gMYxwEYqAMYiwPCAhAQLhiABBgUGIcCGMcBGK8BwgIIEC4YgAQYsQPCAgsQABiABBixAxiDAcICChAAGIAEGEMYigXCAhMQLhiABBixAxjRAxhDGMcBGIoFwgILEC4YgAQYxwEYrwHCAggQABiABBixA8ICChAAGIAEGBQYhwLCAgUQABiABMICCBAAGIAEGIsDwgIGEAAYFhgewgIHEC4YgAQYDcICBxAAGIAEGA3CAgcQIRigARgKwgIIEAAYogQYiQXCAgUQIRirAsICBRAhGJ8FmAMH8QXjAve-9vRBzogGAZAGBJIHBjMyLjkuMaAH7ocCsgcGMjQuOS4xuAeGGw&sclient=gws-wiz-serp#lrd=0x80c291d8182e1b9b:0xae5e95e3705dbc53,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#17416E] hover:text-[#0f2b49] transition-colors duration-300"
              >
                <Star className="w-5 h-5 fill-current" />
                <span>Leave us a review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 