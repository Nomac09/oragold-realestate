import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Disable on small screens (mobile) where parallax can be janky
    const isSmallScreen = () => window.innerWidth < 768;
    if (prefersReducedMotion || isSmallScreen()) return;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        // very small factor for subtle parallax
        const factor = 0.18;
        if (bgRef.current) {
          // Use translate3d for GPU acceleration
          bgRef.current.style.transform = `translate3d(0, ${Math.round(scrollY * factor)}px, 0)`;
        }
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[520px] flex items-center overflow-hidden">
      {/* Parallax background wrapper (transform only on this wrapper) */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform transition-transform duration-200"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        <Image
          src="/images/roof.jpg"
          alt="Luxury real estate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA..."
        />
        {/* lighter gradient to keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Compact content pill (smaller, left-aligned on desktop, centered on mobile) */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-sm sm:max-w-xs">
          <div className="backdrop-blur-sm bg-black/18 p-3 sm:p-4 rounded-md inline-block">
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-[1.35rem] sm:text-2xl md:text-3xl font-light tracking-wider text-[#F6F2EE] leading-tight drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)] text-left"
            >
              EXCEPTIONAL LUXURY
              <br />
              REAL ESTATE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="mt-2 text-xs sm:text-sm md:text-base max-w-md text-white/90 transition-colors duration-300 hover:text-[#E8D6A9]"
            >
              Discover the pinnacle of luxury living with ORA GOLD Real Estate, where exceptional properties meet unparalleled service.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;