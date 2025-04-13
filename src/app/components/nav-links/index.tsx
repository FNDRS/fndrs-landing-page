import { ArrowUpRight } from "lucide-react"
import React from "react"

interface NavLinksProps {
  goToSection?: (sectionId: string) => void
}

interface LinkItem {
  label: string
  section: string
  withIcon?: boolean
}

const navLinks: LinkItem[] = [
  { label: "Home", section: "home" },
  { label: "Services", section: "services" },
  { label: "About us", section: "about" },
  { label: "Get in contact", section: "contact", withIcon: true }
]

export const NavLinks: React.FC<NavLinksProps> = ({ goToSection = () => {} }) => {
  return (
    <ul className="flex flex-row gap-8">
      {navLinks.map(({ label, section, withIcon }, index) => (
        <li
          key={index}
          className="flex flex-row gap-1 items-center justify-center hover:text-gray-400 cursor-pointer transition-colors duration-300 text-sm">
          <a onClick={() => goToSection(section)}>{label}</a>
          {withIcon && <ArrowUpRight className="pt-[2px] transition-opacity duration-300 hover:opacity-80" />}
        </li>
      ))}
    </ul>
  )
}
