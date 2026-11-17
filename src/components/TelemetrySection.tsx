import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TelemetryChannel {
  id: string;
  name: string;
  subsystem: string;
  nominalRange: string;
  benchmark: string;
  description: string;
}

const CHANNELS: TelemetryChannel[] = [
  {
    id: 'bus',
    name: 'Deterministic CAN-FD Bus Integrity',
    subsystem: 'Communication Protocol',
    nominalRange: '1.0 Mbps // 100% Deterministic',
    benchmark: '< 12 µs Jitter',
    description:
      'Evaluates low-latency packet transmission across internal titanium limb conduits without collision or packet drop under motor drive switching loads.',
  },
  {
    id: 'kinematics',
    name: 'Multi-Axis Closed-Loop Velocity',
    subsystem: 'Actuation Kinematics',
    nominalRange: '400 Hz Control Frequency',
    benchmark: '< 1.4% Torque Ripple',
    description:
      'Monitors real-time positional error vectors and harmonic drive tooth engagement to ensure smooth, natural anthropomorphic trajectory control.',
  },
  {
    id: 'thermal',
    name: 'Micro-Wick Capillary Thermal Gradient',
    subsystem: 'Passive Cooling Loop',
    nominalRange: '28°C - 36°C Operational Range',
    benchmark: '< 0.8°C Thermal Delta',
    description:
      'Measures temperature distribution across the clavicle and forearm vapor chambers to ensure continuous human skin contact safety.',
  },
  {
    id: 'emg',
    name: 'Differential Myoelectric SNR',
    subsystem: 'Biosignal Analog Front-End',
    nominalRange: '> 110 dB Common-Mode Rejection',
    benchmark: '< 1.2 µV RMS Noise',
    description:
      'Verifies hardware galvanic isolation and analog filtering performance, capturing subtle microvolt-level muscle firing vectors reliably.',
  },
];

export const TelemetrySection: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance reveal that stays permanently visible
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

  const active = CHANNELS[selectedChannel];

  return (
    <section
      id="telemetry"
      ref={containerRef}
      className="relative w-full bg-[#080808] text-white py-28 md:py-44 border-t border-white/10 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute right-6 top-16 pointer-events-none select-none text-[12vw] font-serif font-light text-white/[0.02] leading-none z-0">
        TELEMETRY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#FF4800]"></span>
            <span>05 // TELEMETRY & SYSTEM MONITORING CONCEPTS</span>
          </div>
          <div className="font-mono text-[10.5px] text-neutral-400 uppercase tracking-widest">
            CONCEPT DEMONSTRATION // NOT LIVE CLINICAL DATA
          </div>
        </div>

        {/* Section Headline */}
        <div ref={contentRef} className="pt-14 pb-16 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.12] font-sans">
            Diagnostic architecture for{' '}
            <span className="font-serif italic font-normal text-chrome">
              distributed cybernetic systems.
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm md:text-base font-light font-sans max-w-2xl leading-relaxed">
            A demonstration of the telemetry pipelines required for high-dexterity prosthetics
            and autonomous robotics: measuring fieldbus timing, thermal equilibrium, and signal-to-noise ratios.
          </p>
        </div>

        {/* Telemetry Interactive Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Channel Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-3">
              SELECT DIAGNOSTIC CHANNEL TO INSPECT
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {CHANNELS.map((ch, idx) => {
                const isSelected = selectedChannel === idx;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChannel(idx)}
                    className={`w-full text-left py-4 px-3 transition-all duration-300 group cursor-pointer ${isSelected
                        ? 'bg-white/[0.03] border-l-2 border-[#FF4800] pl-4'
                        : 'opacity-60 hover:opacity-90 pl-3'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-mono text-[10px] text-neutral-400 uppercase">
                          {ch.subsystem}
                        </div>
                        <div className="font-sans text-sm font-medium text-white">
                          {ch.name}
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400">
                        {isSelected ? '[ INSPECTING ]' : 'SELECT'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 font-mono text-[10px] text-neutral-400 leading-normal">
              NOTICE: This console displays technical validation concepts and benchmark criteria
              developed for laboratory testing of cybernetic actuators.
            </div>
          </div>

          {/* Detailed Conceptual Telemetry Readout (7 cols) */}
          <div className="lg:col-span-7 border border-white/15 bg-neutral-950 p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse"></span>
                <span>CHANNEL: {active.name.toUpperCase()}</span>
              </div>
              <div className="text-neutral-400 text-[11px]">
                STATUS: CONCEPT SPECIFICATION
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1">
                  <div className="font-mono text-[10px] text-neutral-400 uppercase">
                    NOMINAL DESIGN RANGE
                  </div>
                  <div className="font-mono text-sm font-semibold text-white">
                    {active.nominalRange}
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1">
                  <div className="font-mono text-[10px] text-neutral-400 uppercase">
                    VERIFICATION BENCHMARK
                  </div>
                  <div className="font-mono text-sm font-semibold text-[#FF4800]">
                    {active.benchmark}
                  </div>
                </div>
              </div>

              {/* Conceptual Waveform Diagram */}
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
                  <span>DETERMINISTIC WAVEFORM MODEL // SIMULATED 400 HZ FRAME</span>
                  <span>100% COHERENCE</span>
                </div>

                <div className="w-full h-32 bg-black border border-white/10 p-3 relative overflow-hidden flex items-center justify-center">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Clean SVG Vector Waveform */}
                  <svg
                    className="w-full h-full relative z-10"
                    viewBox="0 0 600 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 50 Q 75 20, 150 50 T 300 50 T 450 50 T 600 50"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 0 50 Q 75 10, 150 50 T 300 50 T 450 50 T 600 50"
                      fill="none"
                      stroke="#FF4800"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                  </svg>

                  <div className="absolute bottom-2 right-3 font-mono text-[9px] text-neutral-400 bg-black/80 px-2 py-0.5 border border-white/10">
                    IDEAL DETERMINISTIC CLOCK
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-300 font-light leading-relaxed font-sans pt-1">
                {active.description}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-400">
              <span>CYBERCORE LABORATORY SPECIFICATION</span>
              <span className="text-[#FF4800]">[ REV 2026.04 ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
