"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your business needs and challenges.",
    details:
      "Our team of experts conducts thorough research and analysis to identify your unique requirements and pain points.",
  },
  {
    title: "Planning",
    description: "Our experts craft a tailored strategy and roadmap for your project.",
    details:
      "We create a comprehensive project plan, including timelines, milestones, and resource allocation to ensure smooth execution.",
  },
  {
    title: "Development",
    description: "We bring your vision to life with cutting-edge technologies and best practices.",
    details:
      "Our skilled developers use agile methodologies and the latest tech stack to build robust, scalable solutions.",
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance ensures a flawless end product.",
    details:
      "We perform extensive testing, including unit tests, integration tests, and user acceptance testing to guarantee high-quality deliverables.",
  },
  {
    title: "Deployment",
    description: "We seamlessly integrate your solution into your existing infrastructure.",
    details: "Our DevOps team ensures smooth deployment with minimal downtime and maximum security.",
  },
  {
    title: "Support",
    description: "Our team provides ongoing maintenance and support to ensure optimal performance.",
    details:
      "We offer 24/7 support, regular updates, and performance monitoring to keep your solution running at peak efficiency.",
  },
]

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-[#003366]"
        >
          Our Proven Process
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#003366]"></div>
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <div className="bg-white rounded-xl p-6 shadow-xl">
                  <h3 className="text-2xl font-bold mb-2 text-[#003366]">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <p className="text-sm text-gray-700">{step.details}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#003366] rounded-full p-2">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

