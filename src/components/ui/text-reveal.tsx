"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextReveal = ({
  text,
  className,
  once = false,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!once) {
            setIsInView(false);
          }
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        className={cn(
          "absolute inset-0 z-10 text-clip bg-gradient-to-r from-black to-black dark:from-white dark:to-white",
          isInView
            ? "translate-x-full transition-transform duration-[850ms] ease-in-out"
            : "translate-x-0"
        )}
      ></div>
      <span>{text}</span>
    </div>
  );
}; 