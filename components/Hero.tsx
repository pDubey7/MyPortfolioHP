"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { openMaraudersMap } from "@/lib/easterEggs";

function useTypewriter(text: string, speed: number, delayMs: number) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    const outer = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(iv);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(iv);
    }, delayMs);
    return () => clearTimeout(outer);
  }, [text, speed, delayMs]);

  return { displayed, done };
}

// Hogwarts-inspired wax seal SVG
function WaxSeal() {
  const dots = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * 360;
    const rad = (angle * Math.PI) / 180;
    return { x: 50 + 43 * Math.cos(rad), y: 50 + 43 * Math.sin(rad) };
  });

  return (
    <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wax body */}
      <circle cx="50" cy="50" r="48" fill="url(#sealGrad)" />
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
      {/* Inner dashed ring */}
      <circle cx="50" cy="50" r="36" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3 2.5" />
      {/* Decorative dots */}
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.8" fill="#D4AF37" opacity="0.75" />
      ))}
      {/* P monogram */}
      <text x="50" y="48" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontWeight="bold" fill="#D4AF37" letterSpacing="1">P</text>
      {/* Divider */}
      <line x1="34" y1="53" x2="66" y2="53" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
      {/* D */}
      <text x="50" y="70" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill="#D4AF37" letterSpacing="2">D</text>
      <defs>
        <radialGradient id="sealGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#A91D3A" />
          <stop offset="100%" stopColor="#4a0410" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Castle silhouette path
