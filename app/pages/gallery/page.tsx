"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface ProjectCategory {
  category: string;
  description: string;
  images: GalleryImage[];
}

interface Video {
  title: string;
  description: string;
  src: string;
}

const Gallery: React.FC = () => {
  // Generate array of 33 gallery images
  const galleryImages: GalleryImage[] = Array.from({ length: 33 }, (_, i) => ({
    src: i < 30 ? `/gallery-${i + 1}.webp` : `/landscape_${i - 29}.webp`,
    alt: i < 30 ? `Gallery Project ${i + 1}` : `Landscape Project ${i - 29}`,
    description: i < 30 ? `Professional construction and design showcase ${i + 1}` : `Stunning landscape design and outdoor spaces ${i - 29}`
  }));

  // Add 24h Fitness Stone Walls images (gallery-31 through gallery-40)
  const fitnessStoneWallsImages: GalleryImage[] = Array.from({ length: 10 }, (_, i) => ({
    src: `/gallery-${31 + i}.webp`,
    alt: `24h Fitness Stone Walls Project ${i + 1}`,
    description: `Professional stone wall construction and design for 24h Fitness facility ${i + 1}`
  }));

  // Organize images into categories with more professional descriptions
  const projects: ProjectCategory[] = [
    {
      category: 'Commercial Excellence',
      description: 'State-of-the-art commercial spaces designed for success',
      images: galleryImages.slice(0, 10)
    },
    {
      category: 'Modern Interiors',
      description: 'Contemporary interior designs that inspire and captivate',
      images: galleryImages.slice(10, 15)
    },
    {
      category: 'Expert Renovations',
      description: 'Transformative renovation projects that exceed expectations',
      images: galleryImages.slice(15, 20)
    },
    {
      category: 'Architectural Marvels',
      description: 'Stunning architectural designs that push boundaries',
      images: galleryImages.slice(20, 25)
    },
    {
      category: 'Sustainable Projects',
      description: 'Eco-friendly construction with a focus on sustainability',
      images: galleryImages.slice(25, 30)
    },
    {
      category: 'Landscape Design',
      description: 'Beautiful outdoor spaces that enhance your property',
      images: galleryImages.slice(30, 33)
    },
    {
      category: '24h Fitness Stone Walls',
      description: 'Expert stone wall construction and design for commercial fitness facilities',
      images: fitnessStoneWallsImages
    }
  ];

  const videos: Video[] = [
    {
      title: "Our Work in Action",
      description: "Watch our skilled team transform spaces and bring visions to life",
      src: process.env.NEXT_PUBLIC_TGA_VIDEO_URL || "/tga-video.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Title Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exceptional work and craftsmanship through our extensive portfolio of completed projects
          </p>
        </header>
      </div>

      {/* Video Section - Full Width Separator */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-900 mb-16">
        {videos.map((video, index) => (
          <div key={index} className="relative w-full max-h-[600px] flex items-center justify-center">
            <video
              className="w-full h-auto max-h-[600px] object-contain"
              controls
              playsInline
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Sections */}
        <div className="space-y-16">
          {projects.map((project, projectIndex) => (
            <section key={projectIndex} className="scroll-mt-16" id={project.category.toLowerCase().replace(/\s+/g, '-')}>
              <div className="mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                  {project.category}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {project.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gray-100"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={projectIndex === 0 && imageIndex === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white text-sm font-semibold mb-1">
                            {image.alt}
                          </h3>
                          <p className="text-white/90 text-xs">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;