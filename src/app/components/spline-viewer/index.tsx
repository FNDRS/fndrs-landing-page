import { LoaderIcon } from "lucide-react"
import React, { FC, Suspense } from "react"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

interface SplineViewerProps {
  scene: string
  className?: string
}
export const SplineViewer: FC<SplineViewerProps> = ({ scene, className }) => {
  if (!scene) {
    return <p className="w-full p-10 flex items-center justify-center">Error: No Spline URL provided</p>
  }

  return (
    <>
      <Suspense fallback={<LoaderIcon />}>
        <Spline scene={scene} className={className} />
      </Suspense>
    </>
  )
}
