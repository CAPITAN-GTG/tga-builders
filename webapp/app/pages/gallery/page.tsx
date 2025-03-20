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
  // Generate array of 30 gallery images
  const galleryImages: GalleryImage[] = Array.from({ length: 30 }, (_, i) => ({
    src: `/gallery-${i + 1}.png`,
    alt: `Gallery Project ${i + 1}`,
    description: `Professional construction and design showcase ${i + 1}`
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
    }
  ];

  const videos: Video[] = [
    {
      title: "Our Work in Action",
      description: "Watch our skilled team transform spaces and bring visions to life",
      src: "/tga-video.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exceptional work and craftsmanship through our extensive portfolio of completed projects
          </p>
        </header>

        {/* Video Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 pb-2 border-b-2 border-gray-200">
            Featured Videos
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative pb-[56.25%] bg-gray-900">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Image Sections */}
        <div className="space-y-20">
          {projects.map((project, projectIndex) => (
            <section key={projectIndex} className="scroll-mt-16" id={project.category.toLowerCase().replace(/\s+/g, '-')}>
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-3">
                  {project.category}
                </h2>
                <p className="text-gray-600 text-lg">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {project.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gray-100"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={projectIndex === 0 && imageIndex === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white text-xl font-semibold mb-2">
                            {image.alt}
                          </h3>
                          <p className="text-white/90 text-sm">
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