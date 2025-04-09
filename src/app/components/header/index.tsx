import useScrollPosition from "@/app/hooks/use-scroll-position"

import { Menu } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

import { NavLinks } from "../nav-links"
import { SideMenu } from "../side-menu"

interface HeaderProps {
  goToSection?: (sectionId: string) => void
}

export const Header: React.FC<HeaderProps> = ({ goToSection = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const scrolled = useScrollPosition(10)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all text-lg ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-black"
      }`}
      id="header">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="sm:hidden focus:outline-none mr-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center">
            <Image src="/fndrs-logo.webp" alt="FNDRS" width={100} height={200} className="h-6 w-auto" />
            <span className="ml-2 pl-2 text-lg border-l-2 border-gray-100/80 text-gray-100/80">Software Agency</span>
          </div>
        </div>

        <nav className="hidden sm:block">
          <NavLinks goToSection={goToSection} />
        </nav>
      </div>

      {isMenuOpen && <SideMenu setIsMenuOpen={setIsMenuOpen} goToSection={goToSection} />}
    </header>
  )
}

export default Header
