"use client";

import { useEffect, useRef } from "react";

export default function StarCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        class Star {
            x: number;
            y: number;
            radius: number;
            alpha: number;
            alphaChange: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 1.5;
                this.alpha = Math.random();
                this.alphaChange = (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1);
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 237, 214, ${this.alpha})`; // parchment color
                ctx.fill();
            }

            update() {
                this.alpha += this.alphaChange;
                if (this.alpha <= 0.1 || this.alpha >= 1) {
                    this.alphaChange *= -1;
                }
            }
        }

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            const numStars = 200; // 200 twinkling dots as requested
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const star of stars) {
                star.update();
                star.draw(ctx);
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-60"
        />
    );
}
