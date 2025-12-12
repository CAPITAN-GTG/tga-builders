'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: number[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageIndex: number) => {
    setSelectedImage(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage((prev) => {
        if (prev === null) return 0;
        return prev === 0 ? images.length - 1 : prev - 1;
      });
    } else {
      setSelectedImage((prev) => {
        if (prev === null) return 0;
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    }
  };

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((num, index) => (
          <motion.div
            key={num}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={`/gallery-${num}.png`}
                alt={`TGA Builders Project ${num}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">View Project</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={`/gallery-${images[selectedImage]}.png`}
                  alt={`TGA Builders Project ${images[selectedImage]}`}
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery; 