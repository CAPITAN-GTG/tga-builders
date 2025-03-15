"use client"
import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const projects = [
    {
      category: 'Dream Houses',
      images: [
        { src: '/dream.jpg', alt: 'Modern Dream House', description: 'Contemporary Living Space' },
        { src: '/bg.png', alt: 'Luxury Interior', description: 'Premium Finishes' },
      ]
    },
    {
      category: 'Electrical Work',
      images: [
        { src: '/electrical.jpg', alt: 'Professional Wiring', description: 'Expert Electrical Installation' },
        { src: '/logo.png', alt: 'Smart Home Systems', description: 'Advanced Home Automation' },
      ]
    }
  ];

  const videos = [
    {
      title: "Our Work in Action",
      description: "Watch our skilled team transform spaces and bring visions to life",
      embedId: "GMTCyne4J5Q"
    }
  ];

  return (
    <div style={{
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#f0f0f0'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        textAlign: 'center',
        color: '#1a1a1a',
        marginBottom: '1rem',
        fontWeight: '600'
      }}>
        Project Gallery
      </h1>
      <p style={{
        textAlign: 'center',
        color: '#666',
        marginBottom: '3rem',
        fontSize: '1.1rem'
      }}>
        Discover our exceptional work and craftsmanship
      </p>

      {/* Video Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '1.8rem',
          color: '#2a2a2a',
          marginBottom: '1.5rem',
          borderBottom: '2px solid #eaeaea',
          paddingBottom: '0.5rem'
        }}>
          Featured Videos
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 560px), 1fr))',
          gap: '20px',
          alignItems: 'start'
        }}>
          {videos.map((video, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                backgroundColor: 'white',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden',
              }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: 'white',
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#2a2a2a',
                }}>
                  {video.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                }}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Sections */}
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#2a2a2a',
            marginBottom: '1.5rem',
            borderBottom: '2px solid #eaeaea',
            paddingBottom: '0.5rem'
          }}>
            {project.category}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'start'
          }}>
            {project.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ 
                      objectFit: 'cover',
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={projectIndex === 0 && imageIndex === 0}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    padding: '20px',
                    color: 'white',
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      marginBottom: '4px',
                      fontWeight: '500'
                    }}>
                      {image.alt}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      opacity: 0.9
                    }}>
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;