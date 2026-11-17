import React, { useState, useEffect, useRef } from 'react';
import { SPECIFICATIONS_DATA, RESEARCH_PAPERS } from '../data/cyborgData';
import { ArrowUpRight, X } from 'lucide-react';
import type { ResearchPaper } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EngineeringResearchProps {
  onOpenSpecsModal?: () => void;
}

export const EngineeringResearch: React.FC<EngineeringResearchProps> = ({
  onOpenSpecsModal,
}) => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const researchGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance reveal that stays permanently visible
      if (quoteRef.current) {
        gsap.from(quoteRef.current, {
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: 'power2.out',
        });
      }

      if (tableRef.current) {
        gsap.from(tableRef.current, {
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: 'power2.out',
        });
      }

      if (researchGridRef.current) {
        gsap.from(researchGridRef.current, {
          scrollTrigger: {
            trigger: researchGridRef.current,
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
    <div ref={containerRef}>
      {/* SECTION 3: ENGINEERING SPECIFICATIONS */}
      <section
        id="engineering"
        className="relative w-full bg-[#080808] text-white py-28 md:py-40 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Header & Index */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#FF4800]"></span>
              <span>03 // ENGINEERING SPECIFICATIONS</span>
            </div>
            <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
              VALIDATED COMPONENT TOLERANCES
            </div>
          </div>

          {/* Lead Architect Manifesto Quote */}
          <div className="pt-16 pb-20 max-w-4xl">
            <blockquote ref={quoteRef} className="space-y-6">
              <p className="text-2xl sm:text-4xl md:text-5xl font-light text-neutral-200 leading-[1.25] font-sans">
                “We do not construct cybernetics to imitate fragility. We engineer{' '}
                <span className="font-serif italic font-normal text-chrome">
                  structural titanium substrates
                </span>{' '}
                that augment human capability.”
              </p>
              <footer className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-3">
                <span className="text-[#FF4800]">——</span>
                <span>CYBERCORE APPLIED ROBOTICS DIVISION // ZURICH FOUNDRY</span>
              </footer>
            </blockquote>
          </div>

          {/* Layout: Spec Ledger & Chassis Visual */}
          <div ref={tableRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16">
            {/* Left: Technical Specs Table (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-neutral-400">
                <span>COMPONENT MATRIX [VER. 2026.4]</span>
                <span className="text-[#FF4800]">INDUSTRY BENCHMARKS</span>
              </div>

              {/* Responsive Spec Table */}
              <div className="divide-y divide-white/10 border-b border-white/10">
                {SPECIFICATIONS_DATA.map((spec, idx) => (
                  <div
                    key={idx}
                    className="py-4.5 px-3 flex flex-col md:flex-row md:items-baseline justify-between gap-2 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="md:w-5/12 space-y-0.5">
                      <div className="font-mono text-[10.5px] text-neutral-400 uppercase tracking-wider">
                        {spec.category}
                      </div>
                      <div className="font-sans text-sm text-white font-medium">
                        {spec.parameter}
                      </div>
                    </div>

                    <div className="md:w-5/12 text-xs text-neutral-300 font-light leading-snug">
                      {spec.value}
                    </div>

                    <div className="md:w-2/12 flex md:justify-end items-center gap-2 font-mono text-[11px] text-neutral-400">
                      <span className="text-[10px] text-neutral-300 border border-white/15 px-1.5 py-0.5 rounded">
                        {spec.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="font-mono text-[10px] text-neutral-400">
                  SPECIFICATIONS VERIFIED UNDER ISO 10218 & ASTM F136 STANDARDS
                </div>
                {onOpenSpecsModal && (
                  <button
                    onClick={onOpenSpecsModal}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-[#FF4800] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Full Diagnostic Ledger</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Studio Photography of Chassis (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative border border-white/15 bg-neutral-950 overflow-hidden group">
                <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-neutral-300 bg-black/75 px-2.5 py-1 backdrop-blur-md border border-white/15">
                  FIG 3.12 // TITANIUM SCAPULAR & CLAVICULAR SKELETON
                </div>

                <img
                  src="/assets/engineering-chassis.jpg"
                  alt="Minimalist Humanoid Cybernetic Chassis"
                  className="w-full h-[520px] object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] text-neutral-300 bg-black/75 backdrop-blur-md px-2 py-1 border border-white/15">
                  TENSILE YIELD: 880 MPa
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
                <span>ASTM F136 BIOCOMPATIBLE TI-6AL-4V</span>
                <span className="text-[#FF4800]">SELECTIVE LASER SINTERED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESEARCH & CONCEPT DOSSIERS */}
      <section
        id="research"
        className="relative w-full bg-[#080808] text-white py-24 md:py-36 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#FF4800]"></span>
              <span>04 // RESEARCH & CONCEPT DEMONSTRATIONS</span>
            </div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              ZURICH · TOKYO · SAN FRANCISCO
            </span>
          </div>

          <div className="pt-10 pb-12 max-w-3xl">
            <h3 className="text-2xl sm:text-4xl font-light text-white font-sans tracking-tight">
              Concept Demonstrations & Engineering Dossiers
            </h3>
            <p className="mt-3 text-neutral-400 text-sm md:text-base font-light font-sans">
              Technical exploration documents illustrating key biomechatronic challenges,
              signal filtering architectures, and high-frequency tactile loops.
            </p>
          </div>

          {/* Research Cards Grid */}
          <div ref={researchGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.id}
                className="border border-white/15 p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 bg-neutral-950/60 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-[10.5px]">
                    <span className="text-[#FF4800] font-semibold">{paper.code}</span>
                    <span className="text-neutral-400">{paper.year}</span>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    {paper.type}
                  </div>
                  <h4 className="text-base font-medium text-white leading-snug group-hover:text-silver-200 transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <span className="truncate pr-2">{paper.institution.split('//')[0]}</span>
                  <button
                    onClick={() => setSelectedPaper(paper)}
                    className="text-white hover:text-[#FF4800] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Paper Drawer / Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0d0d0f] border border-white/20 p-6 md:p-10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="space-y-0.5">
                <span className="font-mono text-xs text-[#FF4800]">{selectedPaper.code}</span>
                <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  CONCEPT DEMONSTRATION // {selectedPaper.type}
                </div>
              </div>
              <button
                onClick={() => setSelectedPaper(null)}
                className="text-neutral-400 hover:text-white p-2 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white leading-snug font-sans">
                {selectedPaper.title}
              </h3>
              <div className="font-mono text-xs text-neutral-400">
                Author Group: {selectedPaper.institution} ({selectedPaper.year})
              </div>
              <div className="p-4 bg-black/50 border border-white/10 font-sans text-sm text-neutral-300 leading-relaxed font-light">
                <div className="font-mono text-[10px] text-neutral-400 uppercase mb-2">
                  Technical Abstract:
                </div>
                {selectedPaper.abstract}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Notice: This dossier is presented as an engineering demonstration outlining the
                architectural foundations of CYBERCORE biomechatronics and sensory telemetry research.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedPaper(null)}
                className="px-6 py-2 rounded-full bg-white text-black font-sans text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Close Technical Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
