import { motion } from 'motion/react';
import { Activity, Brain, Users, HeartPulse } from 'lucide-react';

export default function Platform() {
  const layers = [
    {
      id: 'data',
      title: 'Data Devices',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      desc: 'Wearables & Genomic Kits',
    },
    {
      id: 'ai',
      title: 'AI Platform',
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      desc: 'Predictive Analytics Engine',
    },
    {
      id: 'coaching',
      title: 'Coaching Ecosystem',
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      desc: 'Human + AI Interventions',
    },
    {
      id: 'outcomes',
      title: 'Health Outcomes',
      icon: <HeartPulse className="w-6 h-6 text-cyan-400" />,
      desc: 'Extended Healthspan',
    },
  ];

  return (
    <section id="platform" className="py-32 bg-navy-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            The Architecture of Longevity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto font-light"
          >
            A seamless integration of hardware, artificial intelligence, and human expertise working in concert to optimize your biology.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent -translate-x-1/2 hidden md:block"
            initial={{ height: '0%' }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <div className="space-y-16 md:space-y-24">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full md:w-auto flex justify-center md:justify-end">
                  {index % 2 === 0 ? (
                    <div className="text-center md:text-left md:pl-12">
                      <h3 className="text-2xl font-semibold text-white mb-2">{layer.title}</h3>
                      <p className="text-white/60 font-light">{layer.desc}</p>
                    </div>
                  ) : (
                    <div className="text-center md:text-right md:pr-12">
                      <h3 className="text-2xl font-semibold text-white mb-2">{layer.title}</h3>
                      <p className="text-white/60 font-light">{layer.desc}</p>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.15)] relative group">
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl group-hover:bg-cyan-400/30 transition-all duration-500" />
                    {layer.icon}
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
