// components/FloatingCandles.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Candle {
    id: number;
    x: number;
    duration: number;
    delay: number;
    scale: number;
}

export default function FloatingCandles() {
    const [candles, setCandles] = useState<Candle[]>([]);
    const shouldReduceMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (shouldReduceMotion || isMobile) return;

        const generateCandle = (id: number): Candle => ({
            id,
            x: Math.random() * 90 + 5,
            duration: Math.random() * 15 + 15,
            delay: Math.random() * 5,
            scale: Math.random() * 0.4 + 0.6,
        });

        const numCandles = Math.floor(Math.random() * 3) + 4;
        const initialCandles = Array.from({ length: numCandles }, (_, i) => generateCandle(i));

        setCandles(initialCandles);

        const interval = setInterval(() => {
            setCandles((prev) => {
                const nextId = Math.max(...prev.map(c => c.id), 0) + 1;
                const newCandle = generateCandle(nextId);
                const keepCount = Math.floor(Math.random() * 3) + 3;
                return [...prev.slice(-keepCount), newCandle];
            });
        }, 8000);

        return () => clearInterval(interval);
    }, [shouldReduceMotion, isMobile]);

    if (shouldReduceMotion || isMobile) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
            <AnimatePresence>
                {candles.map((candle) => (
                    <motion.div
                        key={candle.id}
                        initial={{ y: "110vh", x: `${candle.x}vw`, opacity: 0 }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: candle.duration,
                            ease: "linear",
                            delay: candle.delay,
                            opacity: { times: [0, 0.1, 0.9, 1], duration: candle.duration }
                        }}
                        className="absolute"
                        style={{
                            scale: candle.scale,
                            filter: "drop-shadow(0 0 15px rgba(212, 175, 55, 0.6))"
                        }}
                    >
                        <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C12 0 4 10 4 16C4 20.4183 7.58172 24 12 24C16.4183 24 20 20.4183 20 16C20 10 12 0 12 0Z" fill="#F5D87A">
                                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                            </path>
                            <path d="M12 8C12 8 8 13 8 16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16C16 13 12 8 12 8Z" fill="#D4AF37" />
                            <line x1="12" y1="22" x2="12" y2="28" stroke="#1A0A00" strokeWidth="2" />
                            <rect x="6" y="28" width="12" height="32" rx="2" fill="#F5EDD6" />
                            <path d="M6 32Q9 36 12 32T18 32V28H6V32Z" fill="#E8D5A3" />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
