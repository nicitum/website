"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const testingFeatures = [
  "Automated Testing",
  "Performance Testing",
  "Security Testing",
  "User Acceptance Testing",
  "Continuous Integration",
  "Test-Driven Development",
]

const Testing = () => {
  return (
    <section id="testing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Comprehensive Testing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-semibold mb-4">Our Testing Approach</h3>
            <p className="mb-6">
              At Nicitum, we believe in delivering flawless software. Our comprehensive testing methodologies ensure
              that your applications are robust, secure, and perform optimally under various conditions.
            </p>
            <ul className="space-y-2">
              {testingFeatures.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-red-500" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <img src="/placeholder.svg?height=300&width=400" alt="Testing Process" className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testing

