import Image from "next/image"
import Link from "next/link"
import React from "react"

import SharedIcon from "../shared"

interface FooterProps {
  goToSection?: (sectionId: string) => void
}

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col sm:items-center">
      <Image src="/fndrs-logo.webp" alt="logo" width={100} height={100} />
      <p className="text-[#bcbcbca9] mt-4">Make the things with excellence.</p>
    </div>
  )
}

interface NavigationProps {
  goToSection: (sectionId: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ goToSection }) => {
  return (
    <ul className="mt-8 flex flex-col sm:flex-row justify-evenly sm:max-w-[400px] sm:mx-auto">
      <li>
        <Link href="#services" legacyBehavior>
          <a className="hover:cursor-pointer" onClick={() => goToSection("services")}>
            Services
          </a>
        </Link>
      </li>
      <li>
        <Link href="mailto:contact@fndrs.com" legacyBehavior>
          <a className="font-bold">contact@fndrs.com</a>
        </Link>
      </li>
      <li>
        <Link href="#about-us" legacyBehavior>
          <a className="hover:cursor-pointer" onClick={() => goToSection("about-us")}>
            About Us
          </a>
        </Link>
      </li>
    </ul>
  )
}

const SocialLinks: React.FC = () => {
  return (
    <ul className="flex flex-row sm:justify-evenly mt-8 sm:max-w-[200px] gap-2 sm:mx-auto">
      <li className="hover:cursor-pointer">
        <Link href="https://www.instagram.com/the.fndrs" legacyBehavior>
          <a target="_blank">
            <SharedIcon kind="instagram" className="h-4 w-[20px] text-white" />
          </a>
        </Link>
      </li>
      <li className="hover:cursor-pointer">
        <Link href="https://www.linkedin.com/company/the-fndrs/" legacyBehavior>
          <a target="_blank">
            <SharedIcon kind="linkedIn" className="h-5 w-[20px] text-white" />
          </a>
        </Link>
      </li>
      <li className="hover:cursor-pointer">
        <Link href="https://www.github.com/fndrs" legacyBehavior>
          <a target="_blank">
            <SharedIcon kind="github" className="h-5 w-[20px] text-white pt-[2px]" />
          </a>
        </Link>
      </li>
    </ul>
  )
}

export const Footer: React.FC<FooterProps> = ({ goToSection = () => {} }) => {
  return (
    <section className="h-[35vh] flex flex-col" id="footer">
      <footer>
        <div className="border-y-[1px] items-center w-full sm:border-none border-[#bcbcbca9] p-8">
          <Logo />
          <Navigation goToSection={goToSection} />
          <SocialLinks />
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-400 p-4">
          <p className="text-center sm:text-left">
            <span className="font-bold">FNDRS</span> © 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
