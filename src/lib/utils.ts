import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const portfolioData = {
  about: {
    id: 1,
    title: "Portfolio",
    description: "Portfolio",
  },
};
