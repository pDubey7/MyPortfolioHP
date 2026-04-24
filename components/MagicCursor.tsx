"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

function spawnBurst(x: number, y: number) {
  const count = 12;
  const colors = ["#F5D87A", "#D4AF37", "#FFE066", "#E8D5A3", "#ffffff"];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    const angle = (i / count) * 360;
    const velocity = Math.random() * 70 + 35;
    const size = Math.random() * 6 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isSquare = Math.random() < 0.35;

    Object.assign(particle.style, {
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: isSquare ? "1px" : "50%",
      background: color,
      boxShadow: `0 0 ${size * 2}px ${color}`,
      pointerEvents: "none",
      zIndex: "99999",
      willChange: "transform, opacity",
    });

    document.body.appendChild(particle);

    const rad = (angle * Math.PI) / 180;
    const tx = Math.cos(rad) * velocity;
    const ty = Math.sin(rad) * velocity;
    const rotation = Math.random() * 360;

    particle
      .animate(
        [
          {
            transform: `translate(-50%, -50%) translate(0px, 0px) rotate(0deg)`,
            opacity: 1,
          },
          {
            transform: `translate(-50%, -50%) translate(${tx}px, ${ty}px) rotate(${rotation}deg)`,
            opacity: 0,
          },
        ],
        { duration: 550 + Math.random() * 250, easing: "ease-out", fill: "forwards" }
      )
      .finished.then(() => particle.remove());
  }
}

function addRipple(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple-wave";
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const maxDim = Math.max(rect.width, rect.height);
  Object.assign(ripple.style, {
    left: `${x}px`,
    top: `${y}px`,
    width: `${maxDim}px`,
    height: `${maxDim}px`,
  });
  target.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

export default function MagicCursor() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleClick = (e: MouseEvent) => {
      spawnBurst(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);

    // Wire ripple to all buttons and anchor tags
    const attachRipples = () => {
      document
        .querySelectorAll<HTMLElement>("button, a[class*='px-'], a[class*='border']")
        .forEach((el) => {
          if (el.dataset.rippleAttached) return;
          el.classList.add("ripple-container");
          el.addEventListener("click", addRipple);
          el.dataset.rippleAttached = "1";
        });
    };

    attachRipples();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachRipples);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("click", handleClick);
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  return null;
}
