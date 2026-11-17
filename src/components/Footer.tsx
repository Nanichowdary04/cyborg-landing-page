import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Tier: Brand, Navigation & Standards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-200 font-semibold">
                CYBERCORE TECHNOLOGIES
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light max-w-sm font-sans leading-relaxed">
              Advancing cybernetic engineering, human augmentation, high-precision robotics,
              and biomimetic kinematics.
            </p>
            <div className="pt-2">
              <a
                href="mailto:inquiries@cybercore-robotics.ch"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF4800] hover:text-white transition-colors"
              >
                <span>inquiries@cybercore-robotics.ch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-neutral-300 uppercase tracking-wider text-[11px] pb-1 border-b border-white/10">
              NAVIGATION INDEX
            </div>
            <div className="grid grid-cols-2 gap-2 text-neutral-400">
              <button
                onClick={() => handleNavClick('about')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                01 Architecture
              </button>
              <button
                onClick={() => handleNavClick('capabilities')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                02 Capabilities
              </button>
              <button
                onClick={() => handleNavClick('engineering')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                03 Engineering
              </button>
              <button
                onClick={() => handleNavClick('research')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                04 Research
              </button>
              <button
                onClick={() => handleNavClick('telemetry')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                05 Telemetry
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left hover:text-[#FF4800] transition-colors cursor-pointer font-medium"
              >
                06 Commission ↗
              </button>
            </div>
          </div>

          {/* Standards & Return to Top */}
          <div className="md:col-span-4 flex flex-col md:items-end justify-between space-y-6">
            <div className="font-mono text-[10.5px] text-neutral-400 md:text-right space-y-1">
              <div className="text-neutral-300 uppercase tracking-wider text-[11px]">
                ENGINEERING STANDARDS
              </div>
              <div>ASTM F136 // BIOCOMPATIBLE TITANIUM</div>
              <div>ISO 10218-1 // ROBOTIC ARTICULATION SAFETY</div>
              <div>IEC 60601-1 // MEDICAL EMC ISOLATION</div>
              <div>IP68 // HERMETIC INGRESS PROTECTION</div>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 hover:border-[#FF4800] text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>RETURN TO TOP</span>
              <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#FF4800] group-hover:text-black flex items-center justify-center transition-colors">
                <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Monumental Liquid Chrome Brand Watermark */}
        <div className="border-t border-white/10 pt-10 pb-2 text-center select-none overflow-hidden">
          <div
            className="font-serif text-[12vw] leading-none tracking-widest text-chrome opacity-20 pointer-events-none uppercase"
            style={{ fontFamily: '"Bodoni Moda", "Italiana", serif' }}
          >
            CYBERCORE
          </div>
        </div>

        {/* Bottom Tier: Copyright & Telemetry Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 font-mono text-[10px] text-neutral-400">
          <div>
            © 2026 CYBERCORE TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>ZURICH · TOKYO · SAN FRANCISCO</span>
            <span className="text-[#FF4800]">[ SYS.REV.2026.04 ]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
