"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send } from "lucide-react"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white to-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-[#003366]"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-white text-black border border-[#003366] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-white text-black border border-[#003366] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-bold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full bg-white text-black border border-[#003366] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#003366] to-white hover:from-[#003366]hover:to-white text-white px-6 py-3 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

