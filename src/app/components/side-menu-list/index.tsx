import React from "react"
import { SideMenuItem } from "src/app/components/side-menu-item"

interface MenuListProps {
  setIsMenuOpen: (value: boolean) => void
  goToSection: (sectionId: string) => void
}

export const SideMenuList: React.FC<MenuListProps> = ({ setIsMenuOpen, goToSection }) => {
  return (
    <ul className="flex flex-col gap-8">
      <SideMenuItem
        href="#get-in-contact"
        onClick={() => {
          setIsMenuOpen(false)
          goToSection("contact-us")
        }}>
        Get in contact
      </SideMenuItem>
      <SideMenuItem
        href="#services"
        onClick={() => {
          setIsMenuOpen(false)
          goToSection("services")
        }}>
        Services
      </SideMenuItem>
      <SideMenuItem
        href="#about-us"
        onClick={() => {
          setIsMenuOpen(false)
          goToSection("about-us")
        }}>
        About us
      </SideMenuItem>
    </ul>
  )
}
