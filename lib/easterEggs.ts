export const openMaraudersMap = () => {
    if (typeof window === "undefined") return;
    alert("I solemnly swear that I am up to no good!");
    console.log("✧ MARAUDER'S MAP OPENED ✧");
};

export const initEasterEggs = () => {
    if (typeof window === "undefined") return;

    const spells: Record<string, () => void> = {
        "lumos": () => {
            document.documentElement.style.setProperty("--bg", "#f5edd6");
            document.documentElement.style.setProperty("--smoke", "#1a0a00");
            console.log("✧ LUMOS! The darkness has been banished. ✧");
        },
        "nox": () => {
            document.documentElement.style.setProperty("--bg", "#0d0005");
            document.documentElement.style.setProperty("--smoke", "#c9b99a");
            console.log("✦ NOX! The shadows return. ✦");
        },
        "marauder": () => {
            openMaraudersMap();
        }
    };

    let buffer = "";

    window.addEventListener("keydown", (e) => {
        buffer += e.key.toLowerCase();
        if (buffer.length > 20) buffer = buffer.slice(-20);

        for (const spell in spells) {
            if (buffer.endsWith(spell)) {
                spells[spell]();
                buffer = ""; // reset
                break;
            }
        }
    });

    console.log("%c ⚡ Welcome to my Magical PortFolio ⚡ ", "background: #7B0D1E; color: #D4AF37; font-size: 20px; font-weight: bold; border-radius: 4px; padding: 4px;");
    console.log("%c Try typing some spells... (e.g., lumos, nox, marauder) ", "color: #F5D87A; font-style: italic;");
};
