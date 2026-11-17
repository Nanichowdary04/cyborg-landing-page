import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CyborgCanvas } from './CyborgCanvas';

interface HeroProps {
  onContactClick: () => void;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onScrollDown }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const desktopTitleRef = useRef<HTMLHeadingElement>(null);
  const mobileTitleRef = useRef<HTMLHeadingElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle text entrance animation on initial page load only
      // All final positions remain completely stable
      gsap.fromTo(
        [desktopTitleRef.current, mobileTitleRef.current].filter(Boolean),
        { opacity: 0, y: 15 },
        { opacity: 0.35, y: 0, duration: 0.9, ease: 'power2.out' }
      );

      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' }
      );

      gsap.fromTo(
        rightContentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      );

      gsap.fromTo(
        indicatorRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen bg-[#080808] flex flex-col justify-between overflow-hidden select-none pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10"
    >
      {/* 1. DESKTOP BACKGROUND TITLE: CYBERCORE as a separate HTML text element */}
      {/* Positioned horizontally across the upper-middle background with ~35% opacity */}
      <div className="hidden lg:flex absolute top-[10%] xl:top-[12%] inset-x-0 z-[1] items-center justify-center pointer-events-none px-4 select-none overflow-hidden">
        <h2
          ref={desktopTitleRef}
          className="font-serif tracking-[0.18em] xl:tracking-[0.24em] text-center w-full select-none font-normal text-chrome opacity-35"
          style={{
            fontFamily: '"Bodoni Moda", "Italiana", serif',
            fontSize: 'clamp(4rem, 9.5vw, 10rem)',
            lineHeight: 0.95,
          }}
        >
          CYBERCORE
        </h2>
      </div>

      {/* 7. RESPONSIVE DESIGN (MOBILE/TABLET): Place the CYBERCORE title at the top */}
      <div className="lg:hidden w-full text-center px-4 pt-2 pb-6 z-10">
        <h2
          ref={mobileTitleRef}
          className="font-serif tracking-[0.16em] sm:tracking-[0.22em] text-center w-full select-none font-normal text-chrome opacity-90"
          style={{
            fontFamily: '"Bodoni Moda", "Italiana", serif',
            fontSize: 'clamp(2.25rem, 8vw, 3.75rem)',
            lineHeight: 1,
          }}
        >
          CYBERCORE
        </h2>
      </div>

      {/* 6. DESKTOP ALIGNMENT: Centered max-width container with three-column CSS Grid */}
      {/* Left: 30% | Center: 40% | Right: 30% with align-items: center */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr_3fr] items-center gap-10 lg:gap-8">
          {/* 3. LEFT CONTENT (30%): Headline & Contact Us Button */}
          <div
            ref={leftContentRef}
            className="flex flex-col items-start justify-center space-y-6 order-2 lg:order-1 lg:pr-2 text-left"
          >
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-normal tracking-tight text-white leading-[1.1] font-sans">
                High-Precision
                <br />
                <span className="text-white/95">Cybernetics</span>
              </h1>
            </div>

            <div>
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black font-sans text-xs sm:text-sm font-medium tracking-normal hover:bg-neutral-200 transition-all duration-300 shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* 2. REAL-TIME 3D WEBGL CYBORG (40%): Seamless 3D Canvas with Zero Image Files & Zero Black Box */}
          <div className="flex items-center justify-center relative w-full h-[450px] sm:h-[520px] lg:h-[600px] order-1 lg:order-2">
            <CyborgCanvas className="w-full h-full" />
          </div>

          {/* 4. RIGHT CONTENT (30%): Readable grey typography */}
          <div
            ref={rightContentRef}
            className="flex flex-col items-start lg:items-start justify-center space-y-3 order-3 lg:order-3 lg:pl-2 text-left"
          >
            <p className="text-neutral-300 text-base sm:text-lg lg:text-[17px] font-normal leading-relaxed font-sans max-w-sm">
              Engineering the future of human augmentation.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base lg:text-[15px] font-light leading-relaxed font-sans max-w-sm">
              Where biological intelligence meets mechanical precision.
            </p>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM: Exactly one burnt-orange circular scroll indicator */}
      <div
        ref={indicatorRef}
        className="relative z-20 flex flex-col items-center justify-center pt-4 sm:pt-6 pointer-events-auto"
      >
        <button
          onClick={onScrollDown}
          aria-label="Scroll to architecture"
          className="group w-9 h-9 rounded-full bg-[#FF4800] hover:bg-[#FF5E1E] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_24px_rgba(255,72,0,0.5)] hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowDown className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};