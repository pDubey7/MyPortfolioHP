"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "Solana VibeGame Jam Winner",
    date: "August 2025",
    description:
      "Ranked among top 8 teams out of 500+ global participants for an innovative game built on Solana.",
  },
  {
    title: "Smart India Hackathon 2024",
    date: "September 2024",
    description:
      "Led the backend development team to secure 1st place for designing a secure cloud-based data tracking system.",
  },
  {
    title: "Open Source Contributor",
    date: "Ongoing",
    description:
      "Active contributor to popular web3 libraries and Next.js frameworks with multiple merged PRs.",
  },
];

export default function Achievements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, filter: shouldReduceMotion ? "none" : "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
      className="py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-cinzelDecorative text-4xl text-gold mb-16 flex items-center justify-center gap-4 text-center shimmer-gold"
      >
        <motion.span
          animate={!shouldReduceMotion ? { rotate: [0, -8, 8, -8, 0], scale: [1, 1.1, 1] } : {}}
          transition={{ repeat: Infinity, duration: 5, delay: 1 }}
        >
          <Trophy className="text-crimson w-8 h-8" />
        </motion.span>
        Trophies &amp; Glory
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 40,
              scale: shouldReduceMotion ? 1 : 0.9,
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 22,
              delay: shouldReduceMotion ? 0 : i * 0.15,
            }}
            whileHover={
              !shouldReduceMotion
                ? {
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.25 },
                  }
                : {}
            }
            className="bg-bg2 border border-gold/10 p-6 rounded-xl hover:bg-bg3 hover:border-gold/35 transition-colors flex flex-col items-center text-center group card-pulse-glow"
          >
            <motion.div
              whileHover={!shouldReduceMotion ? { rotate: 360 } : {}}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-crimson/10 border border-crimson/25 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(123,13,30,0.2)]"
            >
              <Award className="w-8 h-8 text-gold" />
            </motion.div>
            <h3 className="font-cinzel text-lg font-bold text-gold-light mb-2">
              {item.title}
            </h3>
            <div className="font-jetbrainsMono text-xs text-crimson-light mb-4">
              {item.date}
            </div>
            <p className="text-smoke/80 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
