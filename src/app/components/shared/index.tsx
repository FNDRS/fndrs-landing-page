import { SharedIconProps } from "@/app/types"

import React from "react"

import { ArrowDown, GitHub, Instagram, Linkedin } from "./icons"

export const components = {
  arrowDown: ArrowDown,
  instagram: Instagram,
  linkedIn: Linkedin,
  github: GitHub
}

const SharedIcon = ({ kind, onClick, className = "w-6 h-6" }: SharedIconProps) => {
  const SharedSvg = components[kind]

  return (
    <div onClick={onClick} style={{ display: "inline-block", cursor: onClick ? "pointer" : "default" }}>
      <SharedSvg className={className} />
    </div>
  )
}

export default SharedIcon
