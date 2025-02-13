import { Instagram, Linkedin } from "@/app/components/shared/icons"

import React from "react"
import { SideMenuItem } from "src/app/components/side-menu-item"

interface MenuListProps {
  setIsMenuOpen: (value: boolean) => void
}

export const SideMenuList: React.FC<MenuListProps> = ({ setIsMenuOpen }) => {
  return (
    <ul className="flex flex-col gap-8">
      <SideMenuItem href="#get-in-contact" onClick={() => setIsMenuOpen(false)}>
        Get in contact
      </SideMenuItem>
      <SideMenuItem href="#services" onClick={() => setIsMenuOpen(false)}>
        Services
      </SideMenuItem>
      <SideMenuItem href="#about-us" onClick={() => setIsMenuOpen(false)}>
        About us
      </SideMenuItem>
      <li>
        <Instagram />
      </li>
      <li>
        <Linkedin />
      </li>
    </ul>
  )
}
