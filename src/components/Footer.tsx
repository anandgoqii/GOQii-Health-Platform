import { Activity, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-navy-900 to-navy-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Activity className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold tracking-tight text-white">GOQii</span>
            </div>
            <h4 className="text-white font-medium mb-6">The ALIVE Ecosystem</h4>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3">Predict</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">GOQii Sanjeevini</a></li>
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">SuperLife Program</a></li>
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Diagnostics & Lab Tests</a></li>
                </ul>
              </div>
              
              <div>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3">Personalize</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Smart Wearables Shop</a></li>
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Personalized Coaching Ecosystem</a></li>
                </ul>
              </div>
              
              <div>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3">Prevent</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">GOQii SmartRx</a></li>
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Chronic Care Management</a></li>
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Health Protect</a></li>
                </ul>
              </div>
              
              <div>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3">Prosper</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">GOQii Insure+</a></li>
                  <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Universal Health Token</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="lg:pt-14">
            <h4 className="text-white font-medium mb-6">Global Enterprise</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">GOQii HealthEngage Platform</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Payers & Insurtech</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Providers & NHS UK</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Corporate Wellness GCC</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Pharma Research</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:pt-14">
            <h4 className="text-white font-medium mb-6">Science & Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">About GOQii</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Leadership</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">XPRIZE Validation</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Investors</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Careers</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:pt-14">
            <h4 className="text-white font-medium mb-6">Resources</h4>
            <ul className="space-y-4 mb-12">
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Blog Hub</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">India Fit Report</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Case Studies</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Support</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-light">Contact</a></li>
            </ul>
            
            <h4 className="text-white font-medium mb-6">Office Locations</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-white mb-1">US HQ</p>
                <p className="text-xs text-white/60 font-light leading-relaxed">601 Marshall Street<br/>Redwood City California USA 94063</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-1">UK Office</p>
                <p className="text-xs text-white/60 font-light leading-relaxed">29 West Way<br/>Hove England BN3 8LS</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-1">India HQ</p>
                <p className="text-xs text-white/60 font-light leading-relaxed">Mumbai Maharashtra India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-white/40 text-sm font-light">
              © 2026 GOQii Inc. All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-white/40 text-sm font-light">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-cyan-400 font-medium text-sm tracking-widest">#BeTheForce</span>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
