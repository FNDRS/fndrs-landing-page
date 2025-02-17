import { NavLinks } from "@/app/components/nav-links"
import { SideMenu } from "@/app/components/side-menu"

import { Menu } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

interface HeaderProps {
  goToSection?: (index: number) => void
}

export const Header = ({ goToSection = () => {} }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <header className="bg-black text-white" id="header">
      <div className="px-10 py-6 flex justify-center sm:justify-between items-center">
        <div className="flex-none self-start">
          <button className="self-start sm:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex justify-center sm:justify-start">
          <Image src="/fndrs-logo.webp" alt="FNDRS" width={100} height={100} />
        </div>

        <div className="hidden sm:block">
          <NavLinks goToSection={goToSection} />
        </div>
      </div>

      {isMenuOpen && <SideMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  )
}
