import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    domain: 'Biomechatronic Limb Actuation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organization.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full bg-[#080808] text-white py-28 md:py-44 border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute left-6 top-12 pointer-events-none select-none text-[12vw] font-serif font-light text-white/[0.02] leading-none z-0">
        COMMISSION
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Index */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#FF4800]"></span>
            <span>06 // ENGINEERING INQUIRIES & COMMISSION</span>
          </div>
          <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
            DIRECT INQUIRY DESK // ZURICH
          </div>
        </div>

        {/* Oversized Editorial Title */}
        <div ref={contentRef} className="pt-14 pb-16 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.12] font-sans">
            Initiate dialogue with our{' '}
            <span className="font-serif italic font-normal text-chrome">
              robotics engineering team.
            </span>
          </h2>
          <p className="mt-5 text-neutral-300 text-base md:text-lg font-light max-w-2xl font-sans leading-relaxed">
            CYBERCORE collaborates with research institutes, prosthetic developers, and aerospace
            consortia to engineer custom titanium kinetic systems and high-bandwidth biosignal hardware.
          </p>
        </div>

        {/* Asymmetrical Layout: Contact Information & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Global Facility Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-7 font-mono text-xs">
              <div className="border-b border-white/10 pb-5 space-y-1">
                <div className="text-[#FF4800] uppercase tracking-wider text-[10px]">
                  01. ZURICH ROBOTICS FOUNDRY (HEADQUARTERS)
                </div>
                <div className="text-white font-medium text-sm">Technoparkstrasse 1</div>
                <div className="text-neutral-400">8005 Zürich, Switzerland</div>
                <div className="text-neutral-300 pt-1">DIRECT: inquiries@cybercore-robotics.ch</div>
              </div>

              <div className="border-b border-white/10 pb-5 space-y-1">
                <div className="text-[#FF4800] uppercase tracking-wider text-[10px]">
                  02. TOKYO BIOMECHATRONICS INSTITUTE
                </div>
                <div className="text-white font-medium text-sm">Chiyoda Advanced Tech Center</div>
                <div className="text-neutral-400">Tokyo 100-0005, Japan</div>
                <div className="text-neutral-300 pt-1">DIRECT: tokyo.lab@cybercore-robotics.ch</div>
              </div>

              <div className="border-b border-white/10 pb-5 space-y-1">
                <div className="text-[#FF4800] uppercase tracking-wider text-[10px]">
                  03. SAN FRANCISCO MANIPULATOR FOUNDRY
                </div>
                <div className="text-white font-medium text-sm">Mission Bay Innovation Hub</div>
                <div className="text-neutral-400">San Francisco, CA 94158, USA</div>
                <div className="text-neutral-300 pt-1">DIRECT: sf.foundry@cybercore-robotics.ch</div>
              </div>
            </div>

            {/* Direct Channel Card */}
            <div className="p-4 border border-white/15 bg-neutral-950 font-mono text-[11px] space-y-1 text-neutral-400">
              <div className="text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4800]"></span>
                <span>CYBERCORE APPLIED INQUIRIES</span>
              </div>
              <div className="text-neutral-300">
                Direct Technical Concierge: concierge@cybercore-robotics.ch
              </div>
            </div>
          </div>

          {/* Right: Commission Inquiry Terminal (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950/70 border border-white/15 p-8 md:p-12">
            {submitted ? (
              <div className="py-14 text-center space-y-5">
                <div className="w-12 h-12 rounded-full border border-[#FF4800] text-[#FF4800] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-white font-serif">
                    Inquiry Received
                  </h3>
                  <p className="text-sm font-mono text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white">{formData.name}</span>. Your inquiry regarding{' '}
                    <span className="text-[#FF4800]">{formData.domain}</span> has been routed to our Zurich engineering team.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', organization: '', domain: 'Biomechatronic Limb Actuation', message: '' });
                  }}
                  className="font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  [ Send Another Message ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400 border-b border-white/10 pb-3">
                  <span>TECHNICAL COMMISSION INQUIRY</span>
                  <span className="text-[#FF4800]">* REQUIRED FIELDS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                      Name / Principal Lead *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Helena Thorne"
                      className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF4800] transition-colors font-sans"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                      Organization / Laboratory *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Zurich Biomechatronics Lab"
                      className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF4800] transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Subsystem Domain */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                    Engineering Subsystem Focus
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full bg-[#080808] border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#FF4800] transition-colors font-sans cursor-pointer"
                  >
                    <option value="Biomechatronic Limb Actuation">
                      Micro-Hydraulic Limb Actuation & Harmonic Drives
                    </option>
                    <option value="Galvanic Isolated Neural Interface">
                      Galvanically Isolated Neural / Myoelectric Front-End
                    </option>
                    <option value="Piezoresistive Tactile Sensor Arrays">
                      High-Density Piezoresistive Tactile Arrays
                    </option>
                    <option value="Custom Titanium Chassis Machining">
                      Custom ASTM F136 Titanium Structural Machining
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                    Project Scope & Technical Specifications
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe target torque, kinematic requirements, or intended operational environment..."
                    className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF4800] transition-colors font-sans resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                  <div className="font-mono text-[10.5px] text-neutral-400">
                    ENGINEERING REVIEW RESPONSE: &lt; 24 HOURS
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-white text-black hover:bg-[#FF4800] hover:text-white transition-all duration-300 font-sans text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    <span>{loading ? 'Transmitting...' : 'Submit Inquiry'}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
