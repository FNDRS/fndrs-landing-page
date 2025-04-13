import { motion } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface SideMenuProps {
  setIsMenuOpen: (value: boolean) => void
  goToSection: (sectionId: string) => void
}

export const SideMenu: React.FC<SideMenuProps> = ({ setIsMenuOpen, goToSection }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-4/5 max-w-sm  bg-black/90 backdrop-blur-md shadow-md text-white flex flex-col justify-between px-6 py-8 rounded-tr-2xl rounded-br-2xl z-10 h-screen border-white/20 border-2">
        <div className="flex justify-between items-center mb-10">
          <Image src="/fndrs-logo.webp" alt="FNDRS" width={80} height={80} className="h-8 w-auto" />
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 text-lg">
          <button onClick={() => goToSection("home")} className="hover:text-purple-500 transition">
            Home
          </button>
          <button onClick={() => goToSection("services")} className="hover:text-purple-500 transition">
            Services
          </button>
          <button onClick={() => goToSection("about")} className="hover:text-purple-500 transition">
            About Us
          </button>
          <button
            onClick={() => goToSection("contact")}
            className="hover:text-purple-500 transition flex flex-row gap-1 justify-center items-center">
            Contact
            <ArrowUpRight />
          </button>
        </nav>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-gray-400">
          <p className="mb-2">Let&apos;s build something great.</p>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/the.fndrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white">
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-fndrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white">
              LinkedIn
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
    </motion.div>
  )
}

export default SideMenu
