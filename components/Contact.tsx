"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, FileText } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const links = [
  { icon: <Mail className="w-5 h-5" />,         label: "rdpushp1@gmail.com",               href: "mailto:rdpushp1@gmail.com" },
  { icon: <FaLinkedin className="w-5 h-5" />,   label: "linkedin.com/in/pushpraj-dubey",   href: "https://www.linkedin.com/in/pushpraj-dubey-02613a28a/" },
  { icon: <FaGithub className="w-5 h-5" />,     label: "github.com/pDubey7",               href: "https://github.com/pDubey7" },
  { icon: <Phone className="w-5 h-5" />,         label: "+91 63885 66297",                  href: "tel:+916388566297" },
];

function FlyingOwl({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="owl"
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: 220, y: -120, opacity: 0, scale: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          className="absolute left-1/2 -top-4 pointer-events-none z-50 text-3xl"
          aria-hidden="true"
        >
          🦉
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [owlSent, setOwlSent] = useState(false);
  const [owlFlying, setOwlFlying] = useState(false);

  const handleSendOwl = () => {
    if (owlFlying || owlSent) return;
    setOwlFlying(true);
    setTimeout(() => {
      setOwlFlying(false);
      setOwlSent(true);
    }, 1300);
    setTimeout(() => setOwlSent(false), 5000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, filter: shouldReduceMotion ? "none" : "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
      className="py-24 px-6 max-w-7xl mx-auto relative z-10 min-h-[80vh] flex flex-col items-center"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-cinzelDecorative text-4xl md:text-5xl mb-4 shimmer-gold"
        >
          The Owl Post
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="font-imFellEnglish italic text-xl text-[#C9B99A]/80 tracking-wide"
        >
          Send a message through the most reliable magical postal service
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="w-full max-w-[650px] relative mt-8"
      >
        {/* Corner ornaments */}
        <div className="absolute -top-2 -left-2  w-8 h-8 border-t-[3px] border-l-[3px] border-[#D4AF37] rounded-tl pointer-events-none drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-[3px] border-r-[3px] border-[#D4AF37] rounded-tr pointer-events-none drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
        <div className="absolute -bottom-2 -left-2  w-8 h-8 border-b-[3px] border-l-[3px] border-[#D4AF37] rounded-bl pointer-events-none drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-[3px] border-r-[3px] border-[#D4AF37] rounded-br pointer-events-none drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" />

        <div className="bg-[#12000A]/80 backdrop-blur-sm border border-[rgba(212,175,55,0.15)] p-8 md:p-12 shadow-[0_0_40px_rgba(212,175,55,0.06)] rounded-sm flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

          {/* Parchment texture lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(212,175,55,0.4) 24px, rgba(212,175,55,0.4) 25px)",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-imFellEnglish italic text-xl text-[#D4AF37]/90 text-center mb-12 max-w-md mx-auto leading-relaxed relative z-10"
          >
            &ldquo;Whether seeking a stout companion for a quest or the finest potion ingredient, your inquiry is welcome.&rdquo;
          </motion.p>

          {/* Contact link rows */}
          <div className="flex flex-col w-full gap-4 mb-12 relative z-10">
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={!shouldReduceMotion ? { x: 4 } : {}}
                className="w-full flex items-center py-4 px-6 border border-[rgba(212,175,55,0.2)] bg-[rgba(13,0,5,0.4)] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.2)] group transition-all duration-300 rounded relative overflow-hidden ripple-container"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <div className="text-[#C9B99A] group-hover:text-[#D4AF37] transition-colors mr-6 shrink-0 drop-shadow-[0_0_3px_rgba(201,185,154,0.5)]">
                  {link.icon}
                </div>
                <span className="font-cinzel text-sm tracking-[0.1em] text-[#C9B99A] group-hover:text-[#D4AF37] transition-colors break-all">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Send Owl button */}
          <div className="relative w-full mb-10 z-10">
            <FlyingOwl active={owlFlying} />
            <motion.button
              onClick={handleSendOwl}
              whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
              disabled={owlFlying}
              className="w-full px-10 py-4 bg-[#7B0D1E] border-2 border-[#D4AF37] text-[#D4AF37] font-cinzel font-bold tracking-widest uppercase rounded hover:bg-[#A91D3A] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 flex items-center justify-center gap-3 ripple-container disabled:opacity-60"
            >
              {owlSent ? (
                <>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-2xl"
                  >
                    ✅
                  </motion.span>
                  <span>Owl Dispatched!</span>
                </>
              ) : (
                <>
                  <motion.span
                    className="text-2xl"
                    animate={!shouldReduceMotion && !owlFlying ? { rotate: [0, -10, 10, -10, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    🦉
                  </motion.span>
                  <span>Send Owl</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Resume download */}
          <motion.a
            href="/PushprajDubeyResume23145.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
            whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
            className="mb-10 px-10 py-4 bg-[#D4AF37] text-[#0D0005] font-cinzel font-bold tracking-widest uppercase rounded hover:bg-[#F5D87A] hover:shadow-[0_0_22px_rgba(212,175,55,0.45)] transition-all duration-300 flex items-center justify-center gap-3 w-full ripple-container relative z-10"
          >
            <FileText className="w-5 h-5" /> Download Resume
          </motion.a>

          <div className="text-center pt-8 border-t border-[rgba(212,175,55,0.15)] w-full relative z-10">
            <p className="font-imFellEnglish italic text-sm text-[#C9B99A]/80 tracking-widest leading-loose">
              Available for internships &middot; Solana projects &middot; Open source <br />
              <span className="font-cinzel uppercase text-[#A91D3A] text-xs font-bold shadow-sm inline-block mt-2">
                Fluent in Typescript (Parseltongue)
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
