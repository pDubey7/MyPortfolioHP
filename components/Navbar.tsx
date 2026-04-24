"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { openMaraudersMap } from "@/lib/easterEggs";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Spellbook", href: "#skills" },
        { name: "Artefacts", href: "#projects" },
        { name: "Quests", href: "#experience" },
        { name: "Owl Post", href: "#contact" },
    ];

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Stagger variants for desktop nav
    const linkVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut" as const
            }
        })
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-[rgba(13,0,5,0.98)] to-transparent border-b border-[rgba(212,175,55,0.15)]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div
                    onClick={openMaraudersMap}
                    className="cursor-pointer font-cinzelDecorative text-gold text-2xl md:text-3xl tracking-widest text-glow-gold hover:text-gold-light transition-colors z-[101]"
                >
                    P.D.
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={linkVariants}
                            className="font-cinzel text-xs uppercase tracking-[0.15em] text-smoke hover:text-gold hover:text-glow-gold transition-all duration-300"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden z-[101]">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gold focus:outline-none p-2 hover:bg-gold/10 rounded-full transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 w-full h-screen bg-bg/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center pt-20"
                    >
                        <div className="flex flex-col gap-8 items-center text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                                    className="font-cinzel text-lg uppercase tracking-[0.15em] text-smoke hover:text-gold hover:text-glow-gold transition-all duration-300"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Decorative element for mobile menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-16 w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
