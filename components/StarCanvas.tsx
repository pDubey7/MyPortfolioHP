"use client";

import { useEffect, useRef } from "react";

interface StarParticle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  alphaDir: number;
  type: "star" | "gold";
  vy?: number;
  vx?: number;
  rotation?: number;
  rotSpeed?: number;
  size?: number;
}

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: StarParticle[] = [];
    let dustParticles: StarParticle[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      dustParticles = [];

      // Twinkling stars – white/parchment
      for (let i = 0; i < 220; i++) {
        stars.push({
          type: "star",
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.6 + 0.2,
          alpha: Math.random(),
          alphaDir: (Math.random() * 0.018 + 0.004) * (Math.random() < 0.5 ? 1 : -1),
        });
      }

      // Golden magical dust – drifts slowly upward
      for (let i = 0; i < 60; i++) {
        dustParticles.push(createDust(canvas.height));
      }
    };

    const createDust = (startY?: number): StarParticle => ({
      type: "gold",
      x: Math.random() * (canvas?.width ?? 1440),
      y: startY !== undefined ? startY * Math.random() : (canvas?.height ?? 900) + 10,
      radius: Math.random() * 2.5 + 0.8,
      alpha: 0,
      alphaDir: 0,
      vy: -(Math.random() * 0.4 + 0.15),
      vx: (Math.random() - 0.5) * 0.25,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      size: Math.random() * 3 + 1.5,
    });

    const drawStar = (p: StarParticle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      const r = Math.floor(245 - Math.random() * 30);
      const g = Math.floor(237 - Math.random() * 20);
      ctx.fillStyle = `rgba(${r},${g},214,${Math.max(0, Math.min(1, p.alpha))})`;
      ctx.fill();
    };

    const drawDust = (p: StarParticle) => {
      if (!p.size) return;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation ?? 0);
      // 4-point star / diamond shape
      const s = p.size;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.35, -s * 0.35);
      ctx.lineTo(s, 0);
      ctx.lineTo(s * 0.35, s * 0.35);
      ctx.lineTo(0, s);
      ctx.lineTo(-s * 0.35, s * 0.35);
      ctx.lineTo(-s, 0);
      ctx.lineTo(-s * 0.35, -s * 0.35);
      ctx.closePath();
      const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, s);
      grd.addColorStop(0, `rgba(245,216,122,${Math.max(0, Math.min(1, p.alpha))})`);
      grd.addColorStop(0.6, `rgba(212,175,55,${Math.max(0, Math.min(1, p.alpha * 0.7))})`);
      grd.addColorStop(1, `rgba(139,115,32,0)`);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw + update twinkling stars
      for (const s of stars) {
        s.alpha += s.alphaDir;
        if (s.alpha <= 0.05 || s.alpha >= 1) s.alphaDir *= -1;
        drawStar(s);
      }

      // Draw + update golden dust
      for (let i = 0; i < dustParticles.length; i++) {
        const d = dustParticles[i];
        d.x += d.vx ?? 0;
        d.y += d.vy ?? 0;
        d.rotation = (d.rotation ?? 0) + (d.rotSpeed ?? 0);

        // Fade in then out based on Y position
        const progress = 1 - (d.y / canvas.height);
        if (progress < 0.1) {
          d.alpha = Math.min(d.alpha + 0.02, progress * 8);
        } else if (progress > 0.85) {
          d.alpha = Math.max(d.alpha - 0.015, 0);
        } else {
          d.alpha = Math.min(d.alpha + 0.02, 0.75);
        }

        drawDust(d);

        if (d.y < -20) {
          dustParticles[i] = createDust(canvas.height + 10);
        }
      }

      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
