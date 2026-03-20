import { motion } from 'motion/react';
import { Microscope, TrendingDown, FileText } from 'lucide-react';

export default function Science() {
  return (
    <section className="py-32 bg-navy-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
          >
            Science & Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 font-light leading-relaxed"
          >
            Driven by global longevity research and proven by millions of data points, here is how we are redefining human healthspan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Block 1: Global Longevity Validation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 group flex flex-col bg-navy-900 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-colors duration-500"
          >
            <div className="h-64 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop" 
                alt="Longevity research laboratory" 
                className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
              <div className="absolute bottom-6 left-8 w-12 h-12 rounded-2xl bg-navy-800/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <Microscope className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-4">Global Longevity Validation</h3>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                GOQii's Team Sanjeevini is the only Top 40 Milestone Award Winning Team from India in the $101 Million XPRIZE Healthspan competition.
              </p>
              <div className="mt-auto p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-1">Mission</p>
                <p className="text-white font-semibold">Clinically proven reduction in biological age by 10-20 years.</p>
              </div>
            </div>
          </motion.div>

          {/* Block 2: Real Results. Real Change */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col bg-navy-900 border border-white/5 rounded-3xl p-8 hover:border-cyan-400/30 transition-colors duration-500"
          >
            <div className="mb-8 w-12 h-12 rounded-2xl bg-navy-800/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-8">Real Results. Real Change</h3>
            
            <div className="space-y-6 flex-grow">
              <div>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3">Clinical Impact</p>
                <ul className="space-y-2 text-sm text-white/80 font-light">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 85% reduction in medication dependency</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 20% reduction in HbA1c</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 10% reduction in body weight</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 7% reduction in cholesterol</li>
                </ul>
              </div>
              
              <div>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3">Public Health</p>
                <ul className="space-y-2 text-sm text-white/80 font-light">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 90% patient satisfaction rate</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 30% improvement in preventive engagement</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-2">Insurance</p>
                  <p className="text-sm text-white/80 font-light">34% drop in ER visits</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-2">Corporate</p>
                  <p className="text-sm text-white/80 font-light">85% engagement improvement</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 3: Evidence-Based Research */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 group flex flex-col md:flex-row bg-navy-900 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-colors duration-500"
          >
            <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
              <div className="mb-6 w-12 h-12 rounded-2xl bg-navy-800/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">Evidence-Based Research</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-2">India Fit Report</p>
                  <p className="text-white/60 font-light leading-relaxed">Access the GOQii India Fit Report 2025.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-2">Evidence Hub</p>
                  <p className="text-white/60 font-light leading-relaxed">Research insights including GLP-1 navigation, gut health, and muscle strength longevity indicators.</p>
                </div>
              </div>
            </div>
            
            <div className="h-64 md:h-auto md:w-2/5 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Data analytics dashboard" 
                className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-900 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
