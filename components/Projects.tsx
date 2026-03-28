import { BookOpen, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            title: "Solana Token Launchpad",
            description: "A comprehensive platform for launching SPL tokens on Solana with customizable vesting schedules and liquidity locks.",
            tech: ["Next.js", "Solana", "Anchor", "TypeScript", "Tailwind CSS"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "SeekHer API Backend",
            description: "High-performance matching algorithm backend and robust API architecture scaling to thousands of concurrent users.",
            tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "DeFi Analytics Dashboard",
            description: "Real-time analytics and portfolio tracking for decentralised finance protocols using advanced data aggregations.",
            tech: ["React", "GraphQL", "Web3.js", "Ethers.js"],
            github: "https://github.com",
            demo: "https://demo.com"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <h2 className="font-cinzelDecorative text-4xl text-gold mb-12 flex items-center justify-center gap-4 text-center">
                <BookOpen className="text-crimson w-8 h-8" />
                Magical Artefacts
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <div key={i} className="group relative bg-bg2 rounded-xl border border-gold/20 overflow-hidden hover:border-gold/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="p-6 h-full flex flex-col relative z-10">
                            <h3 className="font-cinzel text-xl font-bold text-gold-light mb-3 tracking-wide">{project.title}</h3>
                            <p className="text-smoke/80 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t, j) => (
                                    <span key={j} className="text-xs font-jetbrainsMono text-smoke/90 bg-bg3 border border-smoke/20 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-gold/10">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-smoke hover:text-gold transition-colors flex items-center gap-2 text-sm font-cinzel tracking-wider">
                                    <FaGithub className="w-4 h-4" /> Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-smoke hover:text-crimson-light transition-colors flex items-center gap-2 text-sm font-cinzel tracking-wider">
                                    <ExternalLink className="w-4 h-4" /> Spell
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
