"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Solana TeleBot",
    spell: "Wingardium Leviosa — for on-chain transactions",
    date: "Jan 2025 – Jul 2025",
    logos: [
      { name: "LangChain", url: "https://cdn.simpleicons.org/langchain/D4AF37" },
      { name: "Solana",    url: "https://cdn.simpleicons.org/solana/14F195" },
      { name: "GPT-4",     url: "https://cdn.simpleicons.org/openai/D4AF37" },
      { name: "Redis",     url: "https://cdn.simpleicons.org/redis/D4AF37" },
      { name: "Next.js",   url: "https://cdn.simpleicons.org/nextdotjs/D4AF37" },
    ],
    bullets: [
      "Executed 50+ transactions for 10+ concurrent users",
      "Reduced RPC latency 60% via Redis",
      "Optimized transaction batching 35%",
    ],
  },
  {
    title: "CrimeInsight",
    spell: "Revelio — unveiling patterns from chaos",
    date: "Oct 2024 – Dec 2024",
    logos: [
      { name: "Next.js",    url: "https://cdn.simpleicons.org/nextdotjs/D4AF37" },
      { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/D4AF37" },
      { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/D4AF37" },
      { name: "Redis",      url: "https://cdn.simpleicons.org/redis/D4AF37" },
      { name: "Mapbox",     url: "https://cdn.simpleicons.org/mapbox/D4AF37" },
      { name: "Prisma",     url: "https://cdn.simpleicons.org/prisma/D4AF37" },
    ],
    bullets: [
      "85% predictive accuracy across 2 districts",
      "REST APIs cutting response time 50%",
      "Mapbox dashboards improving accessibility 60%",
    ],
  },
  {
    title: "PostifyAI",
    spell: "Accio Content — summoning blogs from video",
    date: "Jul 2024 – Sep 2024",
    logos: [
      { name: "Next.js",    url: "https://cdn.simpleicons.org/nextdotjs/D4AF37" },
      { name: "Whisper",    url: "https://cdn.simpleicons.org/openai/D4AF37" },
      { name: "GPT-4",      url: "https://cdn.simpleicons.org/openai/D4AF37" },
      { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/D4AF37" },
      { name: "Stripe",     url: "https://cdn.simpleicons.org/stripe/D4AF37" },
      { name: "AWS S3",     url: "https://cdn.simpleicons.org/amazons3/D4AF37" },
    ],
    bullets: [
      "25+ active users, 100+ monthly posts",
      "95% transcription accuracy",
      "Reduced production time 40%, improved SEO 25%",
    ],
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 55,
      scaleY: shouldReduceMotion ? 1 : 0.92,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 22,
        filter: { duration: 0.5 },
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10 min-h-screen">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-cinzelDecorative text-4xl md:text-5xl mb-6 shimmer-gold"
        >
          Magical Artefacts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="font-imFellEnglish italic text-xl text-[#C9B99A]/80 tracking-wide max-w-2xl mx-auto"
        >
          Items of extraordinary power, forged through countless hours in the lab
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full gap-8 grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={
              !shouldReduceMotion
                ? {
                    y: -8,
                    rotate: 0.4,
                    scale: 1.015,
                    transition: { duration: 0.28, ease: "easeOut" },
                  }
                : {}
            }
            className="group relative flex flex-col p-8 border border-[rgba(212,175,55,0.2)] rounded-md card-pulse-glow"
            style={{
              background:
                "linear-gradient(145deg, rgba(22,6,12,0.95), rgba(32,10,20,0.9), rgba(18,5,14,0.95))",
              transformOrigin: "center top",
              willChange: "transform",
            }}
          >
            {/* Parchment texture overlay */}
            <div
              className="absolute inset-0 rounded-md pointer-events-none opacity-[0.03] mix-blend-overlay z-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,175,55,0.3) 2px, rgba(212,175,55,0.3) 3px)",
              }}
            />

            {/* Aged border glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-md pointer-events-none z-0"
              animate={{}}
              style={{
                boxShadow: "inset 0 0 0px rgba(212,175,55,0)",
              }}
              whileHover={
                !shouldReduceMotion
                  ? {
                      boxShadow:
                        "inset 0 0 30px rgba(212,175,55,0.06), 0 0 40px rgba(123,13,30,0.35), 0 0 80px rgba(212,175,55,0.08)",
                    }
                  : {}
              }
            />

            {/* Folded corner mask */}
            <div
              className="absolute top-[-1px] right-[-1px] w-[41px] h-[41px] bg-[#0D0005] z-10 pointer-events-none rounded-tr-md"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />
            {/* Folded flap */}
            <div
              className="absolute top-[-1px] right-[-1px] w-[39px] h-[39px] bg-gradient-to-bl from-[rgba(212,175,55,0.35)] to-[rgba(20,5,10,1)] border-b border-l border-[#D4AF37]/55 shadow-[-3px_3px_5px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
              style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
            />

            {/* Wax seal corner */}
            <motion.div
              className="absolute bottom-6 right-6 z-20 pointer-events-none opacity-15 group-hover:opacity-30 transition-opacity"
              animate={!shouldReduceMotion ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" fill="#7B0D1E" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="#D4AF37" strokeWidth="2" />
                <text x="50" y="58" textAnchor="middle" fontFamily="Georgia,serif" fontSize="28" fill="#D4AF37">✦</text>
              </svg>
            </motion.div>

            <div className="flex-1 relative z-30">
              <div className="flex justify-between items-start mb-2 pr-4">
                <h3 className="font-cinzel text-2xl font-bold text-[#F5D87A] tracking-wider">
                  {project.title}
                </h3>
              </div>

              <p className="font-imFellEnglish italic text-[#D4AF37] mb-6 text-sm tracking-wide opacity-90">
                ✧ {project.spell} ✧
              </p>

              <div className="font-jetbrainsMono text-[0.65rem] text-[#A91D3A] bg-[#7B0D1E]/10 border border-[#7B0D1E]/30 inline-block px-2 py-1 rounded mb-6 uppercase tracking-widest">
                {project.date}
              </div>

              <ul className="space-y-3 mb-8">
                {project.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex text-sm text-[#C9B99A]/90 items-start"
                  >
                    <span className="text-[#D4AF37] mr-3 mt-0.5 opacity-70">⚡</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stack logos */}
            <div className="flex flex-wrap gap-3 mb-8 pt-6 border-t border-[rgba(212,175,55,0.15)] relative z-30">
              {project.logos.map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={!shouldReduceMotion ? { scale: 1.25, rotate: 8 } : {}}
                  transition={{ duration: 0.2 }}
                  className="group/logo relative cursor-help"
                >
                  <div className="w-8 h-8 p-1.5 bg-[#0D0005]/80 border border-[rgba(212,175,55,0.2)] rounded shadow-inner hover:border-[#D4AF37]/65 transition-colors flex justify-center items-center relative overflow-hidden">
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      fill
                      unoptimized
                      sizes="32px"
                      className="object-contain p-1.5 filter drop-shadow-[0_0_2px_rgba(0,0,0,1)] group-hover/logo:drop-shadow-[0_0_6px_rgba(212,175,55,0.6)] transition-all"
                    />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/logo:opacity-100 transition-opacity bg-[#0D0005] border border-[#D4AF37]/30 text-[#D4AF37] text-[0.6rem] font-jetbrainsMono py-1 px-2 rounded whitespace-nowrap z-40 pointer-events-none shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto relative z-30">
              <motion.a
                href="#"
                whileHover={!shouldReduceMotion ? { x: 4 } : {}}
                className="inline-flex items-center text-[#C9B99A] font-cinzel text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors group/btn"
              >
                <span className="border-b border-transparent group-hover/btn:border-[#D4AF37] pb-1 transition-all">
                  View Artefact
                </span>
                <span className="ml-2 duration-300 transition-transform">→</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
