"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "/projects/ecommerce.jpg",
    link: "#",
    featured: true,
  },
  {
    title: "Project Management Tool",
    description: "A collaborative project management application with real-time updates and task tracking features.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
    image: "/projects/project-management.jpg",
    link: "#",
    featured: true,
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking engagement across multiple social media platforms.",
    technologies: ["React", "Chart.js", "Material UI", "Social Media APIs"],
    image: "/projects/social-dashboard.jpg",
    link: "#",
    featured: false,
  },
  {
    title: "Weather Application",
    description: "A responsive weather application providing real-time forecasts and location-based weather data.",
    technologies: ["JavaScript", "OpenWeather API", "Geolocation API", "CSS3"],
    image: "/projects/weather-app.jpg",
    link: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills, experience, and projects.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    image: "/projects/portfolio.jpg",
    link: "#",
    featured: false,
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300 h-full flex flex-col"
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
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);
  
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {!showAll && projects.length > displayedProjects.length && (
          <div className="mt-12 text-center">
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              View All Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 