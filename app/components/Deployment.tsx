"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cloud, Server, Shield } from "lucide-react"

const deploymentFeatures = [
  { icon: Cloud, title: "Cloud Deployment", description: "Seamless deployment to major cloud platforms" },
  { icon: Server, title: "On-Premise Solutions", description: "Secure deployment within your infrastructure" },
  { icon: Shield, title: "Continuous Deployment", description: "Automated, reliable software delivery" },
]

const Deployment = () => {
  return (
    <section id="deployment" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Seamless Deployment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {deploymentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Learn More About Our Deployment Process
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Deployment

