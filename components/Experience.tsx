"use client";

import { motion, type Variants } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            company: "Vibegame",
            role: "Backend Engineer Intern",
            date: "Oct – Nov 2025",
            location: "Remote",
            bullets: [
                "Architected secure wallet auth protocols → 95% reduction in unauthorized access across 6 projects handling 50M+ token burns",
                "Engineered Solana payment infrastructure → $25K+ revenue via blockchain-based reward systems",
                "Optimized RPC endpoints → 40% latency reduction via connection pooling"
            ]
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto relative z-10 min-h-screen flex flex-col items-center">
            <div className="text-center mb-20 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="font-cinzelDecorative text-4xl md:text-5xl mb-6 shimmer-gold"
                >
                    Quests Undertaken
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-imFellEnglish italic text-xl text-[#C9B99A]/80 tracking-wide"
                >
                    Adventures beyond the castle walls
                </motion.p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto">
                {/* Central Gold Gradient Line */}
                <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent md:-translate-x-1/2" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-16"
                >
                    {experiences.map((exp, i) => {
                        const isLeft = i % 2 === 0;

                        return (
                            <div key={i} className={`relative flex flex-col md:flex-row items-center w-full`}>

                                {/* Timeline diamond bullet */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="absolute left-[8px] md:left-1/2 w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-[#8B7320] shadow-[0_0_15px_rgba(212,175,55,0.8)] rotate-45 transform -translate-x-1/2 z-20 border border-[rgba(245,237,214,0.3)] shadow-inner"
                                />

                                {/* 
                  Card Container
                  On mobile: Placed to the right of the line (which is at left: 20px).
                  On desktop: Alternates left and right depending on index.
                */}
                                <motion.div
                                    variants={itemVariants}
                                    className={`w-full md:w-1/2 flex items-center
                    pl-16 md:pl-0 
                    ${isLeft ? "md:pr-16 md:justify-end" : "md:pl-16 md:justify-start md:order-last"}
                  `}
                                >
                                    <div className={`w-full max-w-lg bg-[#12000A]/90 backdrop-blur-md border border-[rgba(212,175,55,0.2)] p-8 relative group hover:border-[rgba(212,175,55,0.6)] hover:bg-[#1A0510]/95 transition-all duration-500 shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] rounded-sm
                    ${isLeft ? "border-r-4 border-r-[#D4AF37]" : "border-l-4 border-l-[#D4AF37]"}
                  `}>

                                        {/* Date Badge Top Corner */}
                                        <div className={`absolute -top-3 ${isLeft ? "right-4" : "right-4"} bg-[#0D0005]/90 backdrop-blur px-3 py-1 font-cinzel text-[0.6rem] text-[#D4AF37] uppercase tracking-widest rounded-full border border-[rgba(212,175,55,0.4)] shadow-[0_0_8px_rgba(212,175,55,0.2)]`}>
                                            {exp.date} &middot; {exp.location}
                                        </div>

                                        <h3 className="font-cinzel text-2xl font-bold text-[#F5D87A] tracking-wider mb-1">
                                            {exp.company}
                                        </h3>
                                        <h4 className="font-imFellEnglish italic text-[#D4AF37] mb-6 text-base tracking-wide opacity-90">
                                            {exp.role}
                                        </h4>

                                        <ul className="space-y-4">
                                            {exp.bullets.map((bullet, j) => {
                                                const [prefix, suffix] = bullet.split("→");
                                                return (
                                                    <li key={j} className="flex text-sm text-[#C9B99A]/90 items-start">
                                                        <span className="text-[#D4AF37] mr-3 mt-0.5 shrink-0 opacity-80 text-base">⚡</span>
                                                        <span className="leading-relaxed">
                                                            {prefix.trim()}
                                                            {suffix && (
                                                                <>
                                                                    <span className="mx-2 text-[#7B0D1E] font-bold">→</span>
                                                                    <span className="font-jetbrainsMono text-[0.7rem] bg-[#D4AF37]/10 text-[#F5D87A] px-1.5 py-0.5 rounded border border-[#D4AF37]/20 inline-block mb-1 break-word">
                                                                        {suffix.trim()}
                                                                    </span>
                                                                </>
                                                            )}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                    </div>
                                </motion.div>

                                {/* Empty Space for the other side of the timeline on desktop */}
                                <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:order-last" : "md:order-first"}`}></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
