"use client";
import { motion } from "framer-motion";
import { 
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaSlack,
  FaFigma,
  FaCode,
  FaServer,
  FaCloud,
  FaTerminal,
  FaCodeBranch,
  FaDesktop,
  FaPalette,
  FaTools,
  FaBolt
} from "react-icons/fa";

const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL"],
  frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI", "SASS", "Framer Motion"],
  backend: ["Node.js", "Express.js", "Django", "Spring Boot", "RESTful APIs", "GraphQL"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  devOps: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Git", "GitHub Actions"],
  tools: ["VSCode", "Postman", "Figma", "Jira", "Slack"],
};

const getIcon = (skill: string) => {
  const lowerSkill = skill.toLowerCase();
  
  // Languages
  if (lowerSkill.includes('javascript')) return <FaJs className="inline-block mr-2" />;
  if (lowerSkill.includes('typescript')) return <FaCode className="inline-block mr-2" />;
  if (lowerSkill.includes('python')) return <FaPython className="inline-block mr-2" />;
  if (lowerSkill.includes('java')) return <FaJava className="inline-block mr-2" />;
  if (lowerSkill.includes('html')) return <FaHtml5 className="inline-block mr-2" />;
  if (lowerSkill.includes('css')) return <FaCss3Alt className="inline-block mr-2" />;
  if (lowerSkill.includes('sql')) return <FaDatabase className="inline-block mr-2" />;

  // Frontend
  if (lowerSkill.includes('react')) return <FaReact className="inline-block mr-2" />;
  if (lowerSkill.includes('next.js')) return <FaCode className="inline-block mr-2" />;
  if (lowerSkill.includes('redux')) return <FaCodeBranch className="inline-block mr-2" />;
  if (lowerSkill.includes('tailwind')) return <FaPalette className="inline-block mr-2" />;
  if (lowerSkill.includes('material ui')) return <FaPalette className="inline-block mr-2" />;
  if (lowerSkill.includes('sass')) return <FaPalette className="inline-block mr-2" />;
  if (lowerSkill.includes('framer motion')) return <FaBolt className="inline-block mr-2" />;

  // Backend
  if (lowerSkill.includes('node.js')) return <FaNodeJs className="inline-block mr-2" />;
  if (lowerSkill.includes('express.js')) return <FaNodeJs className="inline-block mr-2" />;
  if (lowerSkill.includes('django')) return <FaPython className="inline-block mr-2" />;
  if (lowerSkill.includes('spring boot')) return <FaJava className="inline-block mr-2" />;
  if (lowerSkill.includes('restful')) return <FaServer className="inline-block mr-2" />;
  if (lowerSkill.includes('graphql')) return <FaCode className="inline-block mr-2" />;

  // Databases
  if (lowerSkill.includes('mongodb')) return <FaDatabase className="inline-block mr-2" />;
  if (lowerSkill.includes('postgresql')) return <FaDatabase className="inline-block mr-2" />;
  if (lowerSkill.includes('mysql')) return <FaDatabase className="inline-block mr-2" />;
  if (lowerSkill.includes('redis')) return <FaDatabase className="inline-block mr-2" />;
  if (lowerSkill.includes('firebase')) return <FaDatabase className="inline-block mr-2" />;

  // DevOps
  if (lowerSkill.includes('docker')) return <FaDocker className="inline-block mr-2" />;
  if (lowerSkill.includes('kubernetes')) return <FaCodeBranch className="inline-block mr-2" />;
  if (lowerSkill.includes('aws')) return <FaAws className="inline-block mr-2" />;
  if (lowerSkill.includes('azure')) return <FaCloud className="inline-block mr-2" />;
  if (lowerSkill.includes('ci/cd')) return <FaCodeBranch className="inline-block mr-2" />;
  if (lowerSkill.includes('git')) return <FaGithub className="inline-block mr-2" />;
  if (lowerSkill.includes('github actions')) return <FaGithub className="inline-block mr-2" />;

  // Tools
  if (lowerSkill.includes('vscode')) return <FaCode className="inline-block mr-2" />;
  if (lowerSkill.includes('postman')) return <FaTools className="inline-block mr-2" />;
  if (lowerSkill.includes('figma')) return <FaFigma className="inline-block mr-2" />;
  if (lowerSkill.includes('jira')) return <FaTools className="inline-block mr-2" />;
  if (lowerSkill.includes('slack')) return <FaSlack className="inline-block mr-2" />;

  return <FaDesktop className="inline-block mr-2" />;
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
            className="px-3 py-1 bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full text-sm transition-colors duration-300 flex items-center"
          >
            {getIcon(skill)}
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