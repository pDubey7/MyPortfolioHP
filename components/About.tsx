import { User, Code, Server, Flame } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="absolute inset-0 bg-bg2/50 backdrop-blur-sm border border-gold/10 rounded-2xl shadow-xl -z-10"></div>
            <div className="px-8 py-12">
                <h2 className="font-cinzelDecorative text-4xl text-gold mb-8 flex items-center gap-4">
                    <Flame className="text-crimson w-8 h-8" />
                    The Wizard behind the Code
                </h2>

                <div className="grid md:grid-cols-2 gap-12 text-lg text-smoke/90 leading-relaxed">
                    <div className="space-y-6">
                        <p>
                            Greetings! I am <span className="text-gold font-bold">Pushpraj Dubey</span>, a passionate developer pursuing Computer Science at IIIT Una (Class of 2027).
                        </p>
                        <p>
                            Like a true Gryffindor, I dive headfirst into complex challenges with courage, forging robust backend systems and deploying scalable infrastructure.
                        </p>
                        <p>
                            My journey involves weaving spells in <span className="text-crimson-light font-jetbrainsMono bg-crimson/10 px-2 py-0.5 rounded">Next.js</span>, concocting smart contracts on the <span className="text-gold font-jetbrainsMono bg-gold/10 px-2 py-0.5 rounded">Solana</span> blockchain, and automating deployment pipelines using modern DevOps tools.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="p-4 border border-gold/20 bg-bg3 rounded flex items-start gap-4 hover:border-gold/50 hover:bg-bg2 transition-colors">
                            <Server className="text-gold w-6 h-6 mt-1" />
                            <div>
                                <h3 className="font-cinzel font-bold text-gold-light mb-1">Backend Sorcery</h3>
                                <p className="text-sm">Designing highly-available architectures with Next.js, Express, and distributed databases.</p>
                            </div>
                        </div>
                        <div className="p-4 border border-gold/20 bg-bg3 rounded flex items-start gap-4 hover:border-gold/50 hover:bg-bg2 transition-colors">
                            <Code className="text-gold w-6 h-6 mt-1" />
                            <div>
                                <h3 className="font-cinzel font-bold text-gold-light mb-1">Solana Smart Contracts</h3>
                                <p className="text-sm">Crafting secure and efficient anchor programs for decentralized applications.</p>
                            </div>
                        </div>
                        <div className="p-4 border border-gold/20 bg-bg3 rounded flex items-start gap-4 hover:border-gold/50 hover:bg-bg2 transition-colors">
                            <User className="text-gold w-6 h-6 mt-1" />
                            <div>
                                <h3 className="font-cinzel font-bold text-gold-light mb-1">DevOps Craftsmanship</h3>
                                <p className="text-sm">Streamlining workflows using CI/CD, Docker, and modern orchestration tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
