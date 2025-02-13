"use client"

import { NavLinks } from "@/app/components/nav-links"
import { SideMenu } from "@/app/components/side-menu"

import { Menu } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-black text-white">
      <div className="px-10 py-6 flex justify-center sm:justify-between items-center">
        <div className="flex-none self-start">
          <button className="self-start lg:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start">
          <Image src="/fndrs-logo.webp" alt="FNDRS" width={100} height={100} />
        </div>

        <div className="hidden lg:block">
          <NavLinks />
        </div>
      </div>

      {isMenuOpen && <SideMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  )
}
