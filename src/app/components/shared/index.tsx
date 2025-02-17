import { SharedIconProps } from "@/app/types"
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons"

import { ArrowDown, XIcon } from "lucide-react"
import React from "react"

import { Linkedin } from "./icons"

export const components = {
  arrowDown: ArrowDown,
  instagram: SiInstagram,
  linkedIn: Linkedin,
  github: SiGithub,
  xIcon: XIcon
}

const SharedIcon = ({ kind, onClick, className = "w-6 h-6" }: SharedIconProps) => {
  const SharedSvg = components[kind]

  return (
    <div style={{ display: "inline-block", cursor: onClick ? "pointer" : "default" }}>
      <SharedSvg className={className} />
    </div>
  )
}

export default SharedIcon
