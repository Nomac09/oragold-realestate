// src/hooks/useParallax.js
import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Select all elements with the parallax-bg class
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element) => {
        // Adjust the speed value to control the parallax effect intensity
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        
        // Apply the transform
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}