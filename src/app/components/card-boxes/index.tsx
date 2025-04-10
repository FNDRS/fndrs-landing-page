import React, { useState } from "react"

interface CardProps {
  cardId: string
  rounded: string
  border: string
  title: string
  textColor: string
  description: string
  hoveredCard: string | null
  setHoveredCard: React.Dispatch<React.SetStateAction<string | null>>
  cardScaleClass: ({ cardId }: { cardId: string }) => string
}

const Card = ({ cardId, rounded, border, title, textColor, description, setHoveredCard, cardScaleClass }: CardProps) => (
  <div
    onMouseEnter={() => setHoveredCard(cardId)}
    onMouseLeave={() => setHoveredCard(null)}
    className={`${cardScaleClass({ cardId })} transition-transform duration-300 border-2 ${border} w-full ${rounded} p-8 relative h-full`}>
    <p className="text-lg w-96">{description}</p>
    <h2 className="font-bold text-3xl mt-4" style={{ color: textColor }}>
      {title}
    </h2>
  </div>
)

export const CardBoxes = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cardScaleClass = ({ cardId }: { cardId: string }): string => {
    if (!hoveredCard) return "transform scale-100"
    return hoveredCard === cardId ? "transform scale-110" : "transform scale-90"
  }

  const leftCards = [
    {
      cardId: "card1",
      rounded: "rounded-2xl",
      border: "border-[#650208]",
      title: "Mobile & Website Design",
      textColor: "#CD0000",
      description:
        "Our Design not only stunning but also function seamlessly across devices, delivering a consistent enjoyable experience."
    },
    {
      cardId: "card2",
      rounded: "rounded-4xl",
      border: "border-[#DF9512]",
      title: "Product Design",
      textColor: "#DF9512",
      description: "We breathe life into ideas, creating products that stand out in the digital landscape."
    }
  ]

  const rightCards = [
    {
      cardId: "card4",
      rounded: "rounded-4xl",
      border: "border-[#3557FF]",
      title: "Brand & Identity Guideline",
      textColor: "#3557FF",
      description: "We create brand guidelines that ensure a consistent and competing presence across all touchpoints."
    },
    {
      cardId: "card3",
      rounded: "rounded-4xl",
      border: "border-[#8A12DF]",
      title: "Website Development",
      textColor: "#8A12DF",
      description: "Our development team specializes in bringing designs to life with precision and performance."
    }
  ]

  return (
    <div className="lg:h-[500px] md:w-[900px]">
      <div className="flex flex-col md:flex-row h-full w-[900px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 p-2">
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
