"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Server, Cloud, Zap } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Custom Development",
    description: "Tailored software solutions crafted to meet your unique business needs and challenges.",
    icon: Code,
    details: ["Agile development methodology", "Cutting-edge tech stack", "Scalable architecture design"],
  },
  {
    title: "Data Management",
    description: "Robust data storage, retrieval, and analysis services for informed decision-making.",
    icon: Database,
    details: ["Big data processing", "Real-time analytics", "Data visualization tools"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure management for optimal performance.",
    icon: Cloud,
    details: ["Multi-cloud strategy", "Serverless architecture", "Continuous integration and deployment"],
  },
  {
    title: "Performance Optimization",
    description: "Streamline your applications and systems for peak efficiency and speed.",
    icon: Zap,
    details: ["Code profiling and optimization", "Database query tuning", "Caching strategies"],
  },
  {
    title: "DevOps & CI/CD",
    description: "Seamless integration and delivery pipelines for rapid, reliable software deployment.",
    icon: Server,
    details: ["Automated build and test processes", "Infrastructure as code", "Monitoring and logging solutions"],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll to the active tab on mobile
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.children[activeTab];
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeTab]);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#003366]"
        >
          Our Comprehensive Services
        </motion.h2>

        {/* Horizontal Scroll Tabs */}
        <div
          ref={scrollRef}
          className="flex md:justify-center overflow-x-auto md:overflow-visible space-x-2 md:space-x-4 pb-2 md:pb-0 scrollbar-hide"
        >
          {services.map((service, index) => (
            <motion.button
              key={service.title}
              className={`px-4 py-2 whitespace-nowrap rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeTab === index ? "bg-[#003366] text-white" : "bg-[#39648D] text-white"
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 md:p-8 shadow-xl mt-6"
          >
            <div className="flex items-center mb-4">
              {React.createElement(services[activeTab].icon, {
                className: "w-6 h-6 md:w-8 md:h-8 mr-3 text-[#003366]",
              })}
              <h3 className="text-lg md:text-2xl font-bold text-[#003366]">
                {services[activeTab].title}
              </h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base mb-4">{services[activeTab].description}</p>
            <ul className="space-y-2 text-sm md:text-base">
              {services[activeTab].details.map((detail, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#003366] rounded-full mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
