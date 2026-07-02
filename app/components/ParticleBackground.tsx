"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let particles: Particle[] = [];

    const COLORS = [
      "34,211,238",   // cyan
      "168,85,247",   // purple
      "99,102,241",   // indigo
      "236,72,153",   // pink
      "255,255,255",  // white
    ];

    const CONNECTION_DIST = 130;
    const MOUSE_REPEL_DIST = 120;
    const MOUSE_REPEL_FORCE = 0.6;
    const MOUSE_ATTRACT_DIST = 200;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    function init() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < count; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.8 + 0.6,
          color,
          opacity: Math.random() * 0.5 + 0.4,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    }

    function draw(time: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Update + draw particles
      for (const p of particles) {
        // Mouse repel / attract
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST;
          p.vx += (dx / dist) * force * MOUSE_REPEL_FORCE;
          p.vy += (dy / dist) * force * MOUSE_REPEL_FORCE;
        } else if (dist < MOUSE_ATTRACT_DIST && dist > MOUSE_REPEL_DIST) {
          const force = 0.02;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        // Friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 3) { p.vx = (p.vx / speed) * 3; p.vy = (p.vy / speed) * 3; }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Pulse
        p.pulsePhase += p.pulseSpeed;
        const pulse = 0.7 + 0.3 * Math.sin(p.pulsePhase);
        const r = p.radius * pulse;
        const op = p.opacity * pulse;

        // Glow + core
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        grd.addColorStop(0, `rgba(${p.color},${op})`);
        grd.addColorStop(0.4, `rgba(${p.color},${op * 0.4})`);
        grd.addColorStop(1, `rgba(${p.color},0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${op})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECTION_DIST) {
            const t = 1 - d / CONNECTION_DIST;
            const lineOpacity = t * t * 0.5;

            // Pick gradient color from the two particles
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(${a.color},${lineOpacity})`);
            grad.addColorStop(1, `rgba(${b.color},${lineOpacity})`);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = t * 1.2;
            ctx.stroke();
          }
        }
      }

      // Mouse glow
      if (mx > 0 && my > 0) {
        const mgrd = ctx.createRadialGradient(mx, my, 0, mx, my, MOUSE_REPEL_DIST);
        mgrd.addColorStop(0, "rgba(34,211,238,0.08)");
        mgrd.addColorStop(0.5, "rgba(168,85,247,0.04)");
        mgrd.addColorStop(1, "rgba(34,211,238,0)");
        ctx.beginPath();
        ctx.arc(mx, my, MOUSE_REPEL_DIST, 0, Math.PI * 2);
        ctx.fillStyle = mgrd;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.current = { x: e.clientX, y: e.clientY };
    }

    function onMouseLeave() {
      mouse.current = { x: -9999, y: -9999 };
    }

    function onTouch(e: TouchEvent) {
      if (e.touches[0]) {
        mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020510]">

      {/* Deep space nebula layers */}
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15%  10%, rgba(6,182,212,0.12)   0%, transparent 55%),
            radial-gradient(ellipse 70% 70% at 85%  8%,  rgba(139,92,246,0.14)  0%, transparent 50%),
            radial-gradient(ellipse 90% 50% at 50%  95%, rgba(59,130,246,0.10)  0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 5%   65%, rgba(236,72,153,0.08)  0%, transparent 45%),
            radial-gradient(ellipse 60% 50% at 95%  70%, rgba(16,185,129,0.07)  0%, transparent 45%)
          `
        }}
      />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 h-full w-full"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,5,16,0.7) 100%)"
        }}
      />
    </div>
  );
}
