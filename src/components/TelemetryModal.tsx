import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SPECIFICATIONS_DATA } from '../data/cyborgData';

interface TelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelemetryModal: React.FC<TelemetryModalProps> = ({ isOpen, onClose }) => {
  const [pulse, setPulse] = useState(400);
  const [jitter, setJitter] = useState(8.4);

  useEffect(() => {
    if (!isOpen) return;

    // Simulate micro-timing jitter
    const interval = setInterval(() => {
      setPulse(Math.floor(398 + Math.random() * 4));
      setJitter(Number((8.2 + Math.random() * 0.5).toFixed(1)));
    }, 1600);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0a0a0c] border border-white/20 p-6 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse"></span>
            <span className="text-white font-medium">CYBERCORE DIAGNOSTIC TELEMETRY MATRIX</span>
            <span className="text-neutral-500">// METROLOGY DIVISION</span>
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Diagnostics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-white/10 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-neutral-400 text-[10px] uppercase">CONTROL LOOP FREQ</div>
            <div className="text-lg font-bold text-white">{pulse} Hz</div>
          </div>
          <div className="space-y-1">
            <div className="text-neutral-400 text-[10px] uppercase">FIELDBUS JITTER</div>
            <div className="text-lg font-bold text-white">{jitter} µs</div>
          </div>
          <div className="space-y-1">
            <div className="text-neutral-400 text-[10px] uppercase">THERMAL GRADIENT</div>
            <div className="text-lg font-bold text-[#FF4800]">+0.18 K</div>
          </div>
          <div className="space-y-1">
            <div className="text-neutral-400 text-[10px] uppercase">DETERMINISTIC RATE</div>
            <div className="text-lg font-bold text-white">100.0%</div>
          </div>
        </div>

        {/* Full Specifications Ledger */}
        <div className="py-6 space-y-4">
          <div className="font-mono text-xs uppercase text-neutral-300 tracking-wider">
            ARCHITECTURAL TOLERANCE & STANDARDS RECORD
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {SPECIFICATIONS_DATA.map((item, index) => (
              <div
                key={index}
                className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs items-baseline"
              >
                <div className="md:col-span-3 font-mono text-neutral-400 uppercase">
                  {item.category}
                </div>
                <div className="md:col-span-4 font-sans text-white font-medium">
                  {item.parameter}
                </div>
                <div className="md:col-span-3 font-mono text-neutral-300">
                  {item.value}
                </div>
                <div className="md:col-span-2 flex items-center justify-between font-mono text-neutral-400">
                  <span>{item.standard}</span>
                  <span className="text-[10px] text-[#FF4800] border border-[#FF4800]/40 px-1.5 py-0.5 rounded">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div>DOCUMENT IDENTIFIER: #CC-SPEC-2026-V4</div>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-white text-black font-sans font-medium text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
