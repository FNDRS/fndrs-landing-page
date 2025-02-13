import SharedIcon from "@/app/components/shared"
import { SideMenuSocials } from "@/app/components/side-menu-socials"

import Image from "next/image"
import React from "react"
import { SideMenuList } from "src/app/components/side-menu-list"

interface SideMenuProps {
  setIsMenuOpen: (value: boolean) => void
}

export const SideMenu: React.FC<SideMenuProps> = ({ setIsMenuOpen }) => {
  return (
    <div className="fixed inset-0 bg-[#151515] z-50 flex flex-row justify-between w-[440px] p-14 lg:hidden">
      <div className="flex flex-col gap-20">
        <Image src="/fndrs-logo.webp" alt="FNDRS" width={100} height={100} />
        <SideMenuList setIsMenuOpen={setIsMenuOpen} />
        <SideMenuSocials />
      </div>
      <div>
        <button className="text-white" onClick={() => setIsMenuOpen(false)}>
          <SharedIcon kind="xIcon" />
        </button>
      </div>
    </div>
  )
}
