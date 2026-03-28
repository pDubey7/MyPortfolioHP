"use client";

import { Send, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => {
            setStatus("sent");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 pb-32">
            <h2 className="font-cinzelDecorative text-4xl text-gold mb-16 flex items-center justify-center gap-4 text-center">
                <Send className="text-crimson w-8 h-8" />
                Send an Owl
            </h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 bg-bg2 border border-gold/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="md:col-span-2 bg-crimson/10 p-8 border-r border-gold/10 flex flex-col justify-between">
                    <div>
                        <h3 className="font-cinzel text-2xl text-gold-light mb-2">Connect via Floo Network</h3>
                        <p className="text-smoke/70 text-sm mb-8">Reach out for collaborations, potions, or just to talk about coding magic.</p>

                        <div className="space-y-6">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-smoke/90 hover:text-gold transition-colors">
                                <Mail className="w-5 h-5 text-crimson-light" />
                                <span className="font-jetbrainsMono text-sm">hello@example.com</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-smoke/90 hover:text-gold transition-colors">
                                <FaLinkedin className="w-5 h-5 text-crimson-light" />
                                <span className="font-cinzel tracking-widest text-sm uppercase">LinkedIn</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-smoke/90 hover:text-gold transition-colors">
                                <FaGithub className="w-5 h-5 text-crimson-light" />
                                <span className="font-cinzel tracking-widest text-sm uppercase">GitHub</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-smoke/90 hover:text-gold transition-colors">
                                <FaTwitter className="w-5 h-5 text-crimson-light" />
                                <span className="font-cinzel tracking-widest text-sm uppercase">Twitter</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 text-xs text-smoke/40 font-jetbrainsMono border-t border-gold/10 pt-4">
                        IIIT Una, CSE 2027<br />
                        Hogwarts: Gryffindor
                    </div>
                </div>

                <div className="md:col-span-3 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-cinzel text-sm text-gold-light mb-2 uppercase tracking-wide">Wizard&apos;s Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-bg3 border border-gold/20 rounded-lg px-4 py-3 text-smoke focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-imFellEnglish text-lg"
                                placeholder="Harry Potter"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-cinzel text-sm text-gold-light mb-2 uppercase tracking-wide">Owl Address (Email)</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-bg3 border border-gold/20 rounded-lg px-4 py-3 text-smoke focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-imFellEnglish text-lg"
                                placeholder="harry@hogwarts.edu"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-cinzel text-sm text-gold-light mb-2 uppercase tracking-wide">Parchment Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                className="w-full bg-bg3 border border-gold/20 rounded-lg px-4 py-3 text-smoke focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-imFellEnglish text-lg resize-none"
                                placeholder="I solemnly swear that I am up to no good..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status !== "idle"}
                            className={`w-full py-4 rounded-lg font-cinzel font-bold text-lg tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${status === "idle" ? "bg-gold text-ink hover:bg-gold-light shadow-[0_0_15px_rgba(212,175,55,0.4)]" :
                                status === "sending" ? "bg-smoke/20 text-smoke cursor-wait" :
                                    "bg-green-800/50 text-green-400 border border-green-500/50"
                                }`}
                        >
                            {status === "idle" && <><Send className="w-5 h-5" /> Dispatch Owl</>}
                            {status === "sending" && "Brewing Spell..."}
                            {status === "sent" && "Magic Dispatched!"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
