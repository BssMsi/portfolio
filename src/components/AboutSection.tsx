"use client";
import { Meteors } from "@/components/ui/meteors";
import { portfolioData } from "@/lib/utils";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 relative overflow-hidden">
              <Meteors number={15} className="opacity-80" />
              <h3 className="text-2xl font-semibold text-white mb-4">My Career Experience</h3>
              <p className="text-gray-300 mb-4">
              Results-driven professional with 5+ years of experience in AI/ML, Data Science and Engineering consistently leveraging cutting-edge technologies to drive innovation. Proven expertise in deploying scalable ML pipelines/solutions to Production and delivering actionable insights for global stakeholders.<br /><br />
              I'm a passionate about Full Stack Development as well having over 1 years of experience in building web applications. I enjoy turning ideas into reality through innovative solutions and user-friendly experiences.
              </p>
              <p className="text-gray-300">
                With a keen eye for detail and a commitment to writing clean, maintainable and scalable code, I strive to create applications that are not only functional but also intuitive and enjoyable to use and have a data-driven approach providing direct impact on business decisions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-300">Bachelor of Technology in Mechanical Engineering</p>
              <p className="text-blue-400">Indian Institute of Technology, Hyderabad</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {Object.values(portfolioData.skills).map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Personal</h3>
              <p className="text-gray-300">
                When I'm not coding, you can find me travelling, playing football or Table Tennis or Badminton, doing yoga and meditation, volunteering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 