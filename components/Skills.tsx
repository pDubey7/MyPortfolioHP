import { Terminal } from "lucide-react";

export default function Skills() {
    const categories = [
        {
            title: "Backend Frameworks",
            skills: ["Node.js", "Express", "NestJS", "Next.js", "GraphQL", "REST APIs"]
        },
        {
            title: "Languages & Core",
            skills: ["TypeScript", "JavaScript", "Rust", "Python", "C++"]
        },
        {
            title: "Databases & Cloud",
            skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Nginx"]
        },
        {
            title: "Web3 & Blockchain",
            skills: ["Solana", "Anchor", "Web3.js", "Smart Contracts"]
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <h2 className="font-cinzelDecorative text-4xl text-gold mb-12 flex items-center justify-center gap-4 text-center">
                <Terminal className="text-crimson w-8 h-8" />
                Grimoire of Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {categories.map((cat, i) => (
                    <div key={i} className="p-6 border border-crimson/30 bg-bg2 rounded-xl hover:shadow-[0_0_20px_rgba(123,13,30,0.2)] hover:border-crimson/60 transition-all">
                        <h3 className="font-cinzel text-xl text-crimson-light mb-4 border-b border-crimson/20 pb-2">{cat.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill, j) => (
                                <span key={j} className="font-jetbrainsMono text-sm px-3 py-1.5 bg-ink border border-gold/40 text-parchment rounded hover:bg-gold/20 hover:text-gold-light cursor-default transition-colors shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
