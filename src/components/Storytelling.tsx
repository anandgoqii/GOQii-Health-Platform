import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Fade in/out for Step 1
  const step1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const step1Y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [60, 0, 0, -60]);

  // Fade in/out for Step 2
  const step2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [0, 1, 1, 0]);
  const step2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [60, 0, 0, -60]);

  // Fade in/out for Step 3
  const step3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const step3Y = useTransform(scrollYProgress, [0.7, 0.8, 1], [60, 0, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-navy-900">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient that shifts */}
        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [
                'radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, #22d3ee 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, #06b6d4 0%, transparent 50%)',
              ]
            ),
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Step 1 */}
          <motion.div
            style={{ opacity: step1Opacity, y: step1Y }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
              01 / Predict
            </h3>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
              Genomic Intelligence
            </h2>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              We analyze your DNA to uncover predispositions, mapping your unique biological blueprint before symptoms appear.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            style={{ opacity: step2Opacity, y: step2Y }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
              02 / Personalize
            </h3>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
              Real-Time Adaptation
            </h2>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Continuous data streams from wearables feed our AI, adjusting your health protocols dynamically based on your daily biometrics.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            style={{ opacity: step3Opacity, y: step3Y }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
              03 / Prevent & Prosper
            </h3>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
              Neuroadaptive Coaching
            </h2>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Expert human coaches augmented by AI deliver precise interventions, shifting focus from sick-care to proactive longevity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
