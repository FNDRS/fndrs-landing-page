import { blueParticles, orangeParticles, purpleParticles, redParticles } from "@/app/utils/spline-scenes"

import React, { useState } from "react"

import { SplineViewer } from "../spline-viewer"

interface CardProps {
  cardId: string
  baseColor: string
  splineAnimation: string
  title: string
  description: string
  hoveredCard: string | null
  setHoveredCard: React.Dispatch<React.SetStateAction<string | null>>
  cardScaleClass: ({ cardId }: { cardId: string }) => string
}

const Card = ({ splineAnimation, cardId, baseColor, title, description, setHoveredCard, cardScaleClass }: CardProps) => (
  <div
    onMouseEnter={() => setHoveredCard(cardId)}
    onMouseLeave={() => setHoveredCard(null)}
    className={`${cardScaleClass({ cardId })} transition-transform duration-300 h-full border-2 w-full rounded-4xl relative`}
    style={{ borderColor: baseColor }}>
    <SplineViewer scene={splineAnimation} className="absolute top-0 left-0 w-full h-full rounded-4xl -z-50" />
    <div className="h-full w-full p-8">
      <p className="text-lg w-96">{description}</p>
      <h2 className="font-bold text-3xl mt-4" style={{ color: baseColor }}>
        {title}
      </h2>
    </div>
  </div>
)

export const WhatWeDoCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cardScaleClass = ({ cardId }: { cardId: string }): string => {
    if (!hoveredCard) return "transform scale-100"
    return hoveredCard === cardId ? "transform scale-110" : "transform scale-90"
  }

  const leftCards = [
    {
      cardId: "card1",
      title: "Mobile & Website Design",
      splineAnimation: redParticles,
      baseColor: "#CD0000",
      description:
        "Our Design not only stunning but also function seamlessly across devices, delivering a consistent enjoyable experience."
    },
    {
      cardId: "card2",
      baseColor: "#DF9512",
      splineAnimation: orangeParticles,
      title: "Product Design",
      description: "We breathe life into ideas, creating products that stand out in the digital landscape."
    }
  ]

  const rightCards = [
    {
      cardId: "card4",
      baseColor: "#3557FF",
      splineAnimation: blueParticles,
      title: "Brand & Identity Guideline",
      description: "We create brand guidelines that ensure a consistent and competing presence across all touchpoints."
    },
    {
      cardId: "card3",
      baseColor: "#8A12DF",
      splineAnimation: purpleParticles,
      title: "Website Development",
      description: "Our development team specializes in bringing designs to life with precision and performance."
    }
  ]

  return (
    <div className="md:w-[900px] h-full">
      <div className="flex flex-col md:flex-row w-[900px] mx-auto h-full">
        <div className="flex flex-col items-center justify-center gap-6 p-2 h-full">
          {leftCards.map((card) => (
            <Card
              key={card.cardId}
              {...card}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              cardScaleClass={cardScaleClass}
            />
          ))}
        </div>
        <div className="flex flex-col w-full p-2 gap-4">
          {rightCards.map((card) => (
            <Card
              key={card.cardId}
              {...card}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              cardScaleClass={cardScaleClass}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
