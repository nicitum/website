"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    content:
      "Nicitum has transformed our business operations. Their innovative solutions have significantly improved our efficiency and productivity.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateTech",
    content:
      "The level of expertise and professionalism at Nicitum is unmatched. They delivered a complex project on time and exceeded our expectations.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mike Johnson",
    position: "Founder, StartupX",
    content:
      "Choosing Nicitum was the best decision for our startup. Their tailored solutions and support have been crucial to our rapid growth.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-red-950 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-red-500"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-red-950 rounded-xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-400">{testimonials[currentIndex].position}</p>
              </div>
            </div>
            <p className="text-lg italic text-gray-300">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-red-950 rounded-full p-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-red-950 rounded-full p-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

