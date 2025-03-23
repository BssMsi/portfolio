"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconMail, IconPhone, IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through the form below or connect with me directly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <IconMail size={24} className="text-blue-400" />
                <a href="mailto:contact@bharathshroff.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  bharathsshroff@yahoo.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <IconPhone size={24} className="text-blue-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.linkedin.com/in/bharathshroff/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#0077B5" }}
                className="text-gray-400 hover:text-blue-500 transition-all duration-300"
              >
                <IconBrandLinkedin size={28} />
              </motion.a>
              
              <motion.a 
                href="https://github.com/bssmsi" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#6e5494" }}
                className="text-gray-400 hover:text-purple-500 transition-all duration-300"
              >
                <IconBrandGithub size={28} />
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/coder_wanderer_yogi/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#1DA1F2" }}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300"
              >
                <IconBrandInstagram size={28} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 