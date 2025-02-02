"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect } from 'react';

const Hero = () => {
  const typingEffectRef = useRef(null);



  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <style jsx>{`
        /* Typing animation */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 10ch;
          }
        }

        /* Cursor blink animation */
        @keyframes blink-caret {
          50% {
            border-color: transparent;
          }
        }

        .typing-effect {
          display: inline-block;
          width: auto;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #003366; /* Cursor */
          animation: typing 3s steps(18) 1s 1 normal both, blink-caret 0.75s step-end infinite;
        }

        .text-blue {
          color: #003366;
        }

       
      `}</style>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-[#003366]">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold mb-6 text-blue leading-snug"
          >
            <span className="typing-effect text-blue" ref={typingEffectRef}>
              Build.Thrive! 
            </span>
          </motion.h1>

          <br />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-8 text-blue"
          >
            With over two decades of expertise, we deliver cutting-edge software solutions 
            to propel your business into the future of technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#003366] hover:bg-[#00509e] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50"
            >
              Explore Our Solutions 
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
