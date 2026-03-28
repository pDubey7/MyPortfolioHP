import { Scroll, Building2, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            role: "Backend Developer Intern",
            company: "Tech Startup Inc.",
            duration: "May 2025 - Present",
            description: [
                "Architected scalable REST APIs serving over 10k daily active users.",
                "Implemented Redis caching decreasing average load time by 40%.",
                "Configured CI/CD pipelines using GitHub Actions and Docker."
            ]
        },
        {
            role: "Solana Blockchain Developer",
            company: "Web3 Innovation Lab",
            duration: "Jan 2025 - Apr 2025",
            description: [
                "Developed and audited smart contracts using Rust and Anchor.",
                "Integrated Web3.js for seamless DApp wallet connections.",
                "Participated in the Solana Monolith Hackathon achieving top 20."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
            <div className="absolute left-4 md:left-1/2 top-40 bottom-10 w-px bg-gradient-to-b from-gold/50 via-crimson/50 to-transparent -translate-x-1/2"></div>

            <h2 className="font-cinzelDecorative text-4xl text-gold mb-16 flex items-center justify-center gap-4 text-center">
                <Scroll className="text-crimson w-8 h-8" />
                Chronicles of Experience
            </h2>

            <div className="space-y-12">
                {experiences.map((exp, i) => (
                    <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-bg shadow-[0_0_10px_rgba(212,175,55,1)] -translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

                        <div className={`md:w-1/2 flex flex-col ${i % 2 === 0 ? "md:items-start pl-12 md:pl-8" : "md:items-end md:text-right pl-12 md:pl-0 md:pr-8"}`}>
                            <div className="bg-bg2/80 backdrop-blur-sm border border-gold/20 p-6 rounded-xl hover:border-gold/50 transition-colors w-full max-w-lg shadow-lg">
                                <h3 className="font-cinzel text-xl font-bold text-gold-light mb-2">{exp.role}</h3>

                                <div className={`flex items-center gap-2 text-smoke/80 text-sm mb-4 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                                    <Building2 className="w-4 h-4 text-crimson" />
                                    <span className="font-cinzel tracking-wider">{exp.company}</span>
                                    <span className="mx-2 text-gold/30">|</span>
                                    <Calendar className="w-4 h-4 text-crimson" />
                                    <span className="font-jetbrainsMono text-xs">{exp.duration}</span>
                                </div>

                                <ul className={`space-y-2 text-smoke/90 text-sm ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                                    {exp.description.map((desc, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <span className={`text-gold mt-1 ${i % 2 !== 0 ? "md:order-last md:ml-2" : "mr-2"}`}>✧</span>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
