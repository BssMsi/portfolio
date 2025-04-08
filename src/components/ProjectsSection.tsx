"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const ProjectCard = ({ project }: { project: typeof portfolioData.projects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300 h-full flex flex-col w-[350px] md:w-[450px] shrink-0"
    >
      <div className="h-48 w-full bg-gray-700 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-blue-900/20"></div>
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{project.title[0]}</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{project.title[0]}</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700 text-blue-400 rounded-md text-xs">
                {tech}
              </span>
            ))}
          </div>
          
          <a 
            href={project.link} 
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projectCards = portfolioData.projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ));
  
  return (
    <section id="projects" className="w-full py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience in building web applications.
          </p>
        </motion.div>

        <InfiniteMovingCards
          items={projectCards}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
};

export default ProjectsSection; 