const CASTLE_PATH = `M0 300 L0 210 L40 210 L40 175 L55 175 L55 195 L70 195 L70 175 L85 175 L85 210 L140 210 L140 160 L155 160 L155 140 L163 140 L163 122 L171 122 L171 140 L179 140 L179 160 L195 160 L195 175 L240 175 L240 160 L265 160 L265 135 L278 135 L278 118 L286 118 L286 100 L294 100 L294 90 L302 90 L302 100 L310 100 L310 118 L318 118 L318 135 L331 135 L331 160 L360 160 L360 185 L410 185 L410 210 L460 210 L460 175 L478 175 L478 195 L496 195 L496 175 L514 175 L514 210 L570 210 L570 190 L595 190 L595 160 L610 160 L610 135 L622 135 L622 115 L630 115 L630 90 L638 90 L638 72 L646 72 L646 55 L654 55 L654 35 L662 35 L662 18 L670 18 L670 35 L678 35 L678 55 L686 55 L686 72 L694 72 L694 90 L702 90 L702 115 L714 115 L714 135 L726 135 L726 160 L741 160 L741 190 L780 190 L780 165 L810 165 L810 180 L850 180 L850 165 L880 165 L880 185 L920 185 L920 210 L970 210 L970 175 L988 175 L988 155 L1006 155 L1006 135 L1018 135 L1018 118 L1026 118 L1026 100 L1034 100 L1034 90 L1042 90 L1042 100 L1050 100 L1050 118 L1058 118 L1058 135 L1070 135 L1070 160 L1100 160 L1100 175 L1140 175 L1140 165 L1165 165 L1165 190 L1200 190 L1200 160 L1220 160 L1220 210 L1280 210 L1280 175 L1298 175 L1298 195 L1316 195 L1316 175 L1334 175 L1334 210 L1400 210 L1400 215 L1440 215 L1440 300 Z`;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const castleY  = useTransform(scrollY, [0, 700], [0,  90]);
  const mistY    = useTransform(scrollY, [0, 700], [0,  45]);
  const contentY = useTransform(scrollY, [0, 700], [0, -30]);

  const name = "Pushpraj Dubey";
  const subtitleText = "Backend Developer · DevOps Engineer · Solana Blockchain Developer";

  const { displayed, done } = useTypewriter(
    subtitleText,
    38,
    shouldReduceMotion ? 0 : 1500
  );

  const nameVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.065 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35, rotateX: -90, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 220, damping: 22 },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* ── Background deep gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0022] via-[#0D0005] to-[#0a0012] z-0 pointer-events-none" />

      {/* ── Crimson top glow ── */}
      <div className="absolute top-[-280px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[520px] bg-[#7B0D1E] opacity-18 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* ── Parallax: castle silhouette ── */}
      {!shouldReduceMotion && (
        <motion.div
          style={{ y: castleY }}
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-1"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path d={CASTLE_PATH} fill="#180830" opacity="0.55" />
            <path d={CASTLE_PATH} fill="url(#castleGlow)" opacity="0.4" />
            <defs>
              <linearGradient id="castleGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#7B0D1E" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}

      {/* ── Parallax: mist layer ── */}
      {!shouldReduceMotion && (
        <motion.div
          style={{ y: mistY }}
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-2"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1440 256" className="w-full h-full mist-layer" preserveAspectRatio="none">
            <defs>
              <filter id="mistBlur">
                <feGaussianBlur stdDeviation="18" />
              </filter>
            </defs>
            <ellipse cx="360" cy="220" rx="500" ry="80" fill="#1a0a3a" opacity="0.5" filter="url(#mistBlur)" />
            <ellipse cx="1080" cy="230" rx="480" ry="75" fill="#0d0028" opacity="0.45" filter="url(#mistBlur)" />
            <ellipse cx="720" cy="250" rx="700" ry="60" fill="#0a001f" opacity="0.55" filter="url(#mistBlur)" />
          </svg>
        </motion.div>
      )}

      {/* ── Floating wand ── */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: -20 }}
          animate={{ opacity: 0.85, x: 0, rotate: 0 }}
          transition={{ delay: 2.2, duration: 1.2, ease: "easeOut" }}
          className="absolute right-[7%] top-[28%] pointer-events-none z-5 hidden lg:block wand-float"
          aria-hidden="true"
        >
          <svg width="130" height="20" viewBox="0 0 130 20" fill="none">
            <path d="M6 14 Q40 12 118 6" stroke="url(#wand)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M118 6 L126 4 L120 10 Z" fill="#D4AF37" />
            <ellipse cx="10" cy="15" rx="7" ry="4" transform="rotate(-15 10 15)" fill="#8B7320" opacity="0.8" />
            <defs>
              <linearGradient id="wand" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#5a3a10" />
                <stop offset="60%" stopColor="#8B7320" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
          {/* Sparkle trail at tip */}
          <motion.div
            className="absolute -right-1 top-0 text-base"
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute right-4 top-1 text-xs opacity-60"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: 0.6 }}
          >
            ✦
          </motion.div>
        </motion.div>
      )}

      {/* ── Main content ── */}
      <motion.div
        style={!shouldReduceMotion ? { y: contentY } : {}}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full"
      >
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.45, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-cinzel text-[0.55rem] md:text-xs text-[#D4AF37] uppercase tracking-[0.45em] mb-8"
        >
          The Marauder&apos;s Portfolio — Solemnly Sworn
        </motion.p>

        {/* Wax seal stamps in */}
        {!shouldReduceMotion ? (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 11, delay: 0.15 }}
            className="mb-8 drop-shadow-[0_0_20px_rgba(123,13,30,0.8)]"
            aria-hidden="true"
          >
            <WaxSeal />
          </motion.div>
        ) : (
          <div className="mb-8" aria-hidden="true"><WaxSeal /></div>
        )}

        {/* Name – letter by letter */}
        <motion.h1
          variants={!shouldReduceMotion ? nameVariants : {}}
          initial="hidden"
          animate="visible"
          className="font-cinzelDecorative text-[#D4AF37] leading-tight mb-6 flex flex-wrap justify-center py-2 heading-flicker"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)", perspective: "800px" }}
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={!shouldReduceMotion ? letterVariants : {}}
              className="inline-block"
              style={{ willChange: "transform, opacity", transformOrigin: "center bottom" }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle – typewriter */}
        <div className="font-imFellEnglish italic text-xl md:text-2xl text-[#C9B99A] mb-10 tracking-wide min-h-[2.5rem] flex items-center justify-center">
          {shouldReduceMotion ? (
            <span>{subtitleText}</span>
          ) : (
            <>
              <span>{displayed}</span>
              {!done && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.75 }}
                  className="inline-block w-[2px] h-[1.2em] bg-[#D4AF37] ml-1 rounded-sm align-middle shadow-[0_0_6px_rgba(212,175,55,0.8)]"
                  aria-hidden="true"
                />
              )}
            </>
          )}
        </div>

        {/* House badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 1.0, ease: "easeOut" }}
          className="inline-flex items-center justify-center gap-3 px-6 py-2 border border-[rgba(212,175,55,0.4)] rounded-full bg-[rgba(212,175,55,0.06)] mb-14 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
        >
          <span className="text-xl" aria-hidden="true">🦁</span>
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-widest text-[#D4AF37]">
            Gryffindor &middot; House of the Bold
          </span>
          <span className="text-xl" aria-hidden="true">🦁</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 1.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5"
        >
          <motion.a
            href="#projects"
            whileHover={!shouldReduceMotion ? { scale: 1.05, boxShadow: "0 0 25px rgba(123,13,30,0.7)" } : {}}
            whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
            className="ripple-container px-8 py-3 bg-[#7B0D1E] border border-[#D4AF37] text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest hover:bg-[#A91D3A] transition-colors shadow-[0_0_15px_rgba(123,13,30,0.5)]"
          >
            View Artefacts
          </motion.a>

          <motion.a
            href="/PushprajDubeyResume23145.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            whileHover={!shouldReduceMotion ? { scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.5)" } : {}}
            whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
            className="ripple-container px-8 py-3 bg-[#D4AF37] border border-[#D4AF37] text-[#0D0005] font-cinzel font-bold text-sm uppercase tracking-widest hover:bg-[#F5D87A] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
            whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
            className="ripple-container px-8 py-3 bg-transparent border border-[rgba(201,185,154,0.35)] text-[#C9B99A] font-cinzel text-sm uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            Send an Owl
          </motion.a>

          <motion.button
            onClick={openMaraudersMap}
            aria-label="Open Marauder's Map"
            whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
            whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
            className="ripple-container px-8 py-3 bg-transparent border border-[rgba(201,185,154,0.35)] text-[#C9B99A] font-cinzel text-sm uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center gap-3"
          >
            <span className="text-lg" aria-hidden="true">🗺</span> Marauder&apos;s Map
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-10"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <span className="font-cinzel text-[0.62rem] text-[#C9B99A] uppercase tracking-[0.22em] opacity-55">
            Descend
          </span>
          <div className="w-[1px] h-12 bg-[rgba(201,185,154,0.18)] relative overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-gradient-to-b from-transparent to-[#D4AF37]"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
