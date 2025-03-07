import { blueParticles, orangeParticles, purpleParticles, redParticles } from "@/app/utils/spline-scenes"

import React, { useState } from "react"

import { SplineViewer } from "../spline-viewer"

export const CardBoxes = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  interface CardScaleClassProps {
    cardId: string
  }

  const cardScaleClass = ({ cardId }: CardScaleClassProps): string => {
    if (!hoveredCard) return "transform scale-100"

    if (hoveredCard === cardId) return "transform scale-110"

    return "transform scale-90"
  }

  return (
    <div className="lg:h-[600px] xl:w-[1200px]">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex flex-col pt-12 pb-2 items-center w-full justify-center gap-4">
          <div
            onMouseEnter={() => setHoveredCard("card1")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card1" })} transition-transform duration-300 border-2 border-[#650208] h-fit max-w-[444px] lg:max-w-full xl:w-[850p] lg:h-[460px] rounded-[35px] p-[2rem] relative`}>
            <SplineViewer scene={redParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <p className="max-w-[500px]">
              Smart solutions, fluid performance. We craft intuitive and scalable software that empowers businesses to grow and
              innovate effortlessly.
            </p>
            <h1 className="text-[#CD0000] font-bold text-[40px] mt-8">Software Development</h1>
          </div>
          <div
            onMouseEnter={() => setHoveredCard("card2")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card2" })} transition-transform duration-300 border-2 border-[#DF9512] max-w-[444px] h-fit lg:w-[500px] lg:h-[140px] rounded-[35px] p-4 relative`}>
            <SplineViewer scene={orangeParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <h1 className="text-[#DF9512] font-bold text-xl">Branding & Identity</h1>
            <p>
              More than a logo—branding is an experience. We shape identities that resonate, strategies that leave a lasting
              impression.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full p-2 gap-4">
          <div
            onMouseEnter={() => setHoveredCard("card3")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card3" })} transition-transform duration-300 border-2 border-[#8A12DF] max-w-[444px] h-fit lg:h-[194px] rounded-[35px] p-6 relative`}>
            <SplineViewer scene={purpleParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <p>Storytelling with purpose. We create content that connects and drives impact.</p>
            <h1 className="text-[#8A12DF] font-bold text-lg mt-4">Content Strategy</h1>
          </div>
          <div
            onMouseEnter={() => setHoveredCard("card4")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${cardScaleClass({ cardId: "card4" })} transition-transform duration-300 border-2 border-[#3557FF] max-w-[444px] h-fit lg:h-[404px] rounded-[35px] p-4 relative`}>
            <SplineViewer scene={blueParticles} className="absolute top-0 left-0 w-full h-full -z-10" />
            <h1 className="text-[#3557FF] font-bold text-lg mb-4">Web Development</h1>
            <p>
              Elevating brands through high-performance websites. From sleek designs to robust functionality, we craft digital
              experiences that captivate and convert.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
