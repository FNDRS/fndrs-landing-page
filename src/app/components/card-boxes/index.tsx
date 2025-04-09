import { blueParticles, orangeParticles, purpleParticles, redParticles } from "@/app/utils/spline-scenes"

import React, { useState } from "react"

import { SplineViewer } from "../spline-viewer"

interface CardScaleClassProps {
  cardId: string
}

export const CardBoxes = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cardScaleClass = ({ cardId }: CardScaleClassProps): string => {
    if (!hoveredCard) return "transform scale-100"

    if (hoveredCard === cardId) return "transform scale-110"

    return "transform scale-90"
  }

  return (
    <div className="lg:h-[500px] xl:w-[1000px]">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex flex-col items-center w-full justify-center gap-6 p-2">
          <div
            onMouseEnter={() => setHoveredCard("card1")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card1" })} transition-transform duration-300 border-2 border-[#650208] w-full rounded-4xl p-8 relative h-full`}>
            <SplineViewer scene={redParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <p className="text-lg w-96">
              Our Design not only stunning but also function seamlessly across devices, delivering a consistent enjoyable
              experience.
            </p>
            <h2 className="text-[#CD0000] font-bold text-3xl mt-4">Mobile & Website Design</h2>
          </div>
          <div
            onMouseEnter={() => setHoveredCard("card2")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card2" })} transition-transform duration-300 border-2 border-[#DF9512] w-full rounded-4xl relative p-8 h-full`}>
            <SplineViewer scene={orangeParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <p className="text-lg w-96">We breathe life into ideas, creating products that stand out in the digital landscape.</p>
            <h2 className="text-[#DF9512] font-bold text-3xl mt-4">Product Design</h2>
          </div>
        </div>
        <div className="flex flex-col w-full p-2 gap-4">
          <div
            onMouseEnter={() => setHoveredCard("card4")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card4" })} transition-transform duration-300 border-2 border-[#3557FF] w-full rounded-4xl p-8 relative h-full`}>
            <SplineViewer scene={blueParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <p className="text-lg w-96">
              We create brand guidelines that ensure a consistent and competing presence across all touchpoints.
            </p>
            <h2 className="text-[#3557FF] font-bold text-3xl mt-4">Brand & Identity Guideline</h2>
          </div>
          <div
            onMouseEnter={() => setHoveredCard("card3")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card3" })} transition-transform duration-300 border-2 border-[#8A12DF] w-full rounded-4xl p-8 relative h-full`}>
            <SplineViewer scene={purpleParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <p className="text-lg w-96">
              Our development team specializes in bringing designs to live with precision and performance.
            </p>
            <h2 className="text-[#8A12DF] font-bold text-3xl mt-4">Website Development</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
