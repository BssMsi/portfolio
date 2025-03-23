"use client";
import { motion } from "framer-motion";

const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL"],
  frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI", "SASS", "Framer Motion"],
  backend: ["Node.js", "Express.js", "Django", "Spring Boot", "RESTful APIs", "GraphQL"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  devOps: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Git", "GitHub Actions"],
  tools: ["VSCode", "Postman", "Figma", "Jira", "Slack"],
};

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg p-6 border border-gray-700"
    >
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "#4299e1" }}
            className="px-3 py-1 bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full text-sm transition-colors duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory title="Frontend" items={skills.frontend} />
          <SkillCategory title="Backend" items={skills.backend} />
          <SkillCategory title="Databases" items={skills.databases} />
          <SkillCategory title="DevOps" items={skills.devOps} />
          <SkillCategory title="Tools" items={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 