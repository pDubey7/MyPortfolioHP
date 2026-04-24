"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, FileText } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    const links = [
        { icon: <Mail className="w-5 h-5" />, label: "rdpushp1@gmail.com", href: "mailto:rdpushp1@gmail.com" },
        { icon: <FaLinkedin className="w-5 h-5" />, label: "linkedin.com/in/pushpraj-dubey", href: "https://www.linkedin.com/in/pushpraj-dubey-02613a28a/" },
        { icon: <FaGithub className="w-5 h-5" />, label: "github.com/pDubey7", href: "https://github.com/pDubey7" },
        { icon: <Phone className="w-5 h-5" />, label: "+91 63885 66297", href: "tel:+916388566297" },
    ];

    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative z-10 min-h-[80vh] flex flex-col items-center">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-cinzelDecorative text-4xl md:text-5xl text-[#D4AF37] mb-4 text-glow-gold"
                >
                    The Owl Post
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                    className="font-imFellEnglish italic text-xl text-[#C9B99A]/80 tracking-wide"
                >
                    Send a message through the most reliable magical postal service
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-[650px] relative mt-8"
            >
                {/* Decorative corner ornaments */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-[3px] border-l-[3px] border-[#D4AF37] rounded-tl pointer-events-none drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-[3px] border-r-[3px] border-[#D4AF37] rounded-tr pointer-events-none drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-[3px] border-l-[3px] border-[#D4AF37] rounded-bl pointer-events-none drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-[3px] border-r-[3px] border-[#D4AF37] rounded-br pointer-events-none drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]" />

                <div className="bg-[#12000A]/80 backdrop-blur-sm border border-[rgba(212,175,55,0.15)] p-8 md:p-12 shadow-[0_0_30px_rgba(212,175,55,0.05)] rounded-sm flex flex-col items-center relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

                    <p className="font-imFellEnglish italic text-xl text-[#D4AF37]/90 text-center mb-12 max-w-md mx-auto leading-relaxed">
                        "Whether seeking a stout companion for a quest or the finest potion ingredient, your inquiry is welcome."
                    </p>

                    <div className="flex flex-col w-full gap-4 mb-12">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="w-full flex items-center py-4 px-6 border border-[rgba(212,175,55,0.2)] bg-[rgba(13,0,5,0.4)] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] group transition-all duration-300 rounded relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                                <div className="text-[#C9B99A] group-hover:text-[#D4AF37] transition-colors mr-6 shrink-0 drop-shadow-[0_0_2px_rgba(201,185,154,0.5)]">
                                    {link.icon}
                                </div>
                                <span className="font-cinzel text-sm tracking-[0.1em] text-[#C9B99A] group-hover:text-[#D4AF37] transition-colors break-all">
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </div>

                    <a
                        href="/PushprajDubeyResume23145.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Resume"
                        className="mb-10 px-10 py-4 bg-[#D4AF37] text-[#0D0005] font-cinzel font-bold tracking-widest uppercase rounded hover:bg-[#F5D87A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-3 w-full"
                    >
                        <FileText className="w-5 h-5" /> Download Resume
                    </a>

                    <div className="text-center pt-8 border-t border-[rgba(212,175,55,0.15)] w-full">
                        <p className="font-imFellEnglish italic text-sm text-[#C9B99A]/80 tracking-widest leading-loose">
                            Available for internships &middot; Solana projects &middot; Open source <br />
                            <span className="font-cinzel uppercase text-[#A91D3A] text-xs font-bold shadow-sm inline-block mt-2">Fluent in Typescript (Parseltongue)</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
