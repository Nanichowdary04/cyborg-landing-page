import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutTechnology: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance reveal that stays permanently visible (no disappearing on scroll)
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: 'power2.out',
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 35,
          duration: 1.0,
          ease: 'power2.out',
        });
      }

      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: 'power2.out',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#080808] text-white py-28 md:py-44 border-t border-white/10 overflow-hidden"
    >
      {/* Editorial Watermark in background */}
      <div className="absolute right-6 top-16 pointer-events-none select-none text-[12vw] font-serif font-light text-white/[0.02] leading-none z-0">
        SUBSTRATE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Index & Subhead */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#FF4800]"></span>
            <span>01 // ARCHITECTURAL SUBSTRATE</span>
          </div>
          <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
            ENGINEERING SPECIFICATION // CC-SUB-V4
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="pt-14 pb-16 max-w-4xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.12] font-sans"
          >
            Where biological mechanics converge with{' '}
            <span className="font-serif italic font-normal text-chrome">
              aerospace titanium.
            </span>
          </h2>
        </div>

        {/* Asymmetrical Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Cinematic Macro Photography Asset (7 cols) */}
          <div ref={imageRef} className="lg:col-span-7 space-y-6">
            <div className="relative group overflow-hidden border border-white/15 bg-neutral-950">
              {/* Corner Crosshairs */}
              <div className="absolute top-3 left-3 z-20 font-mono text-[10px] text-neutral-400 bg-black/60 px-2 py-0.5 border border-white/10">
                + [REF: 04.12 // TITANIUM CERVICAL JOINT]
              </div>
              <div className="absolute top-3 right-3 z-20 font-mono text-[10px] text-neutral-400 bg-black/60 px-2 py-0.5 border border-white/10">
                + [TOL: ±0.005mm]
              </div>
              <div className="absolute bottom-3 left-3 z-20 font-mono text-[10px] text-neutral-300 bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/15">
                ASTM F136 TI-6AL-4V ELI ALLOY
              </div>

              {/* Realistic Macro Photography */}
              <img
                src="/assets/technology-core.jpg"
                alt="Cybernetic Cervical Joint Core Assembly"
                className="w-full h-[460px] md:h-[580px] object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Technical Caption */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-white/5">
              <span>FIG 1.04 — CERVICAL KINEMATIC ARTICULATION</span>
              <span className="text-[#FF4800]">[ 5-AXIS CNC MACHINED ]</span>
            </div>
          </div>

          {/* Right: Editorial Narrative & Architectural Pillars (5 cols) */}
          <div ref={contentRef} className="lg:col-span-5 space-y-10">
            <div className="space-y-5">
              <p className="text-neutral-200 text-base md:text-lg font-light leading-relaxed font-sans">
                Conventional prosthetics and robotics struggle with weight, latency, and
                mechanical backlash. CYBERCORE takes an integrated biomechatronic approach:
                machining structural skeletons from biocompatible titanium while routing
                isolated biosignal conduits directly through internal articulation channels.
              </p>
              <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed font-sans">
                By pairing zero-backlash harmonic drives with high-frequency force sensing,
                we achieve smooth, natural kinematics that interact safely with humans while
                maintaining industrial grade positioning repeatability.
              </p>
            </div>

            {/* Architectural Pillars (Clean Typography, No Generic Cards) */}
            <div className="space-y-7 pt-4 border-t border-white/10">
              {/* Pillar 1 */}
              <div className="group border-b border-white/10 pb-5 transition-colors">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-mono text-xs text-[#FF4800] font-semibold">01.01</span>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    METALLURGY
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-1.5 group-hover:text-silver-200 transition-colors">
                  Medical-Grade Titanium Skeletons
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-normal">
                  Surgically biocompatible Ti-6Al-4V ELI (ASTM F136) delivering exceptional
                  strength-to-weight ratios with high fatigue resistance under cyclic dynamic loads.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group border-b border-white/10 pb-5 transition-colors">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-mono text-xs text-[#FF4800] font-semibold">01.02</span>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    BIOSIGNALS
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-1.5 group-hover:text-silver-200 transition-colors">
                  Galvanically Isolated Neural Bus
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-normal">
                  64-channel differential myoelectric input lines with hardware optical isolation,
                  eliminating motor drive EMI and capturing microvolt-level muscle intention signals.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group pb-2 transition-colors">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-mono text-xs text-[#FF4800] font-semibold">01.03</span>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    HAPTICS
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-1.5 group-hover:text-silver-200 transition-colors">
                  Multi-Axis Force Feedback Loops
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-normal">
                  Piezoresistive pressure arrays reading normal and shear vectors at 1 kHz,
                  allowing autonomous reflexive grip adjustments before slippage can occur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
