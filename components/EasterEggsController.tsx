"use client";

import { useEffect } from "react";
import { initEasterEggs } from "@/lib/easterEggs";

export default function EasterEggsController() {
    useEffect(() => {
        initEasterEggs();
    }, []);

    return null;
}
