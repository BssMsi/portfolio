"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleColor,
  particleCount,
  particleDensity,
  speed,
  amplitude,
  frequency,
  glow,
}: {
  id: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleColor?: string;
  particleCount?: number;
  particleDensity?: number;
  speed?: number;
  amplitude?: number;
  frequency?: number;
  glow?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parentElement = canvas.parentElement;
    if (!parentElement) return;

    const computedStyle = window.getComputedStyle(parentElement);
    const canvasWidth = parseInt(computedStyle.width, 10);
    const canvasHeight = parseInt(computedStyle.height, 10);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const particleCountValue = particleCount || Math.min(Math.floor(canvasWidth * (particleDensity || 0.2)), 300);
    const particles: Particle[] = [];

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      originalX: number;
      originalY: number;
    }

    for (let i = 0; i < particleCountValue; i++) {
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      const size = Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1);
      
      particles.push({
        x,
        y,
        size,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        originalX: x,
        originalY: y,
      });
    }

    let animationFrameId: number;
    let frame = 0;

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      particles.forEach((particle) => {
        // Oscillation
        const oscillateX = (amplitude || 1) * Math.sin((frame + particle.originalX) * (frequency || 0.01));
        const oscillateY = (amplitude || 1) * Math.cos((frame + particle.originalY) * (frequency || 0.01));
        
        // Movement
        particle.x += particle.speedX + oscillateX * 0.1;
        particle.y += particle.speedY + oscillateY * 0.1;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvasWidth) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > canvasHeight) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor || "#ffffff";
        ctx.fill();
        
        // Glow effect
        if (glow && glow > 0) {
          ctx.shadowBlur = glow;
          ctx.shadowColor = particleColor || "#ffffff";
        }
      });
      
      frame += speed || 0.1;
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [windowSize, amplitude, background, frequency, glow, maxSize, minSize, particleColor, particleCount, particleDensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn(
        "bg-transparent",
        className
      )}
      style={{
        background: background || "transparent",
      }}
    />
  );
}; 