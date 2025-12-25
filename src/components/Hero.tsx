import React from "react";

const Hero: React.FC = () => {
  const exactGoldColor = "#E8D6A9";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundColor: '#f8f8f4',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}
    >
      <div className="flex flex-col items-center text-center w-full max-w-md mt-[-5vh]"> {/* Changed from -15vh to -5vh */}
        {/* Logo Stack */}
        <div className="flex flex-col items-center text-center w-full">
          <span
            className="font-serif leading-none"
            style={{ 
              color: exactGoldColor, 
              fontSize: "clamp(60px, 20vw, 120px)", 
              fontWeight: 300,
              lineHeight: 0.9
            }}
          >
            ORA
          </span>
          <span
            className="font-serif leading-none"
            style={{ 
              color: exactGoldColor, 
              fontSize: "clamp(60px, 20vw, 120px)", 
              fontWeight: 300,
              lineHeight: 0.9
            }}
          >
            GOLD
          </span>
          <span
            className="font-serif tracking-[0.3em] mt-2"
            style={{
              color: exactGoldColor,
              fontSize: "clamp(14px, 4vw, 20px)",
              lineHeight: "1",
            }}
          >
            REAL ESTATE
          </span>
        </div>

        {/* Subtitle */}
        <div className="mt-8">
          <h1 className="font-serif text-xl md:text-2xl font-light tracking-[0.5em] uppercase"
              style={{ color: '#333' }}>
            EXCEPTIONAL LUXURY REAL ESTATE
          </h1>
        </div>

        {/* Description */}
        <div className="mt-6 max-w-md">
          <p className="text-base md:text-lg leading-relaxed"
             style={{ color: '#555' }}>
            Discover the pinnacle of luxury living with ORA GOLD Real Estate, 
            where exceptional properties meet unparalleled service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
