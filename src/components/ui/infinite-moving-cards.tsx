"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current || !sectionRef.current) return;

    // Calculate the total width of all items
    const items = Array.from(scrollerRef.current.children);
    const totalWidth = items.reduce((acc, item) => acc + item.getBoundingClientRect().width, 0);
    
    // Set the container width to match the total width of items
    scrollerRef.current.style.width = `${totalWidth}px`;

    // Calculate the center offset
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const firstItemWidth = items[0].getBoundingClientRect().width;
    const centerOffset = (containerWidth - firstItemWidth) / 2;

    // Set initial position to center the first card
    gsap.set(scrollerRef.current, {
      x: centerOffset
    });

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%", // Adjust this value to control how long the horizontal scroll lasts
        pin: true, // Pins the section while scrolling
        scrub: 1, // Smooth scrolling effect
        anticipatePin: 1,
        onLeave: () => {
          // Optional: Add any cleanup or transition effects when leaving the section
        },
      },
    });

    // Animate the cards container
    tl.to(scrollerRef.current, {
      x: direction === "left" ? -(totalWidth - containerWidth + centerOffset) : centerOffset,
      ease: "none",
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction]);

  return (
    <div 
      ref={sectionRef}
      className={cn("relative h-screen w-full overflow-hidden", className)}
    >
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li key={idx} className="relative shrink-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 