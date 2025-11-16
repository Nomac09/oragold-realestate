import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const ticking = useRef(false);
  const exactGoldColor = "#E8D6A9";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = () => window.innerWidth < 768;
    if (prefersReducedMotion || isSmallScreen()) return;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const factor = 0.18;
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${Math.round(scrollY * factor)}px, 0)`;
        }
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[40vh] md:h-screen md:min-h-[520px] flex items-start md:items-center overflow-hidden bg-white"
    >
      {/* Desktop parallax background */}
      <div
        ref={bgRef}
        className="hidden md:block absolute inset-0 z-0 will-change-transform transition-transform duration-200"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <Image
          src="/images/roof.jpg"
          alt="Luxury real estate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Mobile: taller hero and center logo lower on the screen */}
      <div className="md:hidden relative z-20 w-full flex items-center justify-center pt-14 pb-10 px-10">
        <div className="flex flex-col items-center text-center w-full max-w-xs">
          <span
            className="font-serif leading-none"
            style={{ color: exactGoldColor, fontSize: "clamp(36px, 18vw, 96px)", fontWeight: 300 }}
          >
            ORA
          </span>
          <span
            className="font-serif leading-none -mt-1"
            style={{ color: exactGoldColor, fontSize: "clamp(36px, 18vw, 96px)", fontWeight: 300 }}
          >
            GOLD
          </span>
          <span
            className="font-serif tracking-widest mt-0"
            style={{
              color: exactGoldColor,
              fontSize: "clamp(12px, 4.5vw, 16px)",
              lineHeight: "1",
              marginTop: "6px",
            }}
          >
            REAL ESTATE
          </span>
        </div>
      </div>

      {/* Desktop content */}
      <div className="relative z-20 container mx-auto px-6 hidden md:block">
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