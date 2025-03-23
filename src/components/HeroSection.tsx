"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#FFFFFF"
          particleDensity={100}
          speed={0.5}
          className="w-full h-full"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center z-10 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image 
            src="/profile.png" 
            alt="Bharath Shroff" 
            width={150} 
            height={150} 
            className="rounded-full border-4 border-white"
          />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-4">
            <TextRevealCard
              text="Bharath Shroff"
              revealText="Bharath Shroff"
              className="bg-transparent border-none p-0 hover:bg-transparent"
            >
              <div className="mt-2">
                <p className="text-sm text-neutral-300">Jack of All Trades, Master of Some</p>
              </div>
            </TextRevealCard>
          </div>
          
          <div className="mb-6">
            <TextRevealCard
              text="AI Engineer | Data Scientist"
              revealText="Full Stack Developer"
              className="bg-transparent border-none p-0 hover:bg-transparent subtitle"
            />
          </div>
          
          <div className="flex gap-4 mt-8">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black font-semibold rounded-full"
            >
              About Me
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full"
            >
              Contact
            </motion.a>
            <motion.a
              href="/Resume_BharathShroff.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 