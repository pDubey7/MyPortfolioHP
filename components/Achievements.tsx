import { Trophy, Award } from "lucide-react";

export default function Achievements() {
    const achievements = [
        {
            title: "Solana Monolith Hackathon Finalist",
            date: "March 2026",
            description: "Ranked among top 20 teams out of 500+ global participants for an innovative DeFi staking protocol built on Solana."
        },
        {
            title: "Smart India Hackathon 2025 Winner",
            date: "December 2025",
            description: "Led the backend development team to secure 1st place for designing a secure cloud-based data tracking system."
        },
        {
            title: "Open Source Contributor",
            date: "Ongoing",
            description: "Active contributor to popular web3 libraries and Node.js frameworks with multiple merged PRs."
        }
    ];

    return (
        <section id="achievements" className="py-20">
            <h2 className="font-cinzelDecorative text-4xl text-gold mb-16 flex items-center justify-center gap-4 text-center">
                <Trophy className="text-crimson w-8 h-8" />
                Trophies & Glory
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((item, i) => (
                    <div key={i} className="bg-bg2 border border-gold/10 p-6 rounded-xl hover:bg-bg3 hover:border-gold/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Award className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="font-cinzel text-lg font-bold text-gold-light mb-2">{item.title}</h3>
                        <div className="font-jetbrainsMono text-xs text-crimson-light mb-4">{item.date}</div>
                        <p className="text-smoke/80 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
