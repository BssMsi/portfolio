"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSubtitle = className?.includes('subtitle');

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-lg p-2",
        className
      )}
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={cn(
            "font-bold text-white",
            isSubtitle ? "text-xl md:text-2xl" : "text-5xl md:text-7xl"
          )}>
            {text}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute top-0 left-0"
        >
          <h3 className={cn(
            "font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",
            isSubtitle ? "text-xl md:text-2xl" : "text-5xl md:text-7xl"
          )}>
            {revealText}
          </h3>
        </motion.div>
      </div>

      {children && (
        <div className="relative z-10 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {children}
          </motion.div>
        </div>
      )}

      <motion.div
        className="absolute inset-0 z-0 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-xl font-bold text-neutral-200", className)}>
      {children}
    </h3>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm text-neutral-400", className)}>
      {children}
    </p>
  );
}; 