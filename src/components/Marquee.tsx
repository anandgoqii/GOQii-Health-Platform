import { motion } from 'motion/react';
import { useState } from 'react';

export default function Marquee() {
  const [isHovered, setIsHovered] = useState(false);

  const partners = [
    'Stanford Medicine',
    'NHS',
    'AIA',
    'Sanofi',
    'Animoca Brands',
    'Moderna',
    'Harvard Medical',
    'Bupa',
  ];

  // Duplicate for seamless scroll
  const items = [...partners, ...partners, ...partners];

  return (
    <section className="py-24 bg-navy-900 overflow-hidden relative border-y border-white/5">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h3 className="text-sm font-medium tracking-widest text-white/40 uppercase">
          Trusted by Global Leaders
        </h3>
      </div>

      <div
        className="flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-32 pr-16 md:pr-32"
          animate={{
            x: ['0%', '-33.33%'],
          }}
          transition={{
            duration: isHovered ? 40 : 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {items.map((partner, index) => (
            <div
              key={index}
              className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/60 transition-colors duration-300 cursor-default select-none"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
