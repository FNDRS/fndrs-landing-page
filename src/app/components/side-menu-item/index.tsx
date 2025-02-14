import React from "react"

interface MenuItemProps {
  href: string
  onClick: () => void
  children: React.ReactNode
}

export const SideMenuItem: React.FC<MenuItemProps> = ({ href, onClick, children }) => {
  return (
    <li>
      <a href={href} className="hover:text-gray-400 text-2xl" onClick={onClick}>
        {children}
      </a>
    </li>
  )
}
