import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax speeds
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Background Layer: Neural Network */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-navy-900 to-navy-900"></div>
        {/* Animated Particles/Nodes */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      {/* Midground Layer: DNA Helix / Abstract Shapes */}
      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 z-10 flex items-center justify-center opacity-40 pointer-events-none"
      >
        <svg
          className="w-full h-full max-w-4xl"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 100 300 C 300 100, 500 500, 700 300"
            stroke="url(#cyan-gradient)"
            strokeWidth="2"
            strokeDasharray="4 8"
            animate={{
              strokeDashoffset: [0, -100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.path
            d="M 100 300 C 300 500, 500 100, 700 300"
            stroke="url(#cyan-gradient)"
            strokeWidth="2"
            strokeDasharray="4 8"
            animate={{
              strokeDashoffset: [0, 100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <defs>
            <linearGradient id="cyan-gradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#020817" />
              <stop offset="0.5" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#020817" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Foreground Layer: Text & CTA */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-6">
            The Operating System for Human Longevity
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
        >
          Predict. Personalize. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            Prevent. Prosper.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          An AI-powered system combining genomics, real-time health data and neuroadaptive technology to extend human healthspan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="glow-button w-full sm:w-auto bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300">
            Watch How GOQii Works
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300">
            Request a Demo
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
