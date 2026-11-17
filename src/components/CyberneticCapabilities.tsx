import React, { useState, useEffect, useRef } from 'react';
import { CAPABILITIES_DATA } from '../data/cyborgData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CyberneticCapabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentCapability = CAPABILITIES_DATA[activeTab];
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ledgerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance reveal that stays permanently visible
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

      if (ledgerRef.current) {
        gsap.from(ledgerRef.current, {
          scrollTrigger: {
            trigger: ledgerRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          x: -25,
          duration: 0.9,
          ease: 'power2.out',
        });
      }

      if (visualRef.current) {
        gsap.from(visualRef.current, {
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          x: 25,
          duration: 1.0,
          ease: 'power2.out',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative w-full bg-[#080808] text-white py-28 md:py-44 border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute left-6 bottom-12 pointer-events-none select-none text-[13vw] font-serif font-light text-white/[0.02] leading-none z-0">
        CAPABILITY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Index */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#FF4800]"></span>
            <span>02 // CYBERNETIC CAPABILITIES</span>
          </div>
          <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
            SUBSYSTEM ARCHITECTURE MATRIX
          </div>
        </div>

        {/* Section Headline */}
        <div className="pt-14 pb-16 max-w-4xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.12] font-sans"
          >
            The anatomy of precision.{' '}
            <span className="font-serif italic font-normal text-chrome">
              Kinematic control & feedback.
            </span>
          </h2>
        </div>

        {/* Editorial Layout: Left Capabilities Ledger, Right Cinematic Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Interactive Capability Rows (5 cols) */}
          <div ref={ledgerRef} className="lg:col-span-5 space-y-4">
            <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
              SELECT SUBSYSTEM TO INSPECT SPECIFICATIONS & VISUALS
            </div>

            <div className="divide-y divide-white/10">
              {CAPABILITIES_DATA.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left py-5 transition-all duration-300 group cursor-pointer ${isActive
                        ? 'opacity-100 pl-4 border-l-2 border-[#FF4800] bg-white/[0.02]'
                        : 'opacity-60 hover:opacity-90 pl-0'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-xs ${isActive ? 'text-[#FF4800] font-bold' : 'text-neutral-500'
                            }`}
                        >
                          {item.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400 group-hover:text-white transition-colors">
                        {isActive ? '[ ACTIVE ]' : 'VIEW'}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-4 space-y-4 animate-fadeIn">
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          {item.description}
                        </p>

                        {/* Metric readout grid */}
                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                          {item.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="space-y-0.5">
                              <div className="font-mono text-[9px] text-neutral-400 uppercase">
                                {m.label}
                              </div>
                              <div className="font-mono text-xs font-semibold text-white">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic High-Fashion Photography Synchronized to Subsystem (7 cols) */}
          <div ref={visualRef} className="lg:col-span-7">
            <div className="relative border border-white/15 bg-neutral-950 overflow-hidden group">
              {/* Corner crosshairs and telemetry overlay */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-neutral-300 bg-black/75 px-2.5 py-1 backdrop-blur-md border border-white/15">
                SUBSYSTEM NODE // {currentCapability.number}
              </div>
              <div className="absolute top-4 right-4 z-20 font-mono text-[10px] text-[#FF4800] bg-black/75 px-2.5 py-1 backdrop-blur-md border border-[#FF4800]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4800] animate-pulse"></span>
                <span>STATUS: BENCHMARKED</span>
              </div>

              {/* Realistic Visual Asset (Dynamically changes with smooth transition) */}
              <div className="relative w-full h-[480px] md:h-[600px] overflow-hidden">
                <img
                  key={currentCapability.image}
                  src={currentCapability.image}
                  alt={currentCapability.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out animate-fadeIn"
                />
              </div>

              {/* Dynamic Target Marker for Selected Capability */}
              <div
                className="absolute z-20 transition-all duration-700 pointer-events-none"
                style={{
                  top: `${currentCapability.coordinates.y}%`,
                  left: `${currentCapability.coordinates.x}%`,
                }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#FF4800] flex items-center justify-center animate-ping opacity-60"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF4800]"></div>
                  <div className="ml-4 bg-black/85 backdrop-blur-md border border-white/15 px-3 py-1.5 whitespace-nowrap text-left shadow-2xl">
                    <div className="font-mono text-[9px] text-[#FF4800] uppercase font-semibold">
                      TELEMETRY NODE {currentCapability.number}
                    </div>
                    <div className="font-sans text-[11px] font-medium text-white">
                      {currentCapability.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom HUD Bar */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono border-t border-white/10">
                <div className="text-neutral-300">
                  {currentCapability.imageCaption}
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="text-neutral-400">BENCHMARK:</span>
                  <span className="text-[#FF4800] font-semibold">OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
