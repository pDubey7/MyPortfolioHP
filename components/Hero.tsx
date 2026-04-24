"use client";

import { motion, useReducedMotion } from "framer-motion";
import { openMaraudersMap } from "@/lib/easterEggs";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const name = "Pushpraj Dubey";

    const nameVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.05
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#0D0005]">
            {/* Subtle radial crimson glow at top */}
            <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[500px] bg-[#7B0D1E] opacity-20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
                {/* Top label */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 0.4, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-cinzel text-[0.55rem] md:text-xs text-[#D4AF37] uppercase tracking-[0.4em] mb-8"
                >
                    The Marauder&apos;s Portfolio — Solemnly Sworn
                </motion.p>

                {/* Main heading writes itself */}
                <motion.h1
                    variants={!shouldReduceMotion ? nameVariants : {}}
                    initial="hidden"
                    animate="visible"
                    className="font-cinzelDecorative text-[#D4AF37] leading-tight mb-6 flex flex-wrap justify-center overflow-hidden py-2"
                    style={{
                        fontSize: "clamp(3rem, 7vw, 6rem)",
                        textShadow: "0 0 10px rgba(212,175,55,0.4), 0 0 20px rgba(212,175,55,0.2), 0 0 40px rgba(212,175,55,0.1)",
                    }}
                >
                    {name.split("").map((char, index) => (
                        <motion.span key={index} variants={!shouldReduceMotion ? letterVariants : {}}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
                    className="font-imFellEnglish italic text-xl md:text-2xl text-[#C9B99A] mb-10 tracking-wide"
                >
                    Backend Developer &middot; DevOps Engineer &middot; Solana Blockchain Developer
                </motion.h2>

                {/* House badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 0.9, ease: "easeOut" }}
                    className="inline-flex items-center justify-center text-center gap-3 px-6 py-2 border border-[rgba(212,175,55,0.4)] rounded-full bg-[rgba(212,175,55,0.05)] mb-14"
                >
                    <span className="text-xl" aria-hidden="true">🦁</span>
                    <span className="font-cinzel text-xs md:text-sm uppercase tracking-widest text-[#D4AF37]">
                        Gryffindor &middot; House of the Bold
                    </span>
                    <span className="text-xl" aria-hidden="true">🦁</span>
                </motion.div>

                {/* CTA buttons row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 1.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-[#7B0D1E] border border-[#D4AF37] text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest hover:bg-[#A91D3A] transition-colors shadow-[0_0_15px_rgba(123,13,30,0.5)]"
                    >
                        View Artefacts
                    </a>

                    <a
                        href="/PushprajDubeyResume23145.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Resume"
                        className="px-8 py-3 bg-[#D4AF37] border border-[#D4AF37] text-[#0D0005] font-cinzel font-bold text-sm uppercase tracking-widest hover:bg-[#F5D87A] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    >
                        Download Resume
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-3 bg-transparent border border-[rgba(201,185,154,0.3)] text-[#C9B99A] font-cinzel text-sm uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    >
                        Send an Owl
                    </a>

                    <button
                        onClick={openMaraudersMap}
                        aria-label="Open Marauder's Map"
                        className="px-8 py-3 bg-transparent border border-[rgba(201,185,154,0.3)] text-[#C9B99A] font-cinzel text-sm uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center gap-3"
                    >
                        <span className="text-lg" aria-hidden="true">🗺</span> Marauder&apos;s Map
                    </button>
                </motion.div>
            </div>

            {/* Bottom center: scroll indicator */}
            {!shouldReduceMotion && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
                    onClick={() => {
                        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
                    }}
                    aria-label="Scroll down"
                >
                    <span className="font-cinzel text-[0.65rem] text-[#C9B99A] uppercase tracking-[0.2em] opacity-60">
                        Descend
                    </span>
                    <div className="w-[1px] h-12 bg-[rgba(201,185,154,0.2)] relative overflow-hidden">
                        <motion.div
                            className="w-full h-1/2 bg-[#D4AF37]"
                            animate={{
                                y: ["-100%", "200%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear",
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </section>
    );
}
