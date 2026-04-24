import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

function SectionLoader() {
  return <div className="py-32 text-center font-cinzel text-[#D4AF37] animate-pulse tracking-widest text-sm">Summoning Magic...</div>;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 flex flex-col gap-32 overflow-hidden">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </Suspense>
      </div>

      <footer className="w-full text-center pb-24 pt-12 border-t border-[rgba(212,175,55,0.15)] bg-[#0D0005]/80 relative z-20 overflow-hidden">
        <p className="font-imFellEnglish text-[#C9B99A] tracking-wider mb-2">
          Pushpraj Dubey &middot; IIIT Una &middot; CSE 2027 &middot; Crafted with 🪄 and a lot of coffee
        </p>
        <p className="font-jetbrainsMono text-[0.6rem] text-[#C9B99A]/50 uppercase tracking-widest max-w-xl mx-auto leading-loose">
          Easter Eggs: Konami Code &middot; Click the crest &middot; Type alohomora &middot; Idle Snitch &middot; Platform 9¾
        </p>
      </footer>
    </>
  );
}
