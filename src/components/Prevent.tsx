import { motion } from 'motion/react';
import { ActivitySquare, HeartPulse, ShieldCheck } from 'lucide-react';

export default function Prevent() {
  const cards = [
    {
      id: 'smartrx',
      title: 'GOQii SmartRx (Smarter Weight Loss)',
      desc: 'A doctor-supervised weight loss program combining GLP-1 medication with a strength-first coaching approach. We pair appetite control with resistance training to protect your lean muscle mass and ensure lasting habit change.',
      icon: <ActivitySquare className="w-6 h-6 text-cyan-400" />,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
      btnText: 'Take the Eligibility Assessment',
    },
    {
      id: 'chronic',
      title: 'Chronic Condition Management',
      desc: "Holistic, personalized reversal and management plans led by certified experts. Specialized pathways for Diabetes Care (reducing HbA1c), Hypertension, Fatty Liver, Arthritis, and Women's Health (PCOS & Menopause).",
      icon: <HeartPulse className="w-6 h-6 text-cyan-400" />,
      image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=1000&auto=format&fit=crop',
      btnText: 'Book a Free Consultation Callback',
    },
    {
      id: 'protect',
      title: 'Health Protect (Proactive Outpatient Care)',
      desc: 'The all-in-one solution for proactive care. Gain access to a free comprehensive full-body health screening (65+ parameters), a ₹2000 Lab Wallet, and free tele-consultations across 35+ specialties.',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop',
      btnText: 'Book a Free Consultation Callback',
    },
  ];

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
            <span className="text-cyan-400">PREVENT</span> Chronic Decline Before It Starts with Clinically Led Care.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 font-light leading-relaxed"
          >
            From doctor-supervised weight loss to specialized chronic care, we bridge the gap between intent and action to deliver evidence-based interventions and reverse the silent biological drift.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-navy-900 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-colors duration-500"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                <div className="absolute bottom-4 left-6 w-10 h-10 rounded-xl bg-navy-800/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  {card.icon}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug">{card.title}</h3>
                <p className="text-white/60 font-light leading-relaxed mb-8 flex-grow text-sm">
                  {card.desc}
                </p>
                <button className="w-full text-center px-4 py-3 rounded-xl text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                  {card.btnText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
