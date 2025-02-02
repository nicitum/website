"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Package, Zap, BarChart, Cloud } from "lucide-react"

const products = [
  {
    title: "Nicitum Suite",
    description: "A comprehensive software suite for full-stack development, web, and mobile development.",
    icon: Package,
    features: ["Integrated Modules", "Real-time Analytics", "Customizable Workflows"],
  },
  {
    title: "Nicitum Insight",
    description: "A business intelligence tool that helps analyze data, derive insights, and make data-driven decisions.",
    icon: BarChart,
    features: ["Advanced Analytics", "Predictive Modeling", "Interactive Dashboards"],
  },
  {
    title: "Nicitum Cloud",
    description: "Scalable cloud solutions for seamless deployment, infrastructure, and storage.",
    icon: Cloud,
    features: ["Scalable Infrastructure", "Cloud Storage", "Seamless Deployment"],
  },
]

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group perspective"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${isHovered ? "shadow-2xl" : ""}`}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: isHovered ? 10 : 0,
          rotateX: isHovered ? -10 : 0,
        }}
      >
        <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-[#003366]">
          <product.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-[#003366]">{product.title}</h3>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-[#003366] rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-[#003366]"
        >
          Our Innovative Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col min-h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
