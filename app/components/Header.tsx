"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  // 🔹 Fix Auto-Scroll on Load
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" }); // Ensure it stays at the top
    }, 1); // Small delay to override any unwanted scrolls
  }, []);

  // 🔹 Scroll when hovering over an item
  const handleHoverScroll = (href) => {
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset so section isn't hidden under header
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white bg-opacity-100 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-2xl font-bold arial text-[#003366]">
              Nicitum
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className="text-sm uppercase tracking-wider hover:text-[#003366] text-[#003366] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-opacity-30 rounded-md px-2 py-1"
                  onMouseEnter={() => handleHoverScroll(item.href)} // ✅ Scrolls on hover
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white-100 backdrop-blur-md"
          ></motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
