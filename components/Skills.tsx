"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";

const tomes = [
  {
    category: "Incantations",
    title: "Languages",
    skills: [
      { name: "Rust",       icon: "https://cdn.simpleicons.org/rust/D4AF37" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/D4AF37" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/D4AF37" },
      { name: "Go",         icon: "https://cdn.simpleicons.org/go/D4AF37" },
      { name: "Java",       icon: "https://cdn.simpleicons.org/java/D4AF37" },
      { name: "Python",     icon: "https://cdn.simpleicons.org/python/D4AF37" },
      { name: "SQL",        icon: "https://cdn.simpleicons.org/sqlite/D4AF37" },
      { name: "Bash",       icon: "https://cdn.simpleicons.org/gnubash/D4AF37" },
    ],
  },
  {
    category: "Transfiguration",
    title: "Backend",
    skills: [
      { name: "Next.js",      icon: "https://cdn.simpleicons.org/nextdotjs/D4AF37" },
      { name: "Node.js",      icon: "https://cdn.simpleicons.org/nodedotjs/D4AF37" },
      { name: "Express.js",   icon: "https://cdn.simpleicons.org/express/D4AF37" },
      { name: "REST APIs",    icon: "https://cdn.simpleicons.org/json/D4AF37" },
      { name: "WebSockets",   icon: "https://cdn.simpleicons.org/socketdotio/D4AF37" },
      { name: "JWT",          icon: "https://cdn.simpleicons.org/jsonwebtokens/D4AF37" },
      { name: "OAuth",        icon: "https://cdn.simpleicons.org/auth0/D4AF37" },
      { name: "Microservices",icon: "https://cdn.simpleicons.org/kubernetes/D4AF37" },
    ],
  },
  {
    category: "Potions",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/D4AF37" },
      { name: "Redis",      icon: "https://cdn.simpleicons.org/redis/D4AF37" },
      { name: "MongoDB",    icon: "https://cdn.simpleicons.org/mongodb/D4AF37" },
      { name: "MySQL",      icon: "https://cdn.simpleicons.org/mysql/D4AF37" },
      { name: "Supabase",   icon: "https://cdn.simpleicons.org/supabase/D4AF37" },
      { name: "Prisma",     icon: "https://cdn.simpleicons.org/prisma/D4AF37" },
    ],
  },
  {
    category: "Dark Arts (Tamed)",
    title: "Blockchain & AI",
    glowClass: "hover:shadow-[0_0_30px_rgba(153,69,255,0.45)] hover:border-[#9945FF]/70",
    skills: [
      { name: "Solana",   icon: "https://cdn.simpleicons.org/solana/9945FF" },
      { name: "Web3.js",  icon: "https://cdn.simpleicons.org/web3dotjs/D4AF37" },
      { name: "LangChain",icon: "https://cdn.simpleicons.org/langchain/D4AF37" },
      { name: "GPT-4",    icon: "https://cdn.simpleicons.org/openai/D4AF37" },
      { name: "Whisper",  icon: "https://cdn.simpleicons.org/openai/D4AF37" },
      { name: "Anchor",   icon: "https://cdn.simpleicons.org/rust/14F195" },
    ],
  },
  {
    category: "Defence Against Dark Arts",
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker",         icon: "https://cdn.simpleicons.org/docker/D4AF37" },
      { name: "Kubernetes",     icon: "https://cdn.simpleicons.org/kubernetes/D4AF37" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/D4AF37" },
      { name: "AWS",            icon: "https://cdn.simpleicons.org/amazonaws/D4AF37" },
      { name: "GCP",            icon: "https://cdn.simpleicons.org/googlecloud/D4AF37" },
      { name: "Linux",          icon: "https://cdn.simpleicons.org/linux/D4AF37" },
      { name: "CI/CD",          icon: "https://cdn.simpleicons.org/git/D4AF37" },
    ],
  },
  {
    category: "Artefacts of the Trade",
    title: "Tools",
    skills: [
      { name: "Git",     icon: "https://cdn.simpleicons.org/git/D4AF37" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/D4AF37" },
      { name: "Jira",    icon: "https://cdn.simpleicons.org/jira/D4AF37" },
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/D4AF37" },
      { name: "Figma",   icon: "https://cdn.simpleicons.org/figma/D4AF37" },
    ],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 50,
      filter: shouldReduceMotion ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 22,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 280, damping: 18 },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10 min-h-screen">
      {/* Mist backdrop */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none -z-10 overflow-hidden rounded-3xl"
          aria-hidden="true"
        >
          <svg
            className="absolute inset-0 w-full h-full mist-layer"
            viewBox="0 0 1200 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="mist">
                <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="3" seed="5" />
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.18" />
                </feComponentTransfer>
                <feComposite in="SourceGraphic" operator="in" />
              </filter>
            </defs>
            <rect width="1200" height="900" fill="#1a0a3a" filter="url(#mist)" />
          </svg>
        </div>
      )}

      {/* Section heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-cinzelDecorative text-4xl md:text-5xl mb-4 shimmer-gold"
        >
          The Spellbook
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-imFellEnglish italic text-xl text-[#C9B99A] tracking-wide"
        >
          Every wizard&apos;s grimoire of arcane knowledge
        </motion.p>
      </div>

      {/* Grid of tome cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="gap-8 gap-y-12 w-full grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {tomes.map((tome) => (
          <motion.div
            key={tome.title}
            variants={cardVariants}
            whileHover={
              !shouldReduceMotion
                ? {
                    y: -6,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }
                : {}
            }
            className={`group relative bg-[rgba(20,5,10,0.65)] border border-[rgba(212,175,55,0.25)] rounded-r-xl rounded-l-md p-6 transition-colors duration-300 card-pulse-glow
              ${tome.glowClass ?? "hover:shadow-[0_0_24px_rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.8)]"}`}
          >
            {/* Spine */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] via-[#7B0D1E] to-[#D4AF37] rounded-l-md opacity-75 group-hover:opacity-100 transition-opacity" />

            <div className="mb-6 pl-2">
              <span className="block font-cinzel text-[0.6rem] text-[#8B7320] uppercase tracking-widest mb-1">
                {tome.category}
              </span>
              <h3 className="font-cinzelDecorative text-xl text-[#F5D87A] tracking-wider">
                {tome.title}
              </h3>
            </div>

            {/* Skill badges with spring stagger */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="grid grid-cols-2 gap-3 pl-2"
            >
              {tome.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={badgeVariants}
                  whileHover={
                    !shouldReduceMotion
                      ? {
                          scale: 1.12,
                          rotate: [-3, 3, -2, 0],
                          transition: { duration: 0.35 },
                        }
                      : {}
                  }
                  className="flex flex-col items-center justify-center p-3 text-center border border-[rgba(212,175,55,0.2)] rounded-lg bg-[rgba(13,0,5,0.55)] hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] transition-colors orb-float"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                    willChange: "transform",
                  }}
                >
                  <div className="w-8 h-8 mb-2 flex items-center justify-center relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      unoptimized
                      sizes="32px"
                      className="object-contain filter drop-shadow-[0_0_3px_rgba(0,0,0,1)] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.7)] transition-all"
                    />
                  </div>
                  <span className="font-jetbrainsMono text-[0.7rem] text-[#C9B99A] hover:text-[#D4AF37] transition-colors line-clamp-1 break-all">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
