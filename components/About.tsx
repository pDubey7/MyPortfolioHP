"use client";

import { motion, useReducedMotion } from "framer-motion";
import { User, Code, Server, Flame } from "lucide-react";

const cards = [
  {
    icon: Server,
    title: "Backend Sorcery",
    desc: "Designing highly-available architectures with Next.js, Express, and distributed databases.",
  },
  {
    icon: Code,
    title: "Solana Smart Contracts",
    desc: "Crafting secure and efficient anchor programs for decentralized applications.",
  },
  {
    icon: User,
    title: "DevOps Craftsmanship",
    desc: "Streamlining workflows using CI/CD, Docker, and modern orchestration tools.",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, filter: shouldReduceMotion ? "none" : "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="py-20 relative"
    >
      <div className="absolute inset-0 bg-bg2/50 backdrop-blur-sm border border-gold/10 rounded-2xl shadow-xl -z-10" />

      <div className="px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-cinzelDecorative text-4xl text-gold mb-10 flex items-center gap-4 heading-flicker"
        >
          <motion.span
            animate={!shouldReduceMotion ? { rotate: [0, -10, 10, -10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 4, delay: 2 }}
          >
            <Flame className="text-crimson w-8 h-8" />
          </motion.span>
          The Wizard behind the Code
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 text-lg text-smoke/90 leading-relaxed">
          {/* Bio paragraphs */}
          <div className="space-y-6">
            {[
              <>
                Greetings! I am{" "}
                <span className="text-gold font-bold">Pushpraj Dubey</span>, a
                passionate developer pursuing Computer Science at IIIT Una (Class
                of 2027).
              </>,
              <>
                Like a true Gryffindor, I dive headfirst into complex challenges
                with courage, forging robust backend systems and deploying
                scalable infrastructure.
              </>,
              <>
                My journey involves weaving spells in{" "}
                <span className="text-crimson-light font-jetbrainsMono bg-crimson/10 px-2 py-0.5 rounded">
                  Next.js
                </span>
                , concocting smart contracts on the{" "}
                <span className="text-gold font-jetbrainsMono bg-gold/10 px-2 py-0.5 rounded">
                  Solana
                </span>{" "}
                blockchain, and automating deployment pipelines using modern
                DevOps tools.
              </>,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: shouldReduceMotion ? 0 : i * 0.12,
                  ease: "easeOut",
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Skill cards */}
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: shouldReduceMotion ? 0 : i * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={
                    !shouldReduceMotion
                      ? {
                          scale: 1.025,
                          borderColor: "rgba(212,175,55,0.6)",
                          transition: { duration: 0.2 },
                        }
                      : {}
                  }
                  className="p-4 border border-gold/20 bg-bg3 rounded flex items-start gap-4 hover:bg-bg2 transition-colors group card-pulse-glow"
                >
                  <motion.div
                    whileHover={!shouldReduceMotion ? { rotate: 15, scale: 1.2 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-gold w-6 h-6 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-cinzel font-bold text-gold-light mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
