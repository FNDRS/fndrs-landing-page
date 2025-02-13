"use client"

import { ArrowRight } from "@/app/components/shared/icons"

import { Menu } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-black text-white">
      <div className="px-16 py-6 flex justify-center lg:justify-between items-center">
        <div className="flex-none">
          <button className="self-start lg:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start">
          <Image src="/fndrs-logo.webp" alt="FNDRS" width={100} height={100} />
        </div>

        <div className="hidden lg:block">
          <ul className="flex flex-row justify-between gap-8">
            <li>
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-gray-400">
                About us
              </a>
            </li>
            <li>
              <a href="#get-in-contact" className="hover:text-gray-400">
                Get in contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#151515] z-50 flex flex-row justify-between w-[440px] p-14 lg:hidden">
          <div className="flex flex-col gap-20">
            <Image src="/fndrs-logo.webp" alt="FNDRS" width={100} height={100} />
            <ul className="flex flex-col gap-8">
              <li>
                <a href="#get-in-contact" className="hover:text-gray-400 text-2xl" onClick={() => setIsMenuOpen(false)}>
                  Get in contact
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400 text-2xl" onClick={() => setIsMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-gray-400 text-2xl" onClick={() => setIsMenuOpen(false)}>
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-white" onClick={() => setIsMenuOpen(false)}>
              <ArrowRight fill="white" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
