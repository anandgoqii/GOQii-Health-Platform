import { motion } from 'motion/react';
import { Building2, ShieldCheck, Hospital, Pill, Landmark } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 'employers',
      title: 'Employers',
      icon: <Building2 className="w-8 h-8 text-cyan-400 mb-6" />,
      desc: 'Reduce healthcare costs and improve workforce productivity through proactive health management.',
    },
    {
      id: 'insurers',
      title: 'Insurers',
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400 mb-6" />,
      desc: 'Shift from reactive claims to predictive risk mitigation with real-time member data.',
    },
    {
      id: 'hospitals',
      title: 'Hospitals',
      icon: <Hospital className="w-8 h-8 text-cyan-400 mb-6" />,
      desc: 'Extend care beyond clinical settings with continuous remote patient monitoring.',
    },
    {
      id: 'pharma',
      title: 'Pharma',
      icon: <Pill className="w-8 h-8 text-cyan-400 mb-6" />,
      desc: 'Accelerate clinical trials and gather real-world evidence with engaged cohorts.',
    },
    {
      id: 'government',
      title: 'Government',
      icon: <Landmark className="w-8 h-8 text-cyan-400 mb-6" />,
      desc: 'Implement population-scale preventive health initiatives to reduce public burden.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="solutions" className="py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-navy-900 to-navy-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            Enterprise Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl font-light"
          >
            Powering the next generation of healthcare delivery across industries.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              className="card-glow group relative bg-navy-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-navy-800 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10">
                {solution.icon}
                <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
