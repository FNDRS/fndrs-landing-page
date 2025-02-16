import React from "react"

interface NavLinksProps {
  goToSection?: (index: number) => void
}

export const NavLinks: React.FC<NavLinksProps> = ({ goToSection = () => {} }: NavLinksProps) => {
  return (
    <ul className="flex flex-row justify-between gap-8">
      <li>
        <a className="hover:text-gray-400" onClick={() => goToSection(3)}>
          Services
        </a>
      </li>
      <li>
        <a className="hover:text-gray-400" onClick={() => goToSection(2)}>
          About us
        </a>
      </li>
      <li>
        <a className="hover:text-gray-400" onClick={() => goToSection(4)}>
          Get in contact
        </a>
      </li>
    </ul>
  )
}
