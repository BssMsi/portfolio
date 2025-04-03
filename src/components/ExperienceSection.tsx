"use client";
import { motion } from "framer-motion";
import { IconBriefcase, IconCalendar, IconMapPin } from "@tabler/icons-react";
import { portfolioData } from "@/lib/utils";

const formatDate = (dateString: string | null | undefined) => {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const sortExperiences = (experiences: typeof portfolioData.experiences) => {
  return [...experiences].sort((a, b) => {
    const dateA = a.endDate ? new Date(a.endDate) : new Date();
    const dateB = b.endDate ? new Date(b.endDate) : new Date();
    return dateB.getTime() - dateA.getTime();
  });
};

const ExperienceCard = ({ experience, index }: { experience: typeof portfolioData.experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl hover:shadow-blue-900/20 transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
      <div className="text-blue-400 font-medium mb-4">{experience.company}</div>
      
      <div className="flex items-center gap-2 text-gray-400 mb-2">
        <IconMapPin size={16} />
        <span className="text-sm">{experience.location}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <IconCalendar size={16} />
        <span className="text-sm">{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
      </div>
      
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        {experience.description.map((item, i) => (
          <li key={i} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const sortedExperiences = sortExperiences(portfolioData.experiences);

  return (
    <section id="experience" className="w-full py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <IconBriefcase size={28} className="text-blue-500 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          </div>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 