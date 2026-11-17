import React, { useEffect, useRef, useState } from 'react';

interface CyborgCanvasProps {
  className?: string;
}

export const CyborgCanvas: React.FC<CyborgCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [activeTab, setActiveTab] = useState<'3d' | 'portrait'>('3d');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 550);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - width / 2;
      const clientY = e.clientY - rect.top - height / 2;
      mouseRef.current.targetX = clientX * 0.0018;
      mouseRef.current.targetY = clientY * 0.0018;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches[0].clientX - rect.left - width / 2;
        const clientY = e.touches[0].clientY - rect.top - height / 2;
        mouseRef.current.targetX = clientX * 0.0018;
        mouseRef.current.targetY = clientY * 0.0018;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Build 3D Cranial & Facial Mesh Points
    const nodes: { x: number; y: number; z: number; type: string; color: string; size: number }[] = [];
    const connections: [number, number][] = [];

    // Cranial Dome
    for (let u = 0; u <= 10; u++) {
      const lat = (u / 10) * Math.PI * 0.5;
      const radius = 130 * Math.cos(lat * 0.4);
      const y = -140 + u * 16;
      for (let v = 0; v < 14; v++) {
        const lon = (v / 14) * Math.PI * 2;
        const x = radius * Math.cos(lon) * (0.85 + 0.15 * Math.sin(lat));
        const z = radius * Math.sin(lon) * (0.95);
        nodes.push({
          x,
          y,
          z,
          type: 'cranium',
          color: u % 2 === 0 ? 'rgba(255, 72, 0, ' : 'rgba(220, 226, 235, ',
          size: 1.5,
        });
      }
    }

    // Connect rings and meridians
    for (let u = 0; u <= 10; u++) {
      const rowStart = u * 14;
      for (let v = 0; v < 14; v++) {
        const nextV = (v + 1) % 14;
        connections.push([rowStart + v, rowStart + nextV]);
        if (u < 10) {
          connections.push([rowStart + v, rowStart + 14 + v]);
        }
      }
    }

    // Facial Profile / Jaw / Cervical Spine
    const facePoints = [
      { x: 0, y: -40, z: 120, type: 'ocular', color: 'rgba(255, 72, 0, ', size: 3.5 }, // Forehead sensor
      { x: -35, y: -20, z: 105, type: 'ocular-left', color: 'rgba(255, 72, 0, ', size: 4 }, // Left Optic
      { x: 35, y: -20, z: 105, type: 'ocular-right', color: 'rgba(255, 72, 0, ', size: 4 }, // Right Optic
      { x: 0, y: 15, z: 125, type: 'nasal', color: 'rgba(226, 232, 240, ', size: 2 },
      { x: -28, y: 55, z: 95, type: 'jaw-left', color: 'rgba(226, 232, 240, ', size: 2 },
      { x: 28, y: 55, z: 95, type: 'jaw-right', color: 'rgba(226, 232, 240, ', size: 2 },
      { x: 0, y: 70, z: 90, type: 'chin', color: 'rgba(255, 72, 0, ', size: 3 },
      // Cervical Verts
      { x: 0, y: 95, z: -10, type: 'cervical', color: 'rgba(226, 232, 240, ', size: 2.5 },
      { x: 0, y: 125, z: -15, type: 'cervical', color: 'rgba(226, 232, 240, ', size: 2.5 },
      { x: 0, y: 155, z: -20, type: 'cervical', color: 'rgba(255, 72, 0, ', size: 3 },
      { x: -50, y: 150, z: 0, type: 'clavicle', color: 'rgba(226, 232, 240, ', size: 2 },
      { x: 50, y: 150, z: 0, type: 'clavicle', color: 'rgba(226, 232, 240, ', size: 2 },
    ];

    const faceOffset = nodes.length;
    facePoints.forEach((p) => nodes.push(p));

    // Connect facial structure
    connections.push(
      [faceOffset + 1, faceOffset + 0],
      [faceOffset + 2, faceOffset + 0],
      [faceOffset + 1, faceOffset + 3],
      [faceOffset + 2, faceOffset + 3],
      [faceOffset + 3, faceOffset + 4],
      [faceOffset + 3, faceOffset + 5],
      [faceOffset + 4, faceOffset + 6],
      [faceOffset + 5, faceOffset + 6],
      [faceOffset + 6, faceOffset + 7],
      [faceOffset + 7, faceOffset + 8],
      [faceOffset + 8, faceOffset + 9],
      [faceOffset + 9, faceOffset + 10],
      [faceOffset + 9, faceOffset + 11]
    );

    // Particles Cloud
    const particles: { x: number; y: number; z: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 500,
        z: (Math.random() - 0.5) * 300,
        speed: 0.2 + Math.random() * 0.4,
        opacity: 0.1 + Math.random() * 0.4,
      });
    }

    let rotY = 0;
    let rotX = 0;
    let time = 0;

    const render = () => {
      time += 0.015;

      // Mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      rotY = Math.sin(time * 0.4) * 0.15 + mouseRef.current.x * 1.4;
      rotX = Math.cos(time * 0.3) * 0.05 + mouseRef.current.y * 1.2;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2 + 10;
      const fov = 420;

      // Project 3D to 2D
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Render Floating Particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -260) p.y = 260;

        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = fov / (fov + z2 + 250);
        const px = cx + x1 * scale;
        const py = cy + y1 * scale;

        if (scale > 0 && px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.arc(px, py, 1.2 * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 72, 0, ${p.opacity * scale})`;
          ctx.fill();
        }
      });

      // Project nodes
      const projected = nodes.map((node) => {
        // Rotate around Y
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        // Rotate around X
        const y1 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        const scale = fov / (fov + z2 + 220);
        return {
          px: cx + x1 * scale,
          py: cy + y1 * scale,
          z: z2,
          scale,
          type: node.type,
          color: node.color,
          size: node.size,
        };
      });

      // Render Connections
      connections.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];

        if (p1.scale > 0 && p2.scale > 0) {
          const avgZ = (p1.z + p2.z) / 2;
          const alpha = Math.max(0.04, Math.min(0.28, (avgZ + 150) / 350));
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = `rgba(180, 195, 215, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      });

      // Render Nodes with Depth Sorting
      const sortedNodes = [...projected].sort((a, b) => a.z - b.z);
      sortedNodes.forEach((p) => {
        if (p.scale > 0) {
          const alpha = Math.max(0.15, Math.min(0.95, (p.z + 180) / 320));
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.size * p.scale, 0, Math.PI * 2);

          if (p.type.includes('ocular')) {
            // Optical sensor glow
            ctx.fillStyle = `#FF4800`;
            ctx.shadowColor = '#FF4800';
            ctx.shadowBlur = 12 * p.scale;
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = `${p.color}${alpha})`;
            ctx.fill();
          }
        }
      });

      // Cybernetic Target Reticle Overlay
      const scanY = cy + Math.sin(time * 2) * 160;
      ctx.beginPath();
      ctx.moveTo(cx - 140, scanY);
      ctx.lineTo(cx + 140, scanY);
      ctx.strokeStyle = 'rgba(255, 72, 0, 0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
    >
      {/* Visual Mode Pill Switch */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 flex items-center gap-1.5 p-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
        <button
          onClick={() => setActiveTab('3d')}
          className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 ${
            activeTab === '3d'
              ? 'bg-[#FF4800] text-black font-semibold shadow-[0_0_12px_rgba(255,72,0,0.6)]'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          REALTIME 3D
        </button>
        <button
          onClick={() => setActiveTab('portrait')}
          className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 ${
            activeTab === 'portrait'
              ? 'bg-[#FF4800] text-black font-semibold shadow-[0_0_12px_rgba(255,72,0,0.6)]'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          PORTRAIT
        </button>
      </div>

      {/* 3D Holographic Canvas Mode */}
      <div
        className={`w-full h-full flex items-center justify-center transition-opacity duration-500 ${
          activeTab === '3d' ? 'opacity-100 relative z-10' : 'opacity-0 pointer-events-none absolute'
        }`}
      >
        <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        {/* HUD Data Coordinates */}
        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest pointer-events-none hidden sm:block">
          <div>MODEL: CYBER-MK-VII // WIREFRAME</div>
          <div>ROT_VEL: CLOSED-LOOP 0.42MS</div>
          <div className="text-[#FF4800]">OPTICAL_ARRAY: ACTIVE [60 FPS]</div>
        </div>
      </div>

      {/* High-Resolution Portrait Mode */}
      <div
        className={`w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] aspect-[3/4] mx-auto flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 ${
          activeTab === 'portrait' ? 'opacity-100 relative z-10 scale-100' : 'opacity-0 pointer-events-none absolute scale-95'
        }`}
      >
        <img
          src="/assets/hero-portrait-clean.jpg"
          alt="CYBERCORE Cybernetic Humanoid Portrait"
          className="w-full h-full object-contain object-center select-none pointer-events-none"
          loading="eager"
        />
        <div className="absolute bottom-3 inset-x-3 py-1.5 px-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex justify-between items-center text-[10px] font-mono text-neutral-400">
          <span>SPECIMEN: LAB-MK-01</span>
          <span className="text-[#FF4800]">CERVICAL HARNESS OK</span>
        </div>
      </div>
    </div>
  );
};
