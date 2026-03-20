import { motion } from 'motion/react';
import { ShieldCheck, Users, Building2, Link } from 'lucide-react';

export default function Prosper() {
  const cards = [
    {
      id: 'payers',
      title: 'For Payers & Insurers',
      desc: 'Leverage AI-driven Health Risk Quantification and our unique PPP (Predict, Personalize, Prevent) dynamic premium model to lower claims. Achieved a 34% drop in ER visits.',
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      buttons: [],
    },
    {
      id: 'providers',
      title: 'For Providers & Public Health',
      desc: 'Deploy digital health pathways and Clinical Triage, validated by the UK NHS and Modality Partnership. Achieved 90% patient satisfaction in government-supported care programs.',
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      buttons: ['Explore GOQii Health Engage', 'Request a Demo'],
    },
    {
      id: 'employers',
      title: 'For Employers',
      desc: 'Transform corporate wellness into an AI-driven, human centric gamified wellness programs. Increased employee engagement and reduced absenteeism by 85% in Fortune 500 companies.',
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      buttons: ['Explore Corporate Wellness Solutions', 'Request a Callback'],
    },
  ];

  return (
    <section className="py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-navy-900 to-navy-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
          >
            <span className="text-cyan-400">PROSPER</span> Through AI-Driven Proof-of-Health Solutions at Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 font-light leading-relaxed"
          >
            Delivering Dynamic Motivation through value-based care solutions for global organizations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="card-glow group flex flex-col relative bg-navy-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-navy-800 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
                <p className="text-white/60 font-light leading-relaxed flex-grow mb-8">
                  {card.desc}
                </p>
                {card.buttons.length > 0 && (
                  <div className="flex flex-col gap-3 mt-auto">
                    {card.buttons.map((btn, i) => (
                      <button 
                        key={i}
                        className={`w-full text-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          i === 0 
                            ? 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20' 
                            : 'text-white bg-white/5 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subsection: Web3 Protocol */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-navy-800 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-10" />
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f4ec851?q=80&w=2000&auto=format&fit=crop" 
              alt="Blockchain health data visualization" 
              className="w-full h-full object-cover mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-20 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">
                <Link className="w-3 h-3" />
                Web3 Protocol
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Health is the foundation of future prosperity
              </h3>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-8 max-w-2xl">
                UHT is a Web3 protocol that continuously analyzes wearable data. Earn and redeem tokens across 300+ wellness brands by hitting daily goals, while securely sharing anonymized data to fuel Decentralized Science (DeSci) and global AI healthcare research.
              </p>
              <button className="glow-button bg-white text-navy-900 px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Explore the future of health
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
