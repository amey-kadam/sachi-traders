import React, { useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      title: "Premium Agricultural Exports",
      description: "We deliver fresh, high-quality fruits, vegetables, and grains that meet global standards.",
      video: "/src/pomo.mp4"
    },
    {
      title: "Quality Grapes",
      description: "Our premium tomatoes meet the highest quality standards for global export.",
      video: "/src/grape.mp4"  
    },
    {
      title: "Fresh Soybean",
      description: "High-protein soybean products processed and packed with care.",
      video: "/src/soya.mp4"
    },
    {
      title: "Export Quality Bananas",
      description: "Fresh bananas sourced from the finest farms across the region.",
      video: "/src/banana.mp4"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const getSlideClass = (index) => {
    if (index === currentSlide) {
      return 'sliding-card active';
    }
    return 'sliding-card inactive';
  };

  return (
    <div className="features-container py-20">
      <div className="features-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

        {/* Sliding Card Section */}
        <div className="sliding-card-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={getSlideClass(index)}
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease-in-out'
              }}
            >
              <video 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover rounded-lg"
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="sliding-card-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Card with Text on the Right */}
        <div className="feature-section">
          <div className="feature-card" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '0.5rem',
              position: 'relative',
              zIndex: 2
            }}>
              <h3>State-of-the-Art Packaging</h3>
              <p>
                Our advanced packaging facilities ensure optimal product preservation throughout the supply chain. We employ industry-leading technologies and international standard materials to maintain freshness, prevent contamination, and extend shelf life. Each package is designed to withstand long-distance transportation while preserving the quality our global clients expect.
              </p>
            </div>
          </div>

          <div className="feature-text">
            <div className="heading-container">
              <h3 className="text-lg font-bold mb-2 text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                Quality Assurance Commitment
              </h3>
            </div>
            <p className="text-base text-gray-700 leading-snug max-w-2xl">
              We maintain rigorous quality control at every stage of the export process. Our products undergo comprehensive testing and certification procedures, meeting international food safety standards including <span className="font-semibold">GLOBAL G.A.P.</span> and <span className="font-semibold">ISO 22000</span>. This unwavering commitment to quality has earned us the trust of importers across <span className="font-semibold">30+ countries</span>.
            </p>
          </div>
        </div>

        {/* Right Card with Text on the Left */}
        <div className="feature-section-reverse">
          <div className="feature-text mt-8">
            <div className="heading-container">
              <h3 className="text-lg font-bold mb-2 text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                Global Supply Chain Excellence
              </h3>
            </div>
            <p className="text-base text-gray-700 leading-snug max-w-2xl">
              Our sophisticated supply chain network ensures timely delivery to any global destination. With <span className="font-semibold">temperature-controlled storage facilities</span>, <span className="font-semibold">real-time shipment tracking</span>, and <span className="font-semibold">strategic partnerships</span> with leading logistics providers, we guarantee the secure and efficient movement of your agricultural commodities worldwide.
            </p>
          </div>

          <div className="feature-card" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '0.5rem',
              position: 'relative',
              zIndex: 2
            }}>
              <h3>Sustainable Export Practices</h3>
              <p>
                We prioritize sustainable agricultural practices and responsible export operations. Our eco-friendly packaging solutions, efficient resource utilization, and commitment to reducing carbon footprint demonstrate our dedication to environmental stewardship while maintaining premium product quality for our international clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;