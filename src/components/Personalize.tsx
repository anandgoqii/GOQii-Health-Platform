import { motion, useScroll, useTransform } from 'motion/react';
import { Watch, Stethoscope } from 'lucide-react';
import { useRef } from 'react';

export default function Personalize() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const floatY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-32 bg-navy-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-navy-900 to-navy-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
          >
            <span className="text-cyan-400">PERSONALIZE</span> Your Health Architecture with Adaptive Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 font-light leading-relaxed"
          >
            We combine sentient wearables, AI digital twins, and expert human coaching to map a dynamic pathway just for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col h-full"
          >
            <div className="mb-8 relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy-800 border border-white/5 group">
              <motion.div style={{ y: floatY1 }} className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?q=80&w=1000&auto=format&fit=crop" 
                  alt="Wearable device visualization" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 w-12 h-12 rounded-2xl bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center">
                <Watch className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">Sentient Devices & Wearables</h3>
            <p className="text-white/60 font-light leading-relaxed mb-8 flex-grow">
              Track real-time physiological entropy with the GOQii Smart Devices, combined with best in class technology.
            </p>
            <button className="glow-button self-start bg-white text-navy-900 px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
              Shop Devices & Plans
            </button>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col h-full"
          >
            <div className="mb-8 relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy-800 border border-white/5 group">
              <motion.div style={{ y: floatY2 }} className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Doctor coaching consultation" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 w-12 h-12 rounded-2xl bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">Expert Coaching Ecosystem</h3>
            <p className="text-white/60 font-light leading-relaxed mb-8 flex-grow">
              Work directly with certified doctors, physiotherapists, and nutritionists to build sustainable habits tailored to your unique biomarkers.
            </p>
            <button className="self-start px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300">
              Book a Free Consultation Callback
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
