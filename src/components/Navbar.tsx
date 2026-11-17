import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onOpenSpecs?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onOpenSpecs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Live clock for Zurich engineering facility
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 md:py-7'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 tracking-widest text-xs uppercase text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center font-mono text-[9px] font-bold group-hover:border-[#FF4800] group-hover:text-[#FF4800] transition-colors">
              CC
            </span>
            <div className="flex flex-col">
              <span className="font-semibold tracking-[0.24em] text-sm text-white">
                CYBERCORE
              </span>
              <span className="font-mono text-[8.5px] text-neutral-400 tracking-wider">
                ROBOTICS & AUGMENTATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-widest uppercase text-neutral-400">
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
            >
              <span className="text-[#FF4800] text-[9px]">01</span> Architecture
            </button>
            <button
              onClick={() => handleNavClick('capabilities')}
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
            >
              <span className="text-[#FF4800] text-[9px]">02</span> Capabilities
            </button>
            <button
              onClick={() => handleNavClick('engineering')}
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
            >
              <span className="text-[#FF4800] text-[9px]">03</span> Engineering
            </button>
            <button
              onClick={() => handleNavClick('research')}
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
            >
              <span className="text-[#FF4800] text-[9px]">04</span> Research
            </button>
            <button
              onClick={() => handleNavClick('telemetry')}
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
            >
              <span className="text-[#FF4800] text-[9px]">05</span> Telemetry
            </button>
            {onOpenSpecs && (
              <button
                onClick={onOpenSpecs}
                className="hover:text-white transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
              >
                <span className="text-[#FF4800] text-[9px]">06</span> Diagnostics
              </button>
            )}
          </nav>

          {/* Right Status & Action */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-2 font-mono text-[10px] text-neutral-400 border-l border-white/10 pl-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4800] animate-pulse"></span>
              <span className="text-neutral-300">ZURICH {timeString}</span>
              <span className="text-neutral-500">// FOUNDRY 01</span>
            </div>

            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white text-xs font-medium tracking-wide transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <span>Commission</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white p-2 rounded-md focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 lg:hidden border-b border-white/10">
          <div className="flex flex-col gap-6 text-sm font-mono tracking-widest uppercase">
            <span className="text-neutral-600 text-xs pb-2 border-b border-white/10">
              NAVIGATION INDEX
            </span>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-white hover:text-[#FF4800] text-xl font-light py-2"
            >
              <span className="text-[#FF4800] text-sm mr-3">01</span> Architecture
            </button>
            <button
              onClick={() => handleNavClick('capabilities')}
              className="text-left text-white hover:text-[#FF4800] text-xl font-light py-2"
            >
              <span className="text-[#FF4800] text-sm mr-3">02</span> Capabilities
            </button>
            <button
              onClick={() => handleNavClick('engineering')}
              className="text-left text-white hover:text-[#FF4800] text-xl font-light py-2"
            >
              <span className="text-[#FF4800] text-sm mr-3">03</span> Engineering
            </button>
            <button
              onClick={() => handleNavClick('research')}
              className="text-left text-white hover:text-[#FF4800] text-xl font-light py-2"
            >
              <span className="text-[#FF4800] text-sm mr-3">04</span> Research
            </button>
            <button
              onClick={() => handleNavClick('telemetry')}
              className="text-left text-white hover:text-[#FF4800] text-xl font-light py-2"
            >
              <span className="text-[#FF4800] text-sm mr-3">05</span> Telemetry
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="text-left text-white hover:text-[#FF4800] text-xl font-light py-2"
            >
              <span className="text-[#FF4800] text-sm mr-3">06</span> Commission Inquiry
            </button>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse"></span>
              <span>CYBERCORE ONLINE // {timeString || '15:10 UTC'}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3.5 bg-white text-black font-semibold uppercase tracking-wider text-xs rounded-full hover:bg-neutral-200 transition-colors"
            >
              Initiate Commission ↗
            </button>
          </div>
        </div>
      )}
    </>
  );
};
