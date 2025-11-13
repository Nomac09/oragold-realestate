import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images?: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [images.length, interval]);

  const goToSlide = (index: number) => {
    if (images.length > 0) {
      setCurrentIndex(index);
    }
  };

  // If no images, show a placeholder
  if (images.length === 0) {
    return (
      <div className="relative w-full overflow-hidden rounded-lg h-[600px] md:h-[700px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative h-[600px] md:h-[700px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full relative">
              <Image
                src={image}
                alt={`Dubai Luxury Property ${index + 1}`}
                fill
                style={{ 
                  objectFit: 'cover', 
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%'
                }}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots - centered at bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;