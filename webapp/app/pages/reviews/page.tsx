'use client';

import React from 'react';
import { Star, StarHalf, Quote } from 'lucide-react';

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
      <div className="bg-[#17416E] text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Customer Reviews
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            See what our valued customers have to say about their experience with TGA Builders
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="flex items-start gap-4">
                <img
                  src={review.avatarUrl}
                  alt={`${review.name}'s avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{review.service}</p>
                  <div className="flex items-center gap-2">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-gray-500">• {review.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pl-16">
                <div className="relative">
                  <Quote className="absolute -left-6 -top-2 w-4 h-4 text-gray-300 transform rotate-180" />
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
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
            <a
              href="/pages/contact-us"
              className="inline-block bg-[#17416E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0f2b49] transition-colors duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 