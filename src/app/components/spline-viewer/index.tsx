import Spline from "@splinetool/react-spline"

import React from "react"

export const SplineViewer = () => {
  const SPLINE_VIEWER_URL = process.env.NEXT_PUBLIC_SPLINE_VIEWER_URL

  if (!SPLINE_VIEWER_URL) {
    return <p>Error: No Spline URL provided</p>
  }

  return <Spline scene={SPLINE_VIEWER_URL} className="absolute top-0 left-0 w-full h-full z-0" />
}
