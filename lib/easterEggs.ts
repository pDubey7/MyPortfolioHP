// lib/easterEggs.ts
"use client";

// 1. Marauders Map
export const openMaraudersMap = () => {
    if (typeof window === "undefined") return;
    if (document.getElementById("marauders-map")) return;

    const overlay = document.createElement("div");
    overlay.id = "marauders-map";
    overlay.className = "fixed inset-0 z-[9999] bg-[#2A1F14] text-[#1A0A00] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 opacity-0";
    overlay.style.backgroundImage = "radial-gradient(ellipse at center, #D2B48C 0%, #8B5A2B 100%)";

    overlay.innerHTML = `
        <div class="relative w-full h-full p-8 max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-20">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-cinzelDecorative mb-12 tracking-widest text-[#1A0A00] border-b-2 border-t-2 border-[#1A0A00] py-6 px-4 md:px-12 opacity-80 mix-blend-color-burn">
                Messrs. Moony, Wormtail, Padfoot & Prongs<br/>
                <span class="text-xl md:text-3xl font-imFellEnglish italic mt-6 block normal-case font-normal">present</span>
                <br/>The Portfolio of Pushpraj
            </h2>
            
            <div class="flex flex-col gap-6 text-xl md:text-2xl font-cinzel tracking-widest font-bold">
                <a href="#about" class="map-link hover:scale-110 hover:text-red-900 transition-all cursor-pointer">↳ The Room of Requirement (About)</a>
                <a href="#skills" class="map-link hover:scale-110 hover:text-red-900 transition-all cursor-pointer">↳ The Library (Spellbook)</a>
                <a href="#projects" class="map-link hover:scale-110 hover:text-red-900 transition-all cursor-pointer">↳ The Trophy Room (Artefacts)</a>
                <a href="#experience" class="map-link hover:scale-110 hover:text-red-900 transition-all cursor-pointer">↳ The Grounds (Quests)</a>
                <a href="#contact" class="map-link hover:scale-110 hover:text-red-900 transition-all cursor-pointer">↳ The Owlery (Post)</a>
            </div>

            <button id="close-map" class="mt-20 px-8 py-3 border-2 border-[#1A0A00] font-cinzel tracking-widest text-[#1A0A00] uppercase font-bold hover:bg-[#1A0A00] hover:text-[#D2B48C] transition-all rounded shadow-md">
                Mischief Managed
            </button>
        </div>
        <div id="footprints-container" class="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply z-10 overflow-hidden"></div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    setTimeout(() => { overlay.style.opacity = "1"; }, 50);

    const footprintContainer = document.getElementById("footprints-container");
    let stepCount = 0;
    const footprintInterval = setInterval(() => {
        if (!footprintContainer) return;
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        const rotation = Math.random() * 360;

        const footprint = document.createElement("div");
        footprint.innerHTML = "🐾";
        footprint.className = `absolute text-2xl md:text-4xl opacity-0 transition-opacity duration-1000 transform-[rotate(${rotation}deg)]`;
        footprint.style.left = `${x}%`;
        footprint.style.top = `${y}%`;

        footprintContainer.appendChild(footprint);

        setTimeout(() => { footprint.style.opacity = "0.8"; }, 100);
        setTimeout(() => { footprint.style.opacity = "0"; }, 3000);
        setTimeout(() => { footprint.remove(); }, 4000);

        stepCount++;
        if (stepCount > 60) clearInterval(footprintInterval);
    }, 600);

    const closeMap = () => {
        clearInterval(footprintInterval);
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = "auto";
        }, 1000);
    };

    document.getElementById("close-map")?.addEventListener("click", closeMap);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeMap();
    });

    const links = overlay.querySelectorAll(".map-link");
    links.forEach(l => l.addEventListener("click", closeMap));
};

// 2. Sorting Hat
export const triggerSortingHat = () => {
    if (document.getElementById("sorting-hat-modal")) return;

    const modal = document.createElement("div");
    modal.id = "sorting-hat-modal";
    modal.className = "fixed inset-0 z-[9999] bg-[#0D0005]/95 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-opacity duration-1000 opacity-0";
    modal.innerHTML = `
        <div class="text-8xl md:text-[150px] mb-12 animate-bounce drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">🎩</div>
        <p class="font-imFellEnglish italic text-2xl md:text-4xl text-[#C9B99A] mb-12 max-w-3xl text-center leading-relaxed">
            "Hmm... Difficult. Very difficult. Plenty of courage, I see. Not a bad mind either. There's talent, oh my goodness, yes... where shall I put you?"
        </p>
        <h1 class="font-cinzelDecorative text-6xl md:text-9xl text-[#D4AF37] font-bold tracking-widest drop-shadow-[0_0_40px_rgba(212,175,55,0.8)] scale-0 transition-transform duration-1000 ease-out" id="house-reveal">
            GRYFFINDOR!
        </h1>
    `;
    document.body.appendChild(modal);

    setTimeout(() => { modal.style.opacity = "1"; }, 50);

    setTimeout(() => {
        const reveal = document.getElementById("house-reveal");
        if (reveal) reveal.style.transform = "scale(1)";
    }, 3500);

    setTimeout(() => {
        modal.style.opacity = "0";
        setTimeout(() => modal.remove(), 1000);
    }, 8000);
};

// 3. Alohomora
export const triggerAlohomora = () => {
    if (document.getElementById("alohomora-toast")) return;

    const toast = document.createElement("div");
    toast.id = "alohomora-toast";
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#1A0A00] px-8 py-4 rounded-md shadow-[0_10px_30px_rgba(212,175,55,0.5)] font-cinzel font-bold text-sm tracking-widest flex items-center gap-4 z-[9999] transform translate-y-20 opacity-0 transition-all duration-500 border-2 border-[#8B7320]";
    toast.innerHTML = "<span class='text-2xl'>🪄</span> Alohomora! — Secret section unlocked.";
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = "translateY(0) translateX(-50%)";
        toast.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        toast.style.transform = "translateY(20px) translateX(-50%)";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 4000);
};

// 4. Golden Snitch
export const spawnGoldenSnitch = () => {
    if (document.getElementById("golden-snitch")) return;
    if (document.getElementById("sorting-hat-modal")) return;
    if (document.getElementById("marauders-map")) return;

    const snitch = document.createElement("div");
    snitch.id = "golden-snitch";
    snitch.className = "fixed z-[9998] w-6 h-6 rounded-full bg-gradient-to-t from-[#8B7320] via-[#D4AF37] to-[#F5D87A] shadow-[0_0_20px_rgba(212,175,55,1)] cursor-pointer drop-shadow-[0_0_15px_rgba(212,175,55,1)] flex items-center justify-center transition-all duration-500 ease-in-out";

    snitch.innerHTML = `
        <div class="absolute -left-8 top-1/2 -translate-y-1/2 w-10 h-3 bg-white/60 rounded-full blur-[2px] animate-pulse origin-right -rotate-[20deg] pointer-events-none"></div>
        <div class="absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-3 bg-white/60 rounded-full blur-[2px] animate-pulse origin-left rotate-[20deg] pointer-events-none"></div>
    `;

    snitch.style.left = "50vw";
    snitch.style.top = "50vh";
    document.body.appendChild(snitch);

    const moveSnitch = () => {
        if (!document.getElementById("golden-snitch")) return;
        const x = Math.random() * 90 + 5;
        const y = Math.random() * 90 + 5;
        snitch.style.left = `${x}vw`;
        snitch.style.top = `${y}vh`;
        setTimeout(moveSnitch, Math.random() * 800 + 400);
    };
    setTimeout(moveSnitch, 100);

    snitch.addEventListener("click", () => {
        snitch.remove();

        const toast = document.createElement("div");
        toast.className = "fixed top-20 left-1/2 -translate-x-1/2 bg-[#7B0D1E] text-[#D4AF37] px-8 py-4 rounded-md shadow-[0_10px_30px_rgba(123,13,30,0.8)] font-cinzel font-bold text-sm tracking-widest flex items-center gap-4 z-[9999] opacity-0 transition-opacity duration-500 border border-[#D4AF37]";
        toast.innerHTML = "<span class='text-2xl'>⚡</span> You caught the Snitch! 150 points to Gryffindor! <span class='text-2xl'>⚡</span>";
        document.body.appendChild(toast);

        setTimeout(() => toast.style.opacity = "1", 50);
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    });
};

// 5. Platform 9 3/4
export const initPlatform934 = () => {
    if (document.getElementById("platform-934")) return;

    const platform = document.createElement("div");
    platform.id = "platform-934";
    platform.className = "fixed right-0 top-[40%] -translate-y-1/2 rotate-180 z-50 py-6 px-1.5 cursor-pointer font-cinzel text-[0.65rem] tracking-[0.3em] text-[#7B0D1E]/40 hover:text-[#D4AF37]/90 hover:bg-[#0D0005]/80 transition-all duration-300 border-l border-transparent hover:border-[#D4AF37]/40 rounded-l hidden md:flex items-center justify-center shadow-[-2px_0_10px_rgba(0,0,0,0.5)]";
    platform.style.writingMode = "vertical-rl";
    platform.innerHTML = "PLATFORM 9 ¾";
    document.body.appendChild(platform);

    platform.addEventListener("click", () => {
        platform.style.color = "#D4AF37";
        platform.style.textShadow = "0 0 15px rgba(212,175,55,1)";
        platform.innerHTML = "🚂 Hogwarts Express — Departing!";

        setTimeout(() => {
            platform.innerHTML = "PLATFORM 9 ¾";
            platform.style.color = "";
            platform.style.textShadow = "";
        }, 4000);
    });
};

// Main initializer
export const initEasterEggs = () => {
    if (typeof window === "undefined") return;

    initPlatform934();

    let buffer = "";
    const konamiCode = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";
    let konamiBuffer: string[] = [];
    let idleTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
        clearTimeout(idleTimer);
        const existing = document.getElementById("golden-snitch");
        if (existing) existing.remove();

        idleTimer = setTimeout(() => {
            spawnGoldenSnitch();
        }, 8000);
    };

    window.addEventListener("keydown", (e) => {
        // Konami (Sorting Hat)
        konamiBuffer.push(e.key);
        if (konamiBuffer.length > 10) konamiBuffer.shift();
        if (konamiBuffer.join(",") === konamiCode) {
            triggerSortingHat();
            konamiBuffer = [];
        }

        // Alohomora
        buffer += e.key.toLowerCase();
        if (buffer.length > 20) buffer = buffer.slice(-20);
        if (buffer.endsWith("alohomora")) {
            triggerAlohomora();
            buffer = "";
        }

        resetIdleTimer();
    });

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("scroll", resetIdleTimer);
    window.addEventListener("click", resetIdleTimer);

    resetIdleTimer();

    console.log("%c ⚡ Welcome to my Magical PortFolio ⚡ ", "background: #7B0D1E; color: #D4AF37; font-size: 20px; font-weight: bold; border-radius: 4px; padding: 4px;");
    console.log("%c -> Type 'alohomora' anywhere.", "color: #F5D87A; font-style: italic;");
    console.log("%c -> Try the Konami Code (↑↑↓↓←→←→BA).", "color: #F5D87A; font-style: italic;");
    console.log("%c -> Catch the Snitch after waiting 8s.", "color: #F5D87A; font-style: italic;");
};
