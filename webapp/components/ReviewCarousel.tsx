'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface Review {
  name: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Victoria Sanchez Gil",
    comment: "I have hired Manny and team in many projects. They are fair, professional and have completed the project in a timely manner. I recommend and will continue to work with them! Thank you TGA!",
    rating: 5
  },
  {
    name: "Iola Key",
    comment: "TGA Construction far exceeded my expectations and stands out above all the rest. The owner and staff are incredibly dedicated to ensuring all your needs are met, whether for commercial or residential projects. Their professionalism...",
    rating: 5
  },
  {
    name: "Josegrivasr",
    comment: "Excellent experience with TGA Builders. His professionalism, quality of work and attention to detail exceeded my expectations, the place was fully renovated with a technological touch and innovative, I hope we continue working on more projects in 2025.",
    rating: 5
  },
  {
    name: "Hedayl Magana",
    comment: "They are professional and fast, committed to the job and always achieving great results.",
    rating: 5
  },
  {
    name: "Rod Mercado",
    comment: "TGA Builders Inc. is a highly experienced and reliable construction company known for delivering top-quality home renovations, custom builds, and remodeling projects. Their expert team brings years of industry experience, ensuring precision, efficiency, and outstanding craftsmanship in every project.",
    rating: 5
  }
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextReview, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      nextReview();
    } else {
      prevReview();
    }
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex justify-end w-full items-center">
          <Quote className="flex w-12 h-12 text-[#287593] mr-10" />
        </div>

        <div className="relative h-[300px] sm:h-[250px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
                const swipe = swipePower(info.offset.x, info.velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#287593] flex items-center justify-center text-white font-semibold text-xl sm:text-2xl">
                  {getInitials(reviews[currentIndex].name)}
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2">
                    {reviews[currentIndex].name}
                  </h3>
                  <div className="flex justify-center sm:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {reviews[currentIndex].comment}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevReview}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#287593] w-4' : 'bg-gray-300 w-2'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel; 