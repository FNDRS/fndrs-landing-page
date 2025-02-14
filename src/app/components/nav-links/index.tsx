import React from "react"

export const NavLinks: React.FC = () => {
  return (
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
  )
}
