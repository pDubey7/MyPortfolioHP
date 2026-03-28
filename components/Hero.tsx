"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="font-cinzelDecorative text-5xl md:text-8xl text-gold mb-6 text-glow-gold tracking-wider">
                    Pushpraj Dubey
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                <h2 className="font-cinzel text-xl md:text-3xl text-crimson-light mb-8 font-bold tracking-widest">
                    Backend • DevOps • Solana
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <p className="max-w-2xl text-lg md:text-xl text-smoke/90 italic mx-auto leading-relaxed">
                    &quot;Embarking on a magical journey through code, crafting enchanting digital experiences and brewing robust architectures.&quot;
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-12 flex gap-6"
            >
                <a href="#projects" className="px-8 py-3 bg-crimson/20 border border-crimson hover:bg-crimson/40 text-parchment font-cinzel rounded transition-all shadow-[0_0_15px_rgba(123,13,30,0.5)]">
                    View Projects
                </a>
                <a href="#contact" className="px-8 py-3 bg-transparent border border-gold/50 hover:bg-gold/10 text-gold font-cinzel rounded transition-all">
                    Contact Me
                </a>
            </motion.div>
        </section>
    );
}
