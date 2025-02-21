import React from "react"

interface NavLinksProps {
  goToSection?: (sectionId: string) => void
}

export const NavLinks: React.FC<NavLinksProps> = ({ goToSection = () => {} }: NavLinksProps) => {
  return (
    <ul className="flex flex-row justify-between gap-8">
      <li>
        <a className="hover:text-gray-400 hover:cursor-pointer" onClick={() => goToSection("services")}>
          Services
        </a>
      </li>
      <li>
        <a className="hover:text-gray-400 hover:cursor-pointer" onClick={() => goToSection("about-us")}>
          About us
        </a>
      </li>
      <li>
        <a className="hover:text-gray-400 hover:cursor-pointer" onClick={() => goToSection("contact-us")}>
          Get in contact
        </a>
      </li>
    </ul>
  )
}
