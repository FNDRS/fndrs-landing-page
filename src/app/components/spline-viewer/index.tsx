import Spline from "@splinetool/react-spline"

import React, { FC } from "react"

interface SplineViewerProps {
  scene: string
  className?: string
}
export const SplineViewer: FC<SplineViewerProps> = ({ scene, className }) => {
  if (!scene) {
    return <p className="w-full p-10 flex items-center justify-center">Error: No Spline URL provided</p>
  }

  return <Spline scene={scene} className={className} />
}
