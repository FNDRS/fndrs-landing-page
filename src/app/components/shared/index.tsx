import { SharedIconProps } from "@/app/types"

import React from "react"

import { ArrowDown } from "./icons"

export const components = {
  arrowDown: ArrowDown
}

const SharedIcon = ({ kind, onClick, className }: SharedIconProps) => {
  const SharedSvg = components[kind]

  return (
    <div onClick={onClick} style={{ display: "inline-block", cursor: onClick ? "pointer" : "default" }}>
      <SharedSvg className={className} />
    </div>
  )
}

export default SharedIcon
