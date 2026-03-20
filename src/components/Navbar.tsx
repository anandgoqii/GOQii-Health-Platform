import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navPadding = useTransform(scrollY, [0, 100], ['1.5rem', '0.75rem']);
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(2, 8, 23, 0)', 'rgba(2, 8, 23, 0.8)']
  );
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.05)']
  );
  const navBackdrop = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

  return (
    <motion.nav
      style={{
        paddingTop: navPadding,
        paddingBottom: navPadding,
        backgroundColor: navBackground,
        borderBottomColor: navBorder,
        borderBottomWidth: '1px',
        backdropFilter: navBackdrop,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-cyan-400" />
          <span className="text-xl font-bold tracking-tight text-white">GOQii</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#platform" className="hover:text-white transition-colors relative group">
            Platform
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#solutions" className="hover:text-white transition-colors relative group">
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#global" className="hover:text-white transition-colors relative group">
            Global
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="glow-button bg-white text-navy-900 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
            Request Demo
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
