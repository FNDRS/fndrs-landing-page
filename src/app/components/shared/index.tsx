import { SharedIconProps } from "@/app/types"

import { ArrowDown, XIcon } from "lucide-react"
import React from "react"

import { GitHub, Instagram, LinkedIn } from "./icons"

export const components = {
  arrowDown: ArrowDown,
  instagram: Instagram,
  linkedIn: LinkedIn,
  github: GitHub,
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
