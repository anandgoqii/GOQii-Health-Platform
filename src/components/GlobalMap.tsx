import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function GlobalMap() {
  const regions = [
    { id: 'usa', name: 'USA', x: '25%', y: '40%' },
    { id: 'uk', name: 'UK', x: '48%', y: '30%' },
    { id: 'saudi', name: 'Saudi Arabia', x: '58%', y: '45%' },
    { id: 'singapore', name: 'Singapore', x: '78%', y: '60%' },
    { id: 'hk', name: 'Hong Kong', x: '80%', y: '48%' },
  ];

  return (
    <section id="global" className="py-32 bg-navy-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            Global Footprint
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto font-light"
          >
            Deploying longevity infrastructure across key international markets.
          </motion.p>
        </div>

        <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto border border-white/5 rounded-3xl bg-navy-900/50 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Abstract Map Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain" style={{ filter: 'invert(1) sepia(1) hue-rotate(180deg) saturate(3) opacity(0.5)' }} />

          {/* Connection Lines (Abstract SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <motion.path
              d="M 250 200 Q 365 100 480 150 T 580 225 T 780 300 T 800 240"
              fill="none"
              stroke="rgba(34, 211, 238, 0.2)"
              strokeWidth="2"
              strokeDasharray="5 10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </svg>

          {/* Nodes */}
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
              style={{ left: region.x, top: region.y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                  className="absolute inset-0 bg-cyan-400 rounded-full blur-sm"
                />
                <div className="w-3 h-3 bg-cyan-400 rounded-full relative z-10 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.8 }}
                className="mt-2 text-xs font-medium text-white/80 whitespace-nowrap bg-navy-900/80 px-2 py-1 rounded-md backdrop-blur-md border border-white/10"
              >
                {region.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